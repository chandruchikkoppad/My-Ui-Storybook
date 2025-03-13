import{j as s}from"./jsx-runtime-SKoiH9zj.js";import{c as M}from"./index-NZcV-alF.js";import{T as y}from"./Typography-DdMJCn-_.js";import{r as C}from"./index-DJO9vBfz.js";const n=({label:e="",isActive:t=!0,onClick:r=()=>{},isFilterChip:a=!1})=>{const i=a?"filter":"module";return s.jsx("div",{className:M("ff-module-chip",{"ff-filter-chip":a,[`ff-${i}-chip--active`]:t,[`ff-${i}-chip--hover`]:!t}),onClick:r,children:s.jsx(y,{lineHeight:"18px",className:"module-typography",children:e})})};try{n.displayName="ModuleChip",n.__docgenInfo={description:"",displayName:"ModuleChip",props:{label:{defaultValue:{value:""},description:"mandatory | label for the ModuleChip component",name:"label",required:!1,type:{name:"string"}},isActive:{defaultValue:{value:"true"},description:"mandatory | isActive for the ModuleChip component",name:"isActive",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},description:"mandatory | onClick for the ModuleChip component",name:"onClick",required:!1,type:{name:"() => void"}},isFilterChip:{defaultValue:{value:"false"},description:"",name:"isFilterChip",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Components/ModuleChip",component:n,parameters:{layout:"centered"},argTypes:{isActive:Boolean},tags:["autodocs"]},f={label:"Modules"},o={render:()=>{const[e,t]=C.useState(!0),r=()=>{t(!e)};return s.jsx(n,{...f,isActive:e,onClick:r})}},l={render:()=>{const[e,t]=C.useState(!0),r=()=>{t(!e)};return s.jsx(n,{...f,isActive:e,onClick:r,isFilterChip:!0})}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState<boolean>(true);
    const handleChipClick = () => {
      setSelectedMenu(!selectedMenu);
    };
    return <ModuleChip {...defaultArgs} isActive={selectedMenu} onClick={handleChipClick} />;
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState<boolean>(true);
    const handleChipClick = () => {
      setSelectedMenu(!selectedMenu);
    };
    return <ModuleChip {...defaultArgs} isActive={selectedMenu} onClick={handleChipClick} isFilterChip />;
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const A=["Controlled","FilterChip"];export{o as Controlled,l as FilterChip,A as __namedExportsOrder,x as default};
