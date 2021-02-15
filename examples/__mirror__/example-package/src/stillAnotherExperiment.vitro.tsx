import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/stillAnotherExperiment.vitro.tsx";
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
import {Button, Alert, AlertIcon, Box} from "/.bundless/web_modules/@chakra-ui/core/dist/es/index.js?namespace=file";
export default {
  title: "My Awesome Component!"
};
export const SimpleButton = ({}) => {
  return /* @__PURE__ */ React.createElement(Button, {
    "data-vitro-line": 17,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/stillAnotherExperiment.vitro.tsx"
  }, "Click me");
};
_c = SimpleButton;
export const AlertStory = ({}) => {
  return /* @__PURE__ */ React.createElement(Box, {
    p: "2",
    "data-vitro-line": 22,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/stillAnotherExperiment.vitro.tsx"
  }, /* @__PURE__ */ React.createElement(Alert, {
    variant: "left-accent",
    status: "info"
  }, /* @__PURE__ */ React.createElement(AlertIcon, null), "Chakra is awesome"));
};
_c2 = AlertStory;
var _c, _c2;
$RefreshReg$(_c, "SimpleButton");
$RefreshReg$(_c2, "AlertStory");
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
export const __vitroExportsOrdering = ["default", "SimpleButton", "AlertStory"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvc3RpbGxBbm90aGVyRXhwZXJpbWVudC52aXRyby50c3giXSwibmFtZXMiOlsiX190aGlzX3BhdGhfXyIsInByZXZSZWZyZXNoUmVnIiwicHJldlJlZnJlc2hTaWciLCJ3aW5kb3ciLCJfX2J1bmRsZXNzX3BsdWdpbl9yZWFjdF9wcmVhbWJsZV9pbnN0YWxsZWRfXyIsIkVycm9yIiwiaW1wb3J0IiwiaG90IiwiJFJlZnJlc2hSZWckIiwiJFJlZnJlc2hTaWckIiwidHlwZSIsImlkIiwiUmVmcmVzaFJ1bnRpbWUiLCJyZWdpc3RlciIsImNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtIiwidGl0bGUiLCJTaW1wbGVCdXR0b24iLCJBbGVydFN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQztBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUM7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQztBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFVQSxlQUFlO0FBQUEsRUFDWEMsT0FBTztBQUFBO0FBR0osYUFBTUMsZUFBZSxDQUFDO0FBQ3pCLFNBQU8sc0JBQUEsY0FBQyxRQUFEO0FBQUEsSUFBQSxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQSxLQUFRO0FBQUE7S0FETkE7QUFJTixhQUFNQyxhQUFhLENBQUM7QUFDdkIsU0FDSSxzQkFBQSxjQUFDLEtBQUQ7QUFBQSxJQUFLLEdBQUU7QUFBQSxJQUFQLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQ0ksc0JBQUEsY0FBQyxPQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBYyxRQUFPO0FBQUEsS0FDaEMsc0JBQUEsY0FBQyxXQUFELE9BQUE7QUFBQTtNQUpIQSIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQWxlcnQsXG4gICAgQWxlcnRJY29uLFxuICAgIEFsZXJ0RGVzY3JpcHRpb24sXG4gICAgQm94LFxuICAgIFN0YWNrLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdNeSBBd2Vzb21lIENvbXBvbmVudCEnLFxufVxuXG5leHBvcnQgY29uc3QgU2ltcGxlQnV0dG9uID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIDxCdXR0b24+Q2xpY2sgbWU8L0J1dHRvbj5cbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0U3RvcnkgPSAoe30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHA9JzInPlxuICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9J2xlZnQtYWNjZW50JyBzdGF0dXM9J2luZm8nPlxuICAgICAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgICAgICBDaGFrcmEgaXMgYXdlc29tZVxuICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuIl19