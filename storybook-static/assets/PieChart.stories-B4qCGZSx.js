import{j as l}from"./jsx-runtime-SKoiH9zj.js";import{r as A}from"./index-DJO9vBfz.js";import{T as k}from"./Typography-DdMJCn-_.js";const z=({x:t,y:o,radius:c,startAngle:n,endAngle:r})=>{const g=t+c*Math.cos(n),h=o+c*Math.sin(n),p=t+c*Math.cos(r),d=o+c*Math.sin(r),f=r-n>Math.PI?1:0;return`M ${g} ${h} A ${c} ${c} 0 ${f} 1 ${p} ${d} L ${t} ${o} Z`},L=(t,o,c,n)=>{if(o===0)return{endAngle:c,backgroundArcPath:"",foregroundArcPath:"",percentage:0};const r=t/o,g=r*2*Math.PI,h=c,p=h+g;if(r===1){const f=`
      M ${n} 0 
      A ${n} ${n} 0 1 1 ${-n} 0 
      A ${n} ${n} 0 1 1 ${n} 0 
      Z
    `;return{endAngle:p,backgroundArcPath:f,foregroundArcPath:f,percentage:r}}const d=z({x:0,y:0,radius:n,startAngle:h,endAngle:p});return{endAngle:p,backgroundArcPath:d,foregroundArcPath:d,percentage:r}},j=({radius:t=15,colors:o=[],data:c=[],chartBorder:n=!1})=>{var N;const[r,g]=A.useState(null),[h,p]=A.useState({x:0,y:0}),[d,f]=A.useState(null),u=c.map(e=>{let a;if(typeof e.value=="string"){const i=parseFloat(e.value);a=isNaN(i)?0:i}else a=e.value;return{...e,value:a,labelValue:Number.isInteger(a)?e.value:a.toFixed(2)}}),M=u.reduce((e,a)=>e+a.value,0),W=u.filter(e=>e.value>0).length===1;let m=-Math.PI/2;const s=2*(t+5),D=n&&u.length>0?[{label:((N=u[0])==null?void 0:N.label)||"",value:u.slice(1).reduce((e,a)=>e+a.value,0)},...u.slice(1)]:u,P=e=>{const{clientX:a,clientY:i}=e;p({x:a,y:i})},$=(e,a,i,v=!1)=>{v?f(i):g({label:e.label,value:e.value,color:a})},y=()=>{g(null),f(null)},B=e=>({transform:d===e?"scale(1.1)":"scale(1)",transition:"transform 0.3s ease, opacity 0.3s ease",opacity:d===null||d===e?1:.5}),C=u.map((e,a)=>l.jsxs("div",{className:"ff-pie-chart-legend-item",onMouseEnter:()=>$(e,o[a%o.length]||"",a,!0),onMouseLeave:y,children:[l.jsx(k,{as:"div",fontSize:24,fontWeight:"semi-bold",lineHeight:"36px",color:o[a%o.length]||"",children:e.labelValue}),l.jsx(k,{as:"div",fontSize:10,fontWeight:"regular",lineHeight:"18px",className:"ff-pie-chart-legend-value",children:e.label})]},e.label));if(M===0){const e=`M ${t} 0 A ${t} ${t} 0 1 1 ${-t} 0 A ${t} ${t} 0 1 1 ${t} 0 Z`;return l.jsxs("div",{className:"ff-pie-chart-container",onMouseMove:P,children:[l.jsx("div",{className:`${n?"ff-pie-chart-border":""}`,style:{width:s,height:s},children:l.jsx("svg",{width:s,height:s,viewBox:`0 0 ${s} ${s}`,children:l.jsx("g",{transform:`translate(${t+5}, ${t+5})`,children:l.jsx("path",{d:e,fill:"var(--tooltip-bg-color)",stroke:"white",strokeWidth:.5,opacity:.2})})})}),r&&l.jsxs("div",{className:"ff-pie-chart-tooltip",style:{top:h.y,left:h.x},children:[r.label," : ",r.value]}),l.jsx("div",{className:"ff-pie-chart-legend",children:C})]})}return l.jsxs("div",{className:"ff-pie-chart-container",onMouseMove:P,children:[l.jsx("div",{className:`${n?"ff-pie-chart-border":""}`,style:{width:s,height:s},children:l.jsx("svg",{width:s,height:s,viewBox:`0 0 ${s} ${s}`,children:l.jsx("g",{transform:`translate(${t+5}, ${t+5})`,children:D.map((e,a)=>{if(e.value>0){const i=o[a%o.length]||"",{endAngle:v,backgroundArcPath:S}=L(e.value,M,m,t);return m=v,W?l.jsxs("g",{onMouseEnter:()=>$(e,i,a),onMouseLeave:y,style:B(a),children:[l.jsx("path",{d:S,fill:i,stroke:"white",strokeWidth:.5}),l.jsx("line",{x1:0,y1:t,x2:0,y2:0,stroke:"white",strokeWidth:2})]},e.label):l.jsxs("g",{children:[l.jsx("path",{d:S,fill:i,stroke:"white",strokeWidth:.5,onMouseEnter:()=>$(e,i,a),onMouseLeave:y,style:B(a)}),l.jsx("text",{x:t/2*Math.cos((m+v)/2),y:t/2*Math.sin((m+v)/2),fill:"white",textAnchor:"middle",dominantBaseline:"central"})]},e.label)}return null})})})}),r&&l.jsxs("div",{className:"ff-pie-chart-tooltip",style:{top:h.y,left:h.x},children:[r.label," : ",r.value]}),l.jsx("div",{className:"ff-pie-chart-legend",children:C})]})};try{j.displayName="PieChart",j.__docgenInfo={description:"",displayName:"PieChart",props:{radius:{defaultValue:{value:"15"},description:"",name:"radius",required:!1,type:{name:"number"}},data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"{ label: string; value: string | number; }[]"}},colors:{defaultValue:{value:"[]"},description:"",name:"colors",required:!1,type:{name:"string[]"}},chartBorder:{defaultValue:{value:"false"},description:"",name:"chartBorder",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Components/PieChart",component:j,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{radius:{control:"number"},colors:{control:"object"},data:{control:"object"},chartBorder:{control:"boolean"}}},b={args:{radius:55,colors:["#71347B","#4C90FF","#F8A509"],data:[{label:"SuperAdmin",value:2},{label:"Admin",value:6},{label:"Users",value:2}],chartBorder:!1}},x={args:{radius:55,colors:["#b6b6b6","#08CB84","#BE3131"],data:[{label:"All User",value:0},{label:"Active",value:8},{label:"Pending",value:2}],chartBorder:!0}};var w,_,E;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    radius: 55,
    colors: ['#71347B', '#4C90FF', '#F8A509'],
    data: [{
      label: 'SuperAdmin',
      value: 2
    }, {
      label: 'Admin',
      value: 6
    }, {
      label: 'Users',
      value: 2
    }],
    chartBorder: false
  }
}`,...(E=(_=b.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,I,V;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    radius: 55,
    colors: ['#b6b6b6', '#08CB84', '#BE3131'],
    data: [{
      label: 'All User',
      value: 0
    }, {
      label: 'Active',
      value: 8
    }, {
      label: 'Pending',
      value: 2
    }],
    chartBorder: true
  }
}`,...(V=(I=x.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const X=["PieChartDashBoard","PieChartDashBoardWithBorder"];export{b as PieChartDashBoard,x as PieChartDashBoardWithBorder,X as __namedExportsOrder,H as default};
