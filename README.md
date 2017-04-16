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

Records should be formatted as XML files and stored within the records directory. Note: records are formatted as such:

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

### Checking Out
To check out the latest release:

`git clone https://github.com/tangjl/CARE`

### Setting Up

## Running the System
