import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movie/Titanic-120338"

result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")

# print(soup.prettify())

# movie = soup.find("article",class_="main-article")
# print(movie)

# print(soup.find_all("a"))

print(soup.find_all("div"))