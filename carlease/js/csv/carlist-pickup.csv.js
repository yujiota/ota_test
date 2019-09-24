$(function() {
    $.ajax({
      url : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vROyDnD3WVPdW4ktqG_6v9QJ0M11SQZuWaLY_mqQSZoLJHHXCvxfO44msIQfOhFmPu6rzkGVS8whPUi/pub?gid=0&single=true&output=csv',
      // url : '././csv/carlist.csv',
        success : function(data) {
            // csvを配列に格納
            var csvList = $.csv.toArrays(data);
            // 挿入するHTMLを作成
            for (var i = 0; i < csvList.length; i++) {
                var insert = '<span class="tag">'
                        + csvList[i][1] + '</span><li><h3><small>'
                        + csvList[i][2] + '</small><span>'
                        + csvList[i][3] + '</span><br><p>'
                        + csvList[i][4] + '<small>'
                        + csvList[i][5] + '</small>'
                        + csvList[i][6] + '</p></h3><div class="csv-text">'
                        + csvList[i][7] + '<br>'
                        + csvList[i][8] + '<br>'
                        + csvList[i][9] + '<br>'
                        + csvList[i][10] + '<br>'
                        + csvList[i][11] + '<br>'
                        + csvList[i][12] + '<br><small>'
                        + csvList[i][13] + '</small></div></li><p class="small">'
                        + csvList[i][14] + '</p>';
                var target;
                if (csvList[i][0] === "今週") {
                    target = '#this_week';
                } else if (csvList[i][0] === "先週") {
                    target = '#last_week';
                } else {
                    target = '#week_before_last';
                }
                // targetへ追加
                $(target).append(insert);
            }
        }
    });
});
$(function() {
    $.ajax({
      url : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vROyDnD3WVPdW4ktqG_6v9QJ0M11SQZuWaLY_mqQSZoLJHHXCvxfO44msIQfOhFmPu6rzkGVS8whPUi/pub?gid=0&single=true&output=csv',
      // url : '././csv/carlist.csv',
        success : function(data) {
            // csvを配列に格納
            var csvList = $.csv.toArrays(data);
            // 挿入するHTMLを作成
            for (var i = 0; i < csvList.length; i++) {
                var insert = '<img src="'
                        + csvList[i][15] + '">';
                var target;
                if (csvList[i][0] === "今週") {
                    target = '#this_week_img';
                } else if (csvList[i][0] === "先週") {
                    target = '#last_week_img';
                } else {
                    target = '#week_before_last_img';
                }
                // targetへ追加
                $(target).append(insert);
            }
        }
    });
});
