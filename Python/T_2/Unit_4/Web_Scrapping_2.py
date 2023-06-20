import requests
from bs4 import BeautifulSoup

website = "https://subslikescript.com/movies_letter-Y"
root = "https://subslikescript.com/"

result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, "html.parser")
box = soup.find("article", class_="main-article")
print(box)

print("---------------A-1-------------------")

links = []

for link in box.find_all("a", href=True):
    links.append(link["href"])
print(links)

links = links[1::]

for i in links:
    url = root + i
    print(url)
    result = requests.get(url)
    content = result.text
    soup = BeautifulSoup(content, "html.parser")
    transcript = soup.find("div", class_="full-script").text.strip()
    title = soup.find("h1").text.strip()
    try:
        with open(
            f"D:\Github\Sem-4\Python\T_2\Script\{title.replace('?','')}1.txt", "w", encoding="utf-8"
        ) as f:
            f.write(transcript)
    except Exception as e:
        print(e)

print("---------------B-2-------------------")
