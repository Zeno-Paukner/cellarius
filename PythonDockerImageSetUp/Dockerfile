FROM python:3.8.0-buster

WORKDIR /usr/app/src

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY interaction.py ./

CMD [ "python", "./interaction.py"]

