window.ap = window.app || {};
window.app.utils = (function(utils){
    'use strict';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   
         function getDayName (dayIndex) {
            return days[dayIndex - 1];
        }
         function getDayIndex(dayName) {
            const dn = dayName.toLowerCase();
            return days.findIndex(day => dn === day.toLowerCase()) + 1;
        }
    app.getDayIndex = getDayIndex;
    app.getDayName = getDayName;
    return app;

}( window.app.utils || {}));