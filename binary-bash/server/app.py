#!/usr/bin/env python3

from flask import request, session
from werkzeug.utils import secure_filename
from flask import send_from_directory
from models import User, Event, EventUser
from config import app, db
import os

# @app.route('/')
# def index():
#     return {"success": "Success!"}, 200

# @app.before_request
# def check_if_logged_in():
#     if not session['user_id']:
#         return {'error': 'Unauthorized'}, 401

# Events
@app.route('/events', methods=['GET'])
def all_events():
    events_list = [event.to_dict(rules=['-users.event']) for event in Event.query.all()]

    return events_list, 200


@app.route('/events', methods=['POST'])
def create_event():
    json_data = request.form.to_dict()
    file = request.files['image']

    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        json_data['image'] = filename

    new_event = Event(
        title=json_data.get('title'),
        image=json_data.get('image'),
        start_time=json_data.get('start_time'),
        end_time=json_data.get('end_time'),
        location=json_data.get('location'),
        description=json_data.get('description')
    )

    db.session.add(new_event)
    db.session.commit()
    return new_event.to_dict(), 201

# Event by id
@app.route('/events/<int:id>')
def event_by_id(id):
    event = Event.query.filter(Event.id == id).first()

    if not event:
        return {"error": "Event not found"}, 404
    return event.to_dict(), 200

@app.route('/events_by_user/')
def events_by_user():

    # user = User.query.filter(User.id == id).first()
    events_users = [event.to_dict() for event in EventUser.query.all()]

    return events_users, 200

    # events_list = [event.to_dict(rules=['-users.event']) for event in Event.query.all()]

# Sign Up
@app.route('/signup', methods=['POST'])
def signup():
    username = request.get_json()['username']
    password = request.get_json()['password']

    if username and password:
        new_user = User(username=username)
        new_user.password_hash = password
        db.session.add(new_user)
        db.session.commit()

        session['user_id'] = new_user.id
        
        return new_user.to_dict(), 201

    return {'error': '422 Unprocessable Entity'}, 422

# Log in
@app.route('/login', methods=['POST'])
def login():

        username = request.get_json()['username']
        password = request.get_json()['password']

        user = User.query.filter(User.username == username).first()

        if user.authenticate(password):

            session['user_id'] = user.id
            return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401

# Log out
@app.route('/logout', methods=['DELETE'])
def delete():

        session['user_id'] = None

        return {}, 204

# Clear session
# @app.route('/clear-session', methods=['DELETE'])
# def delete():
    
#         session['page_views'] = None
#         session['user_id'] = None

#         return {}, 204

# Check session
@app.route('/check_session')
def get():

    user = User.query.filter(User.id == session.get('user_id')).first()
    if user:
        return user.to_dict(), 200
    else:
        return {'message': '401: Not Authorized'}, 401
    