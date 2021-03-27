import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package/src/complex-components.vitro.tsx";
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
import {Alert, AlertIcon, Box} from "/.bundless/web_modules/index-LL26CVOM.js?namespace=file&t=0";
import Wrapper from "/example-package/src/Wrapper.tsx?namespace=file&t=0";
export default {
  wrapper: Wrapper
};
export const Main = ({}) => {
  return /* @__PURE__ */ React.createElement(ComplexComponent, {
    "data-vitro-line": 17,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/complex-components.vitro.tsx"
  });
};
_c = Main;
const ComplexComponent = ({}) => {
  return /* @__PURE__ */ React.createElement(Box, {
    p: "10",
    "data-vitro-line": 22,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/complex-components.vitro.tsx"
  }, /* @__PURE__ */ React.createElement(AlertComponent, null));
};
_c2 = ComplexComponent;
const AlertComponent = ({}) => {
  return /* @__PURE__ */ React.createElement(Alert, {
    variant: "left-accent",
    status: "info",
    "data-vitro-line": 30,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/complex-components.vitro.tsx"
  }, /* @__PURE__ */ React.createElement(AlertIcon, null), "Chakra is awesome");
};
_c3 = AlertComponent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvY29tcGxleC1jb21wb25lbnRzLnZpdHJvLnRzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJ3cmFwcGVyIiwiV3JhcHBlciIsIk1haW4iLCJDb21wbGV4Q29tcG9uZW50IiwiQWxlcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGdCQUFnQjtBQUN0QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNDLE9BQU9DLDhDQUFBQTtBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUMsS0FBQUE7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQyxPQUFBQTtBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFRQTtBQUVBLGVBQWU7QUFBQSxFQUNYQyxTQUFTQztBQUFBQTtBQUdOLGFBQU1DLE9BQU8sQ0FBQyxPQUFBO0FBQ2pCLFNBQU8sc0JBQUEsY0FBQyxrQkFBRDtBQUFBLElBQUEsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUE7QUFBQTtLQURFQTtBQUliLE1BQU1DLG1CQUFtQixDQUFDLE9BQUE7QUFDdEIsU0FDSSxzQkFBQSxjQUFDLEtBQUQ7QUFBQSxJQUFLLEdBQUU7QUFBQSxJQUFQLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQ0ksc0JBQUEsY0FBQyxnQkFBRDtBQUFBO01BSE5BO0FBUU4sTUFBTUMsaUJBQWlCLENBQUMsT0FBQTtBQUNwQixTQUNJLHNCQUFBLGNBQUMsT0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQWMsUUFBTztBQUFBLElBQXBDLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQ0ksc0JBQUEsY0FBQyxXQUFELE9BQUE7QUFBQTtNQUhOQSIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQWxlcnQsXG4gICAgQWxlcnRJY29uLFxuICAgIEFsZXJ0RGVzY3JpcHRpb24sXG4gICAgQm94LFxuICAgIFN0YWNrLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL1dyYXBwZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB3cmFwcGVyOiBXcmFwcGVyLFxufVxuXG5leHBvcnQgY29uc3QgTWFpbiA9ICh7fSkgPT4ge1xuICAgIHJldHVybiA8Q29tcGxleENvbXBvbmVudCAvPlxufVxuXG5jb25zdCBDb21wbGV4Q29tcG9uZW50ID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBwPScxMCc+XG4gICAgICAgICAgICA8QWxlcnRDb21wb25lbnQgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5jb25zdCBBbGVydENvbXBvbmVudCA9ICh7fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxBbGVydCB2YXJpYW50PSdsZWZ0LWFjY2VudCcgc3RhdHVzPSdpbmZvJz5cbiAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgIENoYWtyYSBpcyBhd2Vzb21lXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgKVxufVxuIl19