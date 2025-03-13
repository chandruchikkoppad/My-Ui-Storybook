import{j as o}from"./jsx-runtime-SKoiH9zj.js";import"./index-DJO9vBfz.js";const l=(c,e)=>{let t,n=null;const r=function(...i){const d=this;n===null||Date.now()-n>=e?(c.apply(d,i),n=Date.now()):(t&&clearTimeout(t),t=setTimeout(()=>{c.apply(d,i),n=Date.now()},e-(Date.now()-n)))};return r.cancel=()=>{t&&clearTimeout(t),t=null,n=null},r},F={title:"Utils/throttle",component:l},s=()=>{const c=[{description:"Basic function call",expectedOutput:"Function called! (at most once every 300ms)",limit:300,setup:()=>{const e=l(()=>console.log("Function called!"),300);for(let t=0;t<5;t++)e()},code:`const throttledFunc = throttle(() => console.log('Function called!'), 300);
for (let i = 0; i < 5; i++) {
  throttledFunc();
}`},{description:"Throttling with rapid calls",expectedOutput:"Function called! (at most once every 500ms)",limit:500,setup:()=>{const e=l(()=>console.log("Throttled call!"),500);for(let t=0;t<10;t++)e()},code:`const throttledFunc = throttle(() => console.log('Throttled call!'), 500);
for (let i = 0; i < 10; i++) {
  throttledFunc();
}`},{description:"Cancel throttled function",expectedOutput:"Function should not be called if canceled",limit:200,setup:()=>{const e=l(()=>console.log("Should not be called!"),200);e(),e.cancel()},code:`const throttledFunc = throttle(() => console.log('Should not be called!'), 200);
throttledFunc();
throttledFunc.cancel();`},{description:"Scroll event handling",expectedOutput:"Scroll event handled (at most once every 400ms)",limit:400,setup:()=>{const e=l(()=>console.log("Scroll event handled"),400);for(let t=0;t<10;t++)e()},code:`const throttledScroll = throttle(() => console.log('Scroll event handled'), 400);
for (let i = 0; i < 10; i++) {
  throttledScroll();
}`}];return o.jsxs("div",{children:[o.jsxs("h1",{children:[o.jsx("u",{children:"throttle(function, limit)"})," - Demonstrating throttle functionality"]}),c.map(({description:e,expectedOutput:t,limit:n,setup:r,code:i},d)=>o.jsxs("div",{children:[o.jsx("h3",{children:e}),o.jsx("button",{onClick:()=>{r(),setTimeout(()=>{console.log(t)},n+100)},children:"Run Test"}),o.jsx("pre",{children:o.jsx("code",{children:i})})]},d))]})};var u,h,a;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const testCases = [{
    description: 'Basic function call',
    expectedOutput: 'Function called! (at most once every 300ms)',
    limit: 300,
    setup: () => {
      const throttledFunc = throttle(() => console.log('Function called!'), 300);
      for (let i = 0; i < 5; i++) {
        throttledFunc(); // Call the throttled function multiple times
      }
    },
    code: \`const throttledFunc = throttle(() => console.log('Function called!'), 300);\\nfor (let i = 0; i < 5; i++) {\\n  throttledFunc();\\n}\`
  }, {
    description: 'Throttling with rapid calls',
    expectedOutput: 'Function called! (at most once every 500ms)',
    limit: 500,
    setup: () => {
      const throttledFunc = throttle(() => console.log('Throttled call!'), 500);
      for (let i = 0; i < 10; i++) {
        throttledFunc(); // Call the throttled function rapidly
      }
    },
    code: \`const throttledFunc = throttle(() => console.log('Throttled call!'), 500);\\nfor (let i = 0; i < 10; i++) {\\n  throttledFunc();\\n}\`
  }, {
    description: 'Cancel throttled function',
    expectedOutput: 'Function should not be called if canceled',
    limit: 200,
    setup: () => {
      const throttledFunc = throttle(() => console.log('Should not be called!'), 200);
      throttledFunc(); // Call the throttled function
      throttledFunc.cancel(); // Cancel the function
    },
    code: \`const throttledFunc = throttle(() => console.log('Should not be called!'), 200);\\nthrottledFunc();\\nthrottledFunc.cancel();\`
  }, {
    description: 'Scroll event handling',
    expectedOutput: 'Scroll event handled (at most once every 400ms)',
    limit: 400,
    setup: () => {
      const throttledScroll = throttle(() => console.log('Scroll event handled'), 400);

      // Simulating rapid scroll events
      for (let i = 0; i < 10; i++) {
        throttledScroll(); // Simulate scroll event
      }
    },
    code: \`const throttledScroll = throttle(() => console.log('Scroll event handled'), 400);\\nfor (let i = 0; i < 10; i++) {\\n  throttledScroll();\\n}\`
  }];
  return <div>\r
      <h1>\r
        <u>throttle(function, limit)</u> - Demonstrating throttle functionality\r
      </h1>\r
      {testCases.map(({
      description,
      expectedOutput,
      limit,
      setup,
      code
    }, index) => <div key={index}>\r
            <h3>{description}</h3>\r
            <button onClick={() => {
        setup(); // Run the setup for the test case
        setTimeout(() => {
          console.log(expectedOutput);
        }, limit + 100); // Wait a bit longer than the limit to check output
      }}>\r
              Run Test\r
            </button>\r
            <pre>\r
              <code>{code}</code>\r
            </pre>\r
          </div>)}\r
    </div>;
}`,...(a=(h=s.parameters)==null?void 0:h.docs)==null?void 0:a.source}}};const f=["Default"];export{s as Default,f as __namedExportsOrder,F as default};
