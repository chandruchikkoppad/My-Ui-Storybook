import{j as t}from"./jsx-runtime-SKoiH9zj.js";import{r as o}from"./index-DJO9vBfz.js";import{T as Ve}from"./Typography-DdMJCn-_.js";import{H as ke}from"./HighlightText-DXRXqgoy.js";import{I as Q}from"./Icon-BnrH6PuI.js";import{T as I}from"./Tooltip-jHEmaokv.js";import{I as X}from"./Input-BT-svg7L.js";import{S as Ee}from"./Select-BJocvAjy.js";import{u as Ie}from"./useEscKeyEvent-_4Zk5j0a.js";import{u as Ae}from"./UseKeyboardActions-IEqgejH8.js";/* empty css                */import"./index-NZcV-alF.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./Button-CpFgCZ6s.js";import"./usePortalPosition-DKFkIZLt.js";const De=(e,n,a,f)=>{if(e===n)return"No changes were made.";if(e){if(e.length<3)return"Please enter at least 3 characters."}else return"Text is required";return""},s=({label:e,placeholder:n,text:a,showText:f=!0,highlightText:u,customError:h,confirmIcon:A,customErrorCondition:D,cancelIcon:O,variant:xe="textField",onInputChange:L,dropdownData:v=[],className:j,height:ge,isOpen:Ce=!1,confirmAction:M,onClick:q,tooltip:m,onDoubleClick:_,disableEditing:S=!1})=>{var J;const[p,x]=o.useState(Ce??!1),[r,W]=o.useState(a??""),[V,N]=o.useState(((J=v[0])==null?void 0:J.value)??""),[k,l]=o.useState(""),[P,be]=o.useState(!0),[$,H]=o.useState(!1),R=!!(k&&p),E=o.useRef(null),K=o.useRef(null),[d,g]=o.useState(null),Te=Ie("Escape");o.useEffect(()=>()=>{d&&clearTimeout(d)},[d]);const we=()=>{S||(d&&(clearTimeout(d),g(null)),_&&_(),x(!0),l(""))},Fe=()=>{q&&q()},ye=()=>{if(S)return;d&&(clearTimeout(d),g(null));const i=window.setTimeout(()=>{Fe(),g(null)},1e3);g(i)},B=()=>{let i="";r.length===0||r.trim().length===0?i="Please type any text.":r.length<3?i="Please enter at least 3 characters.":D&&(i=h??"Invalid input."),i?l(i):(x(!1),l(""),M&&M(r,V))},z=()=>{var i;W(a??""),N(((i=v[0])==null?void 0:i.value)??""),x(!1),l(""),H(!1)},U=i=>{const c=i.target.value;W(c),be(!1),c.length===0||c.trim().length===0?l("Please type any text."):c.length<3?l("Please enter at least 3 characters."):l(D?h??"Invalid input.":""),H(c!==a),L&&L(c)},G=i=>{if(E.current&&!E.current.contains(i.target)&&K.current!==i.target){const c=De(r,a??"");c&&p?l(c):(x(!1),l(""))}};o.useEffect(()=>(document.addEventListener("click",G),()=>{document.removeEventListener("click",G)}),[r]),Te(z);function ve(i){B()}return Ae([{key:"Enter",action:()=>ve()}]),t.jsxs("div",{className:"ff-label-edit-text-field",ref:E,children:[p?t.jsxs("div",{className:"ff-label-text-field",children:[xe==="textFieldWithDropdown"?t.jsxs("div",{className:`ff-label-text-field-with-dropdown ${p?"open":""}`,style:{height:ge},children:[t.jsx(X,{name:"input",type:"text",label:e||"",disabled:!1,error:R,placeholder:n||"",value:r,onChange:U,className:`${j} 
                
               ${$?"modified":""}`}),t.jsx(Ee,{label:"",optionsList:v,selectedOption:{value:V,label:V},onChange:i=>N(i.value)})]}):t.jsx("div",{className:"ff-label-text-field-without-dropdown",children:t.jsx(X,{name:"input",type:"text",label:e||"",disabled:!1,error:R,placeholder:n||"",value:r,onChange:U,className:`${j} 
               
               ${$?"modified":""}`})}),t.jsxs("div",{className:"ff-icon-container",children:[A&&t.jsx(I,{title:"Confirm",placement:"bottom",children:t.jsx(Q,{color:"var(--label-edit-confirm-icon)",height:20,width:20,name:A.name,disabled:P,className:`${P?"disabled-confirm-icon":"confirm-icon"}`,onClick:B})}),O&&t.jsx(I,{title:"Cancel",placement:"bottom",children:t.jsx(Q,{color:"var(--label-edit-cancel-icon)",height:12,width:20,name:O.name,className:"cancel-icon",onClick:z,ref:K})})]})]}):t.jsx(I,{title:m!=null&&m.tooltipTitle?m==null?void 0:m.tooltipTitle:"",placement:"bottom",children:f&&t.jsx("span",{className:"display-text",onDoubleClick:we,role:"button",onClick:ye,children:t.jsx(ke,{text:r,highlight:u})})}),k&&p&&t.jsx(Ve,{as:"p",fontSize:8,className:"error-text",children:k})]})};try{s.displayName="LabelEditTextField",s.__docgenInfo={description:"",displayName:"LabelEditTextField",props:{label:{defaultValue:null,description:"Label text displayed above the input field.",name:"label",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Initial text displayed in the input field.",name:"text",required:!1,type:{name:"string"}},showText:{defaultValue:{value:"true"},description:"",name:"showText",required:!1,type:{name:"boolean"}},highlightText:{defaultValue:null,description:"Text to be highlighted within the displayed text, if provided.",name:"highlightText",required:!1,type:{name:"string"}},customError:{defaultValue:null,description:"Custom error message to be displayed, if applicable.",name:"customError",required:!1,type:{name:"string"}},confirmIcon:{defaultValue:null,description:"Confirm icon properties including icon name and click handler.",name:"confirmIcon",required:!1,type:{name:"IconProps"}},cancelIcon:{defaultValue:null,description:"Cancel icon properties including icon name and click handler.",name:"cancelIcon",required:!1,type:{name:"IconProps"}},variant:{defaultValue:{value:"textField"},description:"Type of input field - standard text field or text field with a dropdown.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"textFieldWithDropdown"'},{value:'"textField"'}]}},dropdownData:{defaultValue:{value:"[]"},description:"Array of dropdown options used if the dropdown variant is selected.",name:"dropdownData",required:!1,type:{name:"DropdownOption[]"}},width:{defaultValue:null,description:"Width of the input field component.",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height of the input field component.",name:"height",required:!1,type:{name:"string"}},confirmAction:{defaultValue:null,description:"Function called when confirming input changes, with input and dropdown values as arguments.",name:"confirmAction",required:!1,type:{name:"((inputValue: string, dropdownValue: string) => void)"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},customErrorCondition:{defaultValue:null,description:"for conditionally handle custom error",name:"customErrorCondition",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onInputChange:{defaultValue:null,description:"Function called when every input character got changed",name:"onInputChange",required:!1,type:{name:"((newInputValue: string) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"{ tooltipTitle?: string; tooltipPlacement?: string; } | undefined"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"(() => void)"}},disableEditing:{defaultValue:{value:"false"},description:"",name:"disableEditing",required:!1,type:{name:"boolean"}}}}}catch{}const Qe={title:"Components/LabelEditTextField",component:s,parameters:{layout:"centered"},tags:["autodocs"]},C={render:()=>{const e=n=>n;return t.jsx(s,{label:"Add Module",text:"Verify The Function Of Categories For",confirmIcon:{name:"update_icon",onClick:()=>{}},cancelIcon:{name:"close",onClick:()=>{}},height:"22px",confirmAction:e,onClick:()=>{},tooltip:{tooltipTitle:"text",tooltipPlacement:"bottom"}})}},b={render:()=>{const e=n=>n;return t.jsx(s,{text:"Verify The Function Of Categories For",confirmIcon:{name:"update_icon",onClick:()=>{}},cancelIcon:{name:"close",onClick:()=>{}},width:"300px",height:"22px",confirmAction:e})}},T={render:()=>{const e=n=>n;return t.jsx(s,{text:"Verify The Function Of Categories For",confirmIcon:{name:"update_icon",onClick:()=>{}},cancelIcon:{name:"close",onClick:()=>{}},width:"300px",height:"22px",isOpen:!0,confirmAction:e})}},w={render:()=>{const e=(n,a)=>({inputValue:n,dropdownValue:a});return t.jsx(s,{label:"Add Module",text:"Verify The Function Of Categories For",confirmIcon:{name:"update_icon",onClick:()=>{}},cancelIcon:{name:"close",onClick:()=>{}},variant:"textFieldWithDropdown",dropdownData:[{id:1,value:"web",label:"Web & Mobile"},{id:2,value:"desktop",label:"Desktop"}],width:"300px",height:"22px",confirmAction:e})}},F={render:()=>{const e=(n,a)=>({inputValue:n,dropdownValue:a});return t.jsx(s,{label:"Add Module",text:"Verify The Function Of Categories For",highlightText:"The Function",confirmIcon:{name:"update_icon",onClick:()=>{}},cancelIcon:{name:"close",onClick:()=>{}},variant:"textFieldWithDropdown",dropdownData:[{id:1,value:"web",label:"Web & Mobile"},{id:2,value:"desktop",label:"Desktop"}],width:"400px",height:"22px",confirmAction:e})}},y={render:()=>{const[e,n]=o.useState("Verify The"),a=(u,h)=>{n(u),console.info("Confirmed input value and dropdown value:",u,h)},f=u=>{n(u)};return console.log("demoText: ",e),t.jsx(s,{label:"Add Module",text:e,highlightText:"The Function",confirmIcon:{name:"update_icon",onClick:()=>{}},cancelIcon:{name:"close",onClick:()=>{}},width:"400px",height:"22px",confirmAction:a,onInputChange:f,isOpen:!0,className:"custom-edit-text-field",showText:!1,customError:"text is too long",customErrorCondition:(e==null?void 0:e.length)>10})}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return inputValue;
    };
    return <LabelEditTextField label="Add Module" text="Verify The Function Of Categories For" //it might be state
    confirmIcon={{
      name: 'update_icon',
      onClick: () => {}
    }} cancelIcon={{
      name: 'close',
      onClick: () => {}
    }} height="22px" confirmAction={handleConfirmAction} onClick={() => {}} tooltip={{
      tooltipTitle: 'text',
      tooltipPlacement: 'bottom'
    }} />;
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ie;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return inputValue;
    };
    return <LabelEditTextField text="Verify The Function Of Categories For" //it might be state
    confirmIcon={{
      name: 'update_icon',
      onClick: () => {}
    }} cancelIcon={{
      name: 'close',
      onClick: () => {}
    }} width="300px" height="22px" confirmAction={handleConfirmAction} />;
  }
}`,...(ie=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,ae,le;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return inputValue;
    };
    return <LabelEditTextField text="Verify The Function Of Categories For" //it might be state
    confirmIcon={{
      name: 'update_icon',
      onClick: () => {}
    }} cancelIcon={{
      name: 'close',
      onClick: () => {}
    }} width="300px" height="22px" isOpen={true} confirmAction={handleConfirmAction} />;
  }
}`,...(le=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var re,ce,se;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const handleConfirmAction = (inputValue: string, dropdownValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return {
        inputValue,
        dropdownValue
      };
    };
    return <LabelEditTextField label="Add Module" text="Verify The Function Of Categories For" confirmIcon={{
      name: 'update_icon',
      onClick: () => {}
    }} cancelIcon={{
      name: 'close',
      onClick: () => {}
    }} variant="textFieldWithDropdown" dropdownData={[{
      id: 1,
      value: 'web',
      label: 'Web & Mobile'
    }, {
      id: 2,
      value: 'desktop',
      label: 'Desktop'
    }]} width="300px" height="22px" confirmAction={handleConfirmAction} />;
  }
}`,...(se=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var de,ue,me;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const handleConfirmAction = (inputValue: string, dropdownValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      return {
        inputValue,
        dropdownValue
      };
    };
    return <LabelEditTextField label="Add Module" text="Verify The Function Of Categories For" highlightText="The Function" confirmIcon={{
      name: 'update_icon',
      onClick: () => {}
    }} cancelIcon={{
      name: 'close',
      onClick: () => {}
    }} variant="textFieldWithDropdown" dropdownData={[{
      id: 1,
      value: 'web',
      label: 'Web & Mobile'
    }, {
      id: 2,
      value: 'desktop',
      label: 'Desktop'
    }]} width="400px" height="22px" confirmAction={handleConfirmAction} />;
  }
}`,...(me=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,fe,he;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [demoText, setDemoText] = useState('Verify The');
    const handleConfirmAction = (inputValue: string, dropdownValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      setDemoText(inputValue);
      console.info('Confirmed input value and dropdown value:', inputValue, dropdownValue);
    };
    const handleInputChange = (newInputValue: string) => {
      setDemoText(newInputValue); // Update parent state
    };
    console.log('demoText: ', demoText);
    return <LabelEditTextField label="Add Module" text={demoText} highlightText="The Function" confirmIcon={{
      name: 'update_icon',
      onClick: () => {}
    }} cancelIcon={{
      name: 'close',
      onClick: () => {}
    }} width="400px" height="22px" confirmAction={handleConfirmAction} onInputChange={handleInputChange} isOpen={true} className="custom-edit-text-field" showText={false} customError="text is too long" customErrorCondition={demoText?.length > 10} />;
  }
}`,...(he=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const Xe=["textField","textFieldWithOutLabel","openTextFieldWithOutLabel","textFieldWithDropdown","textFieldWithHighlight","openLabelEditTextField"];export{Xe as __namedExportsOrder,Qe as default,y as openLabelEditTextField,T as openTextFieldWithOutLabel,C as textField,w as textFieldWithDropdown,F as textFieldWithHighlight,b as textFieldWithOutLabel};
