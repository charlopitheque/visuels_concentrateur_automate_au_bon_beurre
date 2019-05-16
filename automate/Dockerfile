FROM python:3.7

RUN apt-get update && \
    apt-get install git &&\
    mkdir /app && \
    cd /app && \
    git pull https://github.com/charlopitheque/visuels_concentrateur_automate_au_bon_beurre.git

CMD ["python", "./visuels_concentrateur_automate_au_bon_beurre/automate/scripts/main.py"]