import{j as n}from"./jsx-runtime-SKoiH9zj.js";import"./index-DJO9vBfz.js";const c=t=>{const r={};return t.forEach((o,e)=>{r[e]?r[e]=Array.isArray(r[e])?[...r[e],o]:[r[e],o]:r[e]=o}),r},d={title:"Utils/convertFormDataToObject",component:c},a=()=>{const t=new FormData;t.append("username","Md Imran"),t.append("email","im@xyz.com"),t.append("age","23");const r=c(t);return n.jsxs("div",{children:[n.jsx("h3",{children:"Test convertFormDataToObject"}),n.jsxs("pre",{children:["Convertion to an Array to show existing FormData:",JSON.stringify(Array.from(t.entries()),null,2)]}),n.jsxs("pre",{children:["Result: ",JSON.stringify(r,null,2)]})]})};var s,m,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const formData = new FormData();
  formData.append('username', 'Md Imran');
  formData.append('email', 'im@xyz.com');
  formData.append('age', '23');
  const result = convertFormDataToObject(formData);
  return <div>\r
      <h3>Test convertFormDataToObject</h3>\r
      <pre>\r
        Convertion to an Array to show existing FormData:\r
        {JSON.stringify(Array.from(formData.entries()), null, 2)}\r
      </pre>\r
      <pre>Result: {JSON.stringify(result, null, 2)}</pre>\r
    </div>;
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,d as default};
