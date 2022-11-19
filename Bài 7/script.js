function calculatePhoneCall() {
    let number = +document.getElementById('number').value;

    if(number <= 5) {
        document.getElementById('result').innerHTML= 5*500;
    } else if(number <= 10) {
        document.getElementById('result').innerHTML= 10*450;
    } else {
        document.getElementById('result').innerHTML= number*300;
    }
}