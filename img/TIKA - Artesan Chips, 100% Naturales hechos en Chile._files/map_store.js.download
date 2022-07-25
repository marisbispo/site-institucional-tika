
var base_url = 'https://apibodegas.loadingplay.com/',
checkout_url = 'https://pay.loadingplay.com/';
var site_name = 'tika';

function isLocalHost() {
    return document.location.href.indexOf('localhost') != -1;
}

function isDevelopment() {
    return document.location.href.indexOf('ondev.today') != -1;
}

// configure for each enviroment
if ( isLocalHost() )
{
    base_url = 'http://localhost:8520/';
    checkout_url = 'http://localhost:8522/';
}
else if ( isDevelopment() )
{
    base_url = 'https://apibodegas.ondev.today/';
    checkout_url = 'https://lpcheckout.ondev.today/';
}



var showPlaces = function(stores)
{
    var place = new Array();
    for(var x=0;x<stores.stores.length;x++){
        place['<strong>'+stores.stores[x].name+'</strong><br>'+stores.stores[x].street+' '+stores.stores[x].number+', '+stores.stores[x].city+', '+stores.stores[x].country]=new google.maps.LatLng(stores.stores[x].latitude, stores.stores[x].longitude);
    }

    var drgflag=true;

    //pregunta si está en un dispositivo movil
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // alert("mobile");
        // map.setOptions({ 'draggable': false });
        drgflag=false;
    }

    var popup;
    var n=1;
    var options = {
        scrollwheel: false,
        draggable: drgflag,
        zoom: 2,
        center: new google.maps.LatLng(32.022257, -89.919111),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles:[{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#9BBF72"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]}]
    };



    var map = new google.maps.Map(document.getElementById('map'), options);

    for(var i in place)
    {
        var marker = new google.maps.Marker(
        {
            position: place[i]
            , map: map
            , title: i
            , icon: 'https://7static.loadingplay.com/static/images/e58f0bca304edffce3671ca2fd6679e1_pin_10PX.png'
        });

        google.maps.event.addListener(marker, 'click', function(){
            if(!popup){
                popup = new google.maps.InfoWindow();
            }
            var note = this.title;
            popup.setContent(note);
            popup.open(map, this);

            limits.extend(place[i]);
        })
    }
};

$(document).ready(function()
{
    $.ajax(
    {
        url:base_url+"store/list_type/"+site_name+"/1",
        success: function(data)
        {
            showPlaces(data);
        }
    });
});
