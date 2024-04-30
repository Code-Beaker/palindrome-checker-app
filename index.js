const input = document.getElementById("wordInput");
const resultStatus = document.getElementById("status");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;

  const reverse = reverseString(value);
  //   alert(reverse);

  if (reverse === value) {
    console.log(true);
    resultStatus.textContent = "Palindrome!";
    resultStatus.classList.add("pop");
  } else {
    console.log(false);
    resultStatus.textContent = "Not quite there!";
    resultStatus.classList.remove("pop");
  }
}
