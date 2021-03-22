from .db import db

vault_anime = db.Table(
  'vault_animes',
  db.Column(
    'anime_id',
    db.Integer,
    db.ForeignKey('animes.id'),
    primary_key=True),
  db.Column(
    'vault_id',
    db.Integer,
    db.ForeignKey('vaults.id'),
    primary_key=True)
)
