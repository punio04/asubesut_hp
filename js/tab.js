jQuery(function ($) {
     //タブの実装
     $(".tabMenu li").click(function () {
        var index = $(".tabMenu li").index(this);
        $(".tabMenu li, .tabContent").removeClass("active");
        $(this).addClass("active");
        $(".tabContent").eq(index).addClass("active");
    });
    //タブへダイレクトリンクの実装
    //リンクからハッシュを取得
    var hash = location.hash;
    hash = (hash.match(/^#tab_panel-\d+$/) || [])[0];
    //リンクにハッシュが入っていればtabnameに格納
    if ($(hash).length) {
        var tabname = hash.slice(1);
    } else {
        var tabname = "tab_panel-1";
    }
    //コンテンツ非表示・タブを非アクティブ
    $(".tabMenu li").removeClass("active");
    $(".tabContent").removeClass("active");
    //何番目のタブかを格納
    var tabno = $(".tabContent#" + tabname).index() - 1;
    //コンテンツ表示
    $(".tabContent").eq(tabno).addClass("active");
    //タブのアクティブ化
    $(".tabMenu li").eq(tabno).addClass("active");
console.log(tabno);

});
