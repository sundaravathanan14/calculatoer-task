var container = document.createElement('div');
container.setAttribute("class","container");
var calculator = document.createElement('div');
calculator.setAttribute("class","calculator");
var form = document.createElement('form');
var disply = document.createElement('div');
disply.setAttribute("class","disply");
var displayValue=document.createElement('input');
displayValue.setAttribute("type","text");
displayValue.setAttribute("name","display");
displayValue.setAttribute("id","display");
disply.append(displayValue);
form.append(disply);
calculator.append(form);
container.append(calculator);
document.body.append(container);
createCalc();


document.addEventListener('keydown', (event) => {
    var name = event.key;
    var keyCode = event.keyCode;
    if (keyCode === 8 || keyCode === 46 || (keyCode >= 37 && keyCode <= 40) || (keyCode >= 48 && keyCode <= 57)){
        document.getElementById("display").value +=name;
       
    } else{
        alert("please enter only numbers");
        event.preventDefault();
    }
    
  }, false);


 


function createCalc(){
    var firstRow = ["AC","DE",".","/"];
    var secondRow=["7","8","9","*"];
    var thirdRow=["4","5","6","-"];
    var forthRow=["1","2","3","+"];
    var fifthRow=["00","0","="];
for(let i=0;i<5;i++){
    if(i==0){
        var div = document.createElement('div');
        form.append(div);
        for(let j=0;j<firstRow.length;j++){
            if(firstRow[j] !="AC" && firstRow[j] !="DE"){
            div.innerHTML+=`<input type="button" value="${firstRow[j]}"  onclick="display.value += '${firstRow[j]}' ">`;
            } else if(firstRow[j] =="AC"){
                div.innerHTML+=`<input type="button" value="AC" onclick="display.value = '' " >`;
            }else{
                div.innerHTML+=`<input type="button" value="DE" onclick="display.value = display.value.toString().slice(0,-1) " >`;
            }
        }
        }
    else if (i==1){
        var div = document.createElement('div');
        form.append(div);
        for(let j=0;j<secondRow.length;j++){
            div.innerHTML+=`<input type="button" value="${secondRow[j]}" onclick="display.value += '${secondRow[j]}' ">`;
        }
        }

        else if (i==2){
            var div = document.createElement('div');
            form.append(div);
            for(let j=0;j<thirdRow.length;j++){
                div.innerHTML+=`<input type="button" value="${thirdRow[j]}" onclick="display.value += '${thirdRow[j]}' ">`;
            }
            }

            else if (i==3){
                var div = document.createElement('div');
                form.append(div);
                for(let j=0;j<forthRow.length;j++){
                    div.innerHTML+=`<input type="button" value="${forthRow[j]}" onclick="display.value += '${forthRow[j]}' ">`;
                }
                }

                else  {
                    var div = document.createElement('div');
                    form.append(div);
                    for(let j=0;j<fifthRow.length;j++){
                        if(fifthRow[j] != '='){
                            div.innerHTML+=`<input type="button" value="${fifthRow[j]}" onclick="display.value += '${fifthRow[j]}' ">`;
                        }else{
                            div.innerHTML+=`<input type="button" value="${fifthRow[j]}" onclick="display.value = eval(display.value)" class="equal">`;
                        }
                        
                    }
                    }
    
}
}