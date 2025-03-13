import{j as s}from"./jsx-runtime-SKoiH9zj.js";import{R as r}from"./RadioGroup-CXtVZnPC.js";import{r as l}from"./index-DJO9vBfz.js";import{I as O}from"./Icon-BnrH6PuI.js";import"./RadioButton-BS2T1CXK.js";import"./index-NZcV-alF.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./Typography-DdMJCn-_.js";const K={title:"Components/RadioGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"]},i={render:()=>{const t=[{value:"men",label:"Men"},{value:"women",label:"Women"},{value:"other",label:"Other"}],[o,n]=l.useState("option2"),e=a=>{n(a.value)};return s.jsx(r,{options:t,onChange:e,name:"option",selectedValue:o})}},p={render:()=>{const t=[{value:"men",label:"Men",disabled:!0},{value:"women",label:"Women"},{value:"other",label:"Other"}],[o,n]=l.useState(""),e=a=>{n(a.value)};return s.jsx(r,{options:t,onChange:e,name:"option",selectedValue:o})}},d={render:()=>{const t=[{value:"men",label:"Men"},{value:"women",label:"Women",disabled:!0},{value:"other",label:"Other"}],[o,n]=l.useState("women"),e=a=>{n(a.value)};return s.jsx(r,{options:t,onChange:e,name:"gender",selectedValue:o})}},c={render:()=>{const t=[{value:"men",label:"Men",showTooltip:!0,tooltipChildren:s.jsx(O,{name:"info"}),tooltipTitle:"Info",tooltipPosition:"bottom"},{value:"women",label:"Women",showTooltip:!0,disabled:!0,tooltipPosition:"left"},{value:"other",label:"Other",showTooltip:!0,tooltipChildren:s.jsx(O,{name:"info"}),tooltipTitle:"Info"}],[o,n]=l.useState("women"),e=a=>{n(a.value)};return s.jsx(r,{options:t,onChange:e,name:"gender",selectedValue:o})}},u={render:()=>{const[t,o]=l.useState("restApi"),n=[{value:"restApi",label:"RestAPI"},{value:"snippets",label:"Snippet"},{value:"history",label:"History"}],e=a=>{o(a.value)};return s.jsx(r,{options:n,onChange:e,name:"option",selectedValue:t,isAsteriskRequired:!0,isLabel:!0,label:"Web Services",classNameForLabel:"ff-radio-label-wrapper"})}},m={render:()=>{const[t,o]=l.useState(""),[n,e]=l.useState(!1),a=[{value:"restApi",label:"RestAPI"},{value:"snippets",label:"Snippet"},{value:"history",label:"History"}],M=G=>{o(G.value),e(!1)},y=()=>{e(t==="")};return s.jsx(r,{options:a,onChange:M,name:"option",selectedValue:t,isAsteriskRequired:!0,isLabel:!0,label:"Web Services",classNameForLabel:"ff-radio-label-wrapper",isError:n,onBlur:y,errorMessage:"It is required to activate",disabled:!0})}};var h,b,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const radioOptions = [{
      value: 'men',
      label: 'Men'
    }, {
      value: 'women',
      label: 'Women'
    },
    // Disabled option
    {
      value: 'other',
      label: 'Other'
    }];
    const [selectedOption, setSelectedOption] = useState('option2');
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return <RadioGroup options={radioOptions} onChange={handleOptionChange} name="option" selectedValue={selectedOption} />;
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,g,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const radioOptions = [{
      value: 'men',
      label: 'Men',
      disabled: true
    }, {
      value: 'women',
      label: 'Women'
    },
    // Disabled option
    {
      value: 'other',
      label: 'Other'
    }];
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return <RadioGroup options={radioOptions} onChange={handleOptionChange} name="option" selectedValue={selectedOption} />;
  }
}`,...(C=(g=p.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,w,W;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const radioOptions = [{
      value: 'men',
      label: 'Men'
    }, {
      value: 'women',
      label: 'Women',
      disabled: true
    },
    // Disabled option
    {
      value: 'other',
      label: 'Other'
    }];
    const [selectedOption, setSelectedOption] = useState('women');
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return <RadioGroup options={radioOptions} onChange={handleOptionChange} name="gender" selectedValue={selectedOption} />;
  }
}`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var R,I,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const radioOptions = [{
      value: 'men',
      label: 'Men',
      showTooltip: true,
      tooltipChildren: <Icon name="info" />,
      tooltipTitle: 'Info',
      tooltipPosition: 'bottom'
    }, {
      value: 'women',
      label: 'Women',
      showTooltip: true,
      disabled: true,
      tooltipPosition: 'left'
    }, {
      value: 'other',
      label: 'Other',
      showTooltip: true,
      tooltipChildren: <Icon name="info" />,
      tooltipTitle: 'Info'
    }];
    const [selectedOption, setSelectedOption] = useState('women');
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return <RadioGroup options={radioOptions} onChange={handleOptionChange} name="gender" selectedValue={selectedOption} />;
  }
}`,...(A=(I=c.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var T,x,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = useState('restApi');
    const radioOptions = [{
      value: 'restApi',
      label: 'RestAPI'
    }, {
      value: 'snippets',
      label: 'Snippet'
    }, {
      value: 'history',
      label: 'History'
    }];
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
    };
    return <RadioGroup options={radioOptions} onChange={handleOptionChange} name="option" selectedValue={selectedOption} isAsteriskRequired isLabel label={'Web Services'} classNameForLabel="ff-radio-label-wrapper" />;
  }
}`,...(E=(x=u.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var L,V,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState(false);
    const radioOptions = [{
      value: 'restApi',
      label: 'RestAPI'
    }, {
      value: 'snippets',
      label: 'Snippet'
    }, {
      value: 'history',
      label: 'History'
    }];
    const handleOptionChange = (option: Option) => {
      setSelectedOption(option.value);
      setError(false);
    };
    const handleBlur = () => {
      if (selectedOption === '') {
        setError(true);
      } else {
        setError(false);
      }
    };
    return <RadioGroup options={radioOptions} onChange={handleOptionChange} name="option" selectedValue={selectedOption} isAsteriskRequired isLabel label={'Web Services'} classNameForLabel="ff-radio-label-wrapper" isError={error} onBlur={handleBlur} errorMessage="It is required to activate" disabled={true} />;
  }
}`,...(j=(V=m.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const Q=["Controlled","WithDisabledOption","DisabledSelected","WithToolTipIcon","WithLabelled","WithLabelledError"];export{i as Controlled,d as DisabledSelected,p as WithDisabledOption,u as WithLabelled,m as WithLabelledError,c as WithToolTipIcon,Q as __namedExportsOrder,K as default};
