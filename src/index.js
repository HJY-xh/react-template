import "./index.css";
const div = document.createElement("div");

// 写入文本，添加类名
div.innerHTML = "hello, webpack";
div.classList.add("container");

document.body.appendChild(div);
