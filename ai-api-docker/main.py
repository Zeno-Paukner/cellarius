import os

from fastapi import FastAPI

import uvicorn

app = FastAPI(root_path="/z.paukner")
#check if rest api is running

print("Rest-Server running")



os_root_path = os.environ.get('ROOT_PATH')
print(os_root_path)
@app.get("/")
async def root():
    return {"message": "Hello World", "root_path": os_root_path}


@app.get("/root_path")
async def root():
    return {"message": os_root_path}


#uvicorn.run(app, host="0.0.0.0", port=8000)
uvicorn.run(app, host="0.0.0.0", port=8080)




