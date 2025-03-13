import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{P as n}from"./Prompt-BYfqIxGs.js";import{r as c}from"./index-DJO9vBfz.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./UseKeyboardActions-IEqgejH8.js";const x={title:"Components/Prompt",component:n,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>{const[i,s]=c.useState(""),p=l=>{const m=l.target.value;s(m)};return e.jsx("div",{children:e.jsx(n,{width:430,height:40,placeholder:"Enter your question here",iconName:"right_arrow_filled_icon",iconPosition:"right",borderRadius:80,tooltipTitle:"send",iconHeight:24,iconWidth:24,iconColor:"var(--brand-color)",value:i,onChange:p,submitPrompt:()=>alert("enter button clicked")})})}};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [promptValue, setPromptValue] = useState('');
    const handlePromptChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPromptValue(value);
    };
    return <div>\r
        <Prompt width={430} height={40} placeholder="Enter your question here" iconName="right_arrow_filled_icon" iconPosition="right" borderRadius={80} tooltipTitle="send" iconHeight={24} iconWidth={24} iconColor="var(--brand-color)" value={promptValue} onChange={handlePromptChange} submitPrompt={() => alert('enter button clicked')} />\r
      </div>;
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const E=["DefaultPrompt"];export{t as DefaultPrompt,E as __namedExportsOrder,x as default};
