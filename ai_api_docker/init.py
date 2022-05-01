
from transformers import pipeline
pipeline(str(input.prompt), max_length=50, do_sample=True, temperature=0.9)