import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movie/Avengers_Endgame-4154796"

result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")

# print(soup.prettify())

# movie = soup.find("article",class_="main-article")
# print(movie)

# print(soup.find_all("a"))

# print(soup.find_all("div"))

transcript = soup.find("div",class_="full-script").text.strip()
print(transcript)

with open("Endgames.txt","w") as file:
    file.write(transcript)