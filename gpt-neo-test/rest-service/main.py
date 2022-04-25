# cd .\gpt-neo-test\rest-service\ 
# python3 -m uvicorn main:app
# http://127.0.0.1:8000/docs
from ast import In
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import time
from subprocess import Popen, PIPE
import sys
from transformers import pipeline
app = FastAPI()


generator = pipeline('text-generation', model='EleutherAI/gpt-neo-1.3B')
    
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
    error_massage: str
    loading_time_seconds: float

#create a post req to fill class Input(BaseModel):
@app.post("/")
async def input_text(input: Input_GPT_Neo_1_3B):
    start_time = time.time()
    print(input.prompt)
    print(input.max_length)
    print(input.do_sample)
    print(input.temperature)
    res = generator(str(input.prompt), max_length=50, do_sample=True, temperature=0.9)
    return Output(output=res[0]['generated_text'], status="OK", error_massage="", loading_time_seconds=(time.time() - start_time))

#

#prompt = "School is"

#redirect console print output to a text to a string



#print(res[0]['generated_text'])








