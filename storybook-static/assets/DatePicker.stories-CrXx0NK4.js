import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{C as n}from"./DatePicker-B6sh8Uhw.js";import{r as s}from"./index-DJO9vBfz.js";import"./index-CFN9ZEHn.js";import"./Typography-DdMJCn-_.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./functionUtils-C4j6ouf0.js";import"./Button-CpFgCZ6s.js";/* empty css                */const V={title:"Components/DatePicker",component:n,parameters:{layout:"centered",docs:{description:{component:"A custom date picker component with built-in calendar and input field."}}},tags:["autodocs"],argTypes:{minDate:{description:"The minimum selectable date",control:{type:"date"}},maxDate:{description:"The maximum selectable date",control:{type:"date"}},value:{description:"Selected date value",control:{type:"date"}},onChange:{description:"Function to handle date selection",action:"changed"},placeholder:{description:"Placeholder text for the input field",control:"text"},disabled:{description:"Disables the date picker",control:"boolean"},dateFormat:{description:"Date format to display",control:"text"},timeFormat:{description:"time format to display",control:"text"},timezone:{description:"Timezone for date formatting",control:"text"},calendarWidth:{description:"Custom width for the calendar in pixel",control:"number"},error:{description:"Displays the input field in an error state",control:"boolean"},helperText:{description:"Helper text to show below the input, often used for error messages",control:"text"}}},o={render:r=>{const[t,a]=s.useState();return e.jsx(n,{...r,value:t,onChange:a})}},d={render:r=>{const[t,a]=s.useState();return e.jsx(n,{...r,value:t,onChange:a,isFilterDatePicker:!0})}},c={render:r=>{const[t,a]=s.useState(),p=s.useRef(null);return e.jsx(n,{...r,ref:p,value:t,onChange:a,calendarWidth:240,maxDate:new Date,timezone:"Europe/Paris"})}},l={render:r=>{const[t,a]=s.useState(),[p,_]=s.useState();return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Select Start Date:"}),e.jsx(n,{...r,value:t,onChange:a,maxDate:new Date}),e.jsx("p",{children:"Select End Date:"}),e.jsx(n,{...r,value:p,onChange:_,disabled:!t,minDate:t||void 0,maxDate:new Date})]})}},i={args:{error:!1,helperText:"Error"},render:r=>{const[t,a]=s.useState(new Date);return e.jsx(n,{...r,value:t,onChange:a,minDate:new Date})}},u={render:r=>{const[t,a]=s.useState();return console.log(t),e.jsx(n,{...r,value:t,onChange:a,calendarWidth:240,dateOnly:!0})}},D={render:r=>{const[t,a]=s.useState();return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,value:t,onChange:a,calendarWidth:240,maxDate:new Date,minDate:new Date(new Date().setFullYear(new Date().getFullYear()-1)),dateOnly:!0,dateFormat:"dd MMM yyyy"}),e.jsx("button",{onClick:()=>a(void 0),children:"clear"})]})}},m={render:r=>{const[t,a]=s.useState();return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,value:t,onChange:a,calendarWidth:240,maxDate:new Date,minDate:new Date(new Date().setFullYear(new Date().getFullYear()-1)),dateOnly:!0,dateFormat:"dd MMM yyyy",isSelectableDate:!0}),e.jsx("button",{onClick:()=>a(void 0),children:"clear"})]})}};var S,g,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | undefined>();
    return <CustomDatePicker {...args} value={date} onChange={setDate} />;
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | undefined>();
    return <CustomDatePicker {...args} value={date} onChange={setDate} isFilterDatePicker />;
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,w,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const startDateRef = useRef<HTMLDivElement>(null);
    return <CustomDatePicker {...args} ref={startDateRef} value={startDate} onChange={setStartDate} calendarWidth={240} maxDate={new Date()} // Disable future dates for start date picker
    timezone='Europe/Paris' />;
  }
}`,...(F=(w=c.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var b,k,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    return <>\r
        <p>Select Start Date:</p>\r
        <CustomDatePicker {...args} value={startDate} onChange={setStartDate} maxDate={new Date()} // Disable future dates for start date picker
      />\r
\r
        <p>Select End Date:</p>\r
        <CustomDatePicker {...args} value={endDate} onChange={setEndDate} disabled={!startDate} minDate={startDate || undefined} // Restrict the end date based on selected start date
      maxDate={new Date()} // Disable future dates for end date picker
      />\r
      </>;
  }
}`,...(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var P,j,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    error: false,
    helperText: 'Error'
  },
  render: args => {
    const [selectDate, setSelectDate] = useState<Date | undefined>(new Date());
    return <CustomDatePicker {...args} value={selectDate} onChange={setSelectDate} minDate={new Date()} // Set minimum date to today
    />;
  }
}`,...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var M,Y,O;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [selectedDate, setSelectDate] = useState<Date | undefined>();
    console.log(selectedDate);
    return <CustomDatePicker {...args} value={selectedDate} onChange={setSelectDate} calendarWidth={240} dateOnly />;
  }
}`,...(O=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var W,T,R;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [selectedDate, setSelectDate] = useState<Date | undefined>();
    return <>\r
        <CustomDatePicker {...args} value={selectedDate} onChange={setSelectDate} calendarWidth={240} maxDate={new Date()} minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))} dateOnly dateFormat="dd MMM yyyy" />\r
        <button onClick={() => setSelectDate(undefined)}>clear</button>\r
      </>;
  }
}`,...(R=(T=D.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var z,I,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [selectedDate, setSelectDate] = useState<Date | undefined>();
    return <>\r
        <CustomDatePicker {...args} value={selectedDate} onChange={setSelectDate} calendarWidth={240} maxDate={new Date()} minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))} dateOnly dateFormat="dd MMM yyyy" isSelectableDate />\r
        <button onClick={() => setSelectDate(undefined)}>clear</button>\r
      </>;
  }
}`,...(H=(I=m.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};const X=["Default","FilterDatePicker","StartDateFilter","EndDateInput","ScheduleDateInput","Dateonly","PastOneYear","DashboardFilter"];export{m as DashboardFilter,u as Dateonly,o as Default,l as EndDateInput,d as FilterDatePicker,D as PastOneYear,i as ScheduleDateInput,c as StartDateFilter,X as __namedExportsOrder,V as default};
