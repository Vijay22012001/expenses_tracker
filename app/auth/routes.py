# app/auth/routes.py
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from app.auth.utils import create_user, verify_user_credentials
from app.email_utils import send_otp_email
from app.database.database import SessionLocal
from sqlalchemy.orm import Session

router = APIRouter()

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---------- MODELS ----------
class SignupModel(BaseModel):
    first_name: str
    last_name: str
    gmail: EmailStr
    password: str
    company_name: str

class LoginModel(BaseModel):
    gmail: EmailStr
    password: str

# ---------- ROUTES ----------
@router.post("/signup")
def signup(user: SignupModel, db: Session = Depends(get_db)):
    # 1. Check if user exists
    existing = db.execute(
        f"SELECT * FROM users WHERE gmail='{user.gmail}'"
    ).fetchone()
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")

    # 2. Send OTP to Gmail
    otp = send_otp_email(user.gmail)

    # 3. Temporarily save in unverified_users
    db.execute(
        f"INSERT INTO unverified_users(first_name, last_name, gmail, password, company_name, otp) "
        f"VALUES ('{user.first_name}', '{user.last_name}', '{user.gmail}', '{user.password}', '{user.company_name}', '{otp}')"
    )
    db.commit()
    return {"message": f"OTP sent to {user.gmail}. Please verify."}

@router.post("/login")
def login(user: LoginModel, db: Session = Depends(get_db)):
    verified = verify_user_credentials(user.gmail, user.password, db)
    if verified:
        return {"message": "Login success!", "user": user.gmail}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")
