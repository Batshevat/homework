const day = (function () {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    return {
        getDays: function (index) {
            return days[index - 1];
        },
        getIndex: function (name) {
            return days.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
        }
    };
}());
console.log('4', day.getDays(4));
console.log('monday', day.getIndex('monday'));

///////////////////////////////////////////////////////////

const icm = (function () {
    'use strict';
    return {
        setRate: function (rate) {
            return rate;
        },

        setYears: function (years) {
            return years;
        },

        calculateInterest: function (principle, years, rate) {
            return 1 + rate * years * principle;
        }

    };
}());

console.log(icm.calculateInterest(40, .05, 2));
console.log(icm.setRate(1));

