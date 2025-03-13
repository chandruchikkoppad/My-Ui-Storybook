import{j as e}from"./jsx-runtime-SKoiH9zj.js";import"./index-DJO9vBfz.js";const i=t=>{const a=t.getDate().toString().padStart(2,"0"),d=(t.getMonth()+1).toString().padStart(2,"0"),c=t.getFullYear();return`${a}/${d}/${c}`},l={title:"Utils/formatDate",component:i},r=()=>{const t=new Date(2025,0,5),a=i(t);return e.jsxs("div",{children:[e.jsx("h3",{children:"Test formatDate Utility"}),e.jsxs("pre",{children:["Original Date :",JSON.stringify(t,null,2)]}),e.jsxs("pre",{children:["Formatted Date (DD/MM/YYYY): ",a]})]})};var n,o,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const date = new Date(2025, 0, 5);
  const formattedDate = formatDate(date);
  return <div>\r
      <h3>Test formatDate Utility</h3>\r
      <pre>Original Date :{JSON.stringify(date, null, 2)}</pre>\r
      <pre>Formatted Date (DD/MM/YYYY): {formattedDate}</pre>\r
    </div>;
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const p=["Default"];export{r as Default,p as __namedExportsOrder,l as default};
