import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{f as t}from"./ffid-Ct76gIPn.js";import{r as c}from"./index-DJO9vBfz.js";const f={title:"Utils/ffid",component:t,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>{const[s,o]=c.useState(t()),i=()=>{o(t())};return e.jsxs("div",{children:[e.jsx("h3",{children:"Generated Unique ID"}),e.jsx("p",{children:s}),e.jsx("button",{onClick:i,children:"Generate New ID"})]})}};var n,a,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [generatedId, setGeneratedId] = useState(ffid());
    const regenerateId = () => {
      setGeneratedId(ffid());
    };
    return <div>\r
        <h3>Generated Unique ID</h3>\r
        <p>{generatedId}</p>\r
        <button onClick={regenerateId}>Generate New ID</button>\r
      </div>;
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const I=["Primary"];export{r as Primary,I as __namedExportsOrder,f as default};
