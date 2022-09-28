## [scale和zoom的区别](https://www.cnblogs.com/gg1234/p/7090762.html)-推荐使用scale

### 1. 兼容性
  1. zoom是IE的产物，scale是w3c定制的标准，用scale较好
  2. zoom：Firefox和Opera Mini不支持. scale：IE8及Opera Mini不支持，IE9支持带前缀-ms-, IE11支持
### 2. 取值
  1. scale：取值只能是数字，可以为负数(相反方向)，scale可以使用scaleX，scaleY对不同方向进行缩放，zoom只能等比缩放
  2. zoom：默认为normal，normal、1、0时不放大也不缩小，可以为大于等于0的浮点数，也可以为百分比
### 3. 显示效果
  1. scale：默认以中心(50%, 50%)为准来变化，可以通过transform-origin来改变
  2. zoom：以左上角为原点进行缩放，并且不能改变
### 4. 位置
  1. scale：缩放后不占实际位置，缩放后看起来大或小，实际占位还是之前大小
  2.zoom：缩放后占实际位置，影响上下文的排版，也会引起页面回流
### 5. 对文字的缩放规则
  1. zoom：不受限制
  2. scale：不受限制
