import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package-scope/example-sub-package-2/src/index.vitro.tsx";
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
import {Component1} from "/example-package-scope/example-sub-package-2/src/index.tsx?namespace=file&t=0";
export const Simple = ({}) => {
  return /* @__PURE__ */ React.createElement(Component1, {
    "data-vitro-line": 5,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2/src/index.vitro.tsx"
  });
};
_c = Simple;
export const DifferentColor = ({}) => {
  return /* @__PURE__ */ React.createElement(Component1, {
    bg: "red.500",
    "data-vitro-line": 9,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2/src/index.vitro.tsx"
  });
};
_c2 = DifferentColor;
var _c, _c2;
$RefreshReg$(_c, "Simple");
$RefreshReg$(_c2, "DifferentColor");
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
export const __vitroExportsOrdering = ["Simple", "DifferentColor"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS1zY29wZS9leGFtcGxlLXN1Yi1wYWNrYWdlLTIvc3JjL2luZGV4LnZpdHJvLnRzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJTaW1wbGUiLCJEaWZmZXJlbnRDb2xvciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsZ0JBQWdCO0FBQ3RCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0MsT0FBT0MsOENBQUFBO0FBQ1YsUUFBTSxJQUFJQyxNQUNSO0FBQUE7QUFJSixJQUFJQyxZQUFZQyxLQUFBQTtBQUNkTixtQkFBaUJFLE9BQU9LO0FBQ3hCTixtQkFBaUJDLE9BQU9NO0FBQ3hCTixTQUFPSyxlQUFlLENBQUNFLE1BQU1DLE9BQUFBO0FBQzNCQyxtQkFBZUMsU0FBU0gsTUFBTVYsZ0JBQWdCLE1BQU1XO0FBQUFBO0FBRXREUixTQUFPTSxlQUFlRyxlQUFlRTtBQUFBQTtBQ2xCdkM7QUFDQTtBQUVPLGFBQU1DLFNBQVMsQ0FBQyxPQUFBO0FBQ25CLFNBQU8sc0JBQUEsY0FBQyxZQUFEO0FBQUEsSUFBQSxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQTtBQUFBO0tBREVBO0FBSU4sYUFBTUMsaUJBQWlCLENBQUMsT0FBQTtBQUMzQixTQUFPLHNCQUFBLGNBQUMsWUFBRDtBQUFBLElBQVksSUFBRztBQUFBLElBQWYsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUE7QUFBQTtNQURFQSIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29tcG9uZW50MSB9IGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBjb25zdCBTaW1wbGUgPSAoe30pID0+IHtcbiAgICByZXR1cm4gPENvbXBvbmVudDEgLz5cbn1cblxuZXhwb3J0IGNvbnN0IERpZmZlcmVudENvbG9yID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIDxDb21wb25lbnQxIGJnPSdyZWQuNTAwJyAvPlxufVxuIl19