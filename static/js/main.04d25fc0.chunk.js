(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/arista.800607ba.png"},function(e,t,n){e.exports=n.p+"static/media/nielsen.289cc871.png"},function(e,t,n){e.exports=n.p+"static/media/wish.6109535a.png"},function(e,t,n){e.exports=n.p+"static/media/EzMHP.c373e696.png"},,,,function(e,t,n){e.exports=n.p+"static/media/portrait.4b835f73.png"},,function(e,t,n){e.exports=n.p+"static/media/backend.99cad522.svg"},function(e,t,n){e.exports=n.p+"static/media/tools.377132cc.svg"},function(e,t,n){e.exports=n.p+"static/media/frontend.b5b384f8.svg"},function(e,t,n){e.exports=n(52)},,,,,function(e,t,n){},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),s=n.n(r),o=(n(26),n(1)),c=n(2),l=n(4),m=n(3),u=n(5),p=n(6),d=n(8),h=n.n(d),f=(n(35),n(37),n(39),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={text:"> ",hideCursor:!1},n.nextLine=n.nextLine.bind(Object(p.a)(Object(p.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"nextLine",value:function(){var e=this;setTimeout(function(){e.setState({hideCursor:!0}),e.props.onFinish()},1e3)}},{key:"type",value:function(e,t,n){var a=this,i="> ",r=0,s=0;e.split("").forEach(function(o){setTimeout(function(){s++,i+=o,a.setState({text:i}),s===e.length&&a.props.isFirst&&a.nextLine()},n+(r+=t))})}},{key:"componentDidMount",value:function(){this.type(this.props.text,this.props.speed,this.props.delay)}},{key:"render",value:function(){return i.a.createElement("div",{className:"typewriter"},this.state.text,this.state.hideCursor?null:i.a.createElement("span",null,"\xa0"))}}]),t}(a.Component));f.defaultProps={text:"Type something. Anything.",speed:60,delay:700};var b=f,g=n(16),v=n.n(g),y=n(17),E=n.n(y);var k=function(){return i.a.createElement(E.a,{options:{strings:["Software Developer","4th year BCS @UBC"],autoStart:!0,loop:!0,deleteSpeed:50}})},j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={nextLine:!1},n.signalTextFinish=n.signalTextFinish.bind(Object(p.a)(Object(p.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"signalTextFinish",value:function(){this.setState({nextLine:!0})}},{key:"render",value:function(){return i.a.createElement("div",{className:"banner"},i.a.createElement("div",{className:"image-links"},i.a.createElement("img",{className:"portrait",src:v.a,alt:"portrait"})),i.a.createElement("div",{className:"name"},i.a.createElement("p",null,"Jerome Ju ",i.a.createElement("br",null),i.a.createElement(k,null)),i.a.createElement("div",{className:"typed-text"},i.a.createElement(b,{text:"A second-degree CS student with a previous business background",onFinish:this.signalTextFinish,isFirst:!0}),this.state.nextLine?i.a.createElement(b,{text:"Seeking fulltime opportunities as an software engineer."}):i.a.createElement("div",{className:"space-holder"}))),i.a.createElement("div",{className:"description"}))}}]),t}(a.Component),O=(n(42),n(44),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"experience-item"},i.a.createElement("img",{className:"experience-image",src:this.props.imageUrl,alt:""}),i.a.createElement("div",{className:"experience-background"}),i.a.createElement("div",{className:"experience-content"},i.a.createElement("img",{className:"image-small",src:this.props.smallUrl,alt:""}),i.a.createElement("h3",{className:"position"},this.props.position),i.a.createElement("p",{className:"date"},this.props.date),i.a.createElement("ul",null,this.renderDescription())))}},{key:"renderDescription",value:function(){return this.props.description.map(function(e){return i.a.createElement("li",{key:e,className:"description"},e)})}}]),t}(a.Component)),x=n(9),w=n.n(x),N=n(10),S=n.n(N),C=n(11),M=n.n(C),U=n(12),D=n.n(U),A=[{company:"Arista Networks",position:"Software Engineer Coop",date:"Incoming Sep 2021",smallUrl:w.a,imageUrl:w.a,description:["Software Engineer at CloudVision team"]},{company:"Wish",position:"Software Engineer Intern",date:"April 2021 - Present",smallUrl:M.a,imageUrl:M.a,description:["Working as a backend developer at Wish marketplace team, tackling logistics-related issues in python","Built a cam monitoring module with custom websocket subprotocol to capture live stream from a third-party application for inventory verification, reverting from binary message and upload videos to AWS S3","Optimized a mixed-size packaging algorithm to reduce domestic logistics costs by an average of 1.33%"]},{company:"EzMHP.com",position:"Software Development Engineer Intern",date:"Oct 2020 - Mar 2021",smallUrl:D.a,imageUrl:D.a,description:["Maintained a website deployed on Amazon AWS EC2 and RDS for a mobile home park management company located in Vancouver, BC, with business covering 3 states in U.S. for 1800+ tenants","Modified scripts for automating 16000+ monthly billings to tenants and bi-weekly report to mobile home park managers in both python and JavaScript","Marked tenants by a 1:5:1 scale based on late payments, default rates in mssql for administrative needs","Refactored the v2.0 backend urls to comply with the RESTful design principles"]},{company:"Nielsen",position:"Marketing Data Analyst Intern",date:"Dec 2018 - May 2019",smallUrl:S.a,imageUrl:S.a,description:["Managed marketing data extraction and maintenance with MySQL for a vehicle lubricant market leader; efforts contributed to more than 65% of data preparation and ad-hoc analysis including outlier identification and parameter adjustment for client service."]}],F=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"experience"},i.a.createElement("h1",null,"Professional Experience"),this.renderExperience())}},{key:"renderExperience",value:function(){return A.map(function(e){return i.a.createElement(O,Object.assign({key:e.company},e))})}}]),t}(a.Component),L=(n(46),n(48),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"skill-item"},i.a.createElement("div",{className:"layer-container"},i.a.createElement("img",{className:"logo",src:this.props.logo,alt:""}),i.a.createElement("h3",{className:"layer"},this.props.layer)),i.a.createElement("div",{className:"each-skill"},this.props.skill.map(function(e){return i.a.createElement("p",{key:e},e)})))}}]),t}(a.Component)),T=n(18),J=n.n(T),B=n(19),W=n.n(B),I=n(20),P=n.n(I),z=[{layer:"Back-end",skill:["Python Tornado","Java Spring","Node.js/ Express","MySQL","MongoDB"],logo:J.a},{layer:"Front-end",skill:["React","Angular","Vue","JavaScript"],logo:P.a},{layer:"Tools",skill:["Git","AWS","Linux","Docker","Kubernetes"],logo:W.a}],R=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"skills"},i.a.createElement("h1",null,"Skills"),i.a.createElement("div",{className:"skills-content"},this.renderSkills()))}},{key:"renderSkills",value:function(){return z.map(function(e,t){return i.a.createElement(L,Object.assign({key:t},e))})}}]),t}(a.Component),V=(n(50),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",null,"Contact Info: jeromeqju@gmai.com"),i.a.createElement("div",null,"Jerome Ju \xa9 ",(new Date).getFullYear()))}}]),t}(a.Component)),q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleEsc=n.handleEsc.bind(Object(p.a)(Object(p.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleEsc",value:function(e){27===e.keyCode&&(window.location.href="#home")}},{key:"render",value:function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(j,null),i.a.createElement("br",null),i.a.createElement(h.a,{id:"experience"},i.a.createElement(F,null)),i.a.createElement(h.a,{id:"skills"},i.a.createElement(R,null)),i.a.createElement(V,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,2,1]]]);
//# sourceMappingURL=main.04d25fc0.chunk.js.map