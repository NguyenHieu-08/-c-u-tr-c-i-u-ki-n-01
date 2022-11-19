function checkInteger() {
    let numb = +document.getElementById('number').value;

    if (Number.isInteger(numb)) {
        if(numb > 0) {
            document.getElementById('result').innerHTML= 'Số nguyên dương';
        } else if(numb < 0) {
            document.getElementById('result').innerHTML= 'Số nguyên âm';
        } else {
            document.getElementById('result').innerHTML= `Số ${numb}`;
        }
    } else {
        document.getElementById('result').innerHTML= `Số bạn nhập là ${numb}, đây không phải là số nguyên`;
    }
}