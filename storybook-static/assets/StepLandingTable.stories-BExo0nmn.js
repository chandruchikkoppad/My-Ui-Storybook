import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as p}from"./index-DJO9vBfz.js";import{c as U}from"./index-NZcV-alF.js";import{I as z}from"./Icon-BnrH6PuI.js";/* empty css              */import{T as J}from"./Typography-DdMJCn-_.js";import{a as oe,S as ce,c as pe,R as ue,E as me}from"./EditComponent-CQ5S3ZKh.js";import{i as fe}from"./functionUtils-C4j6ouf0.js";import{p as he}from"./TableCell-ByBSS-ya.js";import{C as le}from"./Checkbox-DE1WcxCl.js";import{c as ge,d as xe,S as be,v as ye,u as Ne,C as ve}from"./sortable.esm-DSTFstQe.js";import{t as Ie}from"./truncateText-D2e1-n0F.js";import{T as se}from"./Tooltip-jHEmaokv.js";import{f as S}from"./ffid-Ct76gIPn.js";import{I as ee}from"./IconButton-DADAjSNQ.js";import{n as Ce}from"./sampleData-DguosTgJ.js";import{r as Se}from"./dragAndDropUtils-BEtkLlDX.js";import{D as De}from"./Drawer-Bj9d4h3e.js";import"./checkEmpty-xi6SckPb.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./Select-BJocvAjy.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./usePortalPosition-DKFkIZLt.js";import"./Forms-BG_2S6F-.js";import"./useIntersectionObserver-CzfTHjMy.js";import"./useEscKeyEvent-_4Zk5j0a.js";const Z=({data:a,level:d=6,columnCount:j=1,viewModeId:u,ViewComponent:D,handleClick:r,tableType:m,handleStepGroupExpand:V,isStepGroupExpanded:c})=>{const f=s=>["Group","PRE","POST","Script"].includes(s.type)?"4px 8px":"7px 8px";return e.jsx(e.Fragment,{children:a==null?void 0:a.map(s=>e.jsxs(p.Fragment,{children:[u===s.stepId?e.jsx("tr",{className:"steps-edit-row",children:e.jsx("td",{colSpan:j,children:e.jsx("div",{style:{marginLeft:`${8*d}px`},children:D&&e.jsx(D,{})})})}):e.jsx("tr",{children:e.jsx("td",{colSpan:j,children:e.jsxs("div",{style:{marginLeft:`${8*d}px`,display:"flex",alignItems:"center",padding:`${f(s)}`},children:[e.jsx(se,{title:s==null?void 0:s.name,children:e.jsxs(J,{as:"div",color:"var(--brand-color)",lineHeight:"18px",onClick:()=>r==null?void 0:r({...s,tableType:m}),children:[s.displayOrder,".",Ie(s.name,40)]})}),["Group","PRE","POST","Script"].includes(s.type)&&e.jsx("div",{className:`ff-accordion-arrow ${c!=null&&c(s.stepId)?"expanded":""}`,children:e.jsx(z,{name:"arrow_right",color:c!=null&&c(s.stepId)?"var(--brand-color)":"var(--default-color)",className:"steps-arrow-svg",width:16,height:16,onClick:()=>V&&V({...s,tableType:m})})})]})})}),(c==null?void 0:c(s.stepId))&&e.jsx(Z,{data:s.data,level:d+1,columnCount:j,viewModeId:u,handleClick:r,ViewComponent:D,tableType:m,handleStepGroupExpand:V,isStepGroupExpanded:c})]},s.stepId))})};try{Z.displayName="StepGroupAccordions",Z.__docgenInfo={description:"",displayName:"StepGroupAccordions",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"DataProps[]"}},level:{defaultValue:{value:"6"},description:"",name:"level",required:!1,type:{name:"number"}},columnCount:{defaultValue:{value:"1"},description:"",name:"columnCount",required:!1,type:{name:"number"}},viewModeId:{defaultValue:null,description:"",name:"viewModeId",required:!1,type:{name:"string | null"}},ViewComponent:{defaultValue:null,description:"",name:"ViewComponent",required:!1,type:{name:"FC<{}> | null"}},tableType:{defaultValue:null,description:"",name:"tableType",required:!1,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((item: DataProps) => void)"}},handleStepGroupExpand:{defaultValue:null,description:"",name:"handleStepGroupExpand",required:!1,type:{name:"((item: DataProps) => void)"}},isStepGroupExpanded:{defaultValue:null,description:"",name:"isStepGroupExpanded",required:!1,type:{name:"((stepId: string) => boolean)"}}}}}catch{}const _e=({row:a,columns:d,tableBodyRowClass:j,handleOnclick:u,tableDataTextColor:D,withCheckbox:r,onSelectClick:m,draggable:V,indexNumber:c,tableType:f="",viewModeId:s,ViewComponent:L,handleClick:k,selectedRows:R,handleStepGroupExpand:N,isStepGroupExpanded:x,dataLength:O})=>{const _=p.useMemo(()=>(a==null?void 0:a.isDisabled)||(O??0)<=1||a.isSpecialNlp,[a,O]),{attributes:P,listeners:n,setNodeRef:g,transform:I,transition:A}=Ne({id:(a==null?void 0:a._id)||(a==null?void 0:a.stepId),disabled:_}),H=p.useMemo(()=>({transform:ve.Transform.toString(I),transition:A}),[I,A]),T=a._id||a.stepId,$=b=>b!==0?f==="Steps"?"4px 8px":"7px 8px":f==="Steps"&&V?"4px 8px 4px 0px":"4px 8px 4px 24px",W=()=>e.jsx("div",{className:_?"ff-table-drag":"ff-table-drag-icon",...n,...P,children:e.jsx("span",{style:{opacity:_?"0":"",cursor:_?"default":"grab"},children:e.jsx(z,{name:"drag"})})}),E=()=>{var b,w;return e.jsx("span",{className:f&&((b=R[f])!=null&&b.has(a.stepId))?"":"ff-table-checkbox",children:e.jsx(le,{onChange:B=>m(f,a,B.target.checked),checked:!!((w=R[f])!=null&&w.has(a.stepId))})})},F=()=>e.jsx("div",{className:`ff-accordion-arrow ${x!=null&&x(a==null?void 0:a.stepId)?"expanded":""}`,children:e.jsx(z,{name:"arrow_right",className:"steps-arrow-svg",color:x!=null&&x(a==null?void 0:a.stepId)?"var(--brand-color)":"var(--default-color)",width:16,height:16,onClick:()=>N==null?void 0:N({...a,tableType:f})})});return e.jsxs(e.Fragment,{children:[e.jsx("tr",{ref:g,style:H,className:U(j,{"disabled-inner-row":_}),children:d==null?void 0:d.map((b,w)=>{var B;return e.jsx(e.Fragment,{children:e.jsx("td",{style:{padding:$(w),maxWidth:b.width},onClick:()=>u(b,a,c),children:e.jsxs(J,{as:"div",color:D,className:"ff-data-checkbox-container",children:[w===0&&V&&W(),w===0&&r&&E(),e.jsxs("div",{className:"ff-margin-container",style:{marginLeft:w===0?a.marginLeft:0},children:[he(a,b,c,f),["Group","PRE","POST","Script"].includes(a.type)&&w===0&&F(),(B=b.extraInfo)==null?void 0:B.call(b,{row:a,indexNumber:c,tableType:f})]})]})},`${b.accessor}-${S()}`)})})},T),(x==null?void 0:x(a==null?void 0:a.stepId))&&e.jsx(Z,{data:a.data,columnCount:d.length,viewModeId:s,ViewComponent:L,handleClick:k,tableType:f,handleStepGroupExpand:N,isStepGroupExpanded:x})]})},te=({data:a=[],columns:d=[],headerType:j,withCheckbox:u=!1,onSelect:D,withFixedHeader:r=!0,borderWithRadius:m=!1,noDataContent:V,height:c="100%",className:f="",tableBodyRowClass:s="",headerTextColor:L,tableDataTextColor:k,draggable:R=!1,onDragEnd:N,loadMore:x=()=>{},editMode:O="",editComponent:_,NlpComponent:P,AddNlp:n,handleDragStart:g,tableType:I,viewModeId:A,ViewComponent:H,handleClick:T,selectedRows:$,handleStepGroupExpand:W,isStepGroupExpanded:E})=>{var K;const F=p.useRef(null);p.useEffect(()=>{const l=document.getElementById("ff-table-scroll-container"),y=document.getElementById("ff-table-first-node"),h=document.getElementById("ff-table-last-node");if(!(!l||!y||!h||!(a!=null&&a.length)))return F.current=new IntersectionObserver(v=>{v.forEach(M=>{if(M.isIntersecting){const t=M.target.id==="ff-table-last-node"?"below":"above";x(t)}})},{root:l,rootMargin:"8px",threshold:.1}),F.current.observe(y),F.current.observe(h),()=>{var v;(v=F.current)==null||v.disconnect()}},[a,x]);const b=(l,y,h)=>{let{onClick:v,accessor:M}=l;v&&fe(v)&&v(M,y,h)},w=(l,y,h)=>{D&&D(l,y,h)},B=l=>{const{active:y,over:h}=l;if(!h||y.id===h.id)return;const v=a.findIndex(t=>t._id===y.id||t.stepId===y.id),M=a.findIndex(t=>t._id===h.id||t.stepId===h.id);v===-1||M===-1||N&&N(v,M)};return e.jsx(ge,{collisionDetection:xe,onDragStart:g,onDragEnd:B,children:e.jsx(be,{disabled:!R,items:a==null?void 0:a.map(l=>l._id||l.stepId),strategy:ye,children:e.jsxs("div",{style:{height:c,position:"relative"},id:"ff-table-scroll-container",className:U(f,{"ff-fixed-header-steps-table":r,"steps-border-borderRadius":m}),children:[e.jsxs("table",{className:U("ff-table-steps"),cellSpacing:0,children:[e.jsx("thead",{className:"steps-inner-thead",children:e.jsx("tr",{children:d==null?void 0:d.map(l=>e.jsx("th",{className:U(`${j&&`${j}-bg`}`,`${L&&`${L}-color`}`),style:{width:l==null?void 0:l.width}},`${l.header}-${S()}`))})}),e.jsxs("tbody",{className:"ff-steps-tbody",children:[e.jsx("tr",{id:"ff-table-first-node"}),(K=oe(a,n??{}))==null?void 0:K.map((l,y)=>{const h=O===l.stepId;return h||l.isNew?e.jsxs("tr",{className:"steps-edit-row",children:[h&&p.isValidElement(_)&&e.jsx("td",{colSpan:d.length,children:p.cloneElement(_,{rowData:l,rowIndex:y+1})}),l.isNew&&!h&&p.isValidElement(P)&&e.jsx("td",{colSpan:d.length,children:p.cloneElement(P,{rowIndex:y,rowData:l})})]},l.stepId||y):e.jsx(_e,{row:l,indexNumber:y,columns:d,tableBodyRowClass:s,handleOnclick:b,tableDataTextColor:k,withCheckbox:u,onSelectClick:w,draggable:R,tableType:I,viewModeId:A,ViewComponent:H,handleClick:T,selectedRows:$,handleStepGroupExpand:W,isStepGroupExpanded:E,dataLength:a==null?void 0:a.length})}),e.jsx("tr",{id:"ff-table-last-node"})]})]}),(a==null?void 0:a.length)<=0&&e.jsx("div",{className:"steps-no-data-content",style:{height:`calc(${c} - 50px)`},children:V})]})})})};try{StepInnerTable.displayName="StepInnerTable",StepInnerTable.__docgenInfo={description:"",displayName:"StepInnerTable",props:{data:{defaultValue:{value:"[]"},description:"Data for table",name:"data",required:!1,type:{name:"(string | number | DataProps)[]"}},columns:{defaultValue:{value:"[]"},description:"Column details for table",name:"columns",required:!1,type:{name:"any[]"}},headerType:{defaultValue:null,description:"Header type to have different background color",name:"headerType",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"default"'}]}},withFixedHeader:{defaultValue:{value:"true"},description:"withFixedHeader prop to have non-scrollable fixed table header",name:"withFixedHeader",required:!1,type:{name:"boolean"}},borderWithRadius:{defaultValue:{value:"false"},description:"borderWithRadius prop to have table with border 1px and borderRadius 5px",name:"borderWithRadius",required:!1,type:{name:"boolean"}},withCheckbox:{defaultValue:{value:"false"},description:"Check box feature to select the row",name:"withCheckbox",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"Event for checkbox onClick",name:"onSelect",required:!1,type:{name:"((tableType: string, rowData: any, isChecked: boolean) => void)"}},selectedRows:{defaultValue:null,description:"",name:"selectedRows",required:!1,type:{name:"any"}},allSelected:{defaultValue:null,description:"Check box feature to select the row",name:"allSelected",required:!1,type:{name:"boolean"}},partialSelected:{defaultValue:null,description:"send true to show partial checkbox in the header",name:"partialSelected",required:!1,type:{name:"boolean"}},headerCheckboxDisabled:{defaultValue:null,description:"send true to disable the checkbox in the header",name:"headerCheckboxDisabled",required:!1,type:{name:"boolean"}},noDataContent:{defaultValue:null,description:"The content that to be displayed if no data not found",name:"noDataContent",required:!0,type:{name:"ReactNode"}},noDataImage:{defaultValue:null,description:"Image that to be displayed if you don't have data",name:"noDataImage",required:!1,type:{name:"string"}},noDataImageSize:{defaultValue:null,description:"Size of the image that to be displayed if you don't have data",name:"noDataImageSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"x-large"'},{value:'"x-small"'}]}},height:{defaultValue:{value:"100%"},description:"Height of the table in string",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"classNames for the table container",name:"className",required:!1,type:{name:"string"}},tableBodyRowClass:{defaultValue:{value:""},description:"",name:"tableBodyRowClass",required:!1,type:{name:"string"}},headerTextColor:{defaultValue:null,description:"custom color for the column text",name:"headerTextColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},tableDataTextColor:{defaultValue:null,description:"custom color for the row text",name:"tableDataTextColor",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:"icon for the table header, for expand or other purposes",name:"draggable",required:!1,type:{name:"boolean"}},onDragEnd:{defaultValue:null,description:"Drag and Drop indexes",name:"onDragEnd",required:!1,type:{name:"((startIndex: number, endIndex: number) => void)"}},loadMore:{defaultValue:{value:"() => {}"},description:"",name:"loadMore",required:!1,type:{name:"((_direction?: string) => void)"}},editMode:{defaultValue:{value:""},description:"enable editMode by setting state row id",name:"editMode",required:!1,type:{name:"string | number"}},editComponent:{defaultValue:null,description:"The content that to be displayed if editComponent",name:"editComponent",required:!1,type:{name:"ReactNode"}},NlpComponent:{defaultValue:null,description:"The content that to be displayed NlpInput Component",name:"NlpComponent",required:!1,type:{name:"ReactNode"}},AddNlp:{defaultValue:null,description:"state for the Add new Row in Table",name:"AddNlp",required:!1,type:{name:"AddNlpProp | null"}},handleDragStart:{defaultValue:null,description:"handle function for Drag Starting in the Table",name:"handleDragStart",required:!1,type:{name:"VoidFunction"}},tableType:{defaultValue:{value:""},description:"",name:"tableType",required:!1,type:{name:"string"}},viewModeId:{defaultValue:null,description:"",name:"viewModeId",required:!1,type:{name:"string | null"}},ViewComponent:{defaultValue:null,description:"",name:"ViewComponent",required:!1,type:{name:"FC<{}> | null"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((item: DataProps) => void)"}},handleStepGroupExpand:{defaultValue:null,description:"",name:"handleStepGroupExpand",required:!1,type:{name:"((item: DataProps) => void)"}},isStepGroupExpanded:{defaultValue:null,description:"",name:"isStepGroupExpanded",required:!1,type:{name:"((stepId: string) => boolean)"}}}}}catch{}const Q=({tableMeta:a=[],tableData:d=[],noDataContent:j,height:u="100%",withFixedHeader:D=!1,headerType:r,handleDragStart:m,onDragEnd:V,editMode:c,editComponent:f,NlpComponent:s,AddNlp:L,handleAccordion:k,handleViewComponent:R,onSelectClick:N,loading:x=!1,isViewPrivilegeMode:O=!1})=>{const[_,P]=p.useState(null),[n,g]=p.useState(null),[I,A]=p.useState({});p.useEffect(()=>{A(t=>{const i={};return d.forEach(o=>{i[o.title]=o.title in t?t[o.title]??!1:o.title==="Steps"}),i})},[d]);const H=t=>{A(i=>({...i,[t]:!i[t]}))},T=p.useMemo(()=>t=>I[t]??!1,[I]),$=t=>{g(i=>i===(t==null?void 0:t.stepId)?null:t==null?void 0:t.stepId)},W=t=>{$(t);const i=R==null?void 0:R(t,$);i?P(()=>i):$(null)},[E,F]=p.useState(Object.fromEntries(d.map(t=>[t.title,new Set])));p.useEffect(()=>{(i=>Object.values(i).some(o=>o.size>0))(E)?N==null||N(E):N==null||N(null)},[E]);const b=(t,i,o)=>{F(q=>{const C=new Set(q[t]);return o?C.add(i.stepId):C.delete(i.stepId),{...q,[t]:C}})},w=(t,i)=>{var q;const o=(q=d.find(C=>C.title===t))==null?void 0:q.data.map(C=>C.stepId);o&&F(C=>({...C,[t]:i?new Set(o):new Set}))},B=(t,i)=>{var o;return i>0&&((o=E[t])==null?void 0:o.size)===i},K=(t,i)=>{var q;const o=((q=E[t])==null?void 0:q.size)||0;return o>0&&o<i},[l,y]=p.useState(new Map),h=t=>l.has(t),v=t=>{h(t==null?void 0:t.stepId)||k==null||k(t),x||y(i=>{const o=new Map(i);return o.has(t==null?void 0:t.stepId)?o.delete(t==null?void 0:t.stepId):o.set(t==null?void 0:t.stepId,!0),o})},M=t=>t.title==="Steps"?e.jsx(te,{draggable:!O,columns:a,onDragEnd:V,data:t.data,headerType:r,withCheckbox:!0,editMode:c,editComponent:f,noDataContent:j,NlpComponent:s,AddNlp:L,tableType:t.title,handleDragStart:()=>{l.clear(),m==null||m()},onSelect:b,selectedRows:E,viewModeId:n,ViewComponent:_,handleClick:W,handleStepGroupExpand:v,isStepGroupExpanded:h}):e.jsx(te,{editMode:c,withCheckbox:!0,editComponent:f,columns:a,data:t.data,headerType:r,noDataContent:void 0,tableType:t.title,onSelect:b,selectedRows:E,viewModeId:n,ViewComponent:_,handleClick:W,handleStepGroupExpand:v,isStepGroupExpanded:h});return e.jsxs("div",{className:U("ff-accordion-table-container-steps",{"ff-accordion-fixed-header-table":D}),children:[e.jsx("table",{cellSpacing:0,className:U("ff-accordion-table",{"ff-accordion-fixed-header":D}),children:e.jsx("thead",{className:"table-thead",children:e.jsx("tr",{className:"ff-table-row",children:a.map((t,i)=>e.jsx("th",{style:{width:t==null?void 0:t.width},className:U("ff-table-header",r&&`ff-accordion-table--${r}-bg`),children:e.jsx(J,{as:"div",fontWeight:"semi-bold",lineHeight:"18px",color:"var(--drawer-title-color)",children:t.header})},`${t.header}-${i}`))})})}),e.jsx("div",{className:"ff-accordion-table-body",style:{height:u},children:d.map(t=>{var G;const{title:i,data:o,actionCell:q}=t,C=o.length,Y=T(i),de=(((G=E[i])==null?void 0:G.size)??0)>0&&C>0&&q;return e.jsxs("div",{className:"column-table-accordion",children:[e.jsx("div",{className:"ff-display-flex",children:e.jsxs("div",{className:"accordion-header",children:[e.jsx("div",{children:e.jsx(le,{onChange:re=>w(i,re.target.checked),checked:B(i,C),partial:K(i,C),disabled:C===0})}),e.jsx("div",{className:"header-title",children:e.jsx(J,{as:"div",fontWeight:"semi-bold",color:"var(--nlp-option-color)",cursor:"default",lineHeight:"18px",children:i})}),e.jsx("div",{className:`accordion-arrow ${Y?"expanded":""}`,onClick:()=>H(i),children:e.jsx(z,{name:"arrow_right",color:Y?"var(--brand-color)":"var(--default-color)",width:16,height:16,className:"steps-arrow-svg"})}),de&&e.jsx("div",{children:q(t)})]})}),Y&&M(t)]},i)})})]})};try{Q.displayName="StepLandingTable",Q.__docgenInfo={description:"",displayName:"StepLandingTable",props:{tableMeta:{defaultValue:{value:"[]"},description:"Column details for table",name:"tableMeta",required:!1,type:{name:"ColumnProps[]"}},tableData:{defaultValue:{value:"[]"},description:"Data for table",name:"tableData",required:!1,type:{name:"DataProps[]"}},noDataContent:{defaultValue:null,description:"Specific sentence to be displayed data not found",name:"noDataContent",required:!1,type:{name:"ReactNode"}},withFixedHeader:{defaultValue:{value:"false"},description:"withFixedHeader prop to have non-scrollable fixed accordion table header",name:"withFixedHeader",required:!1,type:{name:"boolean"}},height:{defaultValue:{value:"100%"},description:"Height of the table in string",name:"height",required:!1,type:{name:"string"}},headerType:{defaultValue:null,description:"Header type to have different background color",name:"headerType",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"default"'}]}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((startIndex: number, endIndex: number) => void)"}},editMode:{defaultValue:null,description:"",name:"editMode",required:!1,type:{name:"string | number"}},editComponent:{defaultValue:null,description:"The content that to be displayed if editComponent",name:"editComponent",required:!1,type:{name:"ReactNode"}},NlpComponent:{defaultValue:null,description:"The content that to be displayed NlpInput Component",name:"NlpComponent",required:!1,type:{name:"ReactNode"}},AddNlp:{defaultValue:null,description:"state for the Add new Row in Table",name:"AddNlp",required:!1,type:{name:"AddNlpProp | null"}},handleDragStart:{defaultValue:null,description:"handle function for Drag Starting in the Table",name:"handleDragStart",required:!1,type:{name:"VoidFunction"}},handleAccordion:{defaultValue:null,description:"",name:"handleAccordion",required:!1,type:{name:"((e: any) => void)"}},onSelectClick:{defaultValue:null,description:"Event for checkbox onClick",name:"onSelectClick",required:!1,type:{name:"((e: any) => void)"}},handleViewComponent:{defaultValue:null,description:"Check box feature to select the row",name:"handleViewComponent",required:!1,type:{name:"((_rowData: DataProps, _toggleViewRow: (_val: null) => void) => (() => ReactElement<any, string | JSXElementConstructor<any>>) | null)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},isViewPrivilegeMode:{defaultValue:{value:"false"},description:"",name:"isViewPrivilegeMode",required:!1,type:{name:"boolean"}}}}}catch{}const lt={title:"Components/StepLandingTable",component:Q,parameters:{layout:"centered"},tags:["autodocs"]},je=[{title:"Depends on Script",data:[{stepId:S(),name:"Open Browser",modifiedBy:"Ram",suiteName:"test",isDisabled:!0,marginLeft:0}]},{title:"Pre conditions",data:[{stepId:S(),name:"Open Browser",modifiedBy:"Ram",suiteName:"test",isDisabled:!0,type:"PRE"},{stepId:S(),name:"Close Browser",modifiedBy:"Ram",suiteName:"test"}]},{title:"Steps",data:[{stepId:S(),name:"Open Browser hg uiyguyg iugiug uiggiug uighuyg busdyguygau guywge gwDGUIg iuhgaiudgh iuggiug uyguyg",modifiedBy:"Ram",suiteName:"suite1",isSpecialNlp:!0,marginLeft:0},{stepId:S(),name:"Start if",modifiedBy:"Laxman",suiteName:"suite 2",specialNlp:!0,marginLeft:0},{stepId:S(),name:"wait for a sec",modifiedBy:"Laxman",suiteName:"suite 2",marginLeft:8},{stepId:S(),name:"End if",modifiedBy:"Laxman",suiteName:"suite 2",marginLeft:0},{stepId:S(),name:"wait for Second",modifiedBy:"Laxman",suiteName:"suite 2",marginLeft:80},{stepId:S(),name:"Click on Element Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque corrupti exercitationem amet voluptatem ex nulla dolor vitae deleniti, ullam perferendis in esse tempore! Distinctio rem, vero ut eligendi voluptate a",modifiedBy:"Laxman",suiteName:"suite 2",marginLeft:0}],actionCell:({row:a})=>e.jsx("div",{children:e.jsx(z,{name:"edit"})})},{title:"Post conditions",data:[{stepId:S(),name:"close browser",modifiedBy:"Krishna",suiteName:"test 2",type:"POST"}]}],X={render:()=>{const[a,d]=p.useState(je),[j,u]=p.useState(""),[D,r]=p.useState(),[m,V]=p.useState(!0),c=(n,g)=>n.stepId?()=>e.jsx(ce,{rowData:n,toggleViewRow:g}):null,f=[{stepId:S(),name:"New Step 1",modifiedBy:"User",suiteName:"test suite",type:"PRE",displayOrder:"1.1",stepInputs:[{name:"ExpectedFilePath",value:"Root/Login/Jira (1).csv"},{name:"ExpectedFilePath",value:"ExpectedFilePath"},{name:"if CheckPoint Is Failed",value:"MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION"}]},{stepId:S(),name:"New Step 2",modifiedBy:"User",suiteName:"test suite",displayOrder:"1.2",stepInputs:[{name:"ExpectedFilePath",value:"Root/Login/Jira (1).csv"},{name:"ExpectedFilePath",value:"ExpectedFilePath"},{name:"if Failed",value:"MARK_THIS_STEP_AS_FAILED_AND_CONTINUE_STEP_GROUP_EXECUTION"}]}],s=n=>{const g=pe(a,n.tableType,n.stepId,f);d(g)},L=[{header:"Description",accessor:"name",width:m?470:700,cell:({row:n,value:g,index:I})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"column_data",children:e.jsx(se,{title:g,children:e.jsx("div",{style:{display:"flex",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:m?220:700},children:e.jsxs(J,{as:"div",color:"var(--brand-color)",lineHeight:"18px",onClick:()=>{n!=null&&n.isDisabled||(r({}),u(n.stepId))},style:{opacity:n!=null&&n.isDisabled?"0.5":""},children:[I+1,".",g]})})})})}),extraInfo:({row:n,indexNumber:g,tableType:I})=>{if(I==="Steps")return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"icon-container",style:{cursor:"pointer",display:"flex",alignItems:"center"},children:[e.jsx(z,{name:"add_file",hoverEffect:!1,height:8,width:8,onClick:()=>{u(""),r({action:"addBelow",sourceIndex:g})}}),!(n!=null&&n.isDisabled)&&e.jsx(z,{name:"edit",disabled:n==null?void 0:n.isDisabled,onClick:()=>{u(""),r({action:"EditNlp",sourceIndex:g,nlpName:n==null?void 0:n.name})}})]})})}},{header:"Results",accessor:"suiteName",width:m?300:400},{header:"Status",accessor:"suiteName",width:m?100:150}],k=n=>{console.warn("NlpONChange",n)},R=n=>{u(n.stepId),r({action:"replaceNlp",sourceIndex:n.indexValue})},N=(n,g)=>{r({}),u("")},x=n=>{r({}),u("")},O=()=>{r({}),u("")},_=(n,g)=>{const I=a.find(T=>T.title==="Steps");if(!I)return;const A=Se(I.data,n,g),H=a.map(T=>T.title==="Steps"?{...T,data:A}:T);d(H)},P=n=>{switch(n){case"noDataContent":return e.jsx(ee,{iconName:"add_file",label:"Add",onClick:()=>{u(""),r({action:"addLast"})}});case"Edit":return e.jsx(me,{handleCancel:O,handleAdd:N});case"NlpInput":return e.jsx(ue,{nlpList:Ce,handelChangeNlp:k,handleNlpSelect:R,optionZIndex:1500})}};return e.jsx(e.Fragment,{children:e.jsx(De,{isOpen:!0,top:"89px",right:9,height:"calc(100% - 92px)",size:m?"large":"x-large",isFooterRequired:!1,_isCloseModalButtonVisible:!1,title:e.jsxs(e.Fragment,{children:[e.jsx(z,{hoverEffect:!0,name:m?"maximize_script":"minimize_script",onClick:()=>V(!m)}),e.jsx(ee,{iconName:"add_file",label:"Add",onClick:()=>{u(""),r({action:"addLast"})}})]}),children:e.jsx(Q,{tableMeta:L,tableData:a,headerType:"default",AddNlp:D,editMode:j,noDataContent:P("noDataContent"),handleDragStart:()=>{r({}),u("")},onDragEnd:_,NlpComponent:P("NlpInput"),editComponent:P("Edit"),handleAccordion:s,onSelectClick:x,handleViewComponent:c,height:"500px",isViewPrivilegeMode:!1})})})}};var ae,ne,ie;X.parameters={...X.parameters,docs:{...(ae=X.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [tableData, setTableData] = useState<any>(sampleData);
    const [editMode, setEditMode] = useState<any>('');
    const [AddNewNlp, setNewNlp] = useState<AddNlpProp>();
    const [isMaximize, setDoMaximize] = useState(true);
    const handleViewComponent = (data: any, toggleViewRow: any) => {
      if (data.stepId) {
        return () => <StepGroupDetailView rowData={data} toggleViewRow={toggleViewRow} />;
      }
      return null;
    };
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
      const updatedData = addStepGroup(tableData, row.tableType, row.stepId, newSteps);
      setTableData(updatedData);
    };
    const columnsData = [{
      header: 'Description',
      accessor: 'name',
      width: isMaximize ? 470 : 700,
      cell: ({
        row,
        value,
        index
      }: DynamicObj) => {
        return <>\r
              <div className="column_data">\r
                <Tooltip title={value}>\r
                  <div style={{
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: isMaximize ? 220 : 700
              }}>\r
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
                  </div>\r
                </Tooltip>\r
              </div>\r
            </>;
      },
      extraInfo: ({
        row,
        indexNumber,
        tableType
      }: DynamicObj) => {
        if (tableType === 'Steps') {
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
                  nlpName: row?.name
                });
              }} />}\r
                </div>\r
              </>;
        }
      }
    }, {
      header: 'Results',
      accessor: 'suiteName',
      width: isMaximize ? 300 : 400
    }, {
      header: 'Status',
      accessor: 'suiteName',
      width: isMaximize ? 100 : 150
    }];
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
    const handleSave = (_, index: number) => {
      setNewNlp({});
      setEditMode('');
      //? uncomments this below for add And continue
      // setNewNlp({ action: 'addBelow', sourceIndex: index - 1 });
    };
    const onSelectClick = (data: any) => {
      setNewNlp({});
      setEditMode('');
    };
    const handleCancel = () => {
      setNewNlp({});
      setEditMode('');
    };
    const onDragEnd = (oldIndex: number, newIndex: number) => {
      const filterStep = tableData.find(item => item.title === 'Steps');
      if (!filterStep) return;
      const updatedData = rearrangeDragItem(filterStep.data, oldIndex, newIndex);
      const updatedTableData = tableData.map(item => item.title === 'Steps' ? {
        ...item,
        data: updatedData
      } : item);
      setTableData(updatedTableData);
    };
    const handleComponent = (action: string) => {
      switch (action) {
        case 'noDataContent':
          {
            return <IconButton iconName="add_file" label="Add" onClick={() => {
              setEditMode('');
              setNewNlp({
                action: 'addLast'
              });
            }} />;
          }
        case 'Edit':
          {
            return <EditComponent handleCancel={handleCancel} handleAdd={handleSave} />;
          }
        case 'NlpInput':
          {
            return <RenderNlpInput nlpList={nlpList} handelChangeNlp={handelChange} handleNlpSelect={handleNlpSelect} optionZIndex={1500} />;
          }
        default:
          {
            <></>;
          }
      }
    };
    return <>\r
        <Drawer isOpen={true} top="89px" right={9} height="calc(100% - 92px)" size={isMaximize ? 'large' : 'x-large'} isFooterRequired={false} _isCloseModalButtonVisible={false} title={<>\r
              <Icon hoverEffect name={isMaximize ? 'maximize_script' : 'minimize_script'} onClick={() => setDoMaximize(!isMaximize)} />\r
              <IconButton iconName="add_file" label="Add" onClick={() => {
          setEditMode('');
          setNewNlp({
            action: 'addLast'
          });
        }} />\r
            </>}>\r
          <StepLandingTable tableMeta={columnsData} tableData={tableData} headerType={'default'} AddNlp={AddNewNlp} editMode={editMode} noDataContent={handleComponent('noDataContent')} handleDragStart={() => {
          setNewNlp({});
          setEditMode('');
        }} onDragEnd={onDragEnd} NlpComponent={handleComponent('NlpInput')} editComponent={handleComponent('Edit')} handleAccordion={handleAccordion} onSelectClick={onSelectClick} handleViewComponent={handleViewComponent} height="500px" isViewPrivilegeMode={false} />\r
        </Drawer>\r
      </>;
  }
}`,...(ie=(ne=X.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const st=["StepLandingTableAcc"];export{X as StepLandingTableAcc,st as __namedExportsOrder,lt as default};
