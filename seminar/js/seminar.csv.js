<script>
    $(function() {
        $.ajax({
            url : './csv/seminar.csv',
            success : function(data) {
                // csvを配列に格納
                var csvList = $.csv.toArrays(data);
                // 挿入するHTMLを作成
                for (var i = 0; i < csvList.length; i++) {
                    var insert = '<tr><td>'
                            + csvList[i][0] + '</td><td>'
                            + csvList[i][1] + '</td><td>'
                            + csvList[i][2] + '</td><td class="hnc-color"><i class="fas fa-circle '
                            + csvList[i][3] + '"></i>'
                            + csvList[i][4] + '</td><td>'
                            + csvList[i][5] + '</td><td><a href="'
                            + csvList[i][6] + '" target="_blank" class="btn btn-application" role="button">お申込</a></td></tr>';
                    var target = '#seminar';

                    // targetへ追加
                    $(target).append(insert);
                }
            }
        });
    });

</script>
