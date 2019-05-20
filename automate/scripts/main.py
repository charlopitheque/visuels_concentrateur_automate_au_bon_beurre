from time import sleep
import os

while True:
    os.system("python automated.py")
    sleep(10)
    os.system("python automateClient.py")
    sleep(50)
