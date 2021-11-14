(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r,c,o,a=n(0),i=n.n(a),u=n(10),s=n.n(u),l=(n(21),n(22),n(16)),j=n(2),d=n(3),f=n(11),b=n(8);!function(e){e[e.Empty=0]="Empty",e[e.Red=1]="Red",e[e.Green=2]="Green",e[e.Blue=3]="Blue",e[e.Purple=4]="Purple",e[e.Yellow=5]="Yellow",e[e.Teal=6]="Teal",e[e.Orange=7]="Orange"}(c||(c={})),function(e){e[e.I=0]="I",e[e.O=1]="O",e[e.T=2]="T",e[e.S=3]="S",e[e.Z=4]="Z",e[e.J=5]="J",e[e.L=6]="L"}(o||(o={}));var p=(r={},Object(b.a)(r,o.L,{bitmap:[[[0,0,1,0],[1,1,1,0]],[[1,0,0,0],[1,0,0,0],[1,1,0,0]],[[1,1,1,0],[1,0,0,0]],[[0,1,1,0],[0,0,1,0],[0,0,1,0]]],color:c.Orange}),Object(b.a)(r,o.O,{bitmap:[[[0,1,1,0],[0,1,1,0]]],color:c.Yellow}),Object(b.a)(r,o.T,{bitmap:[[[0,1,0,0],[1,1,1,0]],[[0,1,0,0],[0,1,1,0],[0,1,0,0]],[[1,1,1,0],[0,1,0,0]],[[0,1,0,0],[1,1,0,0],[0,1,0,0]]],color:c.Purple}),Object(b.a)(r,o.S,{bitmap:[[[0,1,1,0],[1,1,0,0]],[[0,1,0,0],[0,1,1,0],[0,0,1,0]],[[0,1,1,0],[1,1,0,0]],[[1,0,0,0],[1,1,0,0],[0,1,0,0]]],color:c.Green}),Object(b.a)(r,o.Z,{bitmap:[[[1,1,0,0],[0,1,1,0]],[[0,0,1,0],[0,1,1,0],[0,1,0,0]],[[1,1,0,0],[0,1,1,0]],[[0,1,0,0],[1,1,0,0],[1,0,0,0]]],color:c.Red}),Object(b.a)(r,o.J,{bitmap:[[[1,0,0,0],[1,1,1,0]],[[1,1,0,0],[1,0,0,0],[1,0,0,0]],[[1,1,1,0],[0,0,1,0]],[[0,0,1,0],[0,0,1,0],[0,1,1,0]]],color:c.Blue}),Object(b.a)(r,o.I,{bitmap:[[[1,1,1,1],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[1,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]],color:c.Teal}),r),O=Object.keys(p).length,v=n(6),h=function(e,t){return new Array(e).fill(new Array(t).fill({isGhosted:!1,color:c.Empty}))},m={rows:h(20,10),gutterRows:h(20,10)},x=Object(v.b)({name:"grid",initialState:m,reducers:{update:function(e,t){return t.payload}}}),w=x.actions.update,g=n(7),y={gameOver:!1,level:1,lines:0,paused:!1,remainingLines:10,score:0,tickInterval:1e3},E=Object(v.b)({name:"game",initialState:y,reducers:{removedLines:function(e,t){var n=t.payload;return Object(g.a)(Object(g.a)({},e),{},{lines:e.lines+n,remainingLines:e.remainingLines-n,score:e.score+100*n})},pause:function(e){return Object(g.a)(Object(g.a)({},e),{},{paused:!e.paused})}}}),N=E.actions,_=N.pause,k=N.removedLines,R=Object(v.b)({name:"current",initialState:null,reducers:{move:function(e,t){return null==e?e:Object(g.a)(Object(g.a)({},e),{},{position:t.payload})},rotate:function(e){return null==e?e:Object(g.a)(Object(g.a)({},e),{},{orientation:(e.orientation+1)%4})},update:function(e,t){return null!=t.payload?t.payload:e}}}),S=R.actions,G=function(){return{type:Math.floor(Math.random()*O),orientation:0}},I=G(),L=Object(v.b)({name:"next",initialState:I,reducers:{update:function(){return G()}}}),T=L.actions,A=Object(v.b)({name:"hold",initialState:null,reducers:{update:function(e,t){return null!=t.payload?t.payload:e}}}),P=A.actions,B=function(){return function(e,t){var n=t(),r=n.grid,c=n.current,o=n.next,a=r.gutterRows;if(null==c)return C(e,o);if(!M(a,c)){var i=Z(r.rows),u=i.rowsRemovedCount,s=i.newGrid;return e(k(u)),e(w({rows:s,gutterRows:s})),C(e,o)}var l={rows:F(a,c),gutterRows:a};e(w(l));var j=c.position||{x:3,y:0},d={x:j.x,y:j.y+1};return e(S.move(d))}},J=function(e){return function(t,n){var r=n(),c=r.grid,o=r.current,a=r.next,i=c.gutterRows;if(null==o)return C(t,a);var u=o.position||{x:3,y:0},s={x:u.x+e,y:u.y},l=M(i,{type:o.type,orientation:o.orientation,position:s});if(l){t(S.move(s));var j={rows:l?F(i,o):c.rows,gutterRows:l?i:c.rows};t(w(j))}}},C=function(e,t){return e(S.update(t)),e(T.update())},Y=function(){return function(e,t){var n=t(),r=n.current,c=n.hold,o=n.next;null!=c?e(S.update(c)):(e(S.update(o)),e(T.update())),null!=r&&e(P.update(r))}},Z=function(e){for(var t=e.filter((function(e){return-1!==e.findIndex((function(e){return e.color===c.Empty}))})),n=20-t.length,r=0;r<n;r++)t.unshift(new Array(10).fill({isGhosted:!1,color:c.Empty}));return{rowsRemovedCount:n,newGrid:t}},D=function(e){var t=p[e.type].bitmap[e.orientation],n=e.position||{x:3,y:0},r=[];return t.forEach((function(e,t){e.forEach((function(e,c){1===e&&r.push({x:n.x+c,y:n.y+t})}))})),r},M=function(e,t){var n,r=D(t),o=Object(f.a)(r);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(a.x>=10||a.x<0)return!1;if(a.y>=20||a.y<0)return!1;if(e[a.y][a.x].color!==c.Empty)return!1}}catch(i){o.e(i)}finally{o.f()}return!0},F=function(e,t){var n=[];return e.forEach((function(e){var t=[];e.forEach((function(e){t.push(e)})),n.push(t)})),D(t).forEach((function(e){n[e.y][e.x]={isGhosted:!1,color:p[t.type].color}})),n},H={ArrowDown:B,ArrowLeft:function(){return J(-1)},ArrowRight:function(){return J(1)},ArrowUp:function(){return e=1,function(t,n){var r=n(),c=r.grid,o=r.current,a=r.next,i=c.gutterRows;if(null==o)return C(t,a);var u=o.position||{x:3,y:0},s=M(i,{type:o.type,orientation:(o.orientation+e)%4,position:u});if(s){t(S.rotate());var l={rows:s?F(i,o):c.rows,gutterRows:s?i:c.rows};t(w(l))}};var e}," ":function(){console.log("drop: hard")},p:_,P:_,Shift:Y},K=(n(29),n(9)),U=(n(30),n(31),n(1)),q=function(e){var t=e.isGhosted,n=e.color,r=["block",c.Empty!==n&&"block--".concat(c[n].toLowerCase()),t&&"block--ghosted"].filter(Boolean).join(" ");return Object(U.jsx)("div",{className:r})},z=function(e){var t=e.rows.map((function(e,t){var n=e.map((function(e,n){return Object(U.jsx)(q,{isGhosted:e.isGhosted,color:e.color},"block-".concat(t,"-").concat(n))}));return Object(U.jsx)("div",{className:"grid__row",children:n},"grid-row-".concat(t))}));return Object(U.jsx)("div",{className:"grid",children:t})},Q=function(){var e=Object(d.c)((function(e){return e.grid}));return Object(U.jsx)(z,{rows:e.rows})},V=(n(33),n(34),function(e){var t=[],n=0===e[0][0]&&0===e[1][0],r=0===e[0][e[0].length-1]&&0===e[1][e[0].length-1];return e.forEach((function(e){var c=[];e.forEach((function(t,o){0===o&&n||o===e.length-1&&r||c.push(t)})),t.push(c)})),t}),W=function(e){var t=e.type,n=e.orientation;e.position;if(null==t)return Object(U.jsx)("div",{});var r=V(p[t].bitmap[n]).map((function(e,n){var r=e.map((function(e,r){return Object(U.jsx)(q,{isGhosted:!1,color:e?p[t].color:c.Empty},"shape-block-".concat(n,"-").concat(r))}));return Object(U.jsx)("div",{className:"shape__row",children:r},"shape-row-".concat(n))}));return Object(U.jsx)("div",{className:"shape",children:r})},X=function(e){var t=e.title,n=e.shape,r=e.onTouchStart;return Object(U.jsxs)("div",{onTouchStart:r,className:"shape-window",children:[Object(U.jsx)("p",{children:t}),n&&Object(U.jsx)(W,Object(g.a)({},n))]})},$=function(){var e=Object(d.c)((function(e){return e.next}));return Object(U.jsx)(X,{title:"Next",shape:e})},ee=function(){var e=Object(d.c)((function(e){return e.hold})),t=Object(d.b)();return Object(U.jsx)(X,{title:"Hold",shape:e,onTouchStart:function(e){return t((function(e,t){e(Y())}))}})},te=(n(35),function(e){var t=e.label,n=e.value;return Object(U.jsxs)("div",{className:"stat",children:[Object(U.jsxs)("label",{children:[t,": "]}),Object(U.jsx)("span",{children:n})]})}),ne=function(){var e=Object(d.c)((function(e){return e.game}));return Object(U.jsxs)("div",{className:"stats-view-container",children:[Object(U.jsx)(te,{label:"Level",value:e.level}),Object(U.jsx)(te,{label:"Score",value:e.score}),Object(U.jsx)(te,{label:"Lines",value:e.lines})]})},re=(n(36),function(e){var t=e.isPaused,n=e.tickInterval,r=Object(a.useState)(null),c=Object(K.a)(r,2),o=c[0],u=c[1],s=Object(d.b)();return Object(a.useEffect)((function(){if(null!=o&&clearInterval(o),t)u(null);else{var e=setInterval((function(){s(B())}),n);u(e)}}),[s,n,t]),Object(U.jsxs)(i.a.Fragment,{children:[Object(U.jsx)("div",{className:"game-view__grid",children:Object(U.jsx)(Q,{})}),Object(U.jsxs)("div",{className:"game-view__side-bar",children:[Object(U.jsx)($,{}),Object(U.jsx)(ee,{}),Object(U.jsx)(ne,{})]})]})}),ce=function(){var e=Object(d.c)((function(e){return e.game.paused})),t=Object(d.c)((function(e){return e.game.tickInterval})),n=Object(d.b)();return Object(U.jsxs)("div",{className:"tetris-page",onKeyDown:function(e){return n(function(e){return function(t,n){var r=H[e.key];r&&t(r())}}(e))},tabIndex:-1,children:[Object(U.jsx)("div",{className:"tetris-page__title",children:"Tetris"}),Object(U.jsx)("div",{className:"tetris-page__content",children:Object(U.jsx)(re,{isPaused:e,tickInterval:t})})]})};var oe=function(){return Object(U.jsxs)("div",{className:"app",children:[Object(U.jsx)(l.a,{basename:"/",children:Object(U.jsx)(j.c,{children:Object(U.jsx)(j.a,{path:"/",element:Object(U.jsx)(ce,{})})})}),Object(U.jsxs)("footer",{className:"app__footer",children:["made with \u2665 by ",Object(U.jsx)("a",{href:"https://github.com/leahferrell/tetris-react",target:"_blank",rel:"noreferrer",children:"leahferrell"})]})]})},ae=Object(v.a)({reducer:{grid:x.reducer,game:E.reducer,current:R.reducer,hold:A.reducer,next:L.reducer}});s.a.render(Object(U.jsx)(d.a,{store:ae,children:Object(U.jsx)(oe,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0b303098.chunk.js.map