import socket as sk

# host = sk.gethostname()
# port = 9999

host = "192.168.69.237"
port = 8080

udp_client = sk.socket(type=sk.SOCK_DGRAM)

while True:
    data = input("Enter The Data => ")
    if not data:
        break
    
    udp_client.sendto(data.encode(), (host, port))
   
    print("Received Data from Server") 
    data, addr = udp_client.recvfrom(1024)
    
    if not data:
        break
    
    print("Received",data.decode(),"From","Jeel")
