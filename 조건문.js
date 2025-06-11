const a = 1;
const b = 2;
const c = 1;

if (a === b) {
    console.log('이 조건문 안에 들어옴');
} else if (a === c) {
    console.log('첫번째 조건이 달라서 여기로 옴');
}

// 상황 연산자

const result = a === b ? 'a와 b는 같습니다 ' : 'a와 b는 다릅니다';
console.log(result);

//switch 
switch (a) {
    case b:
        console.log('a는 b와 같습니다');
        break;
    case c:
        console.log('a는 b와 같습니다');
        break;
    default:
        console.log('a는 b나 c와 같지 않습니다');
}