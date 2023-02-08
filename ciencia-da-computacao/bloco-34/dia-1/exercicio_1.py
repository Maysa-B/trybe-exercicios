from parsel import Selector
import requests


URL = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

# pegando as informações gerais da página
response = requests.get(URL)
selector = Selector(text=response.text)

# extraindo o conteúdo pedido
title = selector.css("h1::text").get()
price = selector.css(".price_color::text").re_first(r"\d*\.\d{2}")
description = selector.css(".product_page > p::text").get()

suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

url_image = URL + selector.css("#product_gallery img::attr(src)").get()

instok = selector.css('.product_page .availability::text').re_first("\d")

print(title, price, description, url_image, instok, sep=', ', end='.')
