import socket
import sys

TCP_IP = ""
TCP_PORT = 5005

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))
s.listen(5)

while True:
    conn, addr = s.accept()
    f = open('/home/pi/rpi_ws281x/python/command.txt', 'wb')
    print "Got connection from", addr
    l = conn.recv(1024)
    while (l):
        print "Receiving Data..."
        print l
        f.write(l)
        l = conn.recv(1024)
    f.close()
    conn.close()
