import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{d}from"./debounce-DSzxcrkp.js";import"./index-DJO9vBfz.js";const f={title:"Utils/debounce",component:d},o=()=>{const s=[{description:"Basic function call",expectedOutput:"Function called! (after delay)",delay:300,setup:()=>{d(()=>console.log("Function called!"),300)()},code:`const debouncedFunc = debounce(() => console.log('Function called!'), 300);
debouncedFunc();`},{description:"Rapid calls within delay",expectedOutput:"Debounced call! (only once after delay)",delay:500,setup:()=>{const n=d(()=>console.log("Debounced call!"),500);for(let c=0;c<5;c++)n()},code:`const debouncedFunc = debounce(() => console.log('Debounced call!'), 500);
for (let i = 0; i < 5; i++) {
  debouncedFunc();
}`},{description:"Cancel debounced function",expectedOutput:"Function should not be called if canceled",delay:200,setup:()=>{const n=d(()=>console.log("Should not be called!"),200);n(),n.cancel()},code:`const debouncedFunc = debounce(() => console.log('Should not be called!'), 200);
debouncedFunc();
debouncedFunc.cancel();`}];return e.jsxs("div",{children:[e.jsxs("h1",{children:[e.jsx("u",{children:"debounce(function, delay)"})," - Demonstrating debounce functionality"]}),s.map(({description:n,expectedOutput:c,delay:i,setup:a,code:r},b)=>e.jsxs("div",{children:[e.jsx("h3",{children:n}),e.jsx("button",{onClick:()=>{a(),setTimeout(()=>{console.log(c)},i+100)},children:"Run Test"}),e.jsx("pre",{children:e.jsx("code",{children:r})})]},b))]})};var t,u,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const testCases = [{
    description: 'Basic function call',
    expectedOutput: 'Function called! (after delay)',
    delay: 300,
    setup: () => {
      const debouncedFunc = debounce(() => console.log('Function called!'), 300);
      debouncedFunc(); // Call the debounced function
    },
    code: \`const debouncedFunc = debounce(() => console.log('Function called!'), 300);\\ndebouncedFunc();\`
  }, {
    description: 'Rapid calls within delay',
    expectedOutput: 'Debounced call! (only once after delay)',
    delay: 500,
    setup: () => {
      const debouncedFunc = debounce(() => console.log('Debounced call!'), 500);
      for (let i = 0; i < 5; i++) {
        debouncedFunc(); // Call the debounced function multiple times
      }
    },
    code: \`const debouncedFunc = debounce(() => console.log('Debounced call!'), 500);\\nfor (let i = 0; i < 5; i++) {\\n  debouncedFunc();\\n}\`
  }, {
    description: 'Cancel debounced function',
    expectedOutput: 'Function should not be called if canceled',
    delay: 200,
    setup: () => {
      const debouncedFunc = debounce(() => console.log('Should not be called!'), 200);
      debouncedFunc(); // Call the debounced function
      debouncedFunc.cancel(); // Cancel the function
    },
    code: \`const debouncedFunc = debounce(() => console.log('Should not be called!'), 200);\\ndebouncedFunc();\\ndebouncedFunc.cancel();\`
  }];
  return <div>\r
      <h1>\r
        <u>debounce(function, delay)</u> - Demonstrating debounce functionality\r
      </h1>\r
      {testCases.map(({
      description,
      expectedOutput,
      delay,
      setup,
      code
    }, index) => <div key={index}>\r
            <h3>{description}</h3>\r
            <button onClick={() => {
        setup(); // Run the setup for the test case
        setTimeout(() => {
          console.log(expectedOutput);
        }, delay + 100); // Wait a bit longer than the delay to check output
      }}>\r
              Run Test\r
            </button>\r
            <pre>\r
              <code>{code}</code>\r
            </pre>\r
          </div>)}\r
    </div>;
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,f as default};
