(function () {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  let interval;
  const theButton = get('start');



  let r = 0;
  let g = 0;
  let b = -1;

  const INCREMENT = 50;

  function startColors() {
    interval = setInterval(() => {
      addRow();
      b += INCREMENT;
      if (b >= 256) {
        b = 0;

        g += INCREMENT;
        if (g >= 256) {
          g = 0;

          r += INCREMENT;
          if (r >= 256) {
            r = 0;
          }
        }
      }

      setCss(document.body, 'backgroundColor', `rgb(${r},${g},${b})`);
      setCss(document.body, 'color', `rgb(${b},${g},${r})`);

      theButton.innerHTML = 'stop';
    }, 1000);
  }

  function stopColors() {
    clearInterval(interval);
    interval = null;
    theButton.innerHTML = 'start';
  }


  get('start').addEventListener('click', function () {
    if (!interval) {
      startColors();
    } else {
      stopColors();
    }
  });

  function addRow() {
    const now = new Date();
    const colorTable = [];

    const newColor = {
      date: now.toLocaleString(),
      color: `rgb(${r},${g},${b})`
    };

    colorTable.push(newColor);

    const contactsTable = get('colorLog');

    const newRow = contactsTable.insertRow();
    const timeCell = newRow.insertCell();
    const colorCell = newRow.insertCell();

    timeCell.innerHTML = newColor.date;
    colorCell.innerHTML = newColor.color;
  }
  get('colorLog').addEventListener('click', function () {
    setCss(document.body, 'backgroundColor', `rgb(${r},${g},${b})`);
    setCss(document.body, 'color', `rgb(${b},${g},${r})`);

    console.log('clicked');
  })
}());