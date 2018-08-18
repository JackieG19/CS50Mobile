/* deep copy - that takes the key and value
and if the value is an object,
you would have to take those object's key and value
do that recursively and get every single layer deep cloned
*/

// example:

function deepCopy(obj){

    const keys = Object.keys(obj)
    // the way to get the keys of an object is this function
    // passing in the object, we now have an array full of the string values of the  keys in that object

    // going to iterate through those keys
     // check if values are objects
    // if so, deep copy that object
    // else return the value
    for (let i = 0; i < keys.length; i++){
        const key = keys[i]
        const newObject = {}

        if (typeof obj[key] === 'object') {
        // if the type of obj and pass in by the key

        newObject[key] = deepCopy(obj[key])
        }

        else {
        newObject[key] = obj[key]
        }
    }

    }

    return Object.assign({}, obj) // return new object

    const o3 = deepCopy
    o.obj.key = 'new key!'
    console.log(o3.obj.key) // output = key

}