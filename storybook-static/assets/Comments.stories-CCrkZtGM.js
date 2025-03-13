import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as p}from"./index-DJO9vBfz.js";import{I as C}from"./Icon-BnrH6PuI.js";import{f as U}from"./ffid-Ct76gIPn.js";import{T as S}from"./Tooltip-jHEmaokv.js";import{T as W}from"./Typography-DdMJCn-_.js";/* empty css                */import"./index-NZcV-alF.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const D=({handleInsertNode:m,handleEditNode:s,handleDeleteNode:l,comment:t,depth:a=0,isDisable:n})=>{var w,E,R;const[d,y]=p.useState(""),[r,c]=p.useState(!1),[u,h]=p.useState(!1),[x,N]=p.useState(!0),{modifiedByUname:g,createdByUname:v,modifiedOn:I,createdOn:O}=t||{},P=I??O??new Date().toLocaleString(),i=g??v??"Anonymous",o=a>2,f=i?i.charAt(0).toUpperCase():"A";p.useEffect(()=>{r&&t.description&&y(t.description)},[r,t.description]);const b=()=>{h(!0)},L=()=>{d.trim().length!==0&&(r?(s(t.id,d),h(!1),y("")):(N(!0),m(t.id,d),h(!1),y("")),r&&c(!1))};return e.jsx("div",{className:"commentsContainer",children:e.jsxs("div",{className:"comment-wrapper",children:[e.jsxs("div",{className:"commentContainer",children:[e.jsx("div",{className:"commentContainer__avatar",children:f}),e.jsxs("div",{className:"ff-message-container",children:[e.jsxs("div",{className:"ff-message",children:[e.jsx("div",{className:"ff-message-name",style:{fontWeight:600},children:i}),e.jsx("div",{className:"ff-message-time",children:P})]}),e.jsxs("div",{className:"ff-editable-container",children:[e.jsx(W,{children:t==null?void 0:t.description}),e.jsxs("div",{className:"comment-actions",children:[!o&&a<2&&((w=t.comments)==null?void 0:w.length)>0&&e.jsx("div",{className:"action-icon",onClick:()=>N(B=>!B),children:e.jsx(S,{title:`${x?"collapse":"expand"}`,children:e.jsx(C,{name:x?"collapse-arrow":"expand-arrow",disabled:r||u,hoverEffect:!0})})}),!o&&a<2&&((E=t.comments)==null?void 0:E.length)===0&&e.jsx("div",{className:"action-icon",children:e.jsx(C,{name:"expand-arrow",disabled:!0})}),e.jsxs("div",{className:"ff-comment-action-item",children:[a<2&&e.jsx("div",{className:"action-icon",onClick:b,children:e.jsx(S,{title:"reply",children:e.jsx(C,{name:"comment_icon",disabled:r||n,hoverEffect:!0})})}),e.jsx("div",{className:"action-icon",onClick:()=>c(!0),children:e.jsx(S,{title:"edit",children:e.jsx(C,{name:"edit",disabled:u||n,hoverEffect:!0})})}),e.jsx("div",{className:"action-icon",onClick:()=>l(t.id),children:e.jsx(S,{title:"delete",children:e.jsx(C,{name:"delete",color:"var(--ff-delete-button-attachment)",disabled:r||u||n,hoverEffect:!0})})})]})]})]})]})]}),(u||r)&&e.jsxs("div",{className:"inputContainer",children:[e.jsx("textarea",{rows:1,className:"inputContainer__input first_input",value:d,onChange:B=>y(B.target.value),autoFocus:!0,placeholder:r?"Edit comment":"Add a comment"}),e.jsxs("div",{className:"edit-comment",children:[e.jsx("div",{className:"reply",onClick:()=>{L(),c(!1),h(!1)},children:e.jsx(S,{title:"reply",children:e.jsx(C,{name:"comment_reply",hoverEffect:!0})})}),e.jsx("div",{className:"reply",onClick:()=>{c(!1),h(!1),y("")},children:e.jsx(S,{title:"close",children:e.jsx(C,{name:"close",color:"var(--ff-delete-button-attachment)",hoverEffect:!0})})})]})]}),x&&((R=t.comments)==null?void 0:R.length)>0&&e.jsx("div",{className:`child-comments ${a===0?"first-level-child":""} ${a===1?"second-level-child":""}`,children:t.comments.map(B=>e.jsx("div",{className:`child-comments child-comments-${a+1}`,children:e.jsx(D,{handleInsertNode:m,handleEditNode:s,handleDeleteNode:l,comment:B,depth:a+1,isDisable:n})},B.id))})]})})};try{D.displayName="ChildComment",D.__docgenInfo={description:"",displayName:"ChildComment",props:{handleInsertNode:{defaultValue:null,description:"",name:"handleInsertNode",required:!0,type:{name:"any"}},handleEditNode:{defaultValue:null,description:"",name:"handleEditNode",required:!0,type:{name:"any"}},handleDeleteNode:{defaultValue:null,description:"",name:"handleDeleteNode",required:!0,type:{name:"(_commentId: string) => void"}},comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"CommentType"}},depth:{defaultValue:{value:"0"},description:"",name:"depth",required:!1,type:{name:"number"}},commentedData:{defaultValue:null,description:"",name:"commentedData",required:!1,type:{name:"CommentType[]"}},isDisable:{defaultValue:null,description:"",name:"isDisable",required:!1,type:{name:"boolean"}}}}}catch{}const $=()=>{const m=(t,a,n)=>t.map(d=>d.id===a?{...d,comments:[...d.comments,{id:U(),description:n.description,comments:[],createdBy:d.createdBy,modifiedBy:d.modifiedBy,createdByUname:d.createdByUname,modifiedByUname:d.modifiedByUname,createdOn:new Date().toLocaleString(),modifiedOn:new Date().toLocaleString(),commentParentId:a}]}:{...d,comments:m(d.comments,a,n)}),s=(t,a,n)=>t.map(d=>({...d,description:d.id===a?n:d.description,comments:s(d.comments,a,n)})),l=(t,a)=>t.filter(n=>n.id!==a).map(n=>({...n,comments:l(n.comments,a)}));return{insertNode:m,editNode:s,deleteNode:l}},_=({commentsData:m,handleAddComment:s,handleEditComment:l,handleDeleteComment:t,onCommentsDataChange:a,currentUser:n,isDisable:d=!1})=>{const[y,r]=p.useState(""),[c,u]=p.useState([]),h=(i,o)=>{for(const f of i){if(f.id===o)return f;const b=h(f.comments,o);if(b)return b}return null};p.useEffect(()=>{m&&u(m)},[m]);const{insertNode:x,editNode:N,deleteNode:g}=$(),v=(i,o)=>{if(!o.trim())return;const f={id:U(),description:o,commentParentId:i,emailId:[],comments:[],createdBy:n==null?void 0:n.createdBy,modifiedBy:n==null?void 0:n.modifiedBy,createdByUname:n==null?void 0:n.createdByUname,modifiedByUname:n==null?void 0:n.modifiedByUname,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString()};u(b=>x(b,i,f)),s&&s(f,h(c,i))},I=p.useCallback((i,o)=>{const f=N(c,i,o);u(f);const b=h(f,i);l&&l(i,o,b)},[c,N,l]),O=p.useCallback(i=>{const o=g(c,i);u(o),t&&t(i)},[c,g,t]);p.useEffect(()=>{a&&a(c)},[c,a]);const P=()=>{if(!y.trim())return;const i={id:U(),description:y,comments:[],createdBy:n==null?void 0:n.createdBy,modifiedBy:n==null?void 0:n.modifiedBy,createdByUname:n==null?void 0:n.createdByUname,modifiedByUname:n==null?void 0:n.modifiedByUname,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),commentParentId:""};u(o=>[...o,i]),s&&s(i,null),r("")};return e.jsxs("div",{className:"ff-comments-container-box",children:[e.jsxs("div",{className:"first-comment",children:[e.jsx(W,{fontWeight:"semi-bold",className:"ff-comment-heading",children:"Comments"}),e.jsxs("div",{className:"input-wrapper",children:[e.jsx("textarea",{className:"inputContainer__input first_input",rows:1,autoFocus:!0,value:y,onChange:i=>r(i.target.value),placeholder:"Add Comments",disabled:d}),e.jsx("span",{className:"reply-comment",children:e.jsx(S,{title:"reply",children:e.jsx(C,{name:"comment_reply",onClick:P,hoverEffect:!0,disabled:d})})})]})]}),c.length>0&&c.map(i=>e.jsx(D,{handleInsertNode:v,handleEditNode:I,handleDeleteNode:O,comment:i,depth:0,isDisable:d},i.id))]})};try{_.displayName="Comments",_.__docgenInfo={description:"",displayName:"Comments",props:{commentsData:{defaultValue:null,description:"",name:"commentsData",required:!0,type:{name:"CommentType[]"}},handleAddComment:{defaultValue:null,description:"",name:"handleAddComment",required:!0,type:{name:"any"}},handleEditComment:{defaultValue:null,description:"",name:"handleEditComment",required:!0,type:{name:"any"}},handleDeleteComment:{defaultValue:null,description:"",name:"handleDeleteComment",required:!0,type:{name:"any"}},onCommentsDataChange:{defaultValue:null,description:"",name:"onCommentsDataChange",required:!1,type:{name:"((data: any) => void)"}},currentUser:{defaultValue:null,description:"",name:"currentUser",required:!1,type:{name:"{ createdBy: string; modifiedBy: string; createdByUname: string; modifiedByUname: string; }"}},isDisable:{defaultValue:{value:"false"},description:"",name:"isDisable",required:!1,type:{name:"boolean"}}}}}catch{}const ae={title:"Components/Comments",component:_,parameters:{layout:"centered"},tags:["autodocs"]},q={render:()=>{const m=a=>{},s=(a,n)=>{},l=(a,n,d)=>{},t=a=>{};return e.jsx(_,{onCommentsDataChange:m,commentsData:[],handleAddComment:s,handleEditComment:l,handleDeleteComment:t})}},j={render:()=>{const m=a=>{},s=(a,n)=>{},l=(a,n,d)=>{},t=a=>{};return e.jsx(_,{isDisable:!0,onCommentsDataChange:m,commentsData:[{createdBy:"USR41096",modifiedBy:"USR41096",createdByUname:"Saqeb",modifiedByUname:"Saqeb",createdOn:"22 Oct 2024 01:45 PM",modifiedOn:"03 Jan 2025 10:56 AM",id:"0128c910-b2fc-479d-a7b4-e0491cb69c16",name:"Saqeb",emailId:[],description:"tesdsfdt",commentParentId:"",comments:[{createdBy:"USR41096",modifiedBy:"USR41096",createdByUname:"Saqeb",modifiedByUname:"Saqeb",id:"a47b95d2-1a2e-4e0c-a807-8eee842fa11b",name:"Saqeb",emailId:[],description:"tessttt",commentParentId:"0128c910-b2fc-479d-a7b4-e0491cb69c16",comments:[{createdBy:"USR41096",modifiedBy:"USR41096",createdByUname:"Saqeb",modifiedByUname:"Saqeb",createdOn:"06 Jan 2025 12:06 PM",modifiedOn:"06 Jan 2025 12:06 PM",id:"e3cbd87e-3acc-403f-9ac7-ddfc150d2007",name:"Saqeb",emailId:[],description:"qwerty",commentParentId:"a47b95d2-1a2e-4e0c-a807-8eee842fa11b",comments:[]}]}]},{createdBy:"USR41096",modifiedBy:"USR41096",createdByUname:"Saqeb1",modifiedByUname:"Saqeb",createdOn:"22 Oct 2024 01:45 PM",modifiedOn:"03 Jan 2025 10:56 AM",id:"0128c910-b2fc-479d-a7b4-e0491cb69c16",name:"Saqeb1",emailId:[],description:"tesdsData",commentParentId:"",comments:[{createdBy:"USR41096",modifiedBy:"USR41096",createdByUname:"Saqeb",modifiedByUname:"Saqeb",id:"a47b95d2-1a2e-4e0c-a807-8eee842fa11b",name:"Saqeb",emailId:[],description:"Dhanyatha",commentParentId:"0128c910-b2fc-479d-a7b4-e0491cb69c16",comments:[{createdBy:"USR41096",modifiedBy:"USR41096",createdByUname:"Saqeb",modifiedByUname:"Saqeb",createdOn:"06 Jan 2025 12:06 PM",modifiedOn:"06 Jan 2025 12:06 PM",id:"e3cbd87e-3acc-403f-9ac7-ddfc150d2007",name:"Saqeb",emailId:[],description:"Sandesh",commentParentId:"a47b95d2-1a2e-4e0c-a807-8eee842fa11b",comments:[]}]}]}],handleEditComment:l,handleAddComment:s,handleDeleteComment:t})}};var A,M,V;q.parameters={...q.parameters,docs:{...(A=q.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const handleCommentsDataChange = (_inputValue: string) => {};
    const handleAddComment = (_newComment: CommentType, _parentNode: CommentType | null) => {};
    const handleEditComment = (_commentId: string, _updatedDescription: string, _updatedNode: CommentType | null) => {};
    const handleDelete = (_id: string | number) => {};
    return <Comments onCommentsDataChange={handleCommentsDataChange} commentsData={[]} handleAddComment={handleAddComment} handleEditComment={handleEditComment} handleDeleteComment={handleDelete} />;
  }
}`,...(V=(M=q.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var T,J,k;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const handleCommentsDataChange = (_inputValue: string) => {};
    const handleAddComment = (_newComment: CommentType, _parentNode: CommentType | null) => {};
    const handleEditComment = (_commentId: string, _updatedDescription: string, _updatedNode: CommentType | null) => {};
    const handleDelete = (_id: string | number) => {};
    return <Comments isDisable onCommentsDataChange={handleCommentsDataChange} commentsData={[{
      createdBy: 'USR41096',
      modifiedBy: 'USR41096',
      createdByUname: 'Saqeb',
      modifiedByUname: 'Saqeb',
      createdOn: '22 Oct 2024 01:45 PM',
      modifiedOn: '03 Jan 2025 10:56 AM',
      id: '0128c910-b2fc-479d-a7b4-e0491cb69c16',
      name: 'Saqeb',
      emailId: [],
      description: 'tesdsfdt',
      commentParentId: '',
      comments: [{
        createdBy: 'USR41096',
        modifiedBy: 'USR41096',
        createdByUname: 'Saqeb',
        modifiedByUname: 'Saqeb',
        id: 'a47b95d2-1a2e-4e0c-a807-8eee842fa11b',
        name: 'Saqeb',
        emailId: [],
        description: 'tessttt',
        commentParentId: '0128c910-b2fc-479d-a7b4-e0491cb69c16',
        comments: [{
          createdBy: 'USR41096',
          modifiedBy: 'USR41096',
          createdByUname: 'Saqeb',
          modifiedByUname: 'Saqeb',
          createdOn: '06 Jan 2025 12:06 PM',
          modifiedOn: '06 Jan 2025 12:06 PM',
          id: 'e3cbd87e-3acc-403f-9ac7-ddfc150d2007',
          name: 'Saqeb',
          emailId: [],
          description: 'qwerty',
          commentParentId: 'a47b95d2-1a2e-4e0c-a807-8eee842fa11b',
          comments: []
        }]
      }]
    }, {
      createdBy: 'USR41096',
      modifiedBy: 'USR41096',
      createdByUname: 'Saqeb1',
      modifiedByUname: 'Saqeb',
      createdOn: '22 Oct 2024 01:45 PM',
      modifiedOn: '03 Jan 2025 10:56 AM',
      id: '0128c910-b2fc-479d-a7b4-e0491cb69c16',
      name: 'Saqeb1',
      emailId: [],
      description: 'tesdsData',
      commentParentId: '',
      comments: [{
        createdBy: 'USR41096',
        modifiedBy: 'USR41096',
        createdByUname: 'Saqeb',
        modifiedByUname: 'Saqeb',
        id: 'a47b95d2-1a2e-4e0c-a807-8eee842fa11b',
        name: 'Saqeb',
        emailId: [],
        description: 'Dhanyatha',
        commentParentId: '0128c910-b2fc-479d-a7b4-e0491cb69c16',
        comments: [{
          createdBy: 'USR41096',
          modifiedBy: 'USR41096',
          createdByUname: 'Saqeb',
          modifiedByUname: 'Saqeb',
          createdOn: '06 Jan 2025 12:06 PM',
          modifiedOn: '06 Jan 2025 12:06 PM',
          id: 'e3cbd87e-3acc-403f-9ac7-ddfc150d2007',
          name: 'Saqeb',
          emailId: [],
          description: 'Sandesh',
          commentParentId: 'a47b95d2-1a2e-4e0c-a807-8eee842fa11b',
          comments: []
        }]
      }]
    }]} handleEditComment={handleEditComment} handleAddComment={handleAddComment} handleDeleteComment={handleDelete} />;
  }
}`,...(k=(J=j.parameters)==null?void 0:J.docs)==null?void 0:k.source}}};const te=["basicCommentWithOutData","basicCommentWithData"];export{te as __namedExportsOrder,j as basicCommentWithData,q as basicCommentWithOutData,ae as default};
