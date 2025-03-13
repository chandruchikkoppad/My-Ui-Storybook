import{j as t}from"./jsx-runtime-SKoiH9zj.js";import{A as a}from"./AllProjectsDropdown-D5AhoVFg.js";import{r as j}from"./index-DJO9vBfz.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./truncateText-D2e1-n0F.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./useClickOutside-BYc9KT_v.js";import"./Search-Dm9HxENG.js";import"./Toastify-CnLhTvUT.js";import"./Toast-CWcBRmbh.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./UseKeyboardActions-IEqgejH8.js";const E={title:"Components/AllProjectsDropdown",component:a,parameters:{layout:"centered"},tags:["autodocs"]},u=[{label:"All Projects",value:"All Projects",iconName:"all_projects"},{label:"Pantaloon Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project",value:"Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project Pantaloon Web Project",iconName:"web_icon"},{label:"Mobile Project",value:"Mobile Project",iconName:"mobile_icon"},{label:"Web & Mobile Project",value:"Web & Mobile Project",iconName:"web&mobile_icon"},{label:"Sales Force",value:"Sales Force",iconName:"sales_force"},{label:"MS Dynamic",value:"MS Dynamic",iconName:"ms_dynamic"},{label:"Test",value:"test",iconName:"mobile_icon"},{label:"Web Service",value:"Web Service",iconName:""}],e={render:()=>{const[n,l]=j.useState({label:"All Projects",value:"All Projects",iconName:"all_projects"}),r=c=>{l(c)};return t.jsx("div",{style:{backgroundColor:"var(--brand-color)",height:50,width:120,padding:10},children:t.jsx(a,{options:u,onClick:r,selectedOption:n})})}},o={render:()=>{const[n,l]=j.useState({label:"All Projects",value:"All Projects",iconName:"all_projects"}),r=c=>{l(c)};return t.jsx("div",{style:{backgroundColor:"var(--brand-color)",height:50,width:120,padding:10},children:t.jsx(a,{options:u,onClick:r,selectedOption:n,selected:!0,placeholder:"Search Projects"})})}};var i,s,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = useState({
      label: 'All Projects',
      value: 'All Projects',
      iconName: 'all_projects'
    });
    const handleSelectedOption = (option: optionsType) => {
      setSelectedOption(option);
    };
    return <div style={{
      backgroundColor: 'var(--brand-color)',
      height: 50,
      width: 120,
      padding: 10
    }}>\r
        <AllProjectsDropdown options={options} onClick={handleSelectedOption} selectedOption={selectedOption} />\r
      </div>;
  }
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var d,m,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = useState({
      label: 'All Projects',
      value: 'All Projects',
      iconName: 'all_projects'
    });
    const handleSelectedOption = (option: optionsType) => {
      setSelectedOption(option);
    };
    return <div style={{
      backgroundColor: 'var(--brand-color)',
      height: 50,
      width: 120,
      padding: 10
    }}>\r
        <AllProjectsDropdown options={options} onClick={handleSelectedOption} selectedOption={selectedOption} selected={true} placeholder='Search Projects' />\r
      </div>;
  }
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const T=["Default","Selected"];export{e as Default,o as Selected,T as __namedExportsOrder,E as default};
