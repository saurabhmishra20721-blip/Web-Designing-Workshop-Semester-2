function calculate() {
    let n = document.getElementById("num").value;
    if (n%2 === 0) {
        document.getElementById("result").innerHTML = n + " is an even number.";
    }
    else {
        document.getElementById("result").innerHTML = n + " is an odd number.";
    }
}