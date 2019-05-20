from time import sleep
import os

from ipython_genutils.py3compat import execfile

while True:
    os.system("python automated.py")
    sleep(10)
    os.system("python automateClient.py")
    sleep(50)
