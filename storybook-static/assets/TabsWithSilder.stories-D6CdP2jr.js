import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as b}from"./index-DJO9vBfz.js";import{c as u}from"./index-NZcV-alF.js";import{T as l}from"./Typography-DdMJCn-_.js";/* empty css                */import{I as S}from"./Icon-BnrH6PuI.js";import{T as Z}from"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const r=({variant:n="default",tabsData:t,activeTabId:s,onTabClick:G,noBorder:J=!1,noPadding:K=!1,titleSize:Q="12px"})=>{var _;const[d,I]=b.useState(0),c=4,U=()=>{d<Math.ceil(t.length/c)-1&&I(a=>a+1)},Y=()=>{d>0&&I(a=>a-1)};return e.jsxs("div",{className:"ff-tabs-container",children:[e.jsxs("div",{className:u(`ff-tab-row--${n} ff-tab-row-section`,{"ff-tab-row--no-border":J,"ff-tab-row--no-padding":K,"ff-tab-row--position":t.length>c}),children:[t.length>c&&e.jsx(S,{className:"ff-tab-icon ff-tab-icon--previous",name:`${d?"arrow_left_accordian":""}`,onClick:Y,hoverEffect:!0}),e.jsx("div",{className:"ff-tab-row-carousel",children:e.jsx("div",{className:"carousel_inner",style:{transform:`translateX(-${d*100}%)`},children:t.map(a=>e.jsxs("button",{onClick:()=>!a.disabled&&G(a.id),disabled:a.disabled,className:u(`ff-tab-button--${n}`,{disabled:a.disabled,active:s===a.id}),style:{flex:`0 0 ${100/c}%`},children:[e.jsxs("div",{className:"label-count-section",children:[e.jsx(Z,{title:a.label.length>9?a.label:"",children:e.jsx(l,{children:a.label.length>9?a.label.slice(0,9)+"...":a.label,fontSize:Q,lineHeight:"18px",fontWeight:s===a.id?"semi-bold":"regular",color:s===a.id?"var(--tabs-label-active-color)":"var(--tabs-label-default-color)",className:u("ff-tab-label",{"ff-tab-label--active":s===a.id})})}),n==="default"&&a.count&&e.jsx("span",{className:u("tab-count",{"tab-count--active":s===a.id}),children:a.count})]}),e.jsx("div",{className:u("ff-tab-bar",{"ff-tab-bar--active":s===a.id})}),e.jsx("span",{className:`ff-defaultStatus ${a.status==="success"?"ff-successStatus":a.status==="error"?"ff-dangerStatus":""}`})]},a.id))})}),t.length>c&&e.jsx(S,{className:"ff-tab-icon ff-tab-icon--next",name:`${d<Math.ceil(t.length/c)-1?"arrow_right_icon":""}`,onClick:U,hoverEffect:!0})]}),e.jsx("div",{className:"ff-tab-content",children:(_=t.find(a=>a.id===s))==null?void 0:_.component})]})};try{r.displayName="TabsWithSilder",r.__docgenInfo={description:"",displayName:"TabsWithSilder",props:{tabsData:{defaultValue:null,description:"An array of tab objects containing label, component, and optional disabled status.",name:"tabsData",required:!0,type:{name:'{ id: string; label: string; component?: Element | undefined; disabled?: boolean | undefined; count?: string | number | undefined; status?: "success" | "error" | "transparent" | undefined; }[]'}},variant:{defaultValue:{value:"default"},description:"Defines the styling variant of the tabs.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"capsule"'}]}},activeTabId:{defaultValue:null,description:"activeTabId : The ID of the currently active tab.",name:"activeTabId",required:!0,type:{name:"string"}},onTabClick:{defaultValue:null,description:"onTabClick : function updates the active tab state when a user interacts with the tabs,",name:"onTabClick",required:!0,type:{name:"(id: string) => void"}},noBorder:{defaultValue:{value:"false"},description:"noBorder:true , removes the outer border from tabs",name:"noBorder",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"",name:"noPadding",required:!1,type:{name:"boolean"}},titleSize:{defaultValue:{value:"12px"},description:"titleSize is to accpect dynamic font size",name:"titleSize",required:!1,type:{name:"string | number"}}}}}catch{}const ce={title:"Components/TabsWithSilder",component:r,parameters:{layout:"centered"},tags:["autodocs"]},p=()=>e.jsxs("div",{children:[e.jsx(l,{as:"h1",children:"Tab--1",fontSize:32,fontWeight:"bold"}),e.jsx(l,{as:"p",children:"This is the content for Tab - 1"})]}),T=()=>e.jsxs("div",{children:[e.jsx(l,{as:"h1",children:"Tab--2",fontSize:32,fontWeight:"bold"}),e.jsx(l,{as:"p",children:"This is the content for Tab - 2"})]}),i=()=>e.jsxs("div",{children:[e.jsx(l,{as:"h1",children:"Tab--3",fontSize:32,fontWeight:"bold"}),e.jsx(l,{as:"p",children:"This is the content for Tab - 3"})]}),o=()=>e.jsxs("div",{children:[e.jsx(l,{as:"h1",children:"Tab--4",fontSize:32,fontWeight:"bold"}),e.jsx(l,{as:"p",children:"This is the content for Tab - 4"})]}),m=[{id:"tab-1",label:"Tab--1",component:e.jsx(p,{}),count:"02"},{id:"tab-2",label:"Tab--2",component:e.jsx(T,{}),count:35},{id:"tab-3",label:"Tab--3",component:e.jsx(i,{}),count:205}],f={render:()=>{const[n,t]=b.useState("tab-1");return e.jsx("div",{style:{width:"500px"},children:e.jsx(r,{tabsData:m,activeTabId:n,onTabClick:t})})}},h={render:()=>{const[n,t]=b.useState("tab-1"),s=[{id:"tab-1",label:"Tab--1SectionOneToShowToolTip",component:e.jsx(p,{}),count:"02"},{id:"tab-2",label:"Tab--2",component:e.jsx(T,{}),count:35},{id:"tab-3",label:"Tab--3",component:e.jsx(i,{}),count:205},{id:"tab-4",label:"Tab--4",component:e.jsx(i,{}),count:205},{id:"tab-5",label:"Tab--5",component:e.jsx(i,{}),count:205},{id:"tab-6",label:"Tab--6",component:e.jsx(i,{}),count:205},{id:"tab-7",label:"Tab--7",component:e.jsx(i,{}),count:205},{id:"tab-8",label:"Tab--8",component:e.jsx(i,{}),count:205},{id:"tab-9",label:"Tab--9",component:e.jsx(i,{}),count:205},{id:"tab-10",label:"Tab--10",component:e.jsx(i,{}),count:205},{id:"tab-11",label:"Tab--11",component:e.jsx(i,{}),count:205},{id:"tab-12",label:"Tab--12",component:e.jsx(i,{}),count:205},{id:"tab-13",label:"Tab--13",component:e.jsx(i,{}),count:205}];return e.jsx("div",{style:{width:"500px"},children:e.jsx(r,{tabsData:s,activeTabId:n,onTabClick:t})})}},v={render:()=>{const[n,t]=b.useState("tab-1"),s=[{id:"tab-1",label:"Loremipsum_1",component:e.jsx(p,{})},{id:"tab-2",label:"Loremipsum_2",component:e.jsx(T,{})},{id:"tab-3",label:"Loremipsum_3",component:e.jsx(i,{})},{id:"tab-4",label:"Loremipsum_4",component:e.jsx(o,{})},{id:"tab-5",label:"Loremipsum_5",component:e.jsx(o,{})}];return e.jsx(r,{variant:"capsule",tabsData:s,activeTabId:n,onTabClick:t})}},x={render:()=>{const[n,t]=b.useState("tab-1"),s=[{id:"tab-1",label:"Loremipsum_1SectionToShowToolTip",component:e.jsx(p,{})},{id:"tab-2",label:"Loremipsum_2",component:e.jsx(T,{})},{id:"tab-3",label:"Loremipsum_3",component:e.jsx(i,{})},{id:"tab-4",label:"Loremipsum_4",component:e.jsx(o,{})},{id:"tab-5",label:"Loremipsum_5",component:e.jsx(o,{})},{id:"tab-6",label:"Loremipsum_6",component:e.jsx(o,{})},{id:"tab-7",label:"Loremipsum_7",component:e.jsx(o,{})},{id:"tab-8",label:"Loremipsum_8",component:e.jsx(o,{})},{id:"tab-9",label:"Loremipsum_9",component:e.jsx(o,{})},{id:"tab-10",label:"Loremipsum_10",component:e.jsx(o,{})},{id:"tab-11",label:"Loremipsum_11",component:e.jsx(o,{})},{id:"tab-12",label:"Loremipsum_12",component:e.jsx(o,{})},{id:"tab-13",label:"Loremipsum_13",component:e.jsx(o,{})},{id:"tab-14",label:"Loremipsum_14",component:e.jsx(o,{})},{id:"tab-15",label:"Loremipsum_15",component:e.jsx(o,{})},{id:"tab-16",label:"Loremipsum_16",component:e.jsx(o,{})},{id:"tab-17",label:"Loremipsum_17",component:e.jsx(o,{})},{id:"tab-18",label:"Loremipsum_18",component:e.jsx(o,{})},{id:"tab-19",label:"Loremipsum_19",component:e.jsx(o,{})}];return e.jsx("div",{style:{width:"600px"},children:e.jsx(r,{variant:"capsule",tabsData:s,activeTabId:n,onTabClick:t})})}},C={render:()=>{const[n,t]=b.useState("tab-1"),s=[{id:"tab-1",label:"Tab--1",component:e.jsx(p,{})},{id:"tab-2",label:"Tab--2",component:e.jsx(T,{}),disabled:!0},{id:"tab-3",label:"Tab--3",component:e.jsx(i,{})}];return e.jsx(r,{tabsData:s,activeTabId:n,onTabClick:t})}},j={render:()=>{const[n,t]=b.useState("tab-1");return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(r,{tabsData:m,activeTabId:n,onTabClick:t,noBorder:!0})," ",e.jsx("hr",{}),e.jsx(r,{variant:"capsule",tabsData:m,activeTabId:n,onTabClick:t,noBorder:!0})]})}},D={render:()=>{const[n,t]=b.useState("tab-1");return e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(r,{tabsData:m,activeTabId:n,onTabClick:t,noPadding:!0})," ",e.jsx("hr",{}),e.jsx(r,{variant:"capsule",tabsData:m,activeTabId:n,onTabClick:t,noPadding:!0})]})}};var g,L,y;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('tab-1');
    return <div style={{
      width: '500px'
    }}>\r
        <TabsWithSilder tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} />\r
      </div>;
  }
}`,...(y=(L=f.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var A,W,w;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('tab-1');
    const sliderTabsData = [{
      id: 'tab-1',
      label: 'Tab--1SectionOneToShowToolTip',
      component: <TabContentOne />,
      count: '02'
    }, {
      id: 'tab-2',
      label: 'Tab--2',
      component: <TabContentTwo />,
      count: 35
    }, {
      id: 'tab-3',
      label: 'Tab--3',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-4',
      label: 'Tab--4',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-5',
      label: 'Tab--5',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-6',
      label: 'Tab--6',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-7',
      label: 'Tab--7',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-8',
      label: 'Tab--8',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-9',
      label: 'Tab--9',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-10',
      label: 'Tab--10',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-11',
      label: 'Tab--11',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-12',
      label: 'Tab--12',
      component: <TabContentThree />,
      count: 205
    }, {
      id: 'tab-13',
      label: 'Tab--13',
      component: <TabContentThree />,
      count: 205
    }];
    return <div style={{
      width: '500px'
    }}>\r
        <TabsWithSilder tabsData={sliderTabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} />\r
      </div>;
  }
}`,...(w=(W=h.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var F,k,N;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    return <TabsWithSilder variant={'capsule'} tabsData={tabsDataForCapsule} activeTabId={activeTabIdCapsule} onTabClick={setActiveTabIdCapsule} />;
  }
}`,...(N=(k=v.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var O,P,z;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdCapsule, setActiveTabIdCapsule] = useState<string>('tab-1');
    const tabsDataForCapsule = [{
      id: 'tab-1',
      label: 'Loremipsum_1SectionToShowToolTip',
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
    }, {
      id: 'tab-6',
      label: 'Loremipsum_6',
      component: <TabContentFour />
    }, {
      id: 'tab-7',
      label: 'Loremipsum_7',
      component: <TabContentFour />
    }, {
      id: 'tab-8',
      label: 'Loremipsum_8',
      component: <TabContentFour />
    }, {
      id: 'tab-9',
      label: 'Loremipsum_9',
      component: <TabContentFour />
    }, {
      id: 'tab-10',
      label: 'Loremipsum_10',
      component: <TabContentFour />
    }, {
      id: 'tab-11',
      label: 'Loremipsum_11',
      component: <TabContentFour />
    }, {
      id: 'tab-12',
      label: 'Loremipsum_12',
      component: <TabContentFour />
    }, {
      id: 'tab-13',
      label: 'Loremipsum_13',
      component: <TabContentFour />
    }, {
      id: 'tab-14',
      label: 'Loremipsum_14',
      component: <TabContentFour />
    }, {
      id: 'tab-15',
      label: 'Loremipsum_15',
      component: <TabContentFour />
    }, {
      id: 'tab-16',
      label: 'Loremipsum_16',
      component: <TabContentFour />
    }, {
      id: 'tab-17',
      label: 'Loremipsum_17',
      component: <TabContentFour />
    }, {
      id: 'tab-18',
      label: 'Loremipsum_18',
      component: <TabContentFour />
    }, {
      id: 'tab-19',
      label: 'Loremipsum_19',
      component: <TabContentFour />
    }];
    return <div style={{
      width: '600px'
    }}>\r
\r
        <TabsWithSilder variant={'capsule'} tabsData={tabsDataForCapsule} activeTabId={activeTabIdCapsule} onTabClick={setActiveTabIdCapsule} />\r
      </div>;
  }
}`,...(z=(P=x.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var B,q,V;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    return <TabsWithSilder tabsData={tabsDataWithOneDisableAttribute} activeTabId={activeTabId} onTabClick={setActiveTabId} />;
  }
}`,...(V=(q=C.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var $,E,M;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('tab-1');
    return <div style={{
      display: 'flex',
      gap: '10px'
    }}>\r
        <TabsWithSilder tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} noBorder={true} />{' '}\r
        <hr />\r
        <TabsWithSilder variant="capsule" tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} noBorder={true} />\r
      </div>;
  }
}`,...(M=(E=j.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var H,R,X;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [activeTabIdDefault, setActiveTabIdDefault] = useState<string>('tab-1');
    return <div style={{
      display: 'flex',
      gap: '10px'
    }}>\r
        <TabsWithSilder tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} noPadding={true} />{' '}\r
        <hr />\r
        <TabsWithSilder variant="capsule" tabsData={tabsData} activeTabId={activeTabIdDefault} onTabClick={setActiveTabIdDefault} noPadding={true} />\r
      </div>;
  }
}`,...(X=(R=D.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};const de=["DefaultTabs","DefaultTabsSlider","CapsuleTabs","CapsuleTabsSlider","TabsWithDisabledTab","WithoutBorder","WithoutPadding"];export{v as CapsuleTabs,x as CapsuleTabsSlider,f as DefaultTabs,h as DefaultTabsSlider,C as TabsWithDisabledTab,j as WithoutBorder,D as WithoutPadding,de as __namedExportsOrder,ce as default};
