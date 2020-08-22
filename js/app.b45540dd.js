(function(e){function t(t){for(var o,r,a=t[0],l=t[1],d=t[2],u=0,f=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/evernote/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"0fe6":function(e,t,n){},"11b0":function(e,t,n){"use strict";var o=n("5a8d"),i=n.n(o);i.a},"243a":function(e,t,n){"use strict";var o=n("0fe6"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Sidebar",{attrs:{notes:e.notes,selectedNoteIndex:e.selectedNoteIndex},on:{deleteNote:e.deleteNote,selectNote:e.selectNote,newNote:e.newNote}}),n("div",{staticStyle:{width:"100%"}},[null!=e.selectedNote?n("Editor",{attrs:{selectedNote:e.selectedNote,selectedNoteIndex:e.selectedNoteIndex,notes:e.notes},on:{noteUpdate:e.noteUpdate}}):e._e()],1)],1)},s=[],r=(n("99af"),n("4de4"),n("c975"),n("d81d"),n("2909")),a=(n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editorContainer"},[n("i",{staticClass:"fas fa-edit editIcon"}),n("input",{staticClass:"titleInput",attrs:{placeholder:"Note title...",type:"text"},domProps:{value:e.title},on:{change:function(t){return e.updateTitle(t)}}}),n("quill-editor",{attrs:{value:e.text},on:{change:function(t){return e.updateBody(t)}}})],1)},d=[];n("a753"),n("8096"),n("14e1"),n("ac1f"),n("5319");function c(e,t){var n;return function(){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];var r=function(){clearTimeout(n),e.apply(void 0,i)};clearTimeout(n),n=setTimeout(r,t)}}function u(e){return e.replace(/<[^>]*>?/gm,"")}var f=n("953d"),p={name:"Editor",components:{quillEditor:f["quillEditor"]},props:{selectedNote:Object},data:function(){return{text:"",title:"",id:""}},watch:{selectedNote:function(){this.selectedNote.id!==this.id&&(this.text=this.selectedNote.body,this.title=this.selectedNote.title,this.id=this.selectedNote.id)}},methods:{updateBody:function(e){var t=e.html;this.text=t,this.debounce()},update:function(){this.$emit("noteUpdate",{id:this.id,title:this.title,body:this.text})},updateTitle:function(){this.title=event.target.value,this.debounce()}},created:function(){this.debounce=c(this.update,1500)},mounted:function(){this.text=this.selectedNote.body,this.title=this.selectedNote.title,this.id=this.selectedNote.id}},h=p,N=(n("11b0"),n("2877")),v=Object(N["a"])(h,l,d,!1,null,"167fa55d",null),b=v.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebarContainer"},[n("button",{staticClass:"newNoteBtn",attrs:{color:"#29487d"},on:{click:e.newNoteBtnClick}},[e._v(e._s(e.addingNote?"Cancel":"New Note"))]),e.addingNote?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"newNoteInput",attrs:{placeholder:"Enter Note Title",type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("button",{staticClass:"newNoteSubmitBtn",attrs:{width:"100%"},on:{click:e.newNote}},[e._v("Submit Note")])]):e._e(),e._l(e.notes,(function(t,o){return n("div",{key:o},[n("SidebarItem",{attrs:{note:t,index:o,selectedNoteIndex:e.selectedNoteIndex},on:{selectNote:e.selectNote,deleteNote:e.deleteNote}}),n("hr")],1)}))],2)},x=[],y=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex",class:[e.index===e.selectedNoteIndex?"selected":""],on:{click:e.selectNote}},[n("div",{staticClass:"sidebarItem"},[n("div",[e._v(e._s(e.note.title))]),n("div",{staticClass:"secondaryText"},[e._v(e._s(e.subNote)+" ...")])]),n("i",{staticClass:"fas fa-trash-alt deleteIcon",on:{click:function(t){return e.deleteNote(e.note)}}})])}),w=[],g={name:"SidebarItem",props:{index:Number,note:Object,selectedNoteIndex:Number},computed:{subNote:function(){return u(this.note.body.substring(0,30))}},methods:{deleteNote:function(e){window.confirm("Are you sure you want to delete: ".concat(e.title))&&this.$emit("deleteNote",e)},selectNote:function(){this.$emit("selectNote",{note:this.note,index:this.index})}}},I=g,_=(n("243a"),Object(N["a"])(I,y,w,!1,null,"4aa9ade6",null)),O=_.exports,j={name:"Sidebar",components:{SidebarItem:O},props:{notes:Array,selectedNoteIndex:Number},data:function(){return{addingNote:!1,title:null,dense:!0}},methods:{newNoteBtnClick:function(){this.title=null,this.addingNote=!this.addingNote},newNote:function(){this.$emit("newNote",this.title),this.title=null,this.addingNote=!1},selectNote:function(e){this.$emit("selectNote",{note:e.note,index:e.index})},deleteNote:function(e){this.$emit("deleteNote",e)}}},S=j,C=(n("bb29"),Object(N["a"])(S,m,x,!1,null,"6e719a9f",null)),T=C.exports,k=n("8aa50"),$={name:"App",components:{Editor:b,Sidebar:T},data:function(){return{selectedNoteIndex:null,selectedNote:null,notes:null}},methods:{deleteNote:function(e){var t=this.notes.indexOf(e);this.selectedNoteIndex===t?(this.selectedNoteIndex=null,this.selectedNote=null):(this.notes.length>1?this.selectNote({note:this.notes[this.selectedNoteIndex-1],index:this.selectedNoteIndex-1}):this.selectedNoteIndex=null,this.selectedNote=null),k.firestore().collection("notes").doc(e.id).delete()},selectNote:function(e){this.selectedNoteIndex=e.index,this.selectedNote=e.note},newNote:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={title:t,body:""},e.next=3,k.firestore().collection("notes").add({title:n.title,body:n.body,timestamp:k.firestore.FieldValue.serverTimestamp()});case 3:o=e.sent,i=o.id,this.notes=[].concat(Object(r["a"])(this.notes),[n]),s=this.notes.indexOf(this.notes.filter((function(e){return e.id===i}))[0]),this.selectedNote=this.notes[s],this.selectedNoteIndex=s;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),noteUpdate:function(e){k.firestore().collection("notes").doc(e.id).update({title:e.title,body:e.body,timestamp:k.firestore.FieldValue.serverTimestamp()})}},mounted:function(){var e=this;k.firestore().collection("notes").onSnapshot((function(t){var n=t.docs.map((function(e){var t=e.data();return t["id"]=e.id,t}));e.notes=n}))}},E=$,P=(n("034f"),Object(N["a"])(E,i,s,!1,null,null,null)),A=P.exports,B=n("f309");o["a"].use(B["a"]);var U=new B["a"]({}),M={apiKey:"AIzaSyCxASP5plL9tTauvv4Aa1gRjwS1bceIIHY"},R=M;o["a"].config.productionTip=!1;var q=n("8aa50");n("e71f"),q.initializeApp({apiKey:R.apiKey,authDomain:"evernote-f33da.firebaseapp.com",databaseURL:"https://evernote-f33da.firebaseio.com",projectId:"evernote-f33da",storageBucket:"evernote-f33da.appspot.com",messagingSenderId:"398872285362",appId:"1:398872285362:web:917da7ec287894624d39ab"}),new o["a"]({vuetify:U,render:function(e){return e(A)}}).$mount("#app")},"5a8d":function(e,t,n){},"85ec":function(e,t,n){},"96ba":function(e,t,n){},bb29:function(e,t,n){"use strict";var o=n("96ba"),i=n.n(o);i.a}});
//# sourceMappingURL=app.b45540dd.js.map