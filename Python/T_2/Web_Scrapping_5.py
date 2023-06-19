import requests
from bs4 import BeautifulSoup
import pandas as pd

soup = BeautifulSoup(
    open("Python\\Web Scrapping\\top250.html", "r", encoding="utf-8"), "html.parser"
)
print(soup.prettify())

movies = soup.findAll('div',class_:'')
