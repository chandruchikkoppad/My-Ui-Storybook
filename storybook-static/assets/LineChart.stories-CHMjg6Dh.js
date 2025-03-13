import{j as r}from"./jsx-runtime-SKoiH9zj.js";import{r as he}from"./index-DJO9vBfz.js";import{T as Q}from"./Typography-DdMJCn-_.js";import{Q as xe,K as pe,O as ye}from"./regex-CmAMYcQS.js";const b=({data:s=[],width:A,height:N,lineChartWidth:B,yAxisLabel:W,xAxisLabel:$,yAxisValueColor:O,xAxisColor:q,yAxisColor:S,yAxisLabelColor:P,textSize:V,fontWeight:_,numberSize:p,chartName:T,shouldCenterSinglePoint:D,xAxisLabelGap:M=16})=>{var z,G,Y,I,K,R;const m=A-80,i=N-40*2;if(!(s&&s.length>0&&(s==null?void 0:s.some(e=>{var t;return Array.isArray(e==null?void 0:e.data)&&((t=e==null?void 0:e.data)==null?void 0:t.length)>0})))){const e=[];for(let a=6;a>=0;a--){const n=new Date;n.setDate(n.getDate()-a);const u=n==null?void 0:n.toLocaleDateString("en-US",{day:"numeric",month:"short"});e.push(u)}const t=1024,o=6,l=7;return r.jsxs("div",{className:"ff-line-chart-text",style:{width:A+20+M,gap:M},children:[r.jsx("div",{className:"ff-line-chart-yAxisLabel-warpper",style:{height:N},children:r.jsx(Q,{className:"ff-line-chart-yAxisLabel",fontSize:V,fontWeight:"semi-bold",children:W})}),r.jsx("div",{className:"ff-line-chart-svg",children:r.jsx("svg",{height:N,width:A,className:"ff-line-chart-svg",children:r.jsxs("g",{transform:"translate(40, 40)",children:[r.jsx("line",{x1:0,y1:i,x2:m,y2:i,stroke:q,strokeWidth:1}),r.jsx("text",{x:m/2.1,y:i+40/1.2,textAnchor:"middle",fill:P,className:"ff-line-chart-x-axis-label",style:{fontSize:V,fontWeight:_},children:$}),e.map((a,n)=>{const u=m/(l-1);return r.jsx("text",{x:n*u,y:i+15,textAnchor:n===0?"start":n===l-1?"end":"middle",fill:S,className:"ff--line-chart-x-line-data",style:{fontSize:p},children:a},a)}),Array.from({length:o}).map((a,n)=>{const u=n*t/(o-1),d=u/1024,C=i-u*i/t;return r.jsx("text",{x:-10,y:C,textAnchor:"end",fill:O,className:"ff-line-chart-y-axis-text",style:{fontSize:p},children:d==null?void 0:d.toFixed(1)},`y-${n}`)})]})})})]})}const ne=(e,t=2)=>{let o="";if(typeof e=="string"){const n=e.match(pe),u=e.match(ye);n&&(e=parseFloat(n[0])),u&&(o=u[0])}const l=Math.pow(10,t);return`${Math.ceil(e*l)/l} ${o}`.trim()};function y(e){if(!isNaN(e))return parseFloat(e);const t=xe,o=e.match(t);if(!o)throw new Error("Invalid input format. Use '<value> <unit>' format (e.g., '10.9580078125 KB') or just a number.");const l=parseFloat(o[1]);switch(o[2]?o[2].toUpperCase():null){case"GB":return parseFloat((l*1024).toFixed(2));case"MB":return parseFloat(l.toFixed(2));case"KB":return parseFloat((l/1024).toFixed(2));default:throw new Error("Invalid unit. Supported units are GB, MB, and KB.")}}const X=((Y=(G=(z=s==null?void 0:s[0])==null?void 0:z.data)==null?void 0:G[0])==null?void 0:Y.hasOwnProperty("date"))&&((R=(K=(I=s==null?void 0:s[0])==null?void 0:I.data)==null?void 0:K[0])==null?void 0:R.hasOwnProperty("totalMemory")),c="date",x=X?"totalMemory":"value",g=e=>{var l,a;const t=(a=(l=s==null?void 0:s[0])==null?void 0:l.data)==null?void 0:a.length;if(t===1)return D?m/2:m;const o=s[0].data.findIndex(n=>n[c]===e);return o===-1?0:o/(t-1)*m},j=Math.max(...s==null?void 0:s.flatMap(e=>{var t;return(t=e==null?void 0:e.data)==null?void 0:t.map(o=>y(o[x]))}),5),v=e=>{if(T==="memory"){const t=Math.max(...s==null?void 0:s.flatMap(l=>{var a;return(a=l==null?void 0:l.data)==null?void 0:a.map(n=>y(n[x]))})),o=t>1024?t:1024;return i-e*i/o}else return i-e*i/(j===0?1024:j)},ie=e=>e.every(t=>y(t[x])===0),ce=e=>{if((e==null?void 0:e.length)===1){const t=e==null?void 0:e[0],o=g(t[c]),l=v(y(t[x]));return`M 0 ${v(0)} L ${o} ${l}`}return e==null?void 0:e.reduce((t,o,l)=>{const a=g(o[c]),n=v(y(o[x]));if(l===0)return`M ${a} ${n}`;const u=e[l-1],d=u?g(u[c]):0,C=u?v(y(u[x])):0;return`${t} C ${d+(a-d)/2} ${C}, ${a-(a-d)/2} ${n}, ${a} ${n}`},"")},h=s[0].data,L=7,ue=()=>{if(h.length===1){const e=h==null?void 0:h[0];return r.jsx("text",{x:D?m/2:m,y:i+15,textAnchor:D?"middle":"end",fill:S,className:"ff--line-chart-x-line-data",style:{fontSize:p},children:e[c]!=null?String(e[c]):""},String(e[c]))}else{if(h.length<7)return h.map(e=>r.jsx("text",{x:g(e[c]),y:i+15,textAnchor:"middle",fill:S,className:"ff--line-chart-x-line-data",style:{fontSize:p},children:e[c]!=null?String(e[c]):""},String(e[c])));{const e=m/(L-1);return Array.from({length:L}).map((t,o)=>{const l=Math.floor(o*((h==null?void 0:h.length)-1)/(L-1)),a=h[l];return r.jsx("text",{x:o*e,y:i+15,textAnchor:o===0?"start":o===L-1?"end":"middle",fill:S,className:"ff--line-chart-x-line-data",style:{fontSize:p},children:(a==null?void 0:a[c])!=null?String(a==null?void 0:a[c]):""},String(a==null?void 0:a[c]))})}}},de=()=>{if(T==="memory"){const t=Math.max(j,1024);return Array.from({length:6}).map((o,l)=>{const a=l*t/5,n=a/1024;return r.jsx("text",{x:-10,y:v(a),textAnchor:"end",fill:O,className:"ff-line-chart-y-axis-text",style:{fontSize:p},children:n.toFixed(1)},`y-${l}`)})}else return Array.from({length:6}).map((t,o)=>{const l=o*j/5;return r.jsx("text",{x:-10,y:v(l),textAnchor:"end",fill:O,className:"ff-line-chart-y-axis-text",style:{fontSize:p},children:l.toFixed(0)},`y-${o}`)})},[f,E]=he.useState({cursorX:null,hoverValues:{},dotPositions:{},tooltip:{visible:!1,left:0,top:0},currentXValue:null}),me=e=>{const t=e.currentTarget.getBoundingClientRect(),o=e.clientX-t.left-40;let l={hoverValues:{},dotPositions:{}},a=null;s.forEach((n,u)=>{const d=n.data.reduce((C,U)=>{const H=Math.abs(o-g(U[c]));return H<C.distance?{point:U,distance:H}:C},{point:null,distance:1/0}).point;d&&(a=d[c],l.hoverValues[u]=ne(d[x]),l.dotPositions[u]={x:g(d[c]),y:v(y(d[x]))})}),E({cursorX:o,hoverValues:l.hoverValues,dotPositions:l.dotPositions,currentXValue:a,tooltip:a?{visible:!0,left:e.clientX+10,top:e.clientY-20}:{visible:!1,left:0,top:0}})},fe=()=>E({cursorX:null,hoverValues:{},dotPositions:{},tooltip:{visible:!1,left:0,top:0},currentXValue:null});return r.jsxs("div",{className:"ff-line-chart-text",style:{width:A+20+M,gap:M},children:[r.jsx("div",{className:"ff-line-chart-yAxisLabel-warpper",style:{height:N},children:r.jsx(Q,{className:"ff-line-chart-yAxisLabel",fontSize:V,fontWeight:"semi-bold",children:W})}),r.jsxs("div",{className:"ff-line-chart-svg",children:[r.jsx("svg",{height:N,width:A,onMouseMove:me,onMouseLeave:fe,className:"ff-line-chart-svg",children:r.jsxs("g",{transform:"translate(40, 40)",children:[r.jsx("line",{x1:0,y1:0,x2:0,y2:i,strokeWidth:2}),r.jsx("line",{x1:0,y1:i,x2:m,y2:i,stroke:q,strokeWidth:1}),r.jsx("text",{x:m/2.1,y:i+40/1.2,textAnchor:"middle",fill:P,className:"ff-line-chart-x-axis-label",style:{fontSize:V,fontWeight:_},children:$}),s.map((e,t)=>e.show!==!1?r.jsxs("g",{children:[r.jsx("path",{d:ce(e.data),fill:"none",stroke:e.color,strokeWidth:B,opacity:ie(e.data)?.5:1}),f.dotPositions[t]&&r.jsxs(r.Fragment,{children:[r.jsx("line",{x1:f.dotPositions[t].x,y1:0,x2:f.dotPositions[t].x,y2:i,stroke:"gray",strokeWidth:.5,strokeDasharray:"4"}),r.jsx("circle",{cx:f.dotPositions[t].x,cy:f.dotPositions[t].y,r:5,fill:"white",stroke:e.color,strokeWidth:B,style:{transition:"cx 0.1s, cy 0.1s"}}),r.jsx("line",{x1:0,y1:f.dotPositions[t].y,x2:m,y2:f.dotPositions[t].y,stroke:"gray",strokeWidth:.5,strokeDasharray:"4"})]})]},t):null),ue(),de()]})}),f.tooltip.visible&&r.jsxs("div",{className:"ff-line-chart-tooltip",style:{left:f.tooltip.left,top:f.tooltip.top},children:[r.jsx("div",{className:"ff-line-chart-date",children:f.currentXValue}),Object.entries(f.hoverValues).map(([e,t])=>{var o,l,a,n;return((o=s[Number(e)])==null?void 0:o.show)!==!1&&r.jsxs("div",{className:"ff-line-chart-inner-tooltip",children:[((l=s[Number(e)])==null?void 0:l.name)!=="default"&&r.jsx("div",{className:"ff-line-chart-status-dot",style:{backgroundColor:(a=s[Number(e)])==null?void 0:a.color}}),(n=s[Number(e)])==null?void 0:n.name,": ",t]},e)})]})]})]})};try{b.displayName="LineChart",b.__docgenInfo={description:"",displayName:"LineChart",props:{data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"any[]"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},axisColor:{defaultValue:null,description:"",name:"axisColor",required:!0,type:{name:"string"}},isStatusVariant:{defaultValue:null,description:"",name:"isStatusVariant",required:!1,type:{name:"boolean"}},lineChartWidth:{defaultValue:null,description:"",name:"lineChartWidth",required:!1,type:{name:"number"}},yAxisLabel:{defaultValue:null,description:"",name:"yAxisLabel",required:!1,type:{name:"string"}},xAxisLabel:{defaultValue:null,description:"",name:"xAxisLabel",required:!1,type:{name:"string"}},yAxisValueColor:{defaultValue:null,description:"",name:"yAxisValueColor",required:!1,type:{name:"string"}},xAxisColor:{defaultValue:null,description:"",name:"xAxisColor",required:!1,type:{name:"string"}},yAxisColor:{defaultValue:null,description:"",name:"yAxisColor",required:!1,type:{name:"string"}},yAxisLabelColor:{defaultValue:null,description:"",name:"yAxisLabelColor",required:!1,type:{name:"string"}},textSize:{defaultValue:null,description:"",name:"textSize",required:!1,type:{name:"string | number"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string | number"}},numberSize:{defaultValue:null,description:"",name:"numberSize",required:!1,type:{name:"string | number"}},proportionalSpacing:{defaultValue:null,description:"",name:"proportionalSpacing",required:!1,type:{name:"boolean"}},shouldCenterSinglePoint:{defaultValue:null,description:"",name:"shouldCenterSinglePoint",required:!1,type:{name:"boolean"}},chartName:{defaultValue:null,description:"",name:"chartName",required:!1,type:{name:"string"}},xAxisLabelGap:{defaultValue:{value:"16"},description:"",name:"xAxisLabelGap",required:!1,type:{name:"number"}}}}}catch{}const Se={title:"Components/LineChart",component:b,parameters:{layout:"centered"}},k={args:{data:[{color:"#4C90FF",name:"default",data:[{date:"25 Oct",totalMemory:"1 GB"},{date:"29 Oct",totalMemory:"200 KB"},{date:"30 Oct",totalMemory:"40 MB"},{date:"3 Nov",totalMemory:"20 MB"},{date:"23 Nov",totalMemory:"90 MB"}]}],width:1010,height:232,axisColor:"#000000",lineChartWidth:3,yAxisLabel:"Total Memory (GB)",yAxisValueColor:"#252C37",xAxisColor:"#D9D9D9",yAxisColor:"#252C37",numberSize:"10px",proportionalSpacing:!1,chartName:"memory",shouldCenterSinglePoint:!1},render:s=>r.jsx("div",{className:"linechart-container",children:r.jsx(b,{...s})})},F={args:{data:[{color:"#3F5AC4",name:"Flaky",show:!0,data:[{date:"1 oct",value:10},{date:"2 oct",value:0},{date:"3 oct",value:0},{date:"4 oct",value:0},{date:"5 oct",value:0},{date:"6 oct",value:0},{date:"7 oct",value:0}]}],width:700,height:232,axisColor:"#000000",lineChartWidth:2,yAxisLabel:"Number Of Scripts",xAxisLabel:"Number Of Days",yAxisValueColor:"#252C37",xAxisColor:"#D9D9D9",yAxisColor:"#252C37",yAxisLabelColor:"#252C37",textSize:"12px",proportionalSpacing:!1,chartName:"scripts"},render:s=>r.jsx("div",{className:"linechart-container",children:r.jsx(b,{...s})})},w={args:{data:[{color:"#179C5F",name:"Success",show:!0,data:[{date:"1 oct",value:20},{date:"2 oct",value:10},{date:"3 oct",value:30},{date:"4 oct",value:60},{date:"5 oct",value:90},{date:"6 oct",value:10},{date:"7 oct",value:12}]},{color:"#9C1732",name:"Failed",show:!0,data:[{date:"1 oct",value:50},{date:"2 oct",value:0},{date:"3 oct",value:40},{date:"4 oct",value:20},{date:"5 oct",value:90},{date:"6 oct",value:70},{date:"7 oct",value:0}]},{color:"#E2750F",name:"Warning",show:!0,data:[{date:"1 oct",value:10},{date:"2 oct",value:20},{date:"3 oct",value:0},{date:"4 oct",value:20},{date:"5 oct",value:10},{date:"6 oct",value:10},{date:"7 oct",value:10}]},{color:"#A83FC4",name:"Skipped",show:!0,data:[{date:"1 oct",value:0},{date:"2 oct",value:20},{date:"3 oct",value:10},{date:"4 oct",value:20},{date:"5 oct",value:10},{date:"6 oct",value:30},{date:"7 oct",value:0}]},{color:"#3F5AC4",name:"Flaky",show:!0,data:[{date:"1 oct",value:50},{date:"2 oct",value:40},{date:"3 oct",value:30},{date:"4 oct",value:20},{date:"5 oct",value:0},{date:"6 oct",value:40},{date:"7 oct",value:20}]}],width:700,height:232,axisColor:"#000000",lineChartWidth:2,yAxisLabel:"Number Of Defects",xAxisLabel:"Number Of Days",yAxisValueColor:"#252C37",xAxisColor:"#D9D9D9",yAxisColor:"#252C37",yAxisLabelColor:"#252C37",textSize:"12px",fontWeight:"semi-bold",proportionalSpacing:!1,chartName:"defects",xAxisLabelGap:20},render:s=>r.jsx("div",{className:"linechart-container",children:r.jsx(b,{...s})})};var Z,J,ee;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data: [{
      color: '#4C90FF',
      name: 'default',
      data: [{
        date: '25 Oct',
        totalMemory: '1 GB'
      }, {
        date: '29 Oct',
        totalMemory: '200 KB'
      }, {
        date: '30 Oct',
        totalMemory: '40 MB'
      }, {
        date: '3 Nov',
        totalMemory: '20 MB'
      }, {
        date: '23 Nov',
        totalMemory: '90 MB'
      }]
    }],
    width: 1010,
    height: 232,
    axisColor: '#000000',
    lineChartWidth: 3,
    yAxisLabel: 'Total Memory (GB)',
    yAxisValueColor: '#252C37',
    xAxisColor: '#D9D9D9',
    yAxisColor: '#252C37',
    numberSize: '10px',
    proportionalSpacing: false,
    chartName: 'memory',
    shouldCenterSinglePoint: false
  },
  render: args => <div className="linechart-container">\r
      <LineChart {...args} />\r
    </div>
}`,...(ee=(J=k.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var te,ae,re;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    data: [{
      color: '#3F5AC4',
      name: 'Flaky',
      show: true,
      data: [{
        date: '1 oct',
        value: 10
      }, {
        date: '2 oct',
        value: 0
      }, {
        date: '3 oct',
        value: 0
      }, {
        date: '4 oct',
        value: 0
      }, {
        date: '5 oct',
        value: 0
      }, {
        date: '6 oct',
        value: 0
      }, {
        date: '7 oct',
        value: 0
      }]
    }],
    width: 700,
    height: 232,
    axisColor: '#000000',
    lineChartWidth: 2,
    yAxisLabel: 'Number Of Scripts',
    xAxisLabel: 'Number Of Days',
    yAxisValueColor: '#252C37',
    xAxisColor: '#D9D9D9',
    yAxisColor: '#252C37',
    yAxisLabelColor: '#252C37',
    textSize: '12px',
    proportionalSpacing: false,
    chartName: 'scripts'
  },
  render: args => <div className="linechart-container">\r
      <LineChart {...args} />\r
    </div>
}`,...(re=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,le,se;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    data: [{
      color: '#179C5F',
      name: 'Success',
      show: true,
      data: [{
        date: '1 oct',
        value: 20
      }, {
        date: '2 oct',
        value: 10
      }, {
        date: '3 oct',
        value: 30
      }, {
        date: '4 oct',
        value: 60
      }, {
        date: '5 oct',
        value: 90
      }, {
        date: '6 oct',
        value: 10
      }, {
        date: '7 oct',
        value: 12
      }]
    }, {
      color: '#9C1732',
      name: 'Failed',
      show: true,
      data: [{
        date: '1 oct',
        value: 50
      }, {
        date: '2 oct',
        value: 0
      }, {
        date: '3 oct',
        value: 40
      }, {
        date: '4 oct',
        value: 20
      }, {
        date: '5 oct',
        value: 90
      }, {
        date: '6 oct',
        value: 70
      }, {
        date: '7 oct',
        value: 0
      }]
    }, {
      color: '#E2750F',
      name: 'Warning',
      show: true,
      data: [{
        date: '1 oct',
        value: 10
      }, {
        date: '2 oct',
        value: 20
      }, {
        date: '3 oct',
        value: 0
      }, {
        date: '4 oct',
        value: 20
      }, {
        date: '5 oct',
        value: 10
      }, {
        date: '6 oct',
        value: 10
      }, {
        date: '7 oct',
        value: 10
      }]
    }, {
      color: '#A83FC4',
      name: 'Skipped',
      show: true,
      data: [{
        date: '1 oct',
        value: 0
      }, {
        date: '2 oct',
        value: 20
      }, {
        date: '3 oct',
        value: 10
      }, {
        date: '4 oct',
        value: 20
      }, {
        date: '5 oct',
        value: 10
      }, {
        date: '6 oct',
        value: 30
      }, {
        date: '7 oct',
        value: 0
      }]
    }, {
      color: '#3F5AC4',
      name: 'Flaky',
      show: true,
      data: [{
        date: '1 oct',
        value: 50
      }, {
        date: '2 oct',
        value: 40
      }, {
        date: '3 oct',
        value: 30
      }, {
        date: '4 oct',
        value: 20
      }, {
        date: '5 oct',
        value: 0
      }, {
        date: '6 oct',
        value: 40
      }, {
        date: '7 oct',
        value: 20
      }]
    }],
    width: 700,
    height: 232,
    axisColor: '#000000',
    lineChartWidth: 2,
    yAxisLabel: 'Number Of Defects',
    xAxisLabel: 'Number Of Days',
    yAxisValueColor: '#252C37',
    xAxisColor: '#D9D9D9',
    yAxisColor: '#252C37',
    yAxisLabelColor: '#252C37',
    textSize: '12px',
    fontWeight: 'semi-bold',
    proportionalSpacing: false,
    chartName: 'defects',
    xAxisLabelGap: 20
  },
  render: args => <div className="linechart-container">\r
      <LineChart {...args} />\r
    </div>
}`,...(se=(le=w.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const Ve=["DefaultLineChart","multiLineScriptsChart","multiLineDefectsChart"];export{k as DefaultLineChart,Ve as __namedExportsOrder,Se as default,w as multiLineDefectsChart,F as multiLineScriptsChart};
