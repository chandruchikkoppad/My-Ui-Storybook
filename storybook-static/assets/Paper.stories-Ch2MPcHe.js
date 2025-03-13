import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{c as C}from"./index-NZcV-alF.js";import{r as R}from"./index-DJO9vBfz.js";import{T as p}from"./Typography-DdMJCn-_.js";const r=({children:d,className:w="",rounded:S=!1})=>{const b=C({ff_rounded_lg:S},w);return e.jsx("div",{className:b,children:d})};try{r.displayName="Paper",r.__docgenInfo={description:"",displayName:"Paper",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Override or extend the styles applied to the component.",name:"className",required:!1,type:{name:"string"}},rounded:{defaultValue:{value:"false"},description:"If `true`, rounded corners are Enabled.",name:"rounded",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Components/Paper",component:r,parameters:{layout:"centered"},tags:["autodocs"]},W={Children:R.Children,className:"",rounded:!1},a={args:{...W,children:e.jsx("p",{children:"This is a simple Paper component with default styles."}),className:"ff_paper_default_style"}},s={render:()=>e.jsx(r,{className:"ff_paper_default_style",children:e.jsx(p,{children:"This Paper component has custom background color and padding."})})},n={render:()=>e.jsx(r,{className:"ff_paper_default_style",children:e.jsx(p,{children:"This Paper component has a shadow depth of 6."})})},o={render:()=>e.jsx(r,{className:"ff_paper_basic_style",rounded:!0,children:e.jsx(p,{children:"This Paper component combines custom styles, shadow depth of 10, and rounded corners."})})},t={render:()=>e.jsx(r,{rounded:!0,className:"ff_paper_default_style",children:e.jsx(p,{children:"This Paper component has Rounded Corners."})})};var c,l,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    children: <p>This is a simple Paper component with default styles.</p>,
    className: 'ff_paper_default_style'
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Paper className="ff_paper_default_style">\r
        <Typography>\r
          This Paper component has custom background color and padding.\r
        </Typography>\r
      </Paper>;
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,y,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <Paper className="ff_paper_default_style">\r
        <Typography>This Paper component has a shadow depth of 6.</Typography>\r
      </Paper>;
  }
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var P,g,T;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <Paper className="ff_paper_basic_style" rounded>\r
        <Typography>\r
          This Paper component combines custom styles, shadow depth of 10, and\r
          rounded corners.\r
        </Typography>\r
      </Paper>;
  }
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var N,x,j;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    return <Paper rounded className="ff_paper_default_style">\r
        <Typography>This Paper component has Rounded Corners.</Typography>\r
      </Paper>;
  }
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const A=["Default","PrimaryPaper","PaperWithLowShadow","PaperWithHighShadow","PaperWithRounded"];export{a as Default,o as PaperWithHighShadow,n as PaperWithLowShadow,t as PaperWithRounded,s as PrimaryPaper,A as __namedExportsOrder,k as default};
