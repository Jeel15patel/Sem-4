import socket

host = socket.gethostname()

port = 9999

adds = (host, port)  # It create Tuple

server_socket = socket.socket()

server_socket.bind(adds)

server_socket.listen()

conn,adds = server_socket.accept()

print("Connection from", adds)

while True:
    
    data = conn.recv(1024)

    if not data:
        break

    print("Received form Client:",data.decode())

    data = input("Server Message =>")

    conn.send(data.encode())

server_socket.close()
    
conn.close()