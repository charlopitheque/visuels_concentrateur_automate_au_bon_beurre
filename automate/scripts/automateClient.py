import os
import socket
from time import sleep

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("", 1111))

f = os.environ["FILE_NAME"]
with open(f, 'rb') as _file:
    s.send(_file.read())

print("Le fichier a ete correctement ete envoye au serveur : %s." % f)

s.recv(2048)
