// console.log("working...");

// const body = document.querySelector("body");

// const container = document.createElement("div");
// container.className = "container";
// body.appendChild(container);

const body = document.querySelector("body");

const left = document.createElement("div");
left.className = "left";
body.appendChild(left);

const right = document.createElement("div");
right.className = "right";
body.appendChild(right);

let btn = document.createElement("button");
btn.className = "button";
btn.innerText = "L";

let btn2 = document.createElement("button");
btn2.className = "button";
btn2.innerText = "R";
btn2.onclick = log2;
right.style.width = "50%";
let width2 = right.style.width;

let px2 = width2.split("%");
px2[1] = "%";
let temp2 = Number(px2[0]);

btn.onclick = log;
left.style.width = "50%";
let width = left.style.width;

let px = width.split("%");
px[1] = "%";
let temp = Number(px[0]);

left.appendChild(btn);
right.appendChild(btn2);

const pleft = document.createElement("p");
pleft.innerText = "50%";
left.appendChild(pleft);

const pright = document.createElement("p");
pright.innerText = "50%";
right.appendChild(pright);

function log2() {
  temp2 += 1;
  temp -= 1;
  console.log(temp2);
  px2[0] = temp2.toString();
  width2 = px2.join("");
  right.style.width = width2;

  px[0] = temp.toString();
  width = px.join("");
  left.style.width = width;

  pleft.innerText = width;
  pright.innerText = width2;
}

function log() {
  temp += 1;
  temp2 -= 1;
  console.log(temp);
  px[0] = temp.toString();
  width = px.join("");
  left.style.width = width;

  px2[0] = temp2.toString();
  width2 = px2.join("");
  right.style.width = width2;

  pleft.innerText = width;
  pright.innerText = width2;
}
