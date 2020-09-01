window.pcs = window.pcs || {};

window.pcs.tools = (function () {
  'use strict';

  function get(id) {
    return document.getElementById(id);
  }

  function setCss(element, property, value) {
    element.style[property] = value;
  }

  function getCss(element, property) {
    return getComputedStyle(element)[property];
  }

  return {
    wrap: function (id) {
      const theElem = get(id);

      return {
        css: function (property, value) {
          if (arguments.length < 2) { // get
            return getCss(theElem, property);
          }
          setCss(theElem, property, value);
          return this;
        },
        click: function (callback) {
          theElem.addEventListener('click', callback);
          return this;
        },
        hide: function () {
          setCss(theElem, 'display', 'none');
          return this;
        },
        show: function () {
          setCss(theElem, 'display', 'block');
          return this;
        },
        colorChange: function (time) {
          setInterval(function () {
            let INCREMENT = 100;
            let r = 0;
            let g = 0;
            let b = -1;
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
            setCss(theElem, 'color', `rgb(${r},${g},${b})`);
          }, time);
        }

      };
    }
  };
}());