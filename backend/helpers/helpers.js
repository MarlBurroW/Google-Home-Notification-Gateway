function generateToken (length) {
  // edit the token allowed characters
  let a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('')
  let b = [];
  for (let i = 0; i < length; i++) {
    let j = (Math.random() * (a.length - 1)).toFixed(0)
    b[i] = a[j]
  }
  return b.join('')
}

function getApplicationPort () {
  return process.env.NODE_PORT || 3020
}

module.exports = {
  generateToken,
  getApplicationPort
}
