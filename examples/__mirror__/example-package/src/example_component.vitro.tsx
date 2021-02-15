import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/example_component.vitro.tsx";
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
import Wrapper from "/example-package/src/Wrapper.tsx?namespace=file";
export default {
  title: "My Awesome Component!",
  wrapper: Wrapper
};
export const SimpleButton = ({}) => {
  return /* @__PURE__ */ React.createElement(Button, {
    "data-vitro-line": 18,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/example_component.vitro.tsx"
  }, "Click me");
};
_c = SimpleButton;
export const AlertStory = ({}) => {
  return /* @__PURE__ */ React.createElement(Box, {
    p: "2",
    "data-vitro-line": 23,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/example_component.vitro.tsx"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvZXhhbXBsZV9jb21wb25lbnQudml0cm8udHN4Il0sIm5hbWVzIjpbIl9fdGhpc19wYXRoX18iLCJwcmV2UmVmcmVzaFJlZyIsInByZXZSZWZyZXNoU2lnIiwid2luZG93IiwiX19idW5kbGVzc19wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18iLCJFcnJvciIsImltcG9ydCIsImhvdCIsIiRSZWZyZXNoUmVnJCIsIiRSZWZyZXNoU2lnJCIsInR5cGUiLCJpZCIsIlJlZnJlc2hSdW50aW1lIiwicmVnaXN0ZXIiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsInRpdGxlIiwid3JhcHBlciIsIldyYXBwZXIiLCJTaW1wbGVCdXR0b24iLCJBbGVydFN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQztBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUM7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQztBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFRQTtBQUVBLGVBQWU7QUFBQSxFQUNYQyxPQUFPO0FBQUEsRUFDUEMsU0FBU0M7QUFBQUE7QUFHTixhQUFNQyxlQUFlLENBQUM7QUFDekIsU0FBTyxzQkFBQSxjQUFDLFFBQUQ7QUFBQSxJQUFBLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQVE7QUFBQTtLQUROQTtBQUlOLGFBQU1DLGFBQWEsQ0FBQztBQUN2QixTQUNJLHNCQUFBLGNBQUMsS0FBRDtBQUFBLElBQUssR0FBRTtBQUFBLElBQVAsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FDSSxzQkFBQSxjQUFDLE9BQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFjLFFBQU87QUFBQSxLQUNoQyxzQkFBQSxjQUFDLFdBQUQsT0FBQTtBQUFBO01BSkhBIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBBbGVydCxcbiAgICBBbGVydEljb24sXG4gICAgQWxlcnREZXNjcmlwdGlvbixcbiAgICBCb3gsXG4gICAgU3RhY2ssXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4vV3JhcHBlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnTXkgQXdlc29tZSBDb21wb25lbnQhJyxcbiAgICB3cmFwcGVyOiBXcmFwcGVyLFxufVxuXG5leHBvcnQgY29uc3QgU2ltcGxlQnV0dG9uID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIDxCdXR0b24+Q2xpY2sgbWU8L0J1dHRvbj5cbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0U3RvcnkgPSAoe30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHA9JzInPlxuICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9J2xlZnQtYWNjZW50JyBzdGF0dXM9J2luZm8nPlxuICAgICAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgICAgICBDaGFrcmEgaXMgYXdlc29tZVxuICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuIl19