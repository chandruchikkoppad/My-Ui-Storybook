import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as p}from"./index-DJO9vBfz.js";import{c as m}from"./checkEmpty-xi6SckPb.js";const P=(d,o,r,i)=>{if(!o)throw new Error("Key is required");const l=new Map,n=new Map,s=new Set;let t=[...d];r&&!m(r)&&(t=[r,...d]),t.forEach(e=>{l.set(e.key,e),e.parentId&&(n.has(e.parentId)||n.set(e.parentId,[]),n.get(e.parentId).push(e))});function h(e,u){if(s.has(e))throw new Error(`Cycle detected at node: ${e}`);s.add(e),(n.get(e)||[]).forEach(y=>{y.hide=u,h(y.key,!0)}),s.delete(e)}const f=l.get(o);return f&&(f.expanded=i,i?(n.get(o)||[]).forEach(u=>u.hide=!1):h(o,!0)),m(r)?{data:t}:{rootNode:t[0],data:t.slice(1)}},R={title:"Utils/handleTreeNodeExpandCollapse",component:P},T=[{key:"PAG1010",name:"Root",parentId:void 0,subContainerCount:1,resourceCount:0,hide:!1,expanded:!0,createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T10:54:33.296Z",modifiedOn:"2023-05-31T10:54:33.296Z",state:"APPROVED",path:"/Root",searchKey:"/PAG1010",projectId:"PJT1006",hierarchy:0,executionOrder:0,totalSubContainerCount:1,totalResourceCount:2,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!1,platform:""},{key:"PAG1011",name:"page1",parentId:"PAG1010",subContainerCount:0,resourceCount:3,hide:!1,expanded:!0,createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T10:57:31.721Z",modifiedOn:"2023-05-31T10:57:31.721Z",state:"APPROVED",path:"/Root/page1",searchKey:"/PAG1010/PAG1011",projectId:"PJT1006",hierarchy:1,executionOrder:1,totalSubContainerCount:0,totalResourceCount:1,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!0},{key:"PAG1012",name:"page2",parentId:"PAG1010",subContainerCount:2,resourceCount:5,hide:!1,expanded:!0,createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T11:00:00.000Z",modifiedOn:"2023-05-31T11:00:00.000Z",state:"APPROVED",path:"/Root/page2",searchKey:"/PAG1010/PAG1012",projectId:"PJT1006",hierarchy:1,executionOrder:2,totalSubContainerCount:2,totalResourceCount:7,totalProjectElementCount:0,totalSharedElementCount:0,container:!0,localDelete:!1,defaultEntity:!1,lastResource:!1},{key:"PAG1013",name:"subpage1",parentId:"PAG1012",subContainerCount:0,resourceCount:2,hide:!1,expanded:!0,createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T11:05:00.000Z",modifiedOn:"2023-05-31T11:05:00.000Z",state:"APPROVED",path:"/Root/page2/subpage1",searchKey:"/PAG1010/PAG1012/PAG1013",projectId:"PJT1006",hierarchy:2,executionOrder:1,totalSubContainerCount:0,totalResourceCount:2,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!0},{key:"PAG1014",name:"subpage2",parentId:"PAG1012",subContainerCount:0,resourceCount:4,hide:!1,expanded:!0,createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T11:10:00.000Z",modifiedOn:"2023-05-31T11:10:00.000Z",state:"APPROVED",path:"/Root/page2/subpage2",searchKey:"/PAG1010/PAG1012/PAG1014",projectId:"PJT1006",hierarchy:2,executionOrder:2,totalSubContainerCount:0,totalResourceCount:4,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!0}],c=()=>{const[d,o]=p.useState(T),[r,i]=p.useState(""),[l,n]=p.useState(!0),s=()=>{const t=P(d,r,null,l);o([...t.data])};return a.jsxs("div",{style:{fontFamily:"Arial, sans-serif",padding:"20px"},children:[a.jsx("h1",{children:"Interactive Tree Expand/Collapse"}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"nodeKey",children:"Node Key:"}),a.jsx("input",{id:"nodeKey",type:"text",value:r,onChange:t=>i(t.target.value),placeholder:"Enter node key"})]}),a.jsx("div",{children:a.jsxs("label",{children:[a.jsx("input",{type:"checkbox",checked:l,onChange:t=>n(t.target.checked)}),"Expand Node"]})}),a.jsx("button",{onClick:s,style:{marginTop:"10px"},children:"Update Tree"}),a.jsx("h2",{children:"Tree Data:"}),a.jsx("pre",{style:{backgroundColor:"#f4f4f4",padding:"10px"},children:JSON.stringify(d,null,2)})]})};var C,x,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [data, setData] = useState<TreeNodeProps[]>(initialData);
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const handleUpdateTree = () => {
    const updatedTree = handleTreeNodeExpandCollapse(data, selectedKey, null, isExpanded);
    setData([...updatedTree.data]);
  };
  return <div style={{
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  }}>\r
      <h1>Interactive Tree Expand/Collapse</h1>\r
      <div>\r
        <label htmlFor="nodeKey">Node Key:</label>\r
        <input id="nodeKey" type="text" value={selectedKey} onChange={e => setSelectedKey(e.target.value)} placeholder="Enter node key" />\r
      </div>\r
      <div>\r
        <label>\r
          <input type="checkbox" checked={isExpanded} onChange={e => setIsExpanded(e.target.checked)} />\r
          Expand Node\r
        </label>\r
      </div>\r
      <button onClick={handleUpdateTree} style={{
      marginTop: '10px'
    }}>\r
        Update Tree\r
      </button>\r
\r
      <h2>Tree Data:</h2>\r
      <pre style={{
      backgroundColor: '#f4f4f4',
      padding: '10px'
    }}>\r
        {JSON.stringify(data, null, 2)}\r
      </pre>\r
    </div>;
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const j=["InteractiveTreeExpandCollapse"];export{c as InteractiveTreeExpandCollapse,j as __namedExportsOrder,R as default};
