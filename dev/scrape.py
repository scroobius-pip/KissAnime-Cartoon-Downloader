from lxml import html
import requests
page = requests.get('https://www.youtube.com/watch?v=OeMjgEqgGss')
tree = html.fromstring(page.content)
print page.text
print tree.xpath("//*[body]")