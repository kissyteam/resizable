modulex.add("resizable",["base","dd","util","node"],function(e,t,n){var r,i=e("base"),d=e("dd"),a=e("util"),o=e("node");r=function(e){function t(e,t){var n=[];for(s=0;s<e.length;s++)n[s]=e[s]||t[s];return n}function n(e,t,n){return Math.min(Math.max(e,n),t)}function r(e){var t,n=e.dds,r=e.get("node"),i=e.get("handlers"),d=e.get("dragConfig"),a=e.get("prefixCls"),o=a+v;for(s=0;s<i.length;s++){var l=i[s],u=g('<div class="'+o+" "+o+"-"+l+'"></div>').prependTo(r,void 0),h=n[l]=new c(f.mix({node:u,cursor:null,groups:!1},d));!function(n,i){i.on("drag",function(r){var i=r.target,d=e._width,a=e._height,o=e.get("minWidth"),l=e.get("maxWidth"),u=e.get("minHeight"),h=e.get("maxHeight"),f=r.deltaY,g=r.deltaX,c=e._top,v=e._left,b={},p=_[n](o,l,u,h,c,v,d,a,f,g,t);for(s=0;s<m.length;s++)p[s]&&(b[m[s]]=p[s]);e.fire("beforeResize",{handler:n,dd:i,region:b})}),i.on("dragstart",function(){t=e.get("preserveRatio"),e._width=r.width(),e._top=parseInt(r.css("top"),10),e._left=parseInt(r.css("left"),10),e._height=r.height(),e.fire("resizeStart",{handler:n,dd:i})}),i.on("dragend",function(){e.fire("resizeEnd",{handler:n,dd:i})})}(l,h)}}var s,l,u=i,h=d,f=a,g=o,c=h.Draggable,v="resizable-handler",b=["l","r"],p=["t","b"],m=["width","height","top","left"],_={t:function(e,t,r,i,d,a,o,s,l,u,h){var f=n(r,i,s-l),g=d+s-f,c=0;return h&&(c=f/s*o),[c,f,g,0]},b:function(e,t,r,i,d,a,o,s,l,u,h){var f=n(r,i,s+l),g=0;return h&&(g=f/s*o),[g,f,0,0]},r:function(e,t,r,i,d,a,o,s,l,u,h){var f=n(e,t,o+u),g=0;return h&&(g=f/o*s),[f,g,0,0]},l:function(e,t,r,i,d,a,o,s,l,u,h){var f=n(e,t,o-u),g=0,c=a+o-f;return h&&(g=f/o*s),[f,g,0,c]}};for(s=0;s<b.length;s++)for(l=0;l<p.length;l++)!function(e,n){_[e+n]=_[n+e]=function(){return t(_[e].apply(this,arguments),_[n].apply(this,arguments))}}(b[s],p[l]);var x=u.extend({initializer:function(){this.dds={},this.publish("beforeResize",{defaultFn:this._onBeforeResize,defaultTargetOnly:!0})},_onBeforeResize:function(e){this.get("node").css(e.region),this.fire("resize",{handler:e.hc,dd:e.dd,region:e.region})},_onSetNode:function(){r(this)},_onSetDisabled:function(e){var t=this.dds;f.each(t,function(t){t.set("disabled",e)})},destructor:function(){var e,t=this,n=t.dds;for(e in n)n[e].destroy(),n[e].get("node").remove(),delete n[e]}},{name:"Resizable",ATTRS:{node:{setter:function(e){return g(e)}},dragConfig:{},prefixCls:{value:"ks-"},disabled:{},minWidth:{value:0},minHeight:{value:0},maxWidth:{value:Number.MAX_VALUE},maxHeight:{value:Number.MAX_VALUE},preserveRatio:{value:!1},handlers:{value:[]}}});return x.Handler={B:"b",T:"t",L:"l",R:"r",BL:"bl",TL:"tl",BR:"br",TR:"tr"},e=x}(),n.exports=r});