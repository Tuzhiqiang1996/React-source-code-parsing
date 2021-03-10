import React, { Component } from "react";
import Demo from "./demo";
import Td from './code'
export default class ceshi extends Component {
/**
 * https://segmentfault.com/a/1190000022105022  示例
 */
  componentDidMount() {
      /**
       * 打印一下 组件
       * props 值为空
       */
    console.log(<Demo />);
    console.log(<Demo><div>这是A组件</div></Demo>)
    console.log(this)
  }

  render() {

  console.log(this)
    return (
      <div>
        <Demo />
        <Td />
      </div>
    );
  }
}
