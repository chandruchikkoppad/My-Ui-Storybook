import{j as i}from"./jsx-runtime-SKoiH9zj.js";import{r as C}from"./index-DJO9vBfz.js";import{T as $}from"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./index-NZcV-alF.js";const y=()=>C.useMemo(()=>({colorMapping:{passed:"var(--status-success-text-color)",failed:"var(--status-rejected-text-color)",warning:"var(--status-warning-text-color)",skipped:"var(--status-skipped-text-color)"},backgroundColorMapping:{passed:"var(--status-success-bg-color)",failed:"var(--status-rejected-bg-color)",warning:"var(--status-warning-bg-color)",skipped:"var(--status-skipped-bg-color)"}}),[]),h=({x:a,y:t,radius:e,startAngle:n,endAngle:s})=>{const u=a+e*Math.cos(n),c=t+e*Math.sin(n),l=a+e*Math.cos(s),d=t+e*Math.sin(s),o=s-n>Math.PI?1:0;return`M ${u} ${c} A ${e} ${e} 0 ${o} 1 ${l} ${d}`},P=(a,t,e,n)=>{if(t===0){const r=h({x:0,y:0,radius:n,startAngle:0,endAngle:2*Math.PI});return{endAngle:e,backgroundArcPath:r,foregroundArcPath:"",percentage:0}}const s=a/t,u=s*2*Math.PI;let c=e,l=c+u;a===t&&(c=0,l=2*Math.PI);const d=h({x:0,y:0,radius:n,startAngle:0,endAngle:2*Math.PI}),o=h({x:0,y:0,radius:n,startAngle:c,endAngle:l});return{endAngle:l,backgroundArcPath:d,foregroundArcPath:o,percentage:s}},f=({radius:a=15,lineWidth:t=5,statusValues:e=[],onClick:n=()=>{},fontSize:s=6})=>{const{colorMapping:u,backgroundColorMapping:c}=y(),l=e.reduce((r,p)=>r+p.value,0);let d=-Math.PI/2;const o=2*(a+t);return i.jsx("div",{className:"ff-radial-chart-container",style:{"--fontSize":`${s}px`},children:e.map(r=>{const p=r.status.toLowerCase(),{endAngle:M,backgroundArcPath:b,foregroundArcPath:A,percentage:m}=P(r.value,l,d,a);return d=M,i.jsx($,{title:`${r.status}: ${Math.round(m*100)}%`,zIndex:1e3,children:i.jsx("svg",{width:o,height:o,viewBox:`0 0 ${o} ${o}`,onClick:()=>n(r),role:"img","aria-label":`${r.status}: ${Math.round(m*100)}%`,children:i.jsxs("g",{transform:`translate(${a+t}, ${a+t})`,children:[i.jsx("path",{d:b,fill:"none",stroke:c[p],strokeWidth:t}),i.jsx("path",{d:A,fill:"none",stroke:u[p],strokeWidth:t}),i.jsx("text",{x:"0",y:"0",fill:u[p],textAnchor:"middle",dominantBaseline:"central",children:`${Math.round(m*100)}%`})]})},r.status)})})})};try{f.displayName="RadialChart",f.__docgenInfo={description:"",displayName:"RadialChart",props:{radius:{defaultValue:{value:"15"},description:"",name:"radius",required:!1,type:{name:"number"}},lineWidth:{defaultValue:{value:"5"},description:"",name:"lineWidth",required:!1,type:{name:"number"}},statusValues:{defaultValue:{value:"[]"},description:"",name:"statusValues",required:!1,type:{name:"Status[]"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((status: Status) => void)"}},fontSize:{defaultValue:{value:"6"},description:"",name:"fontSize",required:!1,type:{name:"number"}}}}}catch{}const W={title:"Components/RadialChart",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{radius:{control:"number"},lineWidth:{control:"number"},statusValues:{control:"object"},onClick:{action:"clicked"},fontSize:{control:"number"}}},g={args:{radius:15,lineWidth:5,statusValues:[{status:"Passed",value:40},{status:"Failed",value:20},{status:"Warning",value:20},{status:"Skipped",value:20}],onClick:()=>{},fontSize:8}};var v,x,k;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    radius: 15,
    lineWidth: 5,
    statusValues: [{
      status: 'Passed',
      value: 40
    }, {
      status: 'Failed',
      value: 20
    }, {
      status: 'Warning',
      value: 20
    }, {
      status: 'Skipped',
      value: 20
    }],
    onClick: () => {},
    fontSize: 8
  }
}`,...(k=(x=g.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const q=["ChartWithStatus"];export{g as ChartWithStatus,q as __namedExportsOrder,W as default};
