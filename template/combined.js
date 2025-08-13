/* combined.js - generated Wed Aug 13 01:13:16 UTC 2025 (UTC) */
/* === BEGIN atlas-dialog.js === */
var ke=function($){var T,h,K,k,Q,X,Y,Z,R,H,W,M={},ee=[],he=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,D=Array.isArray;function b(t,e){for(var o in e)t[o]=e[o];return t}function O(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e,o){var a,n,i,l={};for(i in e)i=="key"?a=e[i]:i=="ref"?n=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?T.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)l[i]===void 0&&(l[i]=t.defaultProps[i]);return L(t,l,a,n,null)}function L(t,e,o,a,n){var i={type:t,props:e,key:o,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:n==null?++K:n,__i:-1,__u:0};return n==null&&h.vnode!=null&&h.vnode(i),i}function U(t){return t.children}function j(t,e){this.props=t,this.context=e}function S(t,e){if(e==null)return t.__?S(t.__,t.__i+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?S(t):null}function te(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return te(t)}}function oe(t){(!t.__d&&(t.__d=!0)&&k.push(t)&&!I.__r++||Q!=h.debounceRendering)&&((Q=h.debounceRendering)||X)(I)}function I(){for(var t,e,o,a,n,i,l,d=1;k.length;)k.length>d&&k.sort(Y),t=k.shift(),d=k.length,t.__d&&(o=void 0,n=(a=(e=t).__v).__e,i=[],l=[],e.__P&&((o=b({},a)).__v=a.__v+1,h.vnode&&h.vnode(o),q(e.__P,o,a,e.__n,e.__P.namespaceURI,32&a.__u?[n]:null,i,n==null?S(a):n,!!(32&a.__u),l),o.__v=a.__v,o.__.__k[o.__i]=o,le(i,o,l),o.__e!=n&&te(o)));I.__r=0}function re(t,e,o,a,n,i,l,d,p,s,_){var r,w,c,g,m,v,u=a&&a.__k||ee,f=e.length;for(p=fe(o,e,u,p,f),r=0;r<f;r++)(c=o.__k[r])!=null&&(w=c.__i==-1?M:u[c.__i]||M,c.__i=r,v=q(t,c,w,n,i,l,d,p,s,_),g=c.__e,c.ref&&w.ref!=c.ref&&(w.ref&&G(w.ref,null,c),_.push(c.ref,c.__c||g,c)),m==null&&g!=null&&(m=g),4&c.__u||w.__k===c.__k?p=ne(c,p,t):typeof c.type=="function"&&v!==void 0?p=v:g&&(p=g.nextSibling),c.__u&=-7);return o.__e=m,p}function fe(t,e,o,a,n){var i,l,d,p,s,_=o.length,r=_,w=0;for(t.__k=new Array(n),i=0;i<n;i++)(l=e[i])!=null&&typeof l!="boolean"&&typeof l!="function"?(p=i+w,(l=t.__k[i]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?L(null,l,null,null,null):D(l)?L(U,{children:l},null,null,null):l.constructor==null&&l.__b>0?L(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=t,l.__b=t.__b+1,d=null,(s=l.__i=we(l,o,p,r))!=-1&&(r--,(d=o[s])&&(d.__u|=2)),d==null||d.__v==null?(s==-1&&(n>_?w--:n<_&&w++),typeof l.type!="function"&&(l.__u|=4)):s!=p&&(s==p-1?w--:s==p+1?w++:(s>p?w--:w++,l.__u|=4))):t.__k[i]=null;if(r)for(i=0;i<_;i++)(d=o[i])!=null&&(2&d.__u)==0&&(d.__e==a&&(a=S(d)),de(d,d));return a}function ne(t,e,o){var a,n;if(typeof t.type=="function"){for(a=t.__k,n=0;a&&n<a.length;n++)a[n]&&(a[n].__=t,e=ne(a[n],e,o));return e}t.__e!=e&&(e&&t.type&&!o.contains(e)&&(e=S(t)),o.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function we(t,e,o,a){var n,i,l,d=t.key,p=t.type,s=e[o],_=s!=null&&(2&s.__u)==0;if(s===null&&t.key==null||_&&d==s.key&&p==s.type)return o;if(a>(_?1:0)){for(n=o-1,i=o+1;n>=0||i<e.length;)if((s=e[l=n>=0?n--:i++])!=null&&(2&s.__u)==0&&d==s.key&&p==s.type)return l}return-1}function ie(t,e,o){e[0]=="-"?t.setProperty(e,o==null?"":o):t[e]=o==null?"":typeof o!="number"||he.test(e)?o:o+"px"}function N(t,e,o,a,n){var i,l;e:if(e=="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof a=="string"&&(t.style.cssText=a=""),a)for(e in a)o&&e in o||ie(t.style,e,"");if(o)for(e in o)a&&o[e]==a[e]||ie(t.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Z,"$1")),l=e.toLowerCase(),e=l in t||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=o,o?a?o.u=a.u:(o.u=R,t.addEventListener(e,i?W:H,i)):t.removeEventListener(e,i?W:H,i);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=o==null?"":o;break e}catch(d){}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&o==1?"":o))}}function ae(t){return function(e){if(this.l){var o=this.l[e.type+t];if(e.t==null)e.t=R++;else if(e.t<o.u)return;return o(h.event?h.event(e):e)}}}function q(t,e,o,a,n,i,l,d,p,s){var _,r,w,c,g,m,v,u,f,E,x,B,A,_e,F,P,J,y=e.type;if(e.constructor!=null)return null;128&o.__u&&(p=!!(32&o.__u),i=[d=e.__e=o.__e]),(_=h.__b)&&_(e);e:if(typeof y=="function")try{if(u=e.props,f="prototype"in y&&y.prototype.render,E=(_=y.contextType)&&a[_.__c],x=_?E?E.props.value:_.__:a,o.__c?v=(r=e.__c=o.__c).__=r.__E:(f?e.__c=r=new y(u,x):(e.__c=r=new j(u,x),r.constructor=y,r.render=ve),E&&E.sub(r),r.props=u,r.state||(r.state={}),r.context=x,r.__n=a,w=r.__d=!0,r.__h=[],r._sb=[]),f&&r.__s==null&&(r.__s=r.state),f&&y.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=b({},r.__s)),b(r.__s,y.getDerivedStateFromProps(u,r.__s))),c=r.props,g=r.state,r.__v=e,w)f&&y.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),f&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(f&&y.getDerivedStateFromProps==null&&u!==c&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(u,x),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(u,r.__s,x)===!1||e.__v==o.__v){for(e.__v!=o.__v&&(r.props=u,r.state=r.__s,r.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(z){z&&(z.__=e)}),B=0;B<r._sb.length;B++)r.__h.push(r._sb[B]);r._sb=[],r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(u,r.__s,x),f&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(c,g,m)})}if(r.context=x,r.props=u,r.__P=t,r.__e=!1,A=h.__r,_e=0,f){for(r.state=r.__s,r.__d=!1,A&&A(e),_=r.render(r.props,r.state,r.context),F=0;F<r._sb.length;F++)r.__h.push(r._sb[F]);r._sb=[]}else do r.__d=!1,A&&A(e),_=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++_e<25);r.state=r.__s,r.getChildContext!=null&&(a=b(b({},a),r.getChildContext())),f&&!w&&r.getSnapshotBeforeUpdate!=null&&(m=r.getSnapshotBeforeUpdate(c,g)),P=_,_!=null&&_.type===U&&_.key==null&&(P=se(_.props.children)),d=re(t,D(P)?P:[P],e,o,a,n,i,l,d,p,s),r.base=e.__e,e.__u&=-161,r.__h.length&&l.push(r),v&&(r.__E=r.__=null)}catch(z){if(e.__v=null,p||i!=null)if(z.then){for(e.__u|=p?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;i[i.indexOf(d)]=null,e.__e=d}else{for(J=i.length;J--;)O(i[J]);V(e)}else e.__e=o.__e,e.__k=o.__k,z.then||V(e);h.__e(z,e,o)}else i==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):d=e.__e=ge(o.__e,e,o,a,n,i,l,p,s);return(_=h.diffed)&&_(e),128&e.__u?void 0:d}function V(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(V)}function le(t,e,o){for(var a=0;a<o.length;a++)G(o[a],o[++a],o[++a]);h.__c&&h.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){h.__e(i,n.__v)}})}function se(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:D(t)?t.map(se):b({},t)}function ge(t,e,o,a,n,i,l,d,p){var s,_,r,w,c,g,m,v=o.props,u=e.props,f=e.type;if(f=="svg"?n="http://www.w3.org/2000/svg":f=="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),i!=null){for(s=0;s<i.length;s++)if((c=i[s])&&"setAttribute"in c==!!f&&(f?c.localName==f:c.nodeType==3)){t=c,i[s]=null;break}}if(t==null){if(f==null)return document.createTextNode(u);t=document.createElementNS(n,f,u.is&&u),d&&(h.__m&&h.__m(e,i),d=!1),i=null}if(f==null)v===u||d&&t.data==u||(t.data=u);else{if(i=i&&T.call(t.childNodes),v=o.props||M,!d&&i!=null)for(v={},s=0;s<t.attributes.length;s++)v[(c=t.attributes[s]).name]=c.value;for(s in v)if(c=v[s],s=="children");else if(s=="dangerouslySetInnerHTML")r=c;else if(!(s in u)){if(s=="value"&&"defaultValue"in u||s=="checked"&&"defaultChecked"in u)continue;N(t,s,null,c,n)}for(s in u)c=u[s],s=="children"?w=c:s=="dangerouslySetInnerHTML"?_=c:s=="value"?g=c:s=="checked"?m=c:d&&typeof c!="function"||v[s]===c||N(t,s,c,v[s],n);if(_)d||r&&(_.__html==r.__html||_.__html==t.innerHTML)||(t.innerHTML=_.__html),e.__k=[];else if(r&&(t.innerHTML=""),re(e.type=="template"?t.content:t,D(w)?w:[w],e,o,a,f=="foreignObject"?"http://www.w3.org/1999/xhtml":n,i,l,i?i[0]:o.__k&&S(o,0),d,p),i!=null)for(s=i.length;s--;)O(i[s]);d||(s="value",f=="progress"&&g==null?t.removeAttribute("value"):g!=null&&(g!==t[s]||f=="progress"&&!g||f=="option"&&g!=v[s])&&N(t,s,g,v[s],n),s="checked",m!=null&&m!=t[s]&&N(t,s,m,v[s],n))}return t}function G(t,e,o){try{if(typeof t=="function"){var a=typeof t.__u=="function";a&&t.__u(),a&&e==null||(t.__u=t(e))}else t.current=e}catch(n){h.__e(n,o)}}function de(t,e,o){var a,n;if(h.unmount&&h.unmount(t),(a=t.ref)&&(a.current&&a.current!=t.__e||G(a,null,e)),(a=t.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(i){h.__e(i,e)}a.base=a.__P=null}if(a=t.__k)for(n=0;n<a.length;n++)a[n]&&de(a[n],e,o||typeof t.type!="function");o||O(t.__e),t.__c=t.__=t.__e=void 0}function ve(t,e,o){return this.constructor(t,o)}function ce(t,e,o){var a,n,i,l;e==document&&(e=document.documentElement),h.__&&h.__(t,e),n=(a=!1)?null:e.__k,i=[],l=[],q(e,t=e.__k=ue(U,null,[t]),n||M,M,e.namespaceURI,n?null:e.firstChild?T.call(e.childNodes):null,i,n?n.__e:e.firstChild,a,l),le(i,t,l)}T=ee.slice,h={__e:function(t,e,o,a){for(var n,i,l;e=e.__;)if((n=e.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(t)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t,a||{}),l=n.__d),l)return n.__E=n}catch(d){t=d}throw t}},K=0,j.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=b({},this.state),typeof t=="function"&&(t=t(b({},o),this.props)),t&&b(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),oe(this))},j.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),oe(this))},j.prototype.render=U,k=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y=function(t,e){return t.__v.__b-e.__v.__b},I.__r=0,Z=/(PointerCapture)$|Capture$/i,R=0,H=ae(!1),W=ae(!0);var me=0;function C(t,e,o,a,n,i){e||(e={});var l,d,p=e;if("ref"in p)for(d in p={},e)d=="ref"?l=e[d]:p[d]=e[d];var s={type:t,props:p,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--me,__i:-1,__u:0,__source:n,__self:i};if(typeof t=="function"&&(l=t.defaultProps))for(d in l)p[d]===void 0&&(p[d]=l[d]);return h.vnode&&h.vnode(s),s}function ye(){return C("div",{class:"min-h-screen bg-white text-slate-900 flex items-center justify-center px-6 rounded-xl",children:C("div",{class:"w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg overflow-hidden flex flex-col space-y-3",children:[C("button",{type:"button",class:"w-full rounded-md bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300",children:"Button One"}),C("button",{type:"button",class:"w-full rounded-md bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300",children:"Button Two"}),C("button",{type:"button",class:"w-full rounded-md bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300",children:"Button Three"})]})})}let be="/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-slate-900:oklch(20.8% .042 265.755);--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-3xl:48rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.collapse{visibility:collapse}.visible{visibility:visible}.fixed{position:fixed}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-10{margin-top:calc(var(--spacing)*10)}.flex{display:flex}.hidden{display:none}.table{display:table}.h-16{height:calc(var(--spacing)*16)}.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-3xl{max-width:var(--container-3xl)}.max-w-sm{max-width:var(--container-sm)}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-8{gap:calc(var(--spacing)*8)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-slate-200{border-color:var(--color-slate-200)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-slate-900{background-color:var(--color-slate-900)}.bg-white{background-color:var(--color-white)}.p-6{padding:calc(var(--spacing)*6)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-12{padding-block:calc(var(--spacing)*12)}.text-center{text-align:center}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-900{color:var(--color-slate-900)}.text-white{color:var(--color-white)}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media (hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:bg-slate-700:hover{background-color:var(--color-slate-700)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-slate-400:focus{--tw-ring-color:var(--color-slate-400)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}@media (prefers-color-scheme:dark){.dark\\:border-slate-700{border-color:var(--color-slate-700)}.dark\\:bg-slate-100{background-color:var(--color-slate-100)}.dark\\:bg-slate-700{background-color:var(--color-slate-700)}.dark\\:bg-slate-800{background-color:var(--color-slate-800)}.dark\\:bg-slate-900{background-color:var(--color-slate-900)}.dark\\:text-slate-100{color:var(--color-slate-100)}.dark\\:text-slate-300{color:var(--color-slate-300)}.dark\\:text-slate-900{color:var(--color-slate-900)}@media (hover:hover){.dark\\:hover\\:bg-slate-300:hover{background-color:var(--color-slate-300)}}}}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}";function xe(t){return t.replace(/\/\*[^!*][\s\S]*?\*\//g,"").replace(/\n+/g,"").replace(/\s{2,}/g," ").replace(/\s*([{}:;,])\s*/g,"$1")}function pe(t={}){let e=t.id||"atlas-dialog-root",o=document.getElementById(e);if(!o)o=document.createElement("div"),o.id=e,o.style.position="fixed",o.style.right="16px",o.style.bottom="16px",o.style.width="400px",o.style.height="400px",o.style.zIndex="2147483647",o.style.pointerEvents="auto",o.style.boxSizing="border-box",(t.parent||document.body).appendChild(o);let a=o.shadowRoot||o.attachShadow({mode:"open"});if(!a.querySelector("style[data-atlas-tailwind]")){let i=document.createElement("style");i.setAttribute("data-atlas-tailwind","true"),i.textContent=xe(be),a.appendChild(i)}let n=a.getElementById("app");if(!n)n=document.createElement("div"),n.id="app",a.appendChild(n);return n.style.width="100%",n.style.height="100%",n.style.boxSizing="border-box",n.style.paddingBottom="16px",n.style.marginBottom="16px",ce(C(ye,{}),n),{unmount:()=>{if(n)ce(null,n);o?.parentNode?.removeChild(o)},root:o}}if(typeof window!=="undefined")window.AtlasDialog=window.AtlasDialog||{mount:pe};if(typeof window!=="undefined"&&typeof document!=="undefined"){let t=()=>{try{let e=document.currentScript||null;if(e?.getAttribute("data-auto")==="false")return;let a=e?.getAttribute("data-id")||void 0,n,i=e?.getAttribute("data-parent")||void 0;if(i){let l=document.querySelector(i);if(l instanceof HTMLElement)n=l}window.AtlasDialog?.mount({id:a,parent:n})}catch{}};if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",t,{once:!0});else t()}return $.mountAtlasDialog=pe,Object.defineProperty($,Symbol.toStringTag,{value:"Module"}),$}({});

/* === END atlas-dialog.js === */

/* === BEGIN p.js === */
;
!(function () {
  var t,
    n,
    e,
    i,
    o = window.location,
    a = window.document,
    t = a.currentScript,
    r = {};
  function l(t, n, e) {
    window.fetch &&
      fetch(t, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        keepalive: !0,
        body: JSON.stringify(n),
      })
        .then(function (t) {
          e && e.callback && e.callback({ status: t.status });
        })
        .catch(function (t) {
          e && e.callback && e.callback({ error: t });
        });
  }
  var c = !1,
    d = location.href,
    s = {},
    u = -1,
    w = 0,
    p = 0;
  function v() {
    var t = h();
    if (!n && (u < i || t >= 3e3)) {
      u = i;
      var o = {
        n: "engagement",
        sd: Math.round((i / e) * 100),
        d: r.domain,
        u: d,
        p: s,
        e: t,
        v: 20,
      };
      (w = 0), (p = 0), l(r.endpoint, o);
    }
  }
  function f() {
    "visible" === document.visibilityState && document.hasFocus() && 0 === w
      ? (w = Date.now())
      : ("hidden" !== document.visibilityState && document.hasFocus()) ||
        ((p = h()), (w = 0), v());
  }
  function h() {
    return w ? p + (Date.now() - w) : p;
  }
  function g() {
    var t = document.body || {},
      n = document.documentElement || {};
    return Math.max(
      t.scrollHeight || 0,
      t.offsetHeight || 0,
      t.clientHeight || 0,
      n.scrollHeight || 0,
      n.offsetHeight || 0,
      n.clientHeight || 0
    );
  }
  function m() {
    var t = document.body || {},
      n = document.documentElement || {},
      i = window.innerHeight || n.clientHeight || 0,
      o = window.scrollY || n.scrollTop || t.scrollTop || 0;
    return e <= i ? e : o + i;
  }
  function b(t, h) {
    var b = "pageview" === t;
    if (
      (b && c && (v(), (e = g()), (i = m())),
      /^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname) ||
        "file:" === o.protocol)
    )
      return y(t, h, "localhost");
    if (
      (window._phantom ||
        window.__nightmare ||
        window.navigator.webdriver ||
        window.Cypress) &&
      !window.__plausible
    )
      return y(t, h);
    try {
      if ("true" === window.localStorage.plausible_ignore)
        return y(t, h, "localStorage flag");
    } catch (t) {}
    var S = {};
    (S.n = t),
      (S.v = 20),
      (S.u = o.href),
      (S.d = r.domain),
      (S.r = a.referrer || null),
      h && h.meta && (S.m = JSON.stringify(h.meta)),
      h && h.props && (S.p = h.props),
      h && !1 === h.interactive && (S.i = !1),
      b &&
        ((n = !1),
        (d = S.u),
        (s = S.p),
        (u = -1),
        (p = 0),
        (w = Date.now()),
        c ||
          (document.addEventListener("visibilitychange", f),
          window.addEventListener("blur", f),
          window.addEventListener("focus", f),
          (c = !0))),
      l(r.endpoint, S, h);
  }
  function y(t, e, i) {
    i && r.logging && console.warn("Ignoring Event: " + i),
      e && e.callback && e.callback(),
      "pageview" === t && (n = !0);
  }
  !(function n(l) {
    (r.endpoint =
      t.getAttribute("data-api") || new URL(t.src).origin + "/api/event"),
      (r.domain = t.getAttribute("data-domain")),
      (r.logging = !0),
      (e = g()),
      (i = m()),
      window.addEventListener("load", function () {
        e = g();
        var t = 0,
          n = setInterval(function () {
            (e = g()), 15 == ++t && clearInterval(n);
          }, 200);
      }),
      document.addEventListener("scroll", function () {
        e = g();
        var t = m();
        t > i && (i = t);
      }),
      (function (t) {
        function n(n) {
          (n && e === o.pathname) || ((e = o.pathname), t("pageview"));
        }
        var e,
          i = function () {
            n(!0);
          },
          r = window.history;
        if (r.pushState) {
          var l = r.pushState;
          (r.pushState = function () {
            l.apply(this, arguments), i();
          }),
            window.addEventListener("popstate", i);
        }
        "hidden" === a.visibilityState || "prerender" === a.visibilityState
          ? a.addEventListener("visibilitychange", function () {
              e || "visible" !== a.visibilityState || n();
            })
          : n(),
          window.addEventListener("pageshow", function (t) {
            t.persisted && n();
          });
      })(b);
    for (
      var c = (window.plausible && window.plausible.q) || [], d = 0;
      d < c.length;
      d++
    )
      b.apply(this, c[d]);
    (window.plausible = b),
      (window.plausible.init = n),
      (window.plausible.l = !0);
  })();
})();

/* === END p.js === */
