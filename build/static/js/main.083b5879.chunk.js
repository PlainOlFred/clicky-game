(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":0,"image":"./images/city_1.jpg"},{"id":1,"image":"./images/city_2.jpg"},{"id":2,"image":"./images/city_3.jpg"},{"id":3,"image":"./images/city_4.jpg"},{"id":4,"image":"./images/city_5.jpg"},{"id":5,"image":"./images/city_6.jpg"},{"id":6,"image":"./images/city_7.jpg"},{"id":7,"image":"./images/city_8.jpg"},{"id":8,"image":"./images/city_9.jpg"},{"id":9,"image":"./images/city_10.jpg"},{"id":10,"image":"./images/city_11.jpg"},{"id":11,"image":"./images/city_12.jpg"}]')},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(3),c=a.n(n),s=(a(15),a(4)),l=a(5),o=a(8),m=a(6),g=a(1),u=a(9);var p=function(e){return r.a.createElement("h1",null,e.children)};var d=function(e){return r.a.createElement("h1",null,r.a.createElement("span",null,"Score: ",e.score," "),r.a.createElement("span",null,"Top Score: ",e.topScore))},y={header:{display:"flex",justifyContent:"space-between",backgroundColor:"red"}};var h=function(e){var t=e.score,a=e.topScore,i=e.message;return r.a.createElement("div",{style:y.header},r.a.createElement("h1",null,"Click Me Remember Me"),r.a.createElement(p,null,i),r.a.createElement(d,{score:t,topScore:a}))},f={gameStlye:{display:"flex",flexFlow:"row wrap",justifyContent:"center",height:"100%",width:"75%"}};var v=function(e){return r.a.createElement("div",{style:f.gameStlye},e.children)},S={Card:{width:"250px",height:"250px",margin:"20px"},Image:{height:"250px",width:"250px"}};var k=function(e){var t=e.id;return r.a.createElement("div",{className:"card",style:S.Card,onClick:function(a){return e.onClick(t,a)}},r.a.createElement("img",{src:e.image,style:S.Image,alt:e.id}))},j=a(7),E=(a(16),{AppStyle:{display:"flex",flexDirection:"column",alignItems:"center"}}),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={tiles:j,tilesArray:new Array(12).fill(!1),score:"0",topScore:"0",guessCorrectly:!0,message:"Click a Skyline to Begin"},a.handleTileClick=a.handleTileClick.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleTileClick",value:function(e,t){var a=this.state.tilesArray[e]?" You Guessed Incorrectly":"You Guessed Correctly";if(!1===this.state.tilesArray[e]){var i=this.state.tilesArray;i[e]=!0,this.setState((function(e){return{score:parseInt(e.score)+1,topScore:parseInt(e.topScore)>parseInt(e.score)?parseInt(e.topScore):parseInt(e.topScore)+1,message:a,tilesArray:i}})),console.log(e)}else{var r=new Array(12).fill(!1);this.setState((function(e){return{score:"0",topScore:e.topScore,message:a,tilesArray:r}}))}}},{key:"mixUpTiles",value:function(e){return e.sort((function(){return Math.random()-.5}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,message:this.state.message}),r.a.createElement("div",{style:E.AppStyle},r.a.createElement(v,null,this.mixUpTiles(this.state.tiles).map((function(t){return r.a.createElement(k,{onClick:e.handleTileClick,key:t.id,id:t.id,name:t.id,image:t.image})})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.083b5879.chunk.js.map