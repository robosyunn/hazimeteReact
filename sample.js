//document.write("<p>JavaScript test</p>");

// let aho1 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// aho1[3] = 100
// console.log(aho1)

// let aho2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// let manuke = aho2.slice()
// manuke[3] = 100
// console.log(manuke)
// [0,1,2,100,4,5,6,7,8]

let aho = [0, 1, 2, 3, 4, 5, 6]
// ...aho => 0, 1, 2, 3, 4, 5, 6
let manuke = [...aho]
manuke[3] = 100
console.log(manuke)
console.log(aho)
