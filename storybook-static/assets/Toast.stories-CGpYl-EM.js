import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as f}from"./index-DJO9vBfz.js";import{T as t}from"./Toast-CWcBRmbh.js";import{B as o}from"./Button-CpFgCZ6s.js";import"./index-CFN9ZEHn.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./ThemeProvider-D5XEyBwi.js";/* empty css                */const x={title:"Components/Toast",component:t,parameters:{layout:"centered"},tags:["autodocs"]},s={isOpen:!1,toastTitle:"Success",toastMessage:"Operation completed successfully!",closeButtonLabel:"x",displayDuration:3e3},n={args:{...s},render:()=>{const[a,g]=f.useState({success:!1,info:!1,confirm:!1,warning:!1,alert:!1,error:!1}),r=i=>{g(l=>({...l,[i]:!l[i]}))};return e.jsxs("div",{className:"fireflink-stories-toaster-container",children:[e.jsxs("div",{className:"fireflink-stories-toaster-container-row",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"primary",label:"SUCCESS",onClick:()=>r("success")}),e.jsx(t,{...s,isOpen:a.success,variant:"success",toastTitle:"Success!",toastMessage:"Variable name requested for review successfully.",onCancelClick:()=>r("success")})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"secondary",label:"Information",onClick:()=>r("info")}),e.jsx(t,{...s,isOpen:a.info,variant:"info",toastTitle:"Info!",toastMessage:"Data updated successfully.",onCancelClick:()=>r("info")})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"delete",label:"Confirmation",onClick:()=>r("confirm")}),e.jsx(t,{...s,isOpen:a.confirm,variant:"confirm",toastTitle:"Delete Confirmation",toastMessage:"Are you sure you want to delete this data?",onCancelClick:()=>r("confirm")})]})]}),e.jsxs("div",{className:"fireflink-stories-toaster-container-row",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"primary",label:"WARNING",onClick:()=>r("warning")}),e.jsx(t,{...s,isOpen:a.warning,variant:"warning",toastTitle:"Warning!",toastMessage:"Action might have consequences.",onCancelClick:()=>r("warning")})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"primary",label:"Alert",onClick:()=>r("alert")}),e.jsx(t,{...s,isOpen:a.alert,variant:"alert",toastTitle:"Alert!",toastMessage:"Immediate action required!",onCancelClick:()=>r("alert")})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"delete",label:"ERROR",onClick:()=>r("error")}),e.jsx(t,{...s,isOpen:a.error,variant:"danger",toastTitle:"Error!",toastMessage:"An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.",onCancelClick:()=>r("error")})]})]})]})}};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: () => {
    const [toasts, setToasts] = useState({
      success: false,
      info: false,
      confirm: false,
      warning: false,
      alert: false,
      error: false
    });
    const handleToastToggle = (key: keyof typeof toasts) => {
      setToasts(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };
    return <div className="fireflink-stories-toaster-container">\r
        <div className="fireflink-stories-toaster-container-row">\r
          <div>\r
            <Button variant="primary" label="SUCCESS" onClick={() => handleToastToggle('success')} />\r
            <Toaster {...defaultArgs} isOpen={toasts.success} variant="success" toastTitle="Success!" toastMessage="Variable name requested for review successfully." onCancelClick={() => handleToastToggle('success')} />\r
          </div>\r
          <div>\r
            <Button variant="secondary" label="Information" onClick={() => handleToastToggle('info')} />\r
            <Toaster {...defaultArgs} isOpen={toasts.info} variant="info" toastTitle="Info!" toastMessage="Data updated successfully." onCancelClick={() => handleToastToggle('info')} />\r
          </div>\r
          <div>\r
            <Button variant="delete" label="Confirmation" onClick={() => handleToastToggle('confirm')} />\r
            <Toaster {...defaultArgs} isOpen={toasts.confirm} variant="confirm" toastTitle="Delete Confirmation" toastMessage="Are you sure you want to delete this data?" onCancelClick={() => handleToastToggle('confirm')} />\r
          </div>\r
        </div>\r
        <div className="fireflink-stories-toaster-container-row">\r
          <div>\r
            <Button variant="primary" label="WARNING" onClick={() => handleToastToggle('warning')} />\r
            <Toaster {...defaultArgs} isOpen={toasts.warning} variant="warning" toastTitle="Warning!" toastMessage="Action might have consequences." onCancelClick={() => handleToastToggle('warning')} />\r
          </div>\r
          <div>\r
            <Button variant="primary" label="Alert" onClick={() => handleToastToggle('alert')} />\r
            <Toaster {...defaultArgs} isOpen={toasts.alert} variant="alert" toastTitle="Alert!" toastMessage="Immediate action required!" onCancelClick={() => handleToastToggle('alert')} />\r
          </div>\r
          <div>\r
            <Button variant="delete" label="ERROR" onClick={() => handleToastToggle('error')} />\r
            <Toaster {...defaultArgs} isOpen={toasts.error} variant="danger" toastTitle="Error!" toastMessage="An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request.An error occurred while processing your request." onCancelClick={() => handleToastToggle('error')} />\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const j=["Controlled"];export{n as Controlled,j as __namedExportsOrder,x as default};
