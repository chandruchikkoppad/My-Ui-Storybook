import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as m}from"./index-DJO9vBfz.js";function w(d,v,a,h,c,s="children"){function u(o){for(let n=0;n<o.length;n++){const i=o[n];if(i&&i[v]===a){const r=[...o];return c==="replace"?r[n]=h:r.splice(c==="above"?n:n+1,0,h),{updatedArray:r}}if(i&&i[s]&&Array.isArray(i[s])){const r=u(i[s]);if(r)return{updatedArray:o.map((t,l)=>l===n?{...t,[s]:r.updatedArray}:t)}}}return null}return u(d)}const P={title:"Utils/findAndInsert",component:w},E=[{id:1,name:"Object 1"},{id:2,name:"Object 2",children:[{id:3,name:"Child 1",children:[{id:5,name:"SubChild 1"}]},{id:4,name:"Child 2"}]}],b=()=>{const[d,v]=m.useState(E),[a,h]=m.useState(null),[c,s]=m.useState("New Object"),[u,o]=m.useState("below"),n=()=>{if(a!==null){const t={id:Date.now(),name:c},l=w(d,"id",a,t,u,"children");l?v(l.updatedArray):alert("Item not found in nested structure")}},r=((t,l="")=>{const I=[];function f(N,y){N.forEach(p=>{I.push({id:p.id,label:`${y}${p.name} (ID: ${p.id})`}),p.children&&f(p.children,`${y}- `)})}return f(t,l),I})(d);return e.jsxs("div",{children:[e.jsx("h1",{children:"Interactive Playground for findAndInsert"}),e.jsx("label",{htmlFor:"targetId",children:"Select Object:"}),e.jsxs("select",{id:"targetId",onChange:t=>h(Number(t.target.value)),value:a!==null?a:"",children:[e.jsx("option",{value:"",disabled:!0,children:"Select an object"}),r.map(t=>e.jsx("option",{value:t.id,children:t.label},t.id))]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"newEntryName",children:"New Entry Name:"}),e.jsx("input",{type:"text",id:"newEntryName",value:c,onChange:t=>s(t.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"insertPosition",children:"Insert Position:"}),e.jsxs("select",{id:"insertPosition",value:u,onChange:t=>o(t.target.value),children:[e.jsx("option",{value:"above",children:"Above"}),e.jsx("option",{value:"below",children:"Below"}),e.jsx("option",{value:"replace",children:"Replace"})]})]}),e.jsx("button",{onClick:n,children:"Insert Entry"}),e.jsx("h2",{children:"Current Data:"}),e.jsx("pre",{children:JSON.stringify(d,null,2)})]})};var g,j,x;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [data, setData] = useState<AnyObject[]>(initialData);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [newEntryName, setNewEntryName] = useState<string>('New Object');
  const [insertPosition, setInsertPosition] = useState<'above' | 'below' | 'replace'>('below');
  const handleInsert = () => {
    if (selectedId !== null) {
      const newEntry = {
        id: Date.now(),
        name: newEntryName
      };
      const result = findAndInsert(data, 'id', selectedId, newEntry, insertPosition, 'children');
      if (result) {
        setData(result.updatedArray);
      } else {
        alert('Item not found in nested structure');
      }
    }
  };
  const generateOptions = (data: AnyObject[], prefix = ''): {
    id: number;
    label: string;
  }[] => {
    const options: {
      id: number;
      label: string;
    }[] = [];
    function recurse(items: AnyObject[], levelPrefix: string) {
      items.forEach(item => {
        options.push({
          id: item.id,
          label: \`\${levelPrefix}\${item.name} (ID: \${item.id})\`
        });
        if (item.children) recurse(item.children, \`\${levelPrefix}- \`);
      });
    }
    recurse(data, prefix);
    return options;
  };
  const options = generateOptions(data);
  return <div>\r
      <h1>Interactive Playground for findAndInsert</h1>\r
      <label htmlFor="targetId">Select Object:</label>\r
      <select id="targetId" onChange={e => setSelectedId(Number(e.target.value))} value={selectedId !== null ? selectedId : ''}>\r
        <option value="" disabled>\r
          Select an object\r
        </option>\r
        {options.map(option => <option key={option.id} value={option.id}>\r
            {option.label}\r
          </option>)}\r
      </select>\r
\r
      <div>\r
        <label htmlFor="newEntryName">New Entry Name:</label>\r
        <input type="text" id="newEntryName" value={newEntryName} onChange={e => setNewEntryName(e.target.value)} />\r
      </div>\r
\r
      <div>\r
        <label htmlFor="insertPosition">Insert Position:</label>\r
        <select id="insertPosition" value={insertPosition} onChange={e => setInsertPosition(e.target.value as 'above' | 'below' | 'replace')}>\r
          <option value="above">Above</option>\r
          <option value="below">Below</option>\r
          <option value="replace">Replace</option>\r
        </select>\r
      </div>\r
\r
      <button onClick={handleInsert}>Insert Entry</button>\r
\r
      <h2>Current Data:</h2>\r
      <pre>{JSON.stringify(data, null, 2)}</pre>\r
    </div>;
}`,...(x=(j=b.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const O=["InteractivePlayground"];export{b as InteractivePlayground,O as __namedExportsOrder,P as default};
