#  Current air pollution data

import requests
import json

quality_index = {1: "Good", 2: "Fair", 3: "Moderate", 4: "Poor", 5: "Very Poor"}


def display_air_pollution():
    api_key = "cd4902c4f97518aaef3be1fe3402415a"
    lat = 21.170240
    lon = 72.831062
    request_url = (
        "http://api.openweathermap.org/data/2.5/air_pollution?lat="
        + str(lat)
        + "&lon="
        + str(lon)
        + "&appid="
        + api_key
    )

    response = requests.get(request_url)
    current_pollution = response.json()
    print(json.dumps(current_pollution, indent=5))
    index = current_pollution["list"][0]["main"]["aqi"]
    print("Current Air Quality:", quality_index[index])


display_air_pollution()
