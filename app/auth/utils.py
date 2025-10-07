# app/auth/utils.py
from sqlalchemy.orm import Session
from app.models import Users
from passlib.hash import bcrypt

def hash_password(password: str):
    return bcrypt.hash(password)

def verify_password(password: str, hashed: str):
    return bcrypt.verify(password, hashed)

def create_user(db: Session, user_data):
    new_user = Users(
        first_name=user_data.first_name,
        last_name=user_data.last_name,
        gmail=user_data.gmail,
        password=hash_password(user_data.password),
        company_name=user_data.company_name,
        verified=True
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def verify_user_credentials(gmail: str, password: str, db: Session):
    user = db.query(Users).filter(Users.gmail == gmail).first()
    if user and verify_password(password, user.password):
        return True
    return False
