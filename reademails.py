# https://github.com/ikvk/imap_tools
import os
from imap_tools import MailBox, AND
from dotenv import load_dotenv

load_dotenv()

# account credentials
username = os.getenv('G_UN')
password = os.getenv('G_PW')


mailbox = MailBox('imap.gmail.com')
mailbox.login(username, password, initial_folder='INBOX')

for msg in mailbox.fetch(AND(all=True)):
    print("Subject:", msg.subject)
    print("=============================================")
    print(msg.text)
mailbox.logout()