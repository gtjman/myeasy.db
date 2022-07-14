# Easy Db

An Easy To Use JSON File Database


***
## installation:

```
npm i easy.db
yarn add myeasy-.db
```

## Import
```js
const { JSONDatabase } = require('easy-db');
      //or
import { JSONDatabase } from 'easy-db';
      
      const db = new JSONDatabase({
       file: 'myDatabase.json',
        JSONbeautifier: true
      })
```

***

## Methods
```js
db.get("") //Get data value from the database by the data id

db.fetch("") //Get data value from the database by the data id

db.find("") //Get data value from the database by the data id

db.update("", "") // Update a data value from the database (if there is no data a new data will be created)

db.set("", "") // Update a data value from the database (if there is no data a new data will be created)

db.delete("") // Delete a data from the database by data id

db.remove("") // Delete a data from the database by data id

db.add("", "") // Increase a data number value in the database

db.minus("", "") // Increase a data number value in the database

db.subtract("", "") // Decrease a data number value in the database

db.push("", "") // This function is like the array push function in JavaScript, It adds one item to an array in the database

db.has("") // Check if there is a data in the database with a specific id

db.fetchAll("") // Get all data from the database

db.getAll("") // Get all data from the database

db.findAll("") // Get all data from the database

db.all() // Get all data from the database in a array
```

This package was just a challenge, i finished it in 1.23 hours.