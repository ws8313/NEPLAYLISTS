# Dockerfile for develop flask server
FROM python:3.8.12

#RUN mkdir /workspace
WORKDIR /workspace
COPY ./requirements.txt .

RUN \
    python -m pip install --upgrade pip \
    pip install -r requirements.txt 

EXPOSE 5000

ENV FLASK_ENV development
ENV FLASK_RUN_PORT 5000
ENV APP_CONFIG_FILE /workspace/config.py
# ENV MYSQL_PASS root 
# ENV MYSQL_DB dev_db
