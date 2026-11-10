// const myarr=[0,1,2,3,4,5]
// const myHeros=["shakti","naagraj"]
// const myarr2=new Array(1,2,3,4)
// console.log(myarr[1])

// console.log(myarr2[1])

// Array methods
// myarr.push(3)
// myarr.push(5)
// console.log(myarr2)
// console.log(myarr)

// myarr.unshift(9)
// console.log(myarr)
// myarr.shift()

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(3))

// const newarr=myarr.join();
// console.log(newarr)

// slice,splice

// console.log("A",myarr);
// const myn1=myarr.slice(1,3)
// console.log(myn1)
// console.log("B",myarr);
// const myn2=myarr.splice(1,3)
// console.log("C",myarr);
// console.log(myn2);



const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const real_aa=[1,2,[3,4,5],7,[6,7,[4,5]]]
// const aa=real_aa.flat(Infinity)
// console.log(aa)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))


let score1=100
let score2=100
let score3=100
let score4=100


console.log(Array.of(score1,score2,score3,score4))


