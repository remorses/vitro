import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/example-styled-components.vitro.jsx";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL3N0eWxlZC1jb21wb25lbnRzL3NyYy9leGFtcGxlLXN0eWxlZC1jb21wb25lbnRzLnZpdHJvLmpzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsInByaW1hcnkiLCJFeGFtcGxlQnV0dG9uIiwiUHJpbWFyeUJ1dHRvbiIsIlRpdGxlIiwiaDEiLCJXcmFwcGVyIiwic2VjdGlvbiIsIldyYXBwZWRUaXRsZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsZ0JBQWdCO0FBQ3RCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0MsT0FBT0M7QUFDVixRQUFNLElBQUlDLE1BQ1I7QUFBQTtBQUlKLElBQUlDLFlBQVlDO0FBQ2ROLG1CQUFpQkUsT0FBT0s7QUFDeEJOLG1CQUFpQkMsT0FBT007QUFDeEJOLFNBQU9LLGVBQWUsQ0FBQ0UsTUFBTUM7QUFDM0JDLG1CQUFlQyxTQUFTSCxNQUFNVixnQkFBZ0IsTUFBTVc7QUFBQUE7QUFFdERSLFNBQU9NLGVBQWVHLGVBQWVFO0FBQUFBO0FDbEJ2QztBQUNBO0FBRUEsTUFBTUMsU0FBU0MsT0FBT0M7QUFBQUE7QUFBQUEsa0JBRUhDLENBQUFBLFVBQVdBLE1BQU1DLFVBQVUsa0JBQWtCO0FBQUEsYUFDbERELENBQUFBLFVBQVdBLE1BQU1DLFVBQVUsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0tBSDdDSjtBQVlDLGFBQU1LLGdCQUFnQixNQUFNLHNCQUFBLGNBQUMsUUFBRDtBQUFBLEVBQUEsbUJBQUE7QUFBQSxFQUFBLHVCQUFBO0FBQUEsR0FBUTtNQUE5QkE7QUFDTixhQUFNQyxnQkFBZ0IsTUFBTSxzQkFBQSxjQUFDLFFBQUQ7QUFBQSxFQUFRLFNBQVI7QUFBQSxFQUFBLG1CQUFBO0FBQUEsRUFBQSx1QkFBQTtBQUFBLEdBQWdCO01BQXRDQTtBQUViLE1BQU1DLFFBQVFOLE9BQU9PO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO01BQWZEO0FBT04sTUFBTUUsVUFBVVIsT0FBT1M7QUFBQUE7QUFBQUE7QUFBQUE7TUFBakJEO0FBS0MsYUFBTUUsZUFBZSxNQUN4QixzQkFBQSxjQUFDLFNBQUQ7QUFBQSxFQUFBLG1CQUFBO0FBQUEsRUFBQSx1QkFBQTtBQUFBLEdBQ0ksc0JBQUEsY0FBQyxPQUFELE1BQU87TUFGRkEiLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgLyogQWRhcHQgdGhlIGNvbG9ycyBiYXNlZCBvbiBwcmltYXJ5IHByb3AgKi9cbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLnByaW1hcnkgPyAncGFsZXZpb2xldHJlZCcgOiAnd2hpdGUnKX07XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMucHJpbWFyeSA/ICd3aGl0ZScgOiAncGFsZXZpb2xldHJlZCcpfTtcblxuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAxZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlQnV0dG9uID0gKCkgPT4gPEJ1dHRvbj50ZXh0PC9CdXR0b24+XG5leHBvcnQgY29uc3QgUHJpbWFyeUJ1dHRvbiA9ICgpID0+IDxCdXR0b24gcHJpbWFyeT50ZXh0PC9CdXR0b24+XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuYFxuXG4vLyBDcmVhdGUgYSBXcmFwcGVyIGNvbXBvbmVudCB0aGF0J2xsIHJlbmRlciBhIDxzZWN0aW9uPiB0YWcgd2l0aCBzb21lIHN0eWxlc1xuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIHBhZGRpbmc6IDRlbTtcbiAgICBiYWNrZ3JvdW5kOiBwYXBheWF3aGlwO1xuYFxuXG5leHBvcnQgY29uc3QgV3JhcHBlZFRpdGxlID0gKCkgPT4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgICA8VGl0bGU+SGVsbG8gV29ybGQhPC9UaXRsZT5cbiAgICA8L1dyYXBwZXI+XG4pXG4iXX0=