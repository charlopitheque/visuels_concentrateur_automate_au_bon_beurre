# coding: utf-8
import mysql.connector
import socket
import threading
import json


class ClientThread(threading.Thread):

    def __init__(self, ip, port, clientsocket):
        threading.Thread.__init__(self)
        self.ip = ip
        self.port = port
        self.clientsocket = clientsocket
        print("[+] Nouveau thread pour %s %s" % (self.ip, self.port,))

    # TODO : rajouter les test d'existence, les try catch nécéssaires
    def run(self):
        print("Connexion de %s %s" % (self.ip, self.port,))

        r = self.clientsocket.recv(99999)
        print("Ouverture du fichier")
        print(r.decode('utf-8'))

        self.clientsocket.send('Fichier correctement recu'.encode('utf-8'))

        decoded = json.loads(r.decode('utf-8'))

        for automates in decoded:
            print(automates)
            for automate in automates:
                cnx = mysql.connector.connect(user='root', password='root', host='127.0.0.1', database='usine_au_bon_beurre_bdd')
                cursor = cnx.cursor()

                # todo : ajouter le poids produit fini
                # improvement : date(YYYY, MM, DD) instead of passing just epoch

                insert_data = ("INSERT INTO automaton "
                               "(epoch, unit_id, automaton_number, automaton_type, tank_temp, external_temp, milk_weight_tank, ph_measurement, k_measurement, nacl_concentration, lvl_bact_salmo, lvl_bact_ecoli, lvl_bact_listeria  )"
                               "VALUES (%(epoch)s, %(unit_id)s, %(automaton_number)s, %(automaton_type)s, %(tank_temp)s, %(external_temp)s, %(milk_weight_tank)s, %(ph_measurement)s, %(k_measurement)s, %(nacl_concentration)s,"
                               " %(lvl_bact_salmo)s, %(lvl_bact_ecoli)s, %(lvl_bact_listeria)s)"
                               )
                data = {
                    'epoch': automate['epoch'],
                    'unit_id': automate['unit_id'],
                    'automaton_number': automate['automaton_number'],
                    'automaton_type': automate['automaton_type'],
                    'tank_temp': automate['tank_temp'],
                    'external_temp': automate['external_temp'],
                    'milk_weight_tank': automate['milk_weight_tank'],
                    'ph_measurement': automate['ph_measurement'],
                    'k_measurement': automate['k_measurement'],
                    'nacl_concentration': automate['nacl_concentration'],
                    'lvl_bact_salmo': automate['lvl_bact_salmo'],
                    'lvl_bact_ecoli': automate['lvl_bact_ecoli'],
                    'lvl_bact_listeria': automate['lvl_bact_listeria']
                }

                cursor.execute(insert_data, data)
                cnx.commit()
                print(cursor.lastrowid)
                cnx.close()

        print("Client déconnecté...")


tcpsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcpsock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
tcpsock.bind(("", 1111))

while True:
    tcpsock.listen(10)
    print("En écoute...")
    (clientsocket, (ip, port)) = tcpsock.accept()
    newthread = ClientThread(ip, port, clientsocket)
    newthread.start()
