// object shorhand assignment

// let userName = "Seo"
// let age = 21

// let person = {
//     name: name,
//     age : age
// }

// let person = {
//     userName,
//     age
// }
// console.log(person)

/*-----------------------------*/
//destructuring 
// let person = {
//     userName: "Seo",
//     age: 21
// }
// let userName = person.userName

// let {userName, age} = person
// console.log(userName, age)

// let array = [1, 2, 3, 4]
// let [a, b] = array
// let [a, b, ...rest] = array //앞에 2개 빼고 나머지
// console.log(a, b)

/*-----------------------------*/

//spread
// let person = {
//     userName: "Seo",
//     age: 21
// }

// let person2 = {...person } //객체 복사, 각각의 객체이다, 이 방법은 멤버값을 추가, 변경 가능
// let person3 = person //위랑 결과는 똑같음, 단 person3은 person의 주소값을 참조함
// console.log(person2)
// console.log(person==person3)
// console.log(person==person2)