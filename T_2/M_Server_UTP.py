import socket as sk

host = sk.gethostname()
port = 9999

udp_server = sk.socket(type=sk.SOCK_DGRAM)
udp_server.bind((host, port))

while True:
    print("Waiting For Message")
    data, addr = udp_server.recvfrom(1024)
    print("Received Data from Client", data.decode(), "from", addr)
    msg = input("Enter Message => ")
    udp_server.sendto(msg.encode(), addr)
udp_server.close()