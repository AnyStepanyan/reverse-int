module.exports = function reverse (n) {
    let absNum = Math.abs(n)
    let newNum = absNum.toString().split('').reverse().join('')
  
    return newNum
}
