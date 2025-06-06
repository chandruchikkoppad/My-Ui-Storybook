import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as _}from"./index-DJO9vBfz.js";/* empty css                */import{I as M}from"./Icon-BnrH6PuI.js";import{c as i}from"./index-NZcV-alF.js";import{T as N}from"./Typography-DdMJCn-_.js";const s=_.forwardRef(({variant:e="primary",backgroundColor:d,border:f,size:m="small",onClick:c,onCopy:p,label:y,disabled:b=!1,children:v=null,type:h="button",className:g="",style:V={},iconName:t,iconPosition:o="left",isChooseFile:n=!1,buttonWidth:q="auto",buttonHeight:C="auto",handleCloseIcon:l,selectedFile:r,fontSize:x=10,typographyStyle:k,iconColor:B="",...S},E)=>{const u=()=>t&&a.jsx("div",{onClick:j=>{t==="close"&&(j.stopPropagation(),l==null||l())},children:a.jsx(M,{height:n?14:8,width:n?14:8,color:t==="close"?"var(--ff-delete-button-attachment)":e==="danger"?"var(--status-rejected-text-color)":B||(e==="primary"?"var(--primary-icon-color)":"var(--secondary-icon-color)"),name:t,className:"ff-button-icon"})});return a.jsxs("button",{type:h,ref:E,className:i("ff-button",`ff-button--${m}`,`ff-button--${e}`,`${g}`,{"ff-button-choose-file":n},{"ff-button-choose-file-text":r}),style:{backgroundColor:d,border:f,...V,width:q,height:C},onClick:c,onCopy:p,disabled:b,...S,children:[o==="left"&&u(),a.jsx(N,{fontSize:x,style:{...k},fontWeight:"semi-bold",className:i(`ff-button-${e}--text`,{"ff-button-choose-file-text":r}),children:y}),o==="right"&&u(),v]})});try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:{value:"null"},description:"Button content",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Button id",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"Variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"delete"'},{value:'"warning"'},{value:'"custom"'},{value:'"danger"'}]}},fontSize:{defaultValue:{value:"10"},description:"create custom button font size .",name:"fontSize",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Give icon name availble in storybook that to be on left side of button",name:"iconName",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Classname for the button",name:"className",required:!1,type:{name:"string"}},iconColor:{defaultValue:{value:""},description:"",name:"iconColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"What border color to use",name:"border",required:!1,type:{name:"string | number"}},size:{defaultValue:{value:"small"},description:"What border color to use",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},type:{defaultValue:{value:"button"},description:"Type of the button",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},onCopy:{defaultValue:null,description:"Optional click handler for Copying the value",name:"onCopy",required:!1,type:{name:"((event: ClipboardEvent<HTMLButtonElement>) => void)"}},onSubmit:{defaultValue:null,description:"onSubmit function handler",name:"onSubmit",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},style:{defaultValue:{value:"{}"},description:"Additional styles for the button",name:"style",required:!1,type:{name:"CSSProperties"}},iconPosition:{defaultValue:{value:"left"},description:"Give icon name availble in storybook that to be on left side of button",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},transparentBackground:{defaultValue:null,description:"",name:"transparentBackground",required:!1,type:{name:"boolean"}},form:{defaultValue:null,description:"form to accept form id in string",name:"form",required:!1,type:{name:"string"}},isChooseFile:{defaultValue:{value:"false"},description:"Is the Type ChooseFile for the button",name:"isChooseFile",required:!1,type:{name:"boolean"}},buttonWidth:{defaultValue:{value:"auto"},description:"Custom Width for the button",name:"buttonWidth",required:!1,type:{name:"string"}},buttonHeight:{defaultValue:{value:"auto"},description:"Custom Height for the button",name:"buttonHeight",required:!1,type:{name:"string"}},selectedFile:{defaultValue:null,description:"selectedfile object will be send.",name:"selectedFile",required:!1,type:{name:"File | DynamicObj | null"}},handleCloseIcon:{defaultValue:null,description:"handleCloseIcon function will set to the initial state .",name:"handleCloseIcon",required:!1,type:{name:"(() => void)"}},typographyStyle:{defaultValue:null,description:"create custom button style .",name:"typographyStyle",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{s as B};
