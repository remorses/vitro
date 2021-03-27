import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "markdown/src/docs-macro.vitro.jsx";
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
import react_cjsImport2 from "/.bundless/web_modules/index-6FKCBOBS.js?namespace=file&t=0"; const React = react_cjsImport2 && react_cjsImport2.__esModule ? react_cjsImport2.default : react_cjsImport2;;
import styled, {css} from "/.bundless/web_modules/styled-components.esm-CUDAHWYK.js?namespace=file&t=0";
import {docs} from "/__..__/packages/cli/docs.js?namespace=file&t=0";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL21hcmtkb3duL3NyYy9kb2NzLW1hY3JvLnZpdHJvLmpzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsInByaW1hcnkiLCJFeGFtcGxlQnV0dG9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY29uc29sZSIsImxvZyIsIlByaW1hcnlCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGdCQUFnQjtBQUN0QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNDLE9BQU9DLDhDQUFBQTtBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUMsS0FBQUE7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQyxPQUFBQTtBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFDQTtBQUlLLGdDQUFBO0FBQUEsU0FBQSxNQUFBLGNBQUEsTUFBQSxVQUFBLE1BQUEsTUFBQSxjQUFBLE1BQUEsTUFBQSw4Q0FBQSxNQUFBLGNBQUEsS0FBQSxNQUFBLGtGQUFBLE1BQUEsY0FBQSxLQUFBLE1BQUEsK1hBQUEsTUFBQSxjQUFBLEtBQUEsTUFBQSwyUEFBQSxNQUFBLGNBQUEsS0FBQSxNQUFBLHdCQUFBLE1BQUEsY0FBQSxNQUFBLE1BQUEsTUFBQSxjQUFBLE1BQUEsTUFBQSxNQUFBLGNBQUEsS0FBQSxNQUFBLFVBQUEsTUFBQSxjQUFBLE1BQUEsTUFBQSxNQUFBLGNBQUEsS0FBQSxNQUFBLFVBQUEsTUFBQSxjQUFBLE1BQUEsTUFBQSxNQUFBLGNBQUEsS0FBQSxNQUFBLFdBQUEsTUFBQSxjQUFBLEtBQUEsTUFBQTtBQUFBO0FBQUE7QUFrQkw7QUFHQSxNQUFNQyxTQUFTQyxPQUFPQztBQUFBQTtBQUFBQSxrQkFFSEMsQ0FBQUEsVUFBV0EsTUFBTUMsVUFBVSxrQkFBa0I7QUFBQSxhQUNsREQsQ0FBQUEsVUFBV0EsTUFBTUMsVUFBVSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7S0FIN0NKO0FBYUMsYUFBTUssZ0JBQWdCLE1BQU1DLE1BQU1DLGNBQWNQLFFBQVEsSUFBSTtNQUF0REs7QUFFUixnQ0FBQTtBQUFBLFNBQUEsTUFBQSxjQUFBLE1BQUEsVUFBQSxNQUFBLE1BQUEsY0FBQSxNQUFBLE1BQUEsOENBQUEsTUFBQSxjQUFBLEtBQUEsTUFBQSxrRkFBQSxNQUFBLGNBQUEsTUFBQSxNQUFBLDhDQUFBLE1BQUEsY0FBQSxLQUFBLE1BQUE7QUFBQTtBQUFBO0FBU0w7QUFFQUcsUUFBUUMsSUFBSSxJQUFJbkIsTUFBTTtBQUVmLGFBQU1vQixnQkFBZ0IsTUFDekJKLE1BQU1DLGNBQWNQLFFBQVE7QUFBQSxFQUFFSSxTQUFTO0FBQUEsR0FBUTtNQUR0Q00iLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBkb2NzIH0gZnJvbSAnQHZpdHJvL2NsaS9kb2NzJ1xuXG5cblxuZG9jc2BcbiMgU29tZSBkb2N1bWVudGF0aW9uIGluamVjdGVkIHdpdGggbWFya2Rvd25cblxuT2ZmaWNpYSBlYSBkZXNlcnVudCBjdWxwYSBhbGlxdWEgbGFib3JlIGFtZXQgY29tbW9kbyB1dCBlc3NlIHVsbGFtY28gbm9zdHJ1ZC5cblxuRXhlcmNpdGF0aW9uIGZ1Z2lhdCBsYWJvcnVtIGNvbW1vZG8gcXVpcyBkby4gRGVzZXJ1bnQgY2lsbHVtIGFsaXF1aXAgTG9yZW0gb2ZmaWNpYSBkZXNlcnVudCB2ZWxpdCBtaW5pbS4gRHVpcyBuaXNpIGVpdXNtb2QgbnVsbGEgY3VwaWRhdGF0IHZlbmlhbSBhbWV0IGVzc2Ugb2ZmaWNpYSBlc3QuIFV0IG1pbmltIGRvbG9yIHN1bnQgZWxpdCBmdWdpYXQuIFF1aSBub3N0cnVkIHNpbnQgbm9zdHJ1ZCBwcm9pZGVudCBzaW50IGFtZXQgc2l0LiBQYXJpYXR1ciBxdWlzIGVhIGFkaXBpc2ljaW5nIGZ1Z2lhdCBpZCBlc3NlLiBMYWJvcnVtIHF1aSB2b2x1cHRhdGUgaW4gZXNzZSB2ZW5pYW0gY29uc2VxdWF0IGVzdCBhbWV0IGVsaXQgZGVzZXJ1bnQgaW4gbnVsbGEgYWQuXG5cbkFsaXF1YSBjaWxsdW0gbGFib3JlIGVzc2UgbWFnbmEgcHJvaWRlbnQgdmVuaWFtIG5vbiBsYWJvcmUgdGVtcG9yIHZlbmlhbS4gQW5pbSBkb2xvcmUgb2ZmaWNpYSBzdW50IGV4Y2VwdGV1ciBlaXVzbW9kLiBBbGlxdWEgaWQgbW9sbGl0IG1vbGxpdCBpcnVyZSBhZCB0ZW1wb3IgdmVuaWFtIG5vbiBldCBpbmNpZGlkdW50IGxhYm9ydW0gZG9sb3IgY3VwaWRhdGF0IGR1aXMuIERvbG9yIG5vbiBpbmNpZGlkdW50IG5vbiBhdXRlIGV1LlxuXG5cbmEgbGlzdCBvZiBzb21ldGhpbmdcblxuLSBjaWFvXG4tIGEgdGVcbi0gZSBhIHRlXG5cbiAgICBzb21lIGNvZGUgaGVyZVxuXG5gXG5cblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICAvKiBBZGFwdCB0aGUgY29sb3JzIGJhc2VkIG9uIHByaW1hcnkgcHJvcCAqL1xuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMucHJpbWFyeSA/ICdwYWxldmlvbGV0cmVkJyA6ICd3aGl0ZScpfTtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5wcmltYXJ5ID8gJ3doaXRlJyA6ICdwYWxldmlvbGV0cmVkJyl9O1xuXG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMC4yNWVtIDFlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbmBcblxuXG5leHBvcnQgY29uc3QgRXhhbXBsZUJ1dHRvbiA9ICgpID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7fSwgJ2hlbGxvJylcblxuZG9jc2BcbiMgU29tZSBkb2N1bWVudGF0aW9uIGluamVjdGVkIHdpdGggbWFya2Rvd25cblxuT2ZmaWNpYSBlYSBkZXNlcnVudCBjdWxwYSBhbGlxdWEgbGFib3JlIGFtZXQgY29tbW9kbyB1dCBlc3NlIHVsbGFtY28gbm9zdHJ1ZC5cblxuIyMgU29tZSBkb2N1bWVudGF0aW9uIGluamVjdGVkIHdpdGggbWFya2Rvd25cblxuRXhlcmNpdGF0aW9uIGZ1Z2lhdCBsYWJvcnVtIGNvbW1vZG8gcXVpcyBkby4gRGVzZXJ1bnQgY2lsbHVtIGFsaXF1aXAgTG9yZW0gb2ZmaWNpYSBkZXNlcnVudCB2ZWxpdCBtaW5pbS4gRHVpcyBuaXNpIGVpdXNtb2QgbnVsbGEgY3VwaWRhdGF0IHZlbmlhbSBhbWV0IGVzc2Ugb2ZmaWNpYSBlc3QuIFV0IG1pbmltIGRvbG9yIHN1bnQgZWxpdCBmdWdpYXQuIFF1aSBub3N0cnVkIHNpbnQgbm9zdHJ1ZCBwcm9pZGVudCBzaW50IGFtZXQgc2l0LiBQYXJpYXR1ciBxdWlzIGVhIGFkaXBpc2ljaW5nIGZ1Z2lhdCBpZCBlc3NlLiBMYWJvcnVtIHF1aSB2b2x1cHRhdGUgaW4gZXNzZSB2ZW5pYW0gY29uc2VxdWF0IGVzdCBhbWV0IGVsaXQgZGVzZXJ1bnQgaW4gbnVsbGEgYWQuXG5cbmBcblxuY29uc29sZS5sb2cobmV3IEVycm9yKCdpIHNob3VsZCBiZSBvbiBsaW5lIDU0JykpXG5cbmV4cG9ydCBjb25zdCBQcmltYXJ5QnV0dG9uID0gKCkgPT5cbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBwcmltYXJ5OiB0cnVlIH0sICdoZWxsbycpXG5cbi8vIGlubGluZWBcbi8vICMgSGVsbG8gYW5vdGhlciB0aW1lXG5cbi8vIHNvbWUgcGFyYWdyYXBoXG4vLyBgXG4iXX0=