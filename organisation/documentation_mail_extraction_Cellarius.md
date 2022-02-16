# E-Mailkonversationen auslesen
## Verwendete Bibliotheken (Python)
| Bibliothek | Nutzen | Link |
|--|--|--|
| imap_tools | Verbindung zum E-Mailserver | https://pypi.org/project/imap-tools/ |
| pymongo | Verbindung zur MongoDB | https://pymongo.readthedocs.io/en/stable/ |
| BeautifulSoup | Konvertierung des HTML-Textes der E-Mail | https://www.crummy.com/software/BeautifulSoup/bs4/doc/ |
| os, dotenv | Geheimhaltung der Login-Daten | https://docs.python.org/3/library/os.html, https://pypi.org/project/python-dotenv/ |

## Code

### Bibliotheken Import
```python
import  os
from  imap_tools  import  MailBox, AND
from  dotenv  import  load_dotenv
import  pymongo
from  bs4  import  BeautifulSoup
```

### Login Daten aus der .env laden 
Die .env Datei ist aus offensichtlichen Sicherheitsgründen nur lokal gespeichert.
Sie enthält alle wichtigen Nutzerdaten
#### .env Beispiel:
```
PW=secret1234
UN=MaxMustermann
ISV=imap.gmail.com
MCS=mongodb://host1:abcde@127.3.256.40:3000/?authSource=test&readPreference=primary&appname=MongoDB%20Compass&ssl=false+
```

#### Code
```python
load_dotenv()

# account credentials
username = os.getenv('UN')
password = os.getenv('PW')
imapserver = os.getenv('ISV')
mongodbcs = os.getenv('MCS')
```
### Verbindung zur Datenbank
Eine collection der MongoDB ist wie eine Tabelle in einem relationalem Datenbanksystem.
```python
# database connection
myclient = pymongo.MongoClient(mongodbcs)
mydb = myclient["Cellarius"]
collection = mydb["email_conversations"]
```
### Verbindung zum IMAP Server
IMAP (Internet Message Access Protocol) ist ein Service um von allen Plattformen aus auf E-Mails zugreifen zu können. 
IMAP Server eines E-Mailaccounts herausfinden: 
*Optionen -> Einstellung -> IMAP/E-Mailserver*

### Extrahieren der E-Mailkonversationen 
```c``` ist ein Zähler für die Anzahl der E-Mailkonversationen.
```mailbox.fetch()```  lädt E-Mails aus der Mailbox des Accounts. 
```AND(all=True)``` kennzeichnet, dass alle E-Mails geladen werden.
```python
c = 0
for  msg  in  mailbox.fetch(AND(all=True)):
```
BeautifulSoup ermöglicht das Extrahieren des HTML-Textes der E-Mail.
Die E-Mailkonversation wird folglich in die einzelnen E-Mails getrennt.
```python
	soup = BeautifulSoup(msg.html, 'html.parser')
	email_texts = soup.get_text().split('Von:')
	email_texts_parsed = []
```
Entfernt alle doppelten Zeilenumbrüche und speichert alle E-Mails der E-Mailkonversation in eine Liste.
```python	
	for  e  in  email_texts:
		text = (''.join(list(filter(None, e.split('\n')))))
		email_texts_parsed.append(text)
```
Erstellen und Initialisieren des Data Transfer Objects (DTO).
```"data_status"``` dient als Validierungsindikator, ob die E-Mail fürs Training verwendet werden kann. 0 = nicht überprüft
```python
	email_conversation = {
		"uid": msg.uid,
		"subject": msg.subject,
		"from": msg.from_,
		"to": msg.to,
		"html": msg.html,
		"email_texts" : email_texts_parsed,
		"data_status": 0
	}
```
Ausgabe auf die Konsole zur Laufzeitkontrolle.
```python
	c = c + 1
	print ("Saved:", c, msg.uid, msg.subject)  
```

### Ausloggen aus dem E-Mail-Account
```python
mailbox.logout()
```
