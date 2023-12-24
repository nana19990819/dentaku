function get_calc(button) {
    let display = document.getElementById("display");
    let target = button.innerHTML;
    let f = display.innerHTML.slice(0,-1);
    var m = ("+","-","*","/",".")
    


    if (target == "AC") {
        display.innerHTML = "0"
    } else {
        if (target == "=") {
        display.innerHTML = eval(display.innerHTML)
     } else {
        if (display.innerHTML == "0") {
            display.innerHTML = target;
    } else {
        if ((target == "+"|| target == "-" || target =="*" || target == "/" || target == "." )  && display.innerHTML.slice(-1) == "+") {
            display.innerHTML = f + "+"; 
        } else if ((target == "+"|| target == "-" || target =="*" || target == "/" || target == "." ) && display.innerHTML.slice(-1) == "-") {
            display.innerHTML = f + "-";
        } else if ((target == "+"|| target == "-" || target =="*" || target == "/" || target == "." ) && display.innerHTML.slice(-1) == "*") {
            display.innerHTML = f + "*";
        } else if ((target == "+"|| target == "-" || target =="*" || target == "/" || target == "." ) && display.innerHTML.slice(-1) == "/") {
            display.innerHTML = f + "/";
        } else if ((target == "+"|| target == "-" || target =="*" || target == "/" || target == "." ) && display.innerHTML.slice(-1) == ".") {
            display.innerHTML == f + ".";
        } else {
            display.innerHTML += target;
        }
        }
    }
    }
}  


"+"||"-"||"*"||"/"||"."

function oparater(button) {
    let display = document.getElementById("display");
    let target = button.innerHTML;
    let f = display.innerHTML.slice(0,-1);
    let m = display.innerHTML.slice(-1,-2);
    console.log(target)
}