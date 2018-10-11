const container = document.querySelector("#body");
const etchBox = document.querySelector('#box');
function createTable (){
for (var i = 0; i <= 271; i++) {
  container.innerHTML += `<div id="box">ITEM ${i}</div>`;
}
}
createTable();

container.addEventListener('mouseover', function(event) {
  event.target.classList.add('colored');
});
