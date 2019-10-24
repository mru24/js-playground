var unit1 = document.getElementById('select-box1');
var unit2 = document.getElementById('select-box2');
var input = document.getElementById('input-field');
var display = document.getElementById('result-field');


var convert = (a,unit1,unit2) => {
  var r;
  unit = unit1.value + ' to ' + unit2.value;
  // length
  switch (unit) {
    case 'metre to yard':
      r = a / 1.09361;
      break;
    case 'yard to metre':
      r = a * 1.09361;
      break;
    case 'centimetre to metre':
      r = a / 100;
      break;
    case 'metre to centimetre':
      r = a * 100;
      break;
    case 'centimetre to yard':
      r = a / 91.44;
      break;
    case 'yard to centimetre':
      r = a * 91.44;
      break;

  }

  var n = unit.search('to');
  var result = '<b>';
  result += a;
  result += '</b>';
  result += ' ';
  result += unit.slice(0,n);
  result += ' equals ';
  result += '<b>';
  result += Math.round( r * 100000 + Number.EPSILON ) / 100000;
  result += '</b>';
  result += ' ';
  result += unit.slice(n + 3);


  if(unit1.value === unit2.value) {
    display.innerHTML = 'Please choose different units';
    return;
  } else {
    if(r != 0) {
      setTimeout(function() {
        display.innerHTML = result;
        display.classList.add('active');
      }, 200);
    }
  }
}



input.addEventListener('keyup', function() {
  convert(input.value,unit1,unit2);
  console.log(input.value,unit1.value,unit2.value);
});
unit1.addEventListener('change', function() {
  convert(input.value,unit1,unit2);
  console.log(input.value,unit1.value,unit2.value);
});
unit2.addEventListener('change', function() {
  convert(input.value,unit1,unit2);
  console.log(input.value,unit1.value,unit2.value);
});
