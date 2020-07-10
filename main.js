

console.clear();

var tl = new TimelineMax({paused:true});
var dur = 20;

$(document).ready( function(){
  
  $('body').prepend('<div id="image-sequence">');
  
  for( var i=0; i<10; i++){
      var imgIndex = getImageIndex(i)
      var imgUrl = 'url(\'https://s3-us-west-2.amazonaws.com/s.cdpn.io/263075/paper-'+imgIndex+'.jpg\')'
      tl.to( '#image-sequence' , dur , {css: {backgroundImage: imgUrl}} )
  }
  tl.to( '#image-sequence' , dur , {rotation: 360} )

});

function getImageIndex(v){
  v++;
  v = v.toString().padStart(2, '0');
  return v;
}


$(window).scroll( function(){
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    if( scrollTop >= 0){
        tl.progress( scrollTop / ( docHeight - winHeight ) );
    }
  }
);