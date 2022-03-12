from random import sample
from flask import Flask, make_response, jsonify, request, redirect, render_template
import requests
import json
import os

from module.mqopen import get_channel
from config import SP_CID, SP_SECRETE
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

import sqlite3
dbpath = '/app/usr/src/flask_app/db.db'

# 음악검색api설정
client_credentials_manager = SpotifyClientCredentials(client_id=SP_CID, client_secret=SP_SECRETE)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

server = Flask(__name__)

queue_name = 'mqt01'
connection ,channel = get_channel(queue_name)
connection.close()

def send_to_mq(musicid, title, musician, work_type, queue_name):
	body = {'musicid':musicid,'title':title, 'musician':musician, 'work_type':work_type }
	connection, channel = get_channel(queue_name)
	channel.basic_publish(exchange='',routing_key=queue_name,body=json.dumps(body))
	connection.close()


@server.route('/api/hi', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        return 'The model is up and running. Send a POST request'


@server.route('/api/oauth', methods=['GET', 'POST'])
def oauth():
    # res = request.get_json()
    authinfo = request.form['authinfo']
    userinfo = request.form['userinfo']
    authinfo = json.loads(authinfo)
    userinfo = json.loads(userinfo)
    userid = userinfo['id']

    with sqlite3.connect(dbpath,check_same_thread=False) as conn :
        c = conn.cursor()
        c.execute(f"select * from users where userid='{userid}';")
        dbdata = c.fetchall()
        c.close()
    if len(dbdata) > 0:
        with sqlite3.connect(dbpath,check_same_thread=False) as conn :
            c = conn.cursor()
            c.execute(f"select * from music where userid='{userid}';")
            listdata = c.fetchall()
            c.close()
    else:
        with sqlite3.connect(dbpath,check_same_thread=False) as conn :
            c = conn.cursor()
            c.execute(f"insert into users values ('{userid}', '{authinfo['access_token']}');")
            dbdata = c.fetchall()
            c.close()
    playlist = []
    for x in listdata():
        musicid = x[0][0]
        state = x[0][5]
        lyrics = x[0][3]
        category = x[0][4]
        lyrics = lyrics.split('\n')
        musicInfo = {
                'musicid':musicid,
                'state' : state,
                'lyrics' : lyrics,
                'category' : category,
            }
        playlist.append(musicInfo)

    data = {
        'access_token':authinfo['access_token'],
        'playlist' : playlist
    }
    return jsonify(data)


@server.route('/api/add-music', methods=['POST'])
def add_music():
    title = request.form['title']
    musician = request.form['musician']

    # 제목과 가수로 db조회
    conn = sqlite3.connect("db.db")	
    c = conn.cursor()
    c.execute(f"select * from music where title='{title}' and musician='{musician}'")
    dbdata = c.fetchall()
    if len(dbdata) > 0:
        musicid = dbdata[0][0]
        state = dbdata[0][5]
        lyrics = dbdata[0][3]
        category = dbdata[0][4]
        lyrics = lyrics.split('\n')
        musicInfo = {
            'musicid':musicid,
            'state' : state,
            'lyrics' : lyrics,
            'category' : category,
        }
        if state == 3:
            send_to_mq(musicid, title, musician, 'analysis',  'mqt01')
    else:
        c = conn.cursor()
        c.execute(f"insert into music (title, musician) values ('{title}', '{musician}')")
        conn.commit()
        c.execute(f"select id from music where title='{title}' and musician='{musician}'")
        dbdata = c.fetchall()
        musicid = dbdata[0][0]

        send_to_mq(musicid, title, musician, 'analysis',  'mqt01')
        musicInfo = {
            'musicid':musicid,
            'state' : 0,
            'lyrics' : '',
            'category' : '',
        }
    conn.close()

    data = { 'musicInfo' : musicInfo }
    api_res = jsonify(data)
    api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@server.route('/api/find', methods=['POST'])
def tmp():
    keyword = request.form['keyword']
    result = sp.search(keyword, limit=10)

    slist = []
    for i in range(10):
        ele = {
            'title' : result['tracks']['items'][i]['name'],
            'albumImage' : result['tracks']['items'][i]['album']['images'][1]['url'],
            'musician' : result['tracks']['items'][i]['artists'][0]['name'],
            # 'category' : 'sadness',
            'audio' : result['tracks']['items'][i]['preview_url']
        }
        slist.append(ele)


    data = { 'searchlist': slist }
    api_res = jsonify(data)
    # api_res.headers['Access-Control-Allow-Origin'] = '*'
    return api_res


@server.route('/api/analysis/<idx>', methods=['GET', 'POST'])
def tmpp(idx):
    res = request.get_json()
    conn = sqlite3.connect("db.db")	
	c = conn.cursor()
	c.execute(f"select status from music where id='{idx}'")
	dbdata = c.fetchall()

    data = {'state' : dbdata[0][0] }
    api_res = jsonify(data)
    return api_res


@server.route('/api/save-room', methods=['POST'])
def save_room():
    elements = request.form['elements']
    with sqlite3.connect(dbpath,check_same_thread=False) as conn :
        c = conn.cursor()
        c.execute(f"insert into room values ('{elements}');")
        conn.commit()
        c.close()
    data = {'saved' : "yes" }
    api_res = jsonify(data)
    return api_res
