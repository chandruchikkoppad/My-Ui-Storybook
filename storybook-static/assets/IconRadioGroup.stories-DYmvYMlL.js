import{j as s}from"./jsx-runtime-SKoiH9zj.js";import{r as u}from"./index-DJO9vBfz.js";import{c as p}from"./index-NZcV-alF.js";import{I as v}from"./Icon-BnrH6PuI.js";import{T as I}from"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const i=({items:o,onButtonClick:t,selectedValue:n=null,onChange:c,className:a=""})=>{const[l,m]=u.useState(n);u.useEffect(()=>{n!==l&&m(n)},[n,l]);const C=e=>{if(e.disabled)return;const b=e.iconName;m(b),c&&c(b),t(e)};return s.jsxs("div",{className:p("ff-icon-radio-group",a),children:[o.map(e=>s.jsx("div",{className:p("ff-icon-radio-button",{selected:l===e.iconName,disabled:e.disabled}),onClick:()=>C(e),children:s.jsx(I,{title:e.iconLabel,children:s.jsx("div",{className:p("icon-container",{selected:l===e.iconName}),children:s.jsx(v,{name:e.iconName,hoverEffect:!1,color:l===e.iconName?"var(--drawer-footer-bg)":"var(--brand-color)"})})})},e.iconName)),s.jsx("div",{className:"line-connector"})]})};try{i.displayName="IconRadioGroup",i.__docgenInfo={description:"",displayName:"IconRadioGroup",props:{items:{defaultValue:null,description:"Array of icon items that make up the radio button group.",name:"items",required:!0,type:{name:"IconRadioItem[]"}},onButtonClick:{defaultValue:null,description:`Callback function called when a button/icon is clicked. 
It returns the selected item.`,name:"onButtonClick",required:!0,type:{name:"(selectedItem: IconRadioItem) => void"}},selectedValue:{defaultValue:null,description:"The currently selected icon value",name:"selectedValue",required:!1,type:{name:"string | null"}},onChange:{defaultValue:null,description:"Callback function to notify parent of selection change.",name:"onChange",required:!1,type:{name:"((selected: string | null) => void)"}},className:{defaultValue:{value:""},description:"Optional className for custom styling",name:"className",required:!1,type:{name:"string"}}}}}catch{}const w={title:"Components/IconRadioGroup",component:i,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>{const o=[{iconName:"no_access_icon",iconLabel:"No Access",disabled:!1,disableMessage:""},{iconName:"view_access_icon",iconLabel:"View Access",disabled:!1,disableMessage:""},{iconName:"edit",iconLabel:"Edit Access",disabled:!1,disableMessage:""},{iconName:"full_access_icon",iconLabel:"Full Access",disabled:!1,disableMessage:""}],[t,n]=u.useState(null),c=a=>{n(a)};return s.jsx(i,{items:o,onButtonClick:a=>console.log("Selected:",a),onChange:c,selectedValue:t})}},r={render:()=>{const o=[{iconName:"no_access_icon",iconLabel:"No Access",disabled:!0,disableMessage:"user dont have access"},{iconName:"view_access_icon",iconLabel:"View",disabled:!1,disableMessage:""},{iconName:"edit",iconLabel:"Edit",disabled:!1,disableMessage:""},{iconName:"full_access_icon",iconLabel:"Full Access",disabled:!1,disableMessage:""}],[t,n]=u.useState(null),c=a=>{n(a)};return s.jsx(i,{items:o,onButtonClick:()=>{},onChange:c,selectedValue:t})}};var f,g,N;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const radioOptions = [{
      iconName: 'no_access_icon',
      iconLabel: 'No Access',
      disabled: false,
      disableMessage: ''
    }, {
      iconName: 'view_access_icon',
      iconLabel: 'View Access',
      disabled: false,
      disableMessage: ''
    }, {
      iconName: 'edit',
      iconLabel: 'Edit Access',
      disabled: false,
      disableMessage: ''
    }, {
      iconName: 'full_access_icon',
      iconLabel: 'Full Access',
      disabled: false,
      disableMessage: ''
    }];
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleOptionChange = (selected: string | null) => {
      setSelectedOption(selected);
    };
    return <IconRadioGroup items={radioOptions} onButtonClick={selectedItem => console.log('Selected:', selectedItem)} onChange={handleOptionChange} selectedValue={selectedOption} />;
  }
}`,...(N=(g=d.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var h,_,O;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const radioOptions = [{
      iconName: 'no_access_icon',
      iconLabel: 'No Access',
      disabled: true,
      disableMessage: 'user dont have access'
    }, {
      iconName: 'view_access_icon',
      iconLabel: 'View',
      disabled: false,
      disableMessage: ''
    }, {
      iconName: 'edit',
      iconLabel: 'Edit',
      disabled: false,
      disableMessage: ''
    }, {
      iconName: 'full_access_icon',
      iconLabel: 'Full Access',
      disabled: false,
      disableMessage: ''
    }];
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleOptionChange = (selected: string | null) => {
      setSelectedOption(selected);
    };
    return <IconRadioGroup items={radioOptions} onButtonClick={() => {}} onChange={handleOptionChange} selectedValue={selectedOption} />;
  }
}`,...(O=(_=r.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const j=["Default","WithDisabledOption"];export{d as Default,r as WithDisabledOption,j as __namedExportsOrder,w as default};
