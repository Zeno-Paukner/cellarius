import os
from imap_tools import MailBox, AND
import pymongo
from pydantic import BaseModel
from fastapi import FastAPI
from bs4 import BeautifulSoup

app = FastAPI()

# create class ImportEmails with imap_username imap_password imap_server_url mongodb_connection_string collection_name
class ImportEmails(BaseModel):
    imap_username: str = os.environ.get('IMAP_PALIDO_USERNAME')
    imap_password: str = os.environ.get('IMAP_PALIDO_EMAIL_PASSWORD')
    imap_server_url: str = os.environ.get('IMAP_PALIDO_SERVER')
    mongodb_connection_string: str = os.environ.get('ME_CONFIG_MONGODB_URL')
    collection_name: str = "palido_emails"
    def scrape_emails(self):
        myclient = pymongo.MongoClient(ImportEmails.mongodb_connection_string)
        print("Connected to MongoDB")
        mydb = myclient["Cellarius"]
        # create collection with name collection_name from ImportEmails
        collection = mydb[ImportEmails.collection_name]
        #when the collection is not empty return Collection allready exists
        if collection.count_documents({}) > 0:
            print("Collection allready exists")

        print("Start scraping emails")
        mailbox = MailBox(ImportEmails.imap_server_url)
        mailbox.login(ImportEmails.imap_username, ImportEmails.imap_password, initial_folder='INBOX')
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





ImportEmails.scrape_emails(ImportEmails)

#check if rest api is running
print("Rest-Server running")

#create a post req to fill class ImportEmails
@app.post("/")
async def import_emails(input: ImportEmails):
    #if the Input is empty fill in the os.environ
    ImportEmails.scrape_emails(ImportEmails)
    return "OK"


