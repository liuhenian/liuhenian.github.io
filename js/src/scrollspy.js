var _typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof3(t)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return void 0===t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":_typeof2(t)};!function(l){"use strict";function i(t,o){this.$body=l(document.body),this.$scrollElement=l(t).is(document.body)?l(window):l(t),this.options=l.extend({},i.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",l.proxy(this.process,this)),this.refresh(),this.process()}function o(s){return this.each(function(){var t=l(this),o=t.data("bs.scrollspy"),e="object"==(void 0===s?"undefined":_typeof(s))&&s;o||t.data("bs.scrollspy",o=new i(this,e)),"string"==typeof s&&o[s]()})}i.VERSION="3.3.2",i.DEFAULTS={offset:10},i.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},i.prototype.refresh=function(){var t=this,s="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),l.isWindow(this.$scrollElement[0])||(s="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=l(this),o=t.data("target")||t.attr("href"),e=/^#./.test(o)&&l(NexT.utils.escapeSelector(o));return e&&e.length&&e.is(":visible")?[[e[s]().top+i,o]]:null}).sort(function(t,o){return t[0]-o[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},i.prototype.process=function(){var t,o=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),s=this.options.offset+e-this.$scrollElement.height(),i=this.offsets,r=this.targets,n=this.activeTarget;if(this.scrollHeight!=e&&this.refresh(),s<=o)return n!=(t=r[r.length-1])&&this.activate(t);if(n&&o<i[0])return l(this.selector).trigger("clear.bs.scrollspy"),this.activeTarget=null,this.clear();for(t=i.length;t--;)n!=r[t]&&o>=i[t]&&(!i[t+1]||o<=i[t+1])&&this.activate(r[t])},i.prototype.activate=function(t){this.activeTarget=t,this.clear();var o=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',e=l(o).parents("li").addClass("active");e.parent(".dropdown-menu").length&&(e=e.closest("li.dropdown").addClass("active")),e.trigger("activate.bs.scrollspy")},i.prototype.clear=function(){l(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=l.fn.scrollspy;l.fn.scrollspy=o,l.fn.scrollspy.Constructor=i,l.fn.scrollspy.noConflict=function(){return l.fn.scrollspy=t,this},l(window).on("load.bs.scrollspy.data-api",function(){l('[data-spy="scroll"]').each(function(){var t=l(this);o.call(t,t.data())})})}(jQuery);