function showTime() {
      var date = new Date()
      var hora = date.getHours()
      var minutos = date.getMinutes()
      var segundos = date.getSeconds()
      var secao = "AM"

      if (hora == 0) {
            hora = 12
      }

      if (hora > 12) {
            hora = hora - 12
            secao = "PM"
      }

      hora = (hora < 10) ? "0" + hora : hora;

      minutos = (minutos < 10) ? "0" + minutos : minutos;
      
      segundos = (segundos < 10) ? "0" + segundos : segundos;

      var time = hora + ":" + minutos + ":" + segundos + " " + secao;
      document.getElementById("displayClock").innerHTML = time
      document.getElementById("displayClock").textContent = time
      
      setTimeout(showTime, 1000);
}

showTime();