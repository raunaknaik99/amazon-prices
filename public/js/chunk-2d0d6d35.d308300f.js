(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,s,r){"use strict";r.r(s);var a=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("v-container",{staticClass:"fill-height",staticStyle:{"max-width":"700px"},attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[e.$store.state.error?r("v-alert",{attrs:{type:"error"}},[e._v(e._s(e.$store.state.error))]):e._e(),r("v-card",{staticClass:"elevation-12"},[r("v-card-title",{staticClass:"display-2 justify-center"},[e._v("REGISTER")]),r("v-card-text",[r("v-form",{ref:"form"},[r("v-text-field",{attrs:{label:"Email","prepend-icon":"mdi-email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),r("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-circle",rules:e.usernameRules,required:""},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),r("v-text-field",{attrs:{type:e.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",rules:e.passwordRules,required:""},on:{"click:append":function(s){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),r("v-text-field",{attrs:{type:e.showConfirmPassword?"text":"password",label:"Confirm Password","prepend-icon":"mdi-lock-check","append-icon":e.showConfirmPassword?"mdi-eye":"mdi-eye-off",rules:e.confirmPasswordRules,required:""},on:{"click:append":function(s){e.showConfirmPassword=!e.showConfirmPassword}},model:{value:e.confirmPassword,callback:function(s){e.confirmPassword=s},expression:"confirmPassword"}})],1)],1),r("v-divider"),r("v-card-actions",[r("v-btn",{staticClass:"mt-2",attrs:{block:"",color:"info"},on:{click:e.validateUser}},[e._v("Register")])],1),r("v-list-item",{attrs:{to:"/login"}},[e._v("Already have an account? Sign in")])],1)],1)],1)],1)},t=[],o=(r("ac1f"),r("5319"),r("5530")),i=r("2f62"),n={data:function(){return{email:"",username:"",password:"",confirmPassword:"",showPassword:!1,showConfirmPassword:!1,emailRules:[],usernameRules:[],passwordRules:[],confirmPasswordRules:[]}},watch:{email:function(){this.emailRules=[]},username:function(){this.usernameRules=[]},password:function(){this.passwordRules=[]},confirmPassword:function(){this.confirmPasswordRules=[]}},methods:Object(o["a"])({validateUser:function(){var e=this;this.emailRules=[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],this.usernameRules=[function(e){return!!e||"Username is required"},function(e){return!/\s/.test(e)||"Username cannot contain spaces"}],this.passwordRules=[function(e){return!!e||"Password is required"},function(e){return e.length>5||"Password length has to be greater than 5"}],this.confirmPasswordRules=[function(s){return s===e.password||"Passwords must match"}],setTimeout((function(){e.$refs.form.validate()&&e.registerUser()}),1)}},Object(i["b"])(["register"]),{registerUser:function(){var e=this,s={email:this.email,username:this.username,password:this.password,confirmPassword:this.confirmPassword};this.register(s).then((function(s){s.data.success&&(console.log("registered"),e.$router.replace({name:"Login"}))})).catch((function(e){return console.log(e)}))}})},l=n,c=r("2877"),d=r("6544"),u=r.n(d),m=r("0798"),f=r("8336"),w=r("b0af"),p=r("99d9"),h=r("62ad"),v=r("a523"),P=r("ce7e"),b=r("4bd4"),R=r("da13"),g=r("0fd9"),x=r("8654"),C=Object(c["a"])(l,a,t,!1,null,null,null);s["default"]=C.exports;u()(C,{VAlert:m["a"],VBtn:f["a"],VCard:w["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:h["a"],VContainer:v["a"],VDivider:P["a"],VForm:b["a"],VListItem:R["a"],VRow:g["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=chunk-2d0d6d35.d308300f.js.map