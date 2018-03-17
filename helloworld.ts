// function sayHello(person:string) {
//     return 'Hello, ' + person;
// }

// let user2 = [1,2,3];
// console.log(sayHello(user2)
// ts 带来了预编译的js 从动态语言，静态，类型检测，杜绝错误
// typescript 类型？
// // 用类型来约束代码
// let isDone:boolean = false
// isDone = true
// let decLiteral:number = 6;
// let hexLiteral:number = 0xf00d;
// let binaryLiteral:number = 0b1010;
// let notNumber:number = NaN;
// let infinityNumber:number = Infinity;

// let myName:string = 'Tom';
// let myAge:number = 25;
// let sentence:string = `Hello, my name is ${myName}. I will be ${myAge+1} years old next month`;

// typescript 认为undefined,null是其他类型的子类型
// let u: undefined = undefined;
// let n: null = null;
// let num: number = undefined;

// // any 支持所有类型
// let myFavoriteNumber: string | number = 'seven'
// myFavoriteNumber = 7;

// function getLength (
//     something: string | number 
// ) :string {
//     return something.toString()
// }

// interface Person {
//     name: string;
//     age: number;
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 25
// }

// interface Alarm {
//     alert()
// }
// interface Light {
//     LightOn();
//     LightOff();
// }
// class Car implements Alarm, Light {
//     alert() {
//         console.log('Car alert')
//     }
//     LightOn() {
//         console.log('Car light on')
//     }
//     LightOff() {
//         console.log('Car light off')
//     }
// }
// class Door {}
// class SecurityDoor extends Door implements Alarm {
//     alert() {

//     }
// }

// 泛型是指定义函数，接口或类的时候不预先指定具体的类型，在使用时再指定类型的一种特性,动态属性
// 创建数组，数值数组，字符数组
// function createArray<T>(length: number, value: T):Array<T>{
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value
//     }
//     return result
// }

// let fibonacci: number[] = [1,1,3,5];
// let list: any = ['Xcat Liu', 25, {website: 'http://www.baidu.com'}]
// function sum() {
//     let args:IArguments = arguments//arguments代表所有参数
// }
// function add(a:number, b:number):number {
//     return a + b
// }
// ?:代表不一定必填
// function buildName(firstName: string, lastName?:string):string {
//     if(firstName) {
//         return firstName + ' ' + lastName
//     } else {
//         return firstName;
//     }
// }

// let xcatliu: [string, number] = ['Xcat Liu', 25];
// typescript是JavaScript的超集，全面es6,部分es7
// let myFavoriteNumber:String = 'seven';
// 类型推断
// myFavoriteNumber = 7
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat}
console.log(Days['Sun'] === 0)

