function tt(){return(new Date).getTime()}$(function(){function t(){var t=jQuery("html"),i=t.data("scroll-position");t.css("overflow",t.data("previous-overflow")),window.scrollTo(i[0],i[1])}function i(){var t=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop],i=jQuery("html");i.data("scroll-position",t),i.data("previous-overflow",i.css("overflow")),i.css("overflow","hidden"),window.scrollTo(t[0],t[1])}$("#top_btn").click(function(){$("html, body").animate({scrollTop:0},"slow")}),$(".m_list, #navbox .x,#cover").click(function(){$("#navbox").toggleClass("sn"),$("#cover").toggleClass("show")}),$(".title_pic").imgLiquid({fill:!1}),$("._ic").imgLiquid({});var e={$e:$("#read_box"),$close:$("#read_box .close"),$pic:$("#read_box .pic"),$left:$("#read_box .left"),$right:$("#read_box .right"),$doubleLeft:$("#read_box .double-left"),$doubleRight:$("#read_box .double-right"),$bottomSpan:$("#read_box .bottom span"),now:-1,pics:[],inited:!1,addTime:!1,init:function(){return this.inited?this.inited:(this.$close.click(function(){this.close()}.bind(this)),this.$left.click(function(){this.prep()}.bind(this)),this.$right.click(function(){this.next()}.bind(this)),this.$doubleLeft.click(function(){this.now=0,this.pic()}.bind(this)),this.$doubleRight.click(function(){this.now=this.pics.length-1,this.pic()}.bind(this)),this.inited=!0,this.inited)},close:function(){t(),this.$e.removeClass("s"),this.$pic.empty().addClass("h"),this.$bottomSpan.attr("data-a","0").attr("data-b","0"),this.pics=[],this.now=-1},show:function(t){this.init(),this.now=-1,this.pics=t,this.$bottomSpan.attr("data-a","0").attr("data-b","0"),this.$pic.empty().addClass("h"),this.$e.addClass("s"),this.next(),i()},pic:function(){this.$bottomSpan.attr("data-a",this.now+1).attr("data-b",this.pics.length);var t=$("<img />").attr("src",this.pics[this.now]+(this.addTime?"?t="+tt():""));this.$pic.empty().addClass("h").append(t),t.load(function(){var i=t.get(0).width,e=t.get(0).height,n=$(window).width()-128-16,s=$(window).height()-55-16;i>n&&(e=n/i*e,i=n),e>s&&(i=s/e*i,e=s),this.$pic.css({left:"calc((100% - "+i+"px) / 2)",width:i+"px",height:e+"px","line-height":e+"px"}).removeClass("h")}.bind(this))},prep:function(){this.now=--this.now<0?this.pics.length-1:this.now,this.pic()},next:function(){this.now=++this.now<this.pics.length?this.now:0,this.pic()}},n={$e:$("#read_box2"),$close:$("#read_box2 .close"),$content:$("#read_box2 .content"),$left:$("#read_box2 .left"),$right:$("#read_box2 .right"),$doubleLeft:$("#read_box2 .double-left"),$doubleRight:$("#read_box2 .double-right"),$bottomSpan:$("#read_box2 .bottom span"),now:-1,pics:[],inited:!1,addTime:!1,init:function(){return this.inited?this.inited:(this.$close.click(function(){this.close()}.bind(this)),this.$left.click(function(){this.prep()}.bind(this)),this.$right.click(function(){this.next()}.bind(this)),this.$doubleLeft.click(function(){this.now=0,this.pic()}.bind(this)),this.$doubleRight.click(function(){this.now=this.pics.length-1,this.pic()}.bind(this)),this.inited=!0,this.inited)},close:function(){t(),this.$e.removeClass("s").removeClass("v"),this.$content.empty().addClass("h"),this.$bottomSpan.attr("data-a","0").attr("data-b","0"),this.pics=[],this.now=-1},show:function(t,e){this.init(),this.now=e-1,this.pics=t,this.$bottomSpan.attr("data-a","0").attr("data-b","0"),this.$content.empty().addClass("h"),this.$e.addClass("s"),this.next(),i()},pic:function(){if(this.$bottomSpan.attr("data-a",this.now+1).attr("data-b",this.pics.length),this.pics[this.now].video){var t=$("<iframe />").attr("src",this.pics[this.now].video).attr("frameborder",0).attr("allow","autoplay; encrypted-media"),i=$("<div />").addClass("pic").append(t);this.$content.empty().addClass("h").append(this.pics[this.now].text).append(i),this.$content.removeClass("h").addClass("v")}else{var e=$("<img />").attr("src",this.pics[this.now].src+(this.addTime?"?t="+tt():"")),i=$("<div />").addClass("pic").append(e);this.$content.empty().addClass("h").append(this.pics[this.now].text).append(i),e.load(function(){var t=e.get(0).width,n=e.get(0).height,s=$(window).width()-128-16,o=$(window).height()-55-16;t>s&&(n=s/t*n,t=s),n>o&&(t=o/n*t,n=o),this.$content.css({width:t+"px",left:"calc((100% - "+t+"px) / 2)"}).removeClass("h").append(i.css({height:n+"px","line-height":n+"px"}))}.bind(this))}},prep:function(){this.now=--this.now<0?this.pics.length-1:this.now,this.pic()},next:function(){this.now=++this.now<this.pics.length?this.now:0,this.pic()}},s={$e:$("#video_box"),$title:$("#video_box .top span"),$video:$("#video_box .video"),$close:$("#video_box .close"),inited:!1,init:function(){return this.inited?this.inited:(this.$close.click(function(){this.close()}.bind(this)),this.inited=!0,this.inited)},show:function(t,e){this.init();var n=$("<iframe />").attr("src",e).attr("frameborder",0).attr("allow","autoplay; encrypted-media");this.$title.text(t),this.$video.append(n),this.$e.addClass("s"),i()},close:function(){t(),this.$e.removeClass("s"),this.$video.empty(),this.$title.empty()}};$("*[data-video_box_title][data-video_box_src]").click(function(){s.show($(this).data("video_box_title"),$(this).data("video_box_src"))}),$(".banners, .banners3").each(function(){var t=$(this),i=t.find(".arrs span"),e=t.find(".items > *").length,n=t.data("type");t.find(".pic").imgLiquid();var s=$(Array.apply(null,{length:Math.ceil(e/n)}).map(function(){return $("<a />")})).map($.fn.toArray).click(function(){$(this).addClass("a").siblings().removeClass("a"),t.attr("data-i",$(this).index()*n+1),i.attr("data-text",$(this).index()*n+1+" / "+e)});i.attr("data-text","1 / "+e),t.find(".pages").empty().append($("<span />").append(s)),t.find(".left").click(function(){s.filter(".a").prev().length?s.filter(".a").prev().click():s.last().click()}),t.find(".right").click(function(){s.filter(".a").next().length?s.filter(".a").next().click():s.first().click()}),t.find(".double-left").click(function(){s.first().click()}),t.find(".double-right").click(function(){s.last().click()}),s.first().addClass("a")}),$("body").on("click",".read_box",function(){e.show($(this).data("pics"))}),$("body").on("click",".read_box2",function(){var t=$(this).parent().find(".read_box2").map(function(){return{src:$(this).find(".pic img").attr("src"),video:$(this).find(".pic img").data("video_box_src"),text:$(this).find(".cover span").clone()}}).toArray();n.show(t,$(this).index())}),$(".open_mon").each(function(){var t={},i=$(this).find(".open_year"),e=i.find("span"),n=parseInt(e.text(),10),s=i.data("no");"undefined"==typeof t[n]&&(t[n]=i.data("i")?i.data("i"):0);var o=$(this).find(".open_m_boxs"),a=o.find(">div").click(function(){i.attr("data-i",a.length-$(this).index()),t={},t[n]=a.length-$(this).index()});s&&"undefined"!=typeof s[n]&&s[n].forEach(function(t){a.eq(a.length-t).addClass("open_no")}),i.find(".right").click(function(){n+=1,"undefined"==typeof t[n]&&(t[n]=0),e.text(n),i.attr("data-i",t[n]),a.removeClass("open_no"),s&&"undefined"!=typeof s[n]&&s[n].forEach(function(t){a.eq(a.length-t).addClass("open_no")})}),i.find(".left").click(function(){n-=1,"undefined"==typeof t[n]&&(t[n]=0),e.text(n),i.attr("data-i",t[n]),a.removeClass("open_no"),s&&"undefined"!=typeof s[n]&&s[n].forEach(function(t){a.eq(a.length-t).addClass("open_no")})})}),$(".p_close").click(function(){$(this).parents(".pink_down_boxs").prev().removeClass("show")}),$(".showblockbtn").click(function(){$(this).parents(".p3_boxs").toggleClass("show")}),$(".alert_ok").click(function(){$("#alert_ok").addClass("s"),i()}),$("#alert_ok .close").click(function(){$("#alert_ok").removeClass("s"),t()}),$(".alert_ok_b").click(function(){$("#alert_ok_b").addClass("s_b"),i()}),$("#alert_ok_b .close_b").click(function(){$("#alert_ok_b").removeClass("s_b"),t()})});