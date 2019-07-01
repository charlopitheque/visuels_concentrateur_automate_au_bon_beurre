# coding: utf-8
import mysql.connector
import socket
import threading
import json


def checking(elem):
    if 1 <= int(elem['unit_id']) <= 5 and 1 <= elem["automaton_number"] < 10 and 0 < elem['tank_temp'] < 100 and 0 < elem['milk_weight_tank'] < 10000:
        return True
    else:
        return False


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
                # todo : ajouter le poids produit fini
                # improvement : date(YYYY, MM, DD) instead of passing just epoch
                if checking(automate):
                    cnx = mysql.connector.connect(user='concentrateur', password='concentrateur', host='192.168.0.1',
                                                  database='BDD_USINE_AU_BON_BEURRE')
                    cursor = cnx.cursor()

                    insert_data = ("INSERT INTO AUTOMATON "
                                   "(DT_AUTOMATON_EPOCH, CD_UNIT, CD_AUTOMATE, CD_TYPE_AUTOMATON, IN_TANK_TEMP, IN_EXTERNAL_TEMP, IN_NETWEIGHT, IN_PH_RATE, IN_POTASSIUM_RATE, IN_SODUIM_CHLORIDE_RATE, IN_SALMONELLA_RATE, IN_ECOLI_RATE, IN_LISTERIA_RATE  )"
                                   "VALUES (%(DT_AUTOMATON_EPOCH)s, %(CD_UNIT)s, %(CD_AUTOMATE)s, %(CD_TYPE_AUTOMATON)s, %(IN_TANK_TEMP)s, %(IN_EXTERNAL_TEMP)s, %(IN_NETWEIGHT)s, %(IN_PH_RATE)s, %(IN_POTASSIUM_RATE)s, %(IN_SODUIM_CHLORIDE_RATE)s,"
                                   " %(IN_SALMONELLA_RATE)s, %(IN_ECOLI_RATE)s, %(IN_LISTERIA_RATE)s)"
                                   )
                    data = {
                        'DT_AUTOMATON_EPOCH': automate['epoch'],
                        'CD_UNIT': automate['unit_id'],
                        'CD_AUTOMATE': automate['automaton_number'],
                        'CD_TYPE_AUTOMATON': automate['automaton_type'],
                        'IN_TANK_TEMP': automate['tank_temp'],
                        'IN_EXTERNAL_TEMP': automate['external_temp'],
                        'IN_NETWEIGHT': automate['milk_weight_tank'],
                        'IN_PH_RATE': automate['ph_measurement'],
                        'IN_POTASSIUM_RATE': automate['k_measurement'],
                        'IN_SODUIM_CHLORIDE_RATE': automate['nacl_concentration'],
                        'IN_SALMONELLA_RATE': automate['lvl_bact_salmo'],
                        'IN_ECOLI_RATE': automate['lvl_bact_ecoli'],
                        'IN_LISTERIA_RATE': automate['lvl_bact_listeria']
                    }
                    cursor.execute(insert_data, data)
                    cnx.commit()
                    print(cursor.lastrowid)
                    cnx.close()

                else:
                    cnx = mysql.connector.connect(user='concentrateur', password='concentrateur', host='192.168.0.1',
                                                  database='BDD_USINE_AU_BON_BEURRE')
                    cursor = cnx.cursor()

                    insert_data = ("INSERT INTO AUTOMATON_FAILURE "
                                   "(DT_AUTOMATON_EPOCH, CD_UNIT, CD_AUTOMATE, CD_TYPE_AUTOMATON, IN_TANK_TEMP, IN_EXTERNAL_TEMP, IN_NETWEIGHT, IN_PH_RATE, IN_POTASSIUM_RATE, IN_SODUIM_CHLORIDE_RATE, IN_SALMONELLA_RATE, IN_ECOLI_RATE, IN_LISTERIA_RATE  )"
                                   "VALUES (%(DT_AUTOMATON_EPOCH)s, %(CD_UNIT)s, %(CD_AUTOMATE)s, %(CD_TYPE_AUTOMATON)s, %(IN_TANK_TEMP)s, %(IN_EXTERNAL_TEMP)s, %(IN_NETWEIGHT)s, %(IN_PH_RATE)s, %(IN_POTASSIUM_RATE)s, %(IN_SODUIM_CHLORIDE_RATE)s,"
                                   " %(IN_SALMONELLA_RATE)s, %(IN_ECOLI_RATE)s, %(IN_LISTERIA_RATE)s)"
                                   )
                    data = {
                        'DT_AUTOMATON_EPOCH': automate['epoch'],
                        'CD_UNIT': automate['unit_id'],
                        'CD_AUTOMATE': automate['automaton_number'],
                        'CD_TYPE_AUTOMATON': automate['automaton_type'],
                        'IN_TANK_TEMP': automate['tank_temp'],
                        'IN_EXTERNAL_TEMP': automate['external_temp'],
                        'IN_NETWEIGHT': automate['milk_weight_tank'],
                        'IN_PH_RATE': automate['ph_measurement'],
                        'IN_POTASSIUM_RATE': automate['k_measurement'],
                        'IN_SODUIM_CHLORIDE_RATE': automate['nacl_concentration'],
                        'IN_SALMONELLA_RATE': automate['lvl_bact_salmo'],
                        'IN_ECOLI_RATE': automate['lvl_bact_ecoli'],
                        'IN_LISTERIA_RATE': automate['lvl_bact_listeria']
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
