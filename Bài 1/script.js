function checkNumber() {
    let a = +document.getElementById('numberA').value;
    let b = +document.getElementById('numberB').value;

    if(a % b == 0) {
        document.getElementById('result').innerHTML= 'A chia hết B';
    } else {
        document.getElementById('result').innerHTML= 'A không chia hết B';
    }
}