/*global google*/
window.initMap = function () {
    'use strict';



    const lakewood = { lat: 40.095657332825816, lng: -74.22207079649733 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: lakewood,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    });

    const tagInput = $("#tag");
    const rowsInput = $("#rows");

    $('#search').click(() => {
        fetch(`http://api.geonames.org/wikipediaSearch?q=${tagInput.val}&maxRows=${rowsInput.val}&username=Batshevat&type=json`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(wikiData => {
                console.log(wikiData);

                wikiData.geonames.forEach(place => {

                    const marker = new google.maps.Marker({
                        position: { lat: place.lat, lmg: place.lng },
                        map: map,
                        animation: google.maps.Animation.DROP,
                        title: place.title,

                        icon: place.thumbnailImg ? {
                            url: place.thumbnailImg,
                            scaledSize: new google.maps.Size(50, 50)
                        } : null,
                    });
                    const infoWindow = new google.maps.InfoWindow();
                    marker.addListener('click', () => {
                        infoWindow.setContent(` ${place.summary} <hr>
                 
                  <a target="_blank" href="${place.wikipedia.url}">more info</a>
                `);
                        infoWindow.open(map, marker);
                    });
                });
            });
    });
};