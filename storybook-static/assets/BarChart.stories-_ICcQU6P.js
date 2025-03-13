import{j as r}from"./jsx-runtime-SKoiH9zj.js";import{r as z}from"./index-DJO9vBfz.js";import{T as ee}from"./Typography-DdMJCn-_.js";import{I as X}from"./Icon-BnrH6PuI.js";import{t as je}from"./truncateText-D2e1-n0F.js";import"./index-NZcV-alF.js";const we=o=>{const i=o.toLowerCase().trim(),l=parseFloat(i);switch(i.replace(/[0-9.]/g,"").trim()){case"gb":return l*1024*1024*1024;case"mb":return l*1024*1024;case"kb":return l*1024;case"b":return l;default:return l}},Ee=o=>{const i=o.toLowerCase().trim(),l=parseFloat(i);switch(i.replace(/[0-9.]/g,"").trim()){case"gb":return l;case"mb":return l/1024;case"kb":return l/(1024*1024);case"b":return l/(1024*1024*1024);default:return l}},v=({data:o,barWidth:i,height:l,barGap:A=20,colors:d=[],xAxisLabel:$,isTruncateText:ge=!0,yAxisLabel:O,padding:fe=20,yAxisDivisions:B=5,barBorderRadius:C=0,legend:P=!0,showXAxisLabels:_=!0,icons:p=[],iconSize:y,legendPosition:H="bottom",legendGap:I=5,extendBarChartRightWidth:ve=0,isYAxisValuePercentage:Y=!1,selectedBar:ye,setSelectedBar:K,onSelectedBar:xe=x=>{},totalLabel:U="Total Execution",customToolTip:Fe=!1,isOnclick:q=!1,isDashboardVersions:Ae,type:c=""})=>{const x=z.useRef(null),[J,L]=z.useState(null),b=o.map(e=>{if(typeof e.value=="string"){let a=0;return c==="memory"?a=Ee(e.value):a=parseFloat(e.value),{...e,normalizedValue:a}}return{...e,normalizedValue:e.value}});let Q=0;c==="memory"&&(Q=o.reduce((e,a)=>typeof a.value=="string"?e+we(a.value):e+Number(a.value)*1024*1024*1024,0));const k=Q/(1024*1024),Be=k<1024?`${Math.round(k)} mb`:`${(k/1024).toFixed(1)} gb`;let g=Math.max(...b.map(e=>e.normalizedValue));c==="memory"?g=Math.max(g,1):g=Math.max(g,B);const h=40,T=40,S=b.length*i+(b.length-1)*A+T*2+10+ve,Z=Date.now(),Ce=e=>e.map((a,t)=>r.jsx("defs",{children:r.jsx("linearGradient",{id:`gradient-${Z}-${c}-${t}`,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:a.map((u,n)=>r.jsx("stop",{offset:`${n/(a.length-1)*100}%`,stopColor:u},`${t}-${n}`))})},t)),Le=e=>{var a;return(a=d==null?void 0:d[e%d.length])!=null&&a[0]?`url(#gradient-${Z}-${c}-${e%d.length})`:"grey"},R=(e,a,t,u,n)=>{const s=x.current;if(s)if(s.style.display="block",Fe)s.innerHTML=`<div>
          <div><Typography fontWeight='semi-bold'>${e}</Typography></div>
          <div><Typography>${t||""}</Typography></div>
          <div><Typography>${U} : ${a} ${u?"("+u+"%)":""}</Typography></div>
        </div>`;else if(Ae){const m=n?n.join(", "):"";s.innerHTML=`
        <div>
          <div><Typography>${U} : ${a}</Typography></div>
          ${m?`<div><Typography>Versions : ${m}</Typography></div>`:""}
        </div>`}else c==="memory"?s.innerHTML=`<strong>${e}</strong>: ${a} / ${Be}`:s.innerHTML=`<strong>${e}</strong>: ${a} ${Y?"%":""}`},W=(e,a=!1)=>{var u;const t=x.current;if(t){const n=(u=t.parentElement)==null?void 0:u.getBoundingClientRect(),s=window.scrollX,m=window.scrollY,f=a?e.clientX-((n==null?void 0:n.left)||0)+s-t.offsetWidth-10:e.clientX-((n==null?void 0:n.left)||0)+s+10,G=e.clientY-((n==null?void 0:n.top)||0)+m-20;t.style.left=`${f}px`,t.style.top=`${G}px`}},N=()=>{const e=x.current;e&&(e.style.display="none")},Te=e=>{K&&(K(e),q&&xe(e))};return r.jsxs("div",{className:"ff-bar-chart-container",style:{width:S},children:[r.jsx("div",{ref:x,className:"ff-bar-chart-tooltip"}),P&&H==="top"&&r.jsx("div",{className:"ff-legend-container",children:r.jsx("div",{className:"ff-bar-chart-legend",style:{gap:`${I}px`},children:b.map((e,a)=>{var t;return r.jsxs("div",{className:"ff-bar-chart-legend-item",onMouseEnter:()=>L(a),onMouseLeave:()=>L(null),children:[p[a]&&typeof p[a]=="string"?r.jsx(X,{name:String(p[a]),width:y,height:y}):r.jsx("span",{className:"ff-bar-chart-legend-item-circle",style:{backgroundColor:((t=d[a%d.length])==null?void 0:t[0])||"grey"}}),r.jsx(ee,{as:"div",fontSize:10,fontWeight:"regular",className:"ff-legend-label",children:e.label})]},e.label)})})}),r.jsx("div",{children:r.jsxs("svg",{width:S,height:l+h+5+(_?20:0)+($?20:0),children:[Array.isArray(d)&&d.length>0&&Ce(d),Array.from({length:B+1}).map((e,a)=>{const t=l-a/B*l+h+4,u=a*g/B,n=c==="memory"?u.toFixed(1):Y?`${u.toFixed(0).padStart(2,"0")}%`:u.toFixed(0).padStart(2,"0");return r.jsx("text",{x:T,y:t,fill:"black",textAnchor:"middle",className:"ff-bar-chart-labels",children:n},a)}),b.map((e,a)=>{const t=e.normalizedValue/g*l,n=e.normalizedValue===0?2:t,s=a*(i+A)+T+fe,m=l-n+h,f=y||20,G=s+i/2-f/2,Se=m-f,V=ye===e.label,Ve=J===a;return r.jsxs("g",{children:[p[a]&&typeof p[a]=="string"&&r.jsx("g",{onMouseEnter:()=>R(e.label,c==="memory"?e.value:e.normalizedValue,e.id,e.percent,e.versions),onMouseMove:F=>W(F,a===b.length-1),onMouseLeave:N,children:r.jsx(X,{name:String(p[a]),x:String(G),y:String(Se),width:f,height:f,chartIcon:!0})}),r.jsx("rect",{x:s,y:m,width:i,height:n,fill:Le(a),rx:C,ry:C,style:{strokeWidth:V?3:0,opacity:J===null||Ve?1:.3,cursor:q?"pointer":"default",transition:"opacity 0.5s ease"},onMouseEnter:()=>R(e.label,c==="memory"?e.value:e.normalizedValue,e.id,e.percent,e.versions),onMouseMove:F=>W(F,a===b.length-1),onMouseLeave:N,onClick:()=>Te(e.label)}),V&&q&&r.jsx("rect",{x:s,y:m,width:i,height:n,fill:"var(--select-chart-highlight-color)",rx:C,ry:C,onMouseEnter:()=>R(e.label,c==="memory"?e.value:e.normalizedValue,e.id,e.percent,e.versions),onMouseMove:F=>W(F,a===b.length-1),onMouseLeave:N}),_&&r.jsx("text",{x:a===0?s:a===b.length-1?s+i:s+i/2,y:l+h+15,className:"ff-bar-chart-labels",fill:V?"var(--brand-color)":"black",fontWeight:V?"bold":"normal",textAnchor:a===0?"start":"middle",children:ge?je(e.label,10):e.label})]},a)}),r.jsx("line",{x1:60,y1:l+h,x2:S,y2:l+h,stroke:"#D9D9D9",strokeWidth:"1"}),$&&r.jsx("text",{x:S/2,y:l+h+(_?40:20),fontSize:"12",fill:"black",textAnchor:"middle",className:"ff-bar-chart-labels",children:$}),O&&r.jsx("text",{x:-(l/2+35),y:T-30,transform:"rotate(-90)",fill:"black",textAnchor:"middle",alignmentBaseline:"middle",className:"ff-bar-chart-labels",children:O})]})}),P&&H==="bottom"&&r.jsx("div",{className:"ff-legend-container",children:r.jsx("div",{className:"ff-bar-chart-legend",style:{gap:`${I}px`},children:o.map((e,a)=>{var t;return r.jsxs("div",{className:"ff-bar-chart-legend-item",onMouseEnter:()=>L(a),onMouseLeave:()=>L(null),children:[p[a]&&typeof p[a]=="string"?r.jsx(X,{name:String(p[a]),width:y,height:y}):r.jsx("span",{className:"ff-bar-chart-legend-item-circle",style:{backgroundColor:((t=d[a%d.length])==null?void 0:t[0])||"grey"}}),r.jsx("div",{children:r.jsx(ee,{as:"div",fontSize:10,fontWeight:"regular",className:"ff-legend-label",children:e.label})})]},e.label)})})})]})};try{v.displayName="BarChart",v.__docgenInfo={description:"",displayName:"BarChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"{ label: string; value: string | number; id?: string | undefined; percent?: number | undefined; versions?: string[] | undefined; }[]"}},barWidth:{defaultValue:null,description:"",name:"barWidth",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},barGap:{defaultValue:{value:"20"},description:"",name:"barGap",required:!1,type:{name:"number"}},colors:{defaultValue:{value:"[]"},description:"",name:"colors",required:!1,type:{name:"string[][]"}},xAxisLabel:{defaultValue:null,description:"",name:"xAxisLabel",required:!1,type:{name:"string"}},isTruncateText:{defaultValue:{value:"true"},description:"",name:"isTruncateText",required:!1,type:{name:"boolean"}},yAxisLabel:{defaultValue:null,description:"",name:"yAxisLabel",required:!1,type:{name:"string"}},padding:{defaultValue:{value:"20"},description:"",name:"padding",required:!1,type:{name:"number"}},yAxisDivisions:{defaultValue:{value:"5"},description:"",name:"yAxisDivisions",required:!1,type:{name:"number"}},barBorderRadius:{defaultValue:{value:"0"},description:"",name:"barBorderRadius",required:!1,type:{name:"number"}},legend:{defaultValue:{value:"true"},description:"",name:"legend",required:!1,type:{name:"boolean"}},showXAxisLabels:{defaultValue:{value:"true"},description:"",name:"showXAxisLabels",required:!1,type:{name:"boolean"}},icons:{defaultValue:{value:"[]"},description:"",name:"icons",required:!1,type:{name:"ReactNode[]"}},iconSize:{defaultValue:null,description:"",name:"iconSize",required:!1,type:{name:"number"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},legendPosition:{defaultValue:{value:"bottom"},description:"",name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},legendGap:{defaultValue:{value:"5"},description:"",name:"legendGap",required:!1,type:{name:"number"}},extendBarChartRightWidth:{defaultValue:{value:"0"},description:"",name:"extendBarChartRightWidth",required:!1,type:{name:"number"}},isYAxisValuePercentage:{defaultValue:{value:"false"},description:"",name:"isYAxisValuePercentage",required:!1,type:{name:"boolean"}},selectedBar:{defaultValue:null,description:"",name:"selectedBar",required:!1,type:{name:"string | null"}},setSelectedBar:{defaultValue:null,description:"",name:"setSelectedBar",required:!1,type:{name:"((value: string | null) => void)"}},onSelectedBar:{defaultValue:{value:"(_label) => {}"},description:"",name:"onSelectedBar",required:!1,type:{name:"((_label: string) => void)"}},totalLabel:{defaultValue:{value:"Total Execution"},description:"",name:"totalLabel",required:!1,type:{name:"string"}},customToolTip:{defaultValue:{value:"false"},description:"",name:"customToolTip",required:!1,type:{name:"boolean"}},isOnclick:{defaultValue:{value:"false"},description:"",name:"isOnclick",required:!1,type:{name:"boolean"}},isDashboardVersions:{defaultValue:null,description:"",name:"isDashboardVersions",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:""},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}const We={title:"Components/BarChart",component:v,parameters:{layout:"bottom"},argTypes:{barWidth:{control:"number"},height:{control:"number"},data:{control:"object"},colors:{control:"object"},xAxisLabel:{control:"text"},yAxisLabel:{control:"text"},barGap:{control:"number"},barBorderRadius:{control:"number"},legend:{control:"boolean"},showXAxisLabels:{control:"boolean"},iconSize:{control:"number"},isTruncateText:{control:"boolean"}}},j={args:{data:[{label:"FireFox",value:0,percent:50},{label:"Edge",value:20,id:"divya@gmail.com",percent:50},{label:"Chrome",value:25,id:"divya@gmail.com",percent:50},{label:"Safari",value:10,id:"",percent:50},{label:"IE",value:1,id:"divya@gmail.com",percent:50},{label:"Opera",value:15,id:"divya@gmail.com",percent:50}],barWidth:20,height:250,colors:[["#FFC300","#FF5733"],["#01D34F","#013E7C"],["#FFC107","#E4AD09"],["#5FC2F5","#3061C5"],["#00BBEF","#0FA2CB"],["#9C0000","#9C0000"]],isTruncateText:!0,xAxisLabel:"Status",yAxisLabel:"Count",padding:30,barGap:40,barBorderRadius:0,legend:!1,showXAxisLabels:!0,legendPosition:"top",icons:["fire_fox","edge","chrome_icon","safari_icon","internet_explorer","opera"],iconSize:20,onSelectedBar:o=>{console.log(o)},totalLabel:"Total count",customToolTip:!0,isOnclick:!0}},w={render:()=>r.jsxs("div",{style:{width:"500px"},children:[r.jsx(v,{data:[{label:"Known Failures",value:25},{label:"Unknown Failures",value:45},{label:"Partially Analysed Failures",value:20}],height:137,barBorderRadius:4,barGap:156,colors:[["#FFEB3B","#FFEB3B"],["#9C0000","#9C0000"],["#FFC107","#FFC107"]],barWidth:18,padding:30,showXAxisLabels:!0,legend:!1,xAxisLabel:"Failure Type",yAxisLabel:"Failure Rate",isTruncateText:!1,yAxisDivisions:4,extendBarChartRightWidth:70,isYAxisValuePercentage:!0,isOnclick:!0,type:"failureAnalysis"}),r.jsx(v,{data:[{label:"0%-25%",value:1},{label:"26%-50%",value:0},{label:"51%-75%",value:1},{label:"76%-100%",value:2}],height:137,barBorderRadius:4,barGap:113,colors:[["#52A2F2","#52A2F2"],["#52A2F2","#52A2F2"],["#52A2F2","#52A2F2"],["#52A2F2","#52A2F2"]],barWidth:18,padding:30,showXAxisLabels:!0,legend:!1,xAxisLabel:"Failure Rate",yAxisLabel:"No. of Scripts",yAxisDivisions:4,isOnclick:!0,type:"topFailure"})]})},E={render:()=>{const[o,i]=z.useState("76% - 100%");return r.jsxs("div",{style:{height:"100vh",overflow:"auto"},children:[r.jsx("div",{style:{height:"60vh"}}),r.jsx(v,{data:[{label:"1% - 25%",value:3},{label:"26% - 50%",value:10},{label:"51% - 75%",value:2},{label:"76% - 100%",value:7}],height:137,barBorderRadius:4,barGap:113,colors:[["#52A2F2","#52A2F2"],["#52A2F2","#52A2F2"],["#52A2F2","#52A2F2"],["#52A2F2","#52A2F2"]],barWidth:18,padding:30,showXAxisLabels:!0,legend:!1,xAxisLabel:"Failure Rate",yAxisLabel:"No. of Scripts",yAxisDivisions:4,isOnclick:!0,selectedBar:o,setSelectedBar:i})]})}},M={args:{data:[{label:"FireFox",value:10,percent:50,versions:["111.0.1.8480","104.0","108.0","119.0.1","126.0.1.8912"]},{label:"Edge",value:20,id:"divya@gmail.com",percent:50,versions:["111.0.1661.54","126.0.2592.68","125.0.2535.79"]},{label:"Chrome",value:25,id:"divya@gmail.com",percent:50,versions:["111.0.5563.112","110.0.5481.77","108.0.5359.124","119.0.6045.159","126.0.6478.127","125.0.6422.141"]},{label:"Safari",value:10,id:"",percent:50,versions:["111.0.5563.112","110.0.5481.77","108.0.5359.124","119.0.6045.159","126.0.6478.127","125.0.6422.141"]},{label:"IE",value:1,id:"divya@gmail.com",percent:50,versions:["11.1.22621.0","111.0.5563.112","110.0.5481.77","108.0.5359.124","119.0.6045.159","126.0.6478.127","125.0.6422.141"]},{label:"Opera",value:15,id:"divya@gmail.com",percent:50,versions:["111.0.5563.112","110.0.5481.77","108.0.5359.124","119.0.6045.159","126.0.6478.127","125.0.6422.141"]}],barWidth:20,height:250,colors:[["#FFC300","#FF5733"],["#01D34F","#013E7C"],["#FFC107","#E4AD09"],["#5FC2F5","#3061C5"],["#00BBEF","#0FA2CB"],["#9C0000","#9C0000"]],isTruncateText:!0,xAxisLabel:"Status",yAxisLabel:"Count",padding:30,barGap:40,barBorderRadius:0,legend:!1,showXAxisLabels:!0,legendPosition:"top",icons:["fire_fox","edge","chrome_icon","safari_icon","internet_explorer","opera"],iconSize:20,onSelectedBar:o=>{console.log(o)},totalLabel:"System",isOnclick:!0,isDashboardVersions:!0}},D={args:{data:[{label:"App A",value:"50 mb"},{label:"App B",value:"300 mb"},{label:"App C",value:"230mb"},{label:"App D",value:"500mb"}],barWidth:20,height:250,colors:[["#4CAF50","#66BB6A"],["#2196F3","#42A5F5"],["#FFC107","#FFCA28"],["#F44336","#EF5350"]],xAxisLabel:"Applications",yAxisLabel:"Memory (GB)",padding:30,barGap:120,barBorderRadius:0,legend:!1,showXAxisLabels:!0,iconSize:20,isTruncateText:!0,type:"memory"}};var ae,re,le;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'FireFox',
      value: 0,
      percent: 50
    }, {
      label: 'Edge',
      value: 20,
      id: 'divya@gmail.com',
      percent: 50
    }, {
      label: 'Chrome',
      value: 25,
      id: 'divya@gmail.com',
      percent: 50
    }, {
      label: 'Safari',
      value: 10,
      id: '',
      percent: 50
    }, {
      label: 'IE',
      value: 1,
      id: 'divya@gmail.com',
      percent: 50
    }, {
      label: 'Opera',
      value: 15,
      id: 'divya@gmail.com',
      percent: 50
    }],
    barWidth: 20,
    height: 250,
    colors: [['#FFC300', '#FF5733'], ['#01D34F', '#013E7C'], ['#FFC107', '#E4AD09'], ['#5FC2F5', '#3061C5'], ['#00BBEF', '#0FA2CB'], ['#9C0000', '#9C0000']],
    isTruncateText: true,
    xAxisLabel: 'Status',
    yAxisLabel: 'Count',
    padding: 30,
    barGap: 40,
    barBorderRadius: 0,
    legend: false,
    showXAxisLabels: true,
    legendPosition: 'top',
    icons: ['fire_fox', 'edge', 'chrome_icon', 'safari_icon', 'internet_explorer', 'opera'],
    iconSize: 20,
    onSelectedBar: label => {
      console.log(label);
    },
    totalLabel: 'Total count',
    customToolTip: true,
    isOnclick: true
  }
}`,...(le=(re=j.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,ne,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '500px'
    }}>\r
        <BarChart data={[{
        label: 'Known Failures',
        value: 25
      }, {
        label: 'Unknown Failures',
        value: 45
      }, {
        label: 'Partially Analysed Failures',
        value: 20
      }]} height={137} barBorderRadius={4} barGap={156} colors={[['#FFEB3B', '#FFEB3B'], ['#9C0000', '#9C0000'], ['#FFC107', '#FFC107']]} barWidth={18} padding={30} showXAxisLabels legend={false} xAxisLabel="Failure Type" yAxisLabel="Failure Rate" isTruncateText={false} yAxisDivisions={4} extendBarChartRightWidth={70} isYAxisValuePercentage={true} isOnclick type="failureAnalysis" />\r
\r
        <BarChart data={[{
        label: '0%-25%',
        value: 1
      }, {
        label: '26%-50%',
        value: 0
      }, {
        label: '51%-75%',
        value: 1
      }, {
        label: '76%-100%',
        value: 2
      }]} height={137} barBorderRadius={4} barGap={113} colors={[['#52A2F2', '#52A2F2'], ['#52A2F2', '#52A2F2'], ['#52A2F2', '#52A2F2'], ['#52A2F2', '#52A2F2']]} barWidth={18} padding={30} showXAxisLabels legend={false} xAxisLabel="Failure Rate" yAxisLabel="No. of Scripts" yAxisDivisions={4} isOnclick type="topFailure" />\r
      </div>;
  }
}`,...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,oe,de;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [selectedBar, setSelectedBar] = useState<string | null>('76% - 100%');
    return <div style={{
      height: '100vh',
      overflow: 'auto'
    }}>\r
        <div style={{
        height: '60vh'
      }}></div>\r
        <BarChart data={[{
        label: '1% - 25%',
        value: 3
      }, {
        label: '26% - 50%',
        value: 10
      }, {
        label: '51% - 75%',
        value: 2
      }, {
        label: '76% - 100%',
        value: 7
      }]} height={137} barBorderRadius={4} barGap={113} colors={[['#52A2F2', '#52A2F2'], ['#52A2F2', '#52A2F2'], ['#52A2F2', '#52A2F2'], ['#52A2F2', '#52A2F2']]} barWidth={18} padding={30} showXAxisLabels legend={false} xAxisLabel="Failure Rate" yAxisLabel="No. of Scripts" yAxisDivisions={4} isOnclick selectedBar={selectedBar} setSelectedBar={setSelectedBar} />\r
      </div>;
  }
}`,...(de=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ue,ce,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'FireFox',
      value: 10,
      percent: 50,
      versions: ['111.0.1.8480', '104.0', '108.0', '119.0.1', '126.0.1.8912']
    }, {
      label: 'Edge',
      value: 20,
      id: 'divya@gmail.com',
      percent: 50,
      versions: ['111.0.1661.54', '126.0.2592.68', '125.0.2535.79']
    }, {
      label: 'Chrome',
      value: 25,
      id: 'divya@gmail.com',
      percent: 50,
      versions: ['111.0.5563.112', '110.0.5481.77', '108.0.5359.124', '119.0.6045.159', '126.0.6478.127', '125.0.6422.141']
    }, {
      label: 'Safari',
      value: 10,
      id: '',
      percent: 50,
      versions: ['111.0.5563.112', '110.0.5481.77', '108.0.5359.124', '119.0.6045.159', '126.0.6478.127', '125.0.6422.141']
    }, {
      label: 'IE',
      value: 1,
      id: 'divya@gmail.com',
      percent: 50,
      versions: ['11.1.22621.0', '111.0.5563.112', '110.0.5481.77', '108.0.5359.124', '119.0.6045.159', '126.0.6478.127', '125.0.6422.141']
    }, {
      label: 'Opera',
      value: 15,
      id: 'divya@gmail.com',
      percent: 50,
      versions: ['111.0.5563.112', '110.0.5481.77', '108.0.5359.124', '119.0.6045.159', '126.0.6478.127', '125.0.6422.141']
    }],
    barWidth: 20,
    height: 250,
    colors: [['#FFC300', '#FF5733'], ['#01D34F', '#013E7C'], ['#FFC107', '#E4AD09'], ['#5FC2F5', '#3061C5'], ['#00BBEF', '#0FA2CB'], ['#9C0000', '#9C0000']],
    isTruncateText: true,
    xAxisLabel: 'Status',
    yAxisLabel: 'Count',
    padding: 30,
    barGap: 40,
    barBorderRadius: 0,
    legend: false,
    showXAxisLabels: true,
    legendPosition: 'top',
    icons: ['fire_fox', 'edge', 'chrome_icon', 'safari_icon', 'internet_explorer', 'opera'],
    iconSize: 20,
    onSelectedBar: label => {
      console.log(label);
    },
    totalLabel: 'System',
    isOnclick: true,
    isDashboardVersions: true
  }
}`,...(pe=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var be,me,he;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'App A',
      value: "50 mb"
    }, {
      label: 'App B',
      value: "300 mb"
    }, {
      label: 'App C',
      value: "230mb"
    }, {
      label: 'App D',
      value: "500mb"
    }],
    barWidth: 20,
    height: 250,
    colors: [['#4CAF50', '#66BB6A'], ['#2196F3', '#42A5F5'], ['#FFC107', '#FFCA28'], ['#F44336', '#EF5350']],
    xAxisLabel: 'Applications',
    yAxisLabel: 'Memory (GB)',
    padding: 30,
    barGap: 120,
    barBorderRadius: 0,
    legend: false,
    showXAxisLabels: true,
    iconSize: 20,
    isTruncateText: true,
    type: 'memory'
  }
}`,...(he=(me=D.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Ne=["BarChartDashboard","FailureAnalysis","TopFailure","BarChartDashboardVersions","BarChartWithMemoryData"];export{j as BarChartDashboard,M as BarChartDashboardVersions,D as BarChartWithMemoryData,w as FailureAnalysis,E as TopFailure,Ne as __namedExportsOrder,We as default};
