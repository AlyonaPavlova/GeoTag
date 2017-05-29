document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}
ymaps.ready(getLocation);
var myMap,
    addPlacemark,
    myGeoObject,
    x,
    y,
    myPosition;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(init);
    } else {
        alert('LOL, No Geo!')
    }
}
function init(position) {
    x = position.coords.latitude;
    y = position.coords.longitude;
    myMap = new ymaps.Map("map", {
        center: [x, y],
        zoom: 17,
        behaviors: ['scrollZoom', 'drag', 'multiTouch']
    });
    addPlacemark = new ymaps.Placemark([x, y],{content: 'Ты ТУТА!', balloonContent: 'Я ЗДЕСЯ!'});
    myMap.geoObjects.add(addPlacemark);
}

//        function init() {
////            console.log(ymaps.geolocation.longitude, ymaps.geolocation.latitude);
//            alert(ymaps.geolocation.latitude);
//            alert(ymaps.geolocation.longitude);
//            myMap = new ymaps.Map("map", {
//                center: [ymaps.geolocation.latitude, ymaps.geolocation.longitude],
////                center: [55.76, 37.64],
//                zoom: 17,
//                behaviors: ['scrollZoom', 'drag', 'multiTouch']
//            });
//            addPlacemark = new ymaps.Placemark([55.76, 37.64],{content: 'Москва!', balloonContent: 'Столица России'});
//            myMap.geoObjects.add(addPlacemark);
//            myGeoObject = new ymaps.GeoObject({
//                // Тип геометрии - точка.
//                type: 'Point',
//                // Координаты точки.
//                coordinates: [55.76, 37.64]
//            });
//            myMap.geoObjects.add(myGeoObject);
//        }
