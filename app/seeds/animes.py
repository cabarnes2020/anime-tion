from app.models import db, Anime
import requests


def retrieve_data(url):
    headers = {
        "Accept": "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
    }
    list_of_anime = requests.get(url, headers=headers)
    return list_of_anime.json()


def seed_animes():
    anime = []
    url = 'https://kitsu.io/api/edge/anime?sort=popularityRank'
    count = 0
    while count < 10:
        response = retrieve_data(url)
        anime.extend(response["data"])
        url = response["links"]["next"]
        count += 1

    for i in anime:
        anime_series = Anime(
            title=i["attributes"]["canonicalTitle"],
            image=i["attributes"]["posterImage"]["small"],
            release_date=i["attributes"]["startDate"],
            trailer_url="http://www.youtube.com/watch?v=" +
            i["attributes"]["youtubeVideoId"],
            description=i["attributes"]["synopsis"],
        )
        db.session.add(anime_series)
    db.session.commit()


def undo_animes():
    db.session.execute('TRUNCATE animes CASCADE;')
    db.session.commit()
