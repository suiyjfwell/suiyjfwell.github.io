(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e1b7a3e"],{"12ff":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"set-token-config"},[n("div",{staticClass:"box"},[n("span",[e._v("联盟节点用户")]),n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.token,expression:"token"}],attrs:{type:"text"},domProps:{value:e.token},on:{change:e.changeToken,input:function(t){t.target.composing||(e.token=t.target.value)}}})]),n("van-button",{on:{click:e.depositByAdmin}},[e._v("添加")]),n("van-button",{on:{click:e.withdraw}},[e._v("删除")])],1),n("div",{staticClass:"box"},[n("h3",[e._v("总用户数量："+e._s(e.userCounts))]),n("a",{attrs:{href:"https://bscscan.com/address/"+e.contractAddress,target:"_blank"}},[e._v("BSC区块链查看")])])])},s=[],i=(n("b0c0"),n("e7e5"),n("d399")),u=(n("96cf"),n("1da1")),r=n("ade3"),o=(n("66b9"),n("b650")),p=(n("b9cc"),n("13bc")),y={components:Object(r["a"])({},o["a"].name,o["a"]),data:function(){return{token:"",userCounts:0,contractAddress:p.address}},created:function(){this.$web3&&this.init()},methods:{init:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new e.$web3.eth.Contract(p.abi,p.address),t.next=3,n.methods.userCounts().call();case 3:a=t.sent,e.userCounts=a;case 5:case"end":return t.stop()}}),t)})))()},changeToken:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$web3.utils.isAddress(e.token)){t.next=2;break}return t.abrupt("return",i["a"].fail("不是一个地址"));case 2:case"end":return t.stop()}}),t)})))()},depositByAdmin:function(){var e=this;if(0===this.token.length)return i["a"].fail("请输入用户地址");var t=new this.$web3.eth.Contract(p.abi,p.address),n=t.methods.depositByAdmin(this.token);n.call({from:this.$address},(function(t,a){t||n.send({from:e.$address}).on("transactionHash",(function(e){i["a"].loading({message:"交易中..."})})).on("receipt",(function(t){i["a"].clear(),e.token="",e.init(),i["a"].success("添加节点用户成功")})).on("error",(function(e){i["a"].clear(),i["a"].fail("交易失败")}))}))},withdraw:function(){var e=this;if(0===this.token.length)return i["a"].fail("请输入代币地址");var t=new this.$web3.eth.Contract(p.abi,p.address),n=t.methods.withdraw(this.token);n.call({from:this.$address},(function(t,a){t||n.send({from:e.$address}).on("transactionHash",(function(e){i["a"].loading({message:"交易中..."})})).on("receipt",(function(t){i["a"].clear(),e.token="",e.init(),i["a"].success("删除节点用户成功")})).on("error",(function(e){i["a"].clear(),i["a"].fail("交易失败")}))}))}}},d=y,l=d,c=(n("87fb"),n("2877")),m=Object(c["a"])(l,a,s,!1,null,"41d57b39",null);t["default"]=m.exports},"13bc":function(e){e.exports=JSON.parse('{"address":"0xE84Cdcb24Cd99E613e878fd3f04be1BAC0169BD7","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"TakeReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"DELEGATE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxUserCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"onceSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"userCounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userPoolInfo","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"taked","type":"uint256"},{"internalType":"uint256","name":"power","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"uint256","name":"_onceSupply","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_epoch","type":"address"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxUserCount","type":"uint256"}],"name":"setMaxUserCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"depositByAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takeReward","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},"1aec":function(e,t,n){},"87fb":function(e,t,n){"use strict";n("1aec")}}]);