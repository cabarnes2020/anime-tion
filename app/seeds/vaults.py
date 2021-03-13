from app.models import db, Vault


def seed_vaults():
    for i in range(1, 11):
        vault = Vault(
            name=f"vault{i}",
            user_id=i
        )
        db.session.add(vault)
    db.session.commit()


def undo_vaults():
    db.session.execute('TRUNCATE vaults restart identity CASCADE;')
    db.session.commit()
