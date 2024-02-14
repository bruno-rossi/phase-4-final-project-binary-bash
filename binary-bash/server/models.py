from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String)

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

    # Relationships:
    events = db.relationship('EventUser', back_populates='user', cascade='all, delete-orphan')

    # Serialization:
    serialize_rules = ['-events_users.user']

    def __repr__(self) -> str:
        return f"<User {self.username}, id: {self.id}"

class Event(db.Model, SerializerMixin):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    image = db.Column(db.String)
    start_time = db.Column(db.String)
    end_time = db.Column(db.String)
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

