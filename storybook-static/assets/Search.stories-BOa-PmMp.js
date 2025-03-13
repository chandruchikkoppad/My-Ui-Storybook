import{j as o}from"./jsx-runtime-SKoiH9zj.js";import{S as p}from"./Search-Dm9HxENG.js";import{r as t}from"./index-DJO9vBfz.js";import"./index-NZcV-alF.js";import"./Icon-BnrH6PuI.js";import"./checkEmpty-xi6SckPb.js";import"./Typography-DdMJCn-_.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./Toastify-CnLhTvUT.js";import"./Toast-CWcBRmbh.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./UseKeyboardActions-IEqgejH8.js";const z={title:"Components/Search",component:p,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[l,e]=t.useState(!1),[h,a]=t.useState(""),s=r=>{a(r)},d=()=>{e(!1),a("")};return o.jsx("div",{children:o.jsx(p,{placeholder:"Search here...",isExpand:l,value:h,onSearch:s,onExpand:r=>e(r),onClose:d,disabled:!1,width:200})})}},c={render:()=>{const[l,e]=t.useState(!1),[h,a]=t.useState(""),[s,d]=t.useState(!0),r=i=>{a(i)},I=()=>{e(!1),a("")},E=()=>{d(!s)};return o.jsx("div",{children:o.jsx(p,{placeholder:s?"Ask Me Anything":"Search here...",isExpand:l,value:h,onSearch:r,onExpand:i=>e(i),onClose:I,disabled:!1,width:100,isAISearch:!0,isAISearchClicked:s,handleActiveAiSearch:E})})}};var S,u,A;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [isExpand, setIsExpand] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (value: string) => {
      setSearchValue(value);
    };
    const handleClose = () => {
      setIsExpand(false);
      setSearchValue('');
    };
    return <div>\r
        <Search placeholder="Search here..." isExpand={isExpand} value={searchValue} onSearch={handleSearch} onExpand={expand => setIsExpand(expand)} onClose={handleClose} disabled={false} width={200} />\r
      </div>;
  }
}`,...(A=(u=n.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var x,m,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [isExpand, setIsExpand] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isAISearchActive, setIsAISearchActive] = useState(true);
    const handleSearch = (value: string) => {
      setSearchValue(value);
    };
    const handleClose = () => {
      setIsExpand(false);
      setSearchValue('');
    };
    const handleActiveAiSearch = () => {
      setIsAISearchActive(!isAISearchActive);
    };
    return <div>\r
        <Search placeholder={isAISearchActive ? 'Ask Me Anything' : 'Search here...'} isExpand={isExpand} value={searchValue} onSearch={handleSearch} onExpand={expand => setIsExpand(expand)} onClose={handleClose} disabled={false} width={100} isAISearch={true} isAISearchClicked={isAISearchActive} handleActiveAiSearch={handleActiveAiSearch} />\r
      </div>;
  }
}`,...(v=(m=c.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const B=["Default","AISearch"];export{c as AISearch,n as Default,B as __namedExportsOrder,z as default};
