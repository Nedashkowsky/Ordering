ymaps.ready(init);
var myMap;
function init() {
    var myPlacemark,
        myMap = new ymaps.Map('map', {
            center: [54.193033, 37.617752],
            zoom: 15
        }, {
            balloonMaxWidth: 200,
            searchControlProvider: 'yandex#search'
        });

    myMap.events.add('click', function (e) {
        var coords = e.get('coords');

        if (myPlacemark) {
            myPlacemark.geometry.setCoordinates(coords);
        }
        else {
            myPlacemark = createPlacemark(coords);
            myMap.geoObjects.add(myPlacemark);
        }

            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentBody: '<p>Координаты точки: ' + [
                        coords[0].toPrecision(6),
                        coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
            });
    });

    function createPlacemark(coords) {
        return new ymaps.Placemark(coords, {
            preset: 'islands#violetDotIconWithCaption',
            draggable: true
        });
    }
}

comment.maxLength = 500;
let flag = 0;
btn.onclick = function () {
    if(!validName()){
        errorName.style.color = "red";
        errorName.innerHTML = 'Поле ФИО введено некорректно';
        flag++;
    }
    else{
        errorName.innerHTML = '';
        flag = 0;
    }
   if(!validEmail()){
        errorMail.style.color = "red";
        errorMail.innerHTML = 'Email введен некорректно';
        flag++;
    }
   else{
       errorMail.innerHTML = '';
       flag = 0;
   }
   if(!validPhone()){
       errorPhone.style.color = "red";
       errorPhone.innerHTML = 'Введите номер телефона в формате 8 xxx xxx xx xx';
       flag++;
   }
   else{
       errorPhone.innerHTML = '';
       flag = 0;
   }
   success();
}

function validEmail() {
    let regexp = /^[\w]{1}[\w-_\.]*@[\w-]+\.[a-z]{2,4}$/i;
    let email = document.getElementById('mail').value;
    return regexp.test(email);
}

function validPhone() {
    let regexp = /^8\d{10}$/;
    let phone = document.getElementById('phone').value;
    return regexp.test(phone);
}

function validName() {
    let regexp = /\p{L}+\s+\p{L}+\s+\p{L}+/iu;
    let name = document.getElementById('name').value;
    return regexp.test(name);
}

function success() {
    if(flag == 0){
        result.innerHTML = 'Заказ оформлен!';
    }
}