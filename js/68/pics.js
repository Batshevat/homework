(function () {
    'use strict';
    const imageElem = $('#image');
    const buttonElem = $('#button');
  

    buttonElem.click(e => {
        fetch('flickr/flickr.json')
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(pictures => {
                //console.log(pictures.items);
             pictures.items.forEach(picture => {
                 $(`<h2>${picture.title}</h2>
                <img src="${picture.media.m}"> </img>`)
                 .appendTo(imageElem);
             });
             
            });
    });





})();