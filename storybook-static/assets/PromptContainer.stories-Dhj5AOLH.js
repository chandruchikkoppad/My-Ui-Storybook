import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as P}from"./index-DJO9vBfz.js";import{I as h}from"./Icon-BnrH6PuI.js";import{T as q}from"./Tooltip-jHEmaokv.js";import{T as o}from"./Typography-DdMJCn-_.js";import"./index-NZcV-alF.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const c=({id:t=0,serialNumber:s,activeId:d,setActiveId:m,children:p,onIconClick:u,numberChildren:i,onClick:x,onNextClick:I,onPreviousClick:N})=>{const j=[{action:"delete",title:"Delete",color:"var(--ff-delete-button-attachment)"},{action:"edit",title:"Edit",color:"var(--label-edit-text-label-color)"},{action:"regenerate",title:"Regenerate",color:"var(--label-edit-text-label-color)"}],T=()=>{m(t),x()},f=(n,r)=>{n.stopPropagation(),r()},_=(n,r)=>{n.stopPropagation(),u(r)};return e.jsxs("div",{className:`ff-prompt-container-Block ${d===t?"active":"inactive"}`,onClick:T,children:[e.jsx("div",{className:"ff--prompt-header",children:e.jsx(o,{as:"div",className:"ff-prompt-number-bg-color",color:"var(--table-column-text-color)",children:s})}),e.jsx("div",{className:"ff-prompt-content",children:p}),e.jsxs("div",{className:"ff-prompt-icons",children:[e.jsx("div",{className:"ff-prompt-icons-leftside",children:j.map(n=>e.jsx(q,{title:n.title,placement:"bottom",children:e.jsx(h,{name:n.action,color:n.color,hoverEffect:!0,onClick:r=>_(r,n.action)})}))}),e.jsxs("div",{className:"ff-prompt-icons-rightside",children:[e.jsx(h,{className:"ff-prompt-icons-style",name:"arrow_left_accordian",color:"var(--table-column-text-color)",width:12,height:12,onClick:n=>f(n,N)}),i,e.jsx(h,{className:"ff-prompt-icons-style",name:"arrow_right_icon",color:"var(--table-column-text-color)",width:12,height:12,onClick:n=>f(n,I)})]})]})]})};try{c.displayName="PromptContainer",c.__docgenInfo={description:"",displayName:"PromptContainer",props:{id:{defaultValue:{value:"0"},description:"",name:"id",required:!1,type:{name:"string | number | null"}},serialNumber:{defaultValue:null,description:"",name:"serialNumber",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!0,type:{name:"(action: string) => void"}},numberChildren:{defaultValue:null,description:"",name:"numberChildren",required:!0,type:{name:"ReactNode"}},onNextClick:{defaultValue:null,description:"",name:"onNextClick",required:!0,type:{name:"() => void"}},onPreviousClick:{defaultValue:null,description:"",name:"onPreviousClick",required:!0,type:{name:"() => void"}},activeId:{defaultValue:null,description:"",name:"activeId",required:!1,type:{name:"string | number | null"}},setActiveId:{defaultValue:null,description:"",name:"setActiveId",required:!0,type:{name:"(id: string | number | null) => void"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Components/PromptContainer",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onIconClick:{action:"iconClicked"},serialNumber:{control:"number"}}},a={args:{id:1,serialNumber:1,activeId:null,setActiveId:t=>{},children:e.jsx(o,{children:"This is the content of the container. Open browser, go to Flipkart, click on the login link, and enter credentials. click on the login link, and enter credentials. click on the login link, and enter credentials. click on the login link, and enter credentials."}),onIconClick:t=>{t==="delete"?alert("delete action"):t==="edit"?alert("edit action"):t==="regenerate"&&alert("regenerate action")},numberChildren:e.jsx(o,{children:" 1/1 "})}},l={render:()=>{const[t,s]=P.useState(0),d=i=>{i==="delete"?alert("delete action"):i==="edit"?alert("edit action"):i==="regenerate"&&alert("regenerate action")},m=()=>{alert("Main Container Clicked")},p=()=>{alert("next Click")},u=()=>{alert("previous Click")};return e.jsx("div",{children:e.jsx(c,{id:1,serialNumber:1,activeId:t,setActiveId:s,onClick:m,onIconClick:d,numberChildren:e.jsx(o,{children:" 1/3 "}),onNextClick:()=>p(),onPreviousClick:u,children:e.jsx(o,{children:"This is the content of the first container. It can be dynamic, like text, images, or other content.This is the content of the first container. It can be dynamic, like text, images, or other content."})})})}};var k,C,g;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 1,
    serialNumber: 1,
    activeId: null,
    setActiveId: (id: string | number | null) => {},
    children: <Typography>\r
        This is the content of the container. Open browser, go to Flipkart,\r
        click on the login link, and enter credentials. click on the login link,\r
        and enter credentials. click on the login link, and enter credentials.\r
        click on the login link, and enter credentials.\r
      </Typography>,
    onIconClick: (action: string) => {
      if (action === 'delete') {
        alert('delete action');
      } else if (action === 'edit') {
        alert('edit action');
      } else if (action === 'regenerate') {
        alert('regenerate action');
      }
    },
    numberChildren: <Typography> 1/1 </Typography>
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var v,y,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [activeId, setActiveId] = useState<number | null | string>(0);
    const handleIconClick = (action: string) => {
      if (action === 'delete') {
        alert('delete action');
      } else if (action === 'edit') {
        alert('edit action');
      } else if (action === 'regenerate') {
        alert('regenerate action');
      }
    };
    const handleContainerClick = () => {
      alert('Main Container Clicked');
    };
    const handleRightClick = () => {
      alert('next Click');
    };
    const handleLeftClick = () => {
      alert('previous Click');
    };
    return <div>\r
        <PromptContainer id={1} serialNumber={1} activeId={activeId} setActiveId={setActiveId} onClick={handleContainerClick} onIconClick={handleIconClick} numberChildren={<Typography> 1/3 </Typography>} onNextClick={() => handleRightClick()} onPreviousClick={handleLeftClick}>\r
          <Typography>\r
            This is the content of the first container. It can be dynamic, like\r
            text, images, or other content.This is the content of the first\r
            container. It can be dynamic, like text, images, or other content.\r
          </Typography>\r
        </PromptContainer>\r
      </div>;
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const M=["Default","Controlled"];export{l as Controlled,a as Default,M as __namedExportsOrder,F as default};
