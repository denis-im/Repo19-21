let shift = false;

const textArea = document.getElementById("text-area");
let text = "";

const keys = document.getElementsByClassName("key");
// for (let i = 0; i < keys.length; i++) {
//   keys[i].addEventListener('onclick', e => {
//     console.log(e.target.id);
// } )
// }

const keyPressed = (e) => {
  console.log(e);
}

window.onclick = e => {
  if (e.target.id.includes("key")){
    console.log(e.target.id);
  }
  if (e.target.id == "key-CL") {
    shift = !shift;
    redrawKeyboard();
  }
} 

const redrawKeyboard = () => {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].id.length === 5 && !Number.isInteger(keys[i].id[4]))
      keys[i].innerHTML = shift ? keys[i].id[4].toUpperCase() : keys[i].id[4];
  }
}