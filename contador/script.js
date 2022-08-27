//contador inicial
var contador = 0

//seleciona o valor e o valor do botão
const value = document.getElementById('value')
const botoes = document.querySelectorAll(".btn")

botoes.forEach(function(btn){
      btn.addEventListener('click', function(e) {
           const styles = e.currentTarget.classList
           if (styles.contains('subtrai')) {
                  contador--
           } else if (styles.contains('soma')){
                  contador++
           } else {
                  contador = 0
           }

           if (contador > 0) {
                  value.style.color = '#34a853'
           }else if (contador < 0) {
            value.style.color = '#ea4335'
           } else {
                  value.style.color = '#333'
           }

           value.textContent = contador
      })
})