function pow2() {
  
    const num1 = document.getElementById('n1').value;
    const num2 = document.getElementById('n2').value;
    const num3 = document.getElementById('n3').value;
    const num4 = document.getElementById('n4').value;
    const num5 = document.getElementById('n5').value;
    const num6 = document.getElementById('n6').value;
        
    if (num2 > num5 && num3 > num6) {
      alert(`${num1} сносит голову ${num4}`);
    } else if (num5 > num2 && num6 > num3) {
      alert(`${num4} вырывает кадык ${num1}`);
    } else if (num2 > num5 && num3 === num6) {
      alert(`эту схватку выигрывает ${num1}`);
    } else if (num5 > num2 && num3 === num6) {
      alert(`после долгой борьбы, победу забирает ${num4}`);
    } else if (num2 === num5 && num3 > num6) {
      alert(`${num1} отправляет в глухой нокаут ${num4}`);
    } else if (num2 === num5 && num3 < num6) {
      alert(`${num4} из последних сил вырываеть ПОБЕДУ!`);
    } else if (num2 === num5 && num3 === num6) {
      Array.prototype.randomItem = function() {
        return this[Math.floor(Math.random()*this.length)];
      }
      
      const a = [num1, num4];
      
      alert(`Победитель этой равной схватки становиться ${a.randomItem()}`);

    } else if (num2 > num5 && num3 < num6) {
      Array.prototype.randomItem = function() {
        return this[Math.floor(Math.random()*this.length)];
      }
      
      const a = [num1, num4];
      
      alert(`Хитростью побеждает ${a.randomItem()}`);


    } else if (num2 < num5 && num3 > num6) {
      Array.prototype.randomItem = function() {
        return this[Math.floor(Math.random()*this.length)];
      }
      
      const a = [num1, num4];
      
      alert(`победитель этой схватки ${a.randomItem()}`);

    } 
      
    };
    
    