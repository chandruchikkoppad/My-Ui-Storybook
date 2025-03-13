import{j as d}from"./jsx-runtime-SKoiH9zj.js";import{A as g}from"./AttachMedia-BcOKw0RA.js";import{r as I}from"./index-DJO9vBfz.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./Typography-DdMJCn-_.js";const b={title:"Components/AttachMedia",component:g,tags:["autodocs"]},l={args:{mediaSrc:"src/assets/image/Screenshot (1).png",mediaType:"image",onExpandClick:()=>alert("Expand clicked"),onDeleteClick:i=>{alert(`Deleted file with src: ${i}`),console.log(`File with src ${i} has been deleted`)},onDownloadClick:()=>alert("Download clicked"),height:"80px",width:"80px",fileId:"FLN123"}},t={args:{mediaSrc:"src/assets/video/movie.mp4",mediaType:"video",onExpandClick:()=>alert("Expand clicked"),onDeleteClick:i=>{alert(`Deleted file with src: ${i}`),console.log(`File with src ${i} has been deleted`)},onDownloadClick:()=>alert("Download clicked"),height:"80px",width:"80px",fileId:"FLN1234"}},a={render:()=>{const[i,x]=I.useState([{src:"src/assets/image/Screenshot (1).png",type:"image",fileName:"image",fileId:"FLN123"},{src:"src/assets/video/movie.mp4",type:"video",fileName:"video",fileId:"FLN1234"}]),k=e=>{alert(`File with fileId: ${e} has been deleted`),console.log(`File with fileId ${e} has been deleted`),x(w=>w.filter(D=>D.fileId!==e))};return d.jsx("div",{style:{display:"flex",gap:"16px"},children:i.map(e=>d.jsx(g,{mediaSrc:e.src,mediaType:e.type,onExpandClick:()=>alert("Expand clicked"),onDeleteClick:()=>k(e.fileId),onDownloadClick:()=>alert("Download clicked"),height:"80px",width:"80px",fileName:e.fileName,fileId:e.fileId},e.fileId))})}};var n,s,o;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mediaSrc: 'src/assets/image/Screenshot (1).png',
    mediaType: 'image',
    onExpandClick: () => alert('Expand clicked'),
    onDeleteClick: (src: string) => {
      alert(\`Deleted file with src: \${src}\`);
      console.log(\`File with src \${src} has been deleted\`);
    },
    onDownloadClick: () => alert('Download clicked'),
    height: '80px',
    width: '80px',
    fileId: 'FLN123'
  }
}`,...(o=(s=l.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var r,c,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    mediaSrc: 'src/assets/video/movie.mp4',
    mediaType: 'video',
    onExpandClick: () => alert('Expand clicked'),
    onDeleteClick: (src: string) => {
      alert(\`Deleted file with src: \${src}\`);
      console.log(\`File with src \${src} has been deleted\`);
    },
    onDownloadClick: () => alert('Download clicked'),
    height: '80px',
    width: '80px',
    fileId: 'FLN1234'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,f,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [mediaList, setMediaList] = useState([{
      src: 'src/assets/image/Screenshot (1).png',
      type: 'image',
      fileName: 'image',
      fileId: 'FLN123'
    }, {
      src: 'src/assets/video/movie.mp4',
      type: 'video',
      fileName: 'video',
      fileId: 'FLN1234'
    }]);
    const handleDelete = (fileId: string) => {
      alert(\`File with fileId: \${fileId} has been deleted\`);
      console.log(\`File with fileId \${fileId} has been deleted\`);
      setMediaList(prevMediaList => prevMediaList.filter(file => file.fileId !== fileId));
    };
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>\r
        {mediaList.map(file => <AttachMedia key={file.fileId} mediaSrc={file.src} mediaType={file.type} onExpandClick={() => alert('Expand clicked')} onDeleteClick={() => handleDelete(file.fileId)} // Pass fileId to the delete handler
      onDownloadClick={() => alert('Download clicked')} height="80px" width="80px" fileName={file.fileName} fileId={file.fileId} />)}\r
      </div>;
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const M=["Default","Video","ImageAndVideo"];export{l as Default,a as ImageAndVideo,t as Video,M as __namedExportsOrder,b as default};
