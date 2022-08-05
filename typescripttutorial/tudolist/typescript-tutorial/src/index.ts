import Saysomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

//インスタンス化
const saySomething = new Saysomething("Hello Typescript")
saySomething.sayText(root)