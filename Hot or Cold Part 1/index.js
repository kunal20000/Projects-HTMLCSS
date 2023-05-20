function displayRandomNumber() {
  const no = Math.floor(Math.random()*40)-20;
  const num = document.getElementById('num');
  num.textContent = no;
}