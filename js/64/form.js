/*global $*/
(function () {
    'use strict';

    const name = $('#Name');
    const address = $('#Address');
    const nameResult = $('#nameResult');
    const addressResult = $('#addressResult');
    const submitButton = $('#submit');
    $('#form')
        .submit(() => {
            event.preventDefault();
            nameResult.text(name.val());
            addressResult.text(address.val());
        });
    $('#checkbox').change(() => {
        submitButton.prop('disabled', false);
    });
}());