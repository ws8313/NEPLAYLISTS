from flask import Flask, jsonify, request,Response, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import config
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = config.alchemy_uri()
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy()

# class Post(db.Model):
# 	id = db.Column(db.Integer, primary_key=True)
# 	content = db.Column(db.Text, nullable=False)
# 	author_email = db.Column(db.String(100), nullable=False)
# 	created_time = db.Column(db.DateTime, nullable=False, default=datetime.now)

# db.init_app(app)


@app.route('/hi',methods=['GET'])
def hello():
	data = {'hi' : 'Hello elice'}
	api_res = jsonify(data)
	api_res.headers['Access-Control-Allow-Origin'] = '*'
	return api_res


@app.route('/post/<int:id>', methods=['GET'])
def get_post(id):
	post = Post.query.get(id)
	if not post:
		return abort(404)

	return jsonify({
		'content': post.content,
		'author_email': post.author_email,
		'created_time': post.created_time,
	})


@app.route('/user-info', methods=['POST','GET'])
def get_userinfo():
	playlist = [{
		'title':'music1',
		'image': 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/memories-album.jpg',
		'musician' : 'mtest',
		'lyrics' : """ 
			Here's to the ones that we got
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through
			Toast to the ones here today
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories
			And the memories bring back, memories bring back you
			There's a time that I remember, when I did not know no pain
			When I believed in forever, and everything would stay the same
			Now my heart feel like December when somebody say your name
			'Cause I can't reach out to call you, but I know I will one day, yeah
			Everybody hurts sometimes
			Everybody hurts someday, ayy ayy
			But everything gon' be alright
			Go and raise a glass and say, ayy
			Here's to the ones that we got
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through
			Toast to the ones here today
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories
			And the memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo
			Memories bring back, memories bring back you
			There's a time that I remember when I never felt so lost
			When I felt all of the hatred was too powerful to stop (ooh, yeah)
			Now my heart feel like an ember and it's lighting up the dark
			I'll carry these torches for ya that you know I'll never drop, yeah
			Everybody hurts sometimes
			Everybody hurts someday, ayy ayy
			But everything gon' be alright
			Go and raise a glass and say, ayy
			Here's to the ones that we got (oh)
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through (no, no)
			Toast to the ones here today (ayy)
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories (ayy)
			And the memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo
			Memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo (ooh, yeah)
			Memories bring back, memories bring back you
			Yeah, yeah, yeah
			Yeah, yeah, yeah, yeah, yeah, doh, doh
			Memories bring back, memories bring back you
		""",
		'bgimg' : 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/bg-love.jpg',
		'category' : 'love',
		'elements' : [{
			'id' : '1',
			'category' : 'love',
			'coordinate' : [0,0]
		},
		{
			'id' : '2',
			'category' : 'love',
			'coordinate' : [10,10]
		},
		{
			'id' : '3',
			'category' : 'love',
			'coordinate' : [20,20]
		}
		]
	},
	{
		'title':'music1',
		'image': 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/memories-album.jpg',
		'musician' : 'mtest',
		'lyrics' : """ 
			Here's to the ones that we got
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through
			Toast to the ones here today
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories
			And the memories bring back, memories bring back you
			There's a time that I remember, when I did not know no pain
			When I believed in forever, and everything would stay the same
			Now my heart feel like December when somebody say your name
			'Cause I can't reach out to call you, but I know I will one day, yeah
			Everybody hurts sometimes
			Everybody hurts someday, ayy ayy
			But everything gon' be alright
			Go and raise a glass and say, ayy
			Here's to the ones that we got
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through
			Toast to the ones here today
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories
			And the memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo
			Memories bring back, memories bring back you
			There's a time that I remember when I never felt so lost
			When I felt all of the hatred was too powerful to stop (ooh, yeah)
			Now my heart feel like an ember and it's lighting up the dark
			I'll carry these torches for ya that you know I'll never drop, yeah
			Everybody hurts sometimes
			Everybody hurts someday, ayy ayy
			But everything gon' be alright
			Go and raise a glass and say, ayy
			Here's to the ones that we got (oh)
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through (no, no)
			Toast to the ones here today (ayy)
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories (ayy)
			And the memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo
			Memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo (ooh, yeah)
			Memories bring back, memories bring back you
			Yeah, yeah, yeah
			Yeah, yeah, yeah, yeah, yeah, doh, doh
			Memories bring back, memories bring back you
		""",
		'bgimg' : 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/bg-love.jpg',
		'category' : 'love',
		'elements' : [{
			'id' : '1',
			'category' : 'love',
			'coordinate' : [0,0]
		},
		{
			'id' : '2',
			'category' : 'love',
			'coordinate' : [10,10]
		},
		{
			'id' : '3',
			'category' : 'love',
			'coordinate' : [20,20]
		}
		]
	},
	{
		'title':'music1',
		'image': 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/memories-album.jpg',
		'musician' : 'mtest',
		'lyrics' : """ 
			Here's to the ones that we got
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through
			Toast to the ones here today
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories
			And the memories bring back, memories bring back you
			There's a time that I remember, when I did not know no pain
			When I believed in forever, and everything would stay the same
			Now my heart feel like December when somebody say your name
			'Cause I can't reach out to call you, but I know I will one day, yeah
			Everybody hurts sometimes
			Everybody hurts someday, ayy ayy
			But everything gon' be alright
			Go and raise a glass and say, ayy
			Here's to the ones that we got
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through
			Toast to the ones here today
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories
			And the memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo
			Memories bring back, memories bring back you
			There's a time that I remember when I never felt so lost
			When I felt all of the hatred was too powerful to stop (ooh, yeah)
			Now my heart feel like an ember and it's lighting up the dark
			I'll carry these torches for ya that you know I'll never drop, yeah
			Everybody hurts sometimes
			Everybody hurts someday, ayy ayy
			But everything gon' be alright
			Go and raise a glass and say, ayy
			Here's to the ones that we got (oh)
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through (no, no)
			Toast to the ones here today (ayy)
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories (ayy)
			And the memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo
			Memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo (ooh, yeah)
			Memories bring back, memories bring back you
			Yeah, yeah, yeah
			Yeah, yeah, yeah, yeah, yeah, doh, doh
			Memories bring back, memories bring back you
		""",
		'bgimg' : 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/bg-love.jpg',
		'category' : 'love',
		'elements' : [{
			'id' : '1',
			'category' : 'love',
			'coordinate' : [0,0]
		},
		{
			'id' : '2',
			'category' : 'love',
			'coordinate' : [10,10]
		},
		{
			'id' : '3',
			'category' : 'love',
			'coordinate' : [20,20]
		}
		]
	}
	]
	email = request.form['id']
	return jsonify({
		'user' : 'email',
		'playlist' : playlist
	})

@app.route('/add-music', methods=['POST'])
def add_music():
	musicInfo = {
		'title':'music4',
		'image': 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/memories-album.jpg',
		'musician' : 'mtest',
		'lyrics' : """ 
			Here's to the ones that we got
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through
			Toast to the ones here today
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories
			And the memories bring back, memories bring back you
			There's a time that I remember, when I did not know no pain
			When I believed in forever, and everything would stay the same
			Now my heart feel like December when somebody say your name
			'Cause I can't reach out to call you, but I know I will one day, yeah
			Everybody hurts sometimes
			Everybody hurts someday, ayy ayy
			But everything gon' be alright
			Go and raise a glass and say, ayy
			Here's to the ones that we got
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through
			Toast to the ones here today
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories
			And the memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo
			Memories bring back, memories bring back you
			There's a time that I remember when I never felt so lost
			When I felt all of the hatred was too powerful to stop (ooh, yeah)
			Now my heart feel like an ember and it's lighting up the dark
			I'll carry these torches for ya that you know I'll never drop, yeah
			Everybody hurts sometimes
			Everybody hurts someday, ayy ayy
			But everything gon' be alright
			Go and raise a glass and say, ayy
			Here's to the ones that we got (oh)
			Cheers to the wish you were here, but you're not
			'Cause the drinks bring back all the memories
			Of everything we've been through (no, no)
			Toast to the ones here today (ayy)
			Toast to the ones that we lost on the way
			'Cause the drinks bring back all the memories (ayy)
			And the memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo
			Memories bring back, memories bring back you
			Doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo doo
			Doo doo doo doo, doo doo doo (ooh, yeah)
			Memories bring back, memories bring back you
			Yeah, yeah, yeah
			Yeah, yeah, yeah, yeah, yeah, doh, doh
			Memories bring back, memories bring back you
		""",
		'bgimg' : 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/bg-love.jpg',
		'category' : 'love',
		'elements' : [{
			'id' : '1',
			'category' : 'love',
			'coordinate' : [0,0]
		},
		{
			'id' : '2',
			'category' : 'love',
			'coordinate' : [10,10]
		},
		{
			'id' : '3',
			'category' : 'love',
			'coordinate' : [20,20]
		}
		]
	}
	return jsonify({
		'music-Info' : musicInfo
	})


@app.route('/search', methods=['POST'])
def serach_music():
	# title = request.form['title']

	playlist = [{
		'title' :'music1',
		'album-image' : 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/memories-album.jpg',
		'musician' : 'maroon5',
		'category' : 'love'
	},
	{
		'title' :'music2',
		'album-image' : 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/memories-album.jpg',
		'musician' : 'maroon6',
		'category' : 'love'
	},
	{
		'title' :'music3',
		'album-image' : 'http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com:5000/static/memories-album.jpg',
		'musician' : 'maroon7',
		'category' : 'love'
	},
	] 
	data = { 'searchlist': playlist }
	api_res = jsonify(data)
	api_res.headers['Access-Control-Allow-Origin'] = '*'
	# api_res.headers.add("Access-Control-Allow-Origin", "*")
	# api_res.headers.add('Access-Control-Allow-Headers', "*")
	# api_res.headers.add('Access-Control-Allow-Methods', "*")
	return api_res



@app.route('/save-room', methods=['POST'])
def save_room():
	# data = {'contents': contents }
	# api_res = jsonify(data)

	# api_res.headers['Access-Control-Allow-Origin'] = '*'
	return jsonify({
		'res' : 'yes'
	})

