from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Anime
import requests


anime_routes = Blueprint('anime', __name__)

@anime_routes.route('/')
def anime():
    animes = Anime.query.all()
    return {"anime": [anime.to_dict() for anime in animes]}


@anime_routes.route('/<int:id>')
def one_anime(id):
    anime = Anime.query.get(id)
    return anime.to_dict()


@anime_routes.route('/trending')
def trending():
    headers = {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
    }
    placeholder = []
    res = requests.get('https://kitsu.io/api/edge/trending/anime', headers=headers)
    anime = res.json()
    placeholder.extend(anime["data"])
    trending_anime = []
    for i in placeholder:
        anime = Anime(
            title=i["attributes"]["canonicalTitle"],
            image=i["attributes"]["posterImage"]["small"],
            release_date=i["attributes"]["startDate"],
            trailer_url="http://www.youtube.com/watch?v=" +
            i["attributes"]["youtubeVideoId"],
            description=i["attributes"]["synopsis"]
        )
        trending_anime.append(anime)

    return {"trending_anime": [anime.to_dict() for anime in trending_anime]}