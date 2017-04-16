import xml.etree.ElementTree as ET
import os, sys
from pymongo import MongoClient

client = MongoClient()
db = client.records
collection = db.records

for root, dirnames, files in os.walk('./raw_records'):
    for name in files:
        dbName = name.replace('.xml', '')
        tree = ET.parse('./raw_records/' + name)
        root = tree.getroot()

        for child in root:
            if child.tag == 'TAGS':
                root.remove(child)
        
        for elem in root.getiterator():
            try:
                elem.text = elem.text.replace('\n', '<br>')
                elem.text = elem.text.strip('<br>')
            except AttributeError:
                pass

        collection.insert(
            {
                "name": dbName,
                "content": elem.text,
                "grade": 5
            }
        )