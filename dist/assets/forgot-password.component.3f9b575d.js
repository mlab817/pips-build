import{a9 as s,r as i,b as m,j as e,ab as d,B as u,b3 as c,m as o}from"./vendor.4b18af18.js";import{A as h}from"./index.08dd6703.js";const b=()=>{const[r]=s.useForm(),[l,t]=i.exports.useState(!1);return m(s,{form:r,layout:"vertical",onFinish:async n=>{t(!0);try{const a=await h.forgotPassword(n);o.success(a.status),t(!1)}catch(a){o.error(a.message),t(!1)}},children:[e(s.Item,{children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one"}),e(s.Item,{name:"email",label:"Email Address",rules:[{required:!0}],children:e(d,{type:"email"})}),e(s.Item,{children:e(u,{loading:l,htmlType:"submit",type:"primary",style:{width:"100%"},children:"Send Password Reset Link"})}),e(s.Item,{noStyle:!0,children:e(c,{to:"/auth",children:"Back to Login"})})]})};export{b as default};
