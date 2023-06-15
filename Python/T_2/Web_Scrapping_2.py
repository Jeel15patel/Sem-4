import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movie/Titanic-120338"

result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")

print(soup.prettify())

