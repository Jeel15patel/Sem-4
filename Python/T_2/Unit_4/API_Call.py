# API :- cd4902c4f97518aaef3be1fe3402415a

import requests, json


def get_coordinates():
    api_key = "cd4902c4f97518aaef3be1fe3402415a"
    city = input("Enter Your City : ")
    request_url = (
        "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + api_key
    )
    response = requests.get(request_url)
    cordinates = response.json()
    print(json.dumps(cordinates, indent=5))
    lat = cordinates[0]["lat"]
    lon = cordinates[0]["lon"]
    return print("Latitude: ", lat, "Longitude: ", lon)


get_coordinates()
