(function(e){function t(t){for(var a,i,u=t[0],s=t[1],c=t[2],d=0,p=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o={app:0},r=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0c2a69d2":"1b8be910","chunk-16fbe1a2":"deac16b4","chunk-1d8e07f1":"54b8d42a","chunk-42a6dc4b":"7ff24ce8","chunk-7194da95":"c95ed1ec","chunk-ddbc6d0c":"7bc4e781","chunk-69e3f110":"6b1c84ba","chunk-1e1b7a3e":"4ca53659","chunk-506bb3cd":"5c6241e1","chunk-848bbf62":"53bac8d0","chunk-8809494c":"b0eba8d7","chunk-a7cf7088":"c49a70b6"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0c2a69d2":1,"chunk-16fbe1a2":1,"chunk-1d8e07f1":1,"chunk-42a6dc4b":1,"chunk-7194da95":1,"chunk-ddbc6d0c":1,"chunk-1e1b7a3e":1,"chunk-506bb3cd":1,"chunk-848bbf62":1,"chunk-8809494c":1,"chunk-a7cf7088":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0c2a69d2":"4b960631","chunk-16fbe1a2":"f1701afc","chunk-1d8e07f1":"7bda2a5c","chunk-42a6dc4b":"acdcead4","chunk-7194da95":"2c6271c1","chunk-ddbc6d0c":"9d85f8e1","chunk-69e3f110":"31d6cfe0","chunk-1e1b7a3e":"441113a3","chunk-506bb3cd":"c8969392","chunk-848bbf62":"01bd5636","chunk-8809494c":"ea175b45","chunk-a7cf7088":"e37bfb58"}[e]+".css",o=s.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var c=r[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],d=c.getAttribute("data-href");if(d===a||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],l.parentNode.removeChild(l),n(r)},l.href=o;var y=document.getElementsByTagName("head")[0];y.appendChild(l)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var p=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",p.name="ChunkLoadError",p.type=a,p.request=i,n[1](p)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2351:function(e){e.exports=JSON.parse('{"address":"0x1eEe101f3361473Ce559105f9F683269Ab209D86","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Subscribe","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"DELEGATE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"boughtOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"isOpened","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalQuota","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_usdt","type":"address"},{"internalType":"address","name":"_staticPool","type":"address"},{"internalType":"address","name":"_usdtReceiver","type":"address"},{"internalType":"uint256","name":"_totalQuota","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openSubscribe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeSubscribe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setTotalQuota","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"test","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getPowerByUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"subscribe","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},"2c37":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.toggle?n("div",{attrs:{id:"app"}},[n("k-header"),n("router-view")],1):e._e()},o=[],r=(n("d3b7"),n("04ba")),u=n.n(r),s={components:{"k-header":function(){return n.e("chunk-0c2a69d2").then(n.bind(null,"f392"))}},data:function(){return{toggle:!0}},created:function(){var e=this;window.onload=function(){window.ethereum&&e.init()}},methods:{reload:function(){var e=this;this.toggle=!1,this.$nextTick((function(){e.toggle=!0}))},init:function(){var e=this;this.getAddress().then((function(t){var n=new u.a(window.ethereum);a["a"].prototype.$address=t,a["a"].prototype.$web3=n,e.reload()}))},getAddress:function(){var e=this;return new Promise((function(t){window.imToken?window.imToken.callAPI("user.getCurrentAccount",(function(e,n){e||t(n)})):window.ethereum&&(window.ethereum.isTrust||window.ethereum.isHuobi?t(ethereum.address):(window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){t(e[0])})),window.ethereum.on("accountsChanged",(function(t){a["a"].prototype.$address=t[0],e.reload()}))))}))}}},c=s,d=(n("5c0b"),n("2877")),p=Object(d["a"])(c,i,o,!1,null,null,null),l=p.exports,y=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"community"},[n("div",{staticClass:"box"},[n("div",{staticClass:"ido"},[n("span",[e._v("开启IDO")]),n("div",[n("van-button",{attrs:{disabled:e.startTime>0},on:{click:e.start}},[e._v(e._s(e.startTime>0?"已开启":"开启"))])],1)]),n("div",{staticClass:"ido"},[n("span",[e._v("认购状态："+e._s(e.isOpened?"开启":"关闭"))]),n("div",[n("van-button",{directives:[{name:"show",rawName:"v-show",value:e.isOpened,expression:"isOpened"}],on:{click:e.closeSubscribe}},[e._v("关闭")]),n("van-button",{directives:[{name:"show",rawName:"v-show",value:!e.isOpened,expression:"!isOpened"}],on:{click:e.openSubscribe}},[e._v("开启")])],1)])])])},f=[],m=(n("b0c0"),n("e7e5"),n("d399")),h=n("ade3"),v=(n("66b9"),n("b650")),k=n("2351"),g={components:Object(h["a"])({},v["a"].name,v["a"]),data:function(){return{startTime:0,isOpened:!1}},created:function(){this.$web3&&this.init()},methods:{start:function(){var e=this,t=new this.$web3.eth.Contract(k.abi,k.address);t.methods.start().send({from:this.$address}).on("transactionHash",(function(e){m["a"].loading({message:"交易中...",forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(t){e.init(),m["a"].clear(),m["a"].success("IDO开启成功")})).on("error",(function(e){m["a"].clear(),m["a"].fail("交易失败")}))},openSubscribe:function(){var e=this,t=new this.$web3.eth.Contract(k.abi,k.address);t.methods.openSubscribe().send({from:this.$address}).on("transactionHash",(function(e){m["a"].loading({message:"交易中...",forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(t){e.init(),m["a"].clear(),m["a"].success("开启认购成功")})).on("error",(function(e){m["a"].clear(),m["a"].fail("交易失败")}))},closeSubscribe:function(){var e=this,t=new this.$web3.eth.Contract(k.abi,k.address);t.methods.closeSubscribe().send({from:this.$address}).on("transactionHash",(function(e){m["a"].loading({message:"交易中...",forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(t){e.init(),m["a"].clear(),m["a"].success("关闭认购成功")})).on("error",(function(e){m["a"].clear(),m["a"].fail("交易失败")}))},init:function(){var e=this,t=new this.$web3.eth.Contract(k.abi,k.address);t.methods.startTime().call((function(t,n){t||(e.startTime=n)})),t.methods.isOpened().call((function(t,n){t||(e.isOpened=n)}))}}},T=g,w=T,x=(n("de5f"),Object(d["a"])(w,b,f,!1,null,"6d665615",null)),O=x.exports;a["a"].use(y["a"]);var S=[{path:"/",name:"Home",component:O},{path:"/SetDFarm",name:"SetDFarm",component:function(){return n.e("chunk-848bbf62").then(n.bind(null,"a6f2"))}},{path:"/SetTokenConfig",name:"SetTokenConfig",component:function(){return Promise.all([n.e("chunk-69e3f110"),n.e("chunk-506bb3cd")]).then(n.bind(null,"de77"))}},{path:"/RemoveTokenConfig",name:"RemoveTokenConfig",component:function(){return n.e("chunk-a7cf7088").then(n.bind(null,"67d0"))}},{path:"/AddHNRadio",name:"AddHNRadio",component:function(){return n.e("chunk-16fbe1a2").then(n.bind(null,"0afe"))}},{path:"/AddLNRadio",name:"AddLNRadio",component:function(){return n.e("chunk-8809494c").then(n.bind(null,"67ea"))}},{path:"/setMining",name:"setMining",component:function(){return n.e("chunk-1d8e07f1").then(n.bind(null,"4bf4"))}},{path:"/node",name:"node",component:function(){return Promise.all([n.e("chunk-69e3f110"),n.e("chunk-1e1b7a3e")]).then(n.bind(null,"12ff"))}},{path:"/idoSign",name:"idoSign",component:function(){return Promise.all([n.e("chunk-42a6dc4b"),n.e("chunk-ddbc6d0c")]).then(n.bind(null,"8c57"))}},{path:"/BulkSubscription",name:"BulkSubscription",component:function(){return Promise.all([n.e("chunk-42a6dc4b"),n.e("chunk-7194da95")]).then(n.bind(null,"7486"))}}],M=new y["a"]({mode:"hash",base:"",routes:S}),_=M,C=n("9dee"),A=n.n(C),N=(n("99af"),n("c975"),n("fb6a"),n("a9e3"),n("b680"),n("d9a3")),R=n.n(N);function E(){return new R.a("".concat(this))}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18;return this.toBN().times(j(e)).toFixed()}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18;return this.toBN().div(j(e)).toFixed()}function j(e){return"10".toBN().pow(e)}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t="string"===typeof this?this:"".concat(this),n=t.indexOf(".");return n>0?t.slice(n+1).length<=e?t:"".concat(Number(e>0?"".concat(t.slice(0,n),".").concat(t.slice(n+1,n+1+e)):t.slice(0,n))):t}String.prototype.toBN=E,String.prototype.toWei=P,String.prototype.fromWei=$,String.prototype.toFixed=L,Number.prototype.toBN=E,Number.prototype.toWei=P,Number.prototype.fromWei=$,Number.prototype.toFixed=L,a["a"].use(A.a),a["a"].config.productionTip=!1,a["a"].directive("ButClickLimit",{inserted:function(e){e.addEventListener("click",(function(){e.disabled=!0,setTimeout((function(){e.disabled=!1}),2e3)}))}}),new a["a"]({router:_,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},de5f:function(e,t,n){"use strict";n("2c37")}});