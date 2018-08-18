// Same value but different reference
const o = {
    a: 'a'.
    b: 'b'.
}

// example 2:
const o2 = Object.assign({}, o)
// {giving a new object},
// then merge into, of the key and value of this object called o


o2.a = 'new value'
console.log(o.a)

