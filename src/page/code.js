import React, { Component } from "react";
//react 源码解析
export default class code extends Component {
  render() {
    return (
      <div>
        https://www.cnblogs.com/tangshiwei/p/12100306.html
        react 入口从src/index.js 中 ReactDOM.render  方法开始一步一步分析组件渲染的整个流程

        1.首先我们需要明确的是，在上述示例中，App组件的render方法返回的是一段HTML结构，在普通的函数中这种写法是不支持的，
        所以我们一般需要相应的插件来在背后支撑，在React中为了支持这种jsx语法提供了一个Babel预置工具包@babel/preset-react，其中这个preset又包含了两个比较核心的插件：

          * @babel/plugin-syntax-jsx：这个插件的作用就是为了让Babel编译器能够正确解析出jsx语法。

          * @babel/plugin-transform-react-jsx：在解析完jsx语法后，因为其本质上是一段HTML结构，因此为了让JS引擎能够正确识别，
             我们就需要通过该插件将jsx语法编译转换为另外一种形式。在默认情况下，会使用React.createElement来进行转换

         jsx语法最终被转换成由React.createElement方法组成的嵌套调用链
         2.1 createElement & ReactElement
           查看文件 == react/src/react.js&ReactElement.js 中
           有createElement方法
            /**
            * 该方法接收包括但不限于三个参数，与上述示例中的jsx语法经过转换之后的实参进行对应
           * @param type 表示当前节点的类型，可以是原生的DOM标签字符串，也可以是函数定义组件或者其它类型
           * @param config 表示当前节点的属性配置信息
           * @param children 表示当前节点的子节点，可以不传，也可以传入原始的字符串文本，甚至可以传入多个子节点
           * @returns 返回的是一个ReactElement对象
           */
           在类组件的render方法中最终返回的是由多个ReactElement对象组成的多层嵌套结构，所有的子节点信息均存放在父节点的props.children属性中
         2.2 Component & PureComponent
           ReactElement对象的结构之后，我们再回到之前的示例，通过继承React.Component我们将App组件修改为了一个类组件，我们不妨先来研究下React.Component的底层实现
          在源文件（== react/src/ReactBaseClasses.js 中）
          通过原型上的isReactComponent属性来区分函数定义组件和类组件

          在源码中就是通过这个属性来区分Class Component和Function Component的，可以找到以下方法：
         {`
          /**
           *  返回true则表示类组件，否则表示函数定义组件
           *   function shouldConstruct(Component) {
           *   return !!(Component.prototype && Component.prototype.isReactComponent);
           * /
            }
         ` }
      </div>
    );
  }
}
