import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as _}from"./index-DJO9vBfz.js";import{T as L}from"./Typography-DdMJCn-_.js";const w=(u,o,s,p,g)=>{const b=u+s*Math.cos(p),M=o+s*Math.sin(p),S=u+s*Math.cos(g),f=o+s*Math.sin(g),V=g-p>Math.PI?1:0;return`M ${b} ${M} A ${s} ${s} 0 ${V} 1 ${S} ${f}`},B=({radius:u,lineWidth:o,lineCap:s,barValues:p,labelHeading:g,legendType:b="numberLegend",isLegendDetails:M=!0,chartToLegendGap:S="16px",legendGap:f="8px",labelFontSize:V=12,subLabelFontSize:T=8,gapBetweenArch:m=10,capsuleStyle:le={padding:"4px"}})=>{var R;const[t,j]=_.useState({visible:!1,x:0,y:0,content:""}),[A,C]=_.useState(null),d=p.map(e=>{var r;if(typeof e.value=="string"){const n=parseFloat(e.value),l=isNaN(n)?0:n;return{...e,normalizedValue:l,labelValue:Number.isInteger(l)?l:l.toFixed(2)}}return{...e,normalizedValue:e.value,labelValue:Number.isInteger(e.value)?e.value:(r=e.value)==null?void 0:r.toFixed(2)}}),$=d.reduce((e,r)=>e+r.normalizedValue,0),G=u,q=o+m,c=2*(G+q*(d.length-1)+o),oe=[...d].reverse(),te=g.trim().split(" "),se=(e,r)=>{switch(r){case"numberLegend":return a.jsx("div",{className:"ff-legend-container ff-number-legend",style:{gap:f},children:e.map((n,l)=>a.jsxs("div",{className:"ff-legend-item",onMouseEnter:()=>C(n.barLabel||n.label),onMouseLeave:()=>C(null),children:[a.jsx(L,{fontSize:20,fontWeight:"semi-bold",className:"ff-legend-value",color:n.arcColor,children:n.key.padStart(2,"0")}),a.jsx(L,{fontSize:10,className:"ff-legend-key",color:"var(--text-color)",children:n.label})]},l))});case"pillLegend":return a.jsx("div",{className:"ff-legend-container ff-pill-legend",style:{gap:f},children:e.slice().reverse().map((n,l)=>a.jsxs("div",{className:"ff-legend-item",onMouseEnter:()=>C(n.barLabel||n.label),onMouseLeave:()=>C(null),children:[a.jsx("span",{className:"ff-legend-capsule",style:{backgroundColor:n.arcColor},children:a.jsx(L,{fontSize:10,color:"var(--tooltip-text-color)",style:le,children:n.value})}),a.jsx(L,{className:"ff-legend-key",children:n.label})]},l))});default:return null}},E=(e,r)=>{const{clientX:n,clientY:l}=e,i=e.currentTarget.getBoundingClientRect();j({visible:!0,x:n-i.left,y:l-i.top,content:r})},P=e=>{const{clientX:r,clientY:n}=e,l=e.currentTarget.getBoundingClientRect();j(i=>({...i,x:r-l.left,y:n-l.top}))},D=()=>{j({visible:!1,x:0,y:0,content:""})},I=(e,r)=>e.length>r?e.slice(0,r)+"...":e,ce=()=>{var n;if(!t.visible)return"";const e=(n=t.content.split(":")[0])==null?void 0:n.trim();if(e===void 0)return"";const r=d.find(l=>l.barLabel===e);return(r==null?void 0:r.arcColor)||""};return a.jsxs("div",{className:`ff-multi-radial-chart-container ${b==="numberLegend"?"ff-multi-radial-chart-number":"ff-multi-radial-chart-pill"}`,style:{gap:S},children:[a.jsxs("div",{className:"relative",style:{width:c,height:c},children:[a.jsx("svg",{width:c,height:c,viewBox:`0 0 ${c} ${c}`,className:"absolute top-0 left-0",children:a.jsxs("g",{transform:`translate(${c/2+1}, ${c/2+1})`,children:[oe.map((e,r)=>{const n=d.length-1-r,i=e.normalizedValue/$*2*Math.PI;let z=-Math.PI/2,W=z+i;e.normalizedValue===$&&(z=0,W=2*Math.PI);const F=G+q*n,H=w(0,0,F,0,2*Math.PI),v={opacity:A!==null?e.barLabel===A?1:.2:1,transition:"opacity 0.3s ease"};if(e.normalizedValue===0){const N=F*Math.cos(-Math.PI/2),ie=F*Math.sin(-Math.PI/2);return a.jsxs("g",{children:[a.jsx("path",{d:H,fill:"none",stroke:e.arcBackgroundColor,strokeWidth:o,className:"transition-all duration-300",style:v}),a.jsx("circle",{cx:N,cy:ie,r:o+1,fill:e.arcColor,onMouseEnter:ue=>E(ue,`${e.barLabel||"Data"}: ${e.value}`),onMouseMove:P,onMouseLeave:D,style:v})]},n)}const de=w(0,0,F,z,W);return a.jsxs("g",{children:[a.jsx("path",{d:H,fill:"none",stroke:e.arcBackgroundColor,strokeWidth:o,className:"transition-all duration-300",style:v}),a.jsx("path",{d:de,fill:"none",stroke:e.arcColor,strokeWidth:o,strokeLinecap:s==="square"?"butt":"round",onMouseEnter:N=>E(N,`${e.barLabel||"Data"}: ${e.value}`),onMouseMove:P,onMouseLeave:D,style:{pointerEvents:"stroke",...v}})]},n)}),a.jsx("text",{x:"0",y:`-${o+m+2}`,fill:ce(),textAnchor:"middle",dominantBaseline:"central",children:t.visible?a.jsxs(a.Fragment,{children:[a.jsx("tspan",{x:"0",dy:`${o+m-5}`,className:"ff-center-text-tooltip",children:I(((R=t.content.split(":")[1])==null?void 0:R.trim())||"",5)}),a.jsx("tspan",{x:"0",dy:`${o+m+5}`,className:"ff-center-text-tooltip",children:I(t.content.split(":")[0]??"",8)})]}):a.jsx(a.Fragment,{children:te.map((e,r)=>{if(r===0){const[n,...l]=e.split(" ");return a.jsxs("tspan",{children:[a.jsx("tspan",{x:"0",dy:"0",style:{fontSize:`${V}px`},className:"ff-center-first-text",children:n}),a.jsx("tspan",{x:"0",dy:18,style:{fontSize:`${T}px`},className:"ff-center-text",children:l.join(" ")})]},r)}return a.jsx("tspan",{x:"0",dy:r===0?0:18,className:"ff-center-text",style:{fontSize:`${T}px`},children:e},r)})})})]})}),t.visible&&a.jsx("div",{className:"ff-multi-radial-tooltip",style:{top:t.y+10,left:t.x+100,zIndex:1e3},children:t.content})]}),M&&se(d.map(e=>{var r;return{...e,label:e==null?void 0:e.barLabel,key:(r=e.labelValue)==null?void 0:r.toString()}}),b)]})};try{B.displayName="MultiRadialChart",B.__docgenInfo={description:"",displayName:"MultiRadialChart",props:{radius:{defaultValue:null,description:"",name:"radius",required:!0,type:{name:"number"}},lineWidth:{defaultValue:null,description:"",name:"lineWidth",required:!0,type:{name:"number"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!0,type:{name:"number"}},labelHeading:{defaultValue:null,description:"",name:"labelHeading",required:!0,type:{name:"string"}},lineCap:{defaultValue:null,description:"",name:"lineCap",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"round"'}]}},barValues:{defaultValue:null,description:"",name:"barValues",required:!0,type:{name:"BarValue[]"}},legendType:{defaultValue:{value:"numberLegend"},description:"",name:"legendType",required:!1,type:{name:"enum",value:[{value:'"numberLegend"'},{value:'"pillLegend"'}]}},isLegendDetails:{defaultValue:{value:"true"},description:"",name:"isLegendDetails",required:!1,type:{name:"boolean"}},labelFontSize:{defaultValue:{value:"12"},description:"",name:"labelFontSize",required:!1,type:{name:"number"}},subLabelFontSize:{defaultValue:{value:"8"},description:"",name:"subLabelFontSize",required:!1,type:{name:"number"}},gapAngle:{defaultValue:null,description:"",name:"gapAngle",required:!1,type:{name:"number"}},chartToLegendGap:{defaultValue:{value:"16px"},description:"",name:"chartToLegendGap",required:!1,type:{name:"string"}},legendGap:{defaultValue:{value:"8px"},description:"",name:"legendGap",required:!1,type:{name:"string"}},gapBetweenArch:{defaultValue:{value:"10"},description:"",name:"gapBetweenArch",required:!1,type:{name:"number"}},capsuleStyle:{defaultValue:{value:"{ padding: '4px' }"},description:"",name:"capsuleStyle",required:!1,type:{name:"object"}}}}}catch{}const me={title:"Components/MultiRadialChart",component:B,parameters:{layout:"centered"},tags:["autodocs"]},x={args:{radius:50,lineWidth:4,labelHeading:"    Memory",fontSize:16,barValues:[{value:10,arcColor:"#A83FC4",arcBackgroundColor:"#F0F0F0",barLabel:"Available"},{value:20,arcColor:"#10B981",arcBackgroundColor:"#F0F0F0",barLabel:"Assigned"},{value:30,arcColor:"#F59E0B",arcBackgroundColor:"#F0F0F0",barLabel:"Used"}],lineCap:"round",legendType:"numberLegend",isLegendDetails:!0,chartToLegendGap:"16px",legendGap:"15px"}},h={args:{radius:50,lineWidth:4,labelHeading:"10 Memory Usage",fontSize:16,barValues:[{value:10,arcColor:"#A83FC4",arcBackgroundColor:"#F0F0F0",barLabel:"Available"},{value:20,arcColor:"#E2750F",arcBackgroundColor:"#F0F0F0",barLabel:"Assigned"},{value:30,arcColor:"#9C1732",arcBackgroundColor:"#F0F0F0",barLabel:"Used"}],lineCap:"square",legendType:"numberLegend",isLegendDetails:!0,chartToLegendGap:"16px",legendGap:"15px"}},y={args:{radius:50,lineWidth:4,labelHeading:"00 module",barValues:[{value:10,arcColor:"#A83FC4",arcBackgroundColor:"#F0F0F0",barLabel:"Available"},{value:20,arcColor:"#E2750F",arcBackgroundColor:"#F0F0F0",barLabel:"Warning"},{value:30,arcColor:"#9C1732",arcBackgroundColor:"#F0F0F0",barLabel:"Failed"},{value:5,arcColor:" #179C5F",arcBackgroundColor:"#F0F0F0",barLabel:"Passed"}],lineCap:"round",legendType:"pillLegend",isLegendDetails:!0,labelFontSize:12,subLabelFontSize:8,chartToLegendGap:"16px",legendGap:"15px"}},k={render:()=>a.jsx(B,{barValues:[{arcBackgroundColor:"var(--ff-progress-bar-bg-color)",arcColor:"var(--ff-card-skipped-status-bg-color)",barLabel:"Skipped",value:0},{arcBackgroundColor:"var(--ff-progress-bar-bg-color)",arcColor:"var(--ff-card-warning-status-bg-color)",barLabel:"Warning",value:0},{arcBackgroundColor:"var(--ff-progress-bar-bg-color)",arcColor:"var(--ff-card-failed-status-bg-color)",barLabel:"Failed",value:0},{arcBackgroundColor:"var(--ff-progress-bar-bg-color)",arcColor:"var(--ff-card-passed-status-bg-color)",barLabel:"Passed",value:0}],fontSize:12,isLegendDetails:!0,labelHeading:"00 Module",legendType:"pillLegend",lineCap:"round",subLabelFontSize:12,lineWidth:3,radius:35,chartToLegendGap:"16px",legendGap:"8px",gapBetweenArch:6,capsuleStyle:{padding:"10px"}})};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    radius: 50,
    lineWidth: 4,
    labelHeading: '    Memory',
    fontSize: 16,
    barValues: [{
      value: 10,
      arcColor: '#A83FC4',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Available'
    }, {
      value: 20,
      arcColor: '#10B981',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Assigned'
    }, {
      value: 30,
      arcColor: '#F59E0B',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Used'
    }],
    lineCap: 'round',
    legendType: 'numberLegend',
    isLegendDetails: true,
    chartToLegendGap: '16px',
    legendGap: '15px'
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var O,J,K;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    radius: 50,
    lineWidth: 4,
    labelHeading: '10 Memory Usage',
    fontSize: 16,
    barValues: [{
      value: 10,
      arcColor: '#A83FC4',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Available'
    }, {
      value: 20,
      arcColor: '#E2750F',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Assigned'
    }, {
      value: 30,
      arcColor: '#9C1732',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Used'
    }],
    lineCap: 'square',
    legendType: 'numberLegend',
    isLegendDetails: true,
    chartToLegendGap: '16px',
    legendGap: '15px'
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    radius: 50,
    lineWidth: 4,
    labelHeading: '00 module',
    barValues: [{
      value: 10,
      arcColor: '#A83FC4',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Available'
    }, {
      value: 20,
      arcColor: '#E2750F',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Warning'
    }, {
      value: 30,
      arcColor: '#9C1732',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Failed'
    }, {
      value: 5,
      arcColor: ' #179C5F',
      arcBackgroundColor: '#F0F0F0',
      barLabel: 'Passed'
    }],
    lineCap: 'round',
    legendType: 'pillLegend',
    isLegendDetails: true,
    labelFontSize: 12,
    subLabelFontSize: 8,
    chartToLegendGap: '16px',
    legendGap: '15px'
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,ne;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    return <MultiRadialChart barValues={[{
      arcBackgroundColor: 'var(--ff-progress-bar-bg-color)',
      arcColor: 'var(--ff-card-skipped-status-bg-color)',
      barLabel: 'Skipped',
      value: 0
    }, {
      arcBackgroundColor: 'var(--ff-progress-bar-bg-color)',
      arcColor: 'var(--ff-card-warning-status-bg-color)',
      barLabel: 'Warning',
      value: 0
    }, {
      arcBackgroundColor: 'var(--ff-progress-bar-bg-color)',
      arcColor: 'var(--ff-card-failed-status-bg-color)',
      barLabel: 'Failed',
      value: 0
    }, {
      arcBackgroundColor: 'var(--ff-progress-bar-bg-color)',
      arcColor: 'var(--ff-card-passed-status-bg-color)',
      barLabel: 'Passed',
      value: 0
    }]} fontSize={12} isLegendDetails labelHeading="00 Module" legendType="pillLegend" lineCap="round" subLabelFontSize={12} lineWidth={3} radius={35} chartToLegendGap="16px" legendGap="8px" gapBetweenArch={6} capsuleStyle={{
      padding: '10px'
    }} />;
  }
}`,...(ne=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Ce=["Default","numberLegend","PillLegend","ExecutionCompare"];export{x as Default,k as ExecutionCompare,y as PillLegend,Ce as __namedExportsOrder,me as default,h as numberLegend};
