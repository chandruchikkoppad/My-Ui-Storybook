import{j as o}from"./jsx-runtime-SKoiH9zj.js";import{r as y}from"./index-DJO9vBfz.js";import{I as D}from"./Icon-BnrH6PuI.js";import{T as V}from"./Typography-DdMJCn-_.js";import"./index-NZcV-alF.js";const k=({x:r,y:t,radius:e,startAngle:a,endAngle:n})=>{const c=r+e*Math.cos(a),s=t+e*Math.sin(a),l=r+e*Math.cos(n),i=t+e*Math.sin(n),f=n-a>Math.PI?1:0;return n-a>=2*Math.PI?`
      M ${r+e} ${t}
      A ${e} ${e} 0 1 1 ${r-e} ${t}  
      A ${e} ${e} 0 1 1 ${r+e} ${t}
    `:`M ${c} ${s} A ${e} ${e} 0 ${f} 1 ${l} ${i}`},F=(r,t,e)=>{const a=Math.max(0,Math.min(r,100))/100,n=t,c=a*2*Math.PI,s=n+c,l=k({x:0,y:0,radius:e,startAngle:0,endAngle:2*Math.PI}),i=k({x:0,y:0,radius:e,startAngle:n,endAngle:s});return{backgroundArcPath:l,foregroundArcPath:i}},g=({radius:r=15,lineWidth:t=5,label:e,percentageValue:a,icon:n,fontSize:c=10,labelColor:s="",arcColor:l="var(--brand-color)",backgroundArcColor:i="var(--ff-select-scroll-thumb-color)",isSelectedArch:f=!1,onSelect:L})=>{const[v,x]=y.useState({x:0,y:0}),[O,$]=y.useState(!1);let X=-Math.PI/2;const d=2*(r+t),{backgroundArcPath:Y,foregroundArcPath:I}=F(a,X,r),b=()=>{$(!0)},M=()=>{x({x:0,y:0}),$(!1)},S=C=>{x({x:C.clientX+10,y:C.clientY+10})},B=()=>o.jsxs("div",{className:"ff-icon-radial-chart-tooltip",style:{left:v.x,top:v.y},children:[o.jsx(V,{children:`${e} : `}),o.jsxs(V,{children:[a,"%"]})]});return o.jsxs("div",{className:"ff-icon-radial-chart-container",style:{"--fontSize":`${c}px`},onClick:L,children:[o.jsx("svg",{width:d,height:d,viewBox:`0 0 ${d} ${d}`,role:"img",children:o.jsxs("g",{transform:`translate(${r+t}, ${r+t})`,children:[o.jsx("path",{d:Y,fill:"none",stroke:i,strokeWidth:t,onMouseEnter:b,onMouseLeave:M,onMouseMove:S}),o.jsx("path",{d:I,fill:"none",stroke:l,strokeWidth:t,onMouseEnter:b,onMouseLeave:M,onMouseMove:S}),f&&o.jsx("path",{d:I,fill:"none",stroke:"var(--dotted-border-color)",strokeOpacity:"0.4",strokeWidth:t,onMouseEnter:b,onMouseLeave:M,onMouseMove:S}),n?o.jsx("foreignObject",{x:"-10",y:"-10",width:"20",height:"20",children:o.jsx(D,{className:"ff-radial-chart-icon-padding",name:n,height:20,width:20})}):o.jsx("text",{x:"0",y:"0",fill:s||l,textAnchor:"middle",dominantBaseline:"central",children:`${Math.round(a)}%`})]})}),O&&B()]})};try{g.displayName="IconRadialChart",g.__docgenInfo={description:"",displayName:"IconRadialChart",props:{radius:{defaultValue:{value:"15"},description:"",name:"radius",required:!1,type:{name:"number"}},lineWidth:{defaultValue:{value:"5"},description:"",name:"lineWidth",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},percentageValue:{defaultValue:null,description:"",name:"percentageValue",required:!0,type:{name:"number"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"10"},description:"",name:"fontSize",required:!1,type:{name:"number"}},labelColor:{defaultValue:{value:""},description:"",name:"labelColor",required:!1,type:{name:"string"}},arcColor:{defaultValue:{value:"var(--brand-color)"},description:"",name:"arcColor",required:!1,type:{name:"string"}},backgroundArcColor:{defaultValue:{value:"var(--ff-select-scroll-thumb-color)"},description:"",name:"backgroundArcColor",required:!1,type:{name:"string"}},isSelectedArch:{defaultValue:{value:"false"},description:"",name:"isSelectedArch",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(() => void)"}}}}}catch{}const U={title:"Components/IconRadialChart",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{radius:{control:"number"},lineWidth:{control:"number"},percentageValue:{control:"number"},icon:{control:"text"}}},u={args:{radius:20,lineWidth:7,percentageValue:9,icon:"dashboard_web_icon",label:"Memory"}},p={args:{radius:20,lineWidth:7,percentageValue:18,icon:"dashboard_mobile_icon",label:"Memory",arcColor:"var(--brand-color)"}},h={args:{radius:25,lineWidth:10,percentageValue:100,label:"Step",fontSize:12,labelColor:"black"}},m={render:()=>{const[r,t]=y.useState(null),e=[{id:"chart1",percentage:75},{id:"chart2",percentage:45},{id:"chart3",percentage:45},{id:"chart4",percentage:45},{id:"chart5",percentage:45}];return o.jsx("div",{children:e.map(a=>o.jsx(g,{radius:25,fontSize:12,lineWidth:10,label:"Step",labelColor:"black",percentageValue:a.percentage,isSelectedArch:r===a.id,onSelect:()=>t(a.id)},a.id))})}};var A,_,j;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    radius: 20,
    lineWidth: 7,
    percentageValue: 9,
    icon: 'dashboard_web_icon',
    label: 'Memory'
  }
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var P,q,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    radius: 20,
    lineWidth: 7,
    percentageValue: 18,
    icon: 'dashboard_mobile_icon',
    label: 'Memory',
    arcColor: 'var(--brand-color)'
  }
}`,...(W=(q=p.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var z,w,E;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    radius: 25,
    lineWidth: 10,
    percentageValue: 100,
    label: 'Step',
    fontSize: 12,
    labelColor: 'black'
  }
}`,...(E=(w=h.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var T,R,N;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const charts = [{
      id: 'chart1',
      percentage: 75
    }, {
      id: 'chart2',
      percentage: 45
    }, {
      id: 'chart3',
      percentage: 45
    }, {
      id: 'chart4',
      percentage: 45
    }, {
      id: 'chart5',
      percentage: 45
    }];
    return <div>\r
        {charts.map(chart => <IconRadialChart key={chart.id} radius={25} fontSize={12} lineWidth={10} label="Step" labelColor="black" percentageValue={chart.percentage} isSelectedArch={selectedId === chart.id} onSelect={() => setSelectedId(chart.id)} />)}\r
      </div>;
  }
}`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const Z=["Default","Mobile","WithoutIcon","ArchClickable"];export{m as ArchClickable,u as Default,p as Mobile,h as WithoutIcon,Z as __namedExportsOrder,U as default};
