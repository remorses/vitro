import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "example-package/src/Wrapper.tsx";
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
import {ThemeProvider, CSSReset, ColorModeProvider} from "/.bundless/web_modules/index-LL26CVOM.js?namespace=file&t=0";
export default function Wrapper({
  children,
  isDark = false,
  ...rest
}) {
  return /* @__PURE__ */ React.createElement(ColorModeProvider, {
    value: isDark ? "dark" : "light",
    "data-vitro-line": 6,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/Wrapper.tsx"
  }, /* @__PURE__ */ React.createElement(ThemeProvider, {
    ...rest
  }, /* @__PURE__ */ React.createElement(CSSReset, null), children));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvV3JhcHBlci50c3giXSwibmFtZXMiOlsiX190aGlzX3BhdGhfXyIsInByZXZSZWZyZXNoUmVnIiwicHJldlJlZnJlc2hTaWciLCJ3aW5kb3ciLCJfX2J1bmRsZXNzX3BsdWdpbl9yZWFjdF9wcmVhbWJsZV9pbnN0YWxsZWRfXyIsIkVycm9yIiwiaW1wb3J0IiwiaG90IiwiJFJlZnJlc2hSZWckIiwiJFJlZnJlc2hTaWckIiwidHlwZSIsImlkIiwiUmVmcmVzaFJ1bnRpbWUiLCJyZWdpc3RlciIsImNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtIiwiY2hpbGRyZW4iLCJpc0RhcmsiLCJyZXN0IiwiV3JhcHBlciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsZ0JBQWdCO0FBQ3RCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0MsT0FBT0MsOENBQThDO0FBQ3hELFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUMsS0FBSztBQUNuQk4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQyxPQUFPO0FBQ2xDQyxtQkFBZUMsU0FBU0gsTUFBTVYsZ0JBQWdCLE1BQU1XO0FBQUFBO0FBRXREUixTQUFPTSxlQUFlRyxlQUFlRTtBQUFBQTtBQ2xCdkM7QUFDQTtBQUVBLGdDQUFnQztBQUFBLEVBQUVDO0FBQUFBLEVBQVVDLFNBQU87QUFBQSxLQUFVQztBQUFBQSxHQUFRO0FBQ2pFLFNBQ0ksb0NBQUMsbUJBQUQ7QUFBQSxJQUFtQixPQUFPRCxTQUFTLFNBQVM7QUFBQSxJQUE1QyxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQSxLQUNJLG9DQUFDLGVBQUQ7QUFBQSxPQUFtQkM7QUFBQUEsS0FDZixvQ0FBQyxVQUFELE9BRUNGO0FBQUFBO0tBTk9HIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgQ1NTUmVzZXQsIENvbG9yTW9kZVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXcmFwcGVyKHsgY2hpbGRyZW4sIGlzRGFyaz1mYWxzZSwgLi4ucmVzdCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyIHZhbHVlPXtpc0RhcmsgPyAnZGFyaycgOiAnbGlnaHQnfT5cbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHsuLi5yZXN0fT5cbiAgICAgICAgICAgICAgICA8Q1NTUmVzZXQgLz5cbiAgICAgICAgICAgICAgICB7LyogPEJveD5mdWNrPC9Cb3g+ICovfVxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICApXG59XG4iXX0=