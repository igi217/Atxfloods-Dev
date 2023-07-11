"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6746],{6746:function(e,n,a){a.r(n);var t=a(1413),r=a(74165),s=a(15861),l=a(37762),o=a(70885),i=a(42982),c=a(72791),u=a(78559),d=a(78983),m=a(16871),h=a(43504),p=a(83442),x=a(9085),f=a(10491),j=a(4828),v=a(80184),g=function(e,n){var a=n.map((function(n){return n[e]})),t=Math.min.apply(Math,(0,i.Z)(a)),r=Math.max.apply(Math,(0,i.Z)(a));"lon"===e&&r-t>180&&(a=a.map((function(e){return e<r-180?e+360:e})),t=Math.min.apply(Math,(0,i.Z)(a)),r=Math.max.apply(Math,(0,i.Z)(a)));var s=(t+r)/2;return"lon"===e&&s>180&&(s-=360),s};n.default=function(){var e=(0,m.TH)(),n=(0,f.L)((function(e){return e.user})),a=c.useRef(15),i=c.useState({lat:e.state.lat,lon:e.state.lon}),_=(0,o.Z)(i,2),y=_[0],b=_[1],N=(0,m.s0)(),Z=c.useState([]),L=(0,o.Z)(Z,2),w=L[0],C=L[1],F=c.useState(e.state.jurisdiction),k=(0,o.Z)(F,2),S=k[0],A=k[1],O=c.useState(e.state.display_status),q=(0,o.Z)(O,2),E=q[0],T=q[1],I=c.useState({}),M=(0,o.Z)(I,2),z=M[0],R=M[1],V=function(e){var n,a=new FormData(e),t={},r=(0,l.Z)(a);try{for(r.s();!(n=r.n()).done;){var s=n.value;t[s[0]]=s[1]}}catch(o){r.e(o)}finally{r.f()}return t},P=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(a){var t,s,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),(t=V(a.target)).lat=parseFloat(t.lat),t.lon=parseFloat(t.lon),console.log(t),s=p.ZP.updateCameras+e.state.id,n.next=8,fetch(s,{method:"POST",headers:{Authorization:(0,p.kE)(),"Content-Type":"application/json"},body:JSON.stringify(t)});case 8:return l=n.sent,n.next=11,l.json();case 11:200===n.sent.status&&(N("/cameras"),(0,p.hK)("success","Record Inserted Successfully"));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();c.useEffect((function(){var e,r=(e=[{lat:n.max_lat,lon:n.max_lon},{lat:n.min_lat,lon:n.min_lon}],{lat:g("lat",e),lon:g("lon",e)}),s=u.map("map").setView([y.lat||r.lat,y.lon||r.lon],a.current);s.on("zoomend",(function(e){a.current=s.getZoom()})),u.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en",{}).addTo(s);var l=u.marker([y.lat||r.lat,y.lon||r.lon],{draggable:!0,icon:u.icon({iconUrl:j,iconSize:[50,50],iconAnchor:[0,0]})}).on("dragend",(function(){var e=l.getLatLng(),a=e.lat,r=e.lng;a>n.max_lat||a<n.min_lat||r>n.max_lon||r<n.min_lon?b((0,t.Z)({},y)):b({lat:a.toFixed(4),lon:r.toFixed(4)})})).addTo(s);return function(){s.remove()}}),[y,n,z]),c.useEffect((function(){(0,s.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p.ZP.jurisdictionList+"?per_page=100&page_number=1",{method:"GET",headers:{Authorization:(0,p.kE)(),"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,C(a.data);case 7:case"end":return e.stop()}}),e)})))()}),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x.Ix,{position:"top-right",theme:"colored",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,v.jsx)(d.xH,{className:"my-2",children:(0,v.jsxs)(d.sl,{children:[(0,v.jsx)("h5",{className:"d-inline text-uppercase",children:"Update Cameras"}),(0,v.jsx)(h.rU,{to:"/cameras",className:"btn text-uppercase btn-sm px-4  btn-primary float-right",children:"Back"})]})}),(0,v.jsx)(d.xH,{children:(0,v.jsx)(d.sl,{children:(0,v.jsxs)(d.lx,{onSubmit:P,children:[(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(d.L8,{htmlFor:"name",children:["Jurisdiction",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(d.LX,{className:"form-control",value:S,disabled:w.length<2,onChange:function(e){return A(e.target.value)},name:"jurisdiction",required:!0,children:w.map((function(e,n){return(0,v.jsx)("option",{value:e.short_name,children:e.name},n)}))})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(d.L8,{htmlFor:"name",children:["Display Name",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(d.jO,{type:"text",placeholder:"Enter Your Name",name:"name",required:!0,defaultValue:e.state.name})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(d.L8,{htmlFor:"address",children:["Address",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(d.PB,{rows:"3",name:"address",required:!0,defaultValue:e.state.address})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(d.L8,{htmlFor:"name",children:["Camera Id",(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(d.jO,{type:"text",placeholder:"Unique Camera Id",name:"unique_id",required:!0,defaultValue:e.state.unique_id})]}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)(d.kV,{size:"xl",className:"form-control",name:"display_status",defaultValue:E,defaultChecked:E,label:"Display on Frontend",onChange:function(){T(!E),R({})}})}),(0,v.jsxs)("div",{className:E?null:"d-none",children:[(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(d.L8,{htmlFor:"lat",children:["Latitude",(0,v.jsxs)("span",{children:[" (Allowed Range : > ",n.min_lat," & < ",n.max_lat,")"]}),(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(d.jO,{type:"number",placeholder:"Enter Latitude",step:1e-8,min:n.min_lat,max:n.max_lat,name:"lat",onChange:function(e){return b((function(n){return(0,t.Z)((0,t.Z)({},n),{},{lat:e.target.value})}))},value:y.lat,required:E}),(0,v.jsxs)("span",{className:"error_text",children:["It should be a valid  Latitude (Allowed Range : > ",n.min_lat," & < ",n.max_lat,")"]})]}),(0,v.jsxs)("div",{className:"mb-3",children:[(0,v.jsxs)(d.L8,{htmlFor:"lon",children:["Longitude",(0,v.jsxs)("span",{children:[" (Allowed Range : > ",n.min_lon," & < ",n.max_lon,")"]}),(0,v.jsx)("span",{className:"text-danger",children:"*"})]}),(0,v.jsx)(d.jO,{type:"number",placeholder:"Enter Longitude",step:1e-8,max:n.max_lon,min:n.min_lon,name:"lon",onChange:function(e){return b((function(n){return(0,t.Z)((0,t.Z)({},n),{},{lon:e.target.value})}))},value:y.lon,required:E}),(0,v.jsxs)("span",{className:"error_text",children:["It should be a valid Longitude (Allowed Range : > ",n.min_lon," & < ",n.max_lon,")"]})]}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)("div",{id:"map"})})]}),(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)(d.u5,{type:"submit",color:"primary",className:"px-4",children:"Update"})})]})})})]})}},37762:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(40181);function r(e,n){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=(0,t.Z)(e))||n&&e&&"number"===typeof e.length){a&&(e=a);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){i=!0,l=e},f:function(){try{o||null==a.return||a.return()}finally{if(i)throw l}}}}}}]);
//# sourceMappingURL=6746.04cbf04a.chunk.js.map