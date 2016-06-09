"use strict";

$(function() {

    $('#setItemBtn').click(function(event) {
        var key = $('#wsKey').val(),
            data = $('#wsData').val(),
            storageType = $('input[name="storageType"]:checked').val();
        if (key !== '' && key !== undefined) {
            setStorageItem(key, data, storageType);
        }
    });

    $('#getItemBtn').click(function(event) {
        var key = $('#wsKey').val(),
            storageType = $('input[name="storageType"]:checked').val(),
            output;
        output = getStorageItem(key, storageType);

        $('#containerType').html(storageType + "Storage");
        $('#storageContainer').html(key + " : " + output);
    });

    $('#removeItemBtn').click(function(event) {
        var key = $('#wsKey').val(),
            storageType = $('input[name="storageType"]:checked').val(),
            output;
        removeStorageItem(key, storageType);
    });

    //rememberMe
    $('#signin').click(function(event) {
        var rememberMe = $('#rememberMe').is(':checked'),
            user = $('#username').val();
        if (rememberMe) {
            setStorageItem('USERNAME', user, 'local');
        }
    });

    $('#username').val(getStorageItem('USERNAME', 'local'));


    function setStorageItem(key, data, storageType) {
        //check if webStorage is supported by this browser
        if (supports_local_storage()) {
            if (storageType === 'session') {
                return sessionStorage.setItem(key, data);
            } else if (storageType === 'local') {
                return localStorage.setItem(key, data);
            }
        }
    }


    function getStorageItem(key, storageType) {
        //check if webStorage is supported by this browser
        if (supports_local_storage()) {
            if (storageType === 'session') {
                return sessionStorage.getItem(key);
            } else if (storageType === 'local') {
                return localStorage.getItem(key);
            }
        } else {
            return '';
        }
    }

    function removeStorageItem(key, storageType) {
        //check if webStorage is supported by this browser
        if (supports_local_storage()) {
            if (storageType === 'session') {
                return sessionStorage.removeItem(key);
            } else if (storageType === 'local') {
                return localStorage.removeItem(key);
            }
        }
    }

    function supports_local_storage() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }
});
