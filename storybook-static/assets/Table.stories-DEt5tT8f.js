import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as c}from"./index-DJO9vBfz.js";import{i as Ze}from"./functionUtils-C4j6ouf0.js";import{c as _}from"./index-NZcV-alF.js";import{p as Je}from"./TableCell-ByBSS-ya.js";import{C as He}from"./Checkbox-DE1WcxCl.js";import{T as N}from"./Typography-DdMJCn-_.js";import{I as Ue}from"./Icon-BnrH6PuI.js";import{c as Qe,d as Ye,S as ea,v as aa,u as ta,C as ra}from"./sortable.esm-DSTFstQe.js";import{f as y}from"./ffid-Ct76gIPn.js";import{r as Le}from"./dragAndDropUtils-BEtkLlDX.js";import{B as ne}from"./Button-CpFgCZ6s.js";import{S as da}from"./Select-BJocvAjy.js";import{F as na}from"./Forms-BG_2S6F-.js";/* empty css                */import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./Tooltip-jHEmaokv.js";import"./usePortalPosition-DKFkIZLt.js";const $e=(e,r,d)=>{var n;return e===0?`${e*((r==null?void 0:r.width)||0)}px`:e===1?`${((n=d==null?void 0:d[0])==null?void 0:n.width)||0}px`:"auto"},sa=({row:e,columns:r,tableBodyRowClass:d,handleOnclick:n,tableDataTextColor:i,withCheckbox:l,onSelectClick:f,draggable:g,serialNumber:s,editMode:p,isAccordionOpen:I,accordionContent:T,columnSticky:K})=>{const{attributes:G,listeners:k,setNodeRef:B,transform:Z,transition:J}=ta({id:(e==null?void 0:e._id)||(e==null?void 0:e.id),disabled:e.disabled||!!p}),Q={transform:ra.Transform.toString(Z),transition:J},E=e._id||e.id;return a.jsxs(a.Fragment,{children:[a.jsx("tr",{ref:B,style:Q,className:_(d,{"disabled-row":e.disabled}),id:E,children:r.map((S,j)=>{const v=K&&(j===0||j===1);return a.jsx("td",{style:{paddingLeft:j===0&&g?"0px":"8px",position:v?"sticky":"static",left:$e(j,S,r),zIndex:v?999:"auto",backgroundColor:v?"var(--input-label-bg-color)":"transparent"},onClick:()=>n(S,e),className:_(S.className,{"clickable-cell":S.onClick}),children:a.jsxs(N,{as:"div",color:i,className:"ff-data-checkbox-container",children:[j===0&&l&&a.jsx("span",{className:"ff-table-checkbox",children:a.jsx(He,{onChange:O=>{f(O,e)},checked:e.checked,disabled:!!e.disabled})}),j===0&&g&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:e.disabled?"ff-table-drag":"ff-table-drag-icon",...k,...G,children:a.jsx(Ue,{name:"drag"})}),a.jsxs(N,{color:"var(--brand-color)",children:[s,"."]})]}),Je(e,S)]})},S.accessor+j)})},E),I?a.jsx("tr",{className:"accordion-row",children:a.jsx("td",{colSpan:r.length,children:a.jsx("div",{className:"accordion-content",children:T||null})})}):null]})},b=({data:e=[],columns:r=[],headerType:d,withCheckbox:n=!1,onSelect:i,allSelected:l,partialSelected:f=!1,withFixedHeader:g=!0,borderWithRadius:s=!1,headerCheckboxDisabled:p=!1,noDataContent:I,height:T="100%",className:K="",tableHeadClass:G="",tableBodyRowClass:k="",headerTextColor:B,tableDataTextColor:Z,headerIconName:J="",headerIconOnClick:Q=()=>{},draggable:E=!1,onDragEnd:S,loadMore:j=()=>{},editMode:v="",editComponent:O,getAccordionStatus:ze=()=>{},accordionContent:Xe,columnSticky:ee=!1,onScrollEnd:ae=()=>{}})=>{const P=c.useRef(null),R=c.useRef(null),[te,re]=c.useState(!1);c.useEffect(()=>{const t=document.getElementById("ff-table-scroll-container"),o=document.getElementById("ff-table-first-node"),m=document.getElementById("ff-table-last-node");if(!(!t||!o||!m||!(e!=null&&e.length)))return P.current=new IntersectionObserver(x=>{x.forEach(C=>{if(C.isIntersecting){const A=C.target.id==="ff-table-last-node"?"below":"above";j(A)}})},{root:t,rootMargin:"8px",threshold:.1}),P.current.observe(o),P.current.observe(m),()=>{var x;(x=P.current)==null||x.disconnect()}},[e,j]),c.useEffect(()=>{const t=()=>{if(!R.current)return;const{scrollTop:m,scrollHeight:x,clientHeight:C}=R.current;m+C>=x-5?te||(re(!0),ae(!0)):re(!1)},o=R.current;return o&&o.addEventListener("scroll",t),()=>{o&&o.removeEventListener("scroll",t)}},[ae,te]);const Ke=(t,o)=>{let{onClick:m,accessor:x}=t;m&&Ze(m)&&m(x,o)},de=(t,o)=>{i&&i(t,o)},Ge=t=>{const{active:o,over:m}=t;if(!m||o.id===m.id)return;const x=e.findIndex(A=>A._id===o.id||A.id===o.id),C=e.findIndex(A=>A._id===m.id||A.id===m.id);x===-1||C===-1||S&&S(x,C)};return a.jsx(Qe,{collisionDetection:Ye,onDragEnd:Ge,children:a.jsx(ea,{disabled:!E,items:e==null?void 0:e.map(t=>t._id||t.id),strategy:aa,children:a.jsxs("div",{style:{height:T,position:"relative",overflowX:"auto",whiteSpace:"nowrap",scrollbarWidth:E?"none":"auto"},id:"ff-table-scroll-container",className:_(K,{"ff-fixed-header-table":g,"border-borderRadius":s}),ref:R,children:[a.jsxs("table",{className:_("ff-table"),cellSpacing:0,children:[a.jsx("thead",{className:_({"ff-fixed-header":g},G),children:a.jsx("tr",{children:r.map((t,o)=>a.jsxs("th",{className:_(`${d&&`${d}-bg`}`,`${B&&`${B}-color`}`,{"sticky-column":ee&&(o===0||o===1)}),style:{width:t==null?void 0:t.width,left:$e(o,t,r)},children:[a.jsx("div",{className:"ff-table-icon",children:a.jsx(Ue,{height:14,width:14,name:J,onClick:Q})}),a.jsxs(N,{style:(t==null?void 0:t.width)&&{width:t==null?void 0:t.width},as:"div",fontWeight:"semi-bold",className:"ff-label-checkbox-container",children:[o===0&&n&&a.jsx("span",{className:"ff-table-checkbox",children:a.jsx(He,{onChange:m=>{de(m,{allSelected:m.target.checked})},checked:l!==void 0?l:!1,partial:!!f,disabled:p})}),t.header]})]},t.header))})}),a.jsxs("tbody",{className:"ff-fixed-header-table",children:[a.jsx("tr",{id:"ff-table-first-node"}),(e==null?void 0:e.length)>0&&(e==null?void 0:e.map((t,o)=>{const m=ze((t==null?void 0:t.id)||(t==null?void 0:t._id)||(t==null?void 0:t.scriptId));return a.jsx(a.Fragment,{children:v===t._id||v===t.id?a.jsx("tr",{className:_(k,"edit-row",{"disabled-row":t.disabled}),children:a.jsx("td",{colSpan:r.length,style:{padding:"0px"},children:v&&c.isValidElement(O)&&c.cloneElement(O,{rowData:t,rowIndex:o+1})})},(t==null?void 0:t._id)||o):a.jsx(sa,{row:t,serialNumber:o+1,columns:r,tableBodyRowClass:k,handleOnclick:Ke,tableDataTextColor:Z,withCheckbox:n,onSelectClick:de,draggable:E,columnSticky:ee,isAccordionOpen:m,accordionContent:Xe})})})),a.jsx("tr",{id:"ff-table-last-node"})]})]}),(e==null?void 0:e.length)<=0&&a.jsx("div",{className:"no-data-content",style:{height:`calc(${T} - 50px)`},children:I})]})})})};try{b.displayName="Table",b.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:{value:"[]"},description:"Data for table",name:"data",required:!1,type:{name:"(string | number | DataProps)[]"}},columns:{defaultValue:{value:"[]"},description:"Column details for table",name:"columns",required:!1,type:{name:"any[]"}},headerType:{defaultValue:null,description:"Header type to have different background color",name:"headerType",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"default"'}]}},withFixedHeader:{defaultValue:{value:"true"},description:"withFixedHeader prop to have non-scrollable fixed table header",name:"withFixedHeader",required:!1,type:{name:"boolean"}},borderWithRadius:{defaultValue:{value:"false"},description:"borderWithRadius prop to have table with border 1px and borderRadius 5px",name:"borderWithRadius",required:!1,type:{name:"boolean"}},withCheckbox:{defaultValue:{value:"false"},description:"Check box feature to select the row",name:"withCheckbox",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"Event for checkbox onClick",name:"onSelect",required:!1,type:{name:"((e: object, arg: SelectedItemProps) => void)"}},allSelected:{defaultValue:null,description:"Check box feature to select the row",name:"allSelected",required:!1,type:{name:"boolean"}},partialSelected:{defaultValue:{value:"false"},description:"send true to show partial checkbox in the header",name:"partialSelected",required:!1,type:{name:"boolean"}},headerCheckboxDisabled:{defaultValue:{value:"false"},description:"send true to disable the checkbox in the header",name:"headerCheckboxDisabled",required:!1,type:{name:"boolean"}},noDataContent:{defaultValue:null,description:"The content that to be displayed if no data not found",name:"noDataContent",required:!1,type:{name:"ReactNode"}},noDataImage:{defaultValue:null,description:"Image that to be displayed if you don't have data",name:"noDataImage",required:!1,type:{name:"string"}},noDataImageSize:{defaultValue:null,description:"Size of the image that to be displayed if you don't have data",name:"noDataImageSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"x-large"'},{value:'"x-small"'}]}},height:{defaultValue:{value:"100%"},description:"Height of the table in string",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"classNames for the table container",name:"className",required:!1,type:{name:"string"}},tableHeadClass:{defaultValue:{value:""},description:"classNames for the table Header container",name:"tableHeadClass",required:!1,type:{name:"string"}},tableBodyRowClass:{defaultValue:{value:""},description:"classNames for the table Row container",name:"tableBodyRowClass",required:!1,type:{name:"string"}},headerTextColor:{defaultValue:null,description:"custom color for the column text",name:"headerTextColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},tableDataTextColor:{defaultValue:null,description:"custom color for the row text",name:"tableDataTextColor",required:!1,type:{name:"string"}},headerIconName:{defaultValue:{value:""},description:"icon for the table header, for expand or other purposes",name:"headerIconName",required:!1,type:{name:"string"}},headerIconOnClick:{defaultValue:{value:"() => {}"},description:"handle function for the table header icon",name:"headerIconOnClick",required:!1,type:{name:"(() => void)"}},draggable:{defaultValue:{value:"false"},description:"Drag and Drop pass true to enable",name:"draggable",required:!1,type:{name:"boolean"}},onDragEnd:{defaultValue:null,description:"Drag and Drop indexes",name:"onDragEnd",required:!1,type:{name:"((startIndex: number, endIndex: number) => void)"}},loadMore:{defaultValue:{value:"() => {}"},description:"",name:"loadMore",required:!1,type:{name:"((_direction?: string) => void)"}},getAccordionStatus:{defaultValue:{value:"() => {}"},description:"get the status of the accordion which is open or close",name:"getAccordionStatus",required:!1,type:{name:"Function"}},accordionContent:{defaultValue:null,description:"content for the accordion",name:"accordionContent",required:!1,type:{name:"ReactNode"}},editMode:{defaultValue:{value:""},description:"enable editMode by setting state row id",name:"editMode",required:!1,type:{name:"string | null"}},editComponent:{defaultValue:null,description:"The content that to be displayed if editComponent",name:"editComponent",required:!1,type:{name:"ReactNode"}},columnSticky:{defaultValue:{value:"false"},description:"",name:"columnSticky",required:!1,type:{name:"boolean"}},onScrollEnd:{defaultValue:{value:"() => {}"},description:"",name:"onScrollEnd",required:!1,type:{name:"((_isScrollEnd: boolean) => void)"}}}}}catch{}const oa=[{label:"Mark this script as Failed and continue dependant script execution",value:"MARK_THIS_SCRIPT_AS_FAILED_AND_CONTINUE_DEPENDANT_SCRIPT_EXECUTION"},{label:"Mark this script as Warning and continue dependant script execution",value:"MARK_THIS_SCRIPT_AS_WARNING_AND_CONTINUE_DEPENDANT_SCRIPT_EXECUTION"},{label:"Mark this script as Failed and stop dependant script execution",value:"MARK_THIS_SCRIPT_AS_FAILED_AND_STOP_DEPENDANT_SCRIPT_EXECUTION"},{label:"Mark this script as Failed and stop current module execution",value:"MARK_THIS_SCRIPT_AS_FAILED_AND_STOP_CURRENT_MODULE_EXECUTION"},{label:"Mark this script as Failed and stop complete execution",value:"MARK_THIS_SCRIPT_AS_FAILED_AND_STOP_COMPLETE_EXECUTION"}],Y=({rowData:e,rowIndex:r,handleSave:d,handleCancel:n})=>{const[i]=c.useState({ifFailed:""});return a.jsxs("section",{className:"edit_depends_on_script",children:[a.jsxs("header",{className:"edit_depends_on_script__header",children:[a.jsx("div",{children:a.jsxs(N,{color:"var(--nlp-option-color)",lineHeight:"18px",children:[r,".",e==null?void 0:e.name]})}),a.jsx("div",{className:"edit_depends_on_script__header__link",children:a.jsx(N,{children:"Go to script",color:"var(--nlp-color)",fontWeight:"semi-bold"})})]}),a.jsx(na,{onSubmit:d,defaultValues:i,children:({register:l,setValue:f,formState:{errors:g},watch:s,trigger:p})=>{var I;return a.jsxs("div",{className:"edit_depends_on_script__form",children:[a.jsx(da,{label:"if Failed",optionsList:oa,...l("ifFailed"),onChange:T=>{f("ifFailed",T.label)},errorMsg:(I=g.ifFailed)==null?void 0:I.message,optionZIndex:9999,selectedOption:{label:s("ifFailed"),value:s("ifFailed")},onBlur:()=>{p("ifFailed")}}),a.jsxs("div",{className:"edit_depends_on_script__form__button",children:[a.jsx(ne,{variant:"tertiary",children:"Cancel",onClick:n}),a.jsx(ne,{variant:"primary",type:"submit",children:"Update"})]})]})}})]})};try{Y.displayName="EditComponent",Y.__docgenInfo={description:"",displayName:"EditComponent",props:{}}}catch{}const Ea={title:"Components/Table",component:b,parameters:{layout:"centered"},tags:["autodocs"]},u={data:[],columns:[]},h=[{project:{id:y(),modifiedByUname:"user4",modifiedOn:"18-03-2024 10:47",name:"Test1",type:"Web",status:"Open",checked:!1,disabled:!1}},{project:{id:y(),modifiedByUname:"user3",modifiedOn:"13-03-2024 15:15",name:"Test2",type:"Mobile",status:"Close",checked:!0,disabled:!0}},{project:{id:y(),modifiedByUname:"user2",modifiedOn:"13-03-2024 15:30",name:"Test3",type:"Web",status:"Close",checked:!0,disabled:!0}},{project:{id:y(),modifiedByUname:"user1",modifiedOn:"18-03-2024 15:36",name:"Test4",type:"Web & Mobile",status:"Open",checked:!1,disabled:!1}},{project:{id:y(),modifiedByUname:"user4",modifiedOn:"18-03-2024 10:47",name:"Test1",type:"Web",status:"Open",checked:!1,disabled:!0}},{project:{id:y(),modifiedByUname:"user3",modifiedOn:"13-03-2024 15:15",name:"Test2",type:"Mobile",status:"Close",checked:!0,disabled:!0}},{project:{id:y(),modifiedByUname:"user2",modifiedOn:"13-03-2024 15:30",name:"Test3",type:"Web",status:"Close",checked:!0,disabled:!0}},{project:{id:y(),modifiedByUname:"user1",modifiedOn:"18-03-2024 15:36",name:"Test4",type:"Web & Mobile",status:"Open",checked:!1,disabled:!1}},{project:{id:y(),modifiedByUname:"user4",modifiedOn:"18-03-2024 10:47",name:"Test1",type:"Web",status:"Open",checked:!1,disabled:!1}},{project:{id:y(),modifiedByUname:"user3",modifiedOn:"13-03-2024 15:15",name:"Test2",type:"Mobile",status:"Close",checked:!0,disabled:!1}},{project:{id:y(),modifiedByUname:"user2",modifiedOn:"13-03-2024 15:30",name:"Test3",type:"Web",status:"Close",checked:!0,disabled:!1}},{project:{id:y(),modifiedByUname:"user1",modifiedOn:"18-03-2024 15:36",name:"Test4",type:"Web & Mobile",status:"Open",checked:!1,disabled:!1}}],D=[{header:"Name",accessor:"name",width:300,cell:e=>a.jsx("div",{title:e.value,style:{color:"blue"},children:e.value})},{header:"Type",accessor:"type",width:100,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Status",accessor:"status",width:150,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified By",accessor:"modifiedByUname",width:150},{header:"Modified On",accessor:"modifiedOn",width:150,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified On 1",accessor:"modifiedOn",width:150,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified On 2",accessor:"modifiedOn",width:150,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified On 3",accessor:"modifiedOn",width:250,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified On 4",accessor:"modifiedOn",width:350,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified On 5",accessor:"modifiedOn",width:350,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified On 6",accessor:"modifiedOn",width:350,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified On 7",accessor:"modifiedOn",width:350,cell:({value:e})=>a.jsx("div",{children:e})},{header:"Modified On 8",accessor:"modifiedOn",width:350,cell:({value:e})=>a.jsx("div",{children:e})}],M={args:{...u,data:h.map(e=>e.project),columns:D}},F={args:{...u,data:h.map(e=>e.project),columns:D,headerTextColor:"primary"}},w={args:{...u,data:h.map(e=>e.project),columns:D,tableDataTextColor:"var(--brand-color)"}},q={args:{...u,data:[],columns:[]},render:()=>{const[e,r]=c.useState([]);c.useEffect(()=>{let n=[];h.forEach(i=>{n.push(i.project)}),r(n)},[]);const d=()=>{};return a.jsx(a.Fragment,{children:a.jsx(b,{...u,data:e,columns:D,headerType:"secondary",noDataContent:"No data found",headerIconName:"expand_icon",headerIconOnClick:d})})}},V={args:{...u,data:[],columns:[]},render:()=>{const[e,r]=c.useState([]);return c.useEffect(()=>{let d=[];h.forEach(n=>{d.push(n.project)}),r(d)},[]),a.jsx(a.Fragment,{children:a.jsx(b,{...u,data:e,columns:D,headerType:"primary",noDataContent:"No data found"})})}},W={args:{...u,data:[],columns:[]},render:()=>{const[e,r]=c.useState([]);return c.useEffect(()=>{let d=[];h.forEach(n=>{d.push(n.project)}),r(d)},[]),a.jsx(a.Fragment,{children:a.jsx(b,{...u,data:e,columns:D,headerType:"primary",withFixedHeader:!0,borderWithRadius:!0,noDataContent:"No data found"})})}},H={args:{...u,data:[],columns:[]},render:()=>{const[e,r]=c.useState([]),[d,n]=c.useState(!1);c.useEffect(()=>{let l=[];h.forEach(f=>{l.push(f.project)}),r(l)},[]);const i=l=>{l.allSelected!==void 0&&n(!d)};return a.jsx(a.Fragment,{children:a.jsx(b,{...u,data:e,columns:D,headerType:"primary",withCheckbox:!0,onSelect:i,allSelected:d,noDataContent:"No data found"})})}},U={args:{...u,data:[],columns:[]},render:()=>{const e=[];return a.jsx(a.Fragment,{children:a.jsx(b,{...u,data:e,columns:D,headerType:"primary",noDataContent:"No data found",noDataImageSize:"small",height:"500px"})})}},L={args:{...u,data:h.map(e=>e.project),columns:D,tableDataTextColor:"var(--brand-color)"},render:()=>{//! Important prerequisite: tableData should have a unique ID key, which should be either _id or id.
const[e,r]=c.useState(h.map(i=>i.project));c.useEffect(()=>{let i=[];h.forEach(l=>{i.push(l.project)}),r(i)},[]);const d=()=>{},n=(i,l)=>{const f=Le(e,i,l);r(f)};return a.jsx(a.Fragment,{children:a.jsx(b,{draggable:!0,onDragEnd:n,...u,data:e,columns:D,headerType:"secondary",noDataContent:"No data found",headerIconName:"expand_icon",headerIconOnClick:d})})}},$={args:{...u,data:h.map(e=>e.project),columns:D,tableDataTextColor:"var(--brand-color)"},render:()=>{//! Important prerequisite: tableData should have a unique ID key, which should be either _id or id.
const[e,r]=c.useState(h.map(s=>s.project)),[d,n]=c.useState(""),i=[{header:"Name",accessor:"name",width:150,cell:({value:s})=>a.jsx(N,{color:"var(--brand-color)",children:s}),onClick:(s,p)=>{p!=null&&p.disabled||n(p.id)}},{header:"Type",accessor:"type",cell:({value:s})=>a.jsx("div",{children:s})},{header:"Status",accessor:"status",width:150,cell:({value:s})=>a.jsx("div",{children:s})},{header:"Modified By",accessor:"modifiedByUname"},{header:"Modified On",accessor:"modifiedOn",cell:({value:s})=>a.jsx("div",{children:s})}];c.useEffect(()=>{let s=[];h.forEach(p=>{s.push(p.project)}),r(s)},[]);const l=()=>{},f=(s,p)=>{const I=Le(e,s,p);r(I)},g=s=>{console.warn("data",s),n("")};return a.jsx(a.Fragment,{children:a.jsx(b,{draggable:!0,onDragEnd:f,...u,data:e,columns:i,headerType:"secondary",noDataContent:"No data found",headerIconName:"expand_icon",headerIconOnClick:l,editMode:d,editComponent:a.jsx(Y,{handleCancel:()=>n(""),handleSave:g},d)})})}},z={args:{...u,data:[],columns:[]},render:()=>{const[e,r]=c.useState(null),d=(l,f=!1)=>(f&&r(g=>g===l?null:l),e===l),n=[{id:1,name:"Row 1",description:"This is the description for Row 1"},{id:2,name:"Row 2",description:"This is the description for Row 2"},{id:3,name:"Row 3",description:"This is the description for Row 3"}],i=[{header:"Name",accessor:"name",cell:l=>a.jsxs("div",{style:{cursor:"pointer"},onClick:()=>d(l.row.id,!0),children:["click me"," "]})},{header:"Description",accessor:"description"}];return a.jsx(a.Fragment,{children:a.jsx(b,{...u,data:n,columns:i,headerType:"primary",noDataContent:"No data found",getAccordionStatus:d,accordionContent:a.jsx("div",{children:"Accordion content"})})})}},X={render:()=>{const e=[{defectId:"3PA10002",summary:"Def",createdBy:"Sanjay"},{defectId:"3PA10005",summary:"gfdhj",createdBy:"Sanjay"},{defectId:"3PA10027",summary:"defect1",createdBy:"Sanjay"},{defectId:"3PA10028",summary:"def1",createdBy:"Sanjay"},{defectId:"3PA10029",summary:"def12oi3uy",createdBy:"Sanjay"},{defectId:"3PA10030",summary:"def789",createdBy:"Sanjay"},{defectId:"3PA10031",summary:"def",createdBy:"Sanjay"},{defectId:"3PA10032",summary:"def1",createdBy:"Sanjay"},{defectId:"3PA10033",summary:"def4567890[",createdBy:"Sanjay"},{defectId:"3PA10037",summary:"def567",createdBy:"Sanjay"},{defectId:"3PA10038",summary:"def657890",createdBy:"Sanjay"},{defectId:"3PA10023",summary:"def11111",createdBy:"Sanjay"},{defectId:"3PA10024",summary:"def2",createdBy:"Sanjay"},{defectId:"3PA10025",summary:"qwsedf",createdBy:"Sanjay"},{defectId:"3PA10026",summary:"swdefrgt",createdBy:"Sanjay"},{defectId:"3PA10012",summary:"Def",createdBy:"Sanjay"},{defectId:"3PA10039",summary:"javascript:/*/scriptimg/",createdBy:"Sanjay"},{defectId:"3PA10040",summary:"hgiuyiu",createdBy:"Sanjay"},{defectId:"3PA10046",summary:"unable to login",createdBy:"Sanjay"},{defectId:"3PA10048",summary:"kiuytfr",createdBy:"Sanjay"}],r=[{header:"Bug ID",accessor:"defectId",width:"20%"},{header:"Bug Summary",accessor:"summary",width:"60%"},{header:"Created By",accessor:"createdBy",width:"20%"}];return a.jsx(a.Fragment,{children:a.jsx(b,{data:e||[],columns:r,headerType:"secondary",withFixedHeader:!0,noDataContent:a.jsx(N,{fontWeight:"semi-bold",color:"var(--toggle-disable-icon-color)",style:{padding:"8px 0px"},children:"No scripts found"}),height:"256px"})})}};var se,oe,le;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: sampleData.map(x => x.project),
    columns: columnsData
  }
}`,...(le=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ie,ue;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: sampleData.map(x => x.project),
    columns: columnsData,
    headerTextColor: 'primary'
  }
}`,...(ue=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var me,pe,fe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: sampleData.map(x => x.project),
    columns: columnsData,
    tableDataTextColor: 'var(--brand-color)'
  }
}`,...(fe=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var he,ye,be;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: [],
    columns: []
  },
  render: () => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach(data => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);
    const handleIconClick = () => {};
    return <>\r
        <Table {...defaultArgs} data={tableData} columns={columnsData} headerType="secondary" noDataContent="No data found" headerIconName={'expand_icon'} headerIconOnClick={handleIconClick} />\r
      </>;
  }
}`,...(be=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var ge,xe,De;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: [],
    columns: []
  },
  render: () => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach(data => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);
    return <>\r
        <Table {...defaultArgs} data={tableData} columns={columnsData} headerType="primary" noDataContent="No data found" />\r
      </>;
  }
}`,...(De=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var je,Se,Ie;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: [],
    columns: []
  },
  render: () => {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach(data => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);
    return <>\r
        <Table {...defaultArgs} data={tableData} columns={columnsData} headerType="primary" withFixedHeader={true} borderWithRadius={true} noDataContent="No data found" />\r
      </>;
  }
}`,...(Ie=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var Te,ve,Ce;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: [],
    columns: []
  },
  render: () => {
    const [tableData, setTableData] = useState([]);
    const [allSelected, setAllSelected] = useState(false);
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach(data => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);
    const onSelectClick = (obj: any) => {
      if (obj['allSelected'] !== undefined) {
        setAllSelected(!allSelected);
      }
    };
    return <>\r
        <Table {...defaultArgs} data={tableData} columns={columnsData} headerType="primary" withCheckbox={true} onSelect={onSelectClick} allSelected={allSelected} noDataContent="No data found" />\r
      </>;
  }
}`,...(Ce=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var Ae,_e,Ne;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: [],
    columns: []
  },
  render: () => {
    const tableData: [] = [];
    return <>\r
        <Table {...defaultArgs} data={tableData} columns={columnsData} headerType="primary" noDataContent="No data found" noDataImageSize="small" height="500px" />\r
      </>;
  }
}`,...(Ne=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var Ee,ke,Be;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: sampleData.map(x => x.project),
    columns: columnsData,
    tableDataTextColor: 'var(--brand-color)'
  },
  render: () => {
    //! Important prerequisite: tableData should have a unique ID key, which should be either _id or id.
    const [tableData, setTableData] = useState(sampleData.map(data => data.project));
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach(data => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);
    const handleIconClick = () => {};
    const onDragEnd = (oldIndex: number, newIndex: number) => {
      const updatedData = rearrangeDragItem(tableData, oldIndex, newIndex);
      setTableData(updatedData);
    };
    return <>\r
        <Table draggable onDragEnd={onDragEnd} {...defaultArgs} data={tableData} columns={columnsData} headerType="secondary" noDataContent="No data found" headerIconName={'expand_icon'} headerIconOnClick={handleIconClick} />\r
      </>;
  }
}`,...(Be=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var Oe,Pe,Re;$.parameters={...$.parameters,docs:{...(Oe=$.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: sampleData.map(data => data.project),
    columns: columnsData,
    tableDataTextColor: 'var(--brand-color)'
  },
  render: () => {
    //! Important prerequisite: tableData should have a unique ID key, which should be either _id or id.
    const [tableData, setTableData] = useState(sampleData.map(data => data.project));
    const [editMode, setEditMode] = useState<string>('');
    const columnsData = [{
      header: 'Name',
      accessor: 'name',
      width: 150,
      cell: ({
        value
      }: any) => <Typography color="var(--brand-color)">{value}</Typography>,
      onClick: (_: string, row: DynamicObj) => {
        if (!row?.disabled) setEditMode(row.id);
      }
    }, {
      header: 'Type',
      accessor: 'type',
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
    }, {
      header: 'Modified By',
      accessor: 'modifiedByUname'
    }, {
      header: 'Modified On',
      accessor: 'modifiedOn',
      cell: ({
        value
      }: any) => <div>{value}</div>
    }];
    useEffect(() => {
      let sampleArray: any = [];
      sampleData.forEach(data => {
        sampleArray.push(data.project);
      });
      setTableData(sampleArray);
    }, []);
    const handleIconClick = () => {};
    const onDragEnd = (oldIndex: number, newIndex: number) => {
      const updatedData = rearrangeDragItem(tableData, oldIndex, newIndex);
      setTableData(updatedData);
    };
    const handleSave = (data: FormValues) => {
      console.warn('data', data);
      setEditMode('');
    };
    return <>\r
        <Table draggable onDragEnd={onDragEnd} {...defaultArgs} data={tableData} columns={columnsData} headerType="secondary" noDataContent={'No data found'} headerIconName={'expand_icon'} headerIconOnClick={handleIconClick} editMode={editMode} editComponent={<EditComponent key={editMode} handleCancel={() => setEditMode('')} handleSave={handleSave} />} />\r
      </>;
  }
}`,...(Re=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Me,Fe,we;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    data: [],
    columns: []
  },
  render: () => {
    const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
    const getAccordionStatus = (rowId: any, toggle = false) => {
      if (toggle) {
        setOpenAccordionId(prev => prev === rowId ? null : rowId);
      }
      return openAccordionId === rowId;
    };
    const data = [{
      id: 1,
      name: 'Row 1',
      description: 'This is the description for Row 1'
    }, {
      id: 2,
      name: 'Row 2',
      description: 'This is the description for Row 2'
    }, {
      id: 3,
      name: 'Row 3',
      description: 'This is the description for Row 3'
    }];
    const columns = [{
      header: 'Name',
      accessor: 'name',
      cell: (e: any) => {
        return <div style={{
          cursor: 'pointer'
        }} onClick={() => getAccordionStatus(e.row.id, true)}>\r
              click me{' '}\r
            </div>;
      }
    }, {
      header: 'Description',
      accessor: 'description'
    }];
    return <>\r
        <Table {...defaultArgs} data={data} columns={columns} headerType="primary" noDataContent="No data found" getAccordionStatus={getAccordionStatus} accordionContent={<div>Accordion content</div>} />\r
      </>;
  }
}`,...(we=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:we.source}}};var qe,Ve,We;X.parameters={...X.parameters,docs:{...(qe=X.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    const SampleData = [{
      defectId: '3PA10002',
      summary: 'Def',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10005',
      summary: 'gfdhj',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10027',
      summary: 'defect1',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10028',
      summary: 'def1',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10029',
      summary: 'def12oi3uy',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10030',
      summary: 'def789',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10031',
      summary: 'def',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10032',
      summary: 'def1',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10033',
      summary: 'def4567890[',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10037',
      summary: 'def567',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10038',
      summary: 'def657890',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10023',
      summary: 'def11111',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10024',
      summary: 'def2',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10025',
      summary: 'qwsedf',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10026',
      summary: 'swdefrgt',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10012',
      summary: 'Def',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10039',
      summary: 'javascript:/*/scriptimg/',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10040',
      summary: 'hgiuyiu',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10046',
      summary: 'unable to login',
      createdBy: 'Sanjay'
    }, {
      defectId: '3PA10048',
      summary: 'kiuytfr',
      createdBy: 'Sanjay'
    }];
    const columnsData = [{
      header: 'Bug ID',
      accessor: 'defectId',
      width: '20%'
    }, {
      header: 'Bug Summary',
      accessor: 'summary',
      width: '60%'
    }, {
      header: 'Created By',
      accessor: 'createdBy',
      width: '20%'
    }];
    return <>\r
        <Table data={SampleData || []} columns={columnsData} headerType="secondary" withFixedHeader noDataContent={<Typography fontWeight="semi-bold" color="var(--toggle-disable-icon-color)" style={{
        padding: '8px 0px'
      }}>\r
              No scripts found\r
            </Typography>} height={'256px'} />\r
      </>;
  }
}`,...(We=(Ve=X.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};const ka=["Default","PrimaryHeaderTextColor","TableDataTextColor","PageTable","PrimaryHeader","FixedHeaderWithBorder","WithCheckBox","TableWithNoData","DragAndDropTable","EditComponentTable","WithAccordion","ScrollToCallBack"];export{M as Default,L as DragAndDropTable,$ as EditComponentTable,W as FixedHeaderWithBorder,q as PageTable,V as PrimaryHeader,F as PrimaryHeaderTextColor,X as ScrollToCallBack,w as TableDataTextColor,U as TableWithNoData,z as WithAccordion,H as WithCheckBox,ka as __namedExportsOrder,Ea as default};
