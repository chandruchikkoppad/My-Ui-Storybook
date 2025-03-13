import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{c as y}from"./index-NZcV-alF.js";import{c as A}from"./checkEmpty-xi6SckPb.js";import{B as ne}from"./Button-CpFgCZ6s.js";import{I as _}from"./Icon-BnrH6PuI.js";import{S as te}from"./Select-BJocvAjy.js";import{T as R}from"./Typography-DdMJCn-_.js";import{r as V}from"./index-DJO9vBfz.js";import{f as K}from"./ffid-Ct76gIPn.js";import{M as re}from"./MachineInputField-DXoXcxPr.js";import{T as Z}from"./Tooltip-jHEmaokv.js";/* empty css                */import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./usePortalPosition-DKFkIZLt.js";import"./truncateText-D2e1-n0F.js";const $=({datSetToolTip:{globalVariableSetName:n="",peVariableSetName:d="",testDataSetName:o=""}})=>{const s={"Test Data Set":o,"Global Variable Set":n,"Project Environment Set":d};return e.jsx(e.Fragment,{children:Object.entries(s).map(([u,I],b)=>e.jsx("div",{className:"ff-dataSetList-container",children:e.jsxs("div",{children:[e.jsx(R,{as:"div",fontSize:10,lineHeight:"15px",color:"var(--details-page-value-color)",className:"ff-dataSetList-items",children:u}),e.jsx(R,{as:"div",lineHeight:"18px",color:"var(--base-bg-color)",children:I})]})},b))})};try{$.displayName="DataSetTooltip",$.__docgenInfo={description:"",displayName:"DataSetTooltip",props:{datSetToolTip:{defaultValue:null,description:"",name:"datSetToolTip",required:!0,type:{name:"DataSetToolTip"}}}}}catch{}const se=n=>typeof n=="object"&&Object.keys(n).length===0,J=({machineInstances:n,rowIndex:d,machineColumnCount:o,machineColumnWidth:s,nextRowMachineInstance:u,previousRowMachineInstance:I,onAddBrowser:b,onDeleteBrowser:C,onAddRunBrowser:T,onUpdateDataSetList:j,onUpdateAddBrowserInstance:M,addInstanceLabel:D="",scriptType:q="",projectType:F="",readOnly:f,maxRunCount:h})=>{const a=d%2===0,i=A(n[o-1]),v=()=>f?!i&&!A(u):!i,m=(t,c)=>t&&c&&"machineInstanceId"in t&&"machineInstanceId"in c&&t.machineInstanceId===c.machineInstanceId?"dashed":"solid",p=t=>n.length-1!==t&&o>1,W=()=>o===1?`24px ${s}px 24px`:`24px ${s}px repeat(${o-1}, 40px ${s}px) 24px`,P=(t="",c)=>{const{executionEnv:r,browserName:N,browserVersion:l,machineInfo:{osVersion:O,iconName:k},deviceInfo:E}=c,g=[{label:r,type:((w="")=>w.toLowerCase().includes("browserstack")?"Browserstack":w.toLowerCase().includes("lambdatest")?"LambdaTest":w.toLowerCase().includes("saucelabs")?"SauceLabs":"")(r)}],S=[{label:O,type:k},{label:l,type:N}],x=E==null?void 0:E.reduce((w,L,ae)=>(L!=null&&L.name&&w.push({label:L.name,type:ae===0?"android":"mac"}),w),[]);switch(t.toLowerCase()){case"web":return[...g,...S];case"web & mobile":return[...g,...S,...x];case"mobile":return[...g,...x];default:return[]}},H=q.toLowerCase()!=="manual",z=t=>A(t)?se(t)||u!==void 0:!0;return e.jsxs("div",{className:y({"ff-connecting-branch-grid":a,"ff-connecting-branch-grid-reverse":!a}),style:{gridTemplateColumns:W()},children:[e.jsxs("div",{className:"ff-connecting-branch-start-wrapper",children:[e.jsx("div",{className:y({"ff-connecting-branch-arrow":a,"ff-connecting-branch-arrow-reverse":!a})}),e.jsx("div",{className:y({"ff-connecting-branch-container":a,"ff-connecting-branch-container-reverse":!a}),style:{border:`1px ${m(n[0],I)} var(--ff-connecting-branch-color)`,borderTop:"none",borderLeft:`${!a&&"none"}`,borderRight:`${a&&"none"}`}})]}),n==null?void 0:n.map((t,c)=>{const{runCount:r="runCount"in t?t.runCount:0,numberOfRuns:N=0,machineInstanceId:l="",peVariableSetId:O="",globalVariableSetId:k="",testDataSetId:E="",testDataSetName:B="",peVariableSetName:g="",globalVariableSetName:S=""}=t;return e.jsxs(e.Fragment,{children:[A(t)?!f&&e.jsx("div",{className:"ff-connecting-branch-browser-button",children:e.jsx(ne,{id:`ff-sequential-branch-add-${l}`,variant:"secondary",label:D,onClick:()=>{f||b(`ff-sequential-branch-add-${l}`)}})}):e.jsxs("div",{children:[e.jsxs("div",{className:"ff-connecting-branch-input-point-wrapper",children:[z(n[c+1])&&e.jsx("div",{className:y({"ff-connecting-branch-point":a,"ff-connecting-branch-point-reverse":!a})}),e.jsx(re,{width:`${s}px`,runCount:r,options:P(F,t),contentReverse:!a,modalId:`${l}-runCount-${r-1}`,onClick:()=>M(`${l}-runCount-0`,t),trucatedLable:!["web & mobile"].includes(F),scriptType:q,readOnly:f},K())]}),e.jsxs("div",{className:y({"ff-connecting-branch-datalist":a,"ff-connecting-branch-datalist-reverse":!a}),children:[H&&e.jsxs(e.Fragment,{children:[e.jsx("div",{id:`ff-sequential-branch-dataset-${l}-${r}`,className:"ff-dataset-list-branch",onClick:()=>{f||j(`ff-sequential-branch-dataset-${l}-${r}`,{peVariableSetId:O,globalVariableSetId:k,testDataSetId:E,testDataSetName:B,globalVariableSetName:S,peVariableSetName:g},!0,N,l)},children:e.jsxs(Z,{placement:"bottom",title:e.jsx(e.Fragment,{children:e.jsx($,{datSetToolTip:{peVariableSetName:g,globalVariableSetName:S,testDataSetName:B}})}),style:{display:"flex",alignItems:"center"},children:[e.jsx(_,{name:"datalist_icon",className:"ff-connecting-icon",hoverEffect:!0}),e.jsx(R,{className:"ff-connecting-text",color:"var(--ff-connecting-branch-color)",children:"Data Set List"})]})}),!f&&e.jsx(e.Fragment,{children:e.jsx(Z,{placement:"bottom",title:r>=h?`Maximum ${h} runs are allowed.`:"",children:e.jsxs("div",{className:"ff-environment-run-container",onClick:r>h?void 0:()=>T(l),children:[e.jsx(_,{name:"plus_icon",className:"ff-connecting-run-icon",color:"var(--ff-connecting-branch-color)",hoverEffect:!0,disabled:r>=h}),e.jsx(R,{className:"ff-connecting-run-text",color:"var(--ff-connecting-branch-color)",style:{opacity:r>=h?.5:1},children:"Run"})]})})})]}),!f&&e.jsx(_,{name:"delete",className:"ff-connecting-delete-icon",onClick:()=>C(l,r),color:"var(--ff-connecting-branch-delete-color)",hoverEffect:!0})]})]}),p(c)&&e.jsx("div",{className:"ff-connecting-branch-middle-arrow",style:{borderTop:`1px ${m(t,n[c+1])} var(--ff-connecting-branch-color)`},children:e.jsx("div",{className:y({"ff-connecting-branch-arrow":a,"ff-connecting-branch-arrow-reverse":!a})})})]},K())}),v()&&e.jsx("div",{className:y({"ff-connecting-branch-end-arrow":a,"ff-connecting-branch-end-arrow-reverse":!a}),style:{border:`1px ${m(n[o-1],u)} var(--ff-connecting-branch-color)`,borderBottom:"none",borderLeft:`${a&&"none"}`,borderRight:`${!a&&"none"}`}})]})};try{J.displayName="Branches",J.__docgenInfo={description:"",displayName:"Branches",props:{machineInstances:{defaultValue:null,description:"",name:"machineInstances",required:!0,type:{name:"ExecutionContext[] | {}[]"}},rowIndex:{defaultValue:null,description:"",name:"rowIndex",required:!0,type:{name:"number"}},machineColumnCount:{defaultValue:null,description:"",name:"machineColumnCount",required:!0,type:{name:"number"}},machineColumnWidth:{defaultValue:null,description:"",name:"machineColumnWidth",required:!0,type:{name:"number"}},nextRowMachineInstance:{defaultValue:null,description:"",name:"nextRowMachineInstance",required:!1,type:{name:"{} | ExecutionContext"}},previousRowMachineInstance:{defaultValue:null,description:"",name:"previousRowMachineInstance",required:!1,type:{name:"{} | ExecutionContext"}},onAddBrowser:{defaultValue:null,description:"",name:"onAddBrowser",required:!0,type:{name:"(modalId: string) => void"}},onDeleteBrowser:{defaultValue:null,description:"",name:"onDeleteBrowser",required:!0,type:{name:"(id: string, runCount: number) => void"}},onAddRunBrowser:{defaultValue:null,description:"",name:"onAddRunBrowser",required:!0,type:{name:"(id: string) => void"}},onUpdateDataSetList:{defaultValue:null,description:"",name:"onUpdateDataSetList",required:!0,type:{name:"(id: string, dataSetObject: dataSetValues, isInstance?: boolean | undefined, noOfRuns?: number | undefined, machineInstanceId?: string | undefined) => void"}},addInstanceLabel:{defaultValue:{value:""},description:"",name:"addInstanceLabel",required:!1,type:{name:"string"}},scriptType:{defaultValue:{value:""},description:"",name:"scriptType",required:!1,type:{name:"string"}},onUpdateAddBrowserInstance:{defaultValue:null,description:"",name:"onUpdateAddBrowserInstance",required:!0,type:{name:"(modalId: string, machineInstance: ExecutionContext) => void"}},projectType:{defaultValue:{value:""},description:"",name:"projectType",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},maxRunCount:{defaultValue:null,description:"",name:"maxRunCount",required:!0,type:{name:"number"}}}}}catch{}const Q=({machineBranchInstances:n,machineColumnCount:d,machineColumnWidth:o,onAddBrowser:s,onDeleteBrowser:u,onAddRunBrowser:I,onUpdateDataSetList:b,onUpdateAddBrowserInstance:C,addInstanceLabel:T="",scriptType:j="",projectType:M="Web",readOnly:D=!1,maxRunCount:q})=>{const[F,f]=V.useState(n);V.useEffect(()=>{f(n)},[n]);const a=((i,v)=>{const m=[];for(let p=0;p<i.length;p+=v)m.push(i.slice(p,p+v));return m})(F,d);return e.jsx("div",{className:"ff-connecting-branch-grid-wrapper",children:a.map((i,v)=>{var m,p;return e.jsx(e.Fragment,{children:e.jsx(J,{machineInstances:i,rowIndex:v,machineColumnCount:d,machineColumnWidth:o,onAddBrowser:s,onDeleteBrowser:u,onAddRunBrowser:I,nextRowMachineInstance:(m=a[v+1])==null?void 0:m[0],previousRowMachineInstance:(p=a[v-1])==null?void 0:p[d-1],onUpdateDataSetList:b,onUpdateAddBrowserInstance:C,addInstanceLabel:T,scriptType:j,projectType:M,readOnly:D,maxRunCount:q})},K())})})};try{Q.displayName="ConnectingBranches",Q.__docgenInfo={description:"",displayName:"ConnectingBranches",props:{machineBranchInstances:{defaultValue:null,description:"",name:"machineBranchInstances",required:!0,type:{name:"ExecutionContext[] | {}[]"}},machineColumnCount:{defaultValue:null,description:"",name:"machineColumnCount",required:!0,type:{name:"number"}},machineColumnWidth:{defaultValue:null,description:"",name:"machineColumnWidth",required:!0,type:{name:"number"}},onAddBrowser:{defaultValue:null,description:"",name:"onAddBrowser",required:!0,type:{name:"(modalId: string) => void"}},onDeleteBrowser:{defaultValue:null,description:"",name:"onDeleteBrowser",required:!0,type:{name:"(id: string, runCount: number) => void"}},onAddRunBrowser:{defaultValue:null,description:"",name:"onAddRunBrowser",required:!0,type:{name:"(id: string) => void"}},onUpdateDataSetList:{defaultValue:null,description:"",name:"onUpdateDataSetList",required:!0,type:{name:"(id: string, dataSetObject: dataSetValues, isInstance?: boolean | undefined, noOfRuns?: number | undefined, machineInstanceId?: string | undefined) => void"}},addInstanceLabel:{defaultValue:{value:""},description:"",name:"addInstanceLabel",required:!1,type:{name:"string"}},scriptType:{defaultValue:{value:""},description:"",name:"scriptType",required:!1,type:{name:"string"}},projectType:{defaultValue:{value:"Web"},description:"",name:"projectType",required:!1,type:{name:"string"}},onUpdateAddBrowserInstance:{defaultValue:null,description:"",name:"onUpdateAddBrowserInstance",required:!0,type:{name:"(modalId: string, machineInstance: ExecutionContext) => void"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},maxRunCount:{defaultValue:null,description:"",name:"maxRunCount",required:!0,type:{name:"number"}}}}}catch{}const U=({machineInstances:n=[],machineColumnWidth:d=180,machineColumnCount:o=1,selectedMachine:s={},machineOptionsList:u=[],onHandleSelect:I=()=>{},onAddBrowserInstance:b=()=>{},onAddRunBrowserInstance:C=()=>{},onDeleteBrowserInstance:T=()=>{},onUpdateDataSetList:j=()=>{},onDeleteMachineInstance:M=()=>{},dataSetValues:D={testDataSetId:"",globalVariableSetId:"",peVariableSetId:"",globalVariableSetName:"",peVariableSetName:"",testDataSetName:""},onUpdateAddBrowserInstance:q=()=>{},addInstanceLabel:F="Add Environment",placeholder:f="Choose Machine",scriptType:h="Automation",projectType:a="Web",readOnly:i=!1,zIndex:v=99999,maxRunCount:m=35})=>{var B,g,S;const[p,W]=V.useState({}),P=V.useRef(null),H=Math.max(o,1),z=Math.max(d,180),[t,c]=V.useState([]),r=A(n);let N=A((B=s.value)==null?void 0:B.clientId);h==="Manual"&&(N=A(s.value));const l=(x="")=>x.toLowerCase().includes("inactive")?"var(--ff-machine-inactive-status-color)":x.toLowerCase().includes("running")?"var(--ff-machine-running-status-color)":x.toLowerCase().includes("active")?"var(--ff-machine-active-status-color)":"var(--ff-machine-active-status-color))";V.useEffect(()=>{W(s)},[s]),V.useEffect(()=>{c(i?n:[...n,{}])},[n]);const O=h.toLowerCase()!=="manual",E=((x,w)=>Object.fromEntries(Object.entries(x).filter(([L])=>!L.includes(w))))(D,"Id");return e.jsxs("div",{className:"ff-sequential-connecting-branch-wrapper",children:[e.jsxs("div",{className:"ff-connecting-select-branch-wrapper",children:[e.jsxs("div",{className:"ff-select-branch-wrapper",children:[e.jsx(te,{onChange:I,optionsList:u,label:f,required:!1,showLabel:!0,className:"ff-sequential-select-branch",width:"240px",selectedOption:p,valueAccessor:"name",optionsRequired:!i,disableInput:i,optionZIndex:v}),!N&&e.jsxs("div",{className:y({"ff-select-branch-arrow":r,"ff-select-branch-arrow-down":!r}),children:[e.jsx("div",{className:"ff-select-branch-point"}),e.jsxs("div",{className:"ff-select-branch-arrow",children:[e.jsx("div",{className:"ff-branch-arrow-wrapper",children:r&&e.jsx("div",{className:"ff-branch-arrow"})}),r&&e.jsx(e.Fragment,{children:e.jsx(ne,{variant:"tertiary",label:a==="Manual"?"+ Machine":"+ Environment",size:"small",className:"branch-button",ref:P,onClick:()=>b("ff-sequential-branch-button"),id:"ff-sequential-branch-button"})})]})]})]}),!N&&e.jsxs("div",{className:"ff-select-scope-datalist",children:[e.jsx("div",{className:"ff-scope-wrapper",children:e.jsx(R,{as:"span",color:l((g=s.value)==null?void 0:g.status),className:"ff-scope-text",children:(S=s.value)==null?void 0:S.status})}),e.jsxs("div",{className:"ff-datalist-wrapper",children:[O&&e.jsx("div",{id:"ff-sequential-machine-datalist",onClick:()=>{i||j("ff-sequential-machine-datalist",D)},children:e.jsxs(Z,{placement:"bottom",title:e.jsx("div",{children:e.jsx($,{datSetToolTip:E})}),style:{display:"flex",alignItems:"center"},children:[e.jsx(_,{name:"datalist_icon",className:"ff-dataset-icon",hoverEffect:!0}),e.jsx(R,{as:"span",color:"var(--ff-connecting-branch-color)",className:"ff-datalist-text",children:"Data Set List"})]})}),!i&&e.jsx(_,{name:"delete",className:"ff-run-delete-icon",color:"var(--ff-connecting-branch-delete-color)",onClick:M,hoverEffect:!0})]})]})]}),e.jsx("div",{className:"ff-sequential-branches-wrapper",children:!r&&e.jsx(Q,{machineBranchInstances:t,machineColumnCount:H,machineColumnWidth:z,onAddBrowser:b,onDeleteBrowser:T,onAddRunBrowser:C,onUpdateDataSetList:j,onUpdateAddBrowserInstance:q,addInstanceLabel:F,scriptType:h,projectType:a,readOnly:i,maxRunCount:m})})]})};try{U.displayName="SequentialConnectingBranch",U.__docgenInfo={description:"",displayName:"SequentialConnectingBranch",props:{machineInstances:{defaultValue:{value:"[]"},description:"",name:"machineInstances",required:!1,type:{name:"ExecutionContext[] | {}[]"}},machineColumnWidth:{defaultValue:{value:"180"},description:"",name:"machineColumnWidth",required:!1,type:{name:"number"}},machineColumnCount:{defaultValue:{value:"1"},description:"",name:"machineColumnCount",required:!1,type:{name:"number"}},selectedMachine:{defaultValue:{value:"{}"},description:"",name:"selectedMachine",required:!1,type:{name:"Option"}},machineOptionsList:{defaultValue:{value:"[]"},description:"",name:"machineOptionsList",required:!1,type:{name:"Option[]"}},onHandleSelect:{defaultValue:{value:"() => {}"},description:"",name:"onHandleSelect",required:!1,type:{name:"((option: Option) => void)"}},onAddBrowserInstance:{defaultValue:{value:"() => {}"},description:"",name:"onAddBrowserInstance",required:!1,type:{name:"((modalId: string) => void)"}},onUpdateAddBrowserInstance:{defaultValue:{value:"() => {}"},description:"",name:"onUpdateAddBrowserInstance",required:!1,type:{name:"((modalId: string, machineInstance: ExecutionContext) => void)"}},onDeleteBrowserInstance:{defaultValue:{value:"() => {}"},description:"",name:"onDeleteBrowserInstance",required:!1,type:{name:"((id: string, runCount: number) => void)"}},onAddRunBrowserInstance:{defaultValue:{value:"() => {}"},description:"",name:"onAddRunBrowserInstance",required:!1,type:{name:"((machineInstanceId: string) => void)"}},onDeleteMachineInstance:{defaultValue:{value:"() => {}"},description:"",name:"onDeleteMachineInstance",required:!1,type:{name:"(() => void)"}},onUpdateDataSetList:{defaultValue:{value:"() => {}"},description:"",name:"onUpdateDataSetList",required:!1,type:{name:"((id: string, dataSetObject?: dataSetValues, isInstance?: boolean, noOfRuns?: number | undefined, machineInstanceId?: string | undefined) => void) | undefined"}},dataSetValues:{defaultValue:{value:`{\r
    testDataSetId: '',\r
    globalVariableSetId: '',\r
    peVariableSetId: '',\r
    globalVariableSetName: '',\r
    peVariableSetName: '',\r
    testDataSetName: '',\r
  }`},description:"",name:"dataSetValues",required:!1,type:{name:"dataSetValues"}},addInstanceLabel:{defaultValue:{value:"Add Environment"},description:"",name:"addInstanceLabel",required:!1,type:{name:"string"}},scriptType:{defaultValue:{value:"Automation"},description:"",name:"scriptType",required:!1,type:{name:"string"}},projectType:{defaultValue:{value:"Web"},description:"",name:"projectType",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},integrationInstance:{defaultValue:null,description:"",name:"integrationInstance",required:!1,type:{name:"IntegrationInstance"}},zIndex:{defaultValue:{value:"99999"},description:"",name:"zIndex",required:!1,type:{name:"number"}},placeholder:{defaultValue:{value:"Choose Machine"},description:"",name:"placeholder",required:!1,type:{name:"string"}},maxRunCount:{defaultValue:{value:"35"},description:"",name:"maxRunCount",required:!1,type:{name:"number"}}}}}catch{}const ye={title:"Components/SequentialConnectingBranch",component:U,parameters:{layout:"centered"},tags:["autodocs"]},G={render:()=>{const[n,d]=V.useState({label:"ffe-Mahesh",value:{status:"running",clientId:"test"},name:"ffe-Mahesh"}),[o,s]=V.useState([{numberOfRuns:2,clientId:"flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475",executionEnv:"Local",browserName:"Google Chrome",browserVersion:"121.0.6167.185",systemUrl:"",runCount:1,machineInfo:{osName:"Windows 11 Pro",osVersion:"10.0.22631",hostName:"FFE-Abhishek-G-FFE181"},deviceInfo:[],headless:!1,runLevelExecutionDataSets:[{peVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",globalVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",testDataSetId:"TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30"}]},{numberOfRuns:2,clientId:"flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475",executionEnv:"Local",browserName:"Google Chrome",browserVersion:"121.0.6167.185",systemUrl:"",runCount:1,machineInfo:{osName:"Windows 11 Pro",osVersion:"10.0.22631",hostName:"FFE-Abhishek-G-FFE181"},deviceInfo:[],headless:!1,runLevelExecutionDataSets:[{peVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",globalVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",testDataSetId:"TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30"}]},{numberOfRuns:2,clientId:"flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475",executionEnv:"Local",browserName:"Google Chrome",browserVersion:"121.0.6167.185",systemUrl:"",runCount:1,machineInfo:{osName:"Windows 11 Pro",osVersion:"10.0.22631",hostName:"FFE-Abhishek-G-FFE181"},deviceInfo:[],headless:!1,runLevelExecutionDataSets:[{peVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",globalVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",testDataSetId:"TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30"}]},{numberOfRuns:2,clientId:"flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475",executionEnv:"Local",browserName:"Google Chrome",browserVersion:"121.0.6167.185",systemUrl:"",runCount:1,machineInfo:{osName:"Windows 11 Pro",osVersion:"10.0.22631",hostName:"FFE-Abhishek-G-FFE181"},deviceInfo:[],headless:!1,runLevelExecutionDataSets:[{peVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",globalVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",testDataSetId:"TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30"}]}]),u=[{label:"ffe-Ganesh",value:{status:"running",clientId:"test"},name:"ffe-Ganesh",clientId:"test"},{label:"ffe-Mahesh",value:{status:"running",clientId:"test"},name:"ffe-Mahesh",clientId:"test"}],I=C=>{d(C)},b=()=>{s([...o,{numberOfRuns:1,clientId:"flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475",executionEnv:"Local",browserName:"Google Chrome",browserVersion:"121.0.6167.185",systemUrl:"",machineInfo:{osName:"Windows 11 Pro",osVersion:"10.0.22631",hostName:"FFE-Abhishek-G-FFE181"},runCount:1,deviceInfo:[],headless:!1,runLevelExecutionDataSets:[{peVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",globalVariableSetId:"VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5",testDataSetId:"TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30"}]}])};return e.jsx(e.Fragment,{children:e.jsx(U,{dataSetValues:{globalVariableSetName:"test dev",peVariableSetName:"test dev",testDataSetName:"test dev",peVariableSetId:"Test dev",globalVariableSetId:"Test dev",testDataSetId:"Test dev"},machineColumnWidth:340,machineColumnCount:2,machineOptionsList:u,machineInstances:o,selectedMachine:n,onHandleSelect:I,onAddBrowserInstance:b,readOnly:!0,scriptType:"manual"})})}};var X,Y,ee;G.parameters={...G.parameters,docs:{...(X=G.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [machineSelect, setMachineSelect] = useState<Option>({
      label: 'ffe-Mahesh',
      value: {
        status: 'running',
        clientId: 'test'
      },
      name: 'ffe-Mahesh'
    });
    const [machineInstance, setMachineInstance] = useState<{}[] | ExecutionContext[]>([{
      numberOfRuns: 2,
      clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
      executionEnv: 'Local',
      browserName: 'Google Chrome',
      browserVersion: '121.0.6167.185',
      systemUrl: '',
      runCount: 1,
      machineInfo: {
        osName: 'Windows 11 Pro',
        osVersion: '10.0.22631',
        hostName: 'FFE-Abhishek-G-FFE181'
      },
      deviceInfo: [],
      headless: false,
      runLevelExecutionDataSets: [{
        peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
        globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
        testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30'
      }]
    }, {
      numberOfRuns: 2,
      clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
      executionEnv: 'Local',
      browserName: 'Google Chrome',
      browserVersion: '121.0.6167.185',
      systemUrl: '',
      runCount: 1,
      machineInfo: {
        osName: 'Windows 11 Pro',
        osVersion: '10.0.22631',
        hostName: 'FFE-Abhishek-G-FFE181'
      },
      deviceInfo: [],
      headless: false,
      runLevelExecutionDataSets: [{
        peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
        globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
        testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30'
      }]
    }, {
      numberOfRuns: 2,
      clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
      executionEnv: 'Local',
      browserName: 'Google Chrome',
      browserVersion: '121.0.6167.185',
      systemUrl: '',
      runCount: 1,
      machineInfo: {
        osName: 'Windows 11 Pro',
        osVersion: '10.0.22631',
        hostName: 'FFE-Abhishek-G-FFE181'
      },
      deviceInfo: [],
      headless: false,
      runLevelExecutionDataSets: [{
        peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
        globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
        testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30'
      }]
    }, {
      numberOfRuns: 2,
      clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
      executionEnv: 'Local',
      browserName: 'Google Chrome',
      browserVersion: '121.0.6167.185',
      systemUrl: '',
      runCount: 1,
      machineInfo: {
        osName: 'Windows 11 Pro',
        osVersion: '10.0.22631',
        hostName: 'FFE-Abhishek-G-FFE181'
      },
      deviceInfo: [],
      headless: false,
      runLevelExecutionDataSets: [{
        peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
        globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
        testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30'
      }]
    }]);
    const machineOptionList = [{
      label: 'ffe-Ganesh',
      value: {
        status: 'running',
        clientId: 'test'
      },
      name: 'ffe-Ganesh',
      clientId: 'test'
    }, {
      label: 'ffe-Mahesh',
      value: {
        status: 'running',
        clientId: 'test'
      },
      name: 'ffe-Mahesh',
      clientId: 'test'
    }];
    const onMachineHandleSelect = (option: Option) => {
      setMachineSelect(option);
    };
    const addBrowser = () => {
      setMachineInstance([...machineInstance, {
        numberOfRuns: 1,
        clientId: 'flinko-client-win-AE80F109-1984-4E28-AB79-AF38C1D9B475',
        executionEnv: 'Local',
        browserName: 'Google Chrome',
        browserVersion: '121.0.6167.185',
        systemUrl: '',
        machineInfo: {
          osName: 'Windows 11 Pro',
          osVersion: '10.0.22631',
          hostName: 'FFE-Abhishek-G-FFE181'
        },
        runCount: 1,
        deviceInfo: [],
        headless: false,
        runLevelExecutionDataSets: [{
          peVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
          globalVariableSetId: 'VARa4dfceeb-8527-493a-a2f4-9d87c86a5ba5',
          testDataSetId: 'TDd26f320c-46b5-4aa7-9ef9-8e9c99a1ff30'
        }]
      }]);
    };
    return <>\r
        <SequentialConnectingBranch dataSetValues={{
        globalVariableSetName: 'test dev',
        peVariableSetName: 'test dev',
        testDataSetName: 'test dev',
        peVariableSetId: 'Test dev',
        globalVariableSetId: 'Test dev',
        testDataSetId: 'Test dev'
      }} machineColumnWidth={340} machineColumnCount={2} machineOptionsList={machineOptionList} machineInstances={machineInstance} selectedMachine={machineSelect} onHandleSelect={onMachineHandleSelect} onAddBrowserInstance={addBrowser} readOnly scriptType='manual' />\r
      </>;
  }
}`,...(ee=(Y=G.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const Ce=["Primary"];export{G as Primary,Ce as __namedExportsOrder,ye as default};
