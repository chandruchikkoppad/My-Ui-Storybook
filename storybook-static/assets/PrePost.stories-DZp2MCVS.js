import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as c}from"./index-DJO9vBfz.js";import{i as ye}from"./functionUtils-C4j6ouf0.js";import{c as T}from"./index-NZcV-alF.js";import{C as de}from"./Checkbox-DE1WcxCl.js";import{T as L}from"./Typography-DdMJCn-_.js";import{u as ge,C as xe,c as Ne,d as ve,S as Ie,v as Ce}from"./sortable.esm-DSTFstQe.js";import{p as De}from"./TableCell-ByBSS-ya.js";import{I as O}from"./Icon-BnrH6PuI.js";import{t as _e}from"./truncateText-D2e1-n0F.js";import{T as se}from"./Tooltip-jHEmaokv.js";import{a as Se,R as Ee,E as je,S as Pe,b as Ve}from"./EditComponent-CQ5S3ZKh.js";import{f as j}from"./ffid-Ct76gIPn.js";import{r as Te}from"./dragAndDropUtils-BEtkLlDX.js";import{n as qe}from"./sampleData-DguosTgJ.js";import{I as Re}from"./IconButton-DADAjSNQ.js";/* empty css                */import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./Button-CpFgCZ6s.js";import"./Select-BJocvAjy.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./usePortalPosition-DKFkIZLt.js";import"./Forms-BG_2S6F-.js";import"./useIntersectionObserver-CzfTHjMy.js";const B=({data:a,level:u=3,columnCount:h=1,viewModeId:o,ViewComponent:b,handleClick:i,handleStepGroupExpand:y,isStepGroupExpanded:p})=>{const x=`${8*u}px`,P=c.useCallback(d=>["PRE","POST"].includes(d)?"4px 8px":"7px 8px",[]);return e.jsx(e.Fragment,{children:a==null?void 0:a.map(d=>{const C=o===d.stepId,N=p==null?void 0:p(d.stepId),g=P(d.type);return e.jsxs(c.Fragment,{children:[C?e.jsx("tr",{className:"pre-edit-row",children:e.jsx("td",{colSpan:h,children:e.jsx("div",{style:{marginLeft:x},children:b&&e.jsx(b,{})})})}):e.jsx("tr",{children:e.jsx("td",{colSpan:h,style:{padding:g},children:e.jsxs("div",{style:{marginLeft:x,display:"flex",alignItems:"center"},children:[e.jsx(se,{title:d==null?void 0:d.name,children:e.jsxs(L,{as:"div",color:"var(--brand-color)",lineHeight:"18px",onClick:()=>i==null?void 0:i(d),children:[d.displayOrder,".",_e(d.name,40)]})}),["PRE","POST"].includes(d.type)&&e.jsx("div",{className:`pre-accordion-arrow ${N?"expanded":""}`,children:e.jsx(O,{name:"arrow_right",className:"pre-arrow-svg",color:N?"var(--brand-color)":"var(--default-color)",width:16,height:16,onClick:()=>y==null?void 0:y(d)})})]})})}),N&&e.jsx(B,{data:d.data,level:u+1,columnCount:h,viewModeId:o,handleClick:i,ViewComponent:b,handleStepGroupExpand:y,isStepGroupExpanded:p})]},d.stepId)})})};try{B.displayName="PrePostStepAccordions",B.__docgenInfo={description:"",displayName:"PrePostStepAccordions",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"DataProps[]"}},level:{defaultValue:{value:"3"},description:"",name:"level",required:!1,type:{name:"number"}},columnCount:{defaultValue:{value:"1"},description:"",name:"columnCount",required:!1,type:{name:"number"}},viewModeId:{defaultValue:null,description:"",name:"viewModeId",required:!1,type:{name:"string | null"}},ViewComponent:{defaultValue:null,description:"",name:"ViewComponent",required:!1,type:{name:"FC<{}> | null"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((item: DataProps) => void)"}},tableType:{defaultValue:null,description:"",name:"tableType",required:!1,type:{name:"string"}},handleStepGroupExpand:{defaultValue:null,description:"",name:"handleStepGroupExpand",required:!1,type:{name:"((item: DataProps) => void)"}},isStepGroupExpanded:{defaultValue:null,description:"",name:"isStepGroupExpanded",required:!1,type:{name:"((stepId: string) => boolean)"}}}}}catch{}const X=({row:a,columns:u,tableBodyRowClass:h,handleOnclick:o,tableDataTextColor:b,withCheckbox:i,onSelectClick:y,draggable:p,indexNumber:x,dataLength:P=0,viewModeId:d,ViewComponent:C,handleClick:N,handleStepGroupExpand:g,isStepGroupExpanded:D})=>{const v=a==null?void 0:a.isDisabled,n=(a==null?void 0:a._id)||(a==null?void 0:a.stepId),r=v||P<=1||a.cascaded==="cascaded",{attributes:_,listeners:A,setNodeRef:H,transform:q,transition:R}=ge({id:n,disabled:r}),$=c.useMemo(()=>({transform:xe.Transform.toString(q),transition:R}),[q,R]),V=D==null?void 0:D(a.stepId),k={opacity:r?"0":"1",cursor:r?"default":"grab"};return e.jsxs(e.Fragment,{children:[e.jsx("tr",{ref:H,style:$,className:T(h,{"disabled-row":v}),children:u.map((f,w)=>{const I=w===0;return e.jsx("td",{style:{paddingLeft:I&&p?"0px":"8px"},onClick:()=>o(f,a,w),className:T(f.className,{"clickable-cell":f.onClick}),children:e.jsxs(L,{as:"div",color:b,className:"ff-data-checkbox-container",children:[I&&i&&e.jsx("span",{className:"ff-table-checkbox",children:e.jsx(de,{onChange:J=>y(J,a),checked:a.checked,disabled:!!v})}),I&&p&&e.jsx("div",{className:v?"ff-table-drag":"ff-table-drag-icon",...A,..._,children:e.jsx("span",{style:k,children:e.jsx(O,{name:"drag"})})}),De(a,f,x),I&&["PRE","POST"].includes(a.type)&&e.jsx("div",{className:`pre-accordion-arrow ${V?"expanded":""}`,children:e.jsx(O,{name:"arrow_right",color:V?"var(--brand-color)":"var(--default-color)",width:16,height:16,className:"pre-arrow-svg",onClick:()=>g==null?void 0:g(a)})}),f.extraInfo&&f.extraInfo({row:a,indexNumber:x})]})},`${f.accessor}${w}`)})},n),V&&e.jsx(B,{data:a.data,columnCount:u.length,viewModeId:d,ViewComponent:C,handleClick:N,handleStepGroupExpand:g,isStepGroupExpanded:D})]})};try{X.displayName="DraggableTableRow",X.__docgenInfo={description:"",displayName:"DraggableTableRow",props:{row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"DataProps"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"DataProps"}},tableBodyRowClass:{defaultValue:null,description:"",name:"tableBodyRowClass",required:!1,type:{name:"string"}},handleOnclick:{defaultValue:null,description:"",name:"handleOnclick",required:!0,type:{name:"(column: ColumnsProps, row: DataProps, index: number) => void"}},tableDataTextColor:{defaultValue:null,description:"",name:"tableDataTextColor",required:!1,type:{name:"string"}},withCheckbox:{defaultValue:null,description:"",name:"withCheckbox",required:!1,type:{name:"boolean"}},onSelectClick:{defaultValue:null,description:"",name:"onSelectClick",required:!1,type:{name:"any"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"boolean"}},indexNumber:{defaultValue:null,description:"",name:"indexNumber",required:!1,type:{name:"number"}},tableType:{defaultValue:null,description:"",name:"tableType",required:!1,type:{name:"string"}},viewModeId:{defaultValue:null,description:"",name:"viewModeId",required:!1,type:{name:"string | null"}},ViewComponent:{defaultValue:null,description:"",name:"ViewComponent",required:!1,type:{name:"FC<{}> | null"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((item: DataProps) => void)"}},handleStepGroupExpand:{defaultValue:null,description:"",name:"handleStepGroupExpand",required:!1,type:{name:"((item: DataProps) => void)"}},isStepGroupExpanded:{defaultValue:null,description:"",name:"isStepGroupExpanded",required:!1,type:{name:"((stepId: string) => boolean)"}},dataLength:{defaultValue:{value:"0"},description:"",name:"dataLength",required:!1,type:{name:"number"}}}}}catch{}const U=({data:a=[],columns:u=[],headerType:h,withCheckbox:o=!1,onSelect:b,allSelected:i,partialSelected:y=!1,withFixedHeader:p=!0,borderWithRadius:x=!1,headerCheckboxDisabled:P=!1,noDataContent:d,height:C="100%",className:N="",tableHeadClass:g="",tableBodyRowClass:D="",headerTextColor:v,tableDataTextColor:n,draggable:r=!1,onDragEnd:_,loadMore:A=()=>{},editMode:H="",editComponent:q,NlpComponent:R,AddNlp:$,handleDragStart:V,handleViewComponent:k,handleAccordion:f,loading:w})=>{var Y;const I=c.useRef(null),[J,oe]=c.useState(null),[ce,ue]=c.useState(null),W=t=>{ue(l=>l===(t==null?void 0:t.stepId)?null:t==null?void 0:t.stepId)},pe=t=>{W(t);const l=k==null?void 0:k(t,W);l?oe(()=>l):W(null)},[z,me]=c.useState(new Map),G=t=>z.has(t),fe=t=>{G(t==null?void 0:t.stepId)||f==null||f(t),w||me(l=>{const s=new Map(l);return s.has(t==null?void 0:t.stepId)?s.delete(t==null?void 0:t.stepId):s.set(t==null?void 0:t.stepId,!0),s})};c.useEffect(()=>{const t=document.getElementById("ff-table-scroll-container"),l=document.getElementById("ff-table-first-node"),s=document.getElementById("ff-table-last-node");if(!(!t||!l||!s||!(a!=null&&a.length)))return I.current=new IntersectionObserver(m=>{m.forEach(S=>{if(S.isIntersecting){const E=S.target.id==="ff-table-last-node"?"below":"above";A(E)}})},{root:t,rootMargin:"8px",threshold:.1}),I.current.observe(l),I.current.observe(s),()=>{var m;(m=I.current)==null||m.disconnect()}},[a,A]);const he=(t,l,s)=>{let{onClick:m,accessor:S}=t;m&&ye(m)&&m(S,l,s)},Q=(t,l)=>{b&&b(t,l)},be=t=>{const{active:l,over:s}=t;if(!s||l.id===s.id)return;const m=a.findIndex(E=>E._id===l.id||E.stepId===l.id),S=a.findIndex(E=>E._id===s.id||E.stepId===s.id);m===-1||S===-1||_&&_(m,S)};return e.jsx(Ne,{collisionDetection:ve,onDragStart:()=>{V==null||V(),z.clear()},onDragEnd:be,children:e.jsx(Ie,{disabled:!r,items:a==null?void 0:a.map(t=>t.stepId||t._id),strategy:Ce,children:e.jsxs("div",{style:{height:C,position:"relative"},id:"ff-table-scroll-container",className:T(N,{"pre-fixed-header-table":p,"pre-border-borderRadius":x}),children:[e.jsxs("table",{className:T("ff-table-pre-post"),cellSpacing:0,children:[e.jsx("thead",{className:T({"pre-table-thead":p},g),children:e.jsx("tr",{children:u.map((t,l)=>e.jsx("th",{className:T(`${h&&`${h}-bg`}`,`${v&&`${v}-color`}`),style:{width:t==null?void 0:t.width},children:e.jsxs(L,{as:"div",fontWeight:"semi-bold",className:"ff-label-checkbox-container",lineHeight:"18px",color:"var(--drawer-title-color)",children:[l===0&&o&&e.jsx("span",{className:"ff-table-checkbox",children:e.jsx(de,{onChange:s=>{Q(s,{allSelected:s.target.checked})},checked:i!==void 0?i:!1,partial:!!y,disabled:P})}),t.header]})},t.header))})}),e.jsxs("tbody",{className:"pre-table-tbody",children:[e.jsx("tr",{id:"ff-table-first-node"}),(Y=Se(a,$??{}))==null?void 0:Y.map((t,l)=>{const s=H===t.stepId;return s||t.isNew?e.jsxs("tr",{className:"pre-edit-row",children:[s&&c.isValidElement(q)&&e.jsx("td",{colSpan:u.length,children:c.cloneElement(q,{rowData:t,rowIndex:l+1})}),t.isNew&&!s&&c.isValidElement(R)&&e.jsx("td",{colSpan:u.length,children:c.cloneElement(R,{rowIndex:l,rowData:t})})]},t.stepId||l):e.jsx(X,{row:t,indexNumber:l,columns:u,tableBodyRowClass:D,handleOnclick:he,tableDataTextColor:n,withCheckbox:o,onSelectClick:Q,draggable:r,dataLength:a==null?void 0:a.length,viewModeId:ce,ViewComponent:J,handleClick:pe,handleStepGroupExpand:fe,isStepGroupExpanded:G})}),e.jsx("tr",{id:"ff-table-last-node"})]})]}),(a==null?void 0:a.length)<=0&&e.jsx("div",{className:"ff-no-data-content",style:{height:`calc(${C} - 50px)`},children:d})]})})})};try{U.displayName="PrePostTable",U.__docgenInfo={description:"",displayName:"PrePostTable",props:{data:{defaultValue:{value:"[]"},description:"Data for table",name:"data",required:!1,type:{name:"(string | number | DataProps)[]"}},columns:{defaultValue:{value:"[]"},description:"Column details for table",name:"columns",required:!1,type:{name:"any[]"}},headerType:{defaultValue:null,description:"Header type to have different background color",name:"headerType",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"default"'}]}},withFixedHeader:{defaultValue:{value:"true"},description:"withFixedHeader prop to have non-scrollable fixed table header",name:"withFixedHeader",required:!1,type:{name:"boolean"}},borderWithRadius:{defaultValue:{value:"false"},description:"borderWithRadius prop to have table with border 1px and borderRadius 5px",name:"borderWithRadius",required:!1,type:{name:"boolean"}},withCheckbox:{defaultValue:{value:"false"},description:"Check box feature to select the row",name:"withCheckbox",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"Event for checkbox onClick",name:"onSelect",required:!1,type:{name:"((e: object, arg: SelectedItemProps) => void)"}},allSelected:{defaultValue:null,description:"Check box feature to select the row",name:"allSelected",required:!1,type:{name:"boolean"}},partialSelected:{defaultValue:{value:"false"},description:"send true to show partial checkbox in the header",name:"partialSelected",required:!1,type:{name:"boolean"}},headerCheckboxDisabled:{defaultValue:{value:"false"},description:"send true to disable the checkbox in the header",name:"headerCheckboxDisabled",required:!1,type:{name:"boolean"}},noDataContent:{defaultValue:null,description:"The content that to be displayed if no data not found",name:"noDataContent",required:!0,type:{name:"ReactNode"}},noDataImage:{defaultValue:null,description:"Image that to be displayed if you don't have data",name:"noDataImage",required:!1,type:{name:"string"}},noDataImageSize:{defaultValue:null,description:"Size of the image that to be displayed if you don't have data",name:"noDataImageSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"x-large"'},{value:'"x-small"'}]}},height:{defaultValue:{value:"100%"},description:"Height of the table in string",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"classNames for the table container",name:"className",required:!1,type:{name:"string"}},tableHeadClass:{defaultValue:{value:""},description:"classNames for the table Header container",name:"tableHeadClass",required:!1,type:{name:"string"}},tableBodyRowClass:{defaultValue:{value:""},description:"classNames for the table Row container",name:"tableBodyRowClass",required:!1,type:{name:"string"}},headerTextColor:{defaultValue:null,description:"custom color for the column text",name:"headerTextColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},tableDataTextColor:{defaultValue:null,description:"custom color for the row text",name:"tableDataTextColor",required:!1,type:{name:"string"}},headerIconName:{defaultValue:null,description:"icon for the table header, for expand or other purposes",name:"headerIconName",required:!1,type:{name:"string"}},headerIconOnClick:{defaultValue:null,description:"handle function for the table header icon",name:"headerIconOnClick",required:!1,type:{name:"(() => void)"}},draggable:{defaultValue:{value:"false"},description:"Drag and Drop pass true to enable",name:"draggable",required:!1,type:{name:"boolean"}},onDragEnd:{defaultValue:null,description:"Drag and Drop indexes",name:"onDragEnd",required:!1,type:{name:"((startIndex: number, endIndex: number) => void)"}},loadMore:{defaultValue:{value:"() => {}"},description:"",name:"loadMore",required:!1,type:{name:"((_direction?: string) => void)"}},editMode:{defaultValue:{value:""},description:"enable editMode by setting state row id",name:"editMode",required:!1,type:{name:"string | number"}},editComponent:{defaultValue:null,description:"The content that to be displayed if editComponent",name:"editComponent",required:!1,type:{name:"ReactNode"}},NlpComponent:{defaultValue:null,description:"The content that to be displayed NlpInput Component",name:"NlpComponent",required:!1,type:{name:"ReactNode"}},AddNlp:{defaultValue:null,description:"state for the Add new Row in Table",name:"AddNlp",required:!1,type:{name:"AddNlpProp | null"}},handleDragStart:{defaultValue:null,description:"handle function for Drag Starting in the Table",name:"handleDragStart",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},handleViewComponent:{defaultValue:null,description:"",name:"handleViewComponent",required:!1,type:{name:"((_rowData: DataProps, _toggleViewRow: (_val: null) => void) => (() => ReactElement<any, string | JSXElementConstructor<any>>) | null)"}},handleAccordion:{defaultValue:null,description:"",name:"handleAccordion",required:!1,type:{name:"((row: any) => void)"}}}}}catch{}const ra={title:"Components/PrePostTable",component:U,parameters:{layout:"centered"},tags:["autodocs"]},re={data:[],columns:[]},K=[{project:{stepId:j(),modifiedByUname:"user2",modifiedOn:"13-03-2024 15:30",name:"Test1",type:"PRE",status:"Passed",checked:!0,disabled:!1,cascaded:"cascaded",id:"temp1"}},{project:{stepId:j(),modifiedByUname:"user1",modifiedOn:"18-03-2024 15:36",name:"Test2",type:"POST",status:"Failed",checked:!1,disabled:!1,cascaded:"cascaded",id:"temp2"}},{project:{stepId:j(),modifiedByUname:"user4",modifiedOn:"18-03-2024 10:47",name:"Test3",type:"Web",status:"Passed",checked:!1,disabled:!1,cascaded:"not_cascaded",id:"temp3"}},{project:{stepId:j(),modifiedByUname:"user3",modifiedOn:"13-03-2024 15:15",name:"Test4",status:"Failed",checked:!0,disabled:!1,cascaded:"not_cascaded",id:"temp4"}},{project:{stepId:j(),modifiedByUname:"user2",modifiedOn:"13-03-2024 15:30",name:"Test5",type:"PRE",status:"Passed",checked:!0,disabled:!0,cascaded:"not_cascaded",id:"temp5"}},{project:{stepId:j(),modifiedByUname:"user1",modifiedOn:"18-03-2024 15:36",name:"Test6",status:"Passed",checked:!1,disabled:!1,cascaded:"not_cascaded",id:"temp6"}}],ie=[{header:"Name",accessor:"name",width:150,cell:a=>e.jsx("div",{title:a.value,style:{color:"blue"},children:a.value})},{header:"Type",accessor:"type",cell:({value:a})=>e.jsx("div",{children:a})},{header:"Status",accessor:"status",width:150,cell:({value:a})=>e.jsx("div",{children:a})}],F={args:{...re,data:K.map(a=>a.project),columns:ie}},M={args:{...re,data:K.map(a=>a.project),columns:ie,tableDataTextColor:"var(--brand-color)"},render:()=>{//! Important prerequisite: tableData should have a unique ID key, which should be either _id or stepId.
const[a,u]=c.useState(K.map(n=>n.project)),[h,o]=c.useState(""),[b,i]=c.useState(),y=[{stepId:j(),name:"New Step 1",modifiedBy:"User",suiteName:"test suite",type:"PRE",displayOrder:"1.1",stepInputs:[{name:"ExpectedFilePath",value:"Root/Login/Jira (1).csv"},{name:"ExpectedFilePath",value:"ExpectedFilePath"},{name:"if CheckPoint Is Failed",value:"MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION"}]},{stepId:j(),name:"New Step 2",modifiedBy:"User",suiteName:"test suite",displayOrder:"1.2",stepInputs:[{name:"ExpectedFilePath",value:"Root/Login/Jira (1).csv"},{name:"ExpectedFilePath",value:"ExpectedFilePath"},{name:"if Failed",value:"MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION"}]}],p=n=>{const r=Ve(a,n.stepId,y);u(r)},x=(n,r)=>n.stepId?()=>e.jsx(Pe,{rowData:n,toggleViewRow:r}):null,P=[{header:"Name",accessor:"name",width:300,cell:({row:n,value:r,index:_})=>e.jsx(e.Fragment,{children:e.jsx(se,{title:r,children:e.jsxs(L,{as:"div",color:"var(--brand-color)",lineHeight:"18px",onClick:()=>{n!=null&&n.isDisabled||(i({}),o(n.stepId))},style:{opacity:n!=null&&n.isDisabled?"0.5":""},children:[_+1,".",r]})})}),extraInfo:({row:n,indexNumber:r})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"icon-container",style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[e.jsx(O,{name:"add_file",hoverEffect:!1,height:8,width:8,onClick:()=>{o(""),i({action:"addBelow",sourceIndex:r})}}),!(n!=null&&n.isDisabled)&&e.jsx(O,{name:"edit",disabled:n==null?void 0:n.isDisabled,onClick:()=>{o(""),i({action:"EditNlp",sourceIndex:r,nlpName:n==null?void 0:n.name,id:n.id})}})]})})},{header:"Result",accessor:"type",width:150,cell:({value:n})=>e.jsx("div",{children:n})},{header:"Status",accessor:"status",width:150,cell:({value:n})=>e.jsx("div",{children:n})}],d=()=>{i({}),o("")},C=(n,r)=>{const _=Te(a,n,r);u(_)},N=(n,r)=>{i({}),o("")},g=()=>{i({}),o("")},D=n=>{console.warn("NlpONChange",n)},v=n=>{o(n.stepId),i({action:"replaceNlp",sourceIndex:n.indexValue})};return e.jsxs(e.Fragment,{children:[e.jsx(Re,{iconName:"add_file",label:"Add",onClick:()=>{o(""),i({action:"addLast"})}}),e.jsx(U,{draggable:!0,onDragEnd:C,data:a,columns:P,headerType:"secondary",noDataContent:"No data found",headerIconName:"expand_icon",editMode:h,height:"500px",AddNlp:b,handleDragStart:d,handleAccordion:p,handleViewComponent:x,editComponent:e.jsx(je,{handleCancel:g,handleAdd:N}),NlpComponent:e.jsx(Ee,{nlpList:qe,handelChangeNlp:D,handleNlpSelect:v})})]})}};var Z,ee,ae;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: sampleData.map(x => x.project),
    columns: columnsData
  }
}`,...(ae=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,le;M.parameters={...M.parameters,docs:{...(te=M.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: sampleData.map(data => data.project),
    columns: columnsData,
    tableDataTextColor: 'var(--brand-color)'
  },
  render: () => {
    //! Important prerequisite: tableData should have a unique ID key, which should be either _id or stepId.
    const [tableData, setTableData] = useState(sampleData.map(data => data.project));
    const [editMode, setEditMode] = useState<number | string>('');
    const [AddNewNlp, setNewNlp] = useState<AddNlpProp>();

    //Dummy data from api call
    const newSteps: any = [{
      stepId: ffid(),
      name: 'New Step 1',
      modifiedBy: 'User',
      suiteName: 'test suite',
      type: 'PRE',
      displayOrder: '1.1',
      stepInputs: [{
        name: 'ExpectedFilePath',
        value: 'Root/Login/Jira (1).csv'
      }, {
        name: 'ExpectedFilePath',
        value: 'ExpectedFilePath'
      }, {
        name: 'if CheckPoint Is Failed',
        value: 'MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION'
      }]
    }, {
      stepId: ffid(),
      name: 'New Step 2',
      modifiedBy: 'User',
      suiteName: 'test suite',
      displayOrder: '1.2',
      stepInputs: [{
        name: 'ExpectedFilePath',
        value: 'Root/Login/Jira (1).csv'
      }, {
        name: 'ExpectedFilePath',
        value: 'ExpectedFilePath'
      }, {
        name: 'if Failed',
        value: 'MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION'
      }]
    }];
    const handleAccordion = (row: any) => {
      const updatedData = addPrePostStepGroup(tableData, row.stepId, newSteps);
      setTableData(updatedData);
    };
    const handleViewComponent = (rowData: any, toggleViewRow: any) => {
      if (rowData.stepId) {
        return () => <StepGroupDetailView rowData={rowData} toggleViewRow={toggleViewRow} />;
      }
      return null;
    };
    const columnsData = [{
      header: 'Name',
      accessor: 'name',
      width: 300,
      cell: ({
        row,
        value,
        index
      }: DynamicObj) => {
        return <>\r
              <Tooltip title={value}>\r
                <Typography as="div" color="var(--brand-color)" lineHeight="18px" onClick={() => {
              if (!row?.isDisabled) {
                setNewNlp({});
                setEditMode(row.stepId);
              }
            }} style={{
              opacity: row?.isDisabled ? '0.5' : ''
            }}>\r
                  {index + 1}.{value}\r
                </Typography>\r
              </Tooltip>\r
            </>;
      },
      extraInfo: ({
        row,
        indexNumber
      }: DynamicObj) => {
        return <>\r
              <div className="icon-container" style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}>\r
                <Icon name="add_file" hoverEffect={false} height={8} width={8} onClick={() => {
              setEditMode('');
              setNewNlp({
                action: 'addBelow',
                sourceIndex: indexNumber
              });
            }} />\r
\r
                {!row?.isDisabled && <Icon name="edit" disabled={row?.isDisabled} onClick={() => {
              setEditMode('');
              setNewNlp({
                action: 'EditNlp',
                sourceIndex: indexNumber,
                nlpName: row?.name,
                id: row.id
              });
            }} />}\r
              </div>\r
            </>;
      }
    }, {
      header: 'Result',
      accessor: 'type',
      width: 150,
      cell: ({
        value
      }: any) => <div>{value}</div>
    }, {
      header: 'Status',
      accessor: 'status',
      width: 150,
      cell: ({
        value
      }: any) => <div>{value}</div>
    }];
    const handleDragStart = () => {
      setNewNlp({});
      setEditMode('');
    };
    const onDragEnd = (oldIndex: number, newIndex: number) => {
      const updatedData = rearrangeDragItem(tableData, oldIndex, newIndex);
      setTableData(updatedData);
    };
    const handleSave = (_, index: number) => {
      setNewNlp({});
      setEditMode('');
      //? uncomments this below for add And continue
      // setNewNlp({ action: 'addBelow', sourceIndex: index - 1 });
    };
    const handleCancel = () => {
      setNewNlp({});
      setEditMode('');
    };
    const handelChange = (value: string) => {
      console.warn('NlpONChange', value);
    };
    const handleNlpSelect = value => {
      setEditMode(value.stepId);
      setNewNlp({
        action: 'replaceNlp',
        sourceIndex: value.indexValue
      });
    };
    return <>\r
        <IconButton iconName="add_file" label="Add" onClick={() => {
        setEditMode('');
        setNewNlp({
          action: 'addLast'
        });
      }} />\r
        <PrePostTable draggable onDragEnd={onDragEnd} data={tableData} columns={columnsData} headerType="secondary" noDataContent={'No data found'} headerIconName={'expand_icon'} editMode={editMode} height="500px" AddNlp={AddNewNlp} handleDragStart={handleDragStart} handleAccordion={handleAccordion} handleViewComponent={handleViewComponent} editComponent={<EditComponent handleCancel={handleCancel} handleAdd={handleSave} />} NlpComponent={<RenderNlpInput nlpList={nlpList} handelChangeNlp={handelChange} handleNlpSelect={handleNlpSelect} />} />\r
      </>;
  }
}`,...(le=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};const ia=["Default","DynamicTable"];export{F as Default,M as DynamicTable,ia as __namedExportsOrder,ra as default};
