(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,a,l){"use strict";l.r(a);var t=l(1),i=l.n(t),s=l(14),o=l.n(s),n=l(170),b=l(173),r=l(20),c=l(21),v=l(24),h=l(22),u=l(23),p=l(172),A=function(e){function a(){return Object(r.a)(this,a),Object(v.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,{inverse:!0},i.a.createElement(p.a.Header,null,i.a.createElement(p.a.Brand,null,i.a.createElement("a",{href:"#home"},"Student's Club"))))}}]),a}(t.Component),d=l(13),m=l(167),k=l(168),f=l(174),E=l(175),y=l(120),S=l(169),j=(l(67),l(171)),O=function(e){function a(e){var l;return Object(r.a)(this,a),(l=Object(v.a)(this,Object(h.a)(a).call(this,e))).handlePostReq=l.handlePostReq.bind(Object(d.a)(Object(d.a)(l))),l.state={},l}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handlePostReq",value:function(e,a,l){e.keeptime=e.keeptime+" "+a,fetch("/",{method:"POST",body:JSON.stringify({item:e,amount:l}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,a=this.props.modalid,l=this.props.popoverlist,t=this.props.count,s=[!1,!1,!1,!1,!1];return l&&a&&("Booked"===l[t].p1&&(s[0]=!0),"Booked"===l[t].p2&&(s[1]=!0),"Booked"===l[t].s1&&(s[2]=!0),"Booked"===l[t].s2&&(s[3]=!0),"Booked"===l[t].s3&&(s[4]=!0)),i.a.createElement(j.a,{show:this.props.show,onHide:this.props.onhide},i.a.createElement(j.a.Header,{closeButton:!0},i.a.createElement(j.a.Title,null,"Book Tables")),i.a.createElement(j.a.Body,null,i.a.createElement("hr",null),i.a.createElement(E.a,{disabled:s[0],bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(a,"Pool Table 1",10)},href:"https://studclubbooking.herokuapp.com/handlebars"},"Pool table 1 "),i.a.createElement(E.a,{disabled:s[1],bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(a,"Pool Table 2",10)},href:"https://studclubbooking.herokuapp.com/handlebars"},"Pool table 2"),i.a.createElement(E.a,{disabled:s[2],bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(a,"Snooker Table 1",20)},href:"https://studclubbooking.herokuapp.com/handlebars"},"Snooker table 1"),i.a.createElement(E.a,{disabled:s[3],bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(a,"Snooker Table 2",20)},href:"https://studclubbooking.herokuapp.com/handlebars"},"Snooker table 2"),i.a.createElement(E.a,{disabled:s[4],bsStyle:"primary",bsSize:"small",onClick:function(){e.handlePostReq(a,"Snooker Table 3",20)},href:"https://studclubbooking.herokuapp.com/handlebars"},"Snooker table 3")),i.a.createElement(j.a.Footer,null,i.a.createElement(E.a,{onClick:this.props.onclick},"Close")))}}]),a}(i.a.Component),T=function(e){function a(e,l){var t;return Object(r.a)(this,a),(t=Object(v.a)(this,Object(h.a)(a).call(this,e,l))).getList=function(){fetch("/purchase").then(function(e){return e.json()}).then(function(e){return t.setState({result:e})})},t.handleShow=t.handleShow.bind(Object(d.a)(Object(d.a)(t))),t.handleClose=t.handleClose.bind(Object(d.a)(Object(d.a)(t))),t.handleButPush=t.handleButPush.bind(Object(d.a)(Object(d.a)(t))),t.colhour=t.colhour.bind(Object(d.a)(Object(d.a)(t))),t.handlePopoverList=t.handlePopoverList.bind(Object(d.a)(Object(d.a)(t))),t.state={show:!1,buttonPush:"invalid",count:0,result:[],time:["10:00-10:30","10:30-11:00","11:00-11:30","11:30-12:00","12:00-12:30","12:30-13:00","13:00-13:30","13:30-14:00","14:00-14:30","14:30-15:00","15:00-15:30","15:30-16:00","16:00-16:30","16:30-17:00","17:00-17:30","17:30-18:00","18:00-18:30","19:00-19:30","19:30-20:00","20:00-20:30","20:30-21:00","21:00-21:30","22:00-22:30","22:30-23:00","23:00-23:30","23:30-24:00"],popoverlist:[{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"},{p1:"Available",p2:"Available",s1:"Available",s2:"Available",s3:"Available"}]},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getList()}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleButPush",value:function(e,a){this.setState({buttonpush:e,count:a})}},{key:"handlePopoverList",value:function(e,a,l){var t=this.state.popoverlist.slice();if(a){for(var i=0;i<a.length;i++)a[i].TableTime===e&&("Pool Table 1"===a[i].TableType&&(t[l].p1="Booked"),"Pool Table 2"===a[i].TableType&&(t[l].p2="Booked"),"Snooker Table 1"===a[i].TableType&&(t[l].s1="Booked"),"Snooker Table 2"===a[i].TableType&&(t[l].s2="Booked"),"Snooker Table 3"===a[i].TableType&&(t[l].s3="Booked"));this.setState({popoverlist:t})}}},{key:"popoverHoverFocus",value:function(e){return i.a.createElement(m.a,{id:"popover-trigger-hover-focus",title:"Table status"},i.a.createElement("strong",null,"P1 -> ",this.state.popoverlist[e].p1)," ",i.a.createElement("br",null),i.a.createElement("strong",null,"P2 -> ",this.state.popoverlist[e].p2)," ",i.a.createElement("br",null),i.a.createElement("strong",null,"S1 -> ",this.state.popoverlist[e].s1)," ",i.a.createElement("br",null),i.a.createElement("strong",null,"S2 -> ",this.state.popoverlist[e].s2)," ",i.a.createElement("br",null),i.a.createElement("strong",null,"S3 -> ",this.state.popoverlist[e].s3)," ",i.a.createElement("br",null))}},{key:"colhour",value:function(e,a,l){var t=this;return i.a.createElement(k.a,{className:"halfhour",xs:4,md:1},i.a.createElement(O,{modalid:this.state.buttonpush,popoverlist:this.state.popoverlist,count:this.state.count,show:this.state.show,onhide:this.handleClose,onclick:this.handleClose}),i.a.createElement(f.a,{overlay:this.popoverHoverFocus(l)},i.a.createElement(E.a,{bsStyle:"primary",bsSize:"small",onMouseEnter:function(){t.handlePopoverList(e,a,l)},onClick:function(){t.handleShow(),t.handleButPush({keeptime:e},l)}},e)))}},{key:"render",value:function(){var e=this.state.result;if(e)var a=e;var l=this.state.time;return i.a.createElement(y.a,null,i.a.createElement("br",null),i.a.createElement(S.a,{className:"timeslot"},this.colhour(l[0],a,0),this.colhour(l[1],a,1),this.colhour(l[2],a,2),this.colhour(l[3],a,3),this.colhour(l[4],a,4),this.colhour(l[5],a,5),this.colhour(l[6],a,6)),i.a.createElement(S.a,{className:"timeslot"},this.colhour(l[7],a,7),this.colhour(l[8],a,8),this.colhour(l[9],a,9),this.colhour(l[10],a,10),this.colhour(l[11],a,11),this.colhour(l[12],a,12),this.colhour(l[13],a,13)),i.a.createElement(S.a,{className:"timeslot"},this.colhour(l[14],a,14),this.colhour(l[15],a,15),this.colhour(l[16],a,16),this.colhour(l[17],a,17),this.colhour(l[18],a,18),this.colhour(l[19],a,19),this.colhour(l[20],a,20)),i.a.createElement(S.a,{className:"timeslot"},this.colhour(l[21],a,21),this.colhour(l[22],a,22),this.colhour(l[23],a,23),this.colhour(l[24],a,24),this.colhour(l[25],a,25)))}}]),a}(t.Component),P=function(e){function a(){return Object(r.a)(this,a),Object(v.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(A,null),i.a.createElement(T,null))}}]),a}(t.Component);l(160),l(162);o.a.render(i.a.createElement(n.a,null,i.a.createElement(b.a,{component:P})),document.getElementById("root"))},67:function(e,a,l){},82:function(e,a,l){e.exports=l(165)}},[[82,2,1]]]);
//# sourceMappingURL=main.9f1d413a.chunk.js.map