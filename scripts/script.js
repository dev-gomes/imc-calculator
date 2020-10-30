function calcular() {
  const peso = document.querySelector("#pesoInput").value;
  const altura = document.querySelector("#alturaInput").value;
  const imc = peso / (altura * altura)
  document.getElementById("calculator-result").innerHTML = "Seu indice de massa corporal é:<br>" + imc
}
