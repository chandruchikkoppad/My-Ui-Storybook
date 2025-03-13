import{j as l}from"./jsx-runtime-SKoiH9zj.js";import{r as N}from"./index-DJO9vBfz.js";import{T as b}from"./Typography-DdMJCn-_.js";import{c as pe}from"./index-NZcV-alF.js";import{n as sn,f as rn}from"./functionUtils-C4j6ouf0.js";import{T as an}from"./Tooltip-jHEmaokv.js";import{I as cn}from"./Icon-BnrH6PuI.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const q=r=>typeof r=="number"?r:parseFloat(r)||0,un=()=>"#"+("000000"+Math.floor(Math.random()*16777215).toString(16)).slice(-6),Ce=r=>{const f=[];if(r.version&&Array.isArray(r.version)){const p={};r.version.forEach((c,k)=>{var v,M;const I=String(c),A=I.split("."),j=Number(A[0]);if(!(j in p)){const C=((M=r.versionColor)==null?void 0:M[k%(((v=r.versionColor)==null?void 0:v.length)||1)])||un();p[j]=C,f.push({major:j,ver:I,color:C})}})}return f},Te=(r,f,p,c,k)=>{const I=r+p*Math.cos(c),A=f+p*Math.sin(c),j=r+p*Math.cos(k),v=f+p*Math.sin(k),M=k-c>Math.PI?1:0;return`M ${I} ${A} A ${p} ${p} 0 ${M} 1 ${j} ${v}`},Ee=(r,f,p,c)=>{const k=r*Math.cos(p),I=r*Math.sin(p),A=r*Math.cos(c),j=r*Math.sin(c),v=f*Math.cos(c),M=f*Math.sin(c),C=f*Math.cos(p),T=f*Math.sin(p),O=c-p>Math.PI?1:0;return`
    M ${k} ${I}
    A ${r} ${r} 0 ${O} 1 ${A} ${j}
    L ${v} ${M}
    A ${f} ${f} 0 ${O} 0 ${C} ${T}
    Z
  `},S=["var(--status-success-text-color)","var(--status-rejected-text-color)","var(--status-warning-text-color)","var(--status-button-text-skipped)","var(--brand-color)"],oe=({radius:r=60,tableWidth:f,tableHeight:p=120,lineWidth:c=15,statusValues:k=[],gapAngle:I=0,legendDetailsType:A="",isLegendDetails:j=!0,legendType:v="numberLegend",showOnlyLabel:M=!1,apiDataLabel:C,unit:T,showUnit:O=!0,labelFontSize:Y=24,subLabelFontSize:Q=14,legendPosition:se="bottom",chartGap:fe=0,legendGap:re=5,legendValueFontSize:ae=22,legendKeyFontSize:ie=12,legendWithVersionFontSize:Xe=12,versionErrorText:z,labelYoffSet:Ue=-5,subLabelYoffSet:Ze=20,capsuleStyle:Je={},legendTruncate:W=1/0,isLegendToolTip:Qe=!1,containerHeight:De="",onSelectedStatus:he=u=>{},selectedStatusKey:G="",setSelectedStatusKey:ye=u=>{},isOnClick:L=!1})=>{var Ie,je,Me,Le,Ve,Ne;const[u,$]=N.useState(null),[x,_]=N.useState(null),[D,H]=N.useState({x:0,y:0}),[Re,F]=N.useState(!1),[w,ce]=N.useState(null);N.useEffect(()=>{G||ce(null)},[G]),N.useEffect(()=>{k.forEach(e=>{e.version&&console.log(`Version for ${e.key}:`,e.version)})},[k]);const ue=v==="memoryLegend"?k.map(e=>{if(typeof e.value=="string"){const{normalizedValue:o,unit:a,value:t}=sn(e.value);return{...e,normalizedValue:o,unit:a,labelValue:t}}return{...e,normalizedValue:e.value,labelValue:e.value,unit:"B"}}):k.map(e=>{var o;if(typeof e.value=="string"){const a=parseFloat(e.value),t=isNaN(a)?0:a;return{...e,normalizedValue:t,unit:"",labelValue:Number.isInteger(t)?t:t.toFixed(2)}}return{...e,normalizedValue:e.value,unit:"",labelValue:Number.isInteger(e.value)?e.value:(o=e.value)==null?void 0:o.toFixed(2)}}),d=ue==null?void 0:ue.map((e,o)=>({...e,value:e.normalizedValue??e.value,originalIndex:o})),y=(d==null?void 0:d.reduce((e,{value:o})=>e+q(o),0))||0,P=(d==null?void 0:d.filter(({value:e})=>q(e)>0))||[],en=rn(y),de=1/100*(2*Math.PI),ve=N.useMemo(()=>{if(P.length===0)return[];const e=2*Math.PI,o=I*P.length;let a=e-o;P.forEach(({value:s})=>{const i=q(s)/y,h=Math.max(i*e,de);a-=h});let t=Math.PI/2;return P.map(s=>{const i=q(s.value)/y,h=Math.max(i*e,de),n=a*(i/y),m=h+n,g=t,V=t+m;t=V+I;let Z=null;if((!s.version||!Array.isArray(s.version)||s.version.length===0)&&z)Z=[{randomColor:"var(--tooltip-bg-color)",value:z,startAngle:g,endAngle:V,opacity:.2}];else if(s.version&&Array.isArray(s.version)&&s.version.length>0){const J=Ce(s);if(J.length>0){const E=J.length,Ae=(V-g)/E;Z=J.map(($e,we)=>({randomColor:$e.color,value:$e.ver,startAngle:g+we*Ae,endAngle:g+(we+1)*Ae}))}}return{item:s,startAngle:g,endAngle:V,subArcs:Z}})},[P,y,I,de,z]),xe=e=>{$(e),F(!0)},me=()=>{$(null),F(!1)},be=e=>{H({x:e.clientX+10,y:e.clientY+10})},ke=(e,o)=>{L&&G!==e?(ce(o),ye(e),he(e)):(ce(null),ye(""),he(""))},R=3,X=r*2+c+R*2,U=r*2-c-R*2,K=2,B=2,nn=(e,o)=>{var a;if(e.subArcs)return l.jsx("g",{className:"donut-segment version-segment",children:e.subArcs.map((t,s)=>{var m;const i=t.endAngle-t.startAngle,h=Math.abs(i-2*Math.PI)<.01,n=x!==null?x.parentIndex===e.item.originalIndex&&x.subIndex===s:u!==null?u===e.item.originalIndex:!0;if(h)return l.jsxs("g",{className:"sub-arc-group",onMouseEnter:g=>{_({parentIndex:e.item.originalIndex,subIndex:s}),H({x:g.clientX+10,y:g.clientY+10}),F(!0)},onMouseLeave:()=>{_(null),F(!1)},onMouseMove:g=>H({x:g.clientX+10,y:g.clientY+10}),children:[l.jsx("circle",{cx:"0",cy:"0",r,fill:"none",stroke:t.randomColor,strokeWidth:c,strokeOpacity:z?.2:n?1:0,style:{transition:"stroke-opacity 0.5s ease"}}),l.jsx("g",{className:"sub-arc-border-wrapper",style:{opacity:x&&x.parentIndex===e.item.originalIndex&&x.subIndex===s?1:0,transition:"opacity 0.5s ease",overflow:"visible"},children:l.jsx("circle",{cx:"0",cy:"0",r:r+c/2+K+B/2,fill:"none",stroke:t.randomColor,strokeWidth:B,style:{transition:"stroke 0.5s ease"}})})]},s);{const g=Te(0,0,r,t.startAngle,t.endAngle),V=Ee(r+c/2+K,r+c/2+K+B,t.startAngle,t.endAngle),Z=x&&x.parentIndex===e.item.originalIndex&&x.subIndex===s?1:0,J=G===((m=e==null?void 0:e.item)==null?void 0:m.key);return l.jsxs("g",{className:"sub-arc-group",onMouseEnter:E=>{_({parentIndex:e.item.originalIndex,subIndex:s}),H({x:E.clientX+10,y:E.clientY+10}),F(!0)},onMouseLeave:()=>{_(null),F(!1)},onMouseMove:E=>H({x:E.clientX+10,y:E.clientY+10}),children:[l.jsx("path",{d:g,fill:"none",stroke:t.randomColor,strokeWidth:c,style:{strokeOpacity:n?1:.2,transition:"stroke-opacity 0.5s ease"}}),J&&L&&l.jsx("path",{d:g,fill:"none",stroke:"var(--dotted-border-color)",strokeWidth:c,strokeOpacity:.4,pointerEvents:"none"}),l.jsx("g",{className:"sub-arc-border-wrapper",style:{opacity:Z,transition:"opacity 0.5s ease",overflow:"visible"},children:l.jsx("path",{d:V,fill:t.randomColor,pointerEvents:"none"})})]},s)}})},e.item.originalIndex);{const t=e.endAngle-e.startAngle,s=Math.abs(t-2*Math.PI)<.01,i=u!==null?u===e.item.originalIndex:x!==null?x.parentIndex===e.item.originalIndex:!0,h=e.item.color||S[e.item.originalIndex%S.length],n=u===e.item.originalIndex?1:0,m=G===((a=e==null?void 0:e.item)==null?void 0:a.key);if(s)return l.jsxs("g",{className:"donut-segment",children:[l.jsx("circle",{cx:"0",cy:"0",r,fill:"none",stroke:h,strokeWidth:c,onMouseEnter:()=>xe(e.item.originalIndex),onMouseLeave:me,onMouseMove:be,onClick:()=>ke(e.item.key,e.item.originalIndex),style:{cursor:L?"pointer":"default",strokeOpacity:i?1:.2,transition:"stroke-opacity 0.5s ease"}}),m&&L&&l.jsx("circle",{cx:"0",cy:"0",r,fill:"none",strokeWidth:c,stroke:"var(--dotted-border-color)",strokeOpacity:.4,pointerEvents:"none"}),l.jsx("g",{className:"donut-border-wrapper",style:{opacity:n,transition:"opacity 0.5s ease",overflow:"visible"},children:l.jsx("circle",{cx:"0",cy:"0",r:r+c/2+K+B/2,fill:"none",stroke:h,strokeWidth:B,style:{transition:"stroke 0.5s ease"}})})]},e.item.originalIndex);{const g=Te(0,0,r,e.startAngle,e.endAngle);return l.jsxs("g",{className:"donut-segment",children:[l.jsx("path",{d:g,fill:"none",stroke:h,strokeWidth:c,onMouseEnter:()=>xe(e.item.originalIndex),onMouseLeave:me,onMouseMove:be,onClick:()=>ke(e.item.key,e.item.originalIndex),style:{cursor:L?"pointer":"default",strokeOpacity:i?1:.2,transition:"stroke-opacity 0.5s ease"}}),m&&L&&l.jsx("path",{d:g,fill:"none",stroke:"var(--dotted-border-color)",strokeWidth:c,strokeOpacity:.4,pointerEvents:"none"}),l.jsx("g",{className:"donut-border-wrapper",style:{opacity:n,transition:"opacity 0.5s ease",overflow:"visible"},children:l.jsx("path",{d:Ee(r+c/2+K,r+c/2+K+B,e.startAngle,e.endAngle),fill:h,pointerEvents:"none"})})]},e.item.originalIndex)}}},ln=()=>{var e,o,a;if(x!==null){const t=ve.find(i=>i.item.originalIndex===x.parentIndex),s=((o=(e=t==null?void 0:t.subArcs)==null?void 0:e[x.subIndex])==null?void 0:o.value)??"";return l.jsx("div",{className:"ff-donut-chart-tooltip",style:{left:D.x,top:D.y},children:l.jsx(b,{children:`${(a=t==null?void 0:t.item)==null?void 0:a.key}: ${s}`})})}if(u!==null){const t=d.find(s=>s.originalIndex===u);return l.jsxs("div",{className:"ff-donut-chart-tooltip",style:{left:D.x,top:D.y},children:[l.jsx(b,{children:`${t==null?void 0:t.key} : `}),l.jsx(b,{children:v==="memoryLegend"?`${t==null?void 0:t.labelValue} ${t==null?void 0:t.unit}`:t==null?void 0:t.value}),(t==null?void 0:t.version)&&l.jsx(b,{children:`Version: ${t.version.join(", ")}`})]})}return null},tn=(e,o,a)=>{const t=e.length,s=t>6?"ff-count-more":`ff-count-${t}`,i=a==="left"||a==="right",h=(n,m,g)=>Qe?l.jsx(an,{placement:"bottom",title:m,children:n},g):n;switch(o){case"numberLegend":return l.jsx("div",{className:pe("ff-legend-container","ff-number-legend",s,{"ff-side-legend":i}),style:{"--donut-legend-gap":`${re}px`},children:e==null?void 0:e.map(n=>l.jsxs("div",{className:"ff-legend-item ff-d-flex",onMouseEnter:()=>{q(n.value)>0&&$(n.originalIndex)},onMouseLeave:()=>$(null),children:[l.jsxs("div",{className:"ff-legend-item",children:[l.jsxs(b,{fontSize:ae,fontWeight:"semi-bold",className:"ff-legend-value",color:n.color?n.color:S[n.originalIndex%S.length],children:[n.osIcon&&n.osIcon.length>0?l.jsx(cn,{name:n.osIcon}):String(n.labelValue||"00").padStart(2,"0")+" ",O&&(T==null?void 0:T.toUpperCase())]}),l.jsx(b,{fontSize:ie,className:"ff-legend-key",textAlign:"center",children:n.key.length>W?`${n.key.slice(0,W)}...`:n.key})]}),n.version&&n.version.length>0?l.jsx("div",{className:"ff-legend-version-container",children:l.jsx("div",{className:"ff-legend-version-grid",children:Ce(n).map((g,V)=>l.jsxs("div",{onMouseEnter:()=>_({parentIndex:n.originalIndex,subIndex:V}),onMouseLeave:()=>_(null),className:"ff-legend-version-item",children:[l.jsx("div",{className:"ff-legend-version-circle",style:{backgroundColor:g.color}}),l.jsx(b,{fontSize:Xe,children:g.major})]},V))})}):z?l.jsx(b,{textAlign:"center",className:"ff-legend-version-error",fontSize:14,children:z}):null]},n.originalIndex))});case"pillLegend":return l.jsx("div",{className:"ff-legend-container ff-pill-legend",style:{"--donut-legend-gap":`${re}px`,height:Number(De)-(X+fe)},children:e==null?void 0:e.map(n=>{const m=l.jsxs("div",{className:"ff-legend-item",children:[l.jsx("span",{className:"ff-legend-capsule",style:{backgroundColor:n!=null&&n.color?n.color:S[n.originalIndex%S.length],...Je},children:l.jsx(b,{className:"ff-legend-capsule-content",fontSize:ae,children:(n==null?void 0:n.labelValue)===0?"00":n==null?void 0:n.labelValue})}),l.jsx(b,{fontSize:ie,className:"ff-legend-key",children:(n==null?void 0:n.key.length)>W?`${n==null?void 0:n.key.slice(0,W)}...`:n==null?void 0:n.key})]},n.originalIndex);return h(m,n.key,n.originalIndex)})});case"memoryLegend":return l.jsx("div",{className:pe("ff-legend-container","ff-memory-legend",s,{"ff-side-legend":i}),style:{"--donut-legend-gap":`${re}px`},children:e==null?void 0:e.map(n=>{const m=l.jsxs("div",{className:"ff-legend-item",onMouseEnter:()=>{q(n.value)>0&&$(n.originalIndex)},onMouseLeave:()=>$(null),children:[l.jsxs(b,{fontSize:ae,fontWeight:"semi-bold",className:"ff-legend-value",color:n.color?n.color:S[n.originalIndex%S.length],children:[n.labelValue," ",n.unit]}),l.jsx(b,{fontSize:ie,className:"ff-legend-key",textAlign:"center",children:n.key.length>W?`${n.key.slice(0,W)}...`:n.key})]},n.originalIndex);return h(m,n.key,n.originalIndex)})});case"tableLegend":return l.jsx("div",{className:"ff-legend-table-wrapper",style:{height:p},children:l.jsxs("table",{className:"ff-legend-table",children:[l.jsx("thead",{className:"ff-legend-table-thead",children:l.jsxs("tr",{children:[l.jsx("th",{className:"ff-table-header",style:{width:f,textAlign:"left"},children:"Name"}),l.jsx("th",{className:"ff-table-header",style:{textAlign:"left",paddingLeft:"10px"},children:"%"}),l.jsx("th",{className:"ff-table-header",style:{textAlign:"left"},children:"Count"})]})}),l.jsx("tbody",{children:e==null?void 0:e.map(n=>l.jsxs("tr",{className:"ff-legend-item",onMouseEnter:()=>{q(n.value)>0&&$(n.originalIndex)},onMouseLeave:()=>$(null),children:[l.jsxs("td",{className:"ff-legend-name",children:[l.jsxs("span",{className:"ff-legend-capsule",style:{backgroundColor:n.color?n.color:S[n.originalIndex%S.length]},children:[l.jsx(b,{fontSize:10,children:(n==null?void 0:n.value)===0?"00":n.value})," "]}),l.jsx(b,{fontSize:10,children:n.key})]}),l.jsx("td",{className:"ff-legend-percentage",children:n.percentage?n.percentage:typeof n.value=="string"?(parseFloat(n.value)/y*100).toFixed(1):y===0?0:(n.value/y*100).toFixed(1)}),l.jsx("td",{className:"ff-legend-count",children:n.value})]},n.originalIndex))})]})});default:return null}};function ge(e,o,a){const t=e.split(" "),s=[];let i="";return t.forEach(h=>{const n=i?`${i} ${h}`:h;on(n,a)<=o?i=n:(i&&s.push(i),i=h)}),i&&s.push(i),s}function on(e,o){const t=document.createElement("canvas").getContext("2d");if(!t)throw new Error("Unable to get canvas context");return t.font=`${o}px Poppins`,t.measureText(e).width}const Se=e=>{const o=document.createElementNS("http://www.w3.org/2000/svg","text");o.style.fontSize=`${Q}px`,o.style.visibility="hidden";const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.appendChild(o),document.body.appendChild(a),o.textContent=e;let t=o.getComputedTextLength();if(t<=U)return document.body.removeChild(a),e;let s=e;for(;t>U&&s.length>0;)s=s.slice(0,-1),o.textContent=`${s}...`,t=o.getComputedTextLength();return document.body.removeChild(a),`${s}...`};return l.jsxs("div",{className:pe("ff-dashboard-donut-chart-section",{"ff-dashboard-donut-chart-section-table-legend":v==="tableLegend","legend-position-bottom":se==="bottom","legend-position-left":se==="left","ff-overflow-visible":!0}),style:{gap:`${fe}px`},children:[l.jsxs("div",{className:"ff-dashboard-donut-chart-svg-container",children:[l.jsx("svg",{width:X,height:X,viewBox:`0 0 ${X} ${X}`,className:"ff-svg-overflow-visible",children:l.jsxs("g",{transform:`translate(${r+c/2+R}, ${r+c/2+R})`,children:[y===0||P.length===0?l.jsx("circle",{cx:0,cy:0,r,fill:"none",stroke:"var(--tooltip-bg-color)",strokeWidth:c,strokeOpacity:.8,opacity:.2}):ve.map((e,o)=>nn(e)),M&&l.jsx("text",{x:"0",y:"5",className:"ff-svg-label-text",textAnchor:"middle",fill:S[3],style:{fontSize:`${Y}px`},children:ge(A,U,Y).map((e,o,a)=>l.jsx("tspan",{x:"0",dy:o===0?a.length>1?-8:0:24,children:e},o))}),!M&&l.jsxs(l.Fragment,{children:[l.jsx("text",{x:"0",y:Ue,textAnchor:"middle",fill:S[3],style:{fontSize:`${Y}px`},children:ge(v==="tableLegend"&&u!==null&&d.find(e=>e.originalIndex===u)?`${((((Ie=d.find(e=>e.originalIndex===u))==null?void 0:Ie.value)||0)/y*100).toFixed(1)}%`:v==="memoryLegend"?`${en}`:L&&u!==null&&((je=d.find(e=>e.originalIndex===u))!=null&&je.value)?`${(Me=d.find(e=>e.originalIndex===u))==null?void 0:Me.value}`:`${Number.isInteger(y)?y:y==null?void 0:y.toFixed(2)} ${O&&T?T.toUpperCase():""}`,U,Y).map((e,o)=>{var a;return l.jsx("tspan",{x:"0",dy:o===0?0:Y,children:w!==null&&d.find(t=>t.originalIndex===w)?o===0?(a=d.find(t=>t.originalIndex===w))==null?void 0:a.value:null:C||e},o)})}),l.jsx("text",{x:"0",y:Ze,textAnchor:"middle",fill:"var(--text-color)",style:{fontSize:`${Q}px`},children:ge(v==="tableLegend"&&u!==null&&d.find(e=>e.originalIndex===u)?((Le=d.find(e=>e.originalIndex===u))==null?void 0:Le.key)||"":L&&u!==null&&((Ve=d.find(e=>e.originalIndex===u))!=null&&Ve.key)?`${(Ne=d.find(e=>e.originalIndex===u))==null?void 0:Ne.key}`:A,U,Q).map((e,o)=>{var a,t,s;return l.jsx("tspan",{x:"0",dy:o===0?0:Q,fill:w!==null&&((a=d.find(i=>i.originalIndex===w))==null?void 0:a.color)||u!==null&&L&&((t=d.find(i=>i.originalIndex===u))==null?void 0:t.color)||"",children:w!==null&&d.find(i=>i.originalIndex===w)?o===0?Se(((s=d.find(i=>i.originalIndex===w))==null?void 0:s.key)||""):null:Se(e)},o)})})]})]})}),Re&&ln()]}),j&&tn(d,v,se)]})};try{oe.displayName="DashboardDonutChart",oe.__docgenInfo={description:"",displayName:"DashboardDonutChart",props:{radius:{defaultValue:{value:"60"},description:"",name:"radius",required:!1,type:{name:"number"}},lineWidth:{defaultValue:{value:"15"},description:"",name:"lineWidth",required:!1,type:{name:"number"}},statusValues:{defaultValue:{value:"[]"},description:"",name:"statusValues",required:!1,type:{name:"ChartItem[]"}},legendDetailsType:{defaultValue:{value:""},description:"",name:"legendDetailsType",required:!1,type:{name:"string"}},isLegendDetails:{defaultValue:{value:"true"},description:"",name:"isLegendDetails",required:!1,type:{name:"boolean"}},gapAngle:{defaultValue:{value:"0"},description:"",name:"gapAngle",required:!1,type:{name:"number"}},legendType:{defaultValue:{value:"numberLegend"},description:"",name:"legendType",required:!1,type:{name:"enum",value:[{value:'"numberLegend"'},{value:'"pillLegend"'},{value:'"memoryLegend"'},{value:'"tableLegend"'}]}},apiDataLabel:{defaultValue:null,description:"",name:"apiDataLabel",required:!1,type:{name:"string | number"}},showOnlyLabel:{defaultValue:{value:"false"},description:"",name:"showOnlyLabel",required:!1,type:{name:"boolean"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string"}},showUnit:{defaultValue:{value:"true"},description:"",name:"showUnit",required:!1,type:{name:"boolean"}},labelFontSize:{defaultValue:{value:"24"},description:"",name:"labelFontSize",required:!1,type:{name:"number"}},subLabelFontSize:{defaultValue:{value:"14"},description:"",name:"subLabelFontSize",required:!1,type:{name:"number"}},legendPosition:{defaultValue:{value:"bottom"},description:"",name:"legendPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"bottom"'}]}},chartGap:{defaultValue:{value:"0"},description:"",name:"chartGap",required:!1,type:{name:"number"}},legendGap:{defaultValue:{value:"5"},description:"",name:"legendGap",required:!1,type:{name:"number"}},tableWidth:{defaultValue:null,description:"",name:"tableWidth",required:!1,type:{name:"number"}},tableHeight:{defaultValue:{value:"120"},description:"",name:"tableHeight",required:!1,type:{name:"number"}},legendValueFontSize:{defaultValue:{value:"22"},description:"",name:"legendValueFontSize",required:!1,type:{name:"number"}},legendKeyFontSize:{defaultValue:{value:"12"},description:"",name:"legendKeyFontSize",required:!1,type:{name:"number"}},legendWithVersionFontSize:{defaultValue:{value:"12"},description:"",name:"legendWithVersionFontSize",required:!1,type:{name:"number"}},versionErrorText:{defaultValue:null,description:"",name:"versionErrorText",required:!1,type:{name:"string"}},labelYoffSet:{defaultValue:{value:"-5"},description:"",name:"labelYoffSet",required:!1,type:{name:"number"}},subLabelYoffSet:{defaultValue:{value:"20"},description:"",name:"subLabelYoffSet",required:!1,type:{name:"number"}},capsuleStyle:{defaultValue:{value:"{}"},description:"",name:"capsuleStyle",required:!1,type:{name:"{}"}},legendTruncate:{defaultValue:null,description:"",name:"legendTruncate",required:!1,type:{name:"number"}},isLegendToolTip:{defaultValue:{value:"false"},description:"",name:"isLegendToolTip",required:!1,type:{name:"boolean"}},containerHeight:{defaultValue:{value:""},description:"",name:"containerHeight",required:!1,type:{name:"string | number"}},onSelectedStatus:{defaultValue:{value:"(_value) => {}"},description:"",name:"onSelectedStatus",required:!1,type:{name:"((_value: string) => void)"}},selectedStatusKey:{defaultValue:{value:""},description:"",name:"selectedStatusKey",required:!1,type:{name:"string"}},setSelectedStatusKey:{defaultValue:{value:"(_selectedStatusKey) => {}"},description:"",name:"setSelectedStatusKey",required:!1,type:{name:"((_selectedStatusKey: string) => void)"}},isOnClick:{defaultValue:{value:"false"},description:"",name:"isOnClick",required:!1,type:{name:"boolean"}}}}}catch{}const Sn={title:"Components/DashboardDonutChart",component:oe,parameters:{layout:"centered"},tags:["autodocs"]},ee={args:{radius:70,lineWidth:15,tableWidth:500,tableHeight:190,legendDetailsType:"Scripts",isLegendDetails:!0,statusValues:[{key:"Passed",value:0,color:"var(--status-success-text-color)",percentage:""},{key:"failed",value:20,color:"var(--status-rejected-text-color)",percentage:""},{key:"Warning",value:10,color:"var(--status-warning-text-color)",percentage:""},{key:"skipped",value:10,color:"var(--status-button-text-skipped)",percentage:""},{key:"Warning",value:10,color:"var(--status-warning-text-color)",percentage:""},{key:"skipped",value:7,color:"var(--status-button-text-skipped)",percentage:""}],gapAngle:0,legendType:"numberLegend",showOnlyLabel:!1,apiDataLabel:""}},ne={args:{radius:65,lineWidth:15,legendDetailsType:"Memory",isLegendDetails:!0,statusValues:[{key:"Total Available Memory",value:"37.5 KB",color:"var(--status-warning-text-color)"},{key:"Used Memory",value:"72.5 KB",color:"var(--brand-color)"},{key:"Screenshots",value:"30.5 KB",color:"blue"},{key:"Videos",value:"146.7 KB",color:"yellow"},{key:"Program element",value:"2.1 MB",color:"green"}],gapAngle:0,legendType:"memoryLegend",apiDataLabel:""}},le={render:()=>{const[r,f]=N.useState("");return l.jsxs("div",{style:{width:140,height:200},children:[l.jsx(oe,{gapAngle:0,isLegendDetails:!0,legendDetailsType:"Total Defects",legendType:"pillLegend",lineWidth:25,radius:50,statusValues:[{key:"Critical",value:20,color:"var(--status-warning-text-color)"},{key:"Blocker",value:30,color:"var(--brand-color)"},{key:"Minor",value:45,color:"blue"},{key:"Critical",value:17,color:"yellow"},{key:"Text",value:22,color:"green"},{key:"Blockerhgkhhklhkhkhhklkjhkjhkhlhkhkhlhlkhjh",value:30,color:"var(--brand-color)"},{key:"Minor",value:45,color:"blue"},{key:"Critical",value:17,color:"yellow"},{key:"Text",value:22,color:"green"}],legendValueFontSize:8,legendKeyFontSize:10,legendWithVersionFontSize:12,labelFontSize:20,subLabelYoffSet:10,subLabelFontSize:11,apiDataLabel:"",legendGap:4,chartGap:8,capsuleStyle:{width:18,height:14},legendTruncate:5,isLegendToolTip:!0,containerHeight:200,isOnClick:!0,selectedStatusKey:r,setSelectedStatusKey:f,onSelectedStatus:p=>console.log(p)}),l.jsx("button",{onClick:()=>f(""),children:"clear"})]})}},te={args:{radius:70,lineWidth:15,tableWidth:500,tableHeight:190,legendDetailsType:"Total Machines",isLegendDetails:!0,versionErrorText:"",statusValues:[{key:"linux",value:60,color:"var(--status-success-text-color)",version:["182.0.6834.160","132.0.6834.160","122.0.6834.160","172.0.6834.160","152.0.6834.160","145.0.6834.160","192.0.6834.160","112.0.6834.160"],versionColor:["#E18900","#A9E100","#00CAE1","#0040E1","#E100E1","#E10065","#7D0000","#060401"],osIcon:"linux"}],gapAngle:0,legendType:"numberLegend",showOnlyLabel:!1,apiDataLabel:""}};var qe,ze,We;ee.parameters={...ee.parameters,docs:{...(qe=ee.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    radius: 70,
    lineWidth: 15,
    tableWidth: 500,
    tableHeight: 190,
    legendDetailsType: 'Scripts',
    isLegendDetails: true,
    statusValues: [{
      key: 'Passed',
      value: 0,
      color: 'var(--status-success-text-color)',
      percentage: ''
    }, {
      key: 'failed',
      value: 20,
      color: 'var(--status-rejected-text-color)',
      percentage: ''
    }, {
      key: 'Warning',
      value: 10,
      color: 'var(--status-warning-text-color)',
      percentage: ''
    }, {
      key: 'skipped',
      value: 10,
      color: 'var(--status-button-text-skipped)',
      percentage: ''
    }, {
      key: 'Warning',
      value: 10,
      color: 'var(--status-warning-text-color)',
      percentage: ''
    }, {
      key: 'skipped',
      value: 7,
      color: 'var(--status-button-text-skipped)',
      percentage: ''
    }],
    gapAngle: 0,
    legendType: 'numberLegend',
    showOnlyLabel: false,
    apiDataLabel: ''
  }
}`,...(We=(ze=ee.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var _e,Fe,Pe;ne.parameters={...ne.parameters,docs:{...(_e=ne.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    radius: 65,
    lineWidth: 15,
    legendDetailsType: 'Memory',
    isLegendDetails: true,
    statusValues: [{
      key: 'Total Available Memory',
      value: '37.5 KB',
      color: 'var(--status-warning-text-color)'
    }, {
      key: 'Used Memory',
      value: '72.5 KB',
      color: 'var(--brand-color)'
    }, {
      key: 'Screenshots',
      value: '30.5 KB',
      color: 'blue'
    }, {
      key: 'Videos',
      value: '146.7 KB',
      color: 'yellow'
    }, {
      key: 'Program element',
      value: '2.1 MB',
      color: 'green'
    }],
    gapAngle: 0,
    legendType: 'memoryLegend',
    apiDataLabel: ''
  }
}`,...(Pe=(Fe=ne.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ke,Be,Oe;le.parameters={...le.parameters,docs:{...(Ke=le.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const [selectedStatusKey, setSelectedStatusKey] = useState<string>('');
    return <div style={{
      width: 140,
      height: 200
    }}>\r
        <DashboardDonutChart gapAngle={0} isLegendDetails legendDetailsType="Total Defects" legendType="pillLegend" lineWidth={25} radius={50} statusValues={[{
        key: 'Critical',
        value: 20,
        color: 'var(--status-warning-text-color)'
      }, {
        key: 'Blocker',
        value: 30,
        color: 'var(--brand-color)'
      }, {
        key: 'Minor',
        value: 45,
        color: 'blue'
      }, {
        key: 'Critical',
        value: 17,
        color: 'yellow'
      }, {
        key: 'Text',
        value: 22,
        color: 'green'
      }, {
        key: 'Blockerhgkhhklhkhkhhklkjhkjhkhlhkhkhlhlkhjh',
        value: 30,
        color: 'var(--brand-color)'
      }, {
        key: 'Minor',
        value: 45,
        color: 'blue'
      }, {
        key: 'Critical',
        value: 17,
        color: 'yellow'
      }, {
        key: 'Text',
        value: 22,
        color: 'green'
      }]} legendValueFontSize={8} legendKeyFontSize={10} legendWithVersionFontSize={12} labelFontSize={20} subLabelYoffSet={10} subLabelFontSize={11} apiDataLabel={''} legendGap={4} chartGap={8} capsuleStyle={{
        width: 18,
        height: 14
      }} legendTruncate={5} isLegendToolTip={true} containerHeight={200} isOnClick selectedStatusKey={selectedStatusKey} setSelectedStatusKey={setSelectedStatusKey} onSelectedStatus={status => console.log(status)} />\r
        <button onClick={() => setSelectedStatusKey('')}>clear</button>\r
      </div>;
  }
}`,...(Oe=(Be=le.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Ye,Ge,He;te.parameters={...te.parameters,docs:{...(Ye=te.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    radius: 70,
    lineWidth: 15,
    tableWidth: 500,
    tableHeight: 190,
    legendDetailsType: 'Total Machines',
    isLegendDetails: true,
    versionErrorText: '',
    statusValues: [{
      key: 'linux',
      value: 60,
      color: 'var(--status-success-text-color)',
      version: ['182.0.6834.160', '132.0.6834.160', '122.0.6834.160', '172.0.6834.160', '152.0.6834.160', '145.0.6834.160', '192.0.6834.160', '112.0.6834.160'],
      versionColor: ['#E18900', '#A9E100', '#00CAE1', '#0040E1', '#E100E1', '#E10065', '#7D0000', '#060401'],
      osIcon: 'linux'
    }],
    gapAngle: 0,
    legendType: 'numberLegend',
    showOnlyLabel: false,
    apiDataLabel: ''
  }
}`,...(He=(Ge=te.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};const In=["Default","MemoryLegend","SpecificDefect","WithVersion"];export{ee as Default,ne as MemoryLegend,le as SpecificDefect,te as WithVersion,In as __namedExportsOrder,Sn as default};
