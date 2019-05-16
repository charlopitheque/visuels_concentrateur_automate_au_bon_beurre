import json
import random

"""
    data_model : 
        {
            unit_name : "", --> fixe 
            automates : [
                {
                    automaton_number : int, --> fixe
                    automaton_type : int, --> 0X0000BA20 to 0X0000BA2F
                    tank_temperature : float --> 2.5 to 4 , incr 0.1
                    external_temperature : float --> 8 to 14, incr 0.1
                    milk_weight_in_tank : float --> 3512 to 4607, incr 1kg 
                    weight_product_created : float --> 
                    ph_measurement : float --> 6.8 to 7.2, incro 0.1
                    k_plus_measurement : int --> 35 to 47, incr 1, unit mg 
                    nacl_concentration : float --> 1g to 1.7g, incr 0.1, unit : g 
                    salmonelle_level : int --> 17 to 37, incr 1, unit : ppm 
                    listeria_level : int --> 28 to 54, incr 1,  unit : ppm
                    Ecoli_level : int --> 35 to 49 , incr 1, unit ppm
                } *10 
            ] 
        }
"""

types = [0X0000BA20, 0X0000BA21, 0X0000BA22, 0X0000BA23, 0X0000BA24, 0X0000BA25, 0X0000BA26, 0X0000BA27, 0X0000BA28,
         0X0000BA29, 0X0000BA2A, 0X0000BA2B, 0X0000BA2C, 0X0000BA2D, 0X0000BA2E, 0X0000BA2F]


def gettype(elements):
    rand = random.randrange(0, elements.len, 1)


test = [
    [1], [[1, ], [1], [1], [1], [1]]
]
