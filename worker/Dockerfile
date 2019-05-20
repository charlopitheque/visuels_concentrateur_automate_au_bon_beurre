FROM python:3.7

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install git &&\
    git pull https://github.com/charlopitheque/visuels_concentrateur_automate_au_bon_beurre.git

CMD ["python", "./visuels_concentrateur_automate_au_bon_beurre/worker/scripts/workerServer.py"]