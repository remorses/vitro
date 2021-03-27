import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "styled-components/src/example-styled-components.vitro.jsx";
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
export const ExampleButton = () => /* @__PURE__ */ React.createElement(Button, {
  "data-vitro-line": 16,
  "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/example-styled-components.vitro.jsx"
}, "text");
_c2 = ExampleButton;
export const PrimaryButton = () => /* @__PURE__ */ React.createElement(Button, {
  primary: true,
  "data-vitro-line": 17,
  "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/example-styled-components.vitro.jsx"
}, "text");
_c3 = PrimaryButton;
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
_c4 = Title;
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;
_c5 = Wrapper;
export const WrappedTitle = () => /* @__PURE__ */ React.createElement(Wrapper, {
  "data-vitro-line": 32,
  "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/example-styled-components.vitro.jsx"
}, /* @__PURE__ */ React.createElement(Title, null, "Hello World!"));
_c6 = WrappedTitle;
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "Button");
$RefreshReg$(_c2, "ExampleButton");
$RefreshReg$(_c3, "PrimaryButton");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "Wrapper");
$RefreshReg$(_c6, "WrappedTitle");
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
export const __vitroExportsOrdering = ["ExampleButton", "PrimaryButton", "WrappedTitle"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL3N0eWxlZC1jb21wb25lbnRzL3NyYy9leGFtcGxlLXN0eWxlZC1jb21wb25lbnRzLnZpdHJvLmpzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsInByaW1hcnkiLCJFeGFtcGxlQnV0dG9uIiwiUHJpbWFyeUJ1dHRvbiIsIlRpdGxlIiwiaDEiLCJXcmFwcGVyIiwic2VjdGlvbiIsIldyYXBwZWRUaXRsZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsZ0JBQWdCO0FBQ3RCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0MsT0FBT0MsOENBQUFBO0FBQ1YsUUFBTSxJQUFJQyxNQUNSO0FBQUE7QUFJSixJQUFJQyxZQUFZQyxLQUFBQTtBQUNkTixtQkFBaUJFLE9BQU9LO0FBQ3hCTixtQkFBaUJDLE9BQU9NO0FBQ3hCTixTQUFPSyxlQUFlLENBQUNFLE1BQU1DLE9BQUFBO0FBQzNCQyxtQkFBZUMsU0FBU0gsTUFBTVYsZ0JBQWdCLE1BQU1XO0FBQUFBO0FBRXREUixTQUFPTSxlQUFlRyxlQUFlRTtBQUFBQTtBQ2xCdkM7QUFDQTtBQUVBLE1BQU1DLFNBQVNDLE9BQU9DO0FBQUFBO0FBQUFBLGtCQUVIQyxDQUFBQSxVQUFXQSxNQUFNQyxVQUFVLGtCQUFrQjtBQUFBLGFBQ2xERCxDQUFBQSxVQUFXQSxNQUFNQyxVQUFVLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtLQUg3Q0o7QUFZQyxhQUFNSyxnQkFBZ0IsTUFBTSxzQkFBQSxjQUFDLFFBQUQ7QUFBQSxFQUFBLG1CQUFBO0FBQUEsRUFBQSx1QkFBQTtBQUFBLEdBQVE7TUFBOUJBO0FBQ04sYUFBTUMsZ0JBQWdCLE1BQU0sc0JBQUEsY0FBQyxRQUFEO0FBQUEsRUFBUSxTQUFSO0FBQUEsRUFBQSxtQkFBQTtBQUFBLEVBQUEsdUJBQUE7QUFBQSxHQUFnQjtNQUF0Q0E7QUFFYixNQUFNQyxRQUFRTixPQUFPTztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtNQUFmRDtBQU9OLE1BQU1FLFVBQVVSLE9BQU9TO0FBQUFBO0FBQUFBO0FBQUFBO01BQWpCRDtBQUtDLGFBQU1FLGVBQWUsTUFDeEIsc0JBQUEsY0FBQyxTQUFEO0FBQUEsRUFBQSxtQkFBQTtBQUFBLEVBQUEsdUJBQUE7QUFBQSxHQUNJLHNCQUFBLGNBQUMsT0FBRCxNQUFPO01BRkZBIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIC8qIEFkYXB0IHRoZSBjb2xvcnMgYmFzZWQgb24gcHJpbWFyeSBwcm9wICovXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IChwcm9wcy5wcmltYXJ5ID8gJ3BhbGV2aW9sZXRyZWQnIDogJ3doaXRlJyl9O1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyAnd2hpdGUnIDogJ3BhbGV2aW9sZXRyZWQnKX07XG5cbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuYFxuXG5leHBvcnQgY29uc3QgRXhhbXBsZUJ1dHRvbiA9ICgpID0+IDxCdXR0b24+dGV4dDwvQnV0dG9uPlxuZXhwb3J0IGNvbnN0IFByaW1hcnlCdXR0b24gPSAoKSA9PiA8QnV0dG9uIHByaW1hcnk+dGV4dDwvQnV0dG9uPlxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcbmBcblxuLy8gQ3JlYXRlIGEgV3JhcHBlciBjb21wb25lbnQgdGhhdCdsbCByZW5kZXIgYSA8c2VjdGlvbj4gdGFnIHdpdGggc29tZSBzdHlsZXNcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBwYWRkaW5nOiA0ZW07XG4gICAgYmFja2dyb3VuZDogcGFwYXlhd2hpcDtcbmBcblxuZXhwb3J0IGNvbnN0IFdyYXBwZWRUaXRsZSA9ICgpID0+IChcbiAgICA8V3JhcHBlcj5cbiAgICAgICAgPFRpdGxlPkhlbGxvIFdvcmxkITwvVGl0bGU+XG4gICAgPC9XcmFwcGVyPlxuKVxuIl19