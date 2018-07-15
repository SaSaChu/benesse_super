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
    addTime: false,
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
      var $img = $('<img />').attr('src', this.pics[this.now] + (this.addTime ? '?t=' + tt () : ''));
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
  var video_box = {
    $e: $('#video_box'),
    $title: $('#video_box .top span'),
    $video: $('#video_box .video'),
    $close: $('#video_box .close'),
    inited: false,

    init: function () {
      if (this.inited)
        return this.inited;
      this.$close.click(function () { this.close(); }.bind(this));
      this.inited = true;
      return this.inited;
    },
    show: function (title, src) {
      this.init();
      var $iframe = $('<iframe />').attr ('src', src).attr ('frameborder', 0).attr ('allow', 'autoplay; encrypted-media');
      this.$title.text(title);
      this.$video.append($iframe);
      this.$e.addClass('s');
    },
    close: function () {
      console.error ("x");
      
      this.$e.removeClass('s');
      this.$video.empty();
      this.$title.empty();
    }
  };

  $('*[data-video_box_title][data-video_box_src]').click (function () {
    video_box.show($(this).data('video_box_title'), $(this).data('video_box_src'));
  });
  $('.banners').each (function () {
    var $that = $(this);

    var total = $that.find('.items > *').length;
    var type = $that.data('type');
    $that.find('.pic').imgLiquid();

    var $a = $(Array.apply(null, { length: Math.ceil(total / type) }).map (function () { return $('<a />'); })).map ($.fn.toArray).click(function () {
      $(this).addClass('a').siblings().removeClass('a');
      $that.attr('data-i', ($(this).index() * type + 1));
    });

    
    $that.find('.pages').empty ().append($('<span />').append($a));
    $that.find('.left').click (function () {
      if ($a.filter('.a').prev().length) $a.filter('.a').prev().click();
      else $a.last().click();
    });
    $that.find('.right').click (function () {
      if ($a.filter('.a').next().length) $a.filter('.a').next().click();
      else $a.first().click();
    });
    $a.first().addClass('a');
  });
  $('.read_box').click (function () {
    read_box.show ($(this).data('pics'));
  });
  
});