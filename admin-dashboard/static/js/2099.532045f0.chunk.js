"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2099],{42099:function(e,s,a){a.r(s);var n=a(74165),t=a(15861),r=a(70885),i=a(72791),l=a(78983),c=a(16871),d=a(83442),m=a(9085),o=a(80184);s.default=function(){var e=i.useState({}),s=(0,r.Z)(e,2),a=s[0],u=s[1],x=i.useState([]),h=(0,r.Z)(x,2),j=h[0],p=h[1],b=(0,c.s0)(),f=(0,c.TH)(),g=i.useState([]),_=(0,r.Z)(g,2),v=_[0],N=_[1],y=i.useState(f.state.jurisdiction),L=(0,r.Z)(y,2),k=L[0],O=L[1],E=i.useState({max_lat:f.state.max_lat,min_lat:f.state.min_lat,max_lon:f.state.max_lon,min_lon:f.state.min_lon}),w=(0,r.Z)(E,2),C=w[0],F=w[1],R=function(e){var s={};return new FormData(e).forEach((function(e,a){if(Object.prototype.hasOwnProperty.call(s,a)){var n=s[a];Array.isArray(n)||(n=s[a]=[n]),n.push(e)}else s[a]=e})),s},Z=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(s){var a,t,r,i,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),(a=R(s.target)).is_active="true"===a.is_active,t=d.ZP.subAdminEdit+f.state.id,e.next=6,fetch(t,{method:"POST",headers:{Authorization:(0,d.kE)(),"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:return r=e.sent,e.next=9,r.json();case 9:200===(i=e.sent).status&&(s.target.reset(),b("/subadmin/list"),"_token"in i&&((l=new Date).setTime(l.getTime()+31536e6),document.cookie="_token=".concat(i._token,";expires=").concat(l.toUTCString(),';path="/"')),(0,d.hK)("success","Record Updated Successfully"));case 11:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),T=function(e,s){var a=document.querySelectorAll('[name="user_permissions"]');"all"!==s?a.forEach((function(a){a.checked=!1,s.includes(a.value)&&(a.checked=e.target.checked)})):a.forEach((function(s){s.checked=e.target.checked}))};return i.useEffect((function(){(0,t.Z)((0,n.Z)().mark((function e(){var s,a,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=d.ZP.userPermissions,e.next=3,fetch(s,{method:"GET",headers:{Authorization:(0,d.kE)(),"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,u(t.data),p(t.roles);case 9:case"end":return e.stop()}}),e)})))(),(0,t.Z)((0,n.Z)().mark((function e(){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.ZP.jurisdictionList+"?per_page=100&page_number=1",{method:"GET",headers:{Authorization:(0,d.kE)(),"Content-Type":"application/json"}});case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,N(a.data);case 7:case"end":return e.stop()}}),e)})))()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,o.jsx)(l.xH,{className:"my-2",children:(0,o.jsx)(l.sl,{children:(0,o.jsx)("h5",{className:"d-inline text-uppercase",children:"Sub-Admin Edit"})})}),(0,o.jsx)(l.xH,{children:(0,o.jsx)(l.sl,{children:(0,o.jsxs)(l.lx,{onSubmit:Z,children:[(0,o.jsxs)(l.rb,{children:[(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["First Name",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"text",defaultValue:f.state.first_name,placeholder:"Enter First Name",name:"first_name",required:!0})]})}),(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Last Name",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"text",defaultValue:f.state.last_name,placeholder:"Enter Last Name",name:"last_name",required:!0})]})})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["User Name",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"text",defaultValue:f.state.username,placeholder:"Enter User Name",name:"username",required:!0})]})}),(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsx)(l.L8,{htmlFor:"name",children:"Change Password"}),(0,o.jsx)(l.jO,{type:"password",placeholder:"Enter Password",name:"password"})]})})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Email",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"email",defaultValue:f.state.email,placeholder:"Enter Your Name",name:"email",required:!0})]})}),(0,o.jsx)(l.b7,{md:6,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Contact No",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.jO,{type:"tel",defaultValue:f.state.phone,placeholder:"Enter Contact Number",name:"phone",required:!0})]})})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"address",children:["Mailing Address",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsx)(l.PB,{rows:"3",defaultValue:f.state.address,name:"address",required:!0})]}),(0,o.jsx)("div",{className:"mb-3",children:(0,o.jsx)(l.b7,{md:12,children:(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"name",children:["Jurisdiction",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.LX,{onChange:function(e){var s=e.target.value,a=v.filter((function(e){return e.short_name===s}));a.length<=0||(O(s),F(a[0]))},name:"jurisdiction",value:k,required:!0,children:[(0,o.jsx)("option",{value:"",hidden:!0,children:"--Select Jurisdiction--"}),v.map((function(e,s){return(0,o.jsx)("option",{value:e.short_name,children:e.name},s)}))]})]})})}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"lat",children:["Latitude Range ",(0,o.jsx)("span",{children:"(Latitude Range : > 25.8419 & < 36.5008)"}),(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsxs)(l.b7,{xs:!0,children:[(0,o.jsx)(l.jO,{type:"number",step:1e-8,value:C.min_lat,readOnly:!0,placeholder:"Min Latitude Range",name:"min_lat","aria-label":"Min Latitude Range",min:25.8419,max:36.5008,required:!0}),(0,o.jsx)("span",{className:"error_text",children:"It should be a valid Texus Latitude (Range : > 25.8419 & < 36.5008)"})]}),(0,o.jsxs)(l.b7,{xs:!0,children:[(0,o.jsx)(l.jO,{type:"number",step:1e-8,value:C.max_lat,readOnly:!0,placeholder:"Max Latitude Range",name:"max_lat","aria-label":"Max Latitude Range",min:25.8419,max:36.5008,required:!0}),(0,o.jsx)("span",{className:"error_text",children:"It should be a valid Texus Latitude (Range : > 25.8419 & < 36.5008)"})]})]})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"lon",children:["Longitude Range",(0,o.jsx)("span",{children:" (Longitude Range : > -106.6168 & < -93.5074)"}),(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsxs)(l.b7,{xs:!0,children:[(0,o.jsx)(l.jO,{type:"number",step:1e-8,value:C.min_lon,readOnly:!0,placeholder:"Min Longitude Range",name:"min_lon","aria-label":"Min Longitude Range",max:-93.5074,min:-106.6168,required:!0}),(0,o.jsx)("span",{className:"error_text",children:"It should be a valid Texus Longitude (Range : > -106.6168 & < -93.5074)"})]}),(0,o.jsxs)(l.b7,{xs:!0,children:[(0,o.jsx)(l.jO,{type:"number",step:1e-8,value:C.max_lon,readOnly:!0,placeholder:"Max Longitude Range",name:"max_lon","aria-label":"Max Longitude Range",max:-93.5074,min:-106.6168,required:!0}),(0,o.jsx)("span",{className:"error_text",children:"It should be a valid Texus Longitude (Range : > -106.6168 & < -93.5074)"})]})]})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"status",children:["Status",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.LX,{className:"form-control","aria-label":"Default select example",name:"is_active",required:!0,defaultValue:f.state.status,children:[(0,o.jsx)("option",{value:!0,children:"Active"}),(0,o.jsx)("option",{value:!1,children:"Inactive"})]})]}),(0,o.jsxs)("div",{className:"mb-3",children:[(0,o.jsxs)(l.L8,{htmlFor:"lon",children:["User Permissions",(0,o.jsx)("span",{className:"text-danger",children:"*"})]}),(0,o.jsxs)(l.rb,{children:[(0,o.jsx)(l.b7,{md:3,className:"my-3 fw-bold",onChange:function(e){return T(e,"all")},children:(0,o.jsx)(l.EC,{type:"radio",label:"All Privileges",name:"default_permissions"})}),j.map((function(e,s){return(0,o.jsx)(l.b7,{md:3,className:"my-3 fw-bold",onChange:function(s){return T(s,e.permissions)},children:(0,o.jsx)(l.EC,{type:"radio",label:e.name,name:"default_permissions"})},s)}))]}),(0,o.jsx)(l.rb,{children:Object.keys(a).map((function(e,s){return(0,o.jsxs)(l.b7,{md:12,className:"my-1 perm-box-main",style:{textTransform:"capitalize"},children:[(0,o.jsx)("h6",{className:"my-2",children:e}),(0,o.jsx)(l.rb,{children:Object.keys(a[e]).map((function(s,n){return(0,o.jsx)(l.b7,{md:3,className:"permission-box",children:(0,o.jsx)(l.EC,{type:"checkbox",value:s,label:a[e][s],name:"user_permissions",defaultChecked:f.state.user_permissions.includes(s)})},n)}))}),(0,o.jsxs)("span",{className:"error_text",children:[(0,o.jsx)("i",{className:"fa-solid fa-exclamation-circle me-2"}),"You must check first permission to make other permissions work properly"]})]},s)}))})]}),(0,o.jsx)("div",{className:"mb-3",children:(0,o.jsx)(l.u5,{type:"submit",color:"primary",className:"px-4",children:"Update"})})]})})})]})}}}]);
//# sourceMappingURL=2099.532045f0.chunk.js.map