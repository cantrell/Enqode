if (typeof jQuery == 'undefined') {

  var msg = 'Enqode requires jQuery.';
  console.log(msg);
  alert(msg);

} else {

  var Enqode = {

    id:'_enqode',

    init:function(e) {
      $(document).bind('keydown', Enqode.onKeyDown);
    },

    onKeyDown:function(event) {
      if (event.ctrlKey && event.keyCode == 81) Enqode.showCode();
    },
    
    showCode:function() {
      if ($('#'+Enqode.id).length == 0) {
        var qr = $('<img/>');
        qr.attr('id', Enqode.id);
        qr.attr('src', 'http://christiancantrell.com/qr/get.php?url=' + escape(document.location));
        qr.attr('width', '111');
        qr.attr('height', '111');
        qr.css('position', 'absolute');
        qr.css('top', '2px');
        qr.css('right', '2px');
        qr.css('display', 'none');
        qr.appendTo('body');
      }
      $('#'+Enqode.id).toggle('slow');
    }
  };

  $(Enqode.init);
}
