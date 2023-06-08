import socket

host = socket.gethostname()
port = 9999

# host = "192.168.69.237"
# port = 8080

client_socket = socket.socket()

client_socket.connect((host,port))

message = input("Client Message 1 Number=>")

while message != "":
    
    client_socket.send(message.encode())
    
    data = client_socket.recv(1024)
    
    print("Received form server",data.decode())
    
    message = input("Client Message 2 =>")
    
client_socket.close()

