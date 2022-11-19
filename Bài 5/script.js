function ratingAcademic() {
    let a = +document.getElementById('numberA').value;
    let b = +document.getElementById('numberB').value;
    let c = +document.getElementById('numberC').value;

    let average = (a + b + c) / 3;

    if(average >= 0 && average < 4) {
        document.getElementById('result').innerHTML = `Điểm trung bình là ${average} => Học lực <b> Yếu </b>`;
    } else if(average >= 4 && average < 6) {
        document.getElementById('result').innerHTML = `Điểm trung bình là ${average} => Học lực <b> Trung Bình </b>`;
    } else if(average >= 6 && average < 8) {
        document.getElementById('result').innerHTML = `Điểm trung bình là ${average} => Học lực <b> Khá </b>`;
    } else {
        document.getElementById('result').innerHTML = `Điểm trung bình là ${average} => Học lực <b> Giỏi </b>`;
    }
}