from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)

    # Relationships:
    events = db.relationship('EventUser', back_populates='user', cascade='all, delete-orphan')

    # Serialization:
    serialize_rules = ['-events_users.user']

    def __repr__(self) -> str:
        return f"<User {self.username}, id: {self.id}"

class Event(db.Model, SerializerMixin):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    location = db.Column(db.String)
    description = db.Column(db.String)

    # Relationships:
    users = db.relationship('EventUser', back_populates='event', cascade='all, delete-orphan')

    # Serialization:
    serialize_rules = ['-events_users.event']

    def __repr__(self) -> str:
        return f"<Event {self.title}, id: {self.id}"

class EventUser(db.Model, SerializerMixin):
    __tablename__ = 'events_users'

    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    type = db.Column(db.String)

    # Relationships:
    user = db.relationship('User', back_populates='events')
    event = db.relationship('Event', back_populates='users')

    # Serialization:
    serialize_rules = ['-user.events', '-event.users']

    def __repr__(self) -> str:
        return f"<EventUser {self.id}, event_id: {self.event_id}, user_id: {self.user_id}, type: {self.type}"

