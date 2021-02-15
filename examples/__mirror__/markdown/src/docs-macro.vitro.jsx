import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/markdown/src/docs-macro.vitro.jsx";
import RefreshRuntime from "/_react-refresh-runtime_.js?namespace=react-refresh-runtime";
let prevRefreshReg;
let prevRefreshSig;
if (!window.__bundless_plugin_react_preamble_installed__) {
  throw new Error("bundless-plugin-react can't detect preamble. Something is wrong.");
}
if (import.meta.hot) {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, __this_path__ + " " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import react_cjsImport2 from "/.bundless/web_modules/react/index.js?namespace=file"; const React = react_cjsImport2 && react_cjsImport2.__esModule ? react_cjsImport2.default : react_cjsImport2;;
import styled, {css} from "/.bundless/web_modules/styled-components/dist/styled-components.esm.js?namespace=file";
import {docs} from "/__..__/packages/cli/docs.js?namespace=file";
export function VitroMdx__0__() {
  return React.createElement(React.Fragment, null, React.createElement("h1", null, "Some documentation injected with markdown"), React.createElement("p", null, "Officia ea deserunt culpa aliqua labore amet commodo ut esse ullamco nostrud."), React.createElement("p", null, "Exercitation fugiat laborum commodo quis do. Deserunt cillum aliquip Lorem officia deserunt velit minim. Duis nisi eiusmod nulla cupidatat veniam amet esse officia est. Ut minim dolor sunt elit fugiat. Qui nostrud sint nostrud proident sint amet sit. Pariatur quis ea adipisicing fugiat id esse. Laborum qui voluptate in esse veniam consequat est amet elit deserunt in nulla ad."), React.createElement("p", null, "Aliqua cillum labore esse magna proident veniam non labore tempor veniam. Anim dolore officia sunt excepteur eiusmod. Aliqua id mollit mollit irure ad tempor veniam non et incididunt laborum dolor cupidatat duis. Dolor non incididunt non aute eu."), React.createElement("p", null, "a list of something"), React.createElement("ul", null, React.createElement("li", null, React.createElement("p", null, "ciao")), React.createElement("li", null, React.createElement("p", null, "a te")), React.createElement("li", null, React.createElement("p", null, "e a te"), React.createElement("p", null, "some code here"))));
}
;
;
const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => props.primary ? "palevioletred" : "white"};
    color: ${(props) => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
_c = Button;
export const ExampleButton = () => React.createElement(Button, {}, "hello");
_c2 = ExampleButton;
export function VitroMdx__1__() {
  return React.createElement(React.Fragment, null, React.createElement("h1", null, "Some documentation injected with markdown"), React.createElement("p", null, "Officia ea deserunt culpa aliqua labore amet commodo ut esse ullamco nostrud."), React.createElement("h2", null, "Some documentation injected with markdown"), React.createElement("p", null, "Exercitation fugiat laborum commodo quis do. Deserunt cillum aliquip Lorem officia deserunt velit minim. Duis nisi eiusmod nulla cupidatat veniam amet esse officia est. Ut minim dolor sunt elit fugiat. Qui nostrud sint nostrud proident sint amet sit. Pariatur quis ea adipisicing fugiat id esse. Laborum qui voluptate in esse veniam consequat est amet elit deserunt in nulla ad."));
}
;
;
console.log(new Error("i should be on line 54"));
export const PrimaryButton = () => React.createElement(Button, {
  primary: true
}, "hello");
_c3 = PrimaryButton;
var _c, _c2, _c3;
$RefreshReg$(_c, "Button");
$RefreshReg$(_c2, "ExampleButton");
$RefreshReg$(_c3, "PrimaryButton");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import.meta.hot.accept();
  if (!window.__bundless_plugin_react_timeout) {
    window.__bundless_plugin_react_timeout = setTimeout(() => {
      window.__bundless_plugin_react_timeout = 0;
      RefreshRuntime.performReactRefresh();
    }, 30);
  }
}
export const __vitroExportsOrdering = ["VitroMdx__0__", "ExampleButton", "VitroMdx__1__", "PrimaryButton"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL21hcmtkb3duL3NyYy9kb2NzLW1hY3JvLnZpdHJvLmpzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsInByaW1hcnkiLCJFeGFtcGxlQnV0dG9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY29uc29sZSIsImxvZyIsIlByaW1hcnlCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGdCQUFnQjtBQUN0QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNDLE9BQU9DO0FBQ1YsUUFBTSxJQUFJQyxNQUNSO0FBQUE7QUFJSixJQUFJQyxZQUFZQztBQUNkTixtQkFBaUJFLE9BQU9LO0FBQ3hCTixtQkFBaUJDLE9BQU9NO0FBQ3hCTixTQUFPSyxlQUFlLENBQUNFLE1BQU1DO0FBQzNCQyxtQkFBZUMsU0FBU0gsTUFBTVYsZ0JBQWdCLE1BQU1XO0FBQUFBO0FBRXREUixTQUFPTSxlQUFlRyxlQUFlRTtBQUFBQTtBQ2xCdkM7QUFDQTtBQUNBO0FBSUs7QUFBQSxTQUFBLE1BQUEsY0FBQSxNQUFBLFVBQUEsTUFBQSxNQUFBLGNBQUEsTUFBQSxNQUFBLDhDQUFBLE1BQUEsY0FBQSxLQUFBLE1BQUEsa0ZBQUEsTUFBQSxjQUFBLEtBQUEsTUFBQSwrWEFBQSxNQUFBLGNBQUEsS0FBQSxNQUFBLDJQQUFBLE1BQUEsY0FBQSxLQUFBLE1BQUEsd0JBQUEsTUFBQSxjQUFBLE1BQUEsTUFBQSxNQUFBLGNBQUEsTUFBQSxNQUFBLE1BQUEsY0FBQSxLQUFBLE1BQUEsVUFBQSxNQUFBLGNBQUEsTUFBQSxNQUFBLE1BQUEsY0FBQSxLQUFBLE1BQUEsVUFBQSxNQUFBLGNBQUEsTUFBQSxNQUFBLE1BQUEsY0FBQSxLQUFBLE1BQUEsV0FBQSxNQUFBLGNBQUEsS0FBQSxNQUFBO0FBQUE7QUFBQTtBQWtCTDtBQUdBLE1BQU1DLFNBQVNDLE9BQU9DO0FBQUFBO0FBQUFBLGtCQUVIQyxDQUFBQSxVQUFXQSxNQUFNQyxVQUFVLGtCQUFrQjtBQUFBLGFBQ2xERCxDQUFBQSxVQUFXQSxNQUFNQyxVQUFVLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtLQUg3Q0o7QUFhQyxhQUFNSyxnQkFBZ0IsTUFBTUMsTUFBTUMsY0FBY1AsUUFBUSxJQUFJO01BQXRESztBQUVSO0FBQUEsU0FBQSxNQUFBLGNBQUEsTUFBQSxVQUFBLE1BQUEsTUFBQSxjQUFBLE1BQUEsTUFBQSw4Q0FBQSxNQUFBLGNBQUEsS0FBQSxNQUFBLGtGQUFBLE1BQUEsY0FBQSxNQUFBLE1BQUEsOENBQUEsTUFBQSxjQUFBLEtBQUEsTUFBQTtBQUFBO0FBQUE7QUFTTDtBQUVBRyxRQUFRQyxJQUFJLElBQUluQixNQUFNO0FBRWYsYUFBTW9CLGdCQUFnQixNQUN6QkosTUFBTUMsY0FBY1AsUUFBUTtBQUFBLEVBQUVJLFNBQVM7QUFBQSxHQUFRO01BRHRDTSIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGRvY3MgfSBmcm9tICdAdml0cm8vY2xpL2RvY3MnXG5cblxuXG5kb2NzYFxuIyBTb21lIGRvY3VtZW50YXRpb24gaW5qZWN0ZWQgd2l0aCBtYXJrZG93blxuXG5PZmZpY2lhIGVhIGRlc2VydW50IGN1bHBhIGFsaXF1YSBsYWJvcmUgYW1ldCBjb21tb2RvIHV0IGVzc2UgdWxsYW1jbyBub3N0cnVkLlxuXG5FeGVyY2l0YXRpb24gZnVnaWF0IGxhYm9ydW0gY29tbW9kbyBxdWlzIGRvLiBEZXNlcnVudCBjaWxsdW0gYWxpcXVpcCBMb3JlbSBvZmZpY2lhIGRlc2VydW50IHZlbGl0IG1pbmltLiBEdWlzIG5pc2kgZWl1c21vZCBudWxsYSBjdXBpZGF0YXQgdmVuaWFtIGFtZXQgZXNzZSBvZmZpY2lhIGVzdC4gVXQgbWluaW0gZG9sb3Igc3VudCBlbGl0IGZ1Z2lhdC4gUXVpIG5vc3RydWQgc2ludCBub3N0cnVkIHByb2lkZW50IHNpbnQgYW1ldCBzaXQuIFBhcmlhdHVyIHF1aXMgZWEgYWRpcGlzaWNpbmcgZnVnaWF0IGlkIGVzc2UuIExhYm9ydW0gcXVpIHZvbHVwdGF0ZSBpbiBlc3NlIHZlbmlhbSBjb25zZXF1YXQgZXN0IGFtZXQgZWxpdCBkZXNlcnVudCBpbiBudWxsYSBhZC5cblxuQWxpcXVhIGNpbGx1bSBsYWJvcmUgZXNzZSBtYWduYSBwcm9pZGVudCB2ZW5pYW0gbm9uIGxhYm9yZSB0ZW1wb3IgdmVuaWFtLiBBbmltIGRvbG9yZSBvZmZpY2lhIHN1bnQgZXhjZXB0ZXVyIGVpdXNtb2QuIEFsaXF1YSBpZCBtb2xsaXQgbW9sbGl0IGlydXJlIGFkIHRlbXBvciB2ZW5pYW0gbm9uIGV0IGluY2lkaWR1bnQgbGFib3J1bSBkb2xvciBjdXBpZGF0YXQgZHVpcy4gRG9sb3Igbm9uIGluY2lkaWR1bnQgbm9uIGF1dGUgZXUuXG5cblxuYSBsaXN0IG9mIHNvbWV0aGluZ1xuXG4tIGNpYW9cbi0gYSB0ZVxuLSBlIGEgdGVcblxuICAgIHNvbWUgY29kZSBoZXJlXG5cbmBcblxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIC8qIEFkYXB0IHRoZSBjb2xvcnMgYmFzZWQgb24gcHJpbWFyeSBwcm9wICovXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IChwcm9wcy5wcmltYXJ5ID8gJ3BhbGV2aW9sZXRyZWQnIDogJ3doaXRlJyl9O1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyAnd2hpdGUnIDogJ3BhbGV2aW9sZXRyZWQnKX07XG5cbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuYFxuXG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlQnV0dG9uID0gKCkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHt9LCAnaGVsbG8nKVxuXG5kb2NzYFxuIyBTb21lIGRvY3VtZW50YXRpb24gaW5qZWN0ZWQgd2l0aCBtYXJrZG93blxuXG5PZmZpY2lhIGVhIGRlc2VydW50IGN1bHBhIGFsaXF1YSBsYWJvcmUgYW1ldCBjb21tb2RvIHV0IGVzc2UgdWxsYW1jbyBub3N0cnVkLlxuXG4jIyBTb21lIGRvY3VtZW50YXRpb24gaW5qZWN0ZWQgd2l0aCBtYXJrZG93blxuXG5FeGVyY2l0YXRpb24gZnVnaWF0IGxhYm9ydW0gY29tbW9kbyBxdWlzIGRvLiBEZXNlcnVudCBjaWxsdW0gYWxpcXVpcCBMb3JlbSBvZmZpY2lhIGRlc2VydW50IHZlbGl0IG1pbmltLiBEdWlzIG5pc2kgZWl1c21vZCBudWxsYSBjdXBpZGF0YXQgdmVuaWFtIGFtZXQgZXNzZSBvZmZpY2lhIGVzdC4gVXQgbWluaW0gZG9sb3Igc3VudCBlbGl0IGZ1Z2lhdC4gUXVpIG5vc3RydWQgc2ludCBub3N0cnVkIHByb2lkZW50IHNpbnQgYW1ldCBzaXQuIFBhcmlhdHVyIHF1aXMgZWEgYWRpcGlzaWNpbmcgZnVnaWF0IGlkIGVzc2UuIExhYm9ydW0gcXVpIHZvbHVwdGF0ZSBpbiBlc3NlIHZlbmlhbSBjb25zZXF1YXQgZXN0IGFtZXQgZWxpdCBkZXNlcnVudCBpbiBudWxsYSBhZC5cblxuYFxuXG5jb25zb2xlLmxvZyhuZXcgRXJyb3IoJ2kgc2hvdWxkIGJlIG9uIGxpbmUgNTQnKSlcblxuZXhwb3J0IGNvbnN0IFByaW1hcnlCdXR0b24gPSAoKSA9PlxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHByaW1hcnk6IHRydWUgfSwgJ2hlbGxvJylcblxuLy8gaW5saW5lYFxuLy8gIyBIZWxsbyBhbm90aGVyIHRpbWVcblxuLy8gc29tZSBwYXJhZ3JhcGhcbi8vIGBcbiJdfQ==