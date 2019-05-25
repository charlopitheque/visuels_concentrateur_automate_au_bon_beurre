FROM python:3.7

WORKDIR /usr/src/app

#install mysql

RUN pip install mysql-connector-python && \
    apt-get update && \
    apt-get install wget &&\
    wget https://raw.githubusercontent.com/charlopitheque/visuels_concentrateur_automate_au_bon_beurre/master/worker/scripts/workerServer.py

CMD ["python", "./workerServer.py"]