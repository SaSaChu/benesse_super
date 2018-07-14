/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2018 ZEUS Design
 */

function tt () { return new Date ().getTime (); }
 
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

  // $read_box = $('#read_box');

  var read_box = {
    $e: $('#read_box'),
    $close: $('#read_box .close'),
    $pic: $('#read_box .pic'),
    $left: $('#read_box .left'),
    $right: $('#read_box .right'),
    $doubleLeft: $('#read_box .double-left'),
    $doubleRight: $('#read_box .double-right'),
    $bottomSpan: $('#read_box .bottom span'),
    now: -1,
    pics: [],
    inited: false,
    init: function () {
      if (this.inited)
        return this.inited;

      this.$close.click(function () { this.close(); }.bind(this));
      this.$left.click(function () { this.prep(); }.bind(this));
      this.$right.click(function () { this.next(); }.bind(this));
      this.$doubleLeft.click(function () { this.now = 0; this.pic(); }.bind(this));
      this.$doubleRight.click(function () { this.now = this.pics.length - 1; this.pic(); }.bind(this));

      this.inited = true;

      return this.inited;
    },
    close: function (pics) {
      this.$e.removeClass ('s');
      this.$pic.empty().addClass ('h');
      this.$bottomSpan.attr('data-a', '0').attr('data-b', '0');
      this.pics = [];
      this.now = -1;
    },
    show: function (pics) {
      this.init();

      this.now = -1;
      this.pics = pics;
      this.$bottomSpan.attr('data-a', '0').attr('data-b', '0');
      this.$pic.empty().addClass ('h');
      this.$e.addClass ('s');

      this.next ();
    },
    pic: function () {
      this.$bottomSpan.attr('data-a', this.now + 1).attr('data-b', this.pics.length);
      var $img = $('<img />').attr('src', this.pics[this.now] + '?t=' + tt ());
      this.$pic.empty().addClass('h').append($img);

      $img.load (function () {
        var w = $img.get (0).width, h = $img.get (0).height;
        var mw = $(window).width() - 64 * 2 - 8 * 2, mh = $(window).height() - 55 - 8 * 2;

        if (w > mw) { h = mw / w * h; w = mw; }
        if (h > mh) { w = mh / h * w; h = mh; }

        this.$pic.css({
          'top': 'calc((100% - 55px - 4px * 2 - ' + h + 'px) / 2)',
          'left': 'calc((100% - ' + w + 'px) / 2)',
          'width': w + 'px',
          'height': h + 'px',
          'line-height': h + 'px',
        }).removeClass('h');

      }.bind(this));
    },
    prep: function () {
      this.now = --this.now < 0 ? this.pics.length - 1 : this.now;
      this.pic();
    },
    next: function () {
      this.now = ++this.now < this.pics.length ? this.now : 0;
      this.pic();
    }
  };

  $('.read_box').click (function () {
    read_box.show ($(this).data('pics'));
  });
  
});