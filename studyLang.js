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
// let [a, b, ...rest] = array //�տ� 2�� ���� ������
// console.log(a, b)

/*-----------------------------*/

//spread
// let person = {
//     userName: "Seo",
//     age: 21
// }

// let person2 = {...person } //��ü ����, ������ ��ü�̴�, �� ����� ������� �߰�, ���� ����
// let person3 = person //���� ����� �Ȱ���, �� person3�� person�� �ּҰ��� ������
// console.log(person2)
// console.log(person==person3)
// console.log(person==person2)