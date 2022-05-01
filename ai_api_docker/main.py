from transformers import pipeline

generator = pipeline('text-generation', model='EleutherAI/gpt-neo-1.3B')
prompt = input("Enter anything: ")
res = generator(prompt, max_length=50, do_sample=True, temperature=0.9)

print(res[0]['generated_text'])