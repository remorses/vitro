import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvYW5Bd2Vzb21lRXhwZXJpbWVudC52aXRyby50c3giXSwibmFtZXMiOlsiX190aGlzX3BhdGhfXyIsInByZXZSZWZyZXNoUmVnIiwicHJldlJlZnJlc2hTaWciLCJ3aW5kb3ciLCJfX2J1bmRsZXNzX3BsdWdpbl9yZWFjdF9wcmVhbWJsZV9pbnN0YWxsZWRfXyIsIkVycm9yIiwiaW1wb3J0IiwiaG90IiwiJFJlZnJlc2hSZWckIiwiJFJlZnJlc2hTaWckIiwidHlwZSIsImlkIiwiUmVmcmVzaFJ1bnRpbWUiLCJyZWdpc3RlciIsImNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtIiwidGl0bGUiLCJ3cmFwcGVyIiwiV3JhcHBlciIsIlNpbXBsZUJ1dHRvbiIsIkFsZXJ0U3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGdCQUFnQjtBQUN0QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNDLE9BQU9DO0FBQ1YsUUFBTSxJQUFJQyxNQUNSO0FBQUE7QUFJSixJQUFJQyxZQUFZQztBQUNkTixtQkFBaUJFLE9BQU9LO0FBQ3hCTixtQkFBaUJDLE9BQU9NO0FBQ3hCTixTQUFPSyxlQUFlLENBQUNFLE1BQU1DO0FBQzNCQyxtQkFBZUMsU0FBU0gsTUFBTVYsZ0JBQWdCLE1BQU1XO0FBQUFBO0FBRXREUixTQUFPTSxlQUFlRyxlQUFlRTtBQUFBQTtBQ2xCdkM7QUFDQTtBQVFBO0FBRUEsZUFBZTtBQUFBLEVBQ1hDLE9BQU87QUFBQSxFQUNQQyxTQUFTQztBQUFBQTtBQUdOLGFBQU1DLGVBQWUsQ0FBQztBQUN6QixTQUFPLHNCQUFBLGNBQUMsUUFBRDtBQUFBLElBQUEsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FBUTtBQUFBO0tBRE5BO0FBSU4sYUFBTUMsYUFBYSxDQUFDO0FBQ3ZCLFNBQ0ksc0JBQUEsY0FBQyxLQUFEO0FBQUEsSUFBSyxHQUFFO0FBQUEsSUFBUCxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQSxLQUNJLHNCQUFBLGNBQUMsT0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQWMsUUFBTztBQUFBLEtBQ2hDLHNCQUFBLGNBQUMsV0FBRCxPQUFBO0FBQUE7TUFKSEEiLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIEFsZXJ0LFxuICAgIEFsZXJ0SWNvbixcbiAgICBBbGVydERlc2NyaXB0aW9uLFxuICAgIEJveCxcbiAgICBTdGFjayxcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi9XcmFwcGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdNeSBBd2Vzb21lIENvbXBvbmVudCEnLFxuICAgIHdyYXBwZXI6IFdyYXBwZXIsXG59XG5cbmV4cG9ydCBjb25zdCBTaW1wbGVCdXR0b24gPSAoe30pID0+IHtcbiAgICByZXR1cm4gPEJ1dHRvbj5DbGljayBtZTwvQnV0dG9uPlxufVxuXG5leHBvcnQgY29uc3QgQWxlcnRTdG9yeSA9ICh7fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggcD0nMic+XG4gICAgICAgICAgICA8QWxlcnQgdmFyaWFudD0nbGVmdC1hY2NlbnQnIHN0YXR1cz0naW5mbyc+XG4gICAgICAgICAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICAgICAgICAgIENoYWtyYSBpcyBhd2Vzb21lXG4gICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG4iXX0=