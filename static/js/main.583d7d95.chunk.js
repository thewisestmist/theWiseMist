(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(47)},28:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),o=a.n(s),i=a(21),l=a(2),m=a(3),c=a(5),u=a(4),d=a(6),p=(a(28),a(8)),h=a.n(p),v=function(){return r.a.createElement("div",{className:"mistContainer"},r.a.createElement("img",{src:h.a,className:"wiseMist mist1",alt:"The Wise Mist"}),r.a.createElement("img",{src:h.a,className:"wiseMist mist2",alt:"The Wise Mist"}),r.a.createElement("img",{src:h.a,className:"wiseMist mist3",alt:"The Wise Mist"}))},w=function(e){return r.a.createElement("div",{className:"startModal"},r.a.createElement("h1",null,"The Wise Mist"),r.a.createElement("div",{className:"mistModalWrap"},r.a.createElement(v,null)),r.a.createElement("h3",null,"Welcome, traveler."),r.a.createElement("p",null,"Many come to seek The Wise Mist\u2019s counsel, but it lives on the far side of a maze! If you make it through the labyrinth, you too can hear its wisdom. Before you begin, we will need your name, and one single word you may ask of The Wise Mist."),r.a.createElement("div",{className:"startModalInputContainer"},r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("label",{htmlFor:"userName"},"Enter your name:"),r.a.createElement("input",{onChange:e.handleChange,type:"text",name:"userName",id:"userName",maxLength:"30"})),r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("label",{htmlFor:"wisdomKeyword"},"Enter a word:"),r.a.createElement("input",{onChange:e.handleChange,type:"text",name:"wisdomKeyword",id:"wisdomKeyword"})),e.inputError||e.wisdomError?r.a.createElement("div",{className:"errorMessage"},e.inputError?r.a.createElement("p",{className:"emptyInputError"},"Please enter a name and a keyword."):"",e.wisdomError?r.a.createElement("p",{className:"wisdomError"},"Please enter only one keyword."):""):""),r.a.createElement("button",{className:"beginButton",onClick:function(){return e.hideModal()}},"Begin your journey!"))},E=function(e){return r.a.createElement("div",{className:"winModal"},r.a.createElement("h2",null,"Well done!"),r.a.createElement("div",{className:"mistModalWrap"},r.a.createElement(v,null)),r.a.createElement("p",null,"Congratulations, ",e.userName,"! Here is your wisdom from The Wise Mist:"),r.a.createElement("p",null,e.wisdomMessage),r.a.createElement("button",{className:"beginButton",onClick:function(){return e.resetGame()}},"Play again?"))},f=function(e){var t=e.modalVisible?"modal show":"modal hide",a="";return"start"===e.modalToShow?a=r.a.createElement(w,{hideModal:e.hideModal,handleChange:e.handleChange,inputError:e.inputError,wisdomError:e.wisdomError}):"win"===e.modalToShow&&(a=r.a.createElement(E,{hideModal:e.hideModal,userName:e.userName,wisdomMessage:e.wisdomMessage,resetGame:e.resetGame})),r.a.createElement("div",{className:t},a)},y=a(7),g=a.n(y),b=a(9),M=a(10),N=a.n(M),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).fetchQuery=function(){a.getWisdom().then(function(e){void 0!==e?a.props.getWisdom(e):a.randomWisdom()})},a.randomWisdom=Object(b.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://api.adviceslip.com/advice");case 3:t=e.sent,a.props.getWisdom(t.data.slip.advice),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),a.getWisdom=Object(b.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://api.adviceslip.com/advice/search/".concat(a.props.userQuery));case 3:return t=e.sent,e.abrupt("return",t.data.slips[0].advice);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getWisdom(this.fetchQuery())}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),z=function(e){var t={gridColumnStart:"".concat(e.gridX+1),gridColumnEnd:"span 1",gridRowStart:"".concat(e.gridY+1),gridRowEnd:"span 1"};return r.a.createElement("div",{className:"tile ".concat(function(e){switch(e){case 0:return"empty";case-1:return"filled";case-2:return"cage";case 2:case 3:return"wormhole";case 9:return"mist";default:return null}}(e.fillValue)),style:t},9===e.fillValue?r.a.createElement(v,null):"")},C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).makeMaze=function(){return a.props.maze.map(function(e,t){return e.map(function(e,n){return r.a.createElement(z,{fillValue:a.props.maze[t][n],gridX:n,gridY:t,key:"".concat(t,"-").concat(n)})})})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mazeBoard"},this.makeMaze())}}]),t}(r.a.Component),X=[[0,0,0,-1,-1,0,0,0,0,0,0,-1,0,-1,-1,-1,0,0,0,0,9],[-1,-1,0,-1,0,0,-1,-1,0,-1,-1,-1,0,0,0,-1,0,-1,-1,0,-1],[0,0,0,-1,0,-1,-1,-1,0,0,0,0,0,-1,0,-1,0,0,-1,0,-1],[0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1],[0,0,0,-1,0,-1,0,0,0,0,3,0,0,0,0,-1,0,0,0,0,0],[-1,-1,0,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,-1,0,0,0,-1,0,0,0,0,0,-1,0,-1,0,0,0],[0,-1,-1,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,0,-1,0,-1,-1],[0,0,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,0,-1,0,0,0],[-1,-1,0,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,-1,0,0,0,-1,0],[0,-1,-1,-1,0,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,0],[0,0,0,-1,0,0,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,0],[-1,-1,0,-1,0,-1,-1,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0],[0,0,0,-1,0,0,0,-1,0,0,0,-1,0,0,0,-1,0,0,0,0,0],[0,-1,-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,-1],[0,0,0,-1,0,-1,0,0,0,-1,0,0,0,0,0,-1,0,0,0,0,0],[-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,0,0,-1,2,-1,0,-2,0,-2,0,-1,0,-1,2,-1,0],[0,-1,-1,-1,-1,-1,0,-1,-1,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0],[0,0,0,0,0,0,0,0,0,0,0,-1,0,-1,0,0,0,-1,0,0,0]],Y=[[0,0,0,-1,-1,0,0,0,0,0,0,-1,0,-1,-1,-1,0,0,0,0,9],[-1,-1,0,-1,0,0,-1,-1,0,-1,-1,-1,0,0,0,-1,0,-1,-1,0,-1],[0,0,0,-1,0,-1,-1,-1,0,0,0,0,0,-1,0,-1,0,0,-1,0,-1],[0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1],[0,0,0,-1,0,-1,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0],[-1,-1,0,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,-1,0,0,0,-1,0,0,0,0,0,-1,0,-1,0,0,0],[0,-1,-1,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,0,-1,0,-1,-1],[0,0,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,0,-1,0,0,0],[-1,-1,0,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,-1,-1,-1,0,-1,0,0,0,0,0,-1,0,0,0,-1,0],[0,-1,-1,-1,0,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,0],[0,0,0,-1,0,0,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,0],[-1,-1,0,-1,0,-1,-1,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0],[0,0,0,-1,0,0,0,-1,0,0,0,-1,0,0,0,-1,0,0,0,0,0],[0,-1,-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,-1],[0,0,0,-1,0,-1,0,0,0,-1,0,0,0,0,0,-1,0,0,0,0,0],[-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,0,0,-1,2,-1,0,0,0,0,0,-1,0,-1,2,-1,0],[0,-1,-1,-1,-1,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0],[0,0,0,0,0,0,0,0,0,0,0,-1,0,-1,0,0,0,-1,0,0,0]],S=[[0,0,0,-1,-1,0,0,0,0,0,0,-1,0,-1,-1,-1,0,0,0,0,9],[-1,-1,0,0,0,0,-1,-1,0,-1,-1,-1,0,0,0,-1,0,-1,-1,0,-1],[0,0,0,-1,0,-1,-1,-1,0,0,0,0,0,-1,0,-1,0,0,-1,0,-1],[0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,0,-1,-1,-1],[0,0,0,-1,0,-1,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0],[-1,-1,0,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,-1,0,0,0,-1,0,0,0,0,0,-1,0,-1,0,0,0],[0,-1,-1,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,0,-1,0,-1,-1],[0,0,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,0,-1,0,0,0],[-1,-1,0,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,-1,0,0,0,-1,0],[0,-1,-1,-1,0,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,0],[0,0,0,-1,0,0,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,0],[-1,-1,0,-1,0,-1,-1,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0],[0,0,0,-1,0,0,0,-1,0,0,0,-1,0,0,0,-1,0,0,0,0,0],[0,-1,-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,0,-1,0,-1,-1,-1,-1],[0,0,0,-1,0,-1,0,0,0,-1,0,0,0,0,0,-1,0,0,0,0,0],[-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,0,0,-1,2,-1,0,-2,0,-2,0,-1,0,-1,2,-1,0],[0,-1,-1,-1,-1,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0],[0,0,0,0,0,0,0,0,0,0,0,-1,0,-1,0,0,0,-1,0,0,0]],W=[[0,0,0,-1,-1,0,0,0,0,0,0,-1,0,-1,-1,-1,0,0,0,0,9],[-1,-1,0,-1,0,0,-1,-1,0,-1,-1,-1,0,0,0,-1,0,-1,-1,0,-1],[0,0,0,-1,0,-1,-1,-1,0,0,0,0,0,-1,0,-1,0,0,-1,0,-1],[0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1],[0,0,0,-1,0,-1,0,0,0,0,3,0,0,0,0,-1,0,0,0,0,0],[-1,-1,0,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,-1,0,0,0,-1,0,0,0,0,0,-1,0,-1,0,0,0],[0,-1,-1,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,0,-1,0,-1,-1],[0,0,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,0,-1,0,0,0],[-1,-1,0,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,-1,-1,-1,0,-1,0,0,0,0,0,-1,0,0,0,-1,0],[0,-1,-1,-1,0,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,0],[0,0,0,-1,0,0,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,0],[-1,-1,0,-1,0,-1,-1,-1,0,-1,0,-1,0,-1,-1,-1,-1,-1,-1,-1,0],[0,0,0,-1,0,0,0,-1,0,0,0,-1,0,0,0,-1,0,0,0,0,0],[0,-1,-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,-1],[0,0,0,-1,0,-1,0,0,0,-1,0,0,0,0,0,-1,0,0,0,0,0],[-1,-1,0,-1,0,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,0],[0,0,0,-1,0,0,0,-1,2,-1,0,0,0,0,0,-1,0,-1,2,-1,0],[0,-1,-1,-1,-1,-1,0,-1,-1,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0],[0,0,0,0,0,-1,0,0,0,0,0,-1,0,-1,0,0,0,-1,0,0,0]],A=function(e){return r.a.createElement("div",{className:"tile avatar"})},j=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"button",id:"listener",tabIndex:"-1",className:"visuallyHidden",onKeyDown:e.onKeyDown}),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{id:"Up",className:"navButton up",onClick:function(t){e.updateUserPosition("up",t)}},r.a.createElement("i",{className:"fas fa-angle-up","aria-hidden":"true"},r.a.createElement("span",{className:"visuallyHidden"},"up")))),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{id:"Left",className:"navButton left",onClick:function(t){e.updateUserPosition("left",t)}},r.a.createElement("i",{className:"fas fa-angle-left","aria-hidden":"true"},r.a.createElement("span",{className:"visuallyHidden"},"left"))),r.a.createElement("button",{id:"Right",className:"navButton right",onClick:function(t){e.updateUserPosition("right",t)}},r.a.createElement("i",{className:"fas fa-angle-right","aria-hidden":"true"},r.a.createElement("span",{className:"visuallyHidden"},"right")))),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{id:"Down",className:"navButton down",onClick:function(t){e.updateUserPosition("down",t)}},r.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"},r.a.createElement("span",{className:"visuallyHidden"},"down"))))))},P=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).alternator=function(){setInterval(function(){setTimeout(function(){e.setState({mazeMap:W})},0),setTimeout(function(){e.setState({mazeMap:X})},1e3),setTimeout(function(){e.setState({mazeMap:Y})},2e3),setTimeout(function(){e.setState({mazeMap:S})},3e3)},4e3)},e.showModal=function(t){e.setState({modalVisible:!0,modalToShow:t})},e.hideModal=function(){if(e.state.userName&&e.state.wisdomKeyword){e.state.wisdomKeyword.match(/^\b[a-zA-Z]+\b$/)?e.setState({modalVisible:!1}):e.setState({wisdomError:!0,inputError:!1})}else e.setState({inputError:!0,wisdomError:!1})},e.handleKeyPress=function(t){!e.state.modalVisible&&e.state.keysActive&&("ArrowUp"===t.key?e.updateUserPosition("up",t):"ArrowRight"===t.key?e.updateUserPosition("right",t):"ArrowDown"===t.key?e.updateUserPosition("down",t):"ArrowLeft"===t.key&&e.updateUserPosition("left",t))},e.updateUserPosition=function(t,a){switch(a.preventDefault(),t){case"up":e.state.userY>0&&e.state.mazeMap[e.state.userY-1][e.state.userX]>=0&&e.setState({userY:e.state.userY-1,mazeY:e.state.mazeY+1,keysActive:!1,avatarDirection:"66%"},e.moveAvatar);break;case"right":e.state.userX<e.state.mazeMap[0].length-1&&e.state.mazeMap[e.state.userY][e.state.userX+1]>=0&&e.setState({userX:e.state.userX+1,mazeX:e.state.mazeX+1,keysActive:!1,avatarDirection:"33%"},e.moveAvatar);break;case"down":e.state.userY<e.state.mazeMap.length-1&&e.state.mazeMap[e.state.userY+1][e.state.userX]>=0&&e.setState({userY:e.state.userY+1,mazeY:e.state.mazeY-1,keysActive:!1,avatarDirection:"0%"},e.moveAvatar);break;case"left":e.state.userX>0&&e.state.mazeMap[e.state.userY][e.state.userX-1]>=0&&e.setState({userX:e.state.userX-1,mazeX:e.state.mazeX-1,keysActive:!1,avatarDirection:"100%"},e.moveAvatar)}},e.moveAvatar=function(){document.documentElement.style.setProperty("--mazeX",e.state.mazeX),document.documentElement.style.setProperty("--mazeY",e.state.mazeY),document.documentElement.style.setProperty("--avatarDirection",e.state.avatarDirection),e.checkCurrentPosition()},e.checkCurrentPosition=function(){9===e.state.mazeMap[e.state.userY][e.state.userX]?e.showModal("win"):2===e.state.mazeMap[e.state.userY][e.state.userX]?e.setState({userX:0,userY:e.state.mazeMap.length-1,mazeX:8,mazeY:8},e.moveAvatar):3===e.state.mazeMap[e.state.userY][e.state.userX]&&e.setState({userX:0,userY:0,mazeX:8,mazeY:28},e.moveAvatar)},e.resetGame=function(){e.setState({userX:0,userY:e.state.mazeMap.length-1,userName:"",wisdomKeyword:"",mazeX:8,mazeY:8,modalToShow:"start",inputError:!1,wisdomError:!1},e.moveAvatar)},e.getWisdom=function(t){e.setState({wisdomObject:t})},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.state={modalVisible:!0,modalToShow:"",wisdomObject:{},userName:"",wisdomKeyword:"",userX:0,userY:W.length-1,mazeX:8,mazeY:8,keysActive:!0,wisdomError:!1,inputError:!1,avatarDirection:"0%",mazeMap:W},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.moveAvatar(),this.alternator(),this.showModal("start"),window.addEventListener("keydown",this.handleKeyPress),document.addEventListener("transitionend",function(){e.setState({keysActive:!0})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",null),document.removeEventListener("transitionend")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{modalVisible:this.state.modalVisible,hideModal:this.hideModal,modalToShow:this.state.modalToShow,handleChange:this.handleChange,userName:this.state.userName,wisdomMessage:this.state.wisdomObject,resetGame:this.resetGame,inputError:this.state.inputError,wisdomError:this.state.wisdomError}),this.state.modalVisible?r.a.createElement(r.a.Fragment,null):r.a.createElement(k,{userQuery:this.state.wisdomKeyword,getWisdom:this.getWisdom}),r.a.createElement("main",{className:"AppContainer"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"mazeWindow"},r.a.createElement(C,{maze:this.state.mazeMap}),r.a.createElement(A,null)),r.a.createElement(j,{updateUserPosition:this.updateUserPosition,onKeyDown:this.handleKeyPress}),r.a.createElement("p",{className:"instruction"},"Use arrow keys to navigate."),r.a.createElement("button",{onClick:function(){e.showModal("win")}},"test win modal"))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/wiseMist.39c58337.png"}},[[22,1,2]]]);
//# sourceMappingURL=main.583d7d95.chunk.js.map