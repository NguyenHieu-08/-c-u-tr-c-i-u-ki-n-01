function checkAge() {
    let age = +document.getElementById('age').value;

    if(age >= 15) {
        document.getElementById('result').innerHTML= 'Đủ tuổi vào lớp 10';
    } else {
        document.getElementById('result').innerHTML= 'Không đủ tuổi vào lớp 10';
    }
}