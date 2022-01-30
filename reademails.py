import os
from imap_tools import MailBox, AND
from dotenv import load_dotenv
import pymongo
from bs4 import BeautifulSoup

load_dotenv()

# account credentials
username = os.getenv('cellarius')
password = os.getenv('Y*QQL2T!GaxWb&2Uf6@U')
imapserver = os.getenv('ISV')
mongodbcs = os.getenv('MCS')

# database connection
myclient = pymongo.MongoClient(mongodbcs)
mydb = myclient["Cellarius"]
collection = mydb["email_conversations"]

mailbox = MailBox(imapserver)
mailbox.login(username, password, initial_folder='INBOX')
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