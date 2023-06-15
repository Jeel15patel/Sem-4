import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movies"
root = "https://subslikescript.com/"

result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")

# print(soup.prettify())

# print(soup.find_all("a", href=True))

# print(box.find_all("a",href=True))

# print(len(box.find_all("a",href=True)))

box = soup.find("article", class_="main-article")
print(box)

print("---------------A-1-------------------")

links = []

for link in box.find_all("a", href=True):
    links.append(link["href"])
print(links)

print("---------------B-2-------------------")

for link in links:
    url = root + link
    print(url)
    result = requests.get(url)
    content = result.text
    soup = BeautifulSoup(content, "html.parser")
    transcript = soup.find("div", class_="full-script").text.strip()
    title = soup.find("h1").text.split()
    try:
        with open(f"{title}1.txt", "w", encoding="utf-8") as f:
            f.write(transcript)
    except Exception as e:
        print(e)

print("---------------C-3--------------------")
