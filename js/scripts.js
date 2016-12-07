(function(){
  $(document).ready(function(){
    hideSections();
    $('.collapse').collapse();
    $('button').click(showVol);

    function showVol(){
      hideSections();
      var id = '#section-' + this.id.split("-")[1];
      $(id).show("slow");
    }

    function hideSections() {
      $('#articles section').hide();
    }
  });
})();
