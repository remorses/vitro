import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/many-components.vitro.jsx";
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
import styled from "/.bundless/web_modules/styled-components/dist/styled-components.esm.js?namespace=file";
const TitleEmotion = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
_c = Title;
const StyledWrapper = styled.div`
    padding: 4em;
    min-height: 300px;
    min-width: 2000px;
    /* background: lightskyblue; */
`;
_c2 = StyledWrapper;
const Wrapper = ({
  children
}) => {
  return /* @__PURE__ */ React.createElement(StyledWrapper, {
    "data-vitro-line": 23,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/many-components.vitro.jsx"
  }, children);
};
_c3 = Wrapper;
const List = ({
  items
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    "data-vitro-line": 28,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/many-components.vitro.jsx"
  }, items.map((x, i) => /* @__PURE__ */ React.createElement(ListItem, {
    key: i,
    i,
    "data-vitro-line": 30,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/many-components.vitro.jsx"
  })));
};
_c4 = List;
const ListItem = ({
  i
}) => {
  const MyTitle = i % 2 === 0 ? Title : TitleEmotion;
  return /* @__PURE__ */ React.createElement(MyTitle, {
    "data-vitro-line": 38,
    "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/many-components.vitro.jsx"
  }, "Item N ", i);
};
_c5 = ListItem;
export const RootComponent = () => /* @__PURE__ */ React.createElement(Wrapper, {
  "data-vitro-line": 42,
  "data-vitro-filename": "/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/many-components.vitro.jsx"
}, /* @__PURE__ */ React.createElement(Title, null, "Hello World!"), /* @__PURE__ */ React.createElement(List, {
  items: new Array(10).fill(0)
}));
_c6 = RootComponent;
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "Title");
$RefreshReg$(_c2, "StyledWrapper");
$RefreshReg$(_c3, "Wrapper");
$RefreshReg$(_c4, "List");
$RefreshReg$(_c5, "ListItem");
$RefreshReg$(_c6, "RootComponent");
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
export const __vitroExportsOrdering = ["RootComponent"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL3N0eWxlZC1jb21wb25lbnRzL3NyYy9tYW55LWNvbXBvbmVudHMudml0cm8uanN4Il0sIm5hbWVzIjpbIl9fdGhpc19wYXRoX18iLCJwcmV2UmVmcmVzaFJlZyIsInByZXZSZWZyZXNoU2lnIiwid2luZG93IiwiX19idW5kbGVzc19wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18iLCJFcnJvciIsImltcG9ydCIsImhvdCIsIiRSZWZyZXNoUmVnJCIsIiRSZWZyZXNoU2lnJCIsInR5cGUiLCJpZCIsIlJlZnJlc2hSdW50aW1lIiwicmVnaXN0ZXIiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsIlRpdGxlRW1vdGlvbiIsInN0eWxlZCIsImgxIiwiVGl0bGUiLCJTdHlsZWRXcmFwcGVyIiwiZGl2IiwiV3JhcHBlciIsImNoaWxkcmVuIiwiTGlzdCIsIml0ZW1zIiwibWFwIiwieCIsImkiLCJMaXN0SXRlbSIsIk15VGl0bGUiLCJSb290Q29tcG9uZW50IiwiQXJyYXkiLCJmaWxsIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQztBQUNWLFFBQU0sSUFBSUMsTUFDUjtBQUFBO0FBSUosSUFBSUMsWUFBWUM7QUFDZE4sbUJBQWlCRSxPQUFPSztBQUN4Qk4sbUJBQWlCQyxPQUFPTTtBQUN4Qk4sU0FBT0ssZUFBZSxDQUFDRSxNQUFNQztBQUMzQkMsbUJBQWVDLFNBQVNILE1BQU1WLGdCQUFnQixNQUFNVztBQUFBQTtBQUV0RFIsU0FBT00sZUFBZUcsZUFBZUU7QUFBQUE7QUNsQnZDO0FBQ0E7QUFFQSxNQUFNQyxlQUFlQyxPQUFPQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUs1QixNQUFNQyxRQUFRRixPQUFPQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtLQUFmQztBQU1OLE1BQU1DLGdCQUFnQkgsT0FBT0k7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7TUFBdkJEO0FBT04sTUFBTUUsVUFBVSxDQUFDO0FBQUEsRUFBRUM7QUFBQUE7QUFDZixTQUFPLHNCQUFBLGNBQUMsZUFBRDtBQUFBLElBQUEsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FBZ0JBO0FBQUFBO01BRHJCRDtBQUlOLE1BQU1FLE9BQU8sQ0FBQztBQUFBLEVBQUVDO0FBQUFBO0FBQ1osU0FDSSxzQkFBQSxjQUFDLE9BQUQ7QUFBQSxJQUFBLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQ0tBLE1BQU1DLElBQUksQ0FBQ0MsR0FBR0MsTUFDWCxzQkFBQSxjQUFDLFVBQUQ7QUFBQSxJQUFVLEtBQUtBO0FBQUFBLElBQUc7QUFBQSxJQUFsQixtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQTtBQUFBO01BSlZKO0FBVU4sTUFBTUssV0FBVyxDQUFDO0FBQUEsRUFBRUQ7QUFBQUE7QUFDaEIsUUFBTUUsVUFBVUYsSUFBSSxNQUFNLElBQUlULFFBQVFIO0FBQ3RDLFNBQU8sc0JBQUEsY0FBQyxTQUFEO0FBQUEsSUFBQSxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQSxLQUFTLFdBQVFZO0FBQUFBO01BRnRCQztBQUtDLGFBQU1FLGdCQUFnQixNQUN6QixzQkFBQSxjQUFDLFNBQUQ7QUFBQSxFQUFBLG1CQUFBO0FBQUEsRUFBQSx1QkFBQTtBQUFBLEdBQ0ksc0JBQUEsY0FBQyxPQUFELE1BQU8saUJBQ1Asc0JBQUEsY0FBQyxNQUFEO0FBQUEsRUFBTSxPQUFPLElBQUlDLE1BQU0sSUFBSUMsS0FBSztBQUFBO01BSDNCRiIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgVGl0bGVFbW90aW9uID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuYFxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG5gXG5cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDRlbTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBtaW4td2lkdGg6IDIwMDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaWdodHNreWJsdWU7ICovXG5gXG5cbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIDxTdHlsZWRXcmFwcGVyPntjaGlsZHJlbn08L1N0eWxlZFdyYXBwZXI+XG59XG5cbmNvbnN0IExpc3QgPSAoeyBpdGVtcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKHgsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpfSBpPXtpfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAoeyBpIH0pID0+IHtcbiAgICBjb25zdCBNeVRpdGxlID0gaSAlIDIgPT09IDAgPyBUaXRsZSA6IFRpdGxlRW1vdGlvblxuICAgIHJldHVybiA8TXlUaXRsZT5JdGVtIE4ge2l9PC9NeVRpdGxlPlxufVxuXG5leHBvcnQgY29uc3QgUm9vdENvbXBvbmVudCA9ICgpID0+IChcbiAgICA8V3JhcHBlcj5cbiAgICAgICAgPFRpdGxlPkhlbGxvIFdvcmxkITwvVGl0bGU+XG4gICAgICAgIDxMaXN0IGl0ZW1zPXtuZXcgQXJyYXkoMTApLmZpbGwoMCl9IC8+XG4gICAgPC9XcmFwcGVyPlxuKVxuIl19