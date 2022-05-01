

# Run Docker Image
```
docker run -d -p 8000:8000 emails-import
```



# API

Route
```
http://localhost:8000/import_emails
```

Scrape new Emails into the MongoDB with POST

```
{
  "imap_username": "test@test.at",
  "imap_password": "test",
  "imap_server_url": "imap@test.at",
  "mongodb_connection_string": "mongodb://test:test@mongo:27017/",
  "collection_name": "test_mails"
}
```

# Dev environment
Run FastAPI Rest-Service
``` 
python3 -m uvicorn main:app
```
SwaggerUI API debugger
```
http://localhost:8000/docs
```
Build docker Image  
```
cd .\import-emails-docker\; docker build -t emails-import .; cd ..; docker-compose --env-file .env up
```


docker build -t test1 .

# Commands for dockerized Rest Service
```
docker build -t ai_image .
```
docker run -p 8080:8080 ai_image
```

http://localhost:8080/docs#/