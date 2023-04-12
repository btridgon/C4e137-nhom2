/*Tạo một ứng dụng web, cho phép nhập vào 2 số a và b (a<b). 
Hiển thị tổng các số nguyên tố trong khoảng a và b. 
Tạo giao diện nhập 2 số và in kết quả trên giao diện web */

function isPrime(n) {
    //kiểm tra số nguyên tố
    if (n < 2) return false;
    for (var i = 2; i <= n - 1; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function calculate() {
    //lấy giá trị a và b từ ô input
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    //tính tổng
    var sum = 0;
    for (var i = a; i <= b; i++) {
        if (isPrime(i)) sum += i;
    }
    document.getElementById('result').innerHTML = sum;
}
/*Viết một function có tên numberOneTriangle(). 
Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác */


/*function numberOneTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let str = ' ';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
}
numberOneTriangle(5);
*/
