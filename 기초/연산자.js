const a = 1;
const b = '1';
const c = 2;
const d = 1;

// 비교 연산자

console.log('a == b ', a == b); //true
console.log('a === b', a === b); //false
console.log(' a > c ', a > c); //false
console.log('a < c', a <= c); //true

//증감 연산자
let e = 1;
e++; // e = e +1;
console.log('e++', e); // e++1
e--;
console.log('e--', e_); //e--1
console.log('++e', ++e); //++e2
console.log('--e', --e); //--e1

console.log('a === b && a < c', a === b && a < c); // 둘중 하나라도 false 면 false === < 값과 타입
console.log('a === b || a < c', a === b || a < c); // 둘중 하나라도 true 면 true 
console.log(!false);
console.log('a !==b', a !== b); //false 가 나옴
console.log('a !=b', a != b); //false 가 나옴
