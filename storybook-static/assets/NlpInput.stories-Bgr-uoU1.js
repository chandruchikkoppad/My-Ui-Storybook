import{j as S}from"./jsx-runtime-SKoiH9zj.js";import{r as a}from"./index-DJO9vBfz.js";import{n as m,N as L,f as P}from"./sampleData-DguosTgJ.js";import"./checkEmpty-xi6SckPb.js";import"./index-CFN9ZEHn.js";import"./index-NZcV-alF.js";import"./useClickOutside-BYc9KT_v.js";import"./Typography-DdMJCn-_.js";import"./ThemeProvider-D5XEyBwi.js";import"./Icon-BnrH6PuI.js";import"./IconButton-DADAjSNQ.js";import"./useIntersectionObserver-CzfTHjMy.js";import"./usePortalPosition-DKFkIZLt.js";const z={title:"Components/NlpInput",component:L,parameters:{layout:"centered"},tags:["autodocs"]},h={args:{label:"Search NLP",leftIcon:"ai_search",rightIcon:"help_icon",rightIconColor:"var(--nlp-color)",containerWidth:"1000px",value:"",optionsList:m},render:t=>{const[c,o]=a.useState(t.value),[i,l]=a.useState(t.optionsList),p=r=>{o(r.target.value),l(m)},u=r=>{o(r.displayName)};return S.jsx(L,{...t,value:c,onChange:p,onSelect:u,optionsList:i,webServiceClick:()=>{alert("webServiceClick!")},onHelpIconClick:()=>{alert("Help icon clicked!!")},aiIconClick:()=>{alert("aiIconClick!")}})}},d={args:{label:"Search NLP",leftIcon:"ai_search",rightIcon:"help_icon",rightIconColor:"var(--nlp-color)",containerWidth:"1000px",value:"",optionsList:m},render:t=>{const[c,o]=a.useState(t.value),[i,l]=a.useState(t.optionsList),[p]=a.useState(P),u=n=>{o(n.target.value),l(m)},r=n=>{o(n.displayName)},e=n=>{console.warn("selectedChipsData",n)};return S.jsx(L,{...t,value:c,onChange:u,onSelect:r,optionsList:i,chipOptionList:p,selectedChips:e,webServiceClick:()=>{alert("webServiceClick!")},onHelpIconClick:()=>{alert("Help icon clicked!!")},aiIconClick:()=>{alert("aiIconClick!")}})}},g={args:{label:"NLP Input",optionsList:[],disabled:!0}},C={render:()=>{const[t,c]=a.useState(""),[o,i]=a.useState([]),[l,p]=a.useState(0),u=e=>{const n=e.target.value||"";setTimeout(()=>{fetch(`https://reqres.in/api/users?page=${n.length%2===0?1:2}`).then(s=>{if(!s.ok)throw new Error("Network response was not ok");return s.json()}).then(s=>{i([...s.data,...s.data]),console.log("Fetched Users:",s.data)}).catch(s=>{console.error("Error fetching users:",s)})},3e3),c(e.target.value)},r=()=>{fetch(`https://reqres.in/api/users?page=${t.length%2===0?1:2}`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{const n=e.data;i([...o,...n]),console.log("Fetched Users:",e.data)}).catch(e=>{console.error("Error fetching users:",e)}),p(l+1)};return S.jsx(L,{onChange:u,rightIconColor:"",optionsList:o,value:t,onSelect:function(e){throw new Error("Function not implemented.")},rightIcon:"success",loadMoreOptions:r})}};var I,v,k;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Search NLP',
    leftIcon: 'ai_search',
    rightIcon: 'help_icon',
    rightIconColor: 'var(--nlp-color)',
    containerWidth: '1000px',
    value: '',
    optionsList: nlpList
  },
  render: args => {
    const [inputValue, setInputValue] = useState(args.value);
    const [optionList, setOptionList] = useState(args.optionsList);
    const handleChange = e => {
      setInputValue(e.target.value);
      setOptionList(nlpList);
    };
    const handleSelect = e => {
      setInputValue(e.displayName);
    };
    return <NlpInput {...args} value={inputValue} onChange={handleChange} onSelect={handleSelect} optionsList={optionList} webServiceClick={() => {
      alert('webServiceClick!');
    }} onHelpIconClick={() => {
      alert('Help icon clicked!!');
    }} aiIconClick={() => {
      alert('aiIconClick!');
    }} />;
  }
}`,...(k=(v=h.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,f,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Search NLP',
    leftIcon: 'ai_search',
    rightIcon: 'help_icon',
    rightIconColor: 'var(--nlp-color)',
    containerWidth: '1000px',
    value: '',
    optionsList: nlpList
  },
  render: args => {
    const [inputValue, setInputValue] = useState(args.value);
    const [optionList, setOptionList] = useState(args.optionsList);
    const [filterData] = useState(filterSearchData);
    const handleChange = e => {
      setInputValue(e.target.value);
      setOptionList(nlpList);
    };
    const handleSelect = e => {
      setInputValue(e.displayName);
    };
    const selectedChips = (data: NlpChipsAccordionProps) => {
      console.warn('selectedChipsData', data);
    };
    return <NlpInput {...args} value={inputValue} onChange={handleChange} onSelect={handleSelect} optionsList={optionList} chipOptionList={filterData} selectedChips={selectedChips} webServiceClick={() => {
      alert('webServiceClick!');
    }} onHelpIconClick={() => {
      alert('Help icon clicked!!');
    }} aiIconClick={() => {
      alert('aiIconClick!');
    }} />;
  }
}`,...(N=(f=d.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var b,V,O;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'NLP Input',
    optionsList: [],
    disabled: true
  }
}`,...(O=(V=g.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var E,x,D;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [optionsList, setOptionsList] = useState<any>([]);
    const [page, setPage] = useState(0);
    const handleChange = (e: any) => {
      const value = e.target.value || '';
      setTimeout(() => {
        fetch(\`https://reqres.in/api/users?page=\${value.length % 2 === 0 ? 1 : 2}\`).then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }).then(data => {
          setOptionsList([...data.data, ...data.data]);
          console.log('Fetched Users:', data.data);
        }).catch(error => {
          console.error('Error fetching users:', error);
        });
      }, 3000);
      setValue(e.target.value);
    };
    const loadMore = () => {
      fetch(\`https://reqres.in/api/users?page=\${value.length % 2 === 0 ? 1 : 2}\`).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then(data => {
        const userData = data.data;
        setOptionsList([...optionsList, ...userData]);
        console.log('Fetched Users:', data.data);
      }).catch(error => {
        console.error('Error fetching users:', error);
      });
      setPage(page + 1);
    };
    return <NlpInput onChange={handleChange} rightIconColor={''} optionsList={optionsList} value={value} onSelect={function (e: any): void {
      throw new Error('Function not implemented.');
    }} rightIcon="success" loadMoreOptions={loadMore} />;
  }
}`,...(D=(x=C.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const B=["PrimaryNlp","NlpChipsAccordion","Disable","apiFetch"];export{g as Disable,d as NlpChipsAccordion,h as PrimaryNlp,B as __namedExportsOrder,C as apiFetch,z as default};
