import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2/vitro-overrides.jsx";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS1zY29wZS9leGFtcGxlLXN1Yi1wYWNrYWdlLTIvdml0cm8tb3ZlcnJpZGVzLmpzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJjaGlsZHJlbiIsImlzRGFyayIsInJlc3QiLCJXcmFwcGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQztBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUM7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQztBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFFTyx3QkFBaUI7QUFBQSxFQUFFQztBQUFBQSxFQUFVQyxTQUFTO0FBQUEsS0FBVUM7QUFBQUE7QUFDbkQsU0FDSSxvQ0FBQyxtQkFBRDtBQUFBLElBQW1CLE9BQU9ELFNBQVMsU0FBUztBQUFBLElBQTVDLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQ0ksb0NBQUMsZUFBRDtBQUFBLE9BQW1CQztBQUFBQSxLQUNmLG9DQUFDLFVBQUQsT0FBWSxrQkFDWEY7QUFBQUE7S0FMREciLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCB7IENvbG9yTW9kZVByb3ZpZGVyLCBDU1NSZXNldCwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIFdyYXBwZXIoeyBjaGlsZHJlbiwgaXNEYXJrID0gZmFsc2UsIC4uLnJlc3QgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2xvck1vZGVQcm92aWRlciB2YWx1ZT17aXNEYXJrID8gJ2RhcmsnIDogJ2xpZ2h0J30+XG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB7Li4ucmVzdH0+XG4gICAgICAgICAgICAgICAgPENTU1Jlc2V0IC8+SSBhbSBhIHdyYXBwZXJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgKVxufVxuIl19