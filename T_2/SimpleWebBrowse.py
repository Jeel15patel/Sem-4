# import socket as sk

# mysock = sk.socket()

# mysock.connect(("data.pr4e.org",80))

# cmd = "GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n"

# mysock.send(cmd.encode())

# while True:
#     data = mysock.recv(512)
#     if len(data) < 1:
#         break
#     print(data.decode(),end=" ")
# mysock.close()

# --------------------------------------------------------------------

import socket as sk

mysock = sk.socket()

mysock.connect(("www.ljku.edu.in",80))

cmd = "GET https://www.ljku.edu.in/lju-at-a-glance HTTP/1.0\r\n\r\n"

mysock.send(cmd.encode())

while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end=" ")
mysock.close()