/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}

async function showList(elem, url) {
  const response = await fetch(url);
  const data = await response.json();
  for (const item of data) {
    const li = document.createElement('li');
    li.textContent = item;
    elem.append(li);
  }
}

async function startShowingMessage(elem, url) {
  setInterval(async () => {
    const response = await fetch(url);
    const content = await response.text();
    elem.textContent = content;
  }, 1000);
}

async function handleError(elem, url) {
    const response = await fetch(url);
    if (!response.ok) {
      elem.textContent = `OH DEAR`;
    } else {
      const content = await response.text();
      elem.textContent = content;
    }
  }

async function drawBox(canvas,url){
  const response = await fetch(url);
  const rx = canvas.getContext('2d');
  if (response.ok) {
    const content = await response.json();
  }
  setInterval(() => {
    const randomincrease_x = Math.random()*100;
    const randomincrease_y = Math.random()*100;
    rx.fillRect(randomincrease_x,randomincrease_y,10,10);
  },1000);
}