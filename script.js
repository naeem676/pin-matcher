const pinBtn = document.getElementById("pinBtn");
pinBtn.addEventListener("click", function(){
          
          
          const newPin =  Math.floor(Math.random() * (2000 - 1001)) +  1001;
          document.getElementById("pinInput").value = newPin;       
          
})
document.getElementById("pinInput").value = "";

let submitInput = document.getElementById("submitInput");
function calculate(data) {
          switch (data) {
                    case 'c':
                              submitInput.value = "";
                              break;
                    case '<':
                              submitInput.value = submitInput.value.substr(0, submitInput.value.length - 1);
                              break;
          
                    default:
                              submitInput.value += data;
                              break;
          }

          
}
document.getElementById("submitInput").value = "";