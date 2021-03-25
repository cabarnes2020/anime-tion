from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo',
                email='demo@aa.io',
                password='password', profile_pic='https://anime-tion.s3.us-east-2.amazonaws.com/ichigo_vs_yammy.jpeg',
                fav_anime_id=1)

    db.session.add(demo)

    for i in range(1, 10):
        user = User(
            email=f"user{i}@email.com",
            password="password",
            username=f"user{i}",
            fav_anime_id=i
        )
        db.session.add(user)
        db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users restart identity CASCADE;')
    db.session.commit()
