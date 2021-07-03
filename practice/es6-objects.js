// Object property shorthand

const nm = "Andrew"
const userAge = 27

const user = {
	nm,
	age: userAge,
	location: "Philadelphia",
}

console.log(user)

// Object destructuring

const product = {
	label: "Red notebook",
	price: 3,
	stock: 201,
	salesPrice: undefined,
	rating: 4.2, // will use this value even if a new value is set when destructuring as shown below
}

// const label = product.label
// const stock = product.stock

const { label: productLabel, stock, rating = 5 } = product
console.log(productLabel)
console.log(stock)
console.log(rating)

//can destructure within the argument
const transaction = (type, { label, stock }) => {
	console.log(type, label, stock)
}

transaction("order", product)
