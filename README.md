![Logo](https://user-images.githubusercontent.com/55828102/144297265-cbb2f6fe-d3a0-462e-a3cf-f454cf0dc615.png)

Cellarius ist eine künstliche Intelligenz, die auf eine Kundenemail eine Antwortemail generiert. Die generierten Antwortemails werden von einem Servicemitarbeiter kontrolliert (Human-in-the-loop) und dann von diesem an den Kunden zurückgeschickt. Die künstliche Intelligenz wird durch die korrigierten Antworten automatisch weiter trainiert. Das Anfangstraining erfolgt auf Basis aufbereiteter Emailkonversationen.
  
## Verwendung

### Installation

#### 1.
fill out `.env.example` and rename it to `.env`

#### 2.
Run the docker-compose command to start the containers
```
docker-compose --env-file .env up -d
```



## Docker Images
| Image               	| Docs 	| Port 	|
|---------------------	|------	|------	|
| import-emails       	| [README.md](import-emails-docker\README.md)      	| 8000 	|
| gpt-neo-1-3B-docker 	| [README.md](gpt-neo-1-3B-docker\README.md)     	| 8001 	|
| mongo               	|      	|      	|
| mongo-express       	|      	| 8081 	|




## Zeitaufzeichung
[LIVE ClickUp Zeitaufzeichnung](https://sharing.clickup.com/l/h/5-90560575-1/a95ad6e55acd517)

## Mitwirkende
- Projektleiter: Zeno Paukner
- Product-Owner: Martin Hausleitner
- Teammember: Romeo Bhuiyan
- Teammember: Jakob Lehner
