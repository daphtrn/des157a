(function () {

    'use strict';
    console.log('reading js');

    document.querySelector('.open1').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'showing';
    });

    document.querySelector('.close1').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.getElementById('overlay1').className = 'hidden';
        }

    });


    document.querySelector('.open2').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'showing';
    });

    document.querySelector('.close2').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.getElementById('overlay2').className = 'hidden';
        }

    });


    document.querySelector('.open3').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'showing';
    });

    document.querySelector('.close3').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.getElementById('overlay3').className = 'hidden';
        }

    });


    document.querySelector('.open4').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'showing';
    });

    document.querySelector('.close4').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.getElementById('overlay4').className = 'hidden';
        }

    });


    document.querySelector('.open5').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay5').className = 'showing';
    });

    document.querySelector('.close5').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay5').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.getElementById('overlay5').className = 'hidden';
        }

    });

    document.querySelector('.open6').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay6').className = 'showing';
    });

    document.querySelector('.close6').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay6').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.getElementById('overlay6').className = 'hidden';
        }

    });

})();