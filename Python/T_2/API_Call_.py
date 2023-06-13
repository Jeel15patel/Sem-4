# write a code for Call 5 day / 3 hour forecast data in python get date in table form 
# date-time , temp , pressure , humidity , weather , wind speed 

import requests
import json
import pandas as pd

def get_forecast_data():
    api_key = "cd4902c4f97518aaef3be1fe3402415a"
    lat = 21.170240
    lon = 72.831062
    request_url = (
        "http://api.openweathermap.org/data/2.5/forecast?lat="
        + str(lat)
        + "&lon="
        + str(lon)
        + "&appid="
        + api_key
    )
    response = requests.get(request_url)
    forecast_data = response.json()
    return forecast_data

forecast_data = get_forecast_data()

d = {"Date_Time":[],"Temperature":[],"Pressure":[],"Humidity":[],"Weather":[],"Wind_Speed":[]}

for i in forecast_data["list"]:
    d["Date_Time"].append(i["dt_txt"])
    d["Temperature"].append(i["main"]["temp"])
    d["Pressure"].append(i["main"]["pressure"])
    d["Humidity"].append(i["main"]["humidity"])
    d["Weather"].append(i["weather"][0]["main"]) 
    d["Wind_Speed"].append(i["wind"]["speed"])
df = pd.DataFrame(d)
# df.to_csv("weather_data.csv")
print(df)
