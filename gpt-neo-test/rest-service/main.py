# python3 -m uvicorn main:app
# http://127.0.0.1:8000/docs
from ast import In
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import time

app = FastAPI()
    
# Create a class Input  prompt, max_length=50, do_sample=True, temperature=0.9
class Input_GPT_Neo_1_3B(BaseModel):
    prompt: str 
    max_length: int 
    do_sample: bool 
    temperature: float 

# a class with output and status
class Output(BaseModel):
    output: str 
    status: str
    loading_time_seconds: float

#create a post req to fill class Input(BaseModel):
@app.post("/")
async def input_text(input: Input_GPT_Neo_1_3B):
    start_time = time.time()
    print(input.prompt)
    print(input.max_length)
    print(input.do_sample)
    print(input.temperature)
    return Output(output=input.prompt, status="OK", loading_time_seconds=(time.time() - start_time))








