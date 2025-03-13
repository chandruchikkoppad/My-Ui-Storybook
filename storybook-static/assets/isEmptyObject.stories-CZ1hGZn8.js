import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as o}from"./index-DJO9vBfz.js";const n=t=>t&&Object.keys(t).length===0&&t.constructor===Object,l={title:"Utils/isEmptyObject",component:n,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>{const[t,a]=o.useState({}),[r,m]=o.useState(n(t)),O=()=>{const c=r?{key:"value"}:{};a(c),m(n(c))};return e.jsxs("div",{children:[e.jsx("h3",{children:"isEmptyObject Utility"}),e.jsxs("p",{children:["Current Object: ",JSON.stringify(t)]}),e.jsxs("p",{children:["Is Empty: ",r?"Yes":"No"]}),e.jsx("button",{onClick:O,children:"Toggle Object"})]})}};var i,p,j;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [testObject, setTestObject] = useState<Record<string, any>>({});
    const [isEmpty, setIsEmpty] = useState(isEmptyObject(testObject));
    const toggleObject = () => {
      const newObject = isEmpty ? {
        key: 'value'
      } : {};
      setTestObject(newObject);
      setIsEmpty(isEmptyObject(newObject));
    };
    return <div>\r
        <h3>isEmptyObject Utility</h3>\r
        <p>Current Object: {JSON.stringify(testObject)}</p>\r
        <p>Is Empty: {isEmpty ? 'Yes' : 'No'}</p>\r
        <button onClick={toggleObject}>Toggle Object</button>\r
      </div>;
  }
}`,...(j=(p=s.parameters)==null?void 0:p.docs)==null?void 0:j.source}}};const u=["Primary"];export{s as Primary,u as __namedExportsOrder,l as default};
