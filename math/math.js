function pow2() {
   let n = document.getElementById('inp1').value
   let a = factorial = (n) => n === 1 ? 1 : n * factorial(n - 1)
   alert(a(n))
}

function pow3() {
   let num = document.getElementById('inp2').value
   let power = document.getElementById('inp3').value
   alert( num ** power)
}

