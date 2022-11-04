//Contador de cliks
let num = document.getElementById("contador").value;
let cont = 0;

      function bnt() {
            cont ++;
            num = document.getElementById("contador").innerHTML = cont;
            if(cont === 15) {
                  alert("Já deu né");
                  cont = 0;
                  num = document.getElementById("contador").innerHTML = cont;
            }
      }

      let min = 0;
      let sec = 0;
      
      function start(){
            cron = setInterval(relogio,100)
      }
      
      function stopp() {
            clearInterval(cron);
      }

      function reset(){
            min = 0;
            sec = 0;
            stopp(cron);
            document.getElementById("span1").innerHTML = min + ':' + sec;
      }
      
      function relogio() {
            sec++;
            if(sec === 60) {
                  min++;
                  sec = 0;
            }
            document.getElementById("span1").innerHTML = min + ':' + sec;
      
      }

      function teste(){
            document.documentElement.classList.toggle("dark-mode");
      }



      