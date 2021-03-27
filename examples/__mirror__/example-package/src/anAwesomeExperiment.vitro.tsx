import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package/src/anAwesomeExperiment.vitro.tsx";
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
import {Button, Alert, AlertIcon, Box} from "/.bundless/web_modules/index-LL26CVOM.js?namespace=file&t=0";
import Wrapper from "/example-package/src/Wrapper.tsx?namespace=file&t=0";
export default {
  title: "My Awesome Component!",
  wrapper: Wrapper
};
export const SimpleButton = ({}) => {
  return /* @__PURE__ */ React.createElement(Button, {
    "data-vitro-line": 18,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx"
  }, "Click me");
};
_c = SimpleButton;
export const AlertStory = ({}) => {
  return /* @__PURE__ */ React.createElement(Box, {
    p: "2",
    "data-vitro-line": 23,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvYW5Bd2Vzb21lRXhwZXJpbWVudC52aXRyby50c3giXSwibmFtZXMiOlsiX190aGlzX3BhdGhfXyIsInByZXZSZWZyZXNoUmVnIiwicHJldlJlZnJlc2hTaWciLCJ3aW5kb3ciLCJfX2J1bmRsZXNzX3BsdWdpbl9yZWFjdF9wcmVhbWJsZV9pbnN0YWxsZWRfXyIsIkVycm9yIiwiaW1wb3J0IiwiaG90IiwiJFJlZnJlc2hSZWckIiwiJFJlZnJlc2hTaWckIiwidHlwZSIsImlkIiwiUmVmcmVzaFJ1bnRpbWUiLCJyZWdpc3RlciIsImNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtIiwidGl0bGUiLCJ3cmFwcGVyIiwiV3JhcHBlciIsIlNpbXBsZUJ1dHRvbiIsIkFsZXJ0U3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGdCQUFnQjtBQUN0QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNDLE9BQU9DLDhDQUFBQTtBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUMsS0FBQUE7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQyxPQUFBQTtBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFRQTtBQUVBLGVBQWU7QUFBQSxFQUNYQyxPQUFPO0FBQUEsRUFDUEMsU0FBU0M7QUFBQUE7QUFHTixhQUFNQyxlQUFlLENBQUMsT0FBQTtBQUN6QixTQUFPLHNCQUFBLGNBQUMsUUFBRDtBQUFBLElBQUEsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FBUTtBQUFBO0tBRE5BO0FBSU4sYUFBTUMsYUFBYSxDQUFDLE9BQUE7QUFDdkIsU0FDSSxzQkFBQSxjQUFDLEtBQUQ7QUFBQSxJQUFLLEdBQUU7QUFBQSxJQUFQLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQ0ksc0JBQUEsY0FBQyxPQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBYyxRQUFPO0FBQUEsS0FDaEMsc0JBQUEsY0FBQyxXQUFELE9BQUE7QUFBQTtNQUpIQSIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgQWxlcnQsXG4gICAgQWxlcnRJY29uLFxuICAgIEFsZXJ0RGVzY3JpcHRpb24sXG4gICAgQm94LFxuICAgIFN0YWNrLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL1dyYXBwZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ015IEF3ZXNvbWUgQ29tcG9uZW50IScsXG4gICAgd3JhcHBlcjogV3JhcHBlcixcbn1cblxuZXhwb3J0IGNvbnN0IFNpbXBsZUJ1dHRvbiA9ICh7fSkgPT4ge1xuICAgIHJldHVybiA8QnV0dG9uPkNsaWNrIG1lPC9CdXR0b24+XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydFN0b3J5ID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBwPScyJz5cbiAgICAgICAgICAgIDxBbGVydCB2YXJpYW50PSdsZWZ0LWFjY2VudCcgc3RhdHVzPSdpbmZvJz5cbiAgICAgICAgICAgICAgICA8QWxlcnRJY29uIC8+XG4gICAgICAgICAgICAgICAgQ2hha3JhIGlzIGF3ZXNvbWVcbiAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cbiJdfQ==