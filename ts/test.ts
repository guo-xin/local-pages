/**
 * @desc: ts基本数据类型及定义方式
 * @author guoxin
 * @date 2020/11/13
 */

 // 数字类型（number）
const test1: number = 2;

// 字符串类型（string）
// 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 
// 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
const test: string = '2';
const test2: string = `test${test1}-${test1 + 1}`;

// 布尔类型（boolean）,true/false
const test3: boolean = true

// 数组类型（array）
// 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
const test4: number[] = [1, 2, 3];
const test5: string[] = ['a', 'b', 'c'];
const test6: any[] = [1, 'b', 'c'];
// 第二种方式是使用数组泛型，Array<元素类型>
const test7: Array<number> = [1, 2, 3];

// 元组类型（tuple）
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 
// 比如，你可以定义一对值分别为 string和number类型的元组。
let test8: [string, number];
test8 = ['a', 1]; // ok
// test8 = [1, 1]; // error

// 任意值类型（any）
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型
let test9: any = 2;
test9 = '2'; // ok

// 枚举类型（enum）
// enum类型是对JavaScript标准数据类型的一个补充
enum Color {Red, Green, Blue}
let c: Color = Color.Green; // c是Green
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号
enum Color1 {Red = 1, Green, Blue}
let c1: Color1 = Color1.Green;
// 或者，全部都采用手动赋值
enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;
let c3: string = Color2[2]; // Green


// null和undefined
// undefined和null两者各自有自己的类型分别叫做undefined和null。 
// 和 void相似，它们的本身的类型用处不是很大

// never类型
// never类型表示的是那些永不存在的值的类型　

// void类型
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，可以使用void
function test10(params: string): void {
    // 不需要有返回
}

// 多种类型时,
const test11: number | string = '2';

// 对象的赋值及函数的默认参数
// b为可选属性，可选属性只需要在属性后面加上?，可选参数需定义在必选参数后面
// 定义返回值类型
function testParams(obj: { a: string, b?: number }): {color: string}{
    let { a, b = 1001 } = obj;
    return {color: a};
}
testParams({a: 'test'}); // ok

let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

// 接口
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// 只读属性，只能在定义的时候修改，之后不能修改
let p1: {
    readonly x: number;
    readonly y: number;
} = { x: 10, y: 20 };
// p1.x = 5; // error



function  test55(a:string, b:string, c:string="jojo"){
    console.log(a);
    console.log(b);
    console.log(c);
}
test55("xxx","yyy");

// angular http-client
// get请求
// this.http.get(url, {params, headers});
// post请求
// this.http.post(url, params, options)