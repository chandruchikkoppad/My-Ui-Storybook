import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as l}from"./index-DJO9vBfz.js";import{c as o}from"./index-NZcV-alF.js";import{T as i}from"./Typography-DdMJCn-_.js";/* empty css                */const r=({variant:t="default",tabsData:n,activeTabId:s,onTabClick:w,noBorder:P=!1,noPadding:q=!1,titleSize:O="12px"})=>{var h;return e.jsxs("div",{className:"ff-tabs-container",children:[e.jsx("div",{className:o(`ff-tab-row--${t}`,{"ff-tab-row--no-border":P,"ff-tab-row--no-padding":q}),children:n.map(a=>e.jsxs("button",{onClick:()=>!a.disabled&&w(a.id),disabled:a.disabled,className:o(`ff-tab-button--${t}`,{disabled:a.disabled,active:s===a.id}),children:[e.jsxs("div",{className:"label-count-section",children:[e.jsx(i,{children:a.label,fontSize:O,lineHeight:"18px",fontWeight:s===a.id?"semi-bold":"regular",color:s===a.id?"var(--tabs-label-active-color)":"var(--tabs-label-default-color)",className:o("ff-tab-label",{"ff-tab-label--active":s===a.id})}),t==="default"&&a.count&&e.jsx("span",{className:o("tab-count",{"tab-count--active":s===a.id}),children:a.count})]}),e.jsx("div",{className:o("ff-tab-bar",{"ff-tab-bar--active":s===a.id})}),e.jsx("span",{className:`ff-defaultStatus ${a.status==="success"?"ff-successStatus":a.status==="error"?"ff-dangerStatus":""}`})]},a.id))}),e.jsx("div",{className:"ff-tab-content",children:(h=n.find(a=>a.id===s))==null?void 0:h.component})]})};try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{tabsData:{defaultValue:null,description:"An array of tab objects containing label, component, and optional disabled status.",name:"tabsData",required:!0,type:{name:'{ id: string; label: string; component?: Element | undefined; disabled?: boolean | undefined; count?: string | number | undefined; status?: "success" | "error" | "transparent" | undefined; }[]'}},variant:{defaultValue:{value:"default"},description:"Defines the styling variant of the tabs.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"capsule"'}]}},activeTabId:{defaultValue:null,description:"activeTabId : The ID of the currently active tab.",name:"activeTabId",required:!0,type:{name:"string"}},onTabClick:{defaultValue:null,description:"onTabClick : function updates the active tab state when a user interacts with the tabs,",name:"onTabClick",required:!0,type:{name:"(id: string) => void"}},noBorder:{defaultValue:{value:"false"},description:"noBorder:true , removes the outer border from tabs",name:"noBorder",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"",name:"noPadding",required:!1,type:{name:"boolean"}},titleSize:{defaultValue:{value:"12px"},description:"titleSize is to accpect dynamic font size",name:"titleSize",required:!1,type:{name:"string | number"}}}}}catch{}const R={title:"Components/Tabs",component:r,parameters:{layout:"centered"},tags:["autodocs"]},m=()=>e.jsxs("div",{children:[e.jsx(i,{as:"h1",children:"Tab--1",fontSize:32,fontWeight:"bold"}),e.jsx(i,{as:"p",children:"This is the content for Tab - 1"})]}),f=()=>e.jsxs("div",{children:[e.jsx(i,{as:"h1",children:"Tab--2",fontSize:32,fontWeight:"bold"}),e.jsx(i,{as:"p",children:"This is the content for Tab - 2"})]}),v=()=>e.jsxs("div",{children:[e.jsx(i,{as:"h1",children:"Tab--3",fontSize:32,fontWeight:"bold"}),e.jsx(i,{as:"p",children:"This is the content for Tab - 3"})]}),x=()=>e.jsxs("div",{children:[e.jsx(i,{as:"h1",children:"Tab--4",fontSize:32,fontWeight:"bold"}),e.jsx(i,{as:"p",children:"This is the content for Tab - 4"})]}),d=[{id:"tab-1",label:"Tab--1",component:e.jsx(m,{}),count:"02"},{id:"tab-2",label:"Tab--2",component:e.jsx(f,{}),count:35},{id:"tab-3",label:"Tab--3",component:e.jsx(v,{}),count:205}],c={render:()=>{const[t,n]=l.useState("tab-1");return e.jsx(r,{tabsData:d,activeTabId:t,onTabClick:n})}},b={render:()=>{const[t,n]=l.useState("tab-1"),s=[{id:"tab-1",label:"Loremipsum_1",component:e.jsx(m,{})},{id:"tab-2",label:"Loremipsum_2",component:e.jsx(f,{})},{id:"tab-3",label:"Loremipsum_3",component:e.jsx(v,{})},{id:"tab-4",label:"Loremipsum_4",component:e.jsx(x,{})},{id:"tab-5",label:"Loremipsum_5",component:e.jsx(x,{})}];return e.jsx(r,{variant:"capsule",tabsData:s,activeTabId:t,onTabClick:n})}},u={render:()=>{const[t,n]=l.useState("tab-1"),s=[{id:"tab-1",label:"Tab--1",component:e.jsx(m,{})},{id:"tab-2",label:"Tab--2",component:e.jsx(f,{}),disabled:!0},{id:"tab-3",label:"Tab--3",component:e.jsx(v,{})}];return e.jsx(r,{tabsData:s,activeTabId:t,onTabClick:n})}},p={render:()=>{const[t,n]=l.useState("tab-1");return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(r,{tabsData:d,activeTabId:t,onTabClick:n,noBorder:!0})," ",e.jsx("hr",{}),e.jsx(r,{variant:"capsule",tabsData:d,activeTabId:t,onTabClick:n,noBorder:!0})]})}},T={render:()=>{const[t,n]=l.useState("tab-1");return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(r,{tabsData:d,activeTabId:t,onTabClick:n,noPadding:!0})," ",e.jsx("hr",{}),e.jsx(r,{variant:"capsule",tabsData:d,activeTabId:t,onTabClick:n,noPadding:!0})]})}};var D,j,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('tab-1');
    return <Tabs tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} />;
  }
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var g,C,y;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdCapsule, setActiveTabIdCapsule] = useState<string>('tab-1');
    const tabsDataForCapsule = [{
      id: 'tab-1',
      label: 'Loremipsum_1',
      component: <TabContentOne />
    }, {
      id: 'tab-2',
      label: 'Loremipsum_2',
      component: <TabContentTwo />
    }, {
      id: 'tab-3',
      label: 'Loremipsum_3',
      component: <TabContentThree />
    }, {
      id: 'tab-4',
      label: 'Loremipsum_4',
      component: <TabContentFour />
    }, {
      id: 'tab-5',
      label: 'Loremipsum_5',
      component: <TabContentFour />
    }];
    return <Tabs variant={'capsule'} tabsData={tabsDataForCapsule} activeTabId={activeTabIdCapsule} onTabClick={setActiveTabIdCapsule} />;
  }
}`,...(y=(C=b.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,A,_;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [activeTabId, setActiveTabId] = useState<string>('tab-1');
    const tabsDataWithOneDisableAttribute = [{
      id: 'tab-1',
      label: 'Tab--1',
      component: <TabContentOne />
    }, {
      id: 'tab-2',
      label: 'Tab--2',
      component: <TabContentTwo />,
      disabled: true
    }, {
      id: 'tab-3',
      label: 'Tab--3',
      component: <TabContentThree />
    }];
    return <Tabs tabsData={tabsDataWithOneDisableAttribute} activeTabId={activeTabId} onTabClick={setActiveTabId} />;
  }
}`,...(_=(A=u.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var k,W,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('tab-1');
    return <div style={{
      display: 'flex',
      gap: '10px'
    }}>\r
        <Tabs tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} noBorder={true} />{' '}\r
        <hr />\r
        <Tabs variant="capsule" tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} noBorder={true} />\r
      </div>;
  }
}`,...(N=(W=p.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var L,z,B;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('tab-1');
    return <div style={{
      display: 'flex',
      gap: '10px'
    }}>\r
        <Tabs tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} noPadding={true} />{' '}\r
        <hr />\r
        <Tabs variant="capsule" tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} noPadding={true} />\r
      </div>;
  }
}`,...(B=(z=T.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const G=["DefaultTabs","CapsuleTabs","TabsWithDisabledTab","WithoutBorder","WithoutPadding"];export{b as CapsuleTabs,c as DefaultTabs,u as TabsWithDisabledTab,p as WithoutBorder,T as WithoutPadding,G as __namedExportsOrder,R as default};
