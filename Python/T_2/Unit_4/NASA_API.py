# If you give Proper Date it show Image and Description take by NASA

import requests
import urllib.request
from PIL import Image


def getPictureOfTheDay(apiKey):
    date = str(input("Enter a date in YYYY-MM-DD: "))
    req = "?api_key=" + apiKey + "&date=" + date
    url = "https://api.nasa.gov/planetary/apod" + req
    response = requests.get(url)
    picture = response.json()
    # print(json.dumps(picture, indent=5))
    if "msg" in picture:
        print("Error Code: ", picture["code"], "\nMessage: ", picture["msg"])
    else:
        print(
            "Title: ",
            picture["title"],
            "\nDescription: ",
            picture["explanation"],
            "\nURL:",
            picture["hdurl"],
        )


getPictureOfTheDay(input("Enter You API:"))

# ----------------------------------------------------------------------

# def getPictureOfTheDay(apiKey):
#     date = str(input("Enter a date in YYYY-MM-DD: "))
#     req = "?api_key=" + apiKey + "&date=" + date
#     url = "https://api.nasa.gov/planetary/apod" + req
#     response = requests.get(url)
#     picture = response.json()
#     # print(json.dumps(picture, indent=5))
#     if "msg" in picture:
#         print("Error Code: ", picture["code"], "\nMessage: ", picture["msg"])
#     else:
#         print("Title: ",
#               picture["title"],
#               "\nDescription: ",
#               picture["explanation"])
#         urllib.request.urlretrieve(
#             picture["hdurl"],
#             "APOD.png",
#         )
#         # img = Image.open("APOD.png")
#         # img.show()

# getPictureOfTheDay(input("Enter You API:"))

# ----------------------------------------------------------------------

# api_key = "FvGtPOgZbMcJA4V8G9qnTD06MZatKpqfugUyKd73"
# url = "https://api.nasa.gov/planetary/apod?api_key=" + api_key

# response = requests.get(url, params={"date": "2023-06-14"})
# data = response.json()
# print(data)
# df = {"date": [], "url": []}
# df["date"].append(data["date"])
# df["url"].append(data["url"])
# print(df)
# print(df["url"][0])