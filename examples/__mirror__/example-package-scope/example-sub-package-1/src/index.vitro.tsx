import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx";
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
import {Component1} from "/example-package-scope/example-sub-package-1/src/index.tsx?namespace=file";
import {Button, Progress, Box, ThemeProvider} from "/.bundless/web_modules/@chakra-ui/core/dist/es/index.js?namespace=file";
export const Simple = ({}) => {
  return /* @__PURE__ */ React.createElement(Component1, {
    "data-vitro-line": 8,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx"
  });
};
_c = Simple;
export const DifferentColor = ({}) => {
  return /* @__PURE__ */ React.createElement(Component1, {
    bg: "red",
    "data-vitro-line": 12,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx"
  });
};
_c2 = DifferentColor;
export const NotDefinedWidth = ({}) => {
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    "data-vitro-line": 17,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx"
  }, /* @__PURE__ */ React.createElement(Box, {
    width: "100%"
  }, /* @__PURE__ */ React.createElement(Button, null, "click me!"), /* @__PURE__ */ React.createElement(Progress, {
    borderRadius: "4",
    value: 90
  })));
};
_c3 = NotDefinedWidth;
var _c, _c2, _c3;
$RefreshReg$(_c, "Simple");
$RefreshReg$(_c2, "DifferentColor");
$RefreshReg$(_c3, "NotDefinedWidth");
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
export const __vitroExportsOrdering = ["Simple", "DifferentColor", "NotDefinedWidth"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS1zY29wZS9leGFtcGxlLXN1Yi1wYWNrYWdlLTEvc3JjL2luZGV4LnZpdHJvLnRzeCJdLCJuYW1lcyI6WyJfX3RoaXNfcGF0aF9fIiwicHJldlJlZnJlc2hSZWciLCJwcmV2UmVmcmVzaFNpZyIsIndpbmRvdyIsIl9fYnVuZGxlc3NfcGx1Z2luX3JlYWN0X3ByZWFtYmxlX2luc3RhbGxlZF9fIiwiRXJyb3IiLCJpbXBvcnQiLCJob3QiLCIkUmVmcmVzaFJlZyQiLCIkUmVmcmVzaFNpZyQiLCJ0eXBlIiwiaWQiLCJSZWZyZXNoUnVudGltZSIsInJlZ2lzdGVyIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJTaW1wbGUiLCJEaWZmZXJlbnRDb2xvciIsIk5vdERlZmluZWRXaWR0aCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsZ0JBQWdCO0FBQ3RCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0MsT0FBT0M7QUFDVixRQUFNLElBQUlDLE1BQ1I7QUFBQTtBQUlKLElBQUlDLFlBQVlDO0FBQ2ROLG1CQUFpQkUsT0FBT0s7QUFDeEJOLG1CQUFpQkMsT0FBT007QUFDeEJOLFNBQU9LLGVBQWUsQ0FBQ0UsTUFBTUM7QUFDM0JDLG1CQUFlQyxTQUFTSCxNQUFNVixnQkFBZ0IsTUFBTVc7QUFBQUE7QUFFdERSLFNBQU9NLGVBQWVHLGVBQWVFO0FBQUFBO0FDbEJ2QztBQUNBO0FBQ0E7QUFJTyxhQUFNQyxTQUFTLENBQUM7QUFDbkIsU0FBTyxzQkFBQSxjQUFDLFlBQUQ7QUFBQSxJQUFBLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBO0FBQUE7S0FERUE7QUFJTixhQUFNQyxpQkFBaUIsQ0FBQztBQUMzQixTQUFPLHNCQUFBLGNBQUMsWUFBRDtBQUFBLElBQVksSUFBRztBQUFBLElBQWYsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUE7QUFBQTtNQURFQTtBQUlOLGFBQU1DLGtCQUFrQixDQUFDO0FBQzVCLFNBQ0ksc0JBQUEsY0FBQyxlQUFEO0FBQUEsSUFBQSxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQSxLQUNJLHNCQUFBLGNBQUMsS0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLEtBQ1Asc0JBQUEsY0FBQyxRQUFELE1BQVEsY0FDUixzQkFBQSxjQUFDLFVBQUQ7QUFBQSxJQUFVLGNBQWE7QUFBQSxJQUFJLE9BQU87QUFBQTtBQUFBO01BTHJDQSIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29tcG9uZW50MSB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyBCdXR0b24sIFByb2dyZXNzLCBCb3gsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5cblxuXG5leHBvcnQgY29uc3QgU2ltcGxlID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIDxDb21wb25lbnQxIC8+XG59XG5cbmV4cG9ydCBjb25zdCBEaWZmZXJlbnRDb2xvciA9ICh7fSkgPT4ge1xuICAgIHJldHVybiA8Q29tcG9uZW50MSBiZz0ncmVkJyAvPlxufVxuXG5leHBvcnQgY29uc3QgTm90RGVmaW5lZFdpZHRoID0gKHt9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICA8Qm94IHdpZHRoPScxMDAlJz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uPmNsaWNrIG1lITwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzcyBib3JkZXJSYWRpdXM9JzQnIHZhbHVlPXs5MH0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKVxufVxuIl19