webpackJsonp([2],{RPGQ:function(t,e){},WdvJ:function(t,e,i){"use strict";var s=i("woOf"),o=i.n(s),a=i("Dd8w"),n=i.n(a),c=i("r5kb"),r=n()({incomePerEmployee:function(t,e){if(!this.checkRequiredProperty())return this.getWithOrderBy("employeeId",t,e),this},incomePerStore:function(t,e){if(!this.checkRequiredProperty())return this.getWithOrderBy("storeId",t,e),this},getItems:function(t){if(!this.checkRequiredProperty())return this.getAll(t),this},getCustomer:function(t,e,i){var s=this,o=this;if(this.setOrderBy("customerId"),!this.checkRequiredProperty())return this.firebaseDB.collection(this.collection).where("customerId","==",t).get().then(function(t){docs.empty?(i(t),o.noData()):e(t[0].data())}).catch(function(t){i(t),s.error(t)}),this},getAllCustomers:function(t){if(!this.checkRequiredProperty())return this.getAll(t),this},getTicketStatus:function(t,e){this.firebaseDB.collection(this.collection).doc(t).update({status:null})},createItemWithDiscount:function(t,e){this.firebaseDB.collection(this.collection).doc(e).update({discountType:t.type,discountValue:t.value})},createComboDeal:function(t,e){for(var i=arguments.length,s=Array(i>2?i-2:0),o=2;o<i;o++)s[o-2]=arguments[o];var a=new(Function.prototype.bind.apply(ComboModel,[null].concat([e],s)));this.create(a,t)},updateBill:function(t,e){this.firebaseDB.collection(this.collection).doc(t).update(e)},create:function(t,e,i){var s=this,a=o()({},t);return console.log(a),this.firebaseDB.collection(this.collection).add(a).then(function(t){return e(t.id)}).catch(function(t){i(t),s.error(t)}),this},getAll:function(t){var e=this;return this.firebaseDB.collection(this.collection).orderBy(this.orderBy).get().then(function(e){if(!e.empty){var i=[];e.forEach(function(t){i.push(t.data())}),t(i)}}).catch(function(t){return e.error(t)}),this},getWithOrderBy:function(t,e,i){var s=this,o=this;this.minTime&&this.maxTime?this.firebaseDB.collection(this.collection).where(t,"==",e).where("createdTime",">",this.minTime).where("createdTime","<",this.maxTime).orderBy(this.orderBy).get().then(function(t){if(t.empty)o.noData();else{var e=[];t.forEach(function(t){e.push(t.data())}),i(e)}}).catch(function(t){return s.error(t)}):this.firebaseDB.collection(this.collection).where(t,"==",e).orderBy(this.orderBy).get().then(function(t){if(t.empty)o.noData();else{var e=[];t.forEach(function(t){e.push(t.data())}),i(e)}}).catch(function(t){return s.error(t)})}},c.a);e.a=r},s93z:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("WdvJ"),o=i("r5kb"),a=i("N+h9"),n=i("Zrlr"),c=i.n(n),r=i("yp89"),l=function t(e){c()(this,t),this.id=Object(r.a)(),this.name=e.name,this.items=e.items,this.created_time=Date.now(),this.price=+e.price,this.stock=+e.stock,this.discount_percent=+e.discount_percent,this.discount_value=+e.discount_value,this.final_price=(this.price-this.discount_value)*(100-this.discount_percent)/100},u=function t(e){c()(this,t),this.id=Object(r.a)(),this.name=e.name,this.stock=+e.stock,this.price=+e.price,this.discount_percent=+e.discount_percent||0,this.discount_value=+e.discount_value||0,this.final_price=+(this.price-this.discount_value)*(100-this.discount_percent)/100,this.created_time=Date.now()},m={name:"sale",data:function(){return{item:{name:"",price:"",stock:"",discount_percent:"",discount_value:""},users:[],reports:[],items:"",combo:{name:"",stock:"",price:"",items:[],discount_percent:"",discount_value:""}}},methods:{add:function(){var t=new u(this.item);s.a.setFirebaseDB(a.a).setCollection("items").create(t,function(t){return console.log(t)},function(t){return console.log(t)}),this.reset()},reset:function(){this.item={name:"",price:"",stock:"",discount_percent:"",discount_value:""},this.combo={name:"",stock:"",price:"",items:[],discount_percent:"",discount_value:""}},addCombo:function(){var t=new l(this.combo);console.log(t),o.a.setCollection("combo").create(t,function(t){return console.log(t)},function(t){return console.log(t)}),this.reset()}},created:function(){var t=this;o.a.setFirebaseDB(a.a),o.a.setCollection("items").setOrderBy("created_time").getAllRealTime(function(e){t.items=e,console.log(e)})},mounted:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json()}).then(function(e){return t.users=e})}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("div",{staticClass:"tab-content"},[i("div",{staticClass:"container tab-pane active",attrs:{id:"home"}},[i("br"),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("product name")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"text",placeholder:""},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("price - unit")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.price,expression:"item.price"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"number",placeholder:""},domProps:{value:t.item.price},on:{input:function(e){e.target.composing||t.$set(t.item,"price",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("stock")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.stock,expression:"item.stock"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"number",placeholder:""},domProps:{value:t.item.stock},on:{input:function(e){e.target.composing||t.$set(t.item,"stock",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("Discount percent")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.discount_percent,expression:"item.discount_percent"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"number",placeholder:"",min:"0",max:"100"},domProps:{value:t.item.discount_percent},on:{input:function(e){e.target.composing||t.$set(t.item,"discount_percent",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("Discount Value")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.discount_value,expression:"item.discount_value"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"number",placeholder:"",min:"0",max:t.item.price},domProps:{value:t.item.discount_value},on:{input:function(e){e.target.composing||t.$set(t.item,"discount_value",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"singlebutton"}}),t._v(" "),i("div",{staticClass:"col-md-4"},[i("button",{staticClass:"btn btn-success",attrs:{id:"singlebutton",name:"singlebutton"},on:{click:function(e){t.add()}}},[t._v("add")])])])]),t._v(" "),i("div",{staticClass:"container tab-pane fade",attrs:{id:"menu1"}},[i("br"),t._v(" "),i("ul",{staticClass:"list-group"},t._l(t.users,function(e){return i("li",{key:e.id,staticClass:"list-group-item"},[t._v(t._s(e.name))])}))]),t._v(" "),i("div",{staticClass:"container tab-pane fade",attrs:{id:"menu2"}},[i("br"),t._v(" "),i("table",{staticClass:"table"},[t._m(1),t._v(" "),i("tbody",t._l(t.reports,function(e,s){return i("tr",{key:s},[i("th",{attrs:{scope:"row"}},[t._v(t._s(s))]),t._v(" "),i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.title))]),t._v(" "),i("td",[t._v(t._s(e.price))])])}))])]),t._v(" "),i("div",{staticClass:"container tab-pane fade",attrs:{id:"menu3"}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("Name")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.combo.name,expression:"combo.name"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"text",placeholder:""},domProps:{value:t.combo.name},on:{input:function(e){e.target.composing||t.$set(t.combo,"name",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("Price")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.combo.price,expression:"combo.price"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"number",placeholder:""},domProps:{value:t.combo.price},on:{input:function(e){e.target.composing||t.$set(t.combo,"price",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("stock")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.combo.stock,expression:"combo.stock"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"number",placeholder:""},domProps:{value:t.combo.stock},on:{input:function(e){e.target.composing||t.$set(t.combo,"stock",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("Items")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.combo.items,expression:"combo.items"}],staticClass:"form-control custom-select",attrs:{multiple:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.combo,"items",e.target.multiple?i:i[0])}}},t._l(t.items,function(e,s){return i("option",{key:s,domProps:{value:e}},[t._v(t._s(e.name))])}))])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("Discount percent")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.combo.discount_percent,expression:"combo.discount_percent"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"number",placeholder:"",min:"0",max:"100"},domProps:{value:t.combo.discount_percent},on:{input:function(e){e.target.composing||t.$set(t.combo,"discount_percent",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"textinput"}},[t._v("Discount Value")]),t._v(" "),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.combo.discount_value,expression:"combo.discount_value"}],staticClass:"form-control input-md",attrs:{id:"textinput",name:"textinput",type:"number",placeholder:"",min:"0",max:t.combp.price},domProps:{value:t.combo.discount_value},on:{input:function(e){e.target.composing||t.$set(t.combo,"discount_value",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-md-4 control-label",attrs:{for:"singlebutton"}}),t._v(" "),i("div",{staticClass:"col-md-4"},[i("button",{staticClass:"btn btn-success",attrs:{id:"singlebutton",name:"singlebutton"},on:{click:function(e){t.addCombo()}}},[t._v("add")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"nav nav-tabs"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#home"}},[this._v("Home")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu1"}},[this._v("User Info")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu2"}},[this._v("Report")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu3"}},[this._v("Combo")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("First")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Last")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Handle")])])])}]};var p=i("VU/8")(m,d,!1,function(t){i("RPGQ")},null,null);e.default=p.exports}});
//# sourceMappingURL=2.b01c8693d3c86d4cf388.js.map