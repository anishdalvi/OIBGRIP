function fahrenheitConvert(temperature){
    temperature = parseFloat(temperature);
    document.getElementById("celsius").value=((temperature-32)/1.8).toFixed(2);
    document.getElementById("kelvin").value=(((temperature-32)/1.8)+273.15).toFixed(2);
  }
  
  function celsiusConvert(temperature){
    temperature = parseFloat(temperature);
    document.getElementById("fahrenheit").value=((temperature*1.8)+32).toFixed(2);
    document.getElementById("kelvin").value=(temperature+273.15).toFixed(2);
  }
  
  function kelvinConvert(temperature){
    temperature = parseFloat(temperature);
    document.getElementById("fahrenheit").value=(((temperature-273.15)*1.8)+32).toFixed(2);
    document.getElementById("celsius").value=(temperature-273.15).toFixed(2);
  }


  function celsiusConvert1() {
    temp = document.getElementById('celsius').value;
    console.log(temp);
    celsiusConvert(temp);
  }

  function kelvinConvert1() {
    temp = document.getElementById('kelvin').value;
    console.log(temp);
    kelvinConvert(temp);
  }

  function fahrenheitConvert1() {
    temp = document.getElementById('fahrenheit').value;
    console.log(temp);
    fahrenheitConvert(temp);
  }



/* Resetting Inputs */

const reset = document.getElementById('reset');

reset.addEventListener('click', function handleClick(event) {
 
  event.preventDefault();

  const inputs = document.querySelectorAll('#celsius, #kelvin,#fahrenheit');

  inputs.forEach(input => {
    input.value = '';
  });
});

























  

/* Rouch Work */

/* document.getElementsByClassName("num1").stepDown(1); */
/* document.getElementsByClassName("num1").stepUp(1); */

  /* function minusOne() {
    minus = document.querySelector('.minus').id;
    console.log(minus);
    string1 = "minus-celsius";
    string2 = "minus-kelvin";
    string3 = "minus-fah";

    if (minus === string1) {
        console.log(minus);
        new_num = document.querySelector('.num1').stepDown();
        new_num = document.querySelector('.num1').value;
        new_num = parseFloat(new_num);
        console.log('celcius');
        celsiusConvert(new_num);
    }
    else if(minus === string2){
        console.log(minus);
        new_num = document.querySelector('.num1').stepDown();
        new_num = document.querySelector('.num1').value;
        new_num = parseFloat(new_num);
        console.log('kelvin');
        kelvinConvert(new_num);
    }
    else if(minus === string3){
        console.log(minus);
        new_num = document.querySelector('.num1').stepDown();
        new_num = document.querySelector('.num1').value;
        new_num = parseFloat(new_num);
        console.log('fah');
        fahrenheitConvert(new_num);
    }
    
    
   
  }

  function plusOne() {
    
    new_num=document.querySelector('.num1').stepUp();
    new_num = document.querySelector('.num1').value;
    new_num = parseFloat(new_num);
    celsiusConvert(new_num);
    kelvinConvert(new_num);
    fahrenheitConvert(new_num);
  } */
  

 /*  function minusOne() {
    document.querySelector('input[type=number]').stepDown();
    

  }

  function plusOne() {
    document.querySelector('input[type=number]').stepUp();
  } */


