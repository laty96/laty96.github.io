webpackJsonp([5],{"43Gv":function(t,e){},JpU2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("r5kb"),i=a("N+h9"),_={name:"finance",data:function(){return{bill:[],importBill:[],detail:"",income:0,outcome:0}},created:function(){var t=this;s.a.setFirebaseDB(i.a),s.a.setCollection("bills").setOrderBy("created_time").getAllRealTime(function(e){t.bill=e,t.income=t.bill.reduce(function(t,e){return t+ +e.total},0)}),s.a.setCollection("ImportBill").setOrderBy("created_time").getAllRealTime(function(e){t.importBill=e,t.outcome=t.importBill.reduce(function(t,e){return t+ +e.total},0)})}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"tab-content mt-1"},[a("div",{staticClass:"container tab-pane active",attrs:{id:"menu1"}},[a("table",{staticClass:"table"},[t._m(1),t._v(" "),a("tbody",t._l(t.bill,function(e,s){return a("tr",{key:s},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.total))]),t._v(" "),a("td",[t._v(t._s(new Date(e.completed_time).toLocaleDateString()))]),t._v(" "),a("td",[t._v(t._s(e.is_done?"Done":"Pending"))]),t._v(" "),a("td")])}))]),t._v(" "),a("h2",[t._v("Total: "+t._s(t.income))])]),t._v(" "),a("div",{staticClass:"container tab-pane",attrs:{id:"menu2"}},[a("table",{staticClass:"table"},[t._m(2),t._v(" "),a("tbody",t._l(t.importBill,function(e,s){return a("tr",{key:s},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.total))]),t._v(" "),a("td",[t._v(t._s(new Date(e.completed_time).toLocaleDateString()))]),t._v(" "),a("td",[t._v(t._s(e.is_done?"Done":"Pending"))]),t._v(" "),a("td")])}))]),t._v(" "),a("h2",[t._v("Total: "+t._s(t.outcome))]),t._v(" "),t.detail?a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",[t._v("Bill ID: "+t._s(t.detail.id))])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",[t._v("Name: "+t._s(t.detail.name))]),t._v(" "),a("p",[t._v("Date: "+t._s(t.detail.created_time))]),t._v(" "),a("p",[t._v("Employee: "+t._s(t.detail.employee_id))]),t._v(" "),a("p",[t._v("Status: "+t._s(t.detail.is_done?"Done":"Pending"))]),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"collapse",attrs:{id:"collapseExample"}},t._l(t.detail.items,function(e,s){return a("div",{key:s,staticClass:"card card-body m-1"},[a("p",[t._v("ID: "+t._s(e.id))]),t._v(" "),a("p",[t._v("Name: "+t._s(e.name))]),t._v(" "),a("p",[t._v("Price: "+t._s(e.price))]),t._v(" "),a("p",[t._v("Discount percent: "+t._s(e.discount_percent)+"%")]),t._v(" "),a("p",[t._v("Discount value: "+t._s(e.discount_value))]),t._v(" "),a("p",[t._v("Quantity: "+t._s(e.quantity))]),t._v(" "),a("p",[t._v("Stock: "+t._s(e.stock))]),t._v(" "),a("p",[t._v("Added Time: "+t._s(e.created_time))]),t._v(" "),a("p",[t._v("Final price: "+t._s(e.final_price))])])}))])]):t._e()])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"nav nav-tabs"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#menu1"}},[this._v("Income")])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu2"}},[this._v("Outcome")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Total")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Completed time")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),a("th",{attrs:{scope:"col"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Total")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Completed time")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Status")]),t._v(" "),a("th",{attrs:{scope:"col"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"btn btn-primary",attrs:{"data-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[this._v("Items")])])}]};var c=a("VU/8")(_,l,!1,function(t){a("43Gv")},null,null);e.default=c.exports}});
//# sourceMappingURL=5.1e9f839d174a62738c7a.js.map