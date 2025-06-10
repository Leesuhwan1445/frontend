const person = {
    name: '이수환',
    age: 29,
    job: '개발자',
    talk: (sentence) => {
        return sentence;
    },
    hobbies: {
        hobby1: '개발공부',
        hobby2: '운동',
    },
};

console.log(`안녕하세요 저는 ${person.name}입니다.
제 나이는 ${person.age}살 이고, 제 직업은 ${person.job}입니다.
제 취미는 ${person.hobbies.hobby1}와 ${person.hobby2}입니다.
${person.talk('앞으로 잘 부탁드립니다')}`);

//얕은 복사

// const person2 = person;

// person2.name = '이수퐝'

// console.log('첫번째 얕은 복사', person);

// const person3 = person;

// person3.job = '개백수'

// console.log('두번째 얕은 복사', person);

//깊은 복사

const deepCopy = (origin) => {
    const result = {};
    for (let key in origin) {
        if (origin[key] !== null && typeof origin[key] == 'object') {
            result[key] = deepCopy(origin[key])
        } else {
            result[key] = origin[key]
        }
    }
    return result
}

const person4 = deepCopy(person)
console.log(person4)

console.log('깊은 복사', person)

person4.name = '이수환';
person4.hobbies.hobby2 = '독서';

console.log('깊은 복사 후', person)

