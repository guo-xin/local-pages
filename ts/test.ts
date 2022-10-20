/**
 * @desc: ts数据类型及定义方式
 */

// 数字类型（number）
const test1: number = 2;

// 字符串类型（string）
// 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。
// 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
const test: string = "2";
const test2: string = `test${test1}-${test1 + 1}`;

// 布尔类型（boolean）,true/false
const test3: boolean = true;

// 联合类型
const test11: number | string = "2";

// 数组类型（array）
// 有两种方式可以定义数组。 
// 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
const test4: number[] = [1, 2, 3];
const test5: string[] = ["a", "b", "c"];
const test6: any[] = [1, "b", "c"];
// 第二种方式是使用数组泛型，Array<元素类型>
const test7: Array<number> = [1, 2, 3];


// 元组类型（tuple）
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 比如，你可以定义一对值分别为 string和number类型的元组。
let test8: [string, number];
test8 = ["a", 1]; // ok
// test8 = [1, 1]; // error

// 任意值类型（any）
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型
let test9: any = 2;
test9 = "2"; // ok

// 枚举类型（enum）
// enum类型是对JavaScript标准数据类型的一个补充
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green; // c是Green
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号
enum Color1 {
    Red = 1,
    Green,
    Blue,
}
let c1: Color1 = Color1.Green;
// 或者，全部都采用手动赋值
enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4,
}
let c2: Color2 = Color2.Green;
let c3: string = Color2[2]; // Green

// 对象，key，value的类型限制
const detailInfo: { [key: string]: number } = { name: 2 };
const detailInfo1: { [key: string]: any } = { name: '2' };

// 只读属性，只能在定义的时候修改，之后不能修改
let p1: {
    readonly x: number;
    readonly y: number;
} = { x: 10, y: 20 };
// p1.x = 5; // error


// null和undefined
// undefined和null两者各自有自己的类型分别叫做undefined和null。
// 和 void相似，它们的本身的类型用处不是很大

// never类型
// never类型表示的是那些永不存在的值的类型

// 函数
// void类型
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，可以使用void。不确定类型的时候使用any
// 函数声明
function test10(params: string, name?: string): void {
  // 不需要有返回
}
// 表达式
let test111 = function (a: number, b: number): void {}
// 箭头函数
let test112 = (a: number, b: number): void => {}

// 泛型
function test110<T>(params: T): T {
  return params
}
// test110(2)

// 匿名函数+泛型,输入输出类型一致
let uName = function<T> (params: T): T {
    return params
}
// uName(2)

// 箭头函数
const test12 = <T> (x: T): T => {
    return x
};

// test12('3')
// test12<number>(3)

// 默认参数
function test55(a: string, b: string, c: string = "jojo") {
    console.log(a);
    console.log(b);
    console.log(c);
}
test55("xxx", "yyy");


// 类型断言
let someValue: any = "this is a string";
// jsx兼容性不是很好
let strLength: number = (<string>someValue).length;


let someValue1: any = "this is a string";
// 推荐
let strLength1: number = (someValue1 as string).length;



// 类型types及应用
type userName = string;
// 联合类型
type userId = string | number;
type Student3 = { stuNo: number } | { classId: number }
type arr = number[];
// 元组
type Data = [number, string]

const numbers: arr = [1, 8, 9]
const Students: Student3 = { stuNo: 1, classId: 1 }

// 定义对象
type Person = {
    id: userId; // 可以使用定义类型
    name: userName;
    age: number;
    gender: string;
    isWebDev: boolean;
};
const user: Person = {
  id: '901',
  name: '椿',
  age: 22,
  gender: '女',
  isWebDev: false,
}


type Person1<T> = {
  id: userId // 可以使用定义类型
  name: userName
  age: number
  gender: string
  isWebDev: T
}
const user1: Person1<boolean> = {
  id: '901',
  name: '椿',
  age: 22,
  gender: '女',
  isWebDev: false,
}


// 结合泛型
type Tree<T> = { value: T };
const trees: Tree<string> = { value: '3' }

// 定义函数
type SetPoint = (x: number, y: number) => void
let test13: SetPoint = function(x, y) {

}


// 接口-interface，只能描述对象类型（对象和函数）及应用
// 对象
interface Point {
    x: number
    y?: number
}

const testP: Point[] = [{ x: 1, y: 4 }];
const testP1: Point = { x: 3 };

// 数组
interface stringArray {
  [propName: number]: string
}

let arr: stringArray = {
  0: 'a',
  1: 'b',
  2: 'c',
}

// 函数
interface SetPoint1 {
  (x: number, y: number): void
}
let test15: SetPoint1 = function (a, b) {}

let test16: SetPoint1 = <T> (j, k): T => {
  return j
}
test16(2, 3)


// type和interface的继承
interface Person2 {
  name: string
}
// 多个用逗号extends Person2, Person3
interface Student extends Person2 {
  stuNo: number
}

type Person3 = {
    name: string
}

type Student1 = Person3 & { stuNo: number }


// 声明合并
// 如果你多次声明一个同名的接口，TypeScript 会将它们合并到一个声明中，并将它们视为一个接口。这称为声明合并
// 如果是type的话，重复声明会报错


// 综合应用
// 对象的赋值及函数的默认参数
// b为可选属性，可选属性只需要在属性后面加上?，可选参数需定义在必选参数后面
// 定义返回值类型
function testParams(obj: { a: string; b?: number }): { color: string } {
    let { a, b = 1001 } = obj;
    return { color: a };
}
testParams({ a: "test" }); // ok

let myAdd: (a: number, b: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};