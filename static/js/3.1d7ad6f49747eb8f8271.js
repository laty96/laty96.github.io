webpackJsonp([3],{l9FN:function(t,e){},o9cx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),i=a.n(s),n=a("NYxO"),r=a("PJh5"),o=a.n(r),l=a("lHQJ"),c={name:"Profile",data:function(){return{profileBanner:"",profileIcon:"",files:{},moment:o.a,warning:""}},computed:i()({},Object(n.c)({userInfo:function(t){return t.auth.userInfo}})),methods:{imageUpload:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.setImage(e[0],t.target.name)},dropImage:function(t,e){t.preventDefault();var a=t.dataTransfer.files;this.setImage(a[0],e)},dragEnter:function(t){t.target.classList.add("border-dark")},dragLeave:function(t){t.target.classList.remove("border-dark")},setImage:function(t,e){if(t.size>5242880)this.warning="Exceed size limit. Maximum 5mb image";else{this.warning="";var a=new FileReader,s=this;a.onload=function(t){s[e]=t.target.result},a.readAsDataURL(t),this.files[e]=t}},saveSettings:function(){this.userInfo._id&&(this.profileIcon&&this.$store.dispatch(l.E,{file:this.files.profileIcon,path:this.userInfo._id+"/profileIcon."+this.files.profileIcon.name.split(".").pop(),userId:this.userInfo.id,type:"imgURL"}),this.profileBanner&&this.$store.dispatch(l.E,{file:this.files.profileBanner,path:this.userInfo._id+"/profileBanner."+this.files.profileBanner.name.split(".").pop(),userId:this.userInfo.id,type:"profileBanner"}))}},beforeCreate:function(){console.log(Date.now())},mounted:function(){console.log(Date.now())}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5 pt-2 row"},[a("div",{staticClass:"container-fluid pt-5 bg-light mb-5 border-bottom",staticStyle:{"background-size":"cover"},style:{backgroundImage:"url("+(""!=t.profileBanner?t.profileBanner:t.userInfo.profileBanner)+")"}},[t.profileBanner?a("button",{staticClass:"close",on:{click:function(e){t.profileBanner=""}}},[t._v("\n\t\t\t×\n\t\t")]):t._e(),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane active",attrs:{id:"home"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("code",{staticClass:"font-weight-bold"},[t._v("PROFILE INFORMATION")]),t._v(" "),a("hr"),t._v(" "),a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usr"}},[t._v("Username:")]),t._v(" "),a("small",{staticClass:"text-muted d-block"},[t._v("Name show on posts and comments")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.name,expression:"userInfo.name"}],staticClass:"form-control",attrs:{type:"text",id:"usr",disabled:""},domProps:{value:t.userInfo.name},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),a("small",{staticClass:"text-muted d-block"},[t._v("Email address use to login")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.email,expression:"userInfo.email"}],staticClass:"form-control",attrs:{type:"text",id:"email",disabled:""},domProps:{value:t.userInfo.email},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"desc"}},[t._v("Description:")]),t._v(" "),a("small",{staticClass:"text-muted d-block"},[t._v("Description about yourself")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.desc,expression:"userInfo.desc"}],staticClass:"form-control",attrs:{type:"text",id:"desc",rows:"5",placeholder:"Write something..."},domProps:{value:t.userInfo.desc},on:{input:function(e){e.target.composing||t.$set(t.userInfo,"desc",e.target.value)}}})])]),t._v(" "),a("code",{staticClass:"font-weight-bold"},[t._v("IMAGES")]),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"strong"},[t._v("Avatar and banner (Maximum: 5mb)")]),t._v(" "),t.warning?a("h5",{staticClass:"text-danger"},[t._v(t._s(t.warning))]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("label",{staticClass:"bg-light rounded p-2 border col-md-3 m-2",attrs:{id:"avatarDropzone"},on:{drop:function(e){e.preventDefault(),t.dropImage(e,"profileIcon")},dragover:function(t){t.preventDefault()},dragenter:function(e){t.dragEnter(e)},dragleave:function(e){t.dragLeave(e)}}},[a("div",{staticClass:"mx-auto",staticStyle:{width:"45px",margin:"0 auto"}},[a("svg",{attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("g",[a("polygon",{attrs:{fill:"inherit",opacity:"0",points:"0.610673352 20 20.625 20 20.625 0 0.610673352 0"}}),t._v(" "),a("path",{attrs:{d:"M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",fill:"inherit"}})])])]),t._v(" "),a("div",{staticClass:"small text-center px-3"},[t._v("\n\t\t\t\t\t\t\t\t\tDrag and Drop or Upload Avatar Image\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("div",{staticStyle:{display:"none"}},[a("input",{attrs:{name:"profileIcon",type:"file",accept:"image/x-png,image/jpeg"},on:{change:function(e){t.imageUpload(e)}}})])]),t._v(" "),a("label",{staticClass:"bg-light rounded p-2 border col-md-6 m-2",attrs:{id:"bannerDropzone",name:"profileBanner"},on:{drop:function(e){e.preventDefault(),t.dropImage(e,"profileBanner")},dragover:function(t){t.preventDefault()},dragenter:function(e){t.dragEnter(e)},dragleave:function(e){t.dragLeave(e)}}},[a("div",{staticClass:"mx-auto",staticStyle:{width:"45px",margin:"0 auto"}},[a("svg",{attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("g",[a("polygon",{attrs:{fill:"inherit",opacity:"0",points:"0.610673352 20 20.625 20 20.625 0 0.610673352 0"}}),t._v(" "),a("path",{attrs:{d:"M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",fill:"inherit"}})])])]),t._v(" "),a("div",{staticClass:"small text-center"},[t._v("\n\t\t\t\t\t\t\t\t\tDrag and Drop or Upload Banner Image\n\t\t\t\t\t\t\t\t")]),t._v(" "),a("div",{staticStyle:{display:"none"}},[a("input",{attrs:{name:"profileBanner",type:"file",accept:"image/x-png,image/jpeg"},on:{change:function(e){t.imageUpload(e)}}})])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"d-flex"},[a("button",{staticClass:"ml-auto btn btn-outline-primary",on:{click:function(e){t.saveSettings()}}},[t._v("\n\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t")])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header bg-light border border-muted",staticStyle:{"background-size":"cover",height:"115px"},style:{backgroundImage:"url("+(""!=t.profileBanner?t.profileBanner:t.userInfo.profileBanner)+")"}},[t.profileBanner?a("button",{staticClass:"close bg-white",attrs:{title:"Undo banner"},on:{click:function(e){t.profileBanner=""}}},[t._v("\n\t\t\t\t\t\t\t\t\t×\n\t\t\t\t\t\t\t\t")]):t._e(),t._v(" "),a("div",{staticClass:"mt-4"},[t.profileIcon?a("img",{staticClass:"rounded profile-icon",staticStyle:{cursor:"pointer"},attrs:{src:t.profileIcon,alt:"newAva",title:"Undo avatar"},on:{click:function(e){t.profileIcon=""}}}):a("img",{staticClass:"rounded profile-icon",attrs:{src:t.userInfo.imgURL,alt:"ava"}})])]),t._v(" "),a("div",{staticClass:"card-body d-flex"},[a("h6",{staticClass:"mr-auto"},[a("code",[t._v("Username")]),t._v(" "),a("h6",{},[t._v(t._s(t.userInfo.name))])]),t._v(" "),a("h6",{},[a("code",[t._v("Join day")]),t._v(" "),a("h6",{},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.moment(t.userInfo.createdTime).format("LL"))+"\n\t\t\t\t\t\t\t\t\t")])])])])])])]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"menu1"}},[a("div",{staticClass:"row"},[a("div",[a("ul",{staticClass:"list-group list-group-flush"},t._l(t.userInfo.hideList,function(e){return a("li",{directives:[{name:"post",rawName:"v-post"}],key:e,staticClass:"list-group-item"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t")])}))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h3",{staticClass:"font-weight-bold"},[e("i",{staticClass:"fas fa-cogs"}),this._v(" User settings\n\t\t\t")]),this._v(" "),e("ul",{staticClass:"container nav nav-tabs font-weight-bold"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link border-0 active text-muted",attrs:{"data-toggle":"tab",href:"#home"}},[this._v("Profile")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link border-0 text-muted",attrs:{"data-toggle":"tab",href:"#menu1"}},[this._v("Block")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link border-0 text-muted",attrs:{"data-toggle":"tab",href:"#menu2"}},[this._v("Menu 2")])])])])}]};var v=a("VU/8")(c,d,!1,function(t){a("l9FN")},"data-v-c3093614",null);e.default=v.exports}});
//# sourceMappingURL=3.1d7ad6f49747eb8f8271.js.map