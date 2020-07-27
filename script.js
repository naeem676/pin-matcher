const pinBtn = document.getElementById("pinBtn");
pinBtn.addEventListener("click", function(){
          
          
          const newPin =  Math.floor(Math.random() * (2000 - 1001)) +  1001;
          document.getElementById("pinInput").value = newPin;
          


          
          
})
document.getElementById("pinInput").value = "";