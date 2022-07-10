var fs, { existsSync, writeFileSync, readFileSync } = require('fs')
class JSONDatabase {
    /**
     * Create a new json file database
     * @param {Object} options 
     * Database options
     * @param {String} options.file
     * Database file is the file that the data will be stored in it, make sure that the file format is json (default is 'database.json')
     * @param {Boolean} options.JSONbeautifier
     * Make data look more beautiful and readable (default is true)
     * @example
     * const { JSONDatabase } = require('easy-db');
     * //or
     * import { JSONDatabase } from 'easy-db';
     * 
     * const db = new JSONDatabase({
     * file: 'myDatabase.json',
     * JSONbeautifier: true
     * })
     */
    constructor(options = {}) {
        this.file = options?.file || 'database.json'
        this.JSONbeautifier = options?.JSONbeautifier
        if(!this.file.endsWith('.json')){
            throw new Error(`Database file format must be json`)
        }
        if(typeof options !== "object"){
            throw new Error("Invalid database options")
        }
}
/**
 * Get data value from the database by the data id
 * @param {String} id 
 * Data id
 * @returns any
 * @example 
 * db.fetch("myCars")
 */
fetch(id){
    if(existsSync(this.file)){
        let data = readFileSync(this.file, "utf-8")
        if(!id){
            throw new Error("Please provide the data id to fetch the value from it")
        }
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let found = JSON.parse(data)
        let output = found[id] || null
        return output
    } else {
        writeFileSync(this.file, "{}")
        let data = readFileSync(this.file, "utf-8")
        if(!id){
            throw new Error("Please provide the data id to fetch the value from it")
        }
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let found = JSON.parse(data)
        let output = found[id] || null
        return output
    }
    }
    /**
 * Get data value from the database by the data id
 * @param {String} id 
 * Data id
 * @returns any
 * @example 
 * db.find("myCars")
 */
    find(id){
        if(existsSync(this.file)){
            let data = readFileSync(this.file, "utf-8")
            if(!id){
                throw new Error("Please provide the data id to get the value from it")
            }
            if(typeof id !== "string"){
                throw new Error("Data id must be a string")
            }
            let found = JSON.parse(data)
            let output = found[id] || null
            return output
        } else {
            writeFileSync(this.file, "{}")
            let data = readFileSync(this.file, "utf-8")
            if(!id){
                throw new Error("Please provide the data id to get the value from it")
            }
            if(typeof id !== "string"){
                throw new Error("Data id must be a string")
            }
            let found = JSON.parse(data)
            let output = found[id] || null
            return output
        }
        }
    /**
 * Get data value from the database by the data id
 * @param {String} id 
 * Data id
 * @returns any
 * @example 
 * db.get("myCars")
 */
get(id){
if(existsSync(this.file)){
    let data = readFileSync(this.file, "utf-8")
    if(!id){
        throw new Error("Please provide the data id to get the value from it")
    }
    if(typeof id !== "string"){
        throw new Error("Data id must be a string")
    }
    let found = JSON.parse(data)
    let output = found[id] || null
    return output
} else {
    writeFileSync(this.file, "{}")
    let data = readFileSync(this.file, "utf-8")
    if(!id){
        throw new Error("Please provide the data id to get the value from it")
    }
    if(typeof id !== "string"){
        throw new Error("Data id must be a string")
    }
    let found = JSON.parse(data)
    let output = found[id] || null
    return output
}
}
/**
 * Update a data value from the database (if there is no data a new data will be created)
 * @param {String} id 
 * Data id
 * @param {Any} value 
 * Data Value (The new data value that should be replaced by the old the data value)
 * @example
 * db.set("myCars", ["toyota", "volvo", "honda"])
 */
update(id, value){
    if(existsSync(this.file)){
        let data = readFileSync(this.file, "utf-8")
        if(!id){
            throw new Error("Please provide the data id to update it")
        }
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let found = JSON.parse(data)
        found[id] = value
        let output = JSON.stringify(found)
        if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
        writeFileSync(this.file, output)
    } else {
        writeFileSync(this.file, "{}")
        let data = readFileSync(this.file, "utf-8")
        if(!id){
            throw new Error("Please provide the data id to update it")
        }
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let found = JSON.parse(data)
        found[id] = value
        let output = JSON.stringify(found)
        if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
        writeFileSync(this.file, output)
    }
    }
/**
 * Update a data value from the database (if there is no data a new data will be created)
 * @param {String} id 
 * Data id
 * @param {Any} value 
 * Data Value (The new data value that should be replaced by the old the data value)
 * @example
 * db.set("myCars", ["toyota", "volvo", "honda"])
 */
set(id, value){
if(existsSync(this.file)){
    let data = readFileSync(this.file, "utf-8")
    if(!id){
        throw new Error("Please provide the data id to update it")
    }
    if(typeof id !== "string"){
        throw new Error("Data id must be a string")
    }
    let found = JSON.parse(data)
    found[id] = value
    let output = JSON.stringify(found)
    if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
    writeFileSync(this.file, output)
} else {
    writeFileSync(this.file, "{}")
    let data = readFileSync(this.file, "utf-8")
    if(!id){
        throw new Error("Please provide the data id to update it")
    }
    if(typeof id !== "string"){
        throw new Error("Data id must be a string")
    }
    let found = JSON.parse(data)
    found[id] = value
    let output = JSON.stringify(found)
    if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
    writeFileSync(this.file, output)
}
}
/**
 * Delete a data from the database by data id
 * @param {String} id 
 * Data id
 * @example
 * db.delete("myCars")
 */
delete(id){
    if(existsSync(this.file)){
        let data = readFileSync(this.file, "utf-8")
        if(!id){
            throw new Error("Please provide the data id to delete it")
        }
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let found = JSON.parse(data)
        delete found[id]
        let output = JSON.stringify(found)
        if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
        writeFileSync(this.file, output)
    } else {
        writeFileSync(this.file, "{}")
        let data = readFileSync(this.file, "utf-8")
        if(!id){
            throw new Error("Please provide the data id to delete it")
        }
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let found = JSON.parse(data)
        delete found[id]
        let output = JSON.stringify(found)
        if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
        writeFileSync(this.file, output)
    }
}
/**
 * Delete a data from the database by data id
 * @param {String} id 
 * Data id
 * @example
 * db.remove("myCars")
 */
remove(id){
    if(existsSync(this.file)){
        let data = readFileSync(this.file, "utf-8")
        if(!id){
            throw new Error("Please provide the data id to delete it")
        }
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let found = JSON.parse(data)
        delete found[id]
        let output = JSON.stringify(found)
        if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
        writeFileSync(this.file, output)
    } else {
        writeFileSync(this.file, "{}")
        let data = readFileSync(this.file, "utf-8")
        if(!id){
            throw new Error("Please provide the data id to delete it")
        }
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let found = JSON.parse(data)
        delete found[id]
        let output = JSON.stringify(found)
        if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
        writeFileSync(this.file, output)
    }
}
/**
 * Increase a data number value in the database
 * @param {String} id 
 * Data id
 * @param {Number} value 
 * @example
 * //before = 5
 * db.add("money", 5)
 * //after = 10
 */
add(id, value){
    if(existsSync(this.file)){
        let data = this.get(id)
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        if(data && typeof data !== "number"){
            throw new Error("Data type must be a number to increase it")
        }
        if(typeof value !== "number"){
            throw new Error("The value to add must be a number")
        }
        if(data){
            var last = data + value
      let found = JSON.parse(readFileSync(this.file, "utf-8"))
        found[id] = last
        let output = JSON.stringify(found)
        if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
        writeFileSync(this.file, output)
        } else {
            if(typeof value !== "number"){
                throw new Error("The value to add must be a number")
            }
            this.set(id, value)
        }
    } else {
        writeFileSync(this.file, "{}")
        let data = this.get(id)
        if(data && typeof data !== "number"){
            throw new Error("Data type must be a number to increase it")
        }
        if(typeof value !== "number"){
            throw new Error("The value to add must be a number")
        }
        if(data){
            var last = data + value
      let found = JSON.parse(readFileSync(this.file, "utf-8"))
        found[id] = last
        let output = JSON.stringify(found)
        if(this.JSONbeautifier) output = JSON.stringify(found, null, 1)
        writeFileSync(this.file, output)
        } else {
            if(typeof value !== "number"){
                throw new Error("The value to add must be a number")
            }
            this.set(id, value)
        }
    }
}
/**
 * Decrease a data number value in the database
 * @param {String} id 
 * Data id
 * @param {Number} value 
 * @example
 * //before = 10
 * db.minus("money", 5)
 * //after = 5
 */
minus(id, value){
    if(existsSync(this.file)){
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let data = this.get(id) || 0
        if(typeof value !== "number"){
            throw new Error("The value to add must be a number")
        }
        if(typeof data !== "number"){
            throw new Error("Data type must be a number to decrease it")
        }
        this.set(id, data - value)
    } else {
        writeFileSync(this.file, "{}")
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let data = this.get(id) || 0
        if(typeof value !== "number"){
            throw new Error("The value to add must be a number")
        }
        if(typeof data !== "number"){
            throw new Error("Data type must be a number to decrease it")
        }
        this.set(id, data - value)
}
}
/**
 * Decrease a data number value in the database
 * @param {String} id 
 * Data id
 * @param {Number} value 
 * @example
 * //before = 10
 * db.subtract("money", 5)
 * //after = 5
 */
subtract(id, value){
    if(existsSync(this.file)){
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let data = this.get(id) || 0
        if(typeof value !== "number"){
            throw new Error("The value to add must be a number")
        }
        if(typeof data !== "number"){
            throw new Error("Data type must be a number to decrease it")
        }
        this.set(id, data - value)
    } else {
        writeFileSync(this.file, "{}")
        if(typeof id !== "string"){
            throw new Error("Data id must be a string")
        }
        let data = this.get(id) || 0
        if(typeof value !== "number"){
            throw new Error("The value to add must be a number")
        }
        if(typeof data !== "number"){
            throw new Error("Data type must be a number to decrease it")
        }
        this.set(id, data - value)
}
}
/**
 * This function is like the array push function in JavaScript, It adds one item to an array in the database
 * @param {String} id 
 * Data id
 * @param {Any} value 
 * The value that should be added to the array
 */
push(id, value){
    if(existsSync(this.file)){
    if(typeof id !== "string"){
        throw new Error("Data id must be a string")
    }
    let data = this.get(id) || []
    if(!Array.isArray(data)){
        throw new Error("Data type must be a array to push an item to it")
    }
    data.push(value)
    this.set(id, data)
    } else {
        writeFileSync(this.file, "{}")
        this.set(id, value)
    }
}
/**
 * Check if there is a data in the database with a specific id
 * @param {String} id 
 * Data id
 * @returns {Boolean}
 * db.has("someRandomDataId")
 * // if there is a data with this id: (someRandomDataId) it will returns true else : it will return false
 */
has(id){ 
    return this.get(id) !=null 
}
/**
 * Get all data from the database
 * @returns {Object}
 */
fetchAll(){
if(existsSync(this)){
let data = readFileSync(this.file, "utf-8") || {}
return JSON.parse(data)
} else {
    writeFileSync(this.file, '{}')
    return {}
}
}
/**
 * Get all data from the database
 * @returns {Object}
 */
 getAll(){
    if(existsSync(this)){
    let data = readFileSync(this.file, "utf-8") || {}
    return JSON.parse(data)
    } else {
        writeFileSync(this.file, '{}')
        return {}
    }
}
/**
 * Get all data from the database
 * @returns {Object}
 */
 findAll(){
    if(existsSync(this)){
    let data = readFileSync(this.file, "utf-8") || {}
    return JSON.parse(data)
    } else {
        writeFileSync(this.file, '{}')
        return {}
    }
}
/**
 * Get all data from the database in a array
 * @returns {Array}
 */
all(){
    let data = this.fetchAll()
    let objs = Object.entries(data)
    let output = `[` + objs.map(e => `{ "ID": ${JSON.stringify(e[0])}, "VALUE": ${JSON.stringify(e[1])} }`).join() + `]`
    return JSON.parse(output)
}
}
module.exports = { JSONDatabase };