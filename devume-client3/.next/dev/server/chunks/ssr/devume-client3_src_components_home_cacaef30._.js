module.exports = [
"[project]/devume-client3/src/components/home/DevumeTitle.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "letter": "DevumeTitle-module__hlIJ3W__letter",
  "title": "DevumeTitle-module__hlIJ3W__title",
});
}),
"[project]/devume-client3/src/components/home/DevumeTitle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devume-client3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devume-client3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'animejs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$src$2f$components$2f$home$2f$DevumeTitle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/devume-client3/src/components/home/DevumeTitle.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
const DevumeTitle = ()=>{
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (titleRef.current) {
            const textWrapper = titleRef.current.querySelector('span');
            if (textWrapper) {
                textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                anime.timeline({
                    loop: true
                }).add({
                    targets: '.letter',
                    opacity: [
                        0,
                        1
                    ],
                    easing: "easeInOutQuad",
                    duration: 2250,
                    delay: (el, i)=>150 * (i + 1)
                }).add({
                    targets: '.letter',
                    opacity: [
                        1,
                        0
                    ],
                    easing: "easeInOutQuad",
                    duration: 2250,
                    delay: (el, i)=>150 * (i + 1)
                });
            }
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$src$2f$components$2f$home$2f$DevumeTitle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
        ref: titleRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "DEVUME"
        }, void 0, false, {
            fileName: "[project]/devume-client3/src/components/home/DevumeTitle.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/devume-client3/src/components/home/DevumeTitle.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DevumeTitle;
}),
];

//# sourceMappingURL=devume-client3_src_components_home_cacaef30._.js.map