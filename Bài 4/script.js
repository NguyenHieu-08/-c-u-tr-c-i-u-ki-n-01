function findMax() {
    let a = +document.getElementById('numberA').value;
    let b = +document.getElementById('numberB').value;
    let c = +document.getElementById('numberC').value;

    let max = a;
    if(max < b) max = b;
    if(max < c) max = c;

    document.getElementById('result').innerHTML = `Số lớn nhất là ${max}`;
}