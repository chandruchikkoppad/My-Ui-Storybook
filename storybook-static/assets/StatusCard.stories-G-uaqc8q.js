import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as w}from"./index-DJO9vBfz.js";import{T as r}from"./Typography-DdMJCn-_.js";import{I as le}from"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";const D=({icon:o,status:s,count:a,text:c,style:t={width:"196.4px"},resetToggle:n,onSelectedStatus:C=i=>{}})=>{const[i,k]=w.useState(!1),l=["total defects","defect density","open defects","closed defects","quality score"],re=l.includes(s.toLowerCase()),oe=l.includes(s.toLowerCase()),ce=v=>{l.includes(v.toLowerCase())||(k(!0),C(v))};w.useEffect(()=>{k(!n)},[n]);const ie=()=>s.toLowerCase()==="defect density"?e.jsxs(e.Fragment,{children:[a.toString().padStart(2,"0"),e.jsx(r,{fontSize:"15px",fontWeight:"semi-bold",children:"/ Modules"})]}):s.toLowerCase()==="quality score"?`${parseFloat(a.toString()).toFixed(2)}%`:a.toString().padStart(2,"0");return e.jsxs("div",{className:`ff-card-container ${s.toLowerCase()} ${i?"toggled":""}`,style:t,onClick:()=>ce(s),children:[e.jsxs("div",{className:"ff-status-bar",children:[e.jsx("div",{children:e.jsx(le,{name:o,height:20,width:20,hoverEffect:!1})}),!l.includes(s.toLowerCase())&&e.jsx(r,{fontWeight:"semi-bold",fontSize:"10px",textAlign:"center",lineHeight:"15px",className:"ff-status-text",as:"div",children:s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()})]}),e.jsx("div",{className:`ff-content ${oe?"red-background":""}`,children:re?e.jsxs(e.Fragment,{children:[e.jsx(r,{fontWeight:"semi-bold",fontSize:"10px",className:"ff-text",lineHeight:"15px",color:"var(--ff-chip-text-color)",children:c}),e.jsx(r,{fontWeight:"semi-bold",fontSize:"24px",className:"ff-number",lineHeight:"36px",children:ie()})]}):e.jsxs(e.Fragment,{children:[e.jsx(r,{fontWeight:"semi-bold",fontSize:"24px",className:"ff-number",lineHeight:"24px",color:i?"var(--base-bg-color)":"",children:a.toString().padStart(2,"0")}),e.jsx(r,{className:"ff-text",lineHeight:"18px",color:i?"var(--base-bg-color)":"var(--ff-chip-text-color)",children:c})]})})]})};try{D.displayName="StatusCard",D.__docgenInfo={description:"",displayName:"StatusCard",props:{icon:{defaultValue:null,description:"The icon to display in the card",name:"icon",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"The status of the card (Passed, Failed, Warning, Skipped, Flaky)",name:"status",required:!0,type:{name:"enum",value:[{value:'"Passed"'},{value:'"Failed"'},{value:'"Warning"'},{value:'"Skipped"'},{value:'"Flaky"'},{value:'"Total Defects"'},{value:'"Defect Density"'},{value:'"Open Defects"'},{value:'"Closed Defects"'},{value:'"Quality Score"'}]}},count:{defaultValue:null,description:"The number displayed in the card",name:"count",required:!0,type:{name:"string | number"}},text:{defaultValue:null,description:"The description text displayed at the bottom of the card",name:"text",required:!0,type:{name:"string"}},style:{defaultValue:{value:"{ width: '196.4px' }"},description:"Inline Styling",name:"style",required:!1,type:{name:"CSSProperties"}},handleToggleStatus:{defaultValue:null,description:"toggle update",name:"handleToggleStatus",required:!1,type:{name:"((_status: boolean) => void)"}},resetToggle:{defaultValue:null,description:"make Card Select false",name:"resetToggle",required:!1,type:{name:"boolean"}},onSelectedStatus:{defaultValue:{value:"(_status) => {}"},description:"call back",name:"onSelectedStatus",required:!1,type:{name:"((_status: string) => void)"}}}}}catch{}const ge={title:"Components/Card",component:D,tags:["autodocs"]},d={args:{icon:"passed_status_icon",status:"Passed",count:66,text:"Scripts were passed all the time.",style:{width:"200px"}}},u={args:{icon:"failed_status_icon",status:"Failed",count:33,text:"Scripts were failed all the time."}},p={args:{icon:"warning_status_icon",status:"Warning",count:22,text:"Scripts were marked as warning."}},m={args:{icon:"skipped_status_icon",status:"Skipped",count:11,text:"Scripts were not part of any execution."}},f={args:{icon:"flaky_status_icon",status:"Flaky",count:44,text:"Scripts were flaky in their behavior."}},g={args:{icon:"total_defects_status_icon",status:"Total Defects",count:66,text:"Total Defects"}},x={args:{icon:"defect_density_icon",status:"Defect Density",count:33,text:"Defect Density"}},S={args:{icon:"open_defects_icon",status:"Open Defects",count:22,text:"Open Defects"}},y={args:{icon:"close_defects_icon",status:"Closed Defects",count:11,text:"Closed Defects"}},h={args:{icon:"quality_score_icon",status:"Quality Score",count:44,text:"Quality Score"}},_={render:()=>{const[o,s]=w.useState(0),a=[{name:"Passed",count:6,text:"Scripts were Passed all the time"},{name:"Failed",count:6,text:"Scripts were Failed all the time"},{name:"Warning",count:6,text:"Scripts were Warning all the time"},{name:"Skipped",count:6,text:"Scripts were Skip all the time"},{name:"Flaky",count:6,text:"Scripts were Flaky all the time"},{name:"Total Defects",count:66,text:"Total Defects"},{name:"Defect Density",count:33,text:"Defect Density"},{name:"Open Defects",count:22,text:"Open Defects"},{name:"Closed Defects",count:11,text:"Close Defects"},{name:"Quality Score",count:4,text:"Quality Score"}],c=(t,n)=>{s(n),console.log(`Selected status: ${t}`)};return e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:a.map((t,n)=>e.jsx("div",{children:e.jsx(D,{count:t==null?void 0:t.count,icon:`${t.name.toLowerCase().split(" ").join("_")}_status_icon`,status:t==null?void 0:t.name,text:t.text,onSelectedStatus:C=>c(C,n),resetToggle:o!==n})},n))})}};var T,F,b;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    icon: 'passed_status_icon',
    status: 'Passed',
    count: 66,
    text: 'Scripts were passed all the time.',
    style: {
      width: '200px'
    }
  }
}`,...(b=(F=d.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var j,W,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: 'failed_status_icon',
    status: 'Failed',
    count: 33,
    text: 'Scripts were failed all the time.'
  }
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var O,P,Q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    icon: 'warning_status_icon',
    status: 'Warning',
    count: 22,
    text: 'Scripts were marked as warning.'
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var L,N,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    icon: 'skipped_status_icon',
    status: 'Skipped',
    count: 11,
    text: 'Scripts were not part of any execution.'
  }
}`,...(H=(N=m.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var V,$,z;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    icon: 'flaky_status_icon',
    status: 'Flaky',
    count: 44,
    text: 'Scripts were flaky in their behavior.'
  }
}`,...(z=($=f.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var A,E,I;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: 'total_defects_status_icon',
    status: 'Total Defects',
    count: 66,
    text: 'Total Defects'
  }
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var B,M,R;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: 'defect_density_icon',
    status: 'Defect Density',
    count: 33,
    text: 'Defect Density'
  }
}`,...(R=(M=x.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var U,G,J;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    icon: 'open_defects_icon',
    status: 'Open Defects',
    count: 22,
    text: 'Open Defects'
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,X,Y;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    icon: 'close_defects_icon',
    status: 'Closed Defects',
    count: 11,
    text: 'Closed Defects'
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    icon: 'quality_score_icon',
    status: 'Quality Score',
    count: 44,
    text: 'Quality Score'
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ne,ae;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [toggledCard, setToggledCard] = useState<number | null>(0); //initially selected the card

    const data: {
      name: CardProps['status'];
      count: number;
      text: string;
    }[] = [{
      name: 'Passed',
      count: 6,
      text: 'Scripts were Passed all the time'
    }, {
      name: 'Failed',
      count: 6,
      text: 'Scripts were Failed all the time'
    }, {
      name: 'Warning',
      count: 6,
      text: 'Scripts were Warning all the time'
    }, {
      name: 'Skipped',
      count: 6,
      text: 'Scripts were Skip all the time'
    }, {
      name: 'Flaky',
      count: 6,
      text: 'Scripts were Flaky all the time'
    }, {
      name: 'Total Defects',
      count: 66,
      text: 'Total Defects'
    }, {
      name: 'Defect Density',
      count: 33,
      text: 'Defect Density'
    }, {
      name: 'Open Defects',
      count: 22,
      text: 'Open Defects'
    }, {
      name: 'Closed Defects',
      count: 11,
      text: 'Close Defects'
    }, {
      name: 'Quality Score',
      count: 4,
      text: 'Quality Score'
    }];
    const onHandleStatus = (status: string, index: number) => {
      setToggledCard(index);
      console.log(\`Selected status: \${status}\`);
    };
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>\r
        {data.map((row, index) => <div key={index}>\r
            <StatusCard count={row?.count} icon={\`\${row.name.toLowerCase().split(' ').join('_')}_status_icon\`} status={row?.name} text={row.text} onSelectedStatus={status => onHandleStatus(status, index)} resetToggle={toggledCard !== index} />\r
          </div>)}\r
      </div>;
  }
}`,...(ae=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const xe=["Passed","Failed","Warning","Skipped","Flaky","TotalDefect","DefectDensity","OpenDefects","ClosedDefects","QualityScore","AllCards"];export{_ as AllCards,y as ClosedDefects,x as DefectDensity,u as Failed,f as Flaky,S as OpenDefects,d as Passed,h as QualityScore,m as Skipped,g as TotalDefect,p as Warning,xe as __namedExportsOrder,ge as default};
