jQuery(function ($) {
      var $spBtn = $('.navbar-toggler');
      var $gNav = $('#gnav');
      $spBtn.on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            $gNav.removeClass("open");
            $(this).removeClass("open");
        } else {
            $gNav.addClass("open");
            $(this).addClass("open");
        }
    });

});
