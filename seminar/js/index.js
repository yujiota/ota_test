$(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      removeservicefilter();
    });
  });

	$('#hokkaidofilterbtn').on('click', function () {
    $("#myTable tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("北海道") > -1);
      removeservicefilter();
    });
  });
  $('#tokyofilterbtn').on('click', function () {
    $("#myTable tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("東京") > -1);
      removeservicefilter();
    });
  });

  $('#osakafilterbtn').on('click', function () {
    $("#myTable tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("大阪") > -1);
      removeservicefilter();
    });
  });

  
  $('#dtbfilterbtn').on('click', function () {
    $("#myTable tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("通所介護") > -1);
      onlydtbactive();
    });
  });
  $('#hcrfilterbtn').on('click', function () {
    $("#myTable > tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("訪問介護") > -1);
      onlyhcractive();
    });
  });
  $('#hncfilterbtn').on('click', function () {
    $("#myTable > tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("訪問看護") > -1);
      onlyhncactive();
    });
  });
  $('#hhsfilterbtn').on('click', function () {
    $("#myTable > tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("居宅介護") > -1);
      onlyhhsactive();
    });
  });

  $('#nofilterbtn').on('click', function () {
    $("#myTable > tbody > tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("") > -1);
      removeservicefilter();
    });
  });


  $("#jump_dtb").click(function () {
    $("#dtbfilterbtn").click();
    $("#dtbfilterbtn").addClass('dtbfiltertriggered');
    onlydtbactive();
  });

  $("#jump_hcr").click(function () {
    $("#hcrfilterbtn").click();
    $("#hcrfilterbtn").addClass('hcrfilterbtntriggered');
    onlyhcractive();
  });

  $("#jump_hnc").click(function () {
    $("#hncfilterbtn").click();
    $("#hncfilterbtn").addClass('hncfilterbtntriggered');
    onlyhncactive();
  });

  $("#jump_hhs").click(function () {
    $("#hhsfilterbtn").click();
    $("#hhsfilterbtn").addClass('hhsfilterbtntriggered');
    onlyhhsactive();
  });

  function onlydtbactive() {
    $("#hcrfilterbtn").removeClass('hcrfilterbtntriggered');
    $("#hncfilterbtn").removeClass('hncfilterbtntriggered');
    $("#hhsfilterbtn").removeClass('hhsfilterbtntriggered');
  }

  function onlyhcractive() {
    $("#dtbfilterbtn").removeClass('dtbfiltertriggered');
    $("#hncfilterbtn").removeClass('hncfilterbtntriggered');
    $("#hhsfilterbtn").removeClass('hhsfilterbtntriggered');
  }

  function onlyhncactive() {
    $("#hcrfilterbtn").removeClass('hcrfilterbtntriggered');
    $("#dtbfilterbtn").removeClass('dtbfiltertriggered');
    $("#hhsfilterbtn").removeClass('hhsfilterbtntriggered');
  }

  function onlyhhsactive() {
    $("#dtbfilterbtn").removeClass('dtbfiltertriggered');
    $("#hcrfilterbtn").removeClass('hcrfilterbtntriggered');
    $("#hncfilterbtn").removeClass('hncfilterbtntriggered');
  }

  function removeservicefilter() {
    $("#hcrfilterbtn").removeClass('hcrfilterbtntriggered');
    $("#hncfilterbtn").removeClass('hncfilterbtntriggered');
    $("#hhsfilterbtn").removeClass('hhsfilterbtntriggered');
    $("#dtbfilterbtn").removeClass('dtbfiltertriggered');
  }

});
