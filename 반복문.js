// //for 선언문

// for (let i = 0; i < 10; i++) {
//     console.log('지금 현재 i 값은', i, '입니다.');
// } // 0 1 2 3 4 5 6 7 8 9

// //while 선언문
// let j = 0;
// while (j < 10) {
//     console.log('지금 현재 j 값은', j, '입니다.');
//     j++;
// }

// // do while
// let k = 0;
// do {
//     console.log('지금 현재 k 값은', k, '입니다.');
//     k++;
// } while (k < 10)

const persons = {
    홍길동: {
        age: 29,
        job: '개발자',
        sex: '남',
        weight: 58,
    },
    김민지: {
        age: 28,
        job: '개발자',
        sex: '여',
        weight: 90,
    },
    박군: {
        age: 26,
        job: '개발자',
        sex: '남',
        weight: 52,
    },
};

for (i in persons) {

    for (j in persons[i]) {
        if (j === 'age' && persons[i][j] < 30 && persons[i]['sex'] == '여') {
            console.log('30살 미만이고 여자인사람', i);
        }
    }
}








