import{j as c}from"./jsx-runtime-SKoiH9zj.js";import{I as B}from"./Icon-BnrH6PuI.js";import"./index-DJO9vBfz.js";import"./index-NZcV-alF.js";const l=({variant:m="small",iconName:L,iconColor:u="var(--avatar-icon-color)",customAvatarSize:d,customIconSize:p,backgroundColor:j,label:e,labelFontSize:W})=>{const $=e==null?void 0:e.slice(0,2);return c.jsx("div",{className:`ff-avatar ff-avatar--${m}`,style:{height:`${d}px`,width:`${d}px`,backgroundColor:j},children:e?c.jsx("span",{className:"ff-avatar-label",style:{fontSize:W||"14px",color:u},children:$}):c.jsx(B,{name:L,height:p,width:p,color:u})})};try{l.displayName="Avatar",l.__docgenInfo={description:"",displayName:"Avatar",props:{variant:{defaultValue:{value:"small"},description:"This property determines the size of the avatar. It can be set to 'small', 'medium', or 'large'.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},backgroundColor:{defaultValue:null,description:"This property allows you to customize the background color of the avatar.",name:"backgroundColor",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"This property specifies the name of the icon to be displayed within the avatar.",name:"iconName",required:!1,type:{name:"string"}},iconColor:{defaultValue:{value:"var(--avatar-icon-color)"},description:"This property allows you to customize the color of the icon within the avatar.",name:"iconColor",required:!1,type:{name:"string"}},customAvatarSize:{defaultValue:null,description:"This property allows you to set a custom size for the avatar, overriding the default size specified by the variant property.",name:"customAvatarSize",required:!1,type:{name:"number"}},customIconSize:{defaultValue:null,description:"This property allows you to set a custom size for the icon within the avatar.",name:"customIconSize",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"This property specifies the label to display inside the avatar, used as an alternative to the icon.",name:"label",required:!1,type:{name:"string"}},labelFontSize:{defaultValue:null,description:"This property allows you to customize the font size of the label inside the avatar.",name:"labelFontSize",required:!1,type:{name:"string"}}}}}catch{}const R={component:l,title:"Components/Avatar",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:{type:"radio"},options:["small","medium","large"]}}},a={args:{variant:"small",iconName:"accordion_header_icon"}},r={args:{variant:"medium",iconName:"accordion_header_icon"}},o={args:{variant:"large",iconName:"accordion_header_icon"}},t={args:{customAvatarSize:30,iconName:"accordion_header_icon"}},n={args:{customIconSize:30,customAvatarSize:40,iconName:"accordion_header_icon"}},s={args:{label:"AB",customAvatarSize:40,labelFontSize:"16px",backgroundColor:"#E0E0E0",iconColor:"#333"}},i={args:{label:"XY",customAvatarSize:50,labelFontSize:"20px",backgroundColor:"#F5A623",iconColor:"#FFF"}};var h,v,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    iconName: 'accordion_header_icon'
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,y,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'medium',
    iconName: 'accordion_header_icon'
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var z,_,b;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'large',
    iconName: 'accordion_header_icon'
  }
}`,...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var A,C,N;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    customAvatarSize: 30,
    iconName: 'accordion_header_icon'
  }
}`,...(N=(C=t.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var x,F,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    customIconSize: 30,
    customAvatarSize: 40,
    iconName: 'accordion_header_icon'
  }
}`,...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var I,T,q;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'AB',
    customAvatarSize: 40,
    labelFontSize: '16px',
    backgroundColor: '#E0E0E0',
    iconColor: '#333'
  }
}`,...(q=(T=s.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,V,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'XY',
    customAvatarSize: 50,
    labelFontSize: '20px',
    backgroundColor: '#F5A623',
    iconColor: '#FFF'
  }
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const D=["Small","Medium","Large","CustomAvatarSize","CustomIconSize","WithLabel","LabelWithCustomSize"];export{t as CustomAvatarSize,n as CustomIconSize,i as LabelWithCustomSize,o as Large,r as Medium,a as Small,s as WithLabel,D as __namedExportsOrder,R as default};
