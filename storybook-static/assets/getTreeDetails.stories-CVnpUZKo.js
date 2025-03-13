import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as u}from"./index-DJO9vBfz.js";import{c as g}from"./checkEmpty-xi6SckPb.js";const S=(c,n,a,p)=>{let t,x;const h=(r,i)=>r.findIndex(d=>d.key===i),v=()=>{if(p){const r=h(n,p);if(r===-1)throw new Error(`Key "${p}" not found in oldData.`);return r}return 0};switch(c){case"above":t=[...a,...n].slice(0,100);break;case"below":t=[...n,...a].slice(-100);break;case"expand":case"expandAll":case"collapse":const r=v();if(r===void 0)throw new Error("Both sourceId and index are required for 'expand' or 'collapse' actions.");t=[...n.slice(0,r),...a].slice(-40);break;case"addAbove":const i=v();if(i===void 0)throw new Error("Both sourceId and index are required for 'addAbove' action.");t=[...n.slice(0,i),...a,...n.slice(i)];break;case"addBelow":const d=v();if(d===void 0)throw new Error("Both sourceId and index are required for 'addBelow' action.");t=[...n.slice(0,d+1),...a,...n.slice(d+1)];break;case"start":if(!g(a))x=a[0],t=a.slice(1);else throw new Error("Tree data list is empty, cannot determine root.");break;default:throw new Error(`Invalid action: ${c}`)}if(g(t)&&c!=="start")throw new Error("Tree data list is empty.");const s=t[0]||x,l=t[t.length-1]||{lastResource:!0,key:""};return{treeDataList:t,next:!(l!=null&&l.lastResource),previous:!(s!=null&&s.lastResource),startId:s==null?void 0:s.key,endId:l==null?void 0:l.key,root:x}},A={title:"Utils/getTreeDetails",component:S},y=[{createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T10:54:33.296Z",modifiedOn:"2023-05-31T10:54:33.296Z",state:"APPROVED",path:"/Root",searchKey:"/PAG1010",key:"PAG1010",name:"Root",projectId:"PJT1006",hierarchy:0,executionOrder:0,subContainerCount:1,resourceCount:0,totalSubContainerCount:1,totalResourceCount:2,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!1,platform:""},{createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T10:57:31.721Z",modifiedOn:"2023-05-31T10:57:31.721Z",state:"APPROVED",path:"/Root/page1",searchKey:"/PAG1010/PAG1011",key:"PAG1011",name:"page1",projectId:"PJT1006",hierarchy:0,executionOrder:1,subContainerCount:0,resourceCount:3,totalSubContainerCount:0,totalResourceCount:1,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!0,platform:""}],f=()=>{const[c,n]=u.useState(y),[a,p]=u.useState([]),[t,x]=u.useState("below"),[h,v]=u.useState(void 0),[s,l]=u.useState(void 0),[r,i]=u.useState(null),d=()=>{try{const o=S(t,c,a,h,s);n(o.treeDataList),i(o)}catch(o){alert(o instanceof Error?o.message:"An error occurred")}};return e.jsxs("div",{children:[e.jsx("h1",{children:"Interactive Playground for getTreeDetails"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"action",children:"Action:"}),e.jsxs("select",{id:"action",value:t,onChange:o=>x(o.target.value),children:[e.jsx("option",{value:"above",children:"Above"}),e.jsx("option",{value:"below",children:"Below"}),e.jsx("option",{value:"expand",children:"Expand"}),e.jsx("option",{value:"collapse",children:"Collapse"}),e.jsx("option",{value:"start",children:"Start"}),e.jsx("option",{value:"addAbove",children:"Add Above"}),e.jsx("option",{value:"addBelow",children:"Add Below"})]})]}),(t==="expand"||t==="collapse"||t==="addAbove"||t==="addBelow")&&e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sourceId",children:"Source ID (for expand/collapse/addAbove/addBelow):"}),e.jsx("input",{type:"text",id:"sourceId",value:s||"",onChange:o=>l(o.target.value),placeholder:"Enter Source ID"})]}),(t==="expand"||t==="collapse")&&!s&&e.jsxs("div",{children:[e.jsx("label",{htmlFor:"index",children:"Index (for expand/collapse):"}),e.jsx("input",{type:"number",id:"index",value:h!==void 0?h:"",onChange:o=>v(o.target.value?parseInt(o.target.value,10):void 0),disabled:t!=="expand"&&t!=="collapse"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"newData",children:"New Data (JSON):"}),e.jsx("textarea",{id:"newData",value:JSON.stringify(a,null,2),onChange:o=>{try{p(JSON.parse(o.target.value))}catch{alert("Invalid JSON")}}})]}),e.jsx("button",{onClick:d,children:"Get Tree Details"}),e.jsx("h2",{children:"Result:"}),r?e.jsxs("div",{children:[r.root&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Root:"}),e.jsx("pre",{children:JSON.stringify(r.root,null,2)})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Next:"})," ",r.next.toString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Previous:"})," ",r.previous.toString()]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Start ID:"})," ",r.startId]}),e.jsxs("p",{children:[e.jsx("strong",{children:"End ID:"})," ",r.endId]})]}):e.jsx("p",{children:"No result yet. Perform an action to see the details."}),e.jsx("h2",{children:"Current Tree Data:"}),e.jsx("pre",{children:JSON.stringify(c,null,2)})]})};var b,I,m;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [data, setData] = useState<TreeNodeProps[]>(initialData);
  const [newData, setNewData] = useState<TreeNodeProps[]>([]);
  const [action, setAction] = useState<'above' | 'below' | 'expand' | 'collapse' | 'start' | 'addAbove' | 'addBelow'>('below');
  const [index, setIndex] = useState<number | undefined>(undefined);
  const [sourceId, setSourceId] = useState<string | undefined>(undefined); // State for sourceId
  const [result, setResult] = useState<TreeDetailsResult | null>(null);
  const handleGetTreeDetails = () => {
    try {
      // If sourceId exists, we pass it, otherwise we pass the index
      const treeDetails = getTreeDetails(action, data, newData, index, sourceId);
      setData(treeDetails.treeDataList);
      setResult(treeDetails);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An error occurred');
    }
  };
  return <div>\r
      <h1>Interactive Playground for getTreeDetails</h1>\r
\r
      <div>\r
        <label htmlFor="action">Action:</label>\r
        <select id="action" value={action} onChange={e => setAction(e.target.value as 'above' | 'below' | 'expand' | 'collapse' | 'start' | 'addAbove' | 'addBelow')}>\r
          <option value="above">Above</option>\r
          <option value="below">Below</option>\r
          <option value="expand">Expand</option>\r
          <option value="collapse">Collapse</option>\r
          <option value="start">Start</option>\r
          <option value="addAbove">Add Above</option>\r
          <option value="addBelow">Add Below</option>\r
        </select>\r
      </div>\r
\r
      {/* Input for sourceId, if action requires it */}\r
      {(action === 'expand' || action === 'collapse' || action === 'addAbove' || action === 'addBelow') && <div>\r
          <label htmlFor="sourceId">\r
            Source ID (for expand/collapse/addAbove/addBelow):\r
          </label>\r
          <input type="text" id="sourceId" value={sourceId || ''} onChange={e => setSourceId(e.target.value)} placeholder="Enter Source ID" />\r
        </div>}\r
\r
      {/* Input for index, for actions requiring index */}\r
      {(action === 'expand' || action === 'collapse') && !sourceId && <div>\r
          <label htmlFor="index">Index (for expand/collapse):</label>\r
          <input type="number" id="index" value={index !== undefined ? index : ''} onChange={e => setIndex(e.target.value ? parseInt(e.target.value, 10) : undefined)} disabled={action !== 'expand' && action !== 'collapse'} />\r
        </div>}\r
\r
      <div>\r
        <label htmlFor="newData">New Data (JSON):</label>\r
        <textarea id="newData" value={JSON.stringify(newData, null, 2)} onChange={e => {
        try {
          setNewData(JSON.parse(e.target.value));
        } catch {
          alert('Invalid JSON');
        }
      }} />\r
      </div>\r
\r
      <button onClick={handleGetTreeDetails}>Get Tree Details</button>\r
\r
      <h2>Result:</h2>\r
      {result ? <div>\r
          {result.root && <>\r
              <h3>Root:</h3>\r
              <pre>{JSON.stringify(result.root, null, 2)}</pre>\r
            </>}\r
          <p>\r
            <strong>Next:</strong> {result.next.toString()}\r
          </p>\r
          <p>\r
            <strong>Previous:</strong> {result.previous.toString()}\r
          </p>\r
          <p>\r
            <strong>Start ID:</strong> {result.startId}\r
          </p>\r
          <p>\r
            <strong>End ID:</strong> {result.endId}\r
          </p>\r
        </div> : <p>No result yet. Perform an action to see the details.</p>}\r
\r
      <h2>Current Tree Data:</h2>\r
      <pre>{JSON.stringify(data, null, 2)}</pre>\r
    </div>;
}`,...(m=(I=f.parameters)==null?void 0:I.docs)==null?void 0:m.source}}};const C=["InteractivePlayground"];export{f as InteractivePlayground,C as __namedExportsOrder,A as default};
