window.myProject = window.myProject || {};

window.myProject.clock = (function () {
    'use strict';
    function setCss(element, property, value) {
        element.style[property] = value;
    }

    let s = 0;
    let m = 0;
    let h = 12;



    function startTimekeeper() {
        const clock = document.createElement('div');
        clock.style.backgroundColor = 'lightgreen';
        clock.style.padding = '1.5em';
        clock.style.boxSizing = 'border-box';
        clock.style.width = `150px`;
        clock.style.height = `75px`;
        clock.style.position = 'absolute';
        clock.style.top = '0%';
        clock.style.left = '0%';
        clock.style.border = '4px solid black';
        clock.style.fontWeight = 'bold';
        clock.style.textAlign = 'center';

        setInterval(() => {

            s++;
            if (s >= 60) {
                s = 0;

                m++;
                if (m >= 60) {
                    m = 0;

                    h++;
                    if (h >= 12) {
                        h = 1;
                    }
                }
            }

            clock.innerHTML = `${h}:${m}:${s}`;
            document.body.appendChild(clock);

        }, 1000);

    }
    startTimekeeper();

}());