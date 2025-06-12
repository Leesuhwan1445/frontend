// const humansarray = ['김', '이', '박'];

// const obejectarray = [
//     {
//         name: '김',
//     },
//     {
//         name: '이',
//     },
//     {
//         name: '박',
//     }
// ];

// const array = [1, 2, 3, 4, 5];
// push 마지막 배열의 추가
// array.push(6);

// //pop 마지막 배열을 삭제
// array.pop();


// unshift : 첫번쩨 배열에 추가
// array.unshift(0);

// //shift : 첫번째 배열을 삭제
// array.shift();

//splice : 배열 안에 원하는 위치에 추가/삭제
// array.splice(1, 0, 3); 추가
//삭제
// array.splice(2, 2)

// slice : 배열 일부를 복사
// const slice = array.slice(1, 3);

//concat : 배열 합치기

// const array2 = [6, 7, 8]
// console.log([...array, ...array2])
// console.log(array.concat(array2))

// indexof : 배열 위치 찾기

// console.log(array.indexOf(3));
// console.log(array.indexOf(100));

// includes : 배열 안에 값이 있는지 확인 (참,거짓)
// console.log(array.includes(3)) //true (값이 있다면)
// console.log(array.includes(100)) //false (값이 없다면)

// map : 조건에 따라 새로운 벼열을 만들어줌 
// const newarray = array.map((e) => e * 2);
// console.log(newarray);

// console.log(5 % 3); //나머지

// filter : 조건이 맞는 값만 추출(새로운 배열로 만들어줌)
// const filterarray = array.filter((e) => e % 2 === 1);
// console.log(filterarray);

// find : 조건에 맞는 첫번째 값을 반환
// const findarray = array.find((e) => e % 2 === 2);
// console.log(findarray);

// reduce : 배열의 누적 계산
// reduce((누적값,현재값) => {})

// sort : 배열을 정렬 
// const nonsortarray = [3, 2, 5, 1, 4]
// const sortarray = nonsortarray.sort()
// console.log(nonsortarray)

// 반복문을 이용해서 0부터 100까지 배열 하나와 101부터 200까지 배열을 만든 후
// 두개의 배열을 합친 다음 그 합친 배열에서 짝수만 있는 배열을 만들어 주세요.
// 그리고 그 배열을 역순으로 정렬해주시고, 배열안에 모든 수를 더해주세요.

// const array = [1, 2, 3, 4, 5];

//배열의 길이를 아는 방법 length

// console.log()

// for (let i = 0; i < array.length; i++) {
//     console.log(i)
// }

//value of array
// for (const data of array) {
//     console.log(data)
// }

// foreach

// array.forEach((data, index) => {
//     console.log(data, index)
// });

//map
// const newarray = array.map((data, index) => {
//     console.log(data, index);
//     return data = 2;
// });

const scores = [85, 90, 50, 58, 92, 61, 45, 70, 74];
const newscores = [];

//score 배열에서 60점 이상인 점수만 골라서 newscores에 넣어주고
//그 배열의 평균 점수를 출력해주세요. filter나 map 사용하지 않고 반복문으로 해주세요

// parameter = 함수에 인자로 들어오는 변수

let sum = 0;



