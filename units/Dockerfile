FROM python:3.7

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install wget &&\
    wget https://raw.githubusercontent.com/charlopitheque/visuels_concentrateur_automate_au_bon_beurre/master/units/main.py

CMD ["python", "./main.py"]
