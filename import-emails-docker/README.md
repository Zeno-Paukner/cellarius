docker build -t emails-import .
docker run -d --name emails-import1 -p 80:80 emails-import

# python3 -m uvicorn main:app
# http://127.0.0.1:8000/docs