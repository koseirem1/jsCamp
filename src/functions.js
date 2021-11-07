//kare altı nokta olanlara snippet diyoruz.
function addToCart(productName) {
    console.log("Sepete eklendi : " + productName)
}

addToCart("Karpuz")
addToCart() //ben aslında yoğum.

//bir değişkene fonksiyon atadık. arrow function
let sayHello = () => {
    console.log("Hello World!")
}

sayHello()

//klasik function,name kullanmaya gerek yok
let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

let product1 = {productName:"Elma",unitPrice:10,quantity:3}
function addToCart3(product) {
    console.log("ürün " + product.productName)
    console.log("fiyat " + product.unitPrice)
    console.log("adet " + product.quantity)
}
addToCart3(product1)

function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:3},
    {productName:"Armut",unitPrice:10,quantity:3},
    {productName:"Karpuz",unitPrice:10,quantity:3}
]

addToCart4(products)
//rest
function add(bisey,...numbers) {
    console.log(numbers)
    console.log(bisey)
}

add(20,30,40)
//spread
let numbers = [10,20,30]
console.log(...numbers)

console.log(Math.max(20,40,50))