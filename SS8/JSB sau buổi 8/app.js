
function getValues(){
    
    var id = ["name","email","web","comment"];
    var text = "";
    let info = [];
    console.log("User info:")
    for(i = 0; i < id.length ; i++){
         let x = document.getElementById(id[i]);
         info[i] = x.value;
         console.log(JSON.stringify(id[i]) + ": " + info[i] + "\n");   
    }
    let y = document.getElementsByName("gender");
    for(i = 0; i < y.length; i++){
        if(y[i].type === "radio"){
            if(y[i].checked){
                console.log('"gender": ' + y[i].value);
                break;
            }
        }
    }
}
