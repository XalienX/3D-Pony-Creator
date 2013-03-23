mustache={},function(e,t){typeof exports=="object"&&exports?module.exports=t:typeof define=="function"&&define.amd?define(t):e.Mustache=t}(this,function(){function f(e,t){return u.call(e,t)}function l(e){return!f(r,e)}function h(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function d(e){return String(e).replace(/[&<>"'\/]/g,function(e){return p[e]})}function v(e){this.string=e,this.tail=e,this.pos=0}function m(e,t){this.view=e,this.parent=t,this._cache={}}function g(){this.clearCache()}function y(t,n,r,i){var s="",o,u,a;for(var f=0,l=t.length;f<l;++f){o=t[f],u=o[1];switch(o[0]){case"#":a=r.lookup(u);if(typeof a=="object")if(c(a))for(var h=0,p=a.length;h<p;++h)s+=y(o[4],n,r.push(a[h]),i);else a&&(s+=y(o[4],n,r.push(a),i));else if(typeof a=="function"){var d=i==null?null:i.slice(o[3],o[5]);a=a.call(r.view,d,function(e){return n.render(e,r)}),a!=null&&(s+=a)}else a&&(s+=y(o[4],n,r,i));break;case"^":a=r.lookup(u);if(!a||c(a)&&a.length===0)s+=y(o[4],n,r,i);break;case">":a=n.getPartial(u),typeof a=="function"&&(s+=a(r));break;case"&":a=r.lookup(u),a!=null&&(s+=a);break;case"name":a=r.lookup(u),a!=null&&(s+=e.escape(a));break;case"text":s+=u}}return s}function b(e){var t=[],n=t,r=[],i;for(var s=0,o=e.length;s<o;++s){i=e[s];switch(i[0]){case"#":case"^":r.push(i),n.push(i),n=i[4]=[];break;case"/":var u=r.pop();u[5]=i[2],n=r.length>0?r[r.length-1][4]:t;break;default:n.push(i)}}return t}function w(e){var t=[],n,r;for(var i=0,s=e.length;i<s;++i)n=e[i],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(r=n,t.push(n)));return t}function E(e){return[new RegExp(h(e[0])+"\\s*"),new RegExp("\\s*"+h(e[1]))]}var e={};e.name="mustache.js",e.version="0.7.2",e.tags=["{{","}}"],e.Scanner=v,e.Context=m,e.Writer=g;var t=/\s*/,n=/\s+/,r=/\S/,i=/\s*=/,s=/\s*\}/,o=/#|\^|\/|>|\{|&|=|!/,u=RegExp.prototype.test,a=Object.prototype.toString,c=Array.isArray||function(e){return a.call(e)==="[object Array]"},p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};e.escape=d,v.prototype.eos=function(){return this.tail===""},v.prototype.scan=function(e){var t=this.tail.match(e);return t&&t.index===0?(this.tail=this.tail.substring(t[0].length),this.pos+=t[0].length,t[0]):""},v.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.pos+=this.tail.length,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n),this.pos+=n}return t},m.make=function(e){return e instanceof m?e:new m(e)},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var t=this._cache[e];if(!t){if(e==".")t=this.view;else{var n=this;while(n){if(e.indexOf(".")>0){t=n.view;var r=e.split("."),i=0;while(t&&i<r.length)t=t[r[i++]]}else t=n.view[e];if(t!=null)break;n=n.parent}}this._cache[e]=t}return typeof t=="function"&&(t=t.call(this.view)),t},g.prototype.clearCache=function(){this._cache={},this._partialCache={}},g.prototype.compile=function(t,n){var r=this._cache[t];if(!r){var i=e.parse(t,n);r=this._cache[t]=this.compileTokens(i,t)}return r},g.prototype.compilePartial=function(e,t,n){var r=this.compile(t,n);return this._partialCache[e]=r,r},g.prototype.getPartial=function(e){return!(e in this._partialCache)&&this._loadPartial&&this.compilePartial(e,this._loadPartial(e)),this._partialCache[e]},g.prototype.compileTokens=function(e,t){var n=this;return function(r,i){if(i)if(typeof i=="function")n._loadPartial=i;else for(var s in i)n.compilePartial(s,i[s]);return y(e,n,m.make(r),t)}},g.prototype.render=function(e,t,n){return this.compile(e)(t,n)},e.parse=function(r,u){function y(){if(m&&!g)while(d.length)delete p[d.pop()];else d=[];m=!1,g=!1}r=r||"",u=u||e.tags,typeof u=="string"&&(u=u.split(n));if(u.length!==2)throw new Error("Invalid tags: "+u.join(", "));var a=E(u),f=new v(r),c=[],p=[],d=[],m=!1,g=!1,S,x,T,N,C;while(!f.eos()){S=f.pos,T=f.scanUntil(a[0]);if(T)for(var k=0,L=T.length;k<L;++k)N=T.charAt(k),l(N)?d.push(p.length):g=!0,p.push(["text",N,S,S+1]),S+=1,N=="\n"&&y();if(!f.scan(a[0]))break;m=!0,x=f.scan(o)||"name",f.scan(t),x==="="?(T=f.scanUntil(i),f.scan(i),f.scanUntil(a[1])):x==="{"?(T=f.scanUntil(new RegExp("\\s*"+h("}"+u[1]))),f.scan(s),f.scanUntil(a[1]),x="&"):T=f.scanUntil(a[1]);if(!f.scan(a[1]))throw new Error("Unclosed tag at "+f.pos);C=[x,T,S,f.pos],p.push(C);if(x==="#"||x==="^")c.push(C);else if(x==="/"){if(c.length===0)throw new Error('Unopened section "'+T+'" at '+S);var A=c.pop();if(A[1]!==T)throw new Error('Unclosed section "'+A[1]+'" at '+S)}else if(x==="name"||x==="{"||x==="&")g=!0;else if(x==="="){u=T.split(n);if(u.length!==2)throw new Error("Invalid tags at "+S+": "+u.join(", "));a=E(u)}}var A=c.pop();if(A)throw new Error('Unclosed section "'+A[1]+'" at '+f.pos);return p=w(p),b(p)};var S=new g;return e.clearCache=function(){return S.clearCache()},e.compile=function(e,t){return S.compile(e,t)},e.compilePartial=function(e,t,n){return S.compilePartial(e,t,n)},e.compileTokens=function(e,t){return S.compileTokens(e,t)},e.render=function(e,t,n){return S.render(e,t,n)},e.to_html=function(t,n,r,i){var s=e.render(t,n,r);if(typeof i!="function")return s;i(s)},e}())