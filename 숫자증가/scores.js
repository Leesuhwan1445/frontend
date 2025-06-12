const btn = document.getElementById('eventbtn');
const countdisplay = document.getElementById('count')

let count = 0;

// 버튼 이벤트

btn.addEventListener('click', function () {
    count += 1;
    countdisplay.textContent = count;
})
