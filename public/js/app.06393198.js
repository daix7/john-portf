(function(t){function s(s){for(var e,r,c=s[0],n=s[1],o=s[2],p=0,v=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);g&&g(s);while(v.length)v.shift()();return l.push.apply(l,o||[]),i()}function i(){for(var t,s=0;s<l.length;s++){for(var i=l[s],e=!0,c=1;c<i.length;c++){var n=i[c];0!==a[n]&&(e=!1)}e&&(l.splice(s--,1),t=r(r.s=i[0]))}return t}var e={},a={app:0},l=[];function r(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,s,i){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(i,e,function(s){return t[s]}.bind(null,e));return i},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=s,c=c.slice();for(var o=0;o<c.length;o++)s(c[o]);var g=n;l.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"034f":function(t,s,i){"use strict";var e=i("85ec"),a=i.n(e);a.a},"0cf7":function(t,s,i){},"2c44":function(t,s,i){"use strict";var e=i("0cf7"),a=i.n(e);a.a},"49a0":function(t,s,i){},"56d7":function(t,s,i){"use strict";i.r(s);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",[i("div",{staticClass:"title"},[i("h1",{staticClass:"title-msg"},[t._v(t._s(t.msg))]),i("ul",{staticClass:"menu-table"},[i("li",{on:{click:t.home}},[t._v("HOME")]),i("li",{on:{click:t.portfolio}},[t._v("Portfolio")]),i("li",{on:{click:t.hobby}},[t._v("Hobby")]),i("li")])]),i("router-view"),i("footer",{staticClass:"top-footer"})],1)])},l=[],r=i("8c4f"),c=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"l-constrained-large"},[i("header",{staticClass:"profile-wrap"},[i("h1",{staticClass:"profile-title"},[t._v("Profile")])]),i("div",{staticClass:"section-content cleafix"},[i("div",{staticClass:"profile-img pull-left"},[i("img",{attrs:{src:"/img/dai2.png"}})]),i("div",{staticClass:"profile-content pull-left"},[i("div",[i("h2",{staticClass:"title-2"},[t._v("自己紹介")]),i("p",[t._v(" 初めまして。私は益田大輔と申します。 "),i("br"),t._v("高校生の頃からプログラミングを始め、アプリケーションなどを作っています。 "),i("br"),t._v("言語は主にjavascriptを使用することが多く、Vue.jsというフレームワークを使い "),i("br"),t._v("webアプリを作ることが好きです。 ")])]),i("div",[i("h2",{staticClass:"home-title"},[t._v("使用したことのある技術・ソフトウェア")]),i("img",{staticClass:"v-img",attrs:{src:"/img/logo.png"}}),i("img",{staticClass:"v-img",attrs:{src:"/img/vuetify.png"}}),i("img",{staticClass:"v-img",attrs:{src:"/img/vim-logo.png"}}),i("img",{staticClass:"v-img",attrs:{src:"/img/node.js.png"}}),i("img",{staticClass:"v-img",attrs:{src:"/img/java.png"}}),i("img",{staticClass:"v-img3",attrs:{src:"/img/html_logo2.png"}}),i("img",{staticClass:"v-img2",attrs:{src:"/img/php.png"}})])])])])}],o={name:"HelloWorld",methods:{texta:function(){alert("hehehhehehhe")}}},g=o,p=(i("a6fc"),i("2877")),v=Object(p["a"])(g,c,n,!1,null,"26d3fe0e",null),m=v.exports,u=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"l-constrained-large"},[i("header",{staticClass:"portfolio-wrap"},[i("h1",{staticClass:"portfolio-title"},[t._v("Portfolio")])]),i("div",{staticClass:"section-body"},[i("div",{staticClass:"section-content clearfix"},[i("div",{staticClass:"portfolio-content pull-left"},[i("div",[i("h2",{staticClass:"title-2"},[t._v("Schedule")]),i("p",{staticClass:"content"},[t._v(" 複数のクラスを持つ教員向けに授業管理アプリを作りました。 "),i("br"),t._v("学生向けの時間割アプリは多いが教員向けがあまりなく、 "),i("br"),t._v("実際に高校の教員などに要件を聞きながら開発しました。 ")])]),i("div",[i("h2",{staticClass:"title-2"},[t._v("使用した技術")]),i("img",{staticClass:"v-img",attrs:{src:"/img/logo.png"}}),i("img",{staticClass:"v-img",attrs:{src:"/img/vuetify.png"}}),i("img",{staticClass:"v-img2",attrs:{src:"/img/Go.png"}}),i("img",{staticClass:"v-img2",attrs:{src:"/img/docker_logo.png"}})])]),i("div",{staticClass:"schedule-img pull-left"},[i("img",{attrs:{src:"/img/Schedule2.png"}})])]),i("div",{staticClass:"section-content-second clearfix"},[i("div",{staticClass:"pull-left"},[i("img",{staticClass:"miyako-img",attrs:{src:"/img/miyako.png"}})]),i("div",{staticClass:"portfolio-content-second pull-left"},[i("div",[i("h2",{staticClass:"title-3"},[t._v("宮古島方言辞書アプリ")]),i("p",[t._v(" 地元の方言を多くの人に知ってもらいたいと思い授業の一環で作りました。 "),i("br"),t._v("宮古島方言を約120語収録している辞書アプリです。 "),i("br"),t._v("マンガで使い方を見ることができるので、とっても分かりやすいです。 "),i("br")])]),i("div",[i("h2",{staticClass:"title-2"},[t._v("使用した技術")]),i("img",{staticClass:"v-img3",attrs:{src:"/img/html_logo2.png"}}),i("img",{staticClass:"v-img4",attrs:{src:"/img/monaca.png"}})])])]),i("div",{staticClass:"section-content-Third clearfix"},[i("div",{staticClass:"portfolio-content-Third pull-left"},[i("div",[i("h2",{staticClass:"title-2"},[t._v("OnlineBoard")]),i("p",{staticClass:"content"},[i("br"),t._v("ゲームの戦略を練るときにオンライン上でチームメンバーと "),i("br"),t._v("マップを共有して、より簡単に作戦会議などが行える事を目的に "),i("br"),t._v("現在フロントエンドに携わっており制作している段階です。 ")])]),i("div",[i("h2",{staticClass:"title-2"},[t._v("使用している技術")]),i("img",{staticClass:"v-img",attrs:{src:"/img/logo.png"}}),i("img",{staticClass:"v-img",attrs:{src:"/img/vuetify.png"}}),i("img",{staticClass:"v-img2",attrs:{src:"/img/docker_logo.png"}}),i("img",{staticClass:"v-img",attrs:{src:"/img/circleci.png"}}),i("img",{staticClass:"v-img2",attrs:{src:"/img/socket.jpg"}})])]),i("div",{staticClass:"Strategy-img pull-left"},[i("img",{attrs:{src:"/img/StrategyBoard.jpg"}})])])])])}],d={name:"HelloWorld",methods:{texta:function(){alert("hehehhehehhe")}}},h=d,C=(i("2c44"),Object(p["a"])(h,u,f,!1,null,"85828e68",null)),_=C.exports,b=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"l-constrained-large"},[i("header",{staticClass:"hobby-wrap"},[i("h1",{staticClass:"hobby-title"},[t._v("Hobby")])]),i("div",{staticClass:"section-body"},[i("div",{staticClass:"section-content clearfix"},[i("div",{staticClass:"portfolio-content pull-left"},[i("div",[i("h2",{staticClass:"title-1"},[t._v("LINEbot")]),i("p",{staticClass:"content"},[i("br"),t._v("学校内で月に一回のスーツを着てくる日を忘れないよう "),i("br"),t._v("通知してくれたり、日にちを教えてくれるbotです。 ")])]),i("div",[i("h2",{staticClass:"title-2"},[t._v("使用した技術")]),i("img",{staticClass:"v-img",attrs:{src:"/img/node.js.png"}}),i("img",{staticClass:"v-img",attrs:{src:"/img/messaging_api.png"}})])]),i("div",{staticClass:"line-img pull-left"},[i("img",{attrs:{src:"/img/line_bot.png"}})])]),i("div",{staticClass:"section-content-second clearfix"},[i("div",{staticClass:"pull-left"},[i("img",{staticClass:"alexa-img",attrs:{src:"/img/alexa.png"}})]),i("div",{staticClass:"portfolio-content-second pull-left"},[i("div",[i("h2",{staticClass:"title-3"},[t._v("Alexa出勤管理BOT")]),i("p",[i("br"),t._v("アレクサのスキル開発勉強中です。 "),i("br"),t._v("まだ、企画段階で今後開発していく予定です。 "),i("br")])])])])])])}],x={name:"HelloWorld",methods:{texta:function(){alert("hehehhehehhe")}}},j=x,O=(i("85c5"),Object(p["a"])(j,b,y,!1,null,"17fd81ec",null)),w=O.exports;e["a"].use(r["a"]);var k=new r["a"]({routes:[{path:"/",name:"home",component:m},{path:"/portfolio",name:"portfolio",component:_},{path:"/hobby",name:"hobby",component:w}]}),P={name:"App",data:function(){return{msg:"Wellcom to Daisuke Protfolio"}},methods:{home:function(){k.push({path:"/"})},portfolio:function(){k.push({path:"/portfolio"})},hobby:function(){k.push({path:"/hobby"})}}},E=P,S=(i("034f"),Object(p["a"])(E,a,l,!1,null,null,null)),$=S.exports,H=i("85fe");e["a"].config.productionTip=!0,e["a"].use(H["a"]),new e["a"]({router:k,render:function(t){return t($)}}).$mount("#app")},"85c5":function(t,s,i){"use strict";var e=i("49a0"),a=i.n(e);a.a},"85ec":function(t,s,i){},a6fc:function(t,s,i){"use strict";var e=i("c1f9"),a=i.n(e);a.a},c1f9:function(t,s,i){}});
//# sourceMappingURL=app.06393198.js.map