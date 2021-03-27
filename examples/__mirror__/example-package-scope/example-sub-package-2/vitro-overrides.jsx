import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package-scope/example-sub-package-2/vitro-overrides.jsx";
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
import {ColorModeProvider, CSSReset, ThemeProvider} from "/.bundless/web_modules/index-LL26CVOM.js?namespace=file&t=0";
import react_cjsImport3 from "/.bundless/web_modules/index-6FKCBOBS.js?namespace=file&t=0"; const React = react_cjsImport3 && react_cjsImport3.__esModule ? react_cjsImport3.default : react_cjsImport3;;
export function Wrapper({
  children,
  isDark = false,
  ...rest
}) {
  return /* @__PURE__ */ React.createElement(ColorModeProvider, {
    value: isDark ? "dark" : "light",
    "data-vitro-line": 6,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2/vitro-overrides.jsx"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS1zY29wZS9leGFtcGxlLXN1Yi1wYWNrYWdlLTIvdml0cm8tb3ZlcnJpZGVzLmpzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJjaGlsZHJlbiIsImlzRGFyayIsInJlc3QiLCJXcmFwcGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQyw4Q0FBOEM7QUFDeEQsUUFBTSxJQUFJQyxNQUNSO0FBQUE7QUFJSixJQUFJQyxZQUFZQyxLQUFLO0FBQ25CTixtQkFBaUJFLE9BQU9LO0FBQ3hCTixtQkFBaUJDLE9BQU9NO0FBQ3hCTixTQUFPSyxlQUFlLENBQUNFLE1BQU1DLE9BQU87QUFDbENDLG1CQUFlQyxTQUFTSCxNQUFNVixnQkFBZ0IsTUFBTVc7QUFBQUE7QUFFdERSLFNBQU9NLGVBQWVHLGVBQWVFO0FBQUFBO0FDbEJ2QztBQUNBO0FBRU8sd0JBQWlCO0FBQUEsRUFBRUM7QUFBQUEsRUFBVUMsU0FBUztBQUFBLEtBQVVDO0FBQUFBLEdBQVE7QUFDM0QsU0FDSSxvQ0FBQyxtQkFBRDtBQUFBLElBQW1CLE9BQU9ELFNBQVMsU0FBUztBQUFBLElBQTVDLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQ0ksb0NBQUMsZUFBRDtBQUFBLE9BQW1CQztBQUFBQSxLQUNmLG9DQUFDLFVBQUQsT0FBWSxrQkFDWEY7QUFBQUE7S0FMREciLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCB7IENvbG9yTW9kZVByb3ZpZGVyLCBDU1NSZXNldCwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIFdyYXBwZXIoeyBjaGlsZHJlbiwgaXNEYXJrID0gZmFsc2UsIC4uLnJlc3QgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2xvck1vZGVQcm92aWRlciB2YWx1ZT17aXNEYXJrID8gJ2RhcmsnIDogJ2xpZ2h0J30+XG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB7Li4ucmVzdH0+XG4gICAgICAgICAgICAgICAgPENTU1Jlc2V0IC8+SSBhbSBhIHdyYXBwZXJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgKVxufVxuIl19