// o is saying give me a new object somewhere
const o = {
    // and then store inside of it, a and b
    a: 'a'.
    b: 'b'.
}

const o2 = o  // o2 is saying give me another object and set it to o
o.a = 'new value'   // pointing to the same object
console.log(o2.a) // output = new value

/* these object are geting stored by reference rather than value
reference to the objects in memory
o and o2 are referencing the same exact object */

