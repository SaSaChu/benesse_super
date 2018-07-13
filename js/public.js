/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2018 ZEUS Design
 */
 
$(function () {

  $('.title_pic').imgLiquid ({
    fill: false
  });
  

  // 回到上面按鈕
  $('#top_btn').click (function () {
      $('html, body').animate ({ scrollTop: 0 }, 'slow');
  });

});