import React, { Component } from 'react'

export default class diff extends Component {
    render() {
        return (
            <div>
                diff 算法
                1.传统的diff：diff算法即差异查找算法 ；对于html dom 结构即为tree的差异查找算法 而对于计算两棵树的差异时间复杂度为O（n^3）显然成本太高 react不可能采用这种传统的算法
                2.react diff ：
                    react采用虚拟dom技术实现对真实dom的映射，即react diff算法的差异查找实质是对两个js对象的差异查找
                基于三个策略：
                    1.web ui中的dom节点跨层级的移动操作特别少，可以忽略不计，（tree diff）
                    2.拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构（component diff）
                    3.对于同一层级的一组子节点，他们可以通过唯一的id进行区分 （element diff）
                注意：
                    只有在react更新阶段才会有diff算法的运用
                react更新阶段会对reactelement类型进行判断从而进行不同的操作，；reactelement类型包含：文本，dom，组件
                每个类型的元素更新处理方式：
                    自定义元素：主要是更新render出的节点，render出的节点对应的component去管理更新
                    text节点：直接更新文案
                    浏览器基本元素的更新：
                        1.更新属性，对比前后属性的不同、局部更新、并处理特殊属性。比如时间绑定；
                        2.子节点的更新，子节点更新主要是找出差异对象，找差异对象的时候也会使用上面的shouldUpdatereactcomponent来判断，如果是可以直接更新的就会递归调用子节点的更新，这样也是会递归查找
                        差异对象，不可以直接更新的删除之前的对象或者添加新的对象，之后根据差异对象操作dom元素（增删改查）
1.https://www.jianshu.com/p/650246766f67
2.https://segmentfault.com/a/1190000016539430

            </div>
        )
    }
}
