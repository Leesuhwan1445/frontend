const scores = [85, 90, 50, 58, 92, 61, 45, 70, 74];
const newscores = [];

let sum = 0

//score 배열에서 60점 이상인 점수만 골라서 newscores에 넣어주고
//그 배열의 평균 점수를 출력해주세요. filter나 map 사용하지 않고 반복문으로 해주세요

// parameter = 함수에 인자로 들어오는 변수

function add(a, b) {
    return a + b  // return = 함수의 실행 결과값
}

scores.forEach((score) => {
    if (score >= 60) {
        newscores.push(score)
        sum = sum + score
    }
})

let result = sum / newscores.length

console.log(newscores)

console.log(result)

console.log(123123123)