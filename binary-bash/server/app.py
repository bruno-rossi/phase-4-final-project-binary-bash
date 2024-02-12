#!/usr/bin/env python3

from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate
from models import db, User, Event, EventUser
from flask_cors import CORS
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def index():
    return '<h1>binaryBash!</h1>', 200

@app.route('/events')
def all_events():
    events_list = [event.to_dict(rules=['-users.event']) for event in Event.query.all()]

    return events_list, 200

@app.route('/events/<int:id>')
def event_by_id(id):
    event = Event.query.filter(Event.id == id).first()

    if not event:
        return {"error": "Event not found"}, 404
    return event.to_dict(), 200

# Sign Up
@app.route('/users/<int:id>', methods=['POST'])
def create_user():
    json_data = request.get_json()
    new_user = User (
        username=json_data.get('username')
    )
    db.sesion.add(new_user)
    db.session.commit()
    return new_user.to_dict(), 201