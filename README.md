# CARE
The CARE (Cohort Assessment and Retrieval Environment) system was developed by the CS312 team (Jordan Tang, Payal Shah, an Kyle Ellis) under Dr. Bridget McInnes. It was designed to process clinical records for the purpose of cohort discovery. It utilizes MetaMap and MetaMap::Datastructures in the background to process records as well as input data.

## Getting Started
The instructions below will help you get the system up and running. Note: instructions tailored for Windows machines currently.

### Prerequisites
* Node 6.9.5+
* MongoDB 3.4.3+
* Express 4.15.2+
* Mongoose 4.9.3+
* Python 3.6+
* Perl
* PyMongo 3.4+
* Angular CLI 1.0+

Records should be formatted as XML files and stored within the records directory in its own folder. Note: records are formatted as such:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<root>
  <TEXT>
    <![CDATA[
      Some medical information here.
    ]]>
  </TEXT>
  <TAGS>
    Some tags here.
  </TAGS>
</root>
```

### Installation
To check out the latest release:

```
git clone https://github.com/tangjl/CARE
```

After the repository is cloned, access the project root directory (wherever you cloned the repository) and run:

```
cd client
npm install
cd ..
cd server
npm install
```

### Setting Up

Create a collection for the records within MongoDB. By default, the system works with a collection called 'records'. See MongoDB documentation for instructions on how to do so. 

Within the `/records` directory, configure the MongoClient in `parser.py` to whatever port the MongoDB server is running on (By default: 27017). Be sure to change the name of the collection as well if you chose to name your collection in MongoDB something other than 'records'.

```python
client = MongoClient('localhost', 27017) <<< edit this if necessary
db = client.records <<< records by default, change if name of your collection is different
collection = db.records <<< see above
```

Then alter the path directory to the folder containing the records stored within the `/records` directory (By default: the path containing the records is `/records/raw_records/`).  

```python
for root, dirnames, files in os.walk('./raw_records'): <<< edit the path if necessary
    for name in files:
        dbName = name.replace('.xml', '')
        tree = ET.parse('./raw_records/' + name) <<< see above
        root = tree.getroot()
```

Navigate to the server directory. Within the `index.js` file, change the path to the database if you are not using the default port for MongoDB (27017).

```javascript
mongoose.connect('mongodb://localhost/records'); <<< edit this if necessary
```

Change the default port as well if you want to as well.

```javascript
app.listen(4000, function() { <<< change the port number if necessary
    console.log("Listening for connection");
});
```

This next step is optional depending on if you changed the port above. Navigate to the client directory, then change directories into `/src/app/services` and open up `manage-records.service.ts`. Within the file, edit the port number if you decide to run the api on a different port then the default value (4000).

```javascript
private url = 'http://localhost:4000/api/records'; <<<edit the port number if necessary
```

You should now be set and ready to run the system. 

## Running the System

To start, make sure that MongoDB is running in the background (`mongod` in whatever path you have set already during MongoDB installation). Then navigate to the records directory and run the following command:

```
python parser.py
```

The above command will parse through the records within the directory and automatically insert them into MongoDB. After that, navigate to the server directory and run the following command:

```
node index
```

Then navigate to the client directory and run the following command:

```
ng serve
```

At this point, the system should be up and running and ready to use. 
