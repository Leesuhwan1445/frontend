const display = document.getElementById('display'); //값이 보이는곳
const buttons = document.querySelectorAll('button'); // 모든 버튼

let current = ''; //현재값
let operator = ''; // 연산값
let prev = ''; // 이전값

buttons.forEach((btn) => {
    //가져온 button들을 반복문을 돌린다.
    btn.addEventListener('click', () => {
        const value = btn.textContent;


        if (value === 'C') { //초기화 버튼을 눌렀을때
            current = '';
            prev = '';
            operator = '';
            display.value = '';
        } else if (['+', '-', 'x', '/'].includes(value)) {
            if (current === '')
                return;
            operator = value;
            prev = current;
            current = '';
        } else if (value === '=') {
            if (operator === '' || current === '' || prev === '')
                return;

            const a = parseFloat(prev);
            const b = parseFloat(current);
            let result = 0;

            if (operator === '+') {
                result = a + b;
            } else if (operator === '-') {
                result = a - b;
            } else if (operator === 'x') {
                result = a * b;
            } else if (operator === '/') {
                result = a / b;
            }
            display.value = result;
            current = result.toString();
            operator = '';
            prev = '';
        } else {
            current += value;
            display.value = current;
        }

    });

});

