const gridSize = document.querySelector('.grid-size');
const value = document.querySelector(".value");
var container = document.getElementById("grid");
const colorValue = document.querySelector('.colorValue');
const reset = document.querySelector(".reset");
var n;
function gridSizer(e) {
    value.textContent = `${e.target.value} x ${e.target.value}`;
    n = e.target.value;
    return removeGrids(n);
}
function removeGrids(n) {
    while (container.firstChild) {
        container.firstChild.remove();
    }
    return arrangeGrids(n);
}
function arrangeGrids(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("div");
            cell.innerHTML = "";
            cell.classList.add("unit");
            cell.classList.add(`unit${i}${j}`);
            container.appendChild(cell);
        }
    }
    container.style.cssText += `grid-template-columns: repeat(${n},1fr);grid-template-rows: repeat(${n},1fr);`
    const units = document.querySelectorAll(".unit");
    units.forEach(unit => unit.addEventListener("mousemove", handle)
    );
}
var data = "black"
function handle(e) {
    e.target.style.cssText += `background-color: ${data};`;
}
colorValue.addEventListener('change', (e) => {
    data = e.target.value;
});
gridSize.addEventListener('input', gridSizer);
arrangeGrids(8);
const units = document.querySelectorAll(".unit");
units.forEach(unit => unit.addEventListener("mousemove", handle));

reset.addEventListener('onclick', () => {
    removeGrids(8);
})