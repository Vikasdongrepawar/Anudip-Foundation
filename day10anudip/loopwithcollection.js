let numbers = [10, 20, 30, 40, 50]

let doubled = numbers.map((num) => num * 2)
numbers.map((num) => {
  console.log(num)
})

console.log('Original: ', numbers) // Output: [10, 20, 30, 40, 50]
console.log('Doubled: ', doubled) // Output: [20, 40, 60, 80, 100]

function getUser() {
  const user = [
    { id: 1, name: 'vikas', email: 'vikasdongre9382@gmail.com' },
    { id: 2, name: 'ram', email: 'vikasdoddssngre9382@gmail.com' },
    { id: 3, name: 'vikram', email: 'serersdongre9382@gmail.com' },
    { id: 4, name: 'shyam', email: 'dongre9382@gmail.com' },
    { id: 5, name: 'mohan', email: 'vikassddongde9382@gmail.com' },
  ]
  return user
}
