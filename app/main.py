from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from app.auth.routes import router as auth_router
from app.database.database import Base, engine
import os

app = FastAPI(title="Expense Tracker")

# create tables
Base.metadata.create_all(bind=engine)

# register routes
app.include_router(auth_router, prefix="/auth", tags=["Auth"])

# set up templates
templates = Jinja2Templates(directory=os.path.join(os.path.dirname(__file__), "templates"))

# root route returns login page
@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})
