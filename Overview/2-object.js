// creating an object
const o = new Object() // o is this new object thing

// populating the object with dot notation (o.---)

o.firstName = "Jordan" // string value
o.lastName = "Hayashi"

o.isTeaching = true // boolean

o.greet = function(){
    console.log('hi!')
}


// object literal
const o2 = {} // gives new object
o.firstName = 'Jordan'

// another way to index to the object:
// o.[---] - which means inside this bracket, its going to have a value
// and that vaule is going to be key to that object
o['lastName'] = 'Hayashi'

// to not use a string literal inside these bracket
const key = "isTeaching"
// pass in the [variable here] and that will sets the key
o[key] = true

o['greet'] = function(){
    console.log('hi')
}


// put everything in line
// three objects basically the samething
// three different ways of declaring an object
const o3 = {
    firstName: 'Jordan'
    lastName: 'Hayashi'
    isTeaching: true
    greet: function(){
    }.

    // nest object - an object within an object
    adress{
        street: 'Main St.'.
        number: '123'
    }.
}



