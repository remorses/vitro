import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package/src/stillAnotherExperiment.vitro.tsx";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvc3RpbGxBbm90aGVyRXhwZXJpbWVudC52aXRyby50c3giXSwibmFtZXMiOlsiX190aGlzX3BhdGhfXyIsInByZXZSZWZyZXNoUmVnIiwicHJldlJlZnJlc2hTaWciLCJ3aW5kb3ciLCJfX2J1bmRsZXNzX3BsdWdpbl9yZWFjdF9wcmVhbWJsZV9pbnN0YWxsZWRfXyIsIkVycm9yIiwiaW1wb3J0IiwiaG90IiwiJFJlZnJlc2hSZWckIiwiJFJlZnJlc2hTaWckIiwidHlwZSIsImlkIiwiUmVmcmVzaFJ1bnRpbWUiLCJyZWdpc3RlciIsImNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtIiwidGl0bGUiLCJTaW1wbGVCdXR0b24iLCJBbGVydFN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQyw4Q0FBQUE7QUFDVixRQUFNLElBQUlDLE1BQ1I7QUFBQTtBQUlKLElBQUlDLFlBQVlDLEtBQUFBO0FBQ2ROLG1CQUFpQkUsT0FBT0s7QUFDeEJOLG1CQUFpQkMsT0FBT007QUFDeEJOLFNBQU9LLGVBQWUsQ0FBQ0UsTUFBTUMsT0FBQUE7QUFDM0JDLG1CQUFlQyxTQUFTSCxNQUFNVixnQkFBZ0IsTUFBTVc7QUFBQUE7QUFFdERSLFNBQU9NLGVBQWVHLGVBQWVFO0FBQUFBO0FDbEJ2QztBQUNBO0FBVUEsZUFBZTtBQUFBLEVBQ1hDLE9BQU87QUFBQTtBQUdKLGFBQU1DLGVBQWUsQ0FBQyxPQUFBO0FBQ3pCLFNBQU8sc0JBQUEsY0FBQyxRQUFEO0FBQUEsSUFBQSxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQSxLQUFRO0FBQUE7S0FETkE7QUFJTixhQUFNQyxhQUFhLENBQUMsT0FBQTtBQUN2QixTQUNJLHNCQUFBLGNBQUMsS0FBRDtBQUFBLElBQUssR0FBRTtBQUFBLElBQVAsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FDSSxzQkFBQSxjQUFDLE9BQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFjLFFBQU87QUFBQSxLQUNoQyxzQkFBQSxjQUFDLFdBQUQsT0FBQTtBQUFBO01BSkhBIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBBbGVydCxcbiAgICBBbGVydEljb24sXG4gICAgQWxlcnREZXNjcmlwdGlvbixcbiAgICBCb3gsXG4gICAgU3RhY2ssXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ015IEF3ZXNvbWUgQ29tcG9uZW50IScsXG59XG5cbmV4cG9ydCBjb25zdCBTaW1wbGVCdXR0b24gPSAoe30pID0+IHtcbiAgICByZXR1cm4gPEJ1dHRvbj5DbGljayBtZTwvQnV0dG9uPlxufVxuXG5leHBvcnQgY29uc3QgQWxlcnRTdG9yeSA9ICh7fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcD0nMic+XG4gICAgICAgICAgICA8QWxlcnQgdmFyaWFudD0nbGVmdC1hY2NlbnQnIHN0YXR1cz0naW5mbyc+XG4gICAgICAgICAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICAgICAgICAgIENoYWtyYSBpcyBhd2Vzb21lXG4gICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG4iXX0=