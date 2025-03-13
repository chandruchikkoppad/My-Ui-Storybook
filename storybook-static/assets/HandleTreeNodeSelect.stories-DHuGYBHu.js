import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as o}from"./index-DJO9vBfz.js";import{h as i}from"./handleTreeNodeSelect-CjEMmByr.js";import"./checkEmpty-xi6SckPb.js";const T={title:"Utils/handleTreeNodeSect",component:i},m=[{createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T10:54:33.296Z",modifiedOn:"2023-05-31T10:54:33.296Z",state:"APPROVED",path:"/Root",searchKey:"/PAG1010",key:"PAG1010",name:"Root",projectId:"PJT1006",hierarchy:0,executionOrder:0,subContainerCount:1,resourceCount:0,totalSubContainerCount:1,totalResourceCount:2,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!1,platform:""},{createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T10:57:31.721Z",modifiedOn:"2023-05-31T10:57:31.721Z",state:"APPROVED",path:"/Root/page1",searchKey:"/PAG1010/PAG1011",parentId:"PAG1010",parentName:"Root Page",key:"PAG1011",name:"page1",projectId:"PJT1006",hierarchy:1,executionOrder:1,subContainerCount:0,resourceCount:3,totalSubContainerCount:0,totalResourceCount:1,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!0},{createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T11:00:00.000Z",modifiedOn:"2023-05-31T11:00:00.000Z",state:"APPROVED",path:"/Root/page2",searchKey:"/PAG1010/PAG1012",parentId:"PAG1010",parentName:"Root Page",key:"PAG1012",name:"page2",projectId:"PJT1006",hierarchy:1,executionOrder:2,subContainerCount:2,resourceCount:5,totalSubContainerCount:2,totalResourceCount:7,totalProjectElementCount:0,totalSharedElementCount:0,container:!0,localDelete:!1,defaultEntity:!1,lastResource:!1},{createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T11:05:00.000Z",modifiedOn:"2023-05-31T11:05:00.000Z",state:"APPROVED",path:"/Root/page2/subpage1",searchKey:"/PAG1010/PAG1012/PAG1013",parentId:"PAG1012",parentName:"page2",key:"PAG1013",name:"subpage1",projectId:"PJT1006",hierarchy:2,executionOrder:1,subContainerCount:0,resourceCount:2,totalSubContainerCount:0,totalResourceCount:2,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!0},{createdBy:"USR4705",modifiedBy:"--",createdByUname:"Saqeb",modifiedByUname:"--",createdOn:"2023-05-31T11:10:00.000Z",modifiedOn:"2023-05-31T11:10:00.000Z",state:"APPROVED",path:"/Root/page2/subpage2",searchKey:"/PAG1010/PAG1012/PAG1014",parentId:"PAG1012",parentName:"page2",key:"PAG1014",name:"subpage2",projectId:"PJT1006",hierarchy:2,executionOrder:2,subContainerCount:0,resourceCount:4,totalSubContainerCount:0,totalResourceCount:4,totalProjectElementCount:0,totalSharedElementCount:0,container:!1,localDelete:!1,defaultEntity:!1,lastResource:!0}],a=()=>{const[r,u]=o.useState({data:m,rootNode:null}),[n,p]=o.useState(""),[d,h]=o.useState(!1),y=()=>{const t=i(r.data,n,null,d);u(t)};return e.jsxs("div",{style:{fontFamily:"Arial, sans-serif",padding:"20px"},children:[e.jsx("h1",{children:"Interactive Tree Selector"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"nodeKey",children:"Node Key:"}),e.jsx("input",{id:"nodeKey",type:"text",value:n,onChange:t=>p(t.target.value),placeholder:"Enter node key"})]}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:d,onChange:t=>h(t.target.checked)}),"Set Checked"]})}),e.jsx("button",{onClick:y,style:{marginTop:"10px"},children:"Update Tree"}),e.jsx("h2",{children:"Tree Data:"}),e.jsx("pre",{style:{backgroundColor:"#f4f4f4",padding:"10px"},children:JSON.stringify(r,null,2)})]})};var l,s,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [data, setData] = useState<{
    data: TreeNodeProps[];
    rootNode?: TreeNodeProps | null;
  }>({
    data: initialData,
    rootNode: null
  });
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleUpdateTree = () => {
    const updatedTree = handleTreeNodeSect(data.data, selectedKey, null, isChecked);
    setData(updatedTree);
  };
  return <div style={{
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  }}>\r
      <h1>Interactive Tree Selector</h1>\r
      <div>\r
        <label htmlFor="nodeKey">Node Key:</label>\r
        <input id="nodeKey" type="text" value={selectedKey} onChange={e => setSelectedKey(e.target.value)} placeholder="Enter node key" />\r
      </div>\r
      <div>\r
        <label>\r
          <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />\r
          Set Checked\r
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
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const g=["InteractiveTreeSelector"];export{a as InteractiveTreeSelector,g as __namedExportsOrder,T as default};
