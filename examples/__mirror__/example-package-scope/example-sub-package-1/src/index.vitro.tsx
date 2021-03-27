import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package-scope/example-sub-package-1/src/index.vitro.tsx";
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
import {Component1} from "/example-package-scope/example-sub-package-1/src/index.tsx?namespace=file&t=0";
import {Button, Progress, Box, ThemeProvider} from "/.bundless/web_modules/index-LL26CVOM.js?namespace=file&t=0";
export const Simple = ({}) => {
  return /* @__PURE__ */ React.createElement(Component1, {
    "data-vitro-line": 8,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx"
  });
};
_c = Simple;
export const DifferentColor = ({}) => {
  return /* @__PURE__ */ React.createElement(Component1, {
    bg: "red",
    "data-vitro-line": 12,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx"
  });
};
_c2 = DifferentColor;
export const NotDefinedWidth = ({}) => {
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    "data-vitro-line": 17,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx"
  }, /* @__PURE__ */ React.createElement(Box, {
    width: "100%"
  }, /* @__PURE__ */ React.createElement(Button, null, "click me!"), /* @__PURE__ */ React.createElement(Progress, {
    borderRadius: "4",
    value: 90
  })));
};
_c3 = NotDefinedWidth;
var _c, _c2, _c3;
$RefreshReg$(_c, "Simple");
$RefreshReg$(_c2, "DifferentColor");
$RefreshReg$(_c3, "NotDefinedWidth");
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
export const __vitroExportsOrdering = ["Simple", "DifferentColor", "NotDefinedWidth"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS1zY29wZS9leGFtcGxlLXN1Yi1wYWNrYWdlLTEvc3JjL2luZGV4LnZpdHJvLnRzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJTaW1wbGUiLCJEaWZmZXJlbnRDb2xvciIsIk5vdERlZmluZWRXaWR0aCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsZ0JBQWdCO0FBQ3RCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0MsT0FBT0MsOENBQUFBO0FBQ1YsUUFBTSxJQUFJQyxNQUNSO0FBQUE7QUFJSixJQUFJQyxZQUFZQyxLQUFBQTtBQUNkTixtQkFBaUJFLE9BQU9LO0FBQ3hCTixtQkFBaUJDLE9BQU9NO0FBQ3hCTixTQUFPSyxlQUFlLENBQUNFLE1BQU1DLE9BQUFBO0FBQzNCQyxtQkFBZUMsU0FBU0gsTUFBTVYsZ0JBQWdCLE1BQU1XO0FBQUFBO0FBRXREUixTQUFPTSxlQUFlRyxlQUFlRTtBQUFBQTtBQ2xCdkM7QUFDQTtBQUNBO0FBSU8sYUFBTUMsU0FBUyxDQUFDLE9BQUE7QUFDbkIsU0FBTyxzQkFBQSxjQUFDLFlBQUQ7QUFBQSxJQUFBLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBO0FBQUE7S0FERUE7QUFJTixhQUFNQyxpQkFBaUIsQ0FBQyxPQUFBO0FBQzNCLFNBQU8sc0JBQUEsY0FBQyxZQUFEO0FBQUEsSUFBWSxJQUFHO0FBQUEsSUFBZixtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQTtBQUFBO01BREVBO0FBSU4sYUFBTUMsa0JBQWtCLENBQUMsT0FBQTtBQUM1QixTQUNJLHNCQUFBLGNBQUMsZUFBRDtBQUFBLElBQUEsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FDSSxzQkFBQSxjQUFDLEtBQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxLQUNQLHNCQUFBLGNBQUMsUUFBRCxNQUFRLGNBQ1Isc0JBQUEsY0FBQyxVQUFEO0FBQUEsSUFBVSxjQUFhO0FBQUEsSUFBSSxPQUFPO0FBQUE7QUFBQTtNQUxyQ0EiLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbXBvbmVudDEgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgQnV0dG9uLCBQcm9ncmVzcywgQm94LCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuXG5cblxuZXhwb3J0IGNvbnN0IFNpbXBsZSA9ICh7fSkgPT4ge1xuICAgIHJldHVybiA8Q29tcG9uZW50MSAvPlxufVxuXG5leHBvcnQgY29uc3QgRGlmZmVyZW50Q29sb3IgPSAoe30pID0+IHtcbiAgICByZXR1cm4gPENvbXBvbmVudDEgYmc9J3JlZCcgLz5cbn1cblxuZXhwb3J0IGNvbnN0IE5vdERlZmluZWRXaWR0aCA9ICh7fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPEJveCB3aWR0aD0nMTAwJSc+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5jbGljayBtZSE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgYm9yZGVyUmFkaXVzPSc0JyB2YWx1ZT17OTB9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbn1cbiJdfQ==