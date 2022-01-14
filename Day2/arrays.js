// every() method (if all values -> condition true then true otherwise false)
// let array = [1,2,3,4,5]
// console.log(array.every((item) => {
//     return item < 6
// }))

// some() method (if atleast one value -> condition true otherwise false)
// let array = [1,2,3,4,5]
// console.log(array.some((item) => {
//     return item > 4
// }))

// fill() method
// let fill1 = [1,2,3,4,5]
// fill1.fill(6,2,3)
// console.log("fill1", fill1)

// let fill2 = [1,2,3,4,5]
// fill2.fill(6,2)
// console.log("fill2", fill2)

// let fill3 = [1,2,3,4,5]
// fill3.fill(6)
// console.log('fill3', fill3)

// findIndex() method
// let array = ['ali', 'safeer', 'ahmad', 'saud']
// console.log(array.findIndex((item) => {
//     return item == 'aa'
// }))
// console.log(array.findIndex((item) => {
//     return item == 'ahmad'
// }))

// indexOf() method
// let array = ['ali', 'safeer', 'ahmad', 'saud', 'ahmad']
// console.log(array.indexOf('ahmad',3))
// console.log(array.indexOf('ahmad'))
// console.log(array.indexOf('ahmad',5))

// lastIndexOf() method
// let array = ['ali', 'safeer', 'ahmad', 'saud', 'ahmad']
// console.log(array.lastIndexOf('ahmad',3))
// console.log(array.lastIndexOf('ahmad'))
// console.log(array.lastIndexOf('ahmad',5))

// forEach() method
// let array = [2,3,5,7,11]
// array.forEach((item) => {
//     console.log(item +1) 
// })

// join() method // convert an array to a string
// let array = ['Ali', 'Haider', 'Bhatti']
// console.log(array.join(' ok '))

// map() method
// let array = [1,2,3,4,5]
// array = array.map((item) => {
//     return item + 5
// })
// console.log('after', array)

// push(), pop(), shift(), unshift() methods
// let array = [1,2,3,4,5]
// array.push(6)
// console.log('push', array)
// array.pop()
// console.log('pop', array)
// array.shift()
// console.log('shift', array)
// array.unshift(0)
// console.log("unshift", array)

// reduce() method
// let array = [1,2,3,4,5]
// console.log(array.reduce((a,b) => {
//     return a + b
// }))
// console.log(array.reduce((a,b) => {
//     return a - b
// }))

// reverse() method
// let array = [1,2,3,4,5]
// array.reverse()
// console.log("reverse", array)

// toString() method
// let array = ['ali', 'haider', 'bhatti'];
// console.log(array.toString())

// sort() method
// let array = [2,1,3,5,4]
// console.log('ascending', array.sort((a,b) => {
//     return a - b
// }))
// console.log('descending', array.sort((a,b) => {
//     return b - a
// }))

// slice() method 
// let array = [1,2,3,4,5]
// console.log(array.slice(2)) // removes 2 elements from the start
// console.log(array.slice(2,3)) // remove elemnet starting from index and remove 1 element

// splice() method
// let array = [1,2,3,4,5]
// console.log(array.splice(2,2))