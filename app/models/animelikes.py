from .db import db


anime_likes = db.Table(
  'anime_likes',
  db.Column(
    'anime_id',
    db.Integer,
    db.ForeignKey('animes.id'),
    primary_key=True),
  db.Column(
    'user_id',
    db.Integer,
    db.ForeignKey('user.id'),
    primary_key=True)
)
