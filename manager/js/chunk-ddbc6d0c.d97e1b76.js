(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddbc6d0c"],{"498a":function(t,a,n){"use strict";var e=n("23e7"),i=n("58a8").trim,r=n("c8d2");e({target:"String",proto:!0,forced:r("trim")},{trim:function(){return i(this)}})},"5ee3":function(t,a,n){},8041:function(t,a,n){"use strict";n("5ee3")},"8c57":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"ido-sign"},[n("div",{staticClass:"box"},[n("span",[t._v("认购数量(最小100，最大2000)")]),n("div",{staticClass:"input-container input-append"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number"},domProps:{value:t.amount},on:{input:function(a){a.target.composing||(t.amount=a.target.value)}}}),n("span",[t._v("USDT")])]),n("span",[t._v("私钥")]),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.privateKey,expression:"privateKey"}],attrs:{type:"text"},domProps:{value:t.privateKey},on:{input:function(a){a.target.composing||(t.privateKey=a.target.value)}}})]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.rawTransaction,expression:"rawTransaction"}]},[t._v("签名结果(点击复制)")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.rawTransaction,expression:"rawTransaction"}],staticClass:"rawTransaction",on:{click:t.doCopy}},[t._v(t._s(t.rawTransaction))]),n("van-button",{attrs:{loading:t.isLoading,"loading-text":"签名中..."},on:{click:t.confirm}},[t._v("签名")])],1)])},i=[],r=(n("b0c0"),n("498a"),n("96cf"),n("1da1")),s=(n("e17f"),n("2241")),o=(n("e7e5"),n("d399")),c=n("ade3"),u=(n("66b9"),n("b650")),p=n("2351");function v(t){var a=t.trim();return/^(0x|0X)?[0-9a-fA-F]{64}$/.test(a)}var d={components:Object(c["a"])({},u["a"].name,u["a"]),data:function(){return{amount:"",privateKey:"",rawTransaction:!1,isLoading:!1}},methods:{doCopy:function(){this.$copyText(this.rawTransaction).then((function(t){o["a"].success("已复制")}),(function(t){o["a"].fail("无法复制")}))},confirm:function(){var t=this;return 0===this.amount.length?o["a"].fail("请输入认购数量"):0===this.privateKey.length?o["a"].fail("请输入私钥"):this.amount<100?o["a"].fail("认购数量不能小于100"):this.amount>2e3?o["a"].fail("认购数量不能大于2000"):v(this.privateKey)?void s["a"].confirm({message:"签名成功后若使用此私钥交易将会导致签名失效，若必须交易，请交易后重新签名"}).then((function(){t.signTransaction()})).catch((function(){})):o["a"].fail("请输入正确的私钥")},signTransaction:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,e,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.isLoading=!0,n=new t.$web3.eth.Contract(p.abi,p.address),e=n.methods.subscribe(t.amount.toWei()).encodeABI(),a.prev=3,i=t.$web3.eth.accounts.privateKeyToAccount(t.privateKey),a.next=7,i.signTransaction({data:e,gas:21276,to:p.address});case 7:r=a.sent,t.rawTransaction=r.rawTransaction,a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](3),console.error(a.t0),o["a"].fail("签名失败");case 15:t.isLoading=!1;case 16:case"end":return a.stop()}}),a,null,[[3,11]])})))()}}},m=d,l=m,f=(n("8041"),n("2877")),w=Object(f["a"])(l,e,i,!1,null,"f3415946",null);a["default"]=w.exports},c8d2:function(t,a,n){var e=n("d039"),i=n("5899"),r="​᠎";t.exports=function(t){return e((function(){return!!i[t]()||r[t]()!=r||i[t].name!==t}))}}}]);