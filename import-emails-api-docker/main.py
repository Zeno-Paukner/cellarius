import os
from imap_tools import MailBox, AND
import pymongo
from pydantic import BaseModel
from fastapi import FastAPI
from bs4 import BeautifulSoup
import uvicorn

app = FastAPI()
#check if rest api is running

print("Rest-Server running")

# create class ImportEmails with imap_username imap_password imap_server_url mongodb_connection_string collection_name
class ImportEmails(BaseModel):
    imap_username: str = os.environ.get('IMAP_PALIDO_USERNAME')
    imap_password: str = os.environ.get('IMAP_PALIDO_EMAIL_PASSWORD')
    imap_server_url: str = os.environ.get('IMAP_PALIDO_SERVER')
    mongodb_connection_string: str = os.environ.get('ME_CONFIG_MONGODB_URL')
    collection_name: str = os.environ.get('IMPORT_EMAILS_MONGODB_COLLECTION_NAME')



    
def scrape_emails(ImportEmails):
    # create a mongodb connection   
        ImportEmails.imap_password = os.environ.get('IMAP_PALIDO_EMAIL_PASSWORD')
        ImportEmails.imap_username = os.environ.get('IMAP_PALIDO_USERNAME')
        ImportEmails.mongodb_connection_string = os.environ.get('ME_CONFIG_MONGODB_URL')
        ImportEmails.collection_name = os.environ.get('IMPORT_EMAILS_MONGODB_COLLECTION_NAME')
        ImportEmails.imap_server_url = os.environ.get('IMAP_PALIDO_SERVER')
    # connect to mongodb
        # if ImportEmails.imap_username == "username" then use  os.environ.get('IMAP_PALIDO_USERNAME')
# if ImportEmails.imap_password == "password" then use  os.environ.get('IMAP_PALIDO_PASSWORD')
        #if(ImportEmails.imap_username == "username"):
        #    ImportEmails.imap_username = os.environ.get('IMAP_PALIDO_USERNAME')
        #if(ImportEmails.imap_password == "password"):
        #    ImportEmails.imap_password = os.environ.get('IMAP_PALIDO_PASSWORD')
        myclient = pymongo.MongoClient(ImportEmails.mongodb_connection_string)

        #check if mongodb is connected
        if myclient:
            print("MongoDB is connected")
            print("Connected with: " + str(ImportEmails.mongodb_connection_string))
        mydb = myclient["Cellarius"]
        print("Connected to MongoDB")
        # create collection with name collection_name from ImportEmails

        # TODO: the collection name is allways "None" it should be the name of the ImportEmails.collection_name var
        col = "imported_emails"

        collection = mydb[col]
        print("Open collection :" + collection.name)
        
        #if the collection allready exists then stop the def
        print(collection.count_documents({}))
        # if the collection has more then one document then stop the def
        if collection.count_documents({}) > 1:
            print("Collection has more then one document")
            return

        
        
        # print out current collectionname
        print("Collection created:" + collection.name)
        

        #print("Start scraping emails from:")
        #print(str(ImportEmails.imap_server_url))
        #print(str(ImportEmails.imap_username))
        mailbox = MailBox(str(ImportEmails.imap_server_url))
        mailbox.login(str(ImportEmails.imap_username), str(ImportEmails.imap_password), initial_folder='INBOX')
        c = 0
        for msg in mailbox.fetch(AND(all=True)):

            soup = BeautifulSoup(msg.html, 'html.parser')
            email_texts = soup.get_text().split('Von:')
            email_texts_parsed = []
            for e in email_texts:
                text = (''.join(list(filter(None, e.split('\n')))))
                email_texts_parsed.append(text)

            email_conversation = {
                "uid": msg.uid,
                "subject": msg.subject,
                "from": msg.from_,
                "to": msg.to,
                "html": msg.html,
                "email_texts" : email_texts_parsed,
                "data_status": 0
            }

            c = c + 1
            x = collection.insert_one(email_conversation)
            print ("Saved:", c, msg.uid, msg.subject)

        mailbox.logout()
        print("Finished scraping emails")


# run ImportEmails scrape_emails


#scrape_emails(ImportEmails)

#create a post req to fill class ImportEmails
@app.post("/start-import-emails")
async def import_emails(input: ImportEmails):
    #if the Input is empty fill in the os.environ
    scrape_emails(ImportEmails)
    return "OK"

@app.get("/")
async def root():
    return {"message": "Hello World"}


#uvicorn.run(app, host="0.0.0.0", port=8000)
uvicorn.run(app, host="0.0.0.0", port=8000, root_path="/cellarius/import-emails")




