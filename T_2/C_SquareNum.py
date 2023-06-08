import socket

host = socket.gethostname()
port = 9999

client_socket = socket.socket()

client_socket.connect((host,port))

message = input("Enter The Number You want to SQUARE =>")

while message != "":
    
    client_socket.send(message.encode())
    
    data = client_socket.recv(1024)
    
    print("SQUARE of given number",data)
    
    message = input("Client Message 2 =>")
    
client_socket.close()

