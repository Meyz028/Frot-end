"use strict";

/* ---------- Завдання 1 ----------
   n = 102 (варіант) → номер елемента = (n mod 10) + 1 = 3.
   3-й елемент  — getElementById
   4-й елемент  — querySelector                                      */
const n = 102;
const index = (n % 10) + 1;                       // 3

const first = document.getElementById("block3");  // 3-й елемент сторінки
const second = document.querySelector("#page > :nth-child(" + (index + 1) + ")"); // 4-й елемент

// Перший клік — змінюємо колір фону й тексту, повторний — змінюємо знову (перемикання)
function toggleColors(el, bgA, colorA, bgB, colorB) {
  const isA = el.dataset.state === "a";
  el.style.backgroundColor = isA ? bgB : bgA;
  el.style.color = isA ? colorB : colorA;
  el.dataset.state = isA ? "b" : "a";
}

first.addEventListener("click", function () {
  toggleColors(first, "#1e88e5", "#ffffff", "#ffeb3b", "#b71c1c");
});

second.addEventListener("click", function () {
  toggleColors(second, "#2e7d32", "#fffde7", "#ffccbc", "#311b92");
});

/* ---------- Завдання 2 ---------- */
const box = document.getElementById("photo-box");
// Фото Луцька (покладіть lutsk1.jpg, lutsk2.jpg, lutsk3.jpg у папку з index.html)
const PHOTOS = [
  { src: "lutsk1.jpg", alt: "Замок Любарта, Луцьк" },
  { src: "lutsk2.jpg", alt: "ЦУМ, Луцьк" },
  { src: "lutsk3.jpg", alt: "Старе місто, Луцьк" }
];
let photoIndex = 1;   // перше фото вже є на сторінці
const STEP = 20;      // px
const MIN_W = 60;     // px

function images() { return box.querySelectorAll("img"); }
function lastImg() { const l = images(); return l.length ? l[l.length - 1] : null; }

// Додати зображення (копія базового)
document.getElementById("btn-add").addEventListener("click", function () {
  const img = document.createElement("img");
  const photo = PHOTOS[photoIndex % PHOTOS.length];
  photoIndex++;
  img.src = photo.src;
  img.alt = photo.alt;
  img.className = "city-img";
  box.appendChild(img);
});

// Збільшити останнє зображення
document.getElementById("btn-grow").addEventListener("click", function () {
  const img = lastImg();
  if (img) img.style.width = (img.clientWidth + STEP) + "px";
});

// Зменшити останнє зображення
document.getElementById("btn-shrink").addEventListener("click", function () {
  const img = lastImg();
  if (img) img.style.width = Math.max(MIN_W, img.clientWidth - STEP) + "px";
});

// Видалити останнє зображення
document.getElementById("btn-del").addEventListener("click", function () {
  const img = lastImg();
  if (img) img.parentNode.removeChild(img);
});
