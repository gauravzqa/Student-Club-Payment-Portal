(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(14),s=a.n(o),r=a(170),i=a(173),c=a(20),u=a(21),h=a(24),b=a(22),p=a(23),m=a(172),d=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,{inverse:!0},l.a.createElement(m.a.Header,null,l.a.createElement(m.a.Brand,null,l.a.createElement("a",{href:"#home"},"Student's Club"))))}}]),t}(n.Component),v=a(13),f=a(167),k=a(168),E=a(174),j=a(175),y=a(120),O=a(169),S=(a(67),a(171)),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).handlePostReq=a.handlePostReq.bind(Object(v.a)(Object(v.a)(a))),a.state={payment_amount:0,table_name:" "},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handlePostReq",value:function(e,t){this.setState({table_name:t}),console.log(e),e.keeptime=e.keeptime+" "+t,fetch("/",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.props.modalid,a=this.state;a.payment_amount,a.table_name;return l.a.createElement(S.a,{show:this.props.show,onHide:this.props.onhide},l.a.createElement(S.a.Header,{closeButton:!0},l.a.createElement(S.a.Title,null,"Book Tables")),l.a.createElement(S.a.Body,null,l.a.createElement("hr",null),l.a.createElement(j.a,{bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(t,"Pool Table 1")},href:"https://studclubbooking.herokuapp.com/handlebars"},"Pool table 1 "),l.a.createElement(j.a,{bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(t,"Pool Table 2")},href:"https://studclubbooking.herokuapp.com/handlebars"},"Pool table 2"),l.a.createElement(j.a,{bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(t,"Snooker Table 1")},href:"https://studclubbooking.herokuapp.com/handlebars"},"Snooker table 1"),l.a.createElement(j.a,{bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(t,"Snooker Table 2")},href:"https://studclubbooking.herokuapp.com/handlebars"},"Snooker table 2"),l.a.createElement(j.a,{bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(t,"Snooker Table 3")},href:"https://studclubbooking.herokuapp.com/handlebars"},"Snooker table 3")),l.a.createElement(S.a.Footer,null,l.a.createElement(j.a,{onClick:this.props.onclick},"Close")))}}]),t}(l.a.Component),g=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e,a))).getList=function(){fetch("/purchase").then(function(e){return e.json()}).then(function(e){n.setState({list:JSON.stringify(e)})})},n.handleShow=n.handleShow.bind(Object(v.a)(Object(v.a)(n))),n.handleClose=n.handleClose.bind(Object(v.a)(Object(v.a)(n))),n.handleButPush=n.handleButPush.bind(Object(v.a)(Object(v.a)(n))),n.colhour=n.colhour.bind(Object(v.a)(Object(v.a)(n))),n.handlePopoverList=n.handlePopoverList.bind(Object(v.a)(Object(v.a)(n))),n.state={show:!1,buttonPush:"invalid",list:[],time:["10:00-10:30","10:30-11:00","11:00-11:30","11:30-12:00","12:00-12:30","12:30-13:00","13:00-13:30","13:30-14:00","14:00-14:30","14:30-15:00","15:00-15:30","15:30-16:00","16:00-16:30","16:30-17:00","17:00-17:30","17:30-18:00","18:00-18:30","19:00-19:30","19:30-20:00","20:00-20:30","20:30-21:00","21:00-21:30","22:00-22:30","22:30-23:00","23:00-23:30","23:30-24:00"],popoverlist:[{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"}]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getList()}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleButPush",value:function(e){this.setState({buttonpush:e})}},{key:"handlePopoverList",value:function(e,t,a){var n=this.state.popoverlist.slice();e===t&&this.setState({popoverlist:n})}},{key:"popoverHoverFocus",value:function(e){return l.a.createElement(f.a,{id:"popover-trigger-hover-focus",title:"Table status"},l.a.createElement("strong",null,"P1 -> ",this.state.popoverlist[e].p1)," ",l.a.createElement("br",null),l.a.createElement("strong",null,"P2 -> ",this.state.popoverlist[e].p2)," ",l.a.createElement("br",null),l.a.createElement("strong",null,"S1 -> ",this.state.popoverlist[e].s1)," ",l.a.createElement("br",null),l.a.createElement("strong",null,"S2 -> ",this.state.popoverlist[e].s2)," ",l.a.createElement("br",null),l.a.createElement("strong",null,"S3 -> ",this.state.popoverlist[e].s3)," ",l.a.createElement("br",null))}},{key:"colhour",value:function(e,t,a){var n=this;return l.a.createElement(k.a,{className:"halfhour",xs:4,md:1},l.a.createElement(P,{modalid:this.state.buttonpush,show:this.state.show,onhide:this.handleClose,onclick:this.handleClose}),l.a.createElement(E.a,{overlay:this.popoverHoverFocus(a)},l.a.createElement(j.a,{bsStyle:"primary",bsSize:"small",onMouseEnter:function(){n.handlePopoverList(e,t,a)},onClick:function(){n.handleShow(),n.handleButPush({keeptime:e})}},e)))}},{key:"render",value:function(){var e=this.state.list;console.log(e);var t=this.state.time;return l.a.createElement(y.a,null,l.a.createElement("br",null),l.a.createElement(O.a,{className:"timeslot"},this.colhour(t[0],e,0),this.colhour(t[1],e,1),e))}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(g,null))}}]),t}(n.Component);a(160),a(162);s.a.render(l.a.createElement(r.a,null,l.a.createElement(i.a,{component:C})),document.getElementById("root"))},67:function(e,t,a){},82:function(e,t,a){e.exports=a(165)}},[[82,2,1]]]);
//# sourceMappingURL=main.ba74def4.chunk.js.map