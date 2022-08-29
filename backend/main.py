
import uvicorn
from typing import Optional

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from pydantic import BaseModel

import models.model as m

from pathlib import Path


class Text_Input(BaseModel):
    data: Optional[str] = None


app = FastAPI()
app.mount("/static", StaticFiles(directory="static", html=True), name="static")
templates = Jinja2Templates(directory="templates")



classifier = m.get_model()


origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["root"])
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/prediction")
async def get_predict(Input: Text_Input, request: Request):
    print("*"*50)
    print(Input.data)
    print("*"*50)
    output = classifier.predict(Input.data)
    output_label = output[0]
    probabilities = output[1]
    probabilities = [prob*100 for prob in probabilities]
    prob_str = str(probabilities)
    prob_str = prob_str.replace("[", "")
    prob_str = prob_str.replace("]", "")
    prob_str = prob_str.replace(" ", "")

    print(prob_str)

    return {
            "data": {
                "input": f"{Input.data}",
                "output_label": f"{output_label}",
                "probabilities": f"{probabilities}"
            }
        }

if __name__ == '__main__':
    uvicorn.run(f"{Path(__file__).stem}:app", port=8080, host="0.0.0.0", reload=True)