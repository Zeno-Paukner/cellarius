from pydantic import BaseModel
from fastapi import FastAPI
import uvicorn
import time

app = FastAPI()

from transformers import pipeline


class Input_GPT_Neo_1_3B(BaseModel):
    prompt: str 
    max_length: int 
    do_sample: bool 
    temperature: float 

# a class with output and status
class Output(BaseModel):
    output: str 
    status: str
    error_massage: str
    loading_time_seconds: float

@app.post("/input")
async def input_text(input: Input_GPT_Neo_1_3B):
    start_time = time.time()
    print(input.prompt)
    print(input.max_length)
    print(input.do_sample)
    print(input.temperature)
    print("Loading ...")
    res = pipeline(str(input.prompt), max_length=50, do_sample=True, temperature=0.9)
    return Output(output=res[0]['generated_text'], status="OK", error_massage="", loading_time_seconds=(time.time() - start_time))

@app.get("/")
async def root():
    return {"message": "Hello World"}


#uvicorn.run(app, host="0.0.0.0", port=8000, root_path="/cellarius/import-emails")
uvicorn.run(app, host="0.0.0.0", port=8000)