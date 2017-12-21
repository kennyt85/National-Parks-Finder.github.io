$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBbhqfr6ojolDSamP-4uuWc-CbdOVqee14",
        authDomain: "national-parks-finder.firebaseapp.com",
        databaseURL: "https://national-parks-finder.firebaseio.com",
        projectId: "national-parks-finder",
        storageBucket: "",
        messagingSenderId: "928628829701"
    };
    firebase.initializeApp(config);

    function fetchNPS(topic, location) {

        let key = 'ZKLb9xO0SnI4KkfXFdoM9fmLuFkJqtfVtXKPpxM0';
        let url = 'https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/' + topic + '?stateCode=co';

        var myHeaders = new Headers();
        myHeaders.append('X-Api-Key', key);
        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        fetch(url, myInit).then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            $('.display-result').html(JSON.stringify(json));
        });
    }


    // function initMap() {
    //     var uluru = {
    //         lat: -25.363,
    //         lng: 131.044
    //     };
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 4,
    //         center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // }

    $('#getLocation').click(function () {
        let location = $('#locationInput').val();
        fetchNPS('parks', location);
    })
});

//https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=ZKLb9xO0SnI4KkfXFdoM9fmLuFkJqtfVtXKPpxM0
//Account ID: eac74705-6bb1-4ee4-96ab-95e2fef6999a