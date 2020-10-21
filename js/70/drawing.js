/* global google*/
window.initMap = function () {
    'use strict';

    const lakewood = { lat: 40.095657332825816, lng: -74.22207079649733 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: lakewood,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    const markers = [];
    const circles = [];
    const rectangles = [];
    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    //markers

    google.maps.event.addListener(drawingManager, 'markercomplete', event => {
        markers.push(event.position);
        console.log(event);
        localStorage.markers = JSON.stringify(markers);
    });


    if (localStorage.markers) {
        const m = JSON.parse(localStorage.markers);
        m.forEach(pos => {
            new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP
            });

        });

    }
    //circles
    google.maps.event.addListener(drawingManager, 'circlecomplete', event => {
        circles.push(event.center, event.radius);
        localStorage.circles = JSON.stringify(circles);
    });


    if (localStorage.circles) {
        const c = JSON.parse(localStorage.circles);
        c.forEach(cenrad => {

            new google.maps.Circle({
                map: map,
                center: cenrad.center,
                radius: cenrad.radius

            });
        }

        );
    }
    //rectangle
    google.maps.event.addListener(drawingManager, 'rectanglecomplete', event => {
        rectangles.push(event.bounds);
        console.log(event);
        localStorage.rectangle = JSON.stringify(rectangles);
    });


    if (localStorage.rectangle) {
        const r = JSON.parse(localStorage.rectangles);
        r.forEach(bound => {
            new google.maps.Rectangle({
                bounds: bound,
                map: map,
                animation: google.maps.Animation.DROP
            });

        });

    }



};