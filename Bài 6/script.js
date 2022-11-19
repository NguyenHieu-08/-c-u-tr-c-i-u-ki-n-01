function checkRose() {
    let doanhso = +document.getElementById('doanhso').value;

    if(doanhso >= 100000000) {
        document.getElementById('result').innerHTML= 'Hoa hồng là 5%';
    } 
    if(doanhso > 1000000000) {
        document.getElementById('result').innerHTML= 'Hoa hồng là 4.5%';
    }
}