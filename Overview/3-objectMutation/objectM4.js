// Same value but different reference
const o = {
    a: 'a'.
    b: 'b'.
    obj: {
        key: 'key'.
    }.
}

// taking the keys and values of o and merging those into a new object
const o2 = Object.assign({}, o)
/* doing a shallow copy which is grabbing the keys and values of
some object and just setting those blindly into some other object */

/* taking o2, geting
a dot object so accsessing the value with the key called object
and then setting that object's key called key to new value */
o2.obj.key = 'new value'

// then now console logging o to object dot key
console.log(o.obj.key)



