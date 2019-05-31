import os
import calendar
import time
import random
import json
import socket

unit_id = os.environ["unit_id"]
types = [[0, 5], 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
# todo : définir le couple automate_number + type --> [['aut_numb','type'] * 10 ] --> ceci permettra de remplacer la boucle while dans la génération de la donnée --> for automate in types: unit_id = automate[0] and automaton_type = automate[1]
while True:

    data = {}
    date_str = str(calendar.timegm(time.gmtime()))

    # generation du nom du fichier
    f = "paramunite_" + str(unit_id) + "_" + date_str + ".json"

    with open(f, "w+") as outfile:
        i = 1
        array = []
        for type in types:
            data = {
                       'unit_id': unit_id,
                       'automaton_number': type[1],
                       'automaton_type': '0X000BA2' + str(type[0]),
                       'tank_temp': round(random.uniform(2.5, 4.0), 1),
                       'external_temp': round(random.uniform(8.0, 14.0), 1),
                       'milk_weight_tank': random.randrange(3512, 4607, 1),
                       'finished_product_weight': 0,
                       'ph_measurement': round(random.uniform(6.8, 7.2), 1),
                       'k_measurement': random.randrange(35, 47, 1),
                       'nacl_concentration': round(random.uniform(1.0, 1.7), 1),
                       'lvl_bact_salmo': random.randrange(17, 37, 1),
                       'lvl_bact_ecoli': random.randrange(35, 49, 1),
                       'lvl_bact_listeria': random.randrange(28, 54, 1),
                       'epoch': date_str
                   },
            i += 1
            array.append(data)
        json.dump(array, outfile, indent=1)
    os.environ["FILE_NAME"] = f
    time.sleep(10)
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect(("192.168.0.10", 1111))

    f = os.environ["FILE_NAME"]
    with open(f, 'rb') as _file:
        s.send(_file.read())

    print("Le fichier a ete correctement ete envoye au serveur : %s." % f)

    s.recv(2048)
    time.sleep(50)
