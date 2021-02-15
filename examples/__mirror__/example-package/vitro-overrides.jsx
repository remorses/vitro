import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/example-package/vitro-overrides.jsx";
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
import {ColorModeProvider, CSSReset, ThemeProvider} from "/.bundless/web_modules/@chakra-ui/core/dist/es/index.js?namespace=file";
import react_cjsImport3 from "/.bundless/web_modules/react/index.js?namespace=file"; const React = react_cjsImport3 && react_cjsImport3.__esModule ? react_cjsImport3.default : react_cjsImport3;;
export function Wrapper({
  children,
  isDark = false,
  ...rest
}) {
  return /* @__PURE__ */ React.createElement(ColorModeProvider, {
    value: isDark ? "dark" : "light",
    "data-vitro-line": 6,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/vitro-overrides.jsx"
  }, /* @__PURE__ */ React.createElement(ThemeProvider, {
    ...rest
  }, /* @__PURE__ */ React.createElement(CSSReset, null), "I am a wrapper", children));
}
_c = Wrapper;
var _c;
$RefreshReg$(_c, "Wrapper");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS92aXRyby1vdmVycmlkZXMuanN4Il0sIm5hbWVzIjpbIl9fdGhpc19wYXRoX18iLCJwcmV2UmVmcmVzaFJlZyIsInByZXZSZWZyZXNoU2lnIiwid2luZG93IiwiX19idW5kbGVzc19wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18iLCJFcnJvciIsImltcG9ydCIsImhvdCIsIiRSZWZyZXNoUmVnJCIsIiRSZWZyZXNoU2lnJCIsInR5cGUiLCJpZCIsIlJlZnJlc2hSdW50aW1lIiwicmVnaXN0ZXIiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsImNoaWxkcmVuIiwiaXNEYXJrIiwicmVzdCIsIldyYXBwZXIiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGdCQUFnQjtBQUN0QjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNDLE9BQU9DO0FBQ1YsUUFBTSxJQUFJQyxNQUNSO0FBQUE7QUFJSixJQUFJQyxZQUFZQztBQUNkTixtQkFBaUJFLE9BQU9LO0FBQ3hCTixtQkFBaUJDLE9BQU9NO0FBQ3hCTixTQUFPSyxlQUFlLENBQUNFLE1BQU1DO0FBQzNCQyxtQkFBZUMsU0FBU0gsTUFBTVYsZ0JBQWdCLE1BQU1XO0FBQUFBO0FBRXREUixTQUFPTSxlQUFlRyxlQUFlRTtBQUFBQTtBQ2xCdkM7QUFDQTtBQUVPLHdCQUFpQjtBQUFBLEVBQUVDO0FBQUFBLEVBQVVDLFNBQVM7QUFBQSxLQUFVQztBQUFBQTtBQUNuRCxTQUNJLG9DQUFDLG1CQUFEO0FBQUEsSUFBbUIsT0FBT0QsU0FBUyxTQUFTO0FBQUEsSUFBNUMsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FDSSxvQ0FBQyxlQUFEO0FBQUEsT0FBbUJDO0FBQUFBLEtBQ2Ysb0NBQUMsVUFBRCxPQUFZLGtCQUNYRjtBQUFBQTtLQUxERyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiaW1wb3J0IHsgQ29sb3JNb2RlUHJvdmlkZXIsIENTU1Jlc2V0LCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gV3JhcHBlcih7IGNoaWxkcmVuLCBpc0RhcmsgPSBmYWxzZSwgLi4ucmVzdCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyIHZhbHVlPXtpc0RhcmsgPyAnZGFyaycgOiAnbGlnaHQnfT5cbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHsuLi5yZXN0fT5cbiAgICAgICAgICAgICAgICA8Q1NTUmVzZXQgLz5JIGFtIGEgd3JhcHBlclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICApXG59XG4iXX0=