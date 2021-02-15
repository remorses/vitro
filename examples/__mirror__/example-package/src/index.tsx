import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); var _s = $RefreshSig$();
const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/index.tsx";
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
import react_cjsImport2 from "/.bundless/web_modules/react/index.js?namespace=file"; const React = react_cjsImport2 && react_cjsImport2.__esModule ? react_cjsImport2.default : react_cjsImport2; const useState = react_cjsImport2["useState"]; const useEffect = react_cjsImport2["useEffect"];;
import {Box} from "/.bundless/web_modules/@chakra-ui/core/dist/es/index.js?namespace=file";
export const Component = ({
  ...rest
}) => {
  _s();
  const [state, setState] = useState("");
  useEffect(() => {
    setState("ciao");
  }, []);
  return /* @__PURE__ */ React.createElement(Box, {
    bg: "lightblue",
    width: "200px",
    h: "200px",
    children: state,
    ...rest,
    "data-vitro-line": 10,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/index.tsx"
  });
};
_s(Component, "8PHpRkwj8Us+jPH4LTjNLeOK0mE=");
_c = Component;
var _c;
$RefreshReg$(_c, "Component");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL2V4YW1wbGUtcGFja2FnZS9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIl9fdGhpc19wYXRoX18iLCJwcmV2UmVmcmVzaFJlZyIsInByZXZSZWZyZXNoU2lnIiwid2luZG93IiwiX19idW5kbGVzc19wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18iLCJFcnJvciIsImltcG9ydCIsImhvdCIsIiRSZWZyZXNoUmVnJCIsIiRSZWZyZXNoU2lnJCIsInR5cGUiLCJpZCIsIlJlZnJlc2hSdW50aW1lIiwicmVnaXN0ZXIiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsIkNvbXBvbmVudCIsInJlc3QiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQztBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUM7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQztBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFFTyxhQUFNQyxZQUFZLENBQUM7QUFBQSxLQUFLQztBQUFBQTtBQUFXO0FBQ3RDLFFBQU0sQ0FBQ0MsT0FBT0MsWUFBWUMsU0FBUztBQUNuQ0MsWUFBVTtBQUNORixhQUFTO0FBQUEsS0FDVjtBQUNILFNBQ0ksb0NBQUMsS0FBRDtBQUFBLElBQ0ksSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sR0FBRTtBQUFBLElBQ0YsVUFBVUQ7QUFBQUEsT0FDTkQ7QUFBQUEsSUFMUixtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQTtBQUFBO0dBTktEO0tBQUFBIiwic291cmNlc0NvbnRlbnQiOltudWxsLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50ID0gKHsgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJylcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZSgnY2lhbycpXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgYmc9J2xpZ2h0Ymx1ZSdcbiAgICAgICAgICAgIHdpZHRoPScyMDBweCdcbiAgICAgICAgICAgIGg9JzIwMHB4J1xuICAgICAgICAgICAgY2hpbGRyZW49e3N0YXRlfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIC8+XG4gICAgKVxufVxuIl19