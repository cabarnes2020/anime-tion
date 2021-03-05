from .db import db
from datetime import datetime


class Review(db.Model):

    __tablename = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    anime_id = db.Column(db.Integer, db.ForeignKey('animes.id'), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())


def to_dict(self):
    return {
        "id": self.id,
        "content": self.content,
        "user_id": self.user_id,
        "anime_id": self.anime_id
    }
