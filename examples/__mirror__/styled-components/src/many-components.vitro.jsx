import * as  __HMR__ from '/_hmr_client.js?namespace=hmr-client'; import.meta.hot = __HMR__.createHotContext(import.meta.url); const __this_path__ = "styled-components/src/many-components.vitro.jsx";
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
import styled from "/.bundless/web_modules/styled-components.esm-CUDAHWYK.js?namespace=file&t=0";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUudHN4IiwiL1VzZXJzL21vcnNlL0RvY3VtZW50cy9HaXRIdWIvcmVhY3QtY29taWNzL2V4YW1wbGVzL3N0eWxlZC1jb21wb25lbnRzL3NyYy9tYW55LWNvbXBvbmVudHMudml0cm8uanN4Il0sIm5hbWVzIjpbIl9fdGhpc19wYXRoX18iLCJwcmV2UmVmcmVzaFJlZyIsInByZXZSZWZyZXNoU2lnIiwid2luZG93IiwiX19idW5kbGVzc19wbHVnaW5fcmVhY3RfcHJlYW1ibGVfaW5zdGFsbGVkX18iLCJFcnJvciIsImltcG9ydCIsImhvdCIsIiRSZWZyZXNoUmVnJCIsIiRSZWZyZXNoU2lnJCIsInR5cGUiLCJpZCIsIlJlZnJlc2hSdW50aW1lIiwicmVnaXN0ZXIiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsIlRpdGxlRW1vdGlvbiIsInN0eWxlZCIsImgxIiwiVGl0bGUiLCJTdHlsZWRXcmFwcGVyIiwiZGl2IiwiV3JhcHBlciIsImNoaWxkcmVuIiwiTGlzdCIsIml0ZW1zIiwibWFwIiwieCIsImkiLCJMaXN0SXRlbSIsIk15VGl0bGUiLCJSb290Q29tcG9uZW50IiwiQXJyYXkiLCJmaWxsIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFDdEI7QUFFQSxJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSSxDQUFDQyxPQUFPQyw4Q0FBQUE7QUFDVixRQUFNLElBQUlDLE1BQ1I7QUFBQTtBQUlKLElBQUlDLFlBQVlDLEtBQUFBO0FBQ2ROLG1CQUFpQkUsT0FBT0s7QUFDeEJOLG1CQUFpQkMsT0FBT007QUFDeEJOLFNBQU9LLGVBQWUsQ0FBQ0UsTUFBTUMsT0FBQUE7QUFDM0JDLG1CQUFlQyxTQUFTSCxNQUFNVixnQkFBZ0IsTUFBTVc7QUFBQUE7QUFFdERSLFNBQU9NLGVBQWVHLGVBQWVFO0FBQUFBO0FDbEJ2QztBQUNBO0FBRUEsTUFBTUMsZUFBZUMsT0FBT0M7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFLNUIsTUFBTUMsUUFBUUYsT0FBT0M7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7S0FBZkM7QUFNTixNQUFNQyxnQkFBZ0JILE9BQU9JO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO01BQXZCRDtBQU9OLE1BQU1FLFVBQVUsQ0FBQztBQUFBLEVBQUVDO0FBQUFBLE1BQUFBO0FBQ2YsU0FBTyxzQkFBQSxjQUFDLGVBQUQ7QUFBQSxJQUFBLG1CQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEtBQWdCQTtBQUFBQTtNQURyQkQ7QUFJTixNQUFNRSxPQUFPLENBQUM7QUFBQSxFQUFFQztBQUFBQSxNQUFBQTtBQUNaLFNBQ0ksc0JBQUEsY0FBQyxPQUFEO0FBQUEsSUFBQSxtQkFBQTtBQUFBLElBQUEsdUJBQUE7QUFBQSxLQUNLQSxNQUFNQyxJQUFJLENBQUNDLEdBQUdDLE1BQ1gsc0JBQUEsY0FBQyxVQUFEO0FBQUEsSUFBVSxLQUFLQTtBQUFBQSxJQUFHO0FBQUEsSUFBbEIsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUE7QUFBQTtNQUpWSjtBQVVOLE1BQU1LLFdBQVcsQ0FBQztBQUFBLEVBQUVEO0FBQUFBLE1BQUFBO0FBQ2hCLFFBQU1FLFVBQVVGLElBQUksTUFBTSxJQUFJVCxRQUFRSDtBQUN0QyxTQUFPLHNCQUFBLGNBQUMsU0FBRDtBQUFBLElBQUEsbUJBQUE7QUFBQSxJQUFBLHVCQUFBO0FBQUEsS0FBUyxXQUFRWTtBQUFBQTtNQUZ0QkM7QUFLQyxhQUFNRSxnQkFBZ0IsTUFDekIsc0JBQUEsY0FBQyxTQUFEO0FBQUEsRUFBQSxtQkFBQTtBQUFBLEVBQUEsdUJBQUE7QUFBQSxHQUNJLHNCQUFBLGNBQUMsT0FBRCxNQUFPLGlCQUNQLHNCQUFBLGNBQUMsTUFBRDtBQUFBLEVBQU0sT0FBTyxJQUFJQyxNQUFNLElBQUlDLEtBQUs7QUFBQTtNQUgzQkYiLCJzb3VyY2VzQ29udGVudCI6W251bGwsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFRpdGxlRW1vdGlvbiA9IHN0eWxlZC5oMWBcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcbmBcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuYFxuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiA0ZW07XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgbWluLXdpZHRoOiAyMDAwcHg7XG4gICAgLyogYmFja2dyb3VuZDogbGlnaHRza3libHVlOyAqL1xuYFxuXG5jb25zdCBXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiA8U3R5bGVkV3JhcHBlcj57Y2hpbGRyZW59PC9TdHlsZWRXcmFwcGVyPlxufVxuXG5jb25zdCBMaXN0ID0gKHsgaXRlbXMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aXRlbXMubWFwKCh4LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aX0gaT17aX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IExpc3RJdGVtID0gKHsgaSB9KSA9PiB7XG4gICAgY29uc3QgTXlUaXRsZSA9IGkgJSAyID09PSAwID8gVGl0bGUgOiBUaXRsZUVtb3Rpb25cbiAgICByZXR1cm4gPE15VGl0bGU+SXRlbSBOIHtpfTwvTXlUaXRsZT5cbn1cblxuZXhwb3J0IGNvbnN0IFJvb3RDb21wb25lbnQgPSAoKSA9PiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICAgIDxUaXRsZT5IZWxsbyBXb3JsZCE8L1RpdGxlPlxuICAgICAgICA8TGlzdCBpdGVtcz17bmV3IEFycmF5KDEwKS5maWxsKDApfSAvPlxuICAgIDwvV3JhcHBlcj5cbilcbiJdfQ==