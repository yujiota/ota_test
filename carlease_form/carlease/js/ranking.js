(function() {
  'use strict';

  // var hash = "";
  var _tab = "",
      _item = "";

  function hashFactory() {
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
             var pair = vars[i].split("=");
             if(pair[0] == variable){return pair[1];}
      }
      return("");
    }

    _tab = getQueryVariable("tab");
    _item = getQueryVariable("item");

    console.log(_tab);
    console.log(_item);
  }

  $(function () {
    hashFactory();

    if (_tab == "showNo2") {

      $("#tab_no2").tab('show');
      if (_item == "item02") {
        $("#el_02").tab('show');
      } else {
        $("#el_01").tab('show');
      }

    } else if (_tab == "showNo3") {

      $("#tab_no3").tab('show');
      if (_item == "item02") {
        $("#el_02").tab('show');
      } else {
        $("#el_01").tab('show');
      }

    } else {

      $("#tab_no1").tab('show');
      if (_item == "item02") {
        $("#el_02").tab('show');
      } else {
        $("#el_01").tab('show');
      }
      
    }

    return false;
  });



})(jQuery);
