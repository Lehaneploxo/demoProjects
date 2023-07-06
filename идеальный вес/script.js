function pow2() {
  
const num1 = document.getElementById('n1').value;
  

const num2 = document.getElementById('n2').value;
  

const num3 = document.getElementById('n3').value;
  

const num4 = document.getElementById('n4').value;
  

  if ( num1 === 'мужчина' || num1 === 'Мужчина' || num1 === 'Мужской' || num1 === 'мужской' ) {
    let b = Math.round(((50 + (num3 - 150) * 0.75 + (num2 - 21) / 4 - num4)));
    alert(b > 0 ? `вам нужно набрать ${b}кг` : `вам нужно скинуть ${b}кг` );
  } else if ( num1 === 'женщина' || num1 === 'Женщина' || num1 === 'Женский' || num1 === 'женский' ) {
    let c = Math.round(((50 + (num3 - 150) * 0.32 + (num2 - 21) / 5 - num4)));
    alert(c > 0 ? `вам нужно набрать ${c}кг` : `вам нужно скинуть ${c}кг` );
  } else {
    alert('проверьте правильность написания ваших данных');
  }
 
};







