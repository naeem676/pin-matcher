const pinBtn = document.getElementById("pinBtn");
pinBtn.addEventListener("click", function(){
          
          
          const newPin =  Math.floor(Math.random() * (2000 - 1001)) +  1001;
          document.getElementById("pinInput").value = newPin;
          let fail = document.getElementById("fail");
          fail.style.display = " none";
          let success = document.getElementById("success");
          success.style.display = "none";       
          
})
 document.getElementById("pinInput").value = "";

const submitInput = document.getElementById("submitInput");
function showValue(data) {
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


const submitBtn =document.getElementById("apply");
submitBtn.addEventListener("click", function(){
           let pinInput =  document.getElementById("pinInput").value;
          let submitInput = document.getElementById("submitInput").value;
          if (submitInput === pinInput) {
                    let success = document.getElementById("success");
                    success.style.display = "block";
                    let fail = document.getElementById("fail");
                    fail.style.display = " none";
                    document.getElementById("submitInput").value = "";
                    document.getElementById("pinInput").value = "";
                        
          }
                    
          

          else{
                    let fail = document.getElementById("fail");
                    fail.style.display = " block";
                    let success = document.getElementById("success");
                    success.style.display = "none";
                    document.getElementById("submitInput").value = "";
                    document.getElementById("pinInput").value = "";
                   
          }
          
})