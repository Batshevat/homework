/* global pcs*/
(function () {
    'use strict';
    const shnitzelButton = $('#shnitzel');
    const kugelButton = $('#kugel');
    const challahButton = $('#challah');
    const resultElem = $('#result');
    const clearButton = $('#clear')

    shnitzelButton.click(() => {
        fetch('shnitzel.json')
            .then(r => r.text())
            .then(shnitzel => resultElem.text(shnitzel))
            .catch(err => pcs.messageBox(err));
    });
    kugelButton.click(() => {
        fetch('kugel.json')
            .then(r => r.text())
            .then(kugel => resultElem.text(kugel))
            .catch(err => pcs.messageBox(err));
    });
    challahButton.click(() => {
        fetch('challah.json')
            .then(r => r.text())
            .then(challah => resultElem.text(challah))
            .catch(err => pcs.messageBox(err));
    });
    clearButton.click(()=>{
        resultElem.empty();
    }
    );

}());