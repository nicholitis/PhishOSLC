/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/affix.js. */
+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options);this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this));this.$element=$(element);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition()};Affix.VERSION='3.3.1';Affix.RESET='affix affix-top affix-bottom';Affix.DEFAULTS={offset:0,target:window};Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop(),position=this.$element.offset(),targetHeight=this.$target.height();if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false;if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom';return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'};var initializing=this.affixed==null,colliderTop=initializing?scrollTop:position.top,colliderHeight=initializing?targetHeight:height;if(offsetTop!=null&&colliderTop<=offsetTop)return'top';if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom';return false};Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(Affix.RESET).addClass('affix');var scrollTop=this.$target.scrollTop(),position=this.$element.offset();return(this.pinnedOffset=position.top-scrollTop)};Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)};Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return;var height=this.$element.height(),offset=this.options.offset,offsetTop=offset.top,offsetBottom=offset.bottom,scrollHeight=$('body').height();if(typeof offset!='object')offsetBottom=offsetTop=offset;if(typeof offsetTop=='function')offsetTop=offset.top(this.$element);if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element);var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom);if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','');var affixType='affix'+(affix?'-'+affix:''),e=$.Event(affixType+'.bs.affix');this.$element.trigger(e);if(e.isDefaultPrevented())return;this.affixed=affix;this.unpin=affix=='bottom'?this.getPinnedOffset():null;this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')};if(affix=='bottom')this.$element.offset({top:scrollHeight-height-offsetBottom})}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.affix'),options=typeof option=='object'&&option;if(!data)$this.data('bs.affix',(data=new Affix(this,options)));if(typeof option=='string')data[option]()})};var old=$.fn.affix;$.fn.affix=Plugin;$.fn.affix.Constructor=Affix;$.fn.affix.noConflict=function(){$.fn.affix=old;return this};$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data();data.offset=data.offset||{};if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom;if(data.offsetTop!=null)data.offset.top=data.offsetTop;Plugin.call($spy,data)})})}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/affix.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/alert.js. */
+function($){'use strict';var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on('click',dismiss,this.close)};Alert.VERSION='3.3.1';Alert.TRANSITION_DURATION=150;Alert.prototype.close=function(e){var $this=$(this),selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')};var $parent=$(selector);if(e)e.preventDefault();if(!$parent.length)$parent=$this.closest('.alert');$parent.trigger(e=$.Event('close.bs.alert'));if(e.isDefaultPrevented())return;$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()};$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.alert');if(!data)$this.data('bs.alert',(data=new Alert(this)));if(typeof option=='string')data[option].call($this)})};var old=$.fn.alert;$.fn.alert=Plugin;$.fn.alert.Constructor=Alert;$.fn.alert.noConflict=function(){$.fn.alert=old;return this};$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/alert.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/button.js. */
+function($){'use strict';var Button=function(element,options){this.$element=$(element);this.options=$.extend({},Button.DEFAULTS,options);this.isLoading=false};Button.VERSION='3.3.1';Button.DEFAULTS={loadingText:'loading...'};Button.prototype.setState=function(state){var d='disabled',$el=this.$element,val=$el.is('input')?'val':'html',data=$el.data();state=state+'Text';if(data.resetText==null)$el.data('resetText',$el[val]());setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state]);if(state=='loadingText'){this.isLoading=true;$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false;$el.removeClass(d).removeAttr(d)}},this),0)};Button.prototype.toggle=function(){var changed=true,$parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find('input');if($input.prop('type')=='radio')if($input.prop('checked')&&this.$element.hasClass('active')){changed=false}else $parent.find('.active').removeClass('active');if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}else this.$element.attr('aria-pressed',!this.$element.hasClass('active'));if(changed)this.$element.toggleClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.button'),options=typeof option=='object'&&option;if(!data)$this.data('bs.button',(data=new Button(this,options)));if(option=='toggle'){data.toggle()}else if(option)data.setState(option)})};var old=$.fn.button;$.fn.button=Plugin;$.fn.button.Constructor=Button;$.fn.button.noConflict=function(){$.fn.button=old;return this};$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target);if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn');Plugin.call($btn,'toggle');e.preventDefault()}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/button.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/carousel.js. */
+function($){'use strict';var Carousel=function(element,options){this.$element=$(element);this.$indicators=this.$element.find('.carousel-indicators');this.options=options;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this));this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))};Carousel.VERSION='3.3.1';Carousel.TRANSITION_DURATION=600;Carousel.DEFAULTS={interval:5e3,pause:'hover',wrap:true,keyboard:true};Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return;switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return};e.preventDefault()};Carousel.prototype.cycle=function(e){e||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval));return this};Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item');return this.$items.index(item||this.$active)};Carousel.prototype.getItemForDirection=function(direction,active){var delta=direction=='prev'?-1:1,activeIndex=this.getItemIndex(active),itemIndex=(activeIndex+delta)%this.$items.length;return this.$items.eq(itemIndex)};Carousel.prototype.to=function(pos){var that=this,activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'));if(pos>(this.$items.length-1)||pos<0)return;if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)});if(activeIndex==pos)return this.pause().cycle();return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))};Carousel.prototype.pause=function(e){e||(this.paused=true);if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end);this.cycle(true)};this.interval=clearInterval(this.interval);return this};Carousel.prototype.next=function(){if(this.sliding)return;return this.slide('next')};Carousel.prototype.prev=function(){if(this.sliding)return;return this.slide('prev')};Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active'),$next=next||this.getItemForDirection(type,$active),isCycling=this.interval,direction=type=='next'?'left':'right',fallback=type=='next'?'first':'last',that=this;if(!$next.length){if(!this.options.wrap)return;$next=this.$element.find('.item')[fallback]()};if($next.hasClass('active'))return(this.sliding=false);var relatedTarget=$next[0],slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction});this.$element.trigger(slideEvent);if(slideEvent.isDefaultPrevented())return;this.sliding=true;isCycling&&this.pause();if(this.$indicators.length){this.$indicators.find('.active').removeClass('active');var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)]);$nextIndicator&&$nextIndicator.addClass('active')};var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction});if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type);$next[0].offsetWidth;$active.addClass(direction);$next.addClass(direction);$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active');$active.removeClass(['active',direction].join(' '));that.sliding=false;setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active');$next.addClass('active');this.sliding=false;this.$element.trigger(slidEvent)};isCycling&&this.cycle();return this}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.carousel'),options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option),action=typeof option=='string'?option:options.slide;if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)));if(typeof option=='number'){data.to(option)}else if(action){data[action]()}else if(options.interval)data.pause().cycle()})};var old=$.fn.carousel;$.fn.carousel=Plugin;$.fn.carousel.Constructor=Carousel;$.fn.carousel.noConflict=function(){$.fn.carousel=old;return this};var clickHandler=function(e){var href,$this=$(this),$target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''));if(!$target.hasClass('carousel'))return;var options=$.extend({},$target.data(),$this.data()),slideIndex=$this.attr('data-slide-to');if(slideIndex)options.interval=false;Plugin.call($target,options);if(slideIndex)$target.data('bs.carousel').to(slideIndex);e.preventDefault()};$(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler);$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this);Plugin.call($carousel,$carousel.data())})})}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/carousel.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/dropdown.js. */
+function($){'use strict';var backdrop='.dropdown-backdrop',toggle='[data-toggle="dropdown"]',Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)};Dropdown.VERSION='3.3.1';Dropdown.prototype.toggle=function(e){var $this=$(this);if($this.is('.disabled, :disabled'))return;var $parent=getParent($this),isActive=$parent.hasClass('open');clearMenus();if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length)$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus);var relatedTarget={relatedTarget:this};$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget));if(e.isDefaultPrevented())return;$this.trigger('focus').attr('aria-expanded','true');$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)};return false};Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return;var $this=$(this);e.preventDefault();e.stopPropagation();if($this.is('.disabled, :disabled'))return;var $parent=getParent($this),isActive=$parent.hasClass('open');if((!isActive&&e.which!=27)||(isActive&&e.which==27)){if(e.which==27)$parent.find(toggle).trigger('focus');return $this.trigger('click')};var desc=' li:not(.divider):visible a',$items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc);if(!$items.length)return;var index=$items.index(e.target);if(e.which==38&&index>0)index--;if(e.which==40&&index<$items.length-1)index++;if(!~index)index=0;$items.eq(index).trigger('focus')}
function clearMenus(e){if(e&&e.which===3)return;$(backdrop).remove();$(toggle).each(function(){var $this=$(this),$parent=getParent($this),relatedTarget={relatedTarget:this};if(!$parent.hasClass('open'))return;$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget));if(e.isDefaultPrevented())return;$this.attr('aria-expanded','false');$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')};var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent()}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.dropdown');if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)));if(typeof option=='string')data[option].call($this)})};var old=$.fn.dropdown;$.fn.dropdown=Plugin;$.fn.dropdown.Constructor=Dropdown;$.fn.dropdown.noConflict=function(){$.fn.dropdown=old;return this};$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="menu"]',Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','[role="listbox"]',Dropdown.prototype.keydown)}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/dropdown.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/modal.js. */
+function($){'use strict';var Modal=function(element,options){this.options=options;this.$body=$(document.body);this.$element=$(element);this.$backdrop=this.isShown=null;this.scrollbarWidth=0;if(this.options.remote)this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))};Modal.VERSION='3.3.1';Modal.TRANSITION_DURATION=300;Modal.BACKDROP_TRANSITION_DURATION=150;Modal.DEFAULTS={backdrop:true,keyboard:true,show:true};Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)};Modal.prototype.show=function(_relatedTarget){var that=this,e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget});this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented())return;this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass('modal-open');this.escape();this.resize();this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this));this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade');if(!that.$element.parent().length)that.$element.appendTo(that.$body);that.$element.show().scrollTop(0);if(that.options.backdrop)that.adjustBackdrop();that.adjustDialog();if(transition)that.$element[0].offsetWidth;that.$element.addClass('in').attr('aria-hidden',false);that.enforceFocus();var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget});transition?that.$element.find('.modal-dialog').one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})};Modal.prototype.hide=function(e){if(e)e.preventDefault();e=$.Event('hide.bs.modal');this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented())return;this.isShown=false;this.escape();this.resize();$(document).off('focusin.bs.modal');this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal');$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()};Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length)this.$element.trigger('focus')},this))};Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown)this.$element.off('keydown.dismiss.bs.modal')};Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else $(window).off('resize.bs.modal')};Modal.prototype.hideModal=function(){var that=this;this.$element.hide();this.backdrop(function(){that.$body.removeClass('modal-open');that.resetAdjustments();that.resetScrollbar();that.$element.trigger('hidden.bs.modal')})};Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};Modal.prototype.backdrop=function(callback){var that=this,animate=this.$element.hasClass('fade')?'fade':'';if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').prependTo(this.$element).on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return;this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));if(doAnimate)this.$backdrop[0].offsetWidth;this.$backdrop.addClass('in');if(!callback)return;doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in');var callbackRemove=function(){that.removeBackdrop();callback&&callback()};$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback)callback()};Modal.prototype.handleUpdate=function(){if(this.options.backdrop)this.adjustBackdrop();this.adjustDialog()};Modal.prototype.adjustBackdrop=function(){this.$backdrop.css('height',0).css('height',this.$element[0].scrollHeight)};Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})};Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})};Modal.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight;this.scrollbarWidth=this.measureScrollbar()};Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10);if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)};Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right','')};Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div');scrollDiv.className='modal-scrollbar-measure';this.$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this.$body[0].removeChild(scrollDiv);return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this),data=$this.data('bs.modal'),options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option);if(!data)$this.data('bs.modal',(data=new Modal(this,options)));if(typeof option=='string'){data[option](_relatedTarget)}else if(options.show)data.show(_relatedTarget)})};var old=$.fn.modal;$.fn.modal=Plugin;$.fn.modal.Constructor=Modal;$.fn.modal.noConflict=function(){$.fn.modal=old;return this};$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr('href'),$target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,''))),option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());if($this.is('a'))e.preventDefault();$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return;$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})});Plugin.call($target,option,this)})}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/modal.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/tooltip.js. */
+function($){'use strict';var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init('tooltip',element,options)};Tooltip.VERSION='3.3.1';Tooltip.TRANSITION_DURATION=150;Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}};Tooltip.prototype.init=function(type,element,options){this.enabled=true;this.type=type;this.$element=$(element);this.options=this.getOptions(options);this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport);var triggers=this.options.trigger.split(' ');for(var i=triggers.length;i--;){var trigger=triggers[i];if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin',eventOut=trigger=='hover'?'mouseleave':'focusout';this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this));this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}};this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()};Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS};Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options);if(options.delay&&typeof options.delay=='number')options.delay={show:options.delay,hide:options.delay};return options};Tooltip.prototype.getDelegateOptions=function(){var options={},defaults=this.getDefaults();this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value});return options};Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type);if(self&&self.$tip&&self.$tip.is(':visible')){self.hoverState='in';return};if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions());$(obj.currentTarget).data('bs.'+this.type,self)};clearTimeout(self.timeout);self.hoverState='in';if(!self.options.delay||!self.options.delay.show)return self.show();self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)};Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type);if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions());$(obj.currentTarget).data('bs.'+this.type,self)};clearTimeout(self.timeout);self.hoverState='out';if(!self.options.delay||!self.options.delay.hide)return self.hide();self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)};Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!inDom)return;var that=this,$tip=this.tip(),tipId=this.getUID(this.type);this.setContent();$tip.attr('id',tipId);this.$element.attr('aria-describedby',tipId);if(this.options.animation)$tip.addClass('fade');var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement,autoToken=/\s?auto?\s?/i,autoPlace=autoToken.test(placement);if(autoPlace)placement=placement.replace(autoToken,'')||'top';$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this);this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element);var pos=this.getPosition(),actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if(autoPlace){var orgPlacement=placement,$container=this.options.container?$(this.options.container):this.$element.parent(),containerDim=this.getPosition($container);placement=placement=='bottom'&&pos.bottom+actualHeight>containerDim.bottom?'top':placement=='top'&&pos.top-actualHeight<containerDim.top?'bottom':placement=='right'&&pos.right+actualWidth>containerDim.width?'left':placement=='left'&&pos.left-actualWidth<containerDim.left?'right':placement;$tip.removeClass(orgPlacement).addClass(placement)};var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight);this.applyPlacement(calculatedOffset,placement);var complete=function(){var prevHoverState=that.hoverState;that.$element.trigger('shown.bs.'+that.type);that.hoverState=null;if(prevHoverState=='out')that.leave(that)};$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}};Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip(),width=$tip[0].offsetWidth,height=$tip[0].offsetHeight,marginTop=parseInt($tip.css('margin-top'),10),marginLeft=parseInt($tip.css('margin-left'),10);if(isNaN(marginTop))marginTop=0;if(isNaN(marginLeft))marginLeft=0;offset.top=offset.top+marginTop;offset.left=offset.left+marginLeft;$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0);$tip.addClass('in');var actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if(placement=='top'&&actualHeight!=height)offset.top=offset.top+height-actualHeight;var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight);if(delta.left){offset.left+=delta.left}else offset.top+=delta.top;var isVertical=/top|bottom/.test(placement),arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight,arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight';$tip.offset(offset);this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)};Tooltip.prototype.replaceArrow=function(delta,dimension,isHorizontal){this.arrow().css(isHorizontal?'left':'top',50*(1-delta/dimension)+'%').css(isHorizontal?'top':'left','')};Tooltip.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle();$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title);$tip.removeClass('fade in top bottom left right')};Tooltip.prototype.hide=function(callback){var that=this,$tip=this.tip(),e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach();that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type);callback&&callback()};this.$element.trigger(e);if(e.isDefaultPrevented())return;$tip.removeClass('in');$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete();this.hoverState=null;return this};Tooltip.prototype.fixTitle=function(){var $e=this.$element;if($e.attr('title')||typeof($e.attr('data-original-title'))!='string')$e.attr('data-original-title',$e.attr('title')||'').attr('title','')};Tooltip.prototype.hasContent=function(){return this.getTitle()};Tooltip.prototype.getPosition=function($element){$element=$element||this.$element;var el=$element[0],isBody=el.tagName=='BODY',elRect=el.getBoundingClientRect();if(elRect.width==null)elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top});var elOffset=isBody?{top:0,left:0}:$element.offset(),scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()},outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null;return $.extend({},elRect,scroll,outerDims,elOffset)};Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}};Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0};if(!this.$viewport)return delta;var viewportPadding=this.options.viewport&&this.options.viewport.padding||0,viewportDimensions=this.getPosition(this.$viewport);if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll,bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight;if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height)delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}else{var leftEdgeOffset=pos.left-viewportPadding,rightEdgeOffset=pos.left+viewportPadding+actualWidth;if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.width)delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset};return delta};Tooltip.prototype.getTitle=function(){var title,$e=this.$element,o=this.options;title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title);return title};Tooltip.prototype.getUID=function(prefix){do{prefix+=~~(Math.random()*1e6)}while(document.getElementById(prefix));return prefix};Tooltip.prototype.tip=function(){return(this.$tip=this.$tip||$(this.options.template))};Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))};Tooltip.prototype.enable=function(){this.enabled=true};Tooltip.prototype.disable=function(){this.enabled=false};Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled};Tooltip.prototype.toggle=function(e){var self=this;if(e){self=$(e.currentTarget).data('bs.'+this.type);if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions());$(e.currentTarget).data('bs.'+this.type,self)}};self.tip().hasClass('in')?self.leave(self):self.enter(self)};Tooltip.prototype.destroy=function(){var that=this;clearTimeout(this.timeout);this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)})}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.tooltip'),options=typeof option=='object'&&option,selector=options&&options.selector;if(!data&&option=='destroy')return;if(selector){if(!data)$this.data('bs.tooltip',(data={}));if(!data[selector])data[selector]=new Tooltip(this,options)}else if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)));if(typeof option=='string')data[option]()})};var old=$.fn.tooltip;$.fn.tooltip=Plugin;$.fn.tooltip.Constructor=Tooltip;$.fn.tooltip.noConflict=function(){$.fn.tooltip=old;return this}}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/tooltip.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/popover.js. */
+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)};if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js');Popover.VERSION='3.3.1';Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype);Popover.prototype.constructor=Popover;Popover.prototype.getDefaults=function(){return Popover.DEFAULTS};Popover.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent();$tip.find('.popover-title')[this.options.html?'html':'text'](title);$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content);$tip.removeClass('fade top bottom left right in');if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()};Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()};Popover.prototype.getContent=function(){var $e=this.$element,o=this.options;return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)};Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))};Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template);return this.$tip}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.popover'),options=typeof option=='object'&&option,selector=options&&options.selector;if(!data&&option=='destroy')return;if(selector){if(!data)$this.data('bs.popover',(data={}));if(!data[selector])data[selector]=new Popover(this,options)}else if(!data)$this.data('bs.popover',(data=new Popover(this,options)));if(typeof option=='string')data[option]()})};var old=$.fn.popover;$.fn.popover=Plugin;$.fn.popover.Constructor=Popover;$.fn.popover.noConflict=function(){$.fn.popover=old;return this}}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/popover.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/scrollspy.js. */
+function($){'use strict'
function ScrollSpy(element,options){var process=$.proxy(this.process,this);this.$body=$('body');this.$scrollElement=$(element).is('body')?$(window):$(element);this.options=$.extend({},ScrollSpy.DEFAULTS,options);this.selector=(this.options.target||'')+' .nav li > a';this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on('scroll.bs.scrollspy',process);this.refresh();this.process()};ScrollSpy.VERSION='3.3.1';ScrollSpy.DEFAULTS={offset:10};ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};ScrollSpy.prototype.refresh=function(){var offsetMethod='offset',offsetBase=0;if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position';offsetBase=this.$scrollElement.scrollTop()};this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();var self=this;this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data('target')||$el.attr('href'),$href=/^#./.test(href)&&$(href);return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0]);self.targets.push(this[1])})};ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.getScrollHeight(),maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i;if(this.scrollHeight!=scrollHeight)this.refresh();if(scrollTop>=maxScroll)return activeTarget!=(i=targets[targets.length-1])&&this.activate(i);if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null;return this.clear()};for(i=offsets.length;i--;)activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])};ScrollSpy.prototype.activate=function(target){this.activeTarget=target;this.clear();var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]',active=$(selector).parents('li').addClass('active');if(active.parent('.dropdown-menu').length)active=active.closest('li.dropdown').addClass('active');active.trigger('activate.bs.scrollspy')};ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.scrollspy'),options=typeof option=='object'&&option;if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)));if(typeof option=='string')data[option]()})};var old=$.fn.scrollspy;$.fn.scrollspy=Plugin;$.fn.scrollspy.Constructor=ScrollSpy;$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old;return this};$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);Plugin.call($spy,$spy.data())})})}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/scrollspy.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/tab.js. */
+function($){'use strict';var Tab=function(element){this.element=$(element)};Tab.VERSION='3.3.1';Tab.TRANSITION_DURATION=150;Tab.prototype.show=function(){var $this=this.element,$ul=$this.closest('ul:not(.dropdown-menu)'),selector=$this.data('target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')};if($this.parent('li').hasClass('active'))return;var $previous=$ul.find('.active:last a'),hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]}),showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]});$previous.trigger(hideEvent);$this.trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return;var $target=$(selector);this.activate($this.closest('li'),$ul);this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]});$this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})};Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active'),transition=callback&&$.support.transition&&(($active.length&&$active.hasClass('fade'))||!!container.find('> .fade').length)
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false);element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true);if(transition){element[0].offsetWidth;element.addClass('in')}else element.removeClass('fade');if(element.parent('.dropdown-menu'))element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true);callback&&callback()};$active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next();$active.removeClass('in')}
function Plugin(option){return this.each(function(){var $this=$(this),data=$this.data('bs.tab');if(!data)$this.data('bs.tab',(data=new Tab(this)));if(typeof option=='string')data[option]()})};var old=$.fn.tab;$.fn.tab=Plugin;$.fn.tab.Constructor=Tab;$.fn.tab.noConflict=function(){$.fn.tab=old;return this};var clickHandler=function(e){e.preventDefault();Plugin.call($(this),'show')};$(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/tab.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/transition.js. */
+function($){'use strict'
function transitionEnd(){var el=document.createElement('bootstrap'),transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};for(var name in transEndEventNames)if(el.style[name]!==undefined)return{end:transEndEventNames[name]};return false};$.fn.emulateTransitionEnd=function(duration){var called=false,$el=this;$(this).one('bsTransitionEnd',function(){called=true});var callback=function(){if(!called)$($el).trigger($.support.transition.end)};setTimeout(callback,duration);return this};$(function(){$.support.transition=transitionEnd();if(!$.support.transition)return;$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/bootstrap/js/transition.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/js/slick.js. */
(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports!=='undefined'){module.exports=factory(require('jquery'))}else factory(jQuery)}(function($){'use strict';var Slick=window.Slick||{};Slick=(function(){var instanceUid=0
function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:false,autoplaySpeed:3e3,centerMode:false,centerPadding:'50px',cssEase:'ease',customPaging:function(slider,i){return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i+1)},dots:false,dotsClass:'slick-dots',draggable:true,easing:'linear',edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:'ondemand',mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:'window',responsive:null,rows:1,rtl:false,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1e3};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden='hidden';_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange'}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange'};_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true)};return Slick}());Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({tabindex:'0'})};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==='boolean'){addBefore=index;index=null}else if(index<0||(index>=_.slideCount))return false;_.unload();if(typeof index==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack)}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index))}else $(markup).insertAfter(_.$slides.eq(index))}else if(addBefore===true){$(markup).prependTo(_.$slideTrack)}else $(markup).appendTo(_.$slideTrack);_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index)});_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed)}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false)targetLeft=-targetLeft;if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback)}else _.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback)}else if(_.cssTransitions===false){if(_.options.rtl===true)_.currentLeft=-(_.currentLeft);$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]='translate('+now+'px, 0px)';_.$slideTrack.css(animProps)}else{animProps[_.animType]='translate(0px,'+now+'px)';_.$slideTrack.css(animProps)}},complete:function(){if(callback)callback.call()}})}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)'}else animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)';_.$slideTrack.css(animProps);if(callback)setTimeout(function(){_.disableTransition();callback.call()},_.options.speed)}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null)asNavFor=$(asNavFor).not(_.$slider);return asNavFor};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==='object')asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked)target.slideHandler(index,true)})};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase}else transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase;if(_.options.fade===false){_.$slideTrack.css(transition)}else _.$slides.eq(slide).css(transition)};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow)_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed)};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer)clearInterval(_.autoPlayTimer)};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false)if(_.direction===1&&(_.currentSlide+1)===(_.slideCount-1)){_.direction=0}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0)_.direction=1};_.slideHandler(slideTo)}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow))_.$prevArrow.prependTo(_.options.appendArrows);if(_.htmlExpr.test(_.options.nextArrow))_.$nextArrow.appendTo(_.options.appendArrows);if(_.options.infinite!==true)_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true')}else _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true',tabindex:'-1'})}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1)dot.append($('<li />').append(_.options.customPaging.call(this,_,i)));_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden','false')}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'')});_.$slider.addClass('slick-slider');_.$slideTrack=(_.slideCount===0)?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===true||_.options.swipeToSlide===true)_.options.slidesToScroll=1;$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===true)_.$list.addClass('draggable')};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>1){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=(a*slidesPerSection+((b*_.options.slidesPerRow)+c));if(originalSlides.get(target))row.appendChild(originalSlides.get(target))};slide.appendChild(row)};newSlides.appendChild(slide)};_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({width:(100/_.options.slidesPerRow)+'%',display:'inline-block'})}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false,sliderWidth=_.$slider.width(),windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth}else if(_.respondTo==='slider'){respondToWidth=sliderWidth}else if(_.respondTo==='min')respondToWidth=Math.min(windowWidth,sliderWidth);if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints)if(_.breakpoints.hasOwnProperty(breakpoint))if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint])targetBreakpoint=_.breakpoints[breakpoint]}else if(respondToWidth>_.breakpoints[breakpoint])targetBreakpoint=_.breakpoints[breakpoint];if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true)_.currentSlide=_.options.initialSlide;_.refresh(initial)};triggerBreakpoint=targetBreakpoint}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true)_.currentSlide=_.options.initialSlide;_.refresh(initial)};triggerBreakpoint=targetBreakpoint}}else if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true)_.currentSlide=_.options.initialSlide;_.refresh(initial);triggerBreakpoint=targetBreakpoint};if(!initial&&triggerBreakpoint!==false)_.$slider.trigger('breakpoint',[_,triggerBreakpoint])}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is('a'))event.preventDefault();if(!$target.is('li'))$target=$target.closest('li');unevenOffset=(_.slideCount%_.options.slidesToScroll!==0);indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow)_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);break;case'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow)_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);break;case'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger('focus');break;default:return}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1]}else for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break};prevNavigable=navigables[n]};return index};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null)$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,true)).off('mouseleave.slick',$.proxy(_.interrupt,_,false));_.$slider.off('focus.slick blur.slick');if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide)};_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true)_.$list.off('keydown.slick',_.keyHandler);if(_.options.focusOnSelect===true)$(_.$slideTrack).children().off('click.slick',_.selectHandler);$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition);$(document).off('ready.slick.slick-'+_.instanceUid,_.setPosition)};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,false))};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>1){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides)}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault()}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots)_.$dots.remove();if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow))_.$prevArrow.remove()};if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow))_.$nextArrow.remove()};if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'))});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides)};_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=true;if(!refresh)_.$slider.trigger('destroy',[_])};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===false){_.$slideTrack.css(transition)}else _.$slides.eq(slide).css(transition)};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback)setTimeout(function(){_.disableTransition(slideIndex);callback.call()},_.options.speed)}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2})}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick','*:not(.slick-arrow)',function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(':focus');_.autoPlay()}},0)})};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide};Slick.prototype.getDotCount=function(){var _=this,breakPoint=0,counter=0,pagerQty=0;if(_.options.infinite===true){while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}else if(_.options.centerMode===true){pagerQty=_.slideCount}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll)}else while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow};return pagerQty-1};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=(_.slideWidth*_.options.slidesToShow)*-1;verticalOffset=(verticalHeight*_.options.slidesToShow)*-1};if(_.slideCount%_.options.slidesToScroll!==0)if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow)if(slideIndex>_.slideCount){_.slideOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth)*-1;verticalOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight)*-1}else{_.slideOffset=((_.slideCount%_.options.slidesToScroll)*_.slideWidth)*-1;verticalOffset=((_.slideCount%_.options.slidesToScroll)*verticalHeight)*-1}}else if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*_.slideWidth;verticalOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*verticalHeight};if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0};if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)};if(_.options.vertical===false){targetLeft=((slideIndex*_.slideWidth)*-1)+_.slideOffset}else targetLeft=((slideIndex*verticalHeight)*-1)+verticalOffset;if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex)}else targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow);if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else targetLeft=0}else targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex)}else targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1);if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else targetLeft=0}else targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2}};return targetLeft};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option]};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2};while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow};return indexes};Slick.prototype.getSlick=function(){return this};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+($(slide).outerWidth()/2)>(_.swipeLeft*-1)){swipedSlide=slide;return false}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed}else return _.options.slidesToScroll};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate)};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler()};if(creation)_.$slider.trigger('init',[_]);if(_.options.accessibility===true)_.initADA();if(_.options.autoplay){_.paused=false;_.autoPlay()}};Slick.prototype.initADA=function(){var _=this;_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true',tabindex:'-1'}).find('a, input, button, select').attr({tabindex:'-1'});_.$slideTrack.attr('role','listbox');_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){$(this).attr({role:'option','aria-describedby':'slick-slide'+_.instanceUid+i+''})});if(_.$dots!==null)_.$dots.attr('role','tablist').find('li').each(function(i){$(this).attr({role:'presentation','aria-selected':'false','aria-controls':'navigation'+_.instanceUid+i+'',id:'slick-slide'+_.instanceUid+i+''})}).first().attr('aria-selected','true').end().find('button').attr('role','button').end().closest('div').attr('role','toolbar');_.activateADA()};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide)}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow)$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);if(_.options.dots===true&&_.options.pauseOnDotsHover===true)$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,true)).on('mouseleave.slick',$.proxy(_.interrupt,_,false))};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,false))}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true)_.$list.on('keydown.slick',_.keyHandler);if(_.options.focusOnSelect===true)$(_.$slideTrack).children().on('click.slick',_.selectHandler);$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(document).on('ready.slick.slick-'+_.instanceUid,_.setPosition)};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show()};if(_.options.dots===true&&_.slideCount>_.options.slidesToShow)_.$dots.show()};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT'))if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'next':'previous'}})}else if(event.keyCode===39&&_.options.accessibility===true)_.changeSlide({data:{message:_.options.rtl===true?'previous':'next'}})};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd
function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy').removeClass('slick-loading')});_.$slider.trigger('lazyLoaded',[_,image,imageSource])})};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource])};imageToLoad.src=imageSource})};if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++}};loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange)}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange)}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange)}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive')_.progressiveLazyLoad()};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}})};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition()};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=false;_.setPosition();_.swipeLeft=null;if(_.options.autoplay)_.autoPlay();if(_.options.accessibility===true)_.initADA()}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}})};Slick.prototype.preventDefault=function(event){event.preventDefault()};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.attr('src',imageSource).removeAttr('data-lazy').removeClass('slick-loading');if(_.options.adaptiveHeight===true)_.setPosition();_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad()};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500)}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad()}};imageToLoad.src=imageSource}else _.$slider.trigger('allImagesLoaded',[_])};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&(_.currentSlide>lastVisibleIndex))_.currentSlide=lastVisibleIndex;if(_.slideCount<=_.options.slidesToShow)_.currentSlide=0;currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing)_.changeSlide({data:{message:'index',index:currentSlide}},false)};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;currentBreakpoint=responsiveSettings[breakpoint].breakpoint;if(responsiveSettings.hasOwnProperty(breakpoint)){while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint)_.breakpoints.splice(l,1);l--};_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}};_.breakpoints.sort(function(a,b){return(_.options.mobileFirst)?a-b:b-a})}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0)_.currentSlide=_.currentSlide-_.options.slidesToScroll;if(_.slideCount<=_.options.slidesToShow)_.currentSlide=0;_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true)$(_.$slideTrack).children().on('click.slick',_.selectHandler);_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_])};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked)_.setPosition()},50)}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==='boolean'){removeBefore=index;index=removeBefore===true?0:_.slideCount-1}else index=removeBefore===true?--index:index;if(_.slideCount<1||index<0||index>_.slideCount-1)return false;_.unload();if(removeAll===true){_.$slideTrack.children().remove()}else _.$slideTrack.children(this.options.slide).eq(index).remove();_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true)position=-position;x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps)}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps)}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps)}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true)_.$list.css({padding:('0px '+_.options.centerPadding)})}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true)_.$list.css({padding:(_.options.centerPadding+' 0px')})};_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil((_.slideWidth*_.$slideTrack.children('.slick-slide').length)))}else if(_.options.variableWidth===true){_.$slideTrack.width(5e3*_.slideCount)}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true)*_.$slideTrack.children('.slick-slide').length)))};var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset)};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=(_.slideWidth*index)*-1;if(_.options.rtl===true){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}else $(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height',targetHeight)}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple'}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive'}else if(typeof arguments[1]!=='undefined')type='single'};if(type==='single'){_.options[option]=value}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val})}else if(type==='responsive')for(item in value)if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]]}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint)_.options.responsive.splice(l,1);l--};_.options.responsive.push(value[item])};if(refresh){_.unload();_.reinit()}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide))}else _.setFade();_.$slider.trigger('setPosition',[_])};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical')}else _.$slider.removeClass('slick-vertical');if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined)if(_.options.useCSS===true)_.cssTransitions=true;if(_.options.fade)if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3)_.options.zIndex=3}else _.options.zIndex=_.defaults.zIndex;if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false};if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false};if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false};if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=false};if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType='transform';_.transformType='transform';_.transitionType='transition'};_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false)};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===true){centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=(_.slideCount-1)-centerOffset){_.$slides.slice(index-centerOffset,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false')}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false')};if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center')}else if(index===_.slideCount-1)allSlides.eq(_.options.slidesToShow).addClass('slick-center')};_.$slides.eq(index).addClass('slick-center')}else if(index>=0&&index<=(_.slideCount-_.options.slidesToShow)){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false')}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false')}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&(_.slideCount-index)<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false')}else allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false')};if(_.options.lazyLoad==='ondemand')_.lazyLoad()};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true)_.options.centerMode=false;if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1}else infiniteCount=_.options.slidesToShow;for(i=_.slideCount;i>(_.slideCount-infiniteCount);i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned')};for(i=0;i<infiniteCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned')};_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','')})}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle)_.autoPlay();_.interrupted=toggle};Slick.prototype.selectHandler=function(event){var _=this,targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide'),index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.setSlideClasses(index);_.asNavFor(index);return};_.slideHandler(index)};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true)return;if(_.options.fade===true&&_.currentSlide===index)return;if(_.slideCount<=_.options.slidesToShow)return;if(sync===false)_.asNavFor(index);targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else _.postSlide(targetSlide)};return}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>(_.slideCount-_.options.slidesToScroll))){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else _.postSlide(targetSlide)};return};if(_.options.autoplay)clearInterval(_.autoPlayTimer);if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-(_.slideCount%_.options.slidesToScroll)}else animSlide=_.slideCount+targetSlide}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0}else animSlide=targetSlide-_.slideCount}else animSlide=targetSlide;_.animating=true;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow)navTarget.setSlideClasses(_.currentSlide)};_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})}else _.postSlide(animSlide);_.animateHeight();return};if(dontAnimate!==true){_.animateSlide(targetLeft,function(){_.postSlide(animSlide)})}else _.postSlide(animSlide)};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide()};if(_.options.dots===true&&_.slideCount>_.options.slidesToShow)_.$dots.hide();_.$slider.addClass('slick-loading')};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0)swipeAngle=360-Math.abs(swipeAngle);if((swipeAngle<=45)&&(swipeAngle>=0))return(_.options.rtl===false?'left':'right');if((swipeAngle<=360)&&(swipeAngle>=315))return(_.options.rtl===false?'left':'right');if((swipeAngle>=135)&&(swipeAngle<=225))return(_.options.rtl===false?'right':'left');if(_.options.verticalSwiping===true)if((swipeAngle>=35)&&(swipeAngle<=135)){return'down'}else return'up';return'vertical'};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.interrupted=false;_.shouldClick=(_.touchObject.swipeLength>10)?false:true;if(_.touchObject.curX===undefined)return false;if(_.touchObject.edgeHit===true)_.$slider.trigger('edge',[_,_.swipeDirection()]);if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case'left':case'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case'right':case'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:};if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction])}}else if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={}}};Slick.prototype.swipeHandler=function(event){var _=this;if((_.options.swipe===false)||('ontouchend'in document&&_.options.swipe===false)){return}else if(_.options.draggable===false&&event.type.indexOf('mouse')!==-1)return;_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true)_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;switch(event.data.action){case'start':_.swipeStart(event);break;case'move':_.swipeMove(event);break;case'end':_.swipeEnd(event);break}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||touches&&touches.length!==1)return false;curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));if(_.options.verticalSwiping===true)_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));swipeDirection=_.swipeDirection();if(swipeDirection==='vertical')return;if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4)event.preventDefault();positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true)positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false)if((_.currentSlide===0&&swipeDirection==='right')||(_.currentSlide>=_.getDotCount()&&swipeDirection==='left')){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true};if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset}else _.swipeLeft=curLeft+(swipeLength*(_.$list.height()/_.listWidth))*positionOffset;if(_.options.verticalSwiping===true)_.swipeLeft=curLeft+swipeLength*positionOffset;if(_.options.fade===true||_.options.touchMove===false)return false;if(_.animating===true){_.swipeLeft=null;return false};_.setCSS(_.swipeLeft)};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false};if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined)touches=event.originalEvent.touches[0];_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots)_.$dots.remove();if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow))_.$prevArrow.remove();if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow))_.$nextArrow.remove();_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','')};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy()};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false')}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false')}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false')}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').attr('aria-hidden','true');_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden','false')}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay)if(document[_.hidden]){_.interrupted=true}else _.interrupted=false};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=='object'||typeof opt=='undefined'){_[i].slick=new Slick(_[i],opt)}else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret};return _}}));;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/js/slick.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/js/hhs-slick-slider.js. */
(function($){$(document).on('ready',function(){if(typeof window.imageList!=='undefined'&&imageList!==null&&imageList.length>0){$.fn.modalTabbing=function(){var tabbing=function(jqSelector){var inputs=$(jqSelector).find('button, a.close-button').filter(':visible').not(':disabled');inputs.last().focus();$(jqSelector).on('keydown',function(e){if(e.which===9){var inputs=$(jqSelector).find('button, a.close-button').filter(':visible').not(':disabled');if(!e.shiftKey){if(inputs[inputs.length-1]===e.target){e.preventDefault();inputs.first().focus()}}else if(inputs[0]===e.target){e.preventDefault();inputs.last().focus()}}})};return this.each(function(){tabbing(this)})};$(".hhs-screen-container").before("<div id='hhs-screen-container-modal' class='hhs-screen-container-modal modal-bg' role='dialog'></div>");$(".hhs-screen-container-modal").append("<div class='content-modal'><div class='hhs-screen slider'></div><a class='close-button' tabindex='0'><span>&times;</span></a></div>");$(".hhs-screen-container").html("");$(".hhs-screen-container").append("<div class='hhs-screen slider'></div>");$(".hhs-screen-container").append("<div class='hhs-screen-selector'></div>");function buildImageItem(imageInfo,imageIndex){var outerDiv=document.createElement("div"),innerDiv=document.createElement("div");innerDiv.className="image-slide";var img=document.createElement("img");img.src=imageInfo[0];img.alt="slider image "+(imageIndex+1);innerDiv.appendChild(img);if(imageInfo[1]!=null&&imageInfo[1].length>0){var caption=document.createElement("span");caption.className="caption";caption.innerHTML=imageInfo[1];innerDiv.appendChild(caption)};outerDiv.appendChild(innerDiv);return outerDiv};for(i=0;i<imageList.length;i++){$(".hhs-screen-container-modal .hhs-screen").append(buildImageItem(imageList[i],i));$(".hhs-screen-container .hhs-screen").append(buildImageItem(imageList[i],i));$(".hhs-screen-selector").append("<div><img id='selector-image-"+(i+1)+"' alt='thumbnail image "+(i+1)+"' src='"+imageList[i][0]+"'></div>")};var pager=document.createElement("div");pager.id="slider-pager";pager.className="pagerer-pager";pager.innerHTML="<label for='pager-input' class='sr-only'>Pager Input</label>Viewing <input id='pager-input' type='text' class='pagerer-page' title='Enter page, then press Return.' value='1'> of "+imageList.length+" photos";$(".hhs-screen-container").append(pager);var pagerModal=document.createElement("div");pagerModal.id="slider-pager-modal";pagerModal.className="pagerer-pager";pagerModal.innerHTML="Viewing <span id='current-image'>1</span> of "+imageList.length+" photos";$(".hhs-screen-container-modal .content-modal").append(pagerModal);$(".hhs-screen-container-modal .hhs-screen").slick({arrows:true,slidesToShow:1,slidesToScroll:1,asNavFor:'.hhs-screen, .hhs-screen-selector',variableWidth:false,adaptiveHeight:false,lazyLoad:'ondemand',accessibility:true});$(".hhs-screen-container .hhs-screen").slick({arrows:true,slidesToShow:1,slidesToScroll:1,asNavFor:'.hhs-screen, .hhs-screen-selector',variableWidth:false,adaptiveHeight:false,lazyLoad:'ondemand',accessibility:true});$(".hhs-screen-selector").slick({arrows:true,infinite:true,dots:false,centerMode:true,slidesToShow:5,slidesToScroll:1,asNavFor:'.hhs-screen',focusOnSelect:true,swipeToSlide:true,responsive:[{breakpoint:640,settings:{slidesToShow:5,slidesToScroll:1,centerMode:true}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1,centerMode:true}},{breakpoint:380,settings:{slidesToShow:2,slidesToScroll:1,centerMode:false}}]});$('.leftarrow').on('click',function(){$('.single-item').slick("slickPrev")});$('.rightarrow').on('click',function(){$('.single-item').slick("slickNext")});removeIncorrectAriaAttributes();function removeIncorrectAriaAttributes(){$(".slick-slide").each(function(index){$(this).removeAttr("aria-describedby")});$(".hhs-screen .slick-track").each(function(index){$(this).removeAttr("role")});$(".hhs-screen .slick-slide").each(function(index){$(this).removeAttr("role")})};$(".hhs-screen .slick-list").each(function(index){$(this).removeAttr("aria-live")});$(".hhs-screen .slick-slide").each(function(index){$(this).attr("aria-live","polite")});$(".hhs-screen-container .pagerer-page").on('change',function(){$('.hhs-screen').slick('slickGoTo',$('.hhs-screen-container .pagerer-page').get(0).value-1)});$(".hhs-screen").on('beforeChange',function(event,slick,currentSlide,nextSlide){$('.hhs-screen-container .pagerer-page').get(0).value=nextSlide+1;$('.hhs-screen-container-modal #current-image').get(0).innerHTML=nextSlide+1});$(".hhs-screen").on('afterChange',function(event,slick,currentSlide){setTimeout(function(){removeIncorrectAriaAttributes()},500)});var modal=document.getElementById('hhs-screen-container-modal');function showModalWindow(){modal.style.display="block";$('.hhs-screen-container-modal').modalTabbing()};function hideModalWindow(){modal.style.display="none"};function imageClicked(){if(window.innerWidth>767){$('.hhs-screen-container-modal .hhs-screen').slick('slickGoTo',$('.hhs-screen-container .pagerer-page').get(0).value-1);setTimeout(function(){showModalWindow()},100)}};$(".hhs-screen .slick-slide img").on('click',function(event){event.stopPropagation();imageClicked()});$(".hhs-screen-container .hhs-screen .slick-list").attr("tabindex",0);$(".hhs-screen-container .hhs-screen .slick-list").keypress(function(e){var key=e.which;if(key==13){imageClicked();return false}});$(".hhs-screen-container-modal .close-button").on('click',function(){hideModalWindow()});$(".hhs-screen-container-modal .close-button").keypress(function(e){var key=e.which;if(key==13){hideModalWindow();return false}});window.onclick=function(event){if(event.target==modal)hideModalWindow()};$(window).resize(function(){hideModalWindow()})}})})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/js/hhs-slick-slider.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/js/jquery.slicknav.js. */
(function($,document,window){var defaults={label:'MENU',duplicate:true,duration:200,easingOpen:'swing',easingClose:'swing',closedSymbol:'&#9658;',openedSymbol:'&#9660;',prependTo:'body',parentTag:'a',closeOnClick:false,allowParentLinks:false,init:function(){},open:function(){},close:function(){}},mobileMenu='slicknav',prefix='slicknav'
function Plugin(element,options){this.element=element;this.settings=$.extend({},defaults,options);this._defaults=defaults;this._name=mobileMenu;this.init()};Plugin.prototype.init=function(){var $this=this,menu=$(this.element),settings=this.settings;if(settings.duplicate){$this.mobileNav=menu.clone();$this.mobileNav.removeAttr('id');$this.mobileNav.find('*').each(function(i,e){$(e).removeAttr('id')})}else $this.mobileNav=menu;var iconClass=prefix+'_icon';if(settings.label=='')iconClass+=' '+prefix+'_no-text';if(settings.parentTag=='a')settings.parentTag='a href="#"';$this.mobileNav.attr('class',prefix+'_nav');var menuBar=$('<div class="'+prefix+'_menu"></div>');$this.btn=$('<'+settings.parentTag+' aria-haspopup="true" tabindex="0" class="'+prefix+'_btn '+prefix+'_collapsed"><span class="'+prefix+'_menutxt">'+settings.label+'</span><span class="'+iconClass+'"><span class="'+prefix+'_icon-bar"></span><span class="'+prefix+'_icon-bar"></span><span class="'+prefix+'_icon-bar"></span></span></a>');$(menuBar).append($this.btn);$(settings.prependTo).prepend(menuBar);menuBar.append($this.mobileNav);var items=$this.mobileNav.find('li');$(items).each(function(){var item=$(this);data={};data.children=item.children('ul').attr('role','menu');item.data("menu",data);if(data.children.length>0){var a=item.contents(),nodes=[];$(a).each(function(){if(!$(this).is("ul")){nodes.push(this)}else return false});var wrap=$(nodes).wrapAll('<'+settings.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+prefix+'_item"/>').parent();item.addClass(prefix+'_collapsed');item.addClass(prefix+'_parent');$(nodes).last().after('<span class="'+prefix+'_arrow">'+settings.closedSymbol+'</span>')}else if(item.children().length==0)item.addClass(prefix+'_txtnode');item.children('a').attr('role','menuitem').click(function(){if(settings.closeOnClick)$($this.btn).click()})});$(items).each(function(){var data=$(this).data("menu");$this._visibilityToggle(data.children,false,null,true)});$this._visibilityToggle($this.mobileNav,false,'init',true);$this.mobileNav.attr('role','menu');$(document).mousedown(function(){$this._outlines(false)});$(document).keyup(function(){$this._outlines(true)});$($this.btn).click(function(e){e.preventDefault();$this._menuToggle()});$this.mobileNav.on('click','.'+prefix+'_item',function(e){e.preventDefault();$this._itemClick($(this))});$($this.btn).keydown(function(e){var ev=e||event;if(ev.keyCode==13){e.preventDefault();$this._menuToggle()}});$this.mobileNav.on('keydown','.'+prefix+'_item',function(e){var ev=e||event;if(ev.keyCode==13){e.preventDefault();$this._itemClick($(e.target))}});if(settings.allowParentLinks)$('.'+prefix+'_item a').click(function(e){e.stopImmediatePropagation()})};Plugin.prototype._menuToggle=function(el){var $this=this,btn=$this.btn,mobileNav=$this.mobileNav;if(btn.hasClass(prefix+'_collapsed')){btn.removeClass(prefix+'_collapsed');btn.addClass(prefix+'_open')}else{btn.removeClass(prefix+'_open');btn.addClass(prefix+'_collapsed')};btn.addClass(prefix+'_animating');$this._visibilityToggle(mobileNav,true,btn)};Plugin.prototype._itemClick=function(el){var $this=this,settings=$this.settings,data=el.data("menu");if(!data){data={};data.arrow=el.children('.'+prefix+'_arrow');data.ul=el.next('ul');data.parent=el.parent();el.data("menu",data)};if(data.parent.hasClass(prefix+'_collapsed')){data.arrow.html(settings.openedSymbol);data.parent.removeClass(prefix+'_collapsed');data.parent.addClass(prefix+'_open');data.parent.addClass(prefix+'_animating');$this._visibilityToggle(data.ul,true,el)}else{data.arrow.html(settings.closedSymbol);data.parent.addClass(prefix+'_collapsed');data.parent.removeClass(prefix+'_open');data.parent.addClass(prefix+'_animating');$this._visibilityToggle(data.ul,true,el)}};Plugin.prototype._visibilityToggle=function(el,animate,trigger,init){var $this=this,settings=$this.settings,items=$this._getActionItems(el),duration=0;if(animate)duration=settings.duration;if(el.hasClass(prefix+'_hidden')){el.removeClass(prefix+'_hidden');el.slideDown(duration,settings.easingOpen,function(){$(trigger).removeClass(prefix+'_animating');$(trigger).parent().removeClass(prefix+'_animating');if(!init)settings.open(trigger)});el.attr('aria-hidden','false');items.attr('tabindex','0');$this._setVisAttr(el,false)}else{el.addClass(prefix+'_hidden');el.slideUp(duration,this.settings.easingClose,function(){el.attr('aria-hidden','true');items.attr('tabindex','-1');$this._setVisAttr(el,true);el.hide();$(trigger).removeClass(prefix+'_animating');$(trigger).parent().removeClass(prefix+'_animating');if(!init){settings.close(trigger)}else if(trigger=='init')settings.init()})}};Plugin.prototype._setVisAttr=function(el,hidden){var $this=this,nonHidden=el.children('li').children('ul').not('.'+prefix+'_hidden');if(!hidden){nonHidden.each(function(){var ul=$(this);ul.attr('aria-hidden','false');var items=$this._getActionItems(ul);items.attr('tabindex','0');$this._setVisAttr(ul,hidden)})}else nonHidden.each(function(){var ul=$(this);ul.attr('aria-hidden','true');var items=$this._getActionItems(ul);items.attr('tabindex','-1');$this._setVisAttr(ul,hidden)})};Plugin.prototype._getActionItems=function(el){var data=el.data("menu");if(!data){data={};var items=el.children('li'),anchors=items.children('a');data.links=anchors.add(items.children('.'+prefix+'_item'));el.data("menu",data)};return data.links};Plugin.prototype._outlines=function(state){if(!state){$('.'+prefix+'_item, .'+prefix+'_btn').css('outline','none')}else $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','')};Plugin.prototype.toggle=function(){$this._menuToggle()};Plugin.prototype.open=function(){$this=this;if($this.btn.hasClass(prefix+'_collapsed'))$this._menuToggle()};Plugin.prototype.close=function(){$this=this;if($this.btn.hasClass(prefix+'_open'))$this._menuToggle()};$.fn[mobileMenu]=function(options){var args=arguments;if(options===undefined||typeof options==='object'){return this.each(function(){if(!$.data(this,'plugin_'+mobileMenu))$.data(this,'plugin_'+mobileMenu,new Plugin(this,options))})}else if(typeof options==='string'&&options[0]!=='_'&&options!=='init'){var returns;this.each(function(){var instance=$.data(this,'plugin_'+mobileMenu);if(instance instanceof Plugin&&typeof instance[options]==='function')returns=instance[options].apply(instance,Array.prototype.slice.call(args,1))});return returns!==undefined?returns:this}}}(jQuery,document,window));;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/js/jquery.slicknav.js. */
;/*})'"*/
var minDesktopWidth = 768;

(function ($) {
  $(window).load(function(){

    // Moved from html.tpl.php
    <!-- Font sizer -->
    $('#site-content').jfontsize({
        btnMinusClasseId: '#jfontsize-m',
        btnDefaultClasseId: '#jfontsize-d',
        btnPlusClasseId: '#jfontsize-p',
        btnMinusMaxHits: 3,
        btnPlusMaxHits: 3,
        sizeChange: 1
    });
    <!-- End Font sizer -->

    /* Twitter Feed
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    */

    /*
      Initializing Bootstrap tooltip
    */
    $("[data-toggle=\"tooltip\"]").tooltip({
      container: "body",
      trigger: "focus hover click",
      placement: "auto top"
    });

    /*
      NavBox functionality
    */

    if ($(".navBoxes").length > 0)
    {
      var html = document.getElementsByTagName("html").item(0);
      var hasCSS3 = (html.className.indexOf("no-csstransforms") == -1);

      $(".no-csstransforms .larger").toggleClass("undisplayed");
      $(".larger").children().toggleClass("undisplayed");

      //  Expand nav box
      $(".nav.plus").click(function(){
        var smallerBox = $(this).parents(".navBox");
        var largerBox = smallerBox.next();

        if (hasCSS3)
        {
          largerBox.toggleClass("atop").delay(600).toggleClass("hidden");
        }
        else
        {
          largerBox.toggleClass("undisplayed");
        }

        largerBox.children().toggleClass("undisplayed");
        return false;
      });

      //  Contract nav box
      $(".nav.minus").click(function(){
        var largerBox = $(this).parents(".navBox");
        // var smallerBox = largerBox.prev();

        largerBox.children().toggleClass("undisplayed");

        if (hasCSS3)
        {
          largerBox.toggleClass("hidden");
          largerBox.toggleClass("atop");
        }
        else
        {
          largerBox.toggleClass("undisplayed");
        }

        return false;
      });

      //  Navigate to L2 pages on click
      $(".navBoxes .box1.smaller").click(function(){
        window.location = $("a#to-about").get(0).href;
        return false;
      });
      $(".navBoxes .box2.smaller").click(function(){
        window.location = $("a#to-programs").get(0).href;
        return false;
      });
      $(".navBoxes .box3.smaller").click(function(){
        window.location = $("a#to-contracts").get(0).href;
        return false;
      });
      $(".navBoxes .box4.smaller").click(function(){
        window.location = $("a#to-regulations").get(0).href;
        return false;
      });
    }


    /*
      Flip Card functionality
    */

    if ($(".flip-card").length > 0)
    {
      //  get background image class from title div and add it to field-name-body div
      $(".flip-card .field-name-body .title").each(function() {

        var classList;

        if ($(this).get(0).classList)
          classList = $(this).get(0).classList;
        else if ($(this).get(0).className)    // IE9 has className instead of classList
          classList = $(this).get(0).className.split(" ");

        if (classList)
        {
          for (var i = 0; i < classList.length; i++)
          {
            if (classList[i].indexOf("bg-") == 0)
            {
              $(this).parents(".flip-card .field-name-body").addClass(classList[i]);
            }
          }
        }
      });

      //  make the flip card clickable using the title URL
      $(".flip-card .field-name-body").click(function(){
        window.location = $(this).find("h2.title a").get(0).href;
        return false;
      });
    }


    /*
      Check if only one image in carousel
    */
    $(".carousel").each(function() {

      if ($(this).find(".carousel-inner").find(".item").length > 1)
      {
        $(this).addClass("multiple-items");
      }
    });


    /*
      Make elements clickable
    */

    //  make the carousel caption clickable using the URL in the caption
    $(".carousel-caption").click(function(){
      if($(document.body).hasClass('page-cto-idealab')){
        window.location = $(this).find("a").get(0).href;
      }else{
        if($(this).find("h3 a").length > 0 && $(this).find("h3 a").get(0).href != undefined){
          window.location = $(this).find("h3 a").get(0).href;
        }
      }
      return false;
    });
    
    $(".page-cto-idealab .carousel .carousel-inner").attr('aria-live', 'assertive');
		
    
    //  make the carousel caption clickable using the URL in the caption
    $(".carousel-caption").click(function(){
      if($(document.body).hasClass('page-challenges')){
        window.location = $(this).find("a").get(0).href;
      }else{
        if($(this).find("h3 a").length > 0 && $(this).find("h3 a").get(0).href != undefined){
          window.location = $(this).find("h3 a").get(0).href;
        }
      }
      return false;
    });

    //  make the slimboard clickable using the header URL
    $(".slimboard .container").click(function(){
      window.location = $(this).find("h3.header a").get(0).href;
      return false;
    });

    //  make the grey tiles clickable using the title URL
    $(".mini-tile").click(function(){
      window.location = $(this).find("h2.title a").get(0).href;
      return false;
    });
    $(".crosslink-tile").click(function(){
      window.location = $(this).find("h2.title a").get(0).href;
      return false;
    });


    /*
      Remove Empty Rows and Regions
    */

    if ($(".panel-flexible").length > 0)
    {
      //  check each row for children
      $(".panels-flexible-region-inside-first").each(function() {
        if ($(this).get(0).children.length == 0)
        {
          $(this).parents(".panels-flexible-row").remove();
        }
      });

      //  check each region for children
      $(".panels-flexible-region-inside").each(function() {
        if ($(this).get(0).children.length == 0)
        {
          $(this).parents(".panels-flexible-region").remove();
        }
      });

      $(".email_signup .block p").each(function() {
        if ($(this).get(0).innerHTML == "&nbsp;")
        {
          $(this).remove();
        }
      });

    }


    /*
      Accordion pages
    */
    function setAriaExpandedFalse()
    {
      //  set aria-expanded flag to false for title and icon
      $(".accordion-row .ui-accordion-header .accordion-title").attr("aria-expanded", "false");
      $(".accordion-row .ui-accordion-header .ui-accordion-header-icon").attr("aria-expanded", "false");
    }

    function setAriaExpandedActiveTrue()
    {
      //  set aria-expanded flag for active item to true
      $(".accordion-row .ui-accordion-header-active .accordion-title").attr("aria-expanded", "true");
      $(".accordion-row .ui-accordion-header-active .ui-accordion-header-icon").attr("aria-expanded", "true");
    }
    
    if ($(".accordion-row").length > 0)
    {
      //  vertically center the titles
      $(".block-views-op-divs-section-block .accordion-row .accordion-title").each(function() {
        $(this).css("top", (78 - $(this).get(0).offsetHeight) / 2 + "px");
      });

      $(".block-views-topic-sites-block .accordion-row .accordion-title").each(function() {
        $(this).css("top", (78 - $(this).get(0).offsetHeight) / 2 + "px");
      });

      

      setAriaExpandedFalse();
      setAriaExpandedActiveTrue();

      $(".accordion-row .ui-accordion-header .accordion-title").click(function() {
        setAriaExpandedFalse();
        $(this).attr("aria-expanded", "true");
        $(this).parents(".ui-accordion-header").find(".ui-accordion-header-icon").attr("aria-expanded", "true");
      });

      $(".accordion-row .ui-accordion-header .ui-accordion-header-icon").click(function() {
        setAriaExpandedFalse();
        $(this).attr("aria-expanded", "true");
        $(this).parents(".ui-accordion-header").find(".accordion-title").attr("aria-expanded", "true");
      });


      /*
          views-accordion title that links to another location
      */
      $("a.opdiv-title-target").click(function() {
        window.location = $(this).attr("href");
        return false;
      });

      $("a.opdiv-title-target").keydown(function(e){
        if (e.keyCode == 13 || e.keyCode == 32) {  //checks whether the pressed key is "Enter" or spacebar
          window.location = $(this).attr("href");
          return false;
        }
      });

      //  Don't tab to parent header of each title.
      //  Don't tab to anchors that are not links before each title.
      $("a.opdiv-title-target").each(function() {
        $(this).parents(".ui-accordion-header").attr("tabindex", -1);
        $(this).prev().attr("tabindex", -1);
      });

      //  Add tabindex to make the focus explicit.
      //  This allows styling with the :focus selector.
      $(".ui-accordion-header-icon").each(function() {
        $(this).attr("tabindex", 0);
      });
    }



    /*
        Add in page anchor to apply to work page for pager links
    */
    if ($("#filter-form").length > 0) {
      var linkPre = $(".pager-previous").children("a").attr("href");
      $(".pager-previous").children("a").attr("href", linkPre + "#announcement");
      var linkNext = $(".pager-next").children("a").attr("href");
      $(".pager-next").children("a").attr("href", linkNext + "#announcement");
    }




    /*
      Matched Columns
    */
    if ($(window).width() >= 768)
    {
      $(".page-news .news-related-news").wrap("<div id='news-mc' class='matched-container'></div>");
      $(".matched-container").append("<div class='matched-column-divider'></div>");
      $(".page-news .news-related-blog").appendTo($("#news-mc"));

      $(".matched-container").each(function() {
        var maxHeight = 0;

        //  get height of tallest column
        $(this).find(".matched-column").each(function() {
          maxHeight = Math.max(maxHeight, $(this).get(0).scrollHeight + parseInt($(this).css("padding-bottom")));
        });

        //  set height of all columns to the max
        $(this).find(".matched-column").css({height: maxHeight});
      });

      //wrap the blog "sign up" and "rss" sections in a div to add "hr"
      $(".page-blog .signup-blog, .page-blog .rss-blog").wrapAll("<div class='signUp-rss-container'></div>");
    }


    /*
      Alerts
    */

    function getTextContent(element)
    {
      if (element != null && element !== undefined)
        return element.textContent || element.innerText;

      return "";
    }


    if ($(".alert .close").length > 0)
    {
      $(".alert .close").focus();
    }


    if ($(".alert-row").length > 0)
    {
      //  add close button to alerts
      $(".alert-dismissible")
        .prepend("<button type='button' class='close' data-dismiss='alert' aria-label='Close'></button>");

      //  show any alerts that have not been previously clicked
      $(".alert-row").each(function() {
        if ($(".alert-row .views-field-nid .field-content").length > 0)
        {
          if ($.cookie("alert-" + getTextContent($(this).find(".views-field-nid .field-content").get(0))))
          {
            //  remove the alert row from the DOM
            $(this).remove();
          }
          else
          {
            $(this).css("display", "block");
          }
        }
      });

      //  remove alert when close button is clicked
      $(".alert-dismissible .close").click(function(){

        //  set cookie based on nodeID of the alert
        var alertID = getTextContent($(this).parents(".alert-row").find(".views-field-nid .field-content").get(0));
        $.cookie("alert-" + alertID, "true", { expires: 365, path: "/" });

        //  remove the alert row from the DOM
        $(this).parents(".alert-row").remove();

        return false;
      });
    }


    /*
      Set WMODE for YouTube videos
    */
    $("iframe").each(function(){
      var ifr_source = $(this).attr("src");
      var wmode = "wmode=transparent";
      if(ifr_source != null && ifr_source.indexOf("youtube") != -1){
        if(ifr_source.indexOf("?") != -1) {
          var getQString = ifr_source.split("?");
          var oldString = getQString[1];
          var newString = getQString[0];
          $(this).attr("src",newString+"?"+wmode+"&"+oldString);
        }
        else $(this).attr("src",ifr_source+"?"+wmode);
      }
    });


    /*
      Initialize Org Chart
    */
    setOrgChartDimensions();
    
    // Create a Div in every span of type node, and move
    // the text into the newly created Div
    // This is done to make vertical alignment possible.
    $(".org-chart span.node").each(function(){
      var content = $(this).contents();
      var wrapperDiv = $("<div class='org-chart-span-txt' />");
      $(this).append(wrapperDiv);
      wrapperDiv.append(content);

    });

    /*
      Interactive State Map
    */
    function setStateStatus(abbrev) {
      var hasStatement = "Has Expanded Medicaid";
      var notStatement = "Has Not Expanded Medicaid";
      var hasList = "AK, AZ, AR, CA, CO, CT, DC, DE, HI, IL, IN, IA, KY, MD, MA, MI, MN, MT, NV, NH, NJ, NM, NY, ND, OH, OR, PA, RI, VT, WA, WV";
      var notList = "AL, FL, GA, ID, KS, LA, ME, MS, MO, NE, NC, OK, SC, SD, TN, TX, UT, VA, WI, WY";
      var stateInfo = new Object;

      stateInfo["AL"] = ["Alabama", false];
      stateInfo["AK"] = ["Alaska", true];
      stateInfo["AZ"] = ["Arizona", true];
      stateInfo["AR"] = ["Arkansas", true];
      stateInfo["CA"] = ["California", true];
      stateInfo["CO"] = ["Colorado", true];
      stateInfo["CT"] = ["Connecticut", true];
      stateInfo["DE"] = ["Delaware", true];
      stateInfo["DC"] = ["District of Columbia", true];
      stateInfo["FL"] = ["Florida", false];
      stateInfo["GA"] = ["Georgia", false];
      stateInfo["HI"] = ["Hawaii", true];
      stateInfo["ID"] = ["Idaho", false];
      stateInfo["IL"] = ["Illinois", true];
      stateInfo["IN"] = ["Indiana", true];
      stateInfo["IA"] = ["Iowa", true];
      stateInfo["KS"] = ["Kansas", false];
      stateInfo["KY"] = ["Kentucky", true];
      stateInfo["LA"] = ["Louisiana", false];
      stateInfo["ME"] = ["Maine", false];
      stateInfo["MD"] = ["Maryland", true];
      stateInfo["MA"] = ["Massachusetts", true];
      stateInfo["MI"] = ["Michigan", true];
      stateInfo["MN"] = ["Minnesota", true];
      stateInfo["MS"] = ["Mississippi", false];
      stateInfo["MO"] = ["Missouri", false];
      stateInfo["MT"] = ["Montana", true];
      stateInfo["NE"] = ["Nebraska", false];
      stateInfo["NV"] = ["Nevada", true];
      stateInfo["NH"] = ["New Hampshire", true];
      stateInfo["NJ"] = ["New Jersey", true];
      stateInfo["NM"] = ["New Mexico", true];
      stateInfo["NY"] = ["New York", true];
      stateInfo["NC"] = ["North Carolina", false];
      stateInfo["ND"] = ["North Dakota", true];
      stateInfo["OH"] = ["Ohio", true];
      stateInfo["OK"] = ["Oklahoma", false];
      stateInfo["OR"] = ["Oregon", true];
      stateInfo["PA"] = ["Pennsylvania", true];
      stateInfo["RI"] = ["Rhode Island", true];
      stateInfo["SC"] = ["South Carolina", false];
      stateInfo["SD"] = ["South Dakota", false];
      stateInfo["TN"] = ["Tennessee", false];
      stateInfo["TX"] = ["Texas", false];
      stateInfo["UT"] = ["Utah", false];
      stateInfo["VT"] = ["Vermont", true];
      stateInfo["VA"] = ["Virginia", false];
      stateInfo["WA"] = ["Washington", true];
      stateInfo["WV"] = ["West Virginia", true];
      stateInfo["WI"] = ["Wisconsin", false];
      stateInfo["WY"] = ["Wyoming", false];

      if (abbrev == null)
      {
        $(".healthcare .state-status #theTitle").get(0).innerText = "";
        $(".healthcare .state-status #theBody").get(0).innerText = "";
      }
      else if (abbrev == "hasExpanded")
      {
        $(".healthcare .state-status #theTitle").get(0).innerText = hasStatement;
        $(".healthcare .state-status #theBody").get(0).innerText = hasList;
      }
      else if (abbrev == "notExpanded")
      {
        $(".healthcare .state-status #theTitle").get(0).innerText = notStatement;
        $(".healthcare .state-status #theBody").get(0).innerText = notList;
      }
      else
      {
        $(".healthcare .state-status #theTitle").get(0).innerText = stateInfo[abbrev][0];

        if (stateInfo[abbrev][1])
          $(".healthcare .state-status #theBody").get(0).innerText = hasStatement;
        else
          $(".healthcare .state-status #theBody").get(0).innerText = notStatement;
      }
    }

    if ($(".interactive-map").length > 0)
    {
      //  This section is specfic to the Healthcare State By State map
      if ($(".healthcare .state-status").length > 0)
      {
        $(".interactive-map area").hover(
          function() {
            setStateStatus($(this).get(0).id);
          }, function() {
            setStateStatus(null);
          }
        );
      }
    }


    // Function to add wrapper around the
    // the left nav in mobile
    addLeftNavWrapperInMobile();


    /*
      Webform
    */

    //  Add label to webform file input
    function getLabelHTML(theID) {
      return "<label for='" + theID + "'>"
              + "<span class='label-label'>Choose File</span>"
              + "<span class='form-control form-text' tabindex='0'></span>"
              + "<span class='button' tabindex='0'>Browse</span>"
              + "</label>";
    }

    if ($(".webform-client-form").length > 0){

      $(".webform-component label input[type='checkbox']").each(function(){
        $(this).parent().contents().filter(function(){
          return this.nodeType === 3;
        }).wrap("<div class='label-text'></div>");
        $(this).parent().find("div.label-text").before("<span></span>");
      });

      $(".webform-component label input[type='radio']").each(function(){
        $(this).parent().contents().filter(function(){
          return this.nodeType === 3;
        }).wrap("<div class='label-text'></div>");
        $(this).parent().find("div.label-text").before("<span class='radio-sprite'></span>");
      });

      $(".webform-component select").each(function(){
        $(this).addClass("form-control");
      });

      $(".webform-component .webform-datepicker input[type='image']").each(function(){
        $(this).attr("src","/sites/all/themes/project_h/css/images/webform-calendar.png");
      });

      //  Add span around label-explanation for MH Parity form
      $(".webform-client-form[action^='/mental-health-and-addiction-insurance-help'] input[type='radio'] + label .label-text").each(function(){
        var labelText = $(this).text();
        labelText = labelText.substr(0, labelText.indexOf(":") + 1) 
                  + "<span class='label-explanation'>" 
                  + labelText.substr(labelText.indexOf(":") + 1) 
                  + "</span>";
        $(this).get(0).innerHTML = labelText;
      });

      setTableWidth();

      $(".webform-component input[type='file']").each(function(){
        $(this).css({
          width: "0.1px", height: "0.1px", opacity: 0,
          overflow: "hidden", position: "absolute", zIndex: "-1"
        });
        $(this).attr("tabindex", -1);
        $(this).after(getLabelHTML($(this).get(0).id));
        $(this).parent(".form-managed-file").attr("inputID", $(this).get(0).id);
        $(this).parent(".form-managed-file").find("button[value='Upload']").addClass("inactive");
      });

      $(".webform-component input[type='file']").change(function(){
        $(this).next().find(".form-text").get(0).innerHTML = $(this).get(0).value.substr($(this).get(0).value.lastIndexOf("\\") + 1);

        if ($(this).parent(".form-managed-file").find(".form-text").get(0).innerHTML.length == 0)
          $(this).parent(".form-managed-file").find("button[value='Upload']").addClass("inactive");
        else
          $(this).parent(".form-managed-file").find("button[value='Upload']").removeClass("inactive");
      });

      $(".form-managed-file button.inactive").mousedown(function(){
        return false;
      });

      $(".form-managed-file button[value='Remove']").mousedown(function(){
        $(this).parents(".form-managed-file").prepend(getLabelHTML($(this).parent(".form-managed-file").attr("inputID")));
      });
    }
    
    // Image Caption Fix
    $("div.img-and-caption-wrapper").each(function(){
      // If the wrapper doesn't have a width attribute
      if($(this).prop("style")["width"] == ""){
        var imgObj = $(this).find("img.media-element");
        if((imgObj).hasClass("right")){
          $(this).find(".field-name-field-file-image-caption").addClass("right");
        }else if((imgObj).hasClass("left")){
          $(this).find(".field-name-field-file-image-caption").addClass("left");
        }else if((imgObj).prop("style")["text-align"] != ""){ // if the image has a text-align property
          var textAlign = (imgObj).prop("style")["text-align"]; // Get the alignment and set it to the caption as well
          $(this).css("text-align", textAlign);
        }
        var imgWidth = $(this).find("img.media-element").outerWidth(true);
        $(this).css("width", imgWidth);
      }
    });


    // PDF styling

    // For all anchors whose href ends with ".pdf"
    $("#site-content a").each(function(){

      var myHref = $(this).attr("href");
      if(myHref === undefined || myHref.indexOf('.pdf') < 0){return;}

      // If the anchor has an image as a
      // child, then skip the iteration
      if($(this).has("img").length > 0){
        return true;
      }else{
        // If the anchor has not text in
        // it, then skip the iteration
        if($(this).text().length <= 0){
          return true;
        }
        
        $(this).append(" - PDF");
      }
      // Replaces the span containing the [PDF] string with a <del> tag
      $(this).next("span").replaceWith("<del>" + $(this).next("span").text() + "</del>");

      // Finds the string in a parenthesis that starts with PDF, till the
      // closing parenthesis, and puts it in a <del> tag.
      // $(this).parent().text($(this).parent().text().replace(/\(PDF([^)]+)\)/g, '<del>$&</del>'));
      var pdfText = $(this).parent().contents().filter(function(){
        return this.nodeType === Node.TEXT_NODE;
      }).text();
      if(!pdfText){
        $(this).parent().html().replace(/(\(|\[)PDF([^)\]]*)[\)\]]/g, "<del>$&</del>");
      }
      $(this).parent().contents().filter(function(){
        return this.nodeType === Node.TEXT_NODE;
      }).text().replace(/(\(|\[)PDF([^)\]]*)[\)\]]/g, "<del>$&</del>");

    });
    // End of PDF Styling ----------------------------------------------------------------

         
    // For each external link
    $("#site-content a:external").each(function(){

      // Remove http:// and https:// then get the string before the first slash in the href. 
      var requiredHref = $(this).attr('href').replace('http://', '').replace('https://','').split('/')[0];

      var disclaimerLink = " <a href='//www.hhs.gov/disclaimer.html' title='Exit Disclaimer' class='exit-disclaimer'>"
                      + "<img src='//www.hhs.gov/sites/all/themes/project_h/css/images/exit_disclaimer.png' alt='exit disclaimer icon' border='0' class='icon-image'>"
                      + "</a>";
      // if requiredHref doesn't contain .gov and
      // doesn't contain an image and is not empty
      // and doesn't already have a disclaimer link
      if(    (requiredHref.indexOf('.gov') < 0) 
        &&  !($(this).has("img").length > 0)
        &&  !($(this).is(':empty'))
        &&  !($(this).siblings('a').is('[href *= "http://www.hhs.gov/Disclaimer.html"]')) ) {

        

        if($(this).hasClass('disclaimer-exception')){return;}

        // Add the disclaimer
        $(this).after(disclaimerLink);          
      }

      // Even if it is not an external link but has the 
      // 'add-disclaimer' class, then add the disclaimer link
      if($(this).hasClass('add-disclaimer')){
        $(this).after(disclaimerLink);
      }
      
    });

    if( $("body div").hasClass("panels-flexible-independent_2column_span")|| $("body div").hasClass("panels-flexible-independent_ia")){
      $("body").addClass("iia-landing");
    }

    // relocate the add this app depending on whether it is mobile or desktop
    relocateAddThisApp();

    $(".page-challenges a.carousel-control.left").remove();
    $(".page-challenges a.carousel-control.right").remove();
    $(".page-challenges .region-content header:first-of-type").remove();
    $(".page-challenges h2.element-invisible a").attr('tabindex', '-1');
    
	/*
		Bootstrap carousel 508 global Fix
		One slide - add aria-label and aria-hidden attributes
		Multiple slides - add aria-label attribute
	*/
	$("a.carousel-control.left").attr('aria-label', 'previous');
    $("a.carousel-control.right").attr('aria-label', 'next');
    //Check if only one image in carousel
    $('.carousel-inner').each(function() {
      if ($(this).children('div').length == 1) {
		  $(this).siblings('.carousel-control, .carousel-indicators').attr('aria-hidden', 'true');
	  }
    });


  // Qualtrics fix recommended code
  /*
    var styling = 'html, body { height: 100%; overflow: auto; -webkit-overflow-scrolling: touch;}'
    var layoutStyle = document.createElement('style');
    layoutStyle.type = 'text/css';
    layoutStyle.innerHTML = styling;
    document.body.appendChild(layoutStyle);
   */ 

  }); // End of onload

  // Check whether links are external:
  // (Only works with elements that have href):
  $.extend($.expr[':'],{
      external: function(a,i,m) {
          if(!a.href) {return false;}
          return a.hostname && a.hostname !== window.location.hostname;
      }
  });


  var setTableWidth = function(){
    var tableWidth = $(window).width() - 15;
    // $(".webform-component table.webform-grid").css('width', tableWidth+'px');
    $(".webform-component table.webform-grid").css("max-width",tableWidth);
  };

  var relocateAddThisApp = function(){
    // If we're in mobile
    if($(window).width() < minDesktopWidth){
      // If the page has a voc, add the "addthis" app right before
      // the voc, else, right before the global footer.
      if($("body").find(".page-stamp").length > 0){
        $(".page-stamp").before($("div.addthis"));   
      }else if($("body div#voc_tool_container").length > 0){
        $("div#voc_tool_container").before($("div.addthis"));
      }else{
        $("div#hhs-global-footer").before($("div.addthis"));
      }
    }else{
      // If the page has a left nav
      if($("div.main-section div.addthis-with-left-nav").length > 0){
        $("div.addthis").prependTo("div.main-section .addthis-with-left-nav");
      }else{
        $("div.addthis").prependTo("div.main-section");        
      }
    }
  };
 

  /*
    Responsive code to handle videos - START
  */

  // Find all YouTube videos
  var $allVideos = $("iframe[src^=' http://www.youtube-nocookie.com'], iframe[src^='http://www.youtube.com'], iframe[src^=' https://www.youtube-nocookie.com'], iframe[src^='https://www.youtube.com']");
  var aspectRatio = [];


  // The element that is fluid width
  var $fluidEl = $("body");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {

    var ar = this.height / this.width;
    aspectRatio.push(ar);

    // remove the hard coded width/height
    $(this)
      .removeAttr("width")
      .removeAttr("height");
  });

  // When the window is resized
  $(window).resize(function() {

    var minDesktopWidth = 768;
    var maxVideoWidth = 640;
    var videoPadding = 30;
    var newWidth = $fluidEl.width();
    var inMobileMode = (newWidth < minDesktopWidth);
    var i = 0;

    if (inMobileMode) {
      newWidth = newWidth - videoPadding;
    }

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {

      newWidth = Math.min(maxVideoWidth, newWidth);
      var $el = $(this);
      $el
        .width(newWidth)
        .height(Math.round(newWidth * aspectRatio[i++]));
    });

    setOrgChartDimensions();

    // If it is not mobile, remove the left nav wrapper
    if($(window).width() >= minDesktopWidth){
      if($(".left-nav-wrapper").length){
        $(".left-nav-region").css("display","block");
        $(".left-nav-region").insertBefore($(".left-nav-wrapper"));
        $(".addthis-with-left-nav").insertBefore(".left-nav-region");
        $(".left-nav-wrapper").remove();
      }
    }else{
      addLeftNavWrapperInMobile();
    }

    // relocate the add this app depending on whether it is mobile or desktop
    relocateAddThisApp();

    // Adjust width of webform table when window is resized
    setTableWidth();

    
  }); // End of window resize event



  /********************************************************************
    function:     createLeftNavWrapper
    parameters:   none
    description:  Creates the wrapper div and its contents and
            returns the newly created and populated div
  *********************************************************************/
  var createLeftNavWrapper = function(){
    var leftNavWrapper = $("<div>", { class: "left-nav-wrapper"});
    var div = $("<div>", {class: "nav-wrapper-header"});
    var h2 = $("<h2>", { text: "More Topics In This Section"});
    var anchor = $("<a>", {
      href: "#",
      class: "left-nav-wrapper-icon expand",
      text: "has sub items, More Topics In This Section"
    });
    anchor.attr("aria-expanded", "false");
    var li = $("<li>", {class: "liRow collapsed"});
    anchor.appendTo(li);
    var ul = $("<ul>", {class: "nav"});
    li.appendTo(ul);
    h2.appendTo(div);
    ul.appendTo(div);
    div.appendTo(leftNavWrapper);
    return leftNavWrapper;
  };


  /***************************************************************************************
    function:     addLeftNavWrapperInMobile
    parameters:   none
    description:  Wraps the left nav in a collapsable div,
            - in mobile
            - in pages that have left navigation
            Moves the 'print' and 'share' row to the bottom of the left nav
  *****************************************************************************************/
  var addLeftNavWrapperInMobile = function(){
    // Make sure the pages have left nav and don't already have a wrapper
    if(($(".left-nav-region").length) && !($(".left-nav-wrapper").length)){
      if($(window).width() < minDesktopWidth){ // Make sure it is mobile
        var leftNavWrapper = createLeftNavWrapper();
        leftNavWrapper.insertBefore($(".left-nav-region"));
        $(".left-nav-region").css("display","none");
        $(".left-nav-region").appendTo(leftNavWrapper);


        $(".left-nav-wrapper-icon").on("click", function(){
          $(".liRow").toggleClass("collapsed expanded");
          $(".left-nav-wrapper-icon").toggleClass("collapse expand");
          $(".left-nav-region").toggle();

          //Update aria-expanded attribute based on toggle class
          if($(this).hasClass("expanded")){
            $(this).attr("aria-expanded", "false");
          }else{
            $(this).attr("aria-expanded", "true");
          }
          return false;
        });

        // Move the print/share row below the left-nav
        $(".addthis-with-left-nav").insertAfter(".left-nav-wrapper");
      }
    }
  };

  /*
    Responsive code to handle videos - END
  */


  /*
    Org Chart sizing - BEGIN
  */

  function setOrgChartDimensions()
  {
    //  For getting the mobile height of the chart
    //  Count li's
    //  Height = (number of boxes * 80) + 130 (in px)
    //  Apply style to mobile height

    var listItems = $(".org-chart li").length;
    var shortSections = $(".org-chart.short-sections li.section").length;
    var mobileHeight = (listItems * 104) - (shortSections * 30) + 30;
    var minDesktopWidth = 768;

    if ($(window).width() < minDesktopWidth){
      $(".org-chart").css( "height", mobileHeight );
    }

    //  For the desktop width of each department
    //  Count .department
    //  Width = ($deptMarginLeft + 100)/$numDepartments - $deptMarginLeft)
    //  margin-left: 1.5 or 1.5 + (6 - $numDepartments)) (whichever is maximum)
    //  Apply style to desktop width

    if ($(window).width() >= (minDesktopWidth - 50))
    {
      var departmentLevelCount = $(".departments").length;
      var departmentCount = 0;
      var deptMarginLeft = 0;
      var deptWidth = 0;

      if (departmentLevelCount == 1)
      {
        departmentCount = $(".department").length;
        deptMarginLeft = 1 + (6 - departmentCount);
        deptWidth = (deptMarginLeft + 100)/departmentCount - deptMarginLeft;

        $(".org-chart .department").css( "width", deptWidth + "%" );
        $(".org-chart .department").css( "margin-left", deptMarginLeft + "%" );
      }
      else
      {
        for(var depRowIndex = 0; depRowIndex < departmentLevelCount; depRowIndex++)
        {
          departmentCount = $(".deps-" + depRowIndex + " .department").length;
          deptMarginLeft = 1 + (6 - departmentCount);
          deptWidth = (deptMarginLeft + 100)/departmentCount - deptMarginLeft;

          $(".org-chart .deps-" + depRowIndex + " .department").css( "width", deptWidth + "%" );
          $(".org-chart .deps-" + depRowIndex + " .department").css( "margin-left", deptMarginLeft + "%" );
        }
      }

      if ($(".lower-level-row").length > 0)
      {
        var levelWidth = parseInt($(".lower-level-row").css( "width"), 10);
        var subsectionCount = $(".lower-level-row .subsection").length;
        var minMargin = 4;
        var subsectionWidth = ((levelWidth + minMargin) / subsectionCount) - minMargin;

        $(".lower-level-row .subsection").css( "width", subsectionWidth + "px" );
        $(".lower-level-row .subsection").css( "margin-left", minMargin + "px" );
        $(".lower-level-row .subsection:first-child").css( "margin-left", "0px" );
      }
    }
    else{
      $(".org-chart .department").css( "width", "100" + "%" );
      $(".org-chart .department").css( "margin-left", "0" );
    }

    $(".org-chart .department:first-child").css( "margin-left", "0" );
  }

  /*
    Org Chart sizing - END
  */


  $(document).ready(function(){


    // If the page has a table with a large-table class in it,
    // and doesn't have a left navigation, then re-adjust the
    // max-width of this large table.
    if($("table.large-table").length){
      if($("div.left-nav-region").length === 0){
        $("table.large-table").css({
          "max-width": "940px",
          "width": "100%"
        });
      }      
    }

    // Copied from page--front.tpl.php ------------------------------------------------
    if($('body').hasClass('front')){
      $('#main-menu').slicknav({
          prependTo:'#mobilemenu',
          label:'Menu',
        });
      
      // not display hhs-global-search when slicknav button is clicked and global search is open
      $("a.slicknav_btn").click(function(){
        if ($(".navbar-fixed-top .hhs-global-search").hasClass("shown"))
        {
          $(".navbar-fixed-top .hhs-global-search").removeClass("shown");
        }
      });      
    }

    // -------------------------------------------------------------------------------------

    // Copied from html.tpl.php -----------------------------------------------------------

    $('#main-menu').slicknav({
        prependTo:'#mobilemenu',
        label:'Menu',
    });

    $(".mobilesearch").click(function(){
      $('.top-container').addClass('search-mode');
      $('.slicknav_btn.slicknav_open').click();
      $('.hhs-global-search .close-button').attr('tabindex', 0);
      $('.hhs-global-search .close-button a').attr('tabindex', 0);
    });

    $(".hhs-global-search .close-button").click(function(){
      $('.top-container').removeClass('search-mode');
      $('.hhs-global-search .close-button').attr('tabindex', -1);
      $('.hhs-global-search .close-button a').attr('tabindex', -1);
    });

    $(".hhs-global-search .global-search").focus(function(){
      if ($(window).width() < 768)
      {
        $('.top-container').addClass('search-mode');
        $('.hhs-global-search .close-button a').attr('tabindex', 0);
      }
    });
    // ------------------------------------------------------------------------------------


    // Copied from page.tpl.php -----------------------------------------------------------

    /*
      Active Trail with aria
    */
    if ($(".left-nav-region .active-trail").length > 0) {
       
       $(".left-nav-region .active-trail:first").children("a.collapsed").removeClass("collapsed");
       $(".left-nav-region .active-trail:first").children("ul:first").removeClass("collapse").addClass("in");
       
       //aria on load
       var activeck = $(".left-nav-region .active-trail:first").children("a.left-nav-icon").hasClass("collapsed");
       $(".left-nav-region .active-trail:first").children("a.left-nav-icon").attr("aria-expanded", !activeck);
       
    }
    
    /*
        Aria for click
    */
    $(".aria-trigger").on("click", function (e) { 
       var ck = $(this).hasClass("collapsed"); 
       $(this).attr("aria-expanded", ck);          
        });


    /*
      Opening left nav menus based on the URL
    */

    var path = window.location.pathname;
    path = dropFilename(decodeURIComponent(path.replace(/\/$/, ""))); // Prep path for comparison

    $(".nav a").each(function () {
      var href = dropFilename($(this).attr('href'));  // Prep href for comparison

      if (path.search(href) == 0  && !$(this).parent().hasClass("leaf"))
      {
        // Remove collapsed class from the sibling anchor if the match is found on the title of the menu
        $(this).parents().children("a.collapsed").removeClass("collapsed");

        // Or, from the ul in case the match is found in menu items
        $(this).parents().children("ul:first").removeClass("collapse").addClass("in");

        // Also change aria-expanded
        $(this).parents().children("a.left-nav-icon").attr("aria-expanded", true);

        // Make it look like active
        //$(this).addClass("active");

        // If one match is found, get out, that is all we need
        return false;
      }
    });

    //  Drop filename and add trailing slash if necessary
    function dropFilename(URL)
    {
      if (URL != null && URL !== undefined && URL.length > 0)
      {
        var i = URL.lastIndexOf("/");
        
        if (i < 0)              // has no slash, e.g. "index.html"
          return URL;
        
        if (i == URL.length - 1)      // slash is last character, e.g. "/about/careers/"
          return URL;
        
        if (URL.lastIndexOf(".html") > -1)  // has filename, e.g. "/about/careers/index.html"
          return URL.substring(0, i + 1);

        return URL + "/";             // has no filename, e.g. "/about/careers"
      }

      return "";
    }
    
    
    /*
      A - Z left nav && Main Menu (The Top 4)
    */
    
    var currentrawURL = window.location.href;
    
    var n = currentrawURL.indexOf("//");
    var cleanURL = currentrawURL.substring(n+2);
    
    var m = cleanURL.indexOf("/");
    
    if (m != (cleanURL.length - 1)) {
      var azURL = cleanURL.substring(m+1);
      var URLparts = azURL.split("/");
      
      if (URLparts.length > 1 && URLparts[1] != "") {
        if (URLparts[1] == "numbers") {
           var azTarget = "#";
        } else {
           azTarget = URLparts[1].toUpperCase();
        }
      

        if (URLparts[0] == "az") {
           $(".AZlist-main").find("a:contains('" + azTarget + "')").addClass("Selected");  
        }
      }
      
      switch (URLparts[0]) {
        case "about":
          $(".nav-about-hhs").addClass("active");
          break;
        case "programs":
          $(".nav-programs-services").addClass("active");
          break;
        case "grants":
          $(".nav-grants-contracts").addClass("active");
          break;
        case "regulations":
          $(".nav-laws-regulations").addClass("active");
          break;
      }
    }

          /*  Translation link  */
      $("a.language-link").each(function () {

        //  Set language attribute for 508
        var lang = "en";
        var URL = $(this).parents(".node-article").attr("about");

        if (URL && URL.indexOf("language=") > -1)
        {
          lang = URL.substring(URL.indexOf("language=") + 9, URL.indexOf("language=") + 11);
        }

        $(this).parents(".region-content").attr( "lang", lang );

        //  Replace translation link with button
        if ($("body.logged-in").length == 0)
        {
          $(this).parents("ul.links").css("display", "none");
          $(this).wrapInner( "<span role='button' class='primary-button-2' lang='" + $(this).get(0).innerText.toLowerCase().substring(0, 2) + "'></span>");
          $("div.addthis_toolbox ul").prepend("<li class='language-link-container'></li>");
          $(".language-link-container").append($(this));
        }
      });
    // ------------------------------------------------------------------------------------

    /*
      Determine if using a phone
    */

    function ReplacePhoneNumbers(oldhtml, phonereg, spechars) {
      //  Created by Jon Meck at LunaMetrics.com - Version 1.0
      var newhtml = oldhtml.replace(/href=['"]callto:/gi,"href=\"tel:");
      newhtml = newhtml.replace(phonereg, function ($0, $1, $2, $3, $4, $5, $6) {
        if ($3)
          return $1;
        else if ($4) 
          return $2+$4+$5+$6;
        else 
          return $2+"<a href='tel:"+$5.replace(spechars,"")+"'>"+$5+"</a>"+$6;
      });

      return newhtml;
    }

    function checkForPhoneNumbers(currentNode, phonereg, spechars){
      var noSearchNodes = ["hr","br","script","noscript","comment","img"];
      // Don't waste time on noSearchNodes
      if ($.inArray( currentNode.nodeName, noSearchNodes) > -1)
        return;

      if (currentNode.childNodes.length == 0)
      // if there are no children and it is a text node, look for and replace phone number
      {
        if (currentNode.nodeName == "#text" && 
                                        currentNode.textContent != ReplacePhoneNumbers(currentNode.textContent, phonereg, spechars))
        {
          var newNode = document.createElement("span");
          newNode.setAttribute("class", "tempWrapper");
          newNode.innerHTML = ReplacePhoneNumbers(currentNode.textContent, phonereg, spechars);
          currentNode.parentNode.insertBefore(newNode, currentNode.nextSibling); 
          currentNode.remove();
        }
      }
      else  // else, recursively check the children
      {
        for (var childIndex = currentNode.childNodes.length - 1; childIndex >= 0; childIndex--)
        {
          checkForPhoneNumbers(currentNode.childNodes[childIndex], phonereg, spechars);
        }
      }
    }

    var isPhone = false; //initiate as false
    // device detection
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
      isPhone = true;
    
    if (isPhone){
      var countrycodes = "1";
      var delimiters = "-|\\.|—|–|&nbsp;";
      var phonedef = "\\+?(?:(?:(?:" + countrycodes + ")(?:\\s|" + delimiters + ")?)?\\(?[2-9]\\d{2}\\)?(?:\\s|" + delimiters + ")?[2-9]\\d{2}(?:" + delimiters + ")?[0-9a-z]{4})";
      var spechars = new RegExp("([- \(\)\.:]|\\s|" + delimiters + ")","gi"); //Special characters to be removed from the link
      var phonereg = new RegExp("((^|[^0-9])(href=[\"']tel:)?((?:" + phonedef + ")[\"'][^>]*?>)?(" + phonedef + ")($|[^0-9]))","gi");

      checkForPhoneNumbers($("body").get(0), phonereg, spechars);
      $(".tempWrapper a").unwrap();
    }
    else  //  Remove the tel links if not using a phone.
    {
      $("a[href^='tel:']").each(function() {
        $(this).replaceWith($(this).text());
      });
    }


    /*
      Agencies and Offices / Public Health / Answers page
    */
    $(".title-card").each(function(){
      $(this).find(".views-field-field-logo").wrap("<div class='colLeft'></div>");
      if($(this).find("div.colLeft").length){
        $(this).append("<div class='colRight'></div>");        
        $(this).find(".in-right-column").each(function(){
          $(this).parent().find(".colRight").append($(this));
        });
      }
    });


    /*
      Footnotes
    */
    $("ul.footnotes li.footnote:first-of-type").each(function(){
      $(this).before("<h3>Footnotes</h3>");
    });

    $("li.footnote .footnote-label").each(function(){
      $(this).before($(this).html());
      $(this).html("↩");
      $(this).attr( "aria-label", "Back to content");
      $(this).attr( "title", "Back to content");
    });

    $('a.footnote-label').click(function() {
      var headerOffset = $('.hhs-blue-header').outerHeight() + $('.hhs-global-nav').outerHeight();

      $('html,body').animate({
        scrollTop: $(this.hash).offset().top - headerOffset + 10
        }, 1000);

      $("#" + $(this).get(0).href.split("#")[1]).get(0).focus();
      return false;
    });

    /*
      Secretary - The Latest
    */
    $(".view-secretary-the-latest-block .views-row .all-dates").each(function(){
      if ($(this).find("span.speech-date").get(0).innerHTML.length == 0) {
        $(this).find("span.speech-date").remove();

        if ($(this).find("span.testimony-date").get(0).innerHTML.length == 0) {
          $(this).find("span.testimony-date").remove();
        }
        else {
          $(this).find("span.date-created").remove();
        }
      }
      else {
        $(this).find("span.testimony-date").remove();
        $(this).find("span.date-created").remove();
      }
    });

    // Hide mobile menu on scroll.
    $(window).scroll(function(){
      if($(this).scrollTop() > 0){
        $("ul.slicknav_nav").addClass('slicknav_hidden');
        $("ul.slicknav_nav").attr('aria-hidden', 'true');
        $("ul.slicknav_nav").css('display', 'none');
      }
    });

    // In mobile move the location of the 
    // espanol button to the top
    if ($(window).width() < minDesktopWidth){
      if($(".page-dab li.language-link-container").length > 0 ){
        moveEspanolBtn();
      }
    }

  }); // End of Document Ready

  $(window).resize(function() {
    // In mobile move the location of the 
    // espanol button to the top
    if ($(window).width() < minDesktopWidth){
      if($(".page-dab li.language-link-container").length > 0 ){
        moveEspanolBtn();
      }
    }else{
      if($("div.language-link-container").length > 0){
        $(".page-dab div#addthis ul").prepend("<li class='language-link-container'></li>");
        $(".page-dab li.language-link-container").append($(".page-dab div.language-link-container").html());
        $(".page-dab div.language-link-container").remove();
      }
    }
  }); // End of resize

  var moveEspanolBtn = function(){
    var $espanolBtnDiv = $("<div>", {class:"language-link-container"});
    $(".page-dab div.region-content").before($espanolBtnDiv);
    $("div.language-link-container").append($(".page-dab li.language-link-container").html());
    $(".page-dab li.language-link-container").remove();
  }

  /* Input field placeholder text BEGIN */

  $.support.placeholder = ("placeholder" in document.createElement("input"));

  //fix for Old IE
  $(function () {
    if (!$.support.placeholder) {
      $("[placeholder]").focus(function () {
        if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
      }).blur(function () {
        if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
      }).blur();

      $("[placeholder]").parents("form").submit(function () {
        $(this).find("[placeholder]").each(function() {
          if ($(this).val() == $(this).attr("placeholder")) {
            $(this).val("");
          }
        });
      });
    }
  });
  /* Input field placeholder text END */

  $(document).ready(function(){

    /* Read the Law accordion back to top */
    $(".accordion h3.panel-title").click(function() {
      $(".accordion h3.panel-title.active").not(this).removeClass("active");
      $(this).toggleClass("active");
    });

    /* Adding swipe action for billboard */
    $("#views-bootstrap-carousel-1").swiperight(function() {
      $("#views-bootstrap-carousel-1").carousel("prev");
    });
    $("#views-bootstrap-carousel-1").swipeleft(function() {
      $("#views-bootstrap-carousel-1").carousel("next");
    });

    $("div.view-id-iia_billboard div.carousel-inner").on("click", function(){
      if($(document.body).hasClass('page-challenges')){
        changeWindowLocation();
      }else{
        if($(this).find('.item.active a').attr('href') != undefined){
          window.location = $(this).find('.item.active a').attr('href');        
        }        
      }
      return false;
    });

    $("button.registernow-btn").on('click', function(){
      changeWindowLocation();
    });

    if(window.location.href.indexOf("hepatitis/blog") > -1) {
      $(".field-name-dynamic-title a").wrap( "<h2></h2>" );
      $(".pager-item.active").prepend("<label for=\"pagerer-page\" class=\"sr-only\">Page</label>");
      $(".pagerer-page").attr("id", "pagerer-page");
    }
    
    if(window.location.href.indexOf("fitness/blog") > -1) {
      $(".field-name-dynamic-title a").wrap( "<h2></h2>" );
      $(".pager-item.active").prepend("<label for=\"pagerer-page\" class=\"sr-only\">Page</label>");
      $(".pagerer-page").attr("id", "pagerer-page");
    }
    
    if(window.location.href.indexOf("cto/blog") > -1) {
      $(".field-name-dynamic-title a").wrap( "<h2></h2>" );
      $(".pager-item.active").prepend("<label for=\"pagerer-page\" class=\"sr-only\">Page</label>");
      $(".pagerer-page").attr("id", "pagerer-page");
    }
    
    if(window.location.href.indexOf("cto/projects") > -1) {
      $(".field-name-dynamic-title a").wrap( "<h2></h2>" );
      $(".pager-item.active").prepend("<label for=\"pagerer-page\" class=\"sr-only\">Page</label>");
      $(".pagerer-page").attr("id", "pagerer-page");
    }
    
    if(window.location.href.indexOf("cto/initiatives") > -1) {
      $(".field-name-dynamic-title a").wrap( "<h2></h2>" );
      $(".pager-item.active").prepend("<label for=\"pagerer-page\" class=\"sr-only\">Page</label>");
      $(".pagerer-page").attr("id", "pagerer-page");
    }

    // Large Table Logic **********************************************

    $("table.freeze-head-col").wrap("<div class='large-table-container' />");

    resizeFreezeColTable();
   
    //*****************************************************************

  }); // End of document ready

  // When the window is resized, resize the freeze-col large table
  $(window).resize(function() {
    resizeFreezeColTable();
  });


  var resizeFreezeColTable = function(){
    // Set Height of Thead rows to the height of the tallest Cell
    var theadRowHeight = $("table.freeze-head-col thead tr").outerHeight();
    var theadTitleHeight = $("table.freeze-head-col thead tr th:first-child").outerHeight();
    if(theadRowHeight > theadTitleHeight){
      $("table.freeze-head-col thead tr th:first-child").css("height", theadRowHeight);
    }else{
      $("table.freeze-head-col thead tr").css("height", theadTitleHeight);
    }

    // Set Height of Tbody rows to the height of the tallest cell
    $("table.large-table tbody tr").each(function(){
      var myRowheight = $(this).outerHeight();
      var myTitleCellHeight = $(this).find("td:first-child").outerHeight();

      if(myRowheight > myTitleCellHeight){
        $(this).find("td:first-child").css("height", myRowheight);        
      }else{
        $(this).css("height", myTitleCellHeight);
      }
    });
  };

})(jQuery);


var widgetCSS = "" +
".identity-screenname{color: 0053CC;}" +
".timeline-Tweet-retweetCredit{color: 0053CC;}";

function paint() {
  var w = document.getElementById("twitter-widget-0").contentDocument;

  var s = document.createElement("style");
  s.innerHTML = widgetCSS;
  s.type = "text/css";
  w.head.appendChild(s);
}

jQuery(document).ready(function() {
	if(jQuery('.twitter-timeline').length >= 1)
    { jQuery('body').attr('onload', 'paint()'); }
});

;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/js/jquery.cookie.js. */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'){factory(require('jquery'))}else factory(jQuery)}(function($){var pluses=/\+/g
function encode(s){return config.raw?s:encodeURIComponent(s)}
function decode(s){return config.raw?s:decodeURIComponent(s)}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}
function parseCookieValue(s){if(s.indexOf('"')===0)s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value};var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5)};return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))};var result=key?undefined:{},cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('='),name=decode(parts.shift()),cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break};if(!key&&(cookie=read(cookie))!==undefined)result[name]=cookie};return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined)return false;$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key)}}));;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/js/jquery.cookie.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/js/jquery.jfontsize-1.0.js. */
(function($){$.fn.jfontsize=function(opcoes){var $this=$(this),defaults={btnMinusClasseId:'#jfontsize-minus',btnDefaultClasseId:'#jfontsize-default',btnPlusClasseId:'#jfontsize-plus',btnMinusMaxHits:10,btnPlusMaxHits:10,sizeChange:1};if(opcoes)opcoes=$.extend(defaults,opcoes);var limite=new Array(),fontsize_padrao=new Array();$(this).each(function(i){limite[i]=0;fontsize_padrao[i]});$(opcoes.btnMinusClasseId+', '+opcoes.btnDefaultClasseId+', '+opcoes.btnPlusClasseId).removeAttr();$(opcoes.btnMinusClasseId+', '+opcoes.btnDefaultClasseId+', '+opcoes.btnPlusClasseId).css('cursor','pointer');$(opcoes.btnMinusClasseId).click(function(){$(opcoes.btnPlusClasseId).removeClass('jfontsize-disabled');$this.each(function(i){if(limite[i]>(-(opcoes.btnMinusMaxHits))){fontsize_padrao[i]=$(this).css('font-size');fontsize_padrao[i]=fontsize_padrao[i].replace('px','');fontsize=$(this).css('font-size');fontsize=parseInt(fontsize.replace('px',''));fontsize=fontsize-(opcoes.sizeChange);fontsize_padrao[i]=fontsize_padrao[i]-(limite[i]*opcoes.sizeChange);limite[i]--;$(this).css('font-size',fontsize+'px');if(limite[i]==(-(opcoes.btnMinusMaxHits)))$(opcoes.btnMinusClasseId).addClass('jfontsize-disabled')}});return false});$(opcoes.btnDefaultClasseId).click(function(){$(opcoes.btnMinusClasseId).removeClass('jfontsize-disabled');$(opcoes.btnPlusClasseId).removeClass('jfontsize-disabled');$this.each(function(i){limite[i]=0;$(this).css('font-size',fontsize_padrao[i]+'px')});return false});$(opcoes.btnPlusClasseId).click(function(){$(opcoes.btnMinusClasseId).removeClass('jfontsize-disabled');$this.each(function(i){if(limite[i]<opcoes.btnPlusMaxHits){fontsize_padrao[i]=$(this).css('font-size');fontsize_padrao[i]=fontsize_padrao[i].replace('px','');fontsize=$(this).css('font-size');fontsize=parseInt(fontsize.replace('px',''));fontsize=fontsize+opcoes.sizeChange;fontsize_padrao[i]=fontsize_padrao[i]-(limite[i]*opcoes.sizeChange);limite[i]++;$(this).css('font-size',fontsize+'px');if(limite[i]==opcoes.btnPlusMaxHits)$(opcoes.btnPlusClasseId).addClass('jfontsize-disabled')}});return false})}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/js/jquery.jfontsize-1.0.js. */
;/*})'"*/
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/js/suggestion.js. */
(function($){if(typeof GSA==="undefined"||!GSA)var GSA={};if(typeof GSA.settings==="undefined"||!GSA.settings)GSA.settings=new Object();GSA.suggestionInput=null;GSA.suggestionSearchValue;GSA.suggestionPopupLock=false;GSA.getSuggestion=function(q,$inputField){$.getJSON("/suggest?"+q+"&max=10&access=access&format=rich",function(data){GSA.RenderSuggestion(data,$inputField)})};GSA.RenderSuggestion=function(data,$inputField){var items=[];$.each(data.results,function(key,val){items.push(($("<li/>").append($("<a/>",{href:"#",html:val.name.replace(GSA.suggestionSearchValue,"<span>"+GSA.suggestionSearchValue+"</span>")}))))});if(items.length){if($('#auto-suggest-popup').length){$popup=$('#auto-suggest-popup');$popup.find("ul").remove()}else{var $offset=$inputField.position();if(typeof($inputField.parents(".auto-suggest").attr('data-popup-width'))!=='undefined'&&$inputField.parents(".auto-suggest").attr('data-popup-width').length){$popup=$("<div/>",{id:"auto-suggest-popup","aria-live":"polite",style:"top:"+($offset.top+$inputField.outerHeight())+"px;left:"+$offset.left+"px;width:"+$inputField.parents(".auto-suggest").attr('data-popup-width')+"px;"})}else if($inputField.parents(".csswidth").length){$popup=$("<div/>",{id:"auto-suggest-popup","aria-live":"polite",style:"top:"+($offset.top+$inputField.outerHeight())+"px;left:"+$offset.left+"px;width:"+$inputField.outerWidth()+"px;"})}else if($inputField.parents(".resultform").length){$popup=$("<div/>",{id:"auto-suggest-popup","aria-live":"polite",style:"top:"+($offset.top+$inputField.outerHeight())+"px;left:"+$offset.left+"px;width:"+($inputField.outerWidth(true)-2)+"px;"})}else if($inputField.parents(".healthcare").length){$popup=$("<div/>",{id:"auto-suggest-popup","aria-live":"polite",style:"top:"+($offset.top+$inputField.outerHeight()-5)+"px;left:"+($offset.left-80)+"px;width:"+($inputField.outerWidth(true)+77)+"px;"})}else if($inputField.parents(".healthcare2").length){$popup=$("<div/>",{id:"auto-suggest-popup","aria-live":"polite",style:"top:"+($offset.top+$inputField.outerHeight()-3)+"px;left:"+($offset.left)+"px;width:"+($inputField.outerWidth(true)-3)+"px;"})}else $popup=$("<div/>",{id:"auto-suggest-popup","aria-live":"polite",style:"top:"+($offset.top+$inputField.outerHeight())+"px;left:"+$offset.left+"px;width:"+($inputField.parent(".auto-suggest").outerWidth(true)-45)+"px;"});$label=$("<div/>",{id:"suggestionlabel",text:"Suggestions"});$popup.append($label);GSA.suggestionInput=$inputField;$inputField.attr("aria-controls","auto-suggest-popup");$popup.mouseenter(function(e){GSA.suggestionPopupLock=true}).mouseleave(function(e){GSA.suggestionPopupLock=false})};$inputField.parents(".auto-suggest").append($popup);$list=$("<ul/>",{"class":"my-new-list"});$list.appendTo($popup);for(var i in items)$list.append(items[i]);$popup.find("a").click(function(){$popup.find("#selected_suggetion").removeAttr("id");$inputField.val($(this).text());$list=$popup.find("li");$selectedList=$(this).parent("li");$selectedList.attr("id","selected_suggetion");$inputField.focus();$inputField.parents("form").submit();return false})}else $("#auto-suggest-popup").remove()};GSA.getFieldValue=function($form,fieldName){return $form.find("input[name='"+fieldName+"']").val()};$(document).ready(function(){$(".auto-suggest input[name='q']").keyup(function(e){if(e.which!=40&&e.which!=38){GSA.suggestionSearchValue=this.value;GSA.getSuggestion("q="+this.value+"&site="+GSA.getFieldValue($(this).parents("form"),"site")+"&client="+GSA.getFieldValue($(this).parents("form"),"client"),$(this))}});$(".auto-suggest input[name='q']").keydown(function(e){if(GSA.suggestionInput!=null)if(e.which==40){$suggests=$("#auto-suggest-popup").find("li");index=$suggests.index($("#auto-suggest-popup #selected_suggetion"));if(index<$suggests.length-1){$("#auto-suggest-popup #selected_suggetion").removeAttr("id");var $selected=$suggests.eq(index+1);$selected.attr("id","selected_suggetion");GSA.suggestionInput.val($selected.text())}}else if(e.which==38){$suggests=$("#auto-suggest-popup").find("li");index=$suggests.index($("#auto-suggest-popup #selected_suggetion"));$("#auto-suggest-popup #selected_suggetion").removeAttr("id");if(index>0){var $selected=$suggests.eq(index-1);$selected.attr("id","selected_suggetion");GSA.suggestionInput.val($selected.text())}else GSA.suggestionInput.val(GSA.suggestionSearchValue)}});$(".auto-suggest input[name='q']").focusout(function(e){if(!GSA.suggestionPopupLock)$("#auto-suggest-popup").remove()})})})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/js/suggestion.js. */
;/*})'"*/
/*! jQuery Mobile v1.2.0 jquerymobile.com | jquery.org/license */
(function(a,b,c){typeof define=="function"&&define.amd?define(["jquery"],function(d){return c(d,a,b),d.mobile}):c(a.jQuery,a,b)})(this,document,function(a,b,c,d){(function(a,b){var d={touch:"ontouchend"in c};a.mobile=a.mobile||{},a.mobile.support=a.mobile.support||{},a.extend(a.support,d),a.extend(a.mobile.support,d)})(a),function(a,b,c,d){function x(a){while(a&&typeof a.originalEvent!="undefined")a=a.originalEvent;return a}function y(b,c){var e=b.type,f,g,i,k,l,m,n,o,p;b=a.Event(b),b.type=c,f=b.originalEvent,g=a.event.props,e.search(/^(mouse|click)/)>-1&&(g=j);if(f)for(n=g.length,k;n;)k=g[--n],b[k]=f[k];e.search(/mouse(down|up)|click/)>-1&&!b.which&&(b.which=1);if(e.search(/^touch/)!==-1){i=x(f),e=i.touches,l=i.changedTouches,m=e&&e.length?e[0]:l&&l.length?l[0]:d;if(m)for(o=0,p=h.length;o<p;o++)k=h[o],b[k]=m[k]}return b}function z(b){var c={},d,f;while(b){d=a.data(b,e);for(f in d)d[f]&&(c[f]=c.hasVirtualBinding=!0);b=b.parentNode}return c}function A(b,c){var d;while(b){d=a.data(b,e);if(d&&(!c||d[c]))return b;b=b.parentNode}return null}function B(){r=!1}function C(){r=!0}function D(){v=0,p.length=0,q=!1,C()}function E(){B()}function F(){G(),l=setTimeout(function(){l=0,D()},a.vmouse.resetTimerDuration)}function G(){l&&(clearTimeout(l),l=0)}function H(b,c,d){var e;if(d&&d[b]||!d&&A(c.target,b))e=y(c,b),a(c.target).trigger(e);return e}function I(b){var c=a.data(b.target,f);if(!q&&(!v||v!==c)){var d=H("v"+b.type,b);d&&(d.isDefaultPrevented()&&b.preventDefault(),d.isPropagationStopped()&&b.stopPropagation(),d.isImmediatePropagationStopped()&&b.stopImmediatePropagation())}}function J(b){var c=x(b).touches,d,e;if(c&&c.length===1){d=b.target,e=z(d);if(e.hasVirtualBinding){v=u++,a.data(d,f,v),G(),E(),o=!1;var g=x(b).touches[0];m=g.pageX,n=g.pageY,H("vmouseover",b,e),H("vmousedown",b,e)}}}function K(a){if(r)return;o||H("vmousecancel",a,z(a.target)),o=!0,F()}function L(b){if(r)return;var c=x(b).touches[0],d=o,e=a.vmouse.moveDistanceThreshold,f=z(b.target);o=o||Math.abs(c.pageX-m)>e||Math.abs(c.pageY-n)>e,o&&!d&&H("vmousecancel",b,f),H("vmousemove",b,f),F()}function M(a){if(r)return;C();var b=z(a.target),c;H("vmouseup",a,b);if(!o){var d=H("vclick",a,b);d&&d.isDefaultPrevented()&&(c=x(a).changedTouches[0],p.push({touchID:v,x:c.clientX,y:c.clientY}),q=!0)}H("vmouseout",a,b),o=!1,F()}function N(b){var c=a.data(b,e),d;if(c)for(d in c)if(c[d])return!0;return!1}function O(){}function P(b){var c=b.substr(1);return{setup:function(d,f){N(this)||a.data(this,e,{});var g=a.data(this,e);g[b]=!0,k[b]=(k[b]||0)+1,k[b]===1&&t.bind(c,I),a(this).bind(c,O),s&&(k.touchstart=(k.touchstart||0)+1,k.touchstart===1&&t.bind("touchstart",J).bind("touchend",M).bind("touchmove",L).bind("scroll",K))},teardown:function(d,f){--k[b],k[b]||t.unbind(c,I),s&&(--k.touchstart,k.touchstart||t.unbind("touchstart",J).unbind("touchmove",L).unbind("touchend",M).unbind("scroll",K));var g=a(this),h=a.data(this,e);h&&(h[b]=!1),g.unbind(c,O),N(this)||g.removeData(e)}}}var e="virtualMouseBindings",f="virtualTouchID",g="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),h="clientX clientY pageX pageY screenX screenY".split(" "),i=a.event.mouseHooks?a.event.mouseHooks.props:[],j=a.event.props.concat(i),k={},l=0,m=0,n=0,o=!1,p=[],q=!1,r=!1,s="addEventListener"in c,t=a(c),u=1,v=0,w;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var Q=0;Q<g.length;Q++)a.event.special[g[Q]]=P(g[Q]);s&&c.addEventListener("click",function(b){var c=p.length,d=b.target,e,g,h,i,j,k;if(c){e=b.clientX,g=b.clientY,w=a.vmouse.clickDistanceThreshold,h=d;while(h){for(i=0;i<c;i++){j=p[i],k=0;if(h===d&&Math.abs(j.x-e)<w&&Math.abs(j.y-g)<w||a.data(h,f)===j.touchID){b.preventDefault(),b.stopPropagation();return}}h=h.parentNode}}},!0)}(a,b,c),function(a,b,d){function j(b,c,d){var e=d.type;d.type=c,a.event.handle.call(b,d),d.type=e}a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)},a.attrFn&&(a.attrFn[c]=!0)});var e=a.mobile.support.touch,f="touchmove scroll",g=e?"touchstart":"mousedown",h=e?"touchend":"mouseup",i=e?"touchmove":"mousemove";a.event.special.scrollstart={enabled:!0,setup:function(){function g(a,c){d=c,j(b,d?"scrollstart":"scrollstop",a)}var b=this,c=a(b),d,e;c.bind(f,function(b){if(!a.event.special.scrollstart.enabled)return;d||g(b,!0),clearTimeout(e),e=setTimeout(function(){g(b,!1)},50)})}},a.event.special.tap={tapholdThreshold:750,setup:function(){var b=this,d=a(b);d.bind("vmousedown",function(e){function i(){clearTimeout(h)}function k(){i(),d.unbind("vclick",l).unbind("vmouseup",i),a(c).unbind("vmousecancel",k)}function l(a){k(),f===a.target&&j(b,"tap",a)}if(e.which&&e.which!==1)return!1;var f=e.target,g=e.originalEvent,h;d.bind("vmouseup",i).bind("vclick",l),a(c).bind("vmousecancel",k),h=setTimeout(function(){j(b,"taphold",a.Event("taphold",{target:f}))},a.event.special.tap.tapholdThreshold)})}},a.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=this,c=a(b);c.bind(g,function(b){function j(b){if(!f)return;var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;g={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(f.coords[0]-g.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}var e=b.originalEvent.touches?b.originalEvent.touches[0]:b,f={time:(new Date).getTime(),coords:[e.pageX,e.pageY],origin:a(b.target)},g;c.bind(i,j).one(h,function(b){c.unbind(i,j),f&&g&&g.time-f.time<a.event.special.swipe.durationThreshold&&Math.abs(f.coords[0]-g.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(f.coords[1]-g.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&f.origin.trigger("swipe").trigger(f.coords[0]>g.coords[0]?"swipeleft":"swiperight"),f=g=d})})}},a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})}(a,this)})

;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.hhs.gov/sites/all/themes/project_h/js/hhs-mylist-video-player.js. */
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else a(jQuery)}(function(f){var y="1.6.12",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart"in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe",n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else f.error("Method "+H+" does not exist on jQuery.swipe")}else if(F&&typeof H==="object"){F.option.apply(this,arguments)}else if(!F&&(typeof H==="object"||!H))return w.apply(this,arguments);return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i}
function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined)))F.allowPageScroll=m;if(F.click!==undefined&&F.tap===undefined)F.tap=F.click;if(!F)F={};F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this),G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}
function D(a4,au){var au=f.extend({},au),az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel"),ag=0,aP=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null,aR=f(a4),aa="start",X=0,aQ={},U=0,a2=0,a5=0,ay=0,O=0,aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,a9)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")};this.enable=function(){aR.bind(K,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bc,bb){if(typeof bc==="object"){au=f.extend(au,bc)}else if(au[bc]!==undefined){if(bb===undefined){return au[bc]}else au[bc]=bb}else if(!bc){return au}else f.error("Option "+bc+" does not exist on jQuery.swipe.options");return null}
function aN(bd){if(aB())return;if(f(bd.target).closest(au.excludedElements,aR).length>0)return;var be=bd.originalEvent?bd.originalEvent:bd,bc,bf=be.touches,bb=bf?bf[0]:be;aa=g;if(bf){X=bf.length}else if(au.preventDefaultEvents!==false)bd.preventDefault();ag=0;aP=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bb);if(!bf||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bf[1]);a1=aZ=at(aQ[0].start,aQ[1].start)};if(au.swipeStatus||au.pinchStatus)bc=P(be,aa)}else bc=false;if(bc===false){aa=q;P(be,aa);return bc}else{if(au.hold)af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(au.hold)bc=au.hold.call(aR,be,be.target)},this),au.longTapThreshold);an(true)};return null}
function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(aa===h||aa===q||al())return;var bd,bi=bh.touches,bc=bi?bi[0]:bh,bf=aH(bc);a2=ar();if(bi)X=bi.length;if(au.hold)clearTimeout(af);aa=k;if(X==2){if(a1==0){ai(1,bi[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bi[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)};H=a7(a1,aZ);ap=Math.abs(a1-aZ)};if((X===au.fingers||au.fingers===i)||!bi||aX()){aP=aL(bf.start,bf.end);ak(be,aP);ag=aS(bf.start,bf.end);ac=aM();aI(aP,ag);if(au.swipeStatus||au.pinchStatus)bd=P(bh,aa);if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bb=true;if(au.triggerOnTouchLeave){var bg=aY(this);bb=F(bf.end,bg)};if(!au.triggerOnTouchEnd&&bb){aa=aC(k)}else if(au.triggerOnTouchLeave&&!bb)aa=aC(h);if(aa==q||aa==h)P(bh,aa)}}else{aa=q;P(bh,aa)};if(bd===false){aa=q;P(bh,aa)}}
function M(bb){var bc=bb.originalEvent?bb.originalEvent:bb,bd=bc.touches;if(bd)if(bd.length&&!al()){G();return true}else if(bd.length&&al())return true;if(al())X=ay;a2=ar();ac=aM();if(ba()||!am()){aa=q;P(bc,aa)}else if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false)bb.preventDefault();aa=h;P(bc,aa)}else if(!au.triggerOnTouchEnd&&a6()){aa=h;aF(bc,aa,B)}else if(aa===k){aa=q;P(bc,aa)};an(false);return null}
function a9(){X=0;a2=0;U=0;a1=0;aZ=0;H=1;S();an(false)}
function L(bb){var bc=bb.originalEvent?bb.originalEvent:bb;if(au.triggerOnTouchLeave){aa=aC(h);P(bc,aa)}}
function aK(){aR.unbind(K,aN);aR.unbind(aD,a9);aR.unbind(ax,a3);aR.unbind(V,M);if(T)aR.unbind(T,L);an(false)}
function aC(bf){var be=bf,bd=aA(),bc=am(),bb=ba();if(!bd||bb){be=q}else if(bc&&bf==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){be=h}else if(!bc&&bf==h&&au.triggerOnTouchLeave)be=q;return be}
function P(bd,bb){var bc,be=bd.touches;if((J()&&W())||(Q()&&aX())){if(J()&&W())bc=aF(bd,bb,l);if((Q()&&aX())&&bc!==false)bc=aF(bd,bb,t)}else if(aG()&&bc!==false){bc=aF(bd,bb,j)}else if(ao()&&bc!==false){bc=aF(bd,bb,b)}else if(ah()&&bc!==false)bc=aF(bd,bb,B);if(bb===q){if(W())bc=aF(bd,bb,l);if(aX())bc=aF(bd,bb,t);a9(bd)};if(bb===h)if(be){if(!be.length)a9(bd)}else a9(bd);return bc}
function aF(be,bb,bd){var bc;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ac||0,X,aQ]);if(au.swipeStatus){bc=au.swipeStatus.call(aR,be,bb,aP||null,ag||0,ac||0,X,aQ);if(bc===false)return false};if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ac,X,aQ]);if(au.swipe){bc=au.swipe.call(aR,be,aP,ag,ac,X,aQ);if(bc===false)return false};switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ]);if(au.swipeLeft)bc=au.swipeLeft.call(aR,be,aP,ag,ac,X,aQ);break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ]);if(au.swipeRight)bc=au.swipeRight.call(aR,be,aP,ag,ac,X,aQ);break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ]);if(au.swipeUp)bc=au.swipeUp.call(aR,be,aP,ag,ac,X,aQ);break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ]);if(au.swipeDown)bc=au.swipeDown.call(aR,be,aP,ag,ac,X,aQ);break}}};if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bc=au.pinchStatus.call(aR,be,bb,aJ||null,ap||0,ac||0,X,H,aQ);if(bc===false)return false};if(bb==h&&a8())switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn)bc=au.pinchIn.call(aR,be,aJ||null,ap||0,ac||0,X,H,aQ);break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut)bc=au.pinchOut.call(aR,be,aJ||null,ap||0,ac||0,X,H,aQ);break}};if(bd==B){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[be.target]);if(au.tap)bc=au.tap.call(aR,be,be.target)},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[be.target]);if(au.tap)bc=au.tap.call(aR,be,be.target)}}}else if(bd==j){if(bb===q||bb===h){clearTimeout(aW);O=null;aR.trigger("doubletap",[be.target]);if(au.doubleTap)bc=au.doubleTap.call(aR,be,be.target)}}else if(bd==b)if(bb===q||bb===h){clearTimeout(aW);O=null;aR.trigger("longtap",[be.target]);if(au.longTap)bc=au.longTap.call(aR,be,be.target)};return bc}
function am(){var bb=true;if(au.threshold!==null)bb=ag>=au.threshold;return bb}
function ba(){var bb=false;if(au.cancelThreshold!==null&&aP!==null)bb=(aT(aP)-ag)>=au.cancelThreshold;return bb}
function ae(){if(au.pinchThreshold!==null)return ap>=au.pinchThreshold;return true}
function aA(){var bb;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bb=false}else bb=true}else bb=true;return bb}
function ak(bb,bc){if(au.preventDefaultEvents===false)return;if(au.allowPageScroll===m){bb.preventDefault()}else{var bd=au.allowPageScroll===s;switch(bc){case p:if((au.swipeLeft&&bd)||(!bd&&au.allowPageScroll!=E))bb.preventDefault();break;case o:if((au.swipeRight&&bd)||(!bd&&au.allowPageScroll!=E))bb.preventDefault();break;case e:if((au.swipeUp&&bd)||(!bd&&au.allowPageScroll!=u))bb.preventDefault();break;case x:if((au.swipeDown&&bd)||(!bd&&au.allowPageScroll!=u))bb.preventDefault();break}}}
function a8(){var bc=aO(),bb=Y(),bd=ae();return bc&&bb&&bd}
function aX(){return!!(au.pinchStatus||au.pinchIn||au.pinchOut)}
function Q(){return!!(a8()&&aX())}
function aV(){var be=aA(),bg=am(),bd=aO(),bb=Y(),bc=ba(),bf=!bc&&bb&&bd&&bg&&be;return bf}
function W(){return!!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}
function J(){return!!(aV()&&W())}
function aO(){return((X===au.fingers||au.fingers===i)||!a)}
function Y(){return aQ[0].end.x!==0}
function a6(){return!!(au.tap)}
function Z(){return!!(au.doubleTap)}
function aU(){return!!(au.longTap)}
function R(){if(O==null)return false;var bb=ar();return(Z()&&((bb-O)<=au.doubleTapThreshold))}
function I(){return R()}
function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}
function a0(){return((ac>au.longTapThreshold)&&(ag<r))}
function ah(){return!!(aw()&&a6())}
function aG(){return!!(R()&&Z())}
function ao(){return!!(a0()&&aU())}
function G(){a5=ar();ay=event.touches.length+1}
function S(){a5=0;ay=0}
function al(){var bb=false;if(a5){var bc=ar()-a5;if(bc<=au.fingerReleaseThreshold)bb=true};return bb}
function aB(){return!!(aR.data(C+"_intouch")===true)}
function an(bb){if(bb===true){aR.bind(ax,a3);aR.bind(V,M);if(T)aR.bind(T,L)}else{aR.unbind(ax,a3,false);aR.unbind(V,M,false);if(T)aR.unbind(T,L,false)};aR.data(C+"_intouch",bb===true)}
function ai(bd,bb){var bc={start:{x:0,y:0},end:{x:0,y:0}};bc.start.x=bc.end.x=bb.pageX||bb.clientX;bc.start.y=bc.end.y=bb.pageY||bb.clientY;aQ[bd]=bc;return bc}
function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0,bc=ad(bd);if(bc===null)bc=ai(bd,bb);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}
function ad(bb){return aQ[bb]||null}
function aI(bb,bc){bc=Math.max(bc,aT(bb));N[bb].distance=bc}
function aT(bb){if(N[bb])return N[bb].distance;return undefined}
function ab(){var bb={};bb[p]=av(p);bb[o]=av(o);bb[e]=av(e);bb[x]=av(x);return bb}
function av(bb){return{direction:bb,distance:0}}
function aM(){return a2-U}
function at(be,bd){var bc=Math.abs(be.x-bd.x),bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}
function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}
function aq(){if(H<1){return A}else return c}
function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}
function aE(be,bc){var bb=be.x-bc.x,bg=bc.y-be.y,bd=Math.atan2(bg,bb),bf=Math.round(bd*180/Math.PI);if(bf<0)bf=360-Math.abs(bf);return bf}
function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else if((bd<=360)&&(bd>=315)){return p}else if((bd>=135)&&(bd<=225)){return o}else if((bd>45)&&(bd<135)){return x}else return e}
function ar(){var bb=new Date();return bb.getTime()}
function aY(bb){bb=f(bb);var bd=bb.offset(),bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}
function F(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));var apiKey="AIzaSyD9u3Vc_pT8VOW88lVX8cmHrIW7w0e3mGc",autoPlayNext=0,showPlayerControls=1,showVideoInfo=1,showRelatedVideos=0,showTitlesInList=1,playListID=[],tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var myVar=0,isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}};if(isMobile.iOS())myVar=1;var first_vid="",listNum=0,vidIDs=[],videosURL=[],vid_frame=[],listLength=[],list_width=[],pNum=0,tgt="vid_frame1",x,numPlaylists=0
function onYouTubeIframeAPIReady(){(function($){$(document).ready(function(){if($(".mlvp-wrapper").length>0){playListID.push($(".mlvp-wrapper").attr("playlist-id"));numPlaylists=playListID.length;for(var n=0;n<numPlaylists;n++){vidIDs[n]=[];videosURL[n]="https://www.googleapis.com/youtube/v3/playlistItems?playlistId="+playListID[n]+"&key="+apiKey+"&fields=items&part=snippet&maxResults=50"};for(var n=0;n<numPlaylists;n++)doAjaxCallStuff(n)}})})(jQuery)}
function doAjaxCallStuff(n){var m=n+1;console.log("m: "+m);jQuery.ajax({url:videosURL[n],dataType:'json',async:true,success:function(data){var list_data="",first_vid_iframe="";jQuery.each(data.items,function(i,val){var feedTitle=val.snippet.title,feedDesc=val.snippet.description,videoID=val.snippet.resourceId.videoId,thumb="http://img.youtube.com/vi/"+videoID+"/default.jpg";if(i===0){if(myVar===1){list_data+='<div class=\"vid-item\" tabindex=\"0\">\n'}else list_data+='<div class=\"vid-item\" tabindex=\"0\">\n';list_data+='<div class=\"thumb\"><iframe title=\"YouTube Video: '+feedTitle+'\" class=\"current-vid\" src="https://www.youtube.com/embed/'+videoID+'?html5=1&showinfo=1&autoplay=0&rel=0&controls=1&playsinline=1&enablejsapi=1&widgetid=1" allowfullscreen="1"></iframe></div>\n';if(showTitlesInList===1)list_data+='<div class=\"desc current-vid\">'+feedTitle+'</div>\n';list_data+='</div>'}else{if(myVar===1){list_data+='<div class=\"vid-item\" tabindex=\"0\">\n'}else list_data+='<div class=\"vid-item\" tabindex=\"0\">\n';list_data+='<div class=\"thumb\"><iframe title=\"YouTube Video: '+feedTitle+'\" class=\"current-vid\" src="https://www.youtube.com/embed/'+videoID+'?html5=1&showinfo=1&autoplay=0&rel=0&controls=1&playsinline=1&enablejsapi=1&widgetid=1" allowfullscreen="1"></iframe></div>\n';if(showTitlesInList===1)list_data+='<div class=\"desc\">'+feedTitle+'</div>\n';list_data+='</div>'};vidIDs[n].push(videoID);listLength[m]=i+1});vid_frame[m]=new YT.Player('vid_frame'+m,{height:'200',width:'200',playerVars:{html5:1,showinfo:showVideoInfo,autoplay:0,rel:showRelatedVideos,controls:showPlayerControls,playsinline:1},videoId:vidIDs[n][0],events:{onStateChange:onPlayerStateChange}});list_width[m]=listLength[m]*168;jQuery("#player-container"+m+">div.mlvp-list-container>div.mlvp-list").width(list_width[m]+"px");jQuery(list_data).appendTo("#player-container"+m+">div.mlvp-list-container>div.mlvp-list");first_vid=data.items[0].snippet.resourceId.videoId;first_title=data.items[0].snippet.title;jQuery("#desc2").append(first_title);setScrollAmt(n);jQuery(function(){jQuery("#player-container"+m+">div.mlvp-list-container").swipe({swipe:function(event,direction,distance,duration,fingerCount,fingerData){if(direction=="left"){scrollListLeft(m)}else if(direction=="right")scrollListRight(m)},threshold:75,allowPageScroll:"vertical",preventDefaultEvents:false})})}})}
function onPlayerStateChange(event){tgt=event.target.getIframe().id;if(tgt=="vid_frame1"){x=0;y=1};if(tgt=="vid_frame2"){x=1;y=2};if(tgt=="vid_frame3"){x=2;y=3};if(tgt=="vid_frame4"){x=3;y=4};if(tgt=="vid_frame5"){x=4;y=5};if(tgt=="vid_frame6"){x=5;y=6};if(autoPlayNext===1)if(event.data===0){nextVid=listNum+1;if(nextVid>=listLength[y]){console.log("greater");nextVid=0;var nextVidId=vidIDs[x][nextVid];vid_frame[y].loadVideoById({videoId:nextVidId});listNum=0;setCurrent(y);function getOffset(el){var _x=0,_y=0;while(el&&!isNaN(el.offsetLeft)&&!isNaN(el.offsetTop)){_x+=el.offsetLeft-el.scrollLeft;_y+=el.offsetTop-el.scrollTop;el=el.offsetParent};return{top:_y,left:_x}};var xPos=getOffset(jQuery("#player-container"+y+">div.mlvp-list-container")).left;console.log("left: "+xPos)}else{var nextVidId=vidIDs[x][nextVid];vid_frame[y].loadVideoById({videoId:nextVidId});listNum=listNum+1;setCurrent(y)}};if(myVar===1)if(event.data===1){for(var i=0;i<listLength[n];i++){var lnum=i+1,vnum=vidIDs[x][i];if(jQuery('#player-container'+y+' .mlvp-list-container .mlvp-list .vid-item:first-child').attr('onClick').indexOf('cueVideoById')>-1)jQuery('#player-container'+y+'>div.mlvp-list-container>div.mlvp-list.vid-item:nth-child('+lnum+')').attr('onclick','')};resetOnClick()}}
function setCurrent(n){jQuery('#player-container'+n+'>div.mlvp-list-container>div.mlvp-list>div.vid-item>div.current-vid').removeClass('current-vid');jQuery('#player-container'+n+'>div.mlvp-list-container>div.mlvp-list>div.vid-item>div.thumb img.current-vid').removeClass('current-vid');var currNum=listNum+1;jQuery('#player-container'+n+'>div.mlvp-list-container>div.mlvp-list div:nth-child('+currNum+') div.desc').addClass('current-vid');jQuery('#player-container'+n+'>div.mlvp-list-container>div.mlvp-list div:nth-child('+currNum+') div.thumb img').addClass('current-vid')}
function resetOnClick(){var m=n+1;for(var i=0;i<listLength[y];i++){var lnum=i+1,vnum="'"+vidIDs[x][i]+"'",clickString="vid_frame["+y+"].loadVideoById({ videoId: "+vnum+" }); listNum="+i+"; setCurrent("+y+");";jQuery('#player-container'+y+'>div.mlvp-list-container>div.mlvp-list>div.vid-item:nth-child('+lnum+')').attr('onclick',clickString)};return}
function setScrollAmt(n){var m=n+1,w=jQuery('#player-container'+m+'>div.mlvp-container').width();console.log("container width: "+w);if(w<=572){scrollAmt=336}else if(w>=573&&w<=742){scrollAmt=504}else scrollAmt=672;jQuery("#player-container"+m+">div.mlvp-arrows>div.mlvp-arrow-right").bind("click",function(event){event.preventDefault();jQuery("#player-container"+m+">div.mlvp-list-container").stop().animate({scrollLeft:"+="+scrollAmt},750)});jQuery("#player-container"+m+">div.mlvp-arrows>div.mlvp-arrow-left").bind("click",function(event){event.preventDefault();jQuery("#player-container"+m+">div.mlvp-list-container").stop().animate({scrollLeft:"-="+scrollAmt},750)})};window.addEventListener("resize",getPlayerSize)
function getPlayerSize(){for(var n=0;n<numPlaylists;n++)setScrollAmt(n)};
/* Source and licensing information for the above line(s) can be found at https://www.hhs.gov/sites/all/themes/project_h/js/hhs-mylist-video-player.js. */
;/*})'"*/
