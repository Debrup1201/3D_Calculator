function button(x) {

    let display = document.getElementById("display");
    let displayLength = display.value.length;

    if (display.value === 0) {
        display.value = "";
    }
    if (x !== "c" && x !== "+/-" && x !== "=" && x !== "." && displayLength <= 20) {
        if(display.value === 0){
            display.value = x;
        }
        display.value += x;
        navigator.vibrate(20);
    }
    
    if (x == "+/-" && display.value !== 0) {
            display.value  = -display.value;
    }
    
    if (x == "c") {
        display.value = "0";
    }
    
    if (x == "=") {
        if ((eval(display.value).length)>20)
            display.value = 'memory error';
        else 
            display.value = eval(display.value);
    }

   
    if (x == "." && display.value.split(".").length < 2 && display.value !== 0){
        display.value += ".";
    }
    else if (x == "." && display.value === 0) {
        display.value = 0;
    }
        
    
    let oneLess = display.value.length - 4;
    if (x == "del" && display.value !== 0 && display.value.length > 1) {
            display.value = display.value.substring(0, oneLess);
    }
    
}