import React from "react";

const CreateElement = () => {
  const element = React.createElement("p", null, "Hello World");
  return element;
};

export default CreateElement;

// 使用 JSX 寫的程式將會被轉換使用 React.createElement()。
// 如果使用 JSX，你通常不需要自己呼叫 React.createElement()。

// 透過 JSX 語法方式所寫的程式碼
// const element = <p>Hello World!</p>;

// 接著是透過 React.createElement() 所寫的程式碼：
// React.createElement('p',  null,  'Hello World');