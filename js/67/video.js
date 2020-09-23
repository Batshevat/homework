(function () {
    'use strict';
    const videoelem = $('#video');
    fetch('videos.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(videos => {
            videos.forEach(video => {
                $(`<li> 
                <img src="${video.image || 'media/hebrew.jpg'}"> </img>
                ${video.name}
                </li>`)
                    .appendTo('#choises ul')
                    .click(() => {
                        videoelem.attr({ src: video.url });
                    });


            });
        }
        );


}());