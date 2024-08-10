const input = document.getElementById('user-input');
const result = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

checkBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if(value === ""){
    alert("Please provide a phone number");
  } else {
    if(checkNumber(value)){
      result.innerHTML += `<p class='text-green-800'>Valid US number: ${value}</p>`    
      } else {
       result.innerHTML += `<p class='text-red-600'>Invalid US number: ${value}</p>`   
    }
  }
})

clearBtn.addEventListener('click', () => {
  result.innerHTML = "";
  input.value = "";
})

const checkNumber = (number) => {
  const regex = /^(?:1\s?)?(?:(?:\(\d{3}\)\s?)|\d{3}[-\s]?)\d{3}[-\s]?\d{4}$/;
  return regex.test(number);
}

