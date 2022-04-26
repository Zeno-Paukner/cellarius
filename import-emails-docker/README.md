

# Run Docker Image
```
docker run -d --name emails-import1 -p 80:80 emails-import
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
docker build -t import-emails .
```