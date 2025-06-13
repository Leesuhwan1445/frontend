const a = 1;
console.log('a 타입', typeof a); //a타입 number
const b = '1';
console.log('b 타입', typeof b);  //b 타입 string

// bigInt
const c = 2n; //2^53 - 1 보다 큰 값
console.log('c 타입', typeof c); //c 타입 bigint

const d = true;
console.log('d 타입', typeof d);

const e = null;
console.log('e 타입', typeof e);

const f = undefined;
console.log('f 타입', typeof f);

const g = NaN;
console.log('g 타입', typeof g);

const h = Infinity;
console.log('h 타입', typeof h);

const i = {}
console.log('i 타입', typeof i)