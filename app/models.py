from sqlalchemy import Column, Integer, String, Boolean
from app.database.database import Base

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    gmail = Column(String, unique=True)
    password = Column(String)
    company_name = Column(String)
    verified = Column(Boolean, default=False)

class UnverifiedUsers(Base):
    __tablename__ = "unverified_users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    gmail = Column(String, unique=True)
    password = Column(String)
    company_name = Column(String)
    otp = Column(String)
