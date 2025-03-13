import{j as c}from"./jsx-runtime-SKoiH9zj.js";import{r as k}from"./index-DJO9vBfz.js";import{c as S}from"./index-NZcV-alF.js";import{I as v}from"./Icon-BnrH6PuI.js";const s=({onChange:e,variant:n="primary",disabled:t,checked:a=!1,id:C="toggle",size:f="large",icon:r})=>{const W=B=>{e&&e(B)},l={large:10,medium:8,small:6}[f],b={checked:{name:"check_mark",width:l,height:l},unchecked:{name:"wrong_mark",width:l,height:l}},o={checked:{...b.checked,...r==null?void 0:r.checked},unchecked:{...b.unchecked,...r==null?void 0:r.unchecked}};return c.jsxs("div",{className:"ff--switch-container",children:[c.jsx("input",{className:"ff--switch-checkbox",id:`ff-toggle-${C}`,type:"checkbox",disabled:!!t,onChange:W,checked:a}),c.jsx("label",{className:S(`ff--switch-label default--${f} ff--switch-label--${n}`,{"ff--switch-label--disabled":t}),htmlFor:`ff-toggle-${C}`,children:c.jsx("span",{className:S(`ff--switch-button ff--switch-button--${f}`,{checked:a}),children:a?c.jsx(v,{name:o.checked.name,width:o.checked.width,height:o.checked.height,className:`ff-checked-icon--${n}`}):c.jsx(v,{name:o.unchecked.name,width:o.unchecked.width,height:o.unchecked.height,className:`ff-unchecked-icon--${n}`})})})]})};try{s.displayName="Toggle",s.__docgenInfo={description:"",displayName:"Toggle",props:{onChange:{defaultValue:null,description:"Optional onChange handler",name:"onChange",required:!1,type:{name:"((event: MouseEvent<HTMLInputElement, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"Optional disabled state",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:"Optional checked state",name:"checked",required:!1,type:{name:"boolean"}},id:{defaultValue:{value:"toggle"},description:"Optional id",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"What background color to occur upon toggled",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"large"},description:"Defines the size of the toggle",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},icon:{defaultValue:null,description:`Optional icon configuration for the toggle. This allows for custom icons to be used for both the checked and unchecked states.
@property checked - Icon configuration for the checked state.
@property unchecked - Icon configuration for the unchecked state.
@example {
  checked: { name: 'checked-icon', width: 24, height: 24 },
  unchecked: { name: 'unchecked-icon', width: 24, height: 24 }
}`,name:"icon",required:!1,type:{name:"{ checked?: { name: string; width: number; height: number; }; unchecked?: { name: string; width: number; height: number; }; } | undefined"}}}}}catch{}const U={title:"Components/Toggle",component:s,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},checked:{control:"boolean"},id:{control:"text"},size:{control:{type:"select",options:["small","medium","large"]}}}},d={args:{disabled:!1,checked:!1,id:"toggle1",size:"large"}},h={args:{...d.args,disabled:!0,id:"toggle2"}},i={args:{...d.args,checked:!0,id:"toggle3"}},u={render:()=>{const[e,n]=k.useState(!1),t=a=>{n(a.target.checked)};return c.jsx(s,{id:"toggle4",size:"small",checked:e,onChange:t})}},g={render:()=>{const[e,n]=k.useState(!1),t=a=>{n(a.target.checked)};return c.jsx(s,{id:"toggle5",size:"medium",checked:e,onChange:t})}},m={render:()=>{const[e,n]=k.useState(!1),t=a=>{n(a.target.checked)};return c.jsx(s,{id:"toggle7",size:"large",checked:e,onChange:t,icon:{checked:{name:"moon_stars_icon",width:14,height:14},unchecked:{name:"sun_icon",width:14,height:14}}})}},p={render:()=>{const[e,n]=k.useState(!1),t=a=>{n(a.target.checked)};return c.jsx(s,{id:"toggle8",size:"large",checked:e,onChange:t})}};var w,y,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: false,
    checked: false,
    id: 'toggle1',
    size: 'large'
  }
}`,...(E=(y=d.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var z,M,x;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    id: 'toggle2'
  }
}`,...(x=(M=h.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var I,T,_;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    checked: true,
    id: 'toggle3'
  }
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var j,D,H;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return <Toggle id="toggle4" size="small" checked={checked} onChange={handleChange} />;
  }
}`,...(H=(D=u.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var L,N,q;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return <Toggle id="toggle5" size="medium" checked={checked} onChange={handleChange} />;
  }
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var V,$,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return <Toggle id="toggle7" size="large" checked={checked} onChange={handleChange} icon={{
      checked: {
        name: 'moon_stars_icon',
        width: 14,
        height: 14
      },
      unchecked: {
        name: 'sun_icon',
        width: 14,
        height: 14
      }
    }} />;
  }
}`,...(O=($=m.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var R,A,F;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return <Toggle id="toggle8" size="large" checked={checked} onChange={handleChange} />;
  }
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const X=["Default","Disabled","Checked","SmallSize","MediumSize","DynamicIconAndSize","Controlled"];export{i as Checked,p as Controlled,d as Default,h as Disabled,m as DynamicIconAndSize,g as MediumSize,u as SmallSize,X as __namedExportsOrder,U as default};
