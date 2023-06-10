import requests 

def get_coordinates():
    api_key=input("Enter Your API : ")
    city=input("Enter Your City : ")
    request_url="http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid="+api_key
    response=requests.get(request_url)
    cordinates=response.json()
    print(cordinates)
get_coordinates()