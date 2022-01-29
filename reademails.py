# https://github.com/ikvk/imap_tools
# https://pymongo.readthedocs.io/en/stable/tutorial.html
import os
from imap_tools import MailBox, AND
from dotenv import load_dotenv
import pymongo

load_dotenv()

# account credentials
username = os.getenv('UN')
password = os.getenv('PW')
imapserver = os.getenv('ISV')
mongodbcs = os.getenv('MCS')

# database connection
myclient = pymongo.MongoClient(mongodbcs)
mydb = myclient["Cellarius"]
collection = mydb["emails"]


mailbox = MailBox(imapserver)
mailbox.login(username, password, initial_folder='INBOX')
c = 0
for msg in mailbox.fetch(AND(all=True)):
    email = {
        "uid": msg.uid,
        "subject": msg.subject,
        "from": msg.from_,
        "to": msg.to,
        "text": msg.text,
        "html": msg.html
    }
    c = c + 1
    x = collection.insert_one(email)
    print ("Saved:", c, msg.uid, msg.subject)
    break
mailbox.logout()