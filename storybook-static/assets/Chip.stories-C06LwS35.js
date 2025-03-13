import{j as r}from"./jsx-runtime-SKoiH9zj.js";import{r as ce}from"./index-DJO9vBfz.js";import{c as de}from"./index-NZcV-alF.js";import{T as g}from"./Typography-DdMJCn-_.js";/* empty css                */const s=({label:t="",fullText:a="",variant:te="primary",labelWidth:se=36,fullTextWidth:oe=86,onClick:le=()=>{}})=>{const[b,x]=ce.useState(!1),y=b&&a?a:t,ne=()=>x(!0),ue=()=>x(!1),ie=b?{maxWidth:`${oe}px`,transition:"transform 0.3s ease-in-out,max-width 0.5s ease-in-out",overflow:"hidden"}:{maxWidth:`${se}px`,transition:"transform 0.3s ease-in-out,max-width 0.5s ease-in-out",overflow:"hidden"};return r.jsx("div",{className:"ff-chip-wrapper",children:r.jsx("button",{onMouseEnter:ne,onMouseLeave:ue,onClick:le,className:de(`ff-default-chip-style ff-default-chip-style--${te}`,{"ff-default-chip-style--fullText":!!a}),style:ie,children:y&&r.jsx(g,{as:"p",fontSize:10,fontWeight:"semi-bold",color:"var(----text-color)",className:"ff-chip-paragraph",children:y})})})};try{s.displayName="Chip",s.__docgenInfo={description:"",displayName:"Chip",props:{label:{defaultValue:{value:""},description:"The text to be displayed on the Chip.",name:"label",required:!1,type:{name:"string"}},fullText:{defaultValue:{value:""},description:"The text to be displayed on hover.",name:"fullText",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"The variant of the Chip.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"warning"'},{value:'"custom"'},{value:'"success"'},{value:'"error"'},{value:'"public"'},{value:'"partial-public"'},{value:'"private"'},{value:'"count"'}]}},labelWidth:{defaultValue:{value:"36"},description:"The callback function to be executed when the Chip is clicked.",name:"labelWidth",required:!1,type:{name:"number"}},fullTextWidth:{defaultValue:{value:"86"},description:"",name:"fullTextWidth",required:!1,type:{name:"number"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const ge={title:"Components/Chip",component:s,parameters:{layout:"left"},tags:["autodocs"]},e={label:"SM 0"},o={args:{...e,variant:"primary",fullText:"Sub Modules 0"}},l={args:{...e}},n={render:()=>{const t=["Item 1","Item 2","Item 3"];return r.jsx(g,{as:"div",children:t.map(a=>r.jsx(s,{label:a,variant:"primary",fullText:"hover item",labelWidth:50,fullTextWidth:100},a))})}},u={render:()=>{const t=["Item 1","Item 2","Item 3"];return r.jsx(g,{as:"div",children:t.map(a=>r.jsx(s,{label:a,variant:"custom",labelWidth:50,fullTextWidth:100},a))})}},i={args:{...e,variant:"success",fullText:"Sub Modules 0"}},c={args:{...e,variant:"error",fullText:"Sub Modules 0"}},d={args:{...e,variant:"warning",fullText:"Sub Modules 0"}},p={args:{...e,variant:"public",fullText:"Sub Modules 0"}},m={args:{...e,variant:"partial-public",fullText:"Sub Modules 0"}},f={args:{...e,variant:"private",fullText:"Sub Modules 0"}},v={args:{...e,variant:"disabled",fullText:"Sub Modules 0"}},h={args:{...e,variant:"count",fullText:"Sub Modules 0"}};var T,S,M;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'primary',
    fullText: 'Sub Modules 0'
  }
}`,...(M=(S=o.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var C,W,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(I=(W=l.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var w,A,P;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    return <Typography as="div">\r
        {items.map(item => <Chip key={item} label={item} variant="primary" fullText="hover item" labelWidth={50} fullTextWidth={100} />)}\r
      </Typography>;
  }
}`,...(P=(A=n.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var _,j,E;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    return <Typography as="div">\r
        {items.map(item => <Chip key={item} label={item} variant="custom" labelWidth={50} fullTextWidth={100} />)}\r
      </Typography>;
  }
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var k,q,V;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'success',
    fullText: 'Sub Modules 0'
  }
}`,...(V=(q=i.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var N,O,$;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'error',
    fullText: 'Sub Modules 0'
  }
}`,...($=(O=c.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var D,G,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'warning',
    fullText: 'Sub Modules 0'
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,z,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'public',
    fullText: 'Sub Modules 0'
  }
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var B,F,J;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'partial-public',
    fullText: 'Sub Modules 0'
  }
}`,...(J=(F=m.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'private',
    fullText: 'Sub Modules 0'
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'disabled',
    fullText: 'Sub Modules 0'
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'count',
    fullText: 'Sub Modules 0'
  }
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const be=["Primary","withoutExpand","Group","CustomChip","Success","Errors","Warning","Public","PartialPublic","Private","Disabled","Count"];export{h as Count,u as CustomChip,v as Disabled,c as Errors,n as Group,m as PartialPublic,o as Primary,f as Private,p as Public,i as Success,d as Warning,be as __namedExportsOrder,ge as default,l as withoutExpand};
