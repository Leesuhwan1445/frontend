const btn = document.getElementById('eventbtn');
const container = document.getElementById('container')
let count = 0;

// 버튼 이벤트

btn.addEventListener('click', function () {
    const newDiv = document.createElement('div')
    newDiv.className = 'box';
    newDiv.textContent = `${count} ㅅㅂㅅㅂㅅㅂ`
    container.appendChild(newDiv);

})
