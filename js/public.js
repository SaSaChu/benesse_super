/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2018 ZEUS Design
 */
 
$(function () {

  // 回到上面按鈕
  $('#top_btn').click (function () {
      $('html, body').animate ({ scrollTop: 0 }, 'slow');
  });


  // 右邊menu
   $('.m_list, #navbox .x,#cover').click(function() {
     $('#navbox').toggleClass('sn');
     $('#cover').toggleClass('show');
   });


  $('.title_pic').imgLiquid ({
    fill: false
  });
  
});