(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50e4a390"],{"3d69":function(e,t,n){},"4bf4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"community"},[t("div",{staticClass:"box"},[t("div",{staticClass:"ido"},[t("span",[e._v("开启算力矿池")]),t("div",[t("van-button",{on:{click:e.start}},[e._v(e._s("开启"))])],1)])])])},s=[],i=(n("e7e5"),n("d399")),r=(n("66b9"),n("b650")),u=n("a23d"),p={components:{[r["a"].name]:r["a"]},data(){return{startTime:0,isOpened:!1}},created(){this.$web3&&this.init()},methods:{start(){const e=new this.$web3.eth.Contract(u.abi,u.address);e.methods.startEpoch().call({from:this.$address},(t,n)=>{t?i["a"].success("算力矿池已开启"):e.methods.startEpoch().send({from:this.$address}).on("transactionHash",e=>{i["a"].loading({message:"交易中..."})}).on("receipt",e=>{this.init(),i["a"].clear(),i["a"].success("算力矿池开启成功")}).on("error",e=>{i["a"].clear(),i["a"].fail("交易失败")})})},init(){}}},d=p,o=d,y=(n("db31"),n("2877")),l=Object(y["a"])(o,a,s,!1,null,"7b1753cc",null);t["default"]=l.exports},a23d:function(e){e.exports=JSON.parse('{"address":"0x82BBafEFB370274836287aB7Bae615Ab13c20D62","abi":[{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_usdt","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_pair","type":"address"},{"internalType":"address","name":"_foundationAddress","type":"address"},{"internalType":"address","name":"_operationAddress","type":"address"},{"internalType":"address","name":"_technicalAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epach","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalLiquidity","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalToken","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"ShareOutBonus","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_staticPool","type":"address"},{"internalType":"address","name":"_leaguePool","type":"address"},{"internalType":"address","name":"_dynamicFarm","type":"address"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shareOutBonusCall","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shareOutBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"callable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getLastEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getNextEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getCurrentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]}')},db31:function(e,t,n){"use strict";n("3d69")}}]);