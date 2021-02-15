import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/check-sourcemaps-work.vitro.tsx";
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
import {Alert, AlertIcon, Box} from "/.bundless/web_modules/@chakra-ui/core/dist/es/index.js?namespace=file";
import Wrapper from "/example-package/src/Wrapper.tsx?namespace=file";
export default {
  wrapper: Wrapper
};
export const Main = ({}) => {
  return /* @__PURE__ */ React.createElement(ComplexComponent, {
    "data-vitro-line": 17,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/check-sourcemaps-work.vitro.tsx"
  });
};
_c = Main;
const ComplexComponent = ({}) => {
  return /* @__PURE__ */ React.createElement(Box, {
    p: "10",
    "data-vitro-line": 22,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/check-sourcemaps-work.vitro.tsx"
  }, /* @__PURE__ */ React.createElement(AlertComponent, null));
};
_c2 = ComplexComponent;
const AlertComponent = ({}) => {
  return /* @__PURE__ */ React.createElement(Alert, {
    variant: "left-accent",
    status: "info",
    "data-vitro-line": 30,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/check-sourcemaps-work.vitro.tsx"
  }, /* @__PURE__ */ React.createElement(AlertIcon, null), "Chakra is awesome");
};
_c3 = AlertComponent;
console.log(new Error(`i should be on line 37!`));
var _c, _c2, _c3;
$RefreshReg$(_c, "Main");
$RefreshReg$(_c2, "ComplexComponent");
$RefreshReg$(_c3, "AlertComponent");
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
export const __vitroExportsOrdering = ["default", "Main"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvY2hlY2stc291cmNlbWFwcy13b3JrLnZpdHJvLnRzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJ3cmFwcGVyIiwiV3JhcHBlciIsIk1haW4iLCJDb21wbGV4Q29tcG9uZW50IiwiQWxlcnRDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQztBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUM7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQztBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFRQTtBQUVBLGVBQWU7QUFBQSxFQUNYQyxTQUFTQztBQUFBQTtBQUdOLGFBQU1DLE9BQU8sQ0FBQztBQUNqQixTQUFPLHNCQUFBLGNBQUMsa0JBQUQ7QUFBQSxJQUFBLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBO0FBQUE7S0FERUE7QUFJYixNQUFNQyxtQkFBbUIsQ0FBQztBQUN0QixTQUNJLHNCQUFBLGNBQUMsS0FBRDtBQUFBLElBQUssR0FBRTtBQUFBLElBQVAsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FDSSxzQkFBQSxjQUFDLGdCQUFEO0FBQUE7TUFITkE7QUFRTixNQUFNQyxpQkFBaUIsQ0FBQztBQUNwQixTQUNJLHNCQUFBLGNBQUMsT0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQWMsUUFBTztBQUFBLElBQXBDLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQ0ksc0JBQUEsY0FBQyxXQUFELE9BQUE7QUFBQTtNQUhOQTtBQVNOQyxRQUFRQyxJQUFJLElBQUloQixNQUFPIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBBbGVydCxcbiAgICBBbGVydEljb24sXG4gICAgQWxlcnREZXNjcmlwdGlvbixcbiAgICBCb3gsXG4gICAgU3RhY2ssXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4vV3JhcHBlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHdyYXBwZXI6IFdyYXBwZXIsXG59XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIDxDb21wbGV4Q29tcG9uZW50IC8+XG59XG5cbmNvbnN0IENvbXBsZXhDb21wb25lbnQgPSAoe30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHA9JzEwJz5cbiAgICAgICAgICAgIDxBbGVydENvbXBvbmVudCAvPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmNvbnN0IEFsZXJ0Q29tcG9uZW50ID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9J2xlZnQtYWNjZW50JyBzdGF0dXM9J2luZm8nPlxuICAgICAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICAgICAgQ2hha3JhIGlzIGF3ZXNvbWVcbiAgICAgICAgPC9BbGVydD5cbiAgICApXG59XG5cbmNvbnNvbGUubG9nKG5ldyBFcnJvcihgaSBzaG91bGQgYmUgb24gbGluZSAzNyFgKSlcbiJdfQ==