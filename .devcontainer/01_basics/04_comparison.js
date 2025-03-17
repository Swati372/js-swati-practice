console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)

//datatype inconsistency still in this case it is converting datatype
console.log("2" >1)
console.log("02">1)
//in > and >= case it is converting null to 0 but for == it is converting it in NaN
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// in case of undefined it will not convert it in 0
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

//=== strict check i.e. on datatype and value both

console.log("2"===2) //false