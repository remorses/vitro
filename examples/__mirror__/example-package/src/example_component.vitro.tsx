import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package/src/example_component.vitro.tsx";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvZXhhbXBsZV9jb21wb25lbnQudml0cm8udHN4Il0sIm5hbWVzIjpbIl9fdGhpc19wYXRoX18iLCJwcmV2UmVmcmVzaFJlZyIsInByZXZSZWZyZXNoU2lnIiwid2luZG93IiwiX19idW5kbGVzc19wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18iLCJFcnJvciIsImltcG9ydCIsImhvdCIsIiRSZWZyZXNoUmVnJCIsIiRSZWZyZXNoU2lnJCIsInR5cGUiLCJpZCIsIlJlZnJlc2hSdW50aW1lIiwicmVnaXN0ZXIiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsInRpdGxlIiwid3JhcHBlciIsIldyYXBwZXIiLCJTaW1wbGVCdXR0b24iLCJBbGVydFN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQyw4Q0FBQUE7QUFDVixRQUFNLElBQUlDLE1BQ1I7QUFBQTtBQUlKLElBQUlDLFlBQVlDLEtBQUFBO0FBQ2ROLG1CQUFpQkUsT0FBT0s7QUFDeEJOLG1CQUFpQkMsT0FBT007QUFDeEJOLFNBQU9LLGVBQWUsQ0FBQ0UsTUFBTUMsT0FBQUE7QUFDM0JDLG1CQUFlQyxTQUFTSCxNQUFNVixnQkFBZ0IsTUFBTVc7QUFBQUE7QUFFdERSLFNBQU9NLGVBQWVHLGVBQWVFO0FBQUFBO0FDbEJ2QztBQUNBO0FBUUE7QUFFQSxlQUFlO0FBQUEsRUFDWEMsT0FBTztBQUFBLEVBQ1BDLFNBQVNDO0FBQUFBO0FBR04sYUFBTUMsZUFBZSxDQUFDLE9BQUE7QUFDekIsU0FBTyxzQkFBQSxjQUFDLFFBQUQ7QUFBQSxJQUFBLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQVE7QUFBQTtLQUROQTtBQUlOLGFBQU1DLGFBQWEsQ0FBQyxPQUFBO0FBQ3ZCLFNBQ0ksc0JBQUEsY0FBQyxLQUFEO0FBQUEsSUFBSyxHQUFFO0FBQUEsSUFBUCxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQSxLQUNJLHNCQUFBLGNBQUMsT0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQWMsUUFBTztBQUFBLEtBQ2hDLHNCQUFBLGNBQUMsV0FBRCxPQUFBO0FBQUE7TUFKSEEiLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIEFsZXJ0LFxuICAgIEFsZXJ0SWNvbixcbiAgICBBbGVydERlc2NyaXB0aW9uLFxuICAgIEJveCxcbiAgICBTdGFjayxcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi9XcmFwcGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdNeSBBd2Vzb21lIENvbXBvbmVudCEnLFxuICAgIHdyYXBwZXI6IFdyYXBwZXIsXG59XG5cbmV4cG9ydCBjb25zdCBTaW1wbGVCdXR0b24gPSAoe30pID0+IHtcbiAgICByZXR1cm4gPEJ1dHRvbj5DbGljayBtZTwvQnV0dG9uPlxufVxuXG5leHBvcnQgY29uc3QgQWxlcnRTdG9yeSA9ICh7fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcD0nMic+XG4gICAgICAgICAgICA8QWxlcnQgdmFyaWFudD0nbGVmdC1hY2NlbnQnIHN0YXR1cz0naW5mbyc+XG4gICAgICAgICAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICAgICAgICAgIENoYWtyYSBpcyBhd2Vzb21lXG4gICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG4iXX0=