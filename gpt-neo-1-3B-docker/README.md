docker build -t gpt-neo-1-3b-docker .
docker run -d --name gpt-neo-1-3B-docker1 -p 80:80 gpt-neo-1-3B-docker

# python3 -m uvicorn main:app
# http://127.0.0.1:8000/docs