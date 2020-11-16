/**
 * @desc: ts基本数据类型及定义方式
 * @author guoxin
 * @date 2020/11/13
 */
// 数字类型（number）
var test1 = 2;
// 字符串类型（string）
// 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 
// 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
var test = '2';
var test2 = "test" + test1 + "-" + (test1 + 1);
// 布尔类型（boolean）,true/false
var test3 = true;
// 数组类型（array）
// 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
var test4 = [1, 2, 3];
var test5 = ['a', 'b', 'c'];
var test6 = [1, 'b', 'c'];
// 第二种方式是使用数组泛型，Array<元素类型>
var test7 = [1, 2, 3];
// 元组类型（tuple）
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 
// 比如，你可以定义一对值分别为 string和number类型的元组。
var test8;
test8 = ['a', 1]; // ok
// test8 = [1, 1]; // error
// 任意值类型（any）
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型
var test9 = 2;
test9 = '2'; // ok
// 枚举类型（enum）
// enum类型是对JavaScript标准数据类型的一个补充
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green; // c是Green
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
// 或者，全部都采用手动赋值
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var c3 = Color2[2]; // Green
// null和undefined
// undefined和null两者各自有自己的类型分别叫做undefined和null。 
// 和 void相似，它们的本身的类型用处不是很大
// void类型
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function test10(params) {
    // 不需要有返回
}
// never类型
// never类型表示的是那些永不存在的值的类型　
console.log(222222, test1);
