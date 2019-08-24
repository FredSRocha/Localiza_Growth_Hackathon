
function calcular() {
  var dailyMileage = parseFloat(document.querySelector("input[name='dailyMileage']").value);
  if(dailyMileage > 0) {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Preço Diário (UBER): R$ " + dailyMileage * 1.89 + "<br> Preço Mensal (UBER): R$ " + (dailyMileage * 1.89) * 30 + "<br><small>*Simulação na categoria mais barata (UBERX) desconsiderando preço dinâmico e considerando trânsito ideal.</small>";
  }
}
var form = document.getElementById("calculo");
form.addEventListener("submit", function(event){
  event.preventDefault();
  calcular();
});