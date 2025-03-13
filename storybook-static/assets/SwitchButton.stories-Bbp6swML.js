import{j as n}from"./jsx-runtime-SKoiH9zj.js";import{r as g}from"./index-DJO9vBfz.js";import{I as h}from"./Icon-BnrH6PuI.js";import{T as w}from"./Tooltip-jHEmaokv.js";import"./index-NZcV-alF.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const l=({selected:t,handleClick:a,tabList:c})=>n.jsx("div",{className:"ff-switch-container",children:c.map(e=>n.jsx(w,{title:e.tooltip,zIndex:1e3,children:n.jsx("div",{className:`ff-switch-button ${t===e.name?"active":""}`,onClick:()=>a(e.name),children:n.jsx(h,{name:e.icon,color:t===e.name?"var(--primary-button-text-color)":"var(--description-text)"})})},e.name))});try{l.displayName="SwitchButton",l.__docgenInfo={description:"",displayName:"SwitchButton",props:{handleClick:{defaultValue:null,description:`This callback function is triggered when a tab is clicked.
It receives the name of the selected tab as an argument.`,name:"handleClick",required:!0,type:{name:"(selected: string) => void"}},selected:{defaultValue:null,description:"This property specifies the currently selected tab by name.",name:"selected",required:!0,type:{name:"string"}},tabList:{defaultValue:null,description:"This property defines the list of tabs to be displayed within the `SwitchButton` component.\nEach tab is represented by the `TabConfig` interface.",name:"tabList",required:!0,type:{name:"TabConfig[]"}}}}}catch{}const v={component:l,title:"Components/SwitchButton",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{selected:{options:[]}}},o={args:{selected:"mobile",tabList:[{name:"mobile",icon:"mobile_icon",tooltip:"Toggle to capture elements in mobile apps"},{name:"web&mobile",icon:"web&mobile_icon",tooltip:"Toggle to capture elements in mobile Web"}],handleClick:()=>{}}},i={render:()=>{const t=[{name:"mobile",icon:"mobile_icon",tooltip:"Toggle to capture elements in mobile apps"},{name:"web&mobile",icon:"web&mobile_icon",tooltip:"Toggle to capture elements in mobile Web"}],[a,c]=g.useState(t[0].name),e=u=>{c(u)};return n.jsx(l,{selected:a,tabList:[{name:"mobile",icon:"mobile_icon",tooltip:"Toggle to capture elements in mobile apps"},{name:"web&mobile",icon:"web&mobile_icon",tooltip:"Toggle to capture elements in mobile Web"}],handleClick:e})}};var s,r,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    selected: 'mobile',
    tabList: [{
      name: 'mobile',
      icon: 'mobile_icon',
      tooltip: 'Toggle to capture elements in mobile apps'
    }, {
      name: 'web&mobile',
      icon: 'web&mobile_icon',
      tooltip: 'Toggle to capture elements in mobile Web'
    }],
    handleClick: () => {}
  }
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var p,b,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const tabList = [{
      name: 'mobile',
      icon: 'mobile_icon',
      tooltip: 'Toggle to capture elements in mobile apps'
    }, {
      name: 'web&mobile',
      icon: 'web&mobile_icon',
      tooltip: 'Toggle to capture elements in mobile Web'
    }];
    const [selected, setSelected] = useState<string>(tabList[0].name);
    const handleChange = (selectedSwitch: string) => {
      setSelected(selectedSwitch);
    };
    return <SwitchButton selected={selected} tabList={[{
      name: 'mobile',
      icon: 'mobile_icon',
      tooltip: 'Toggle to capture elements in mobile apps'
    }, {
      name: 'web&mobile',
      icon: 'web&mobile_icon',
      tooltip: 'Toggle to capture elements in mobile Web'
    }]} handleClick={handleChange} />;
  }
}`,...(d=(b=i.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const L=["Default","InteractiveSwitch"];export{o as Default,i as InteractiveSwitch,L as __namedExportsOrder,v as default};
