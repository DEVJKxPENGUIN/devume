(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/devume-client3/src/components/ElectricBackground/ElectricBackground.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "canvas": "ElectricBackground-module__yzSGHq__canvas",
  "container": "ElectricBackground-module__yzSGHq__container",
});
}),
"[project]/devume-client3/src/components/ElectricBackground/ElectricBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devume-client3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devume-client3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$src$2f$components$2f$ElectricBackground$2f$ElectricBackground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/devume-client3/src/components/ElectricBackground/ElectricBackground.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ElectricBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElectricBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let animationFrameId;
            let width = canvas.width;
            let height = canvas.height;
            const resize = {
                "ElectricBackground.useEffect.resize": ()=>{
                    const parent = canvas.parentElement;
                    if (parent) {
                        width = canvas.width = parent.clientWidth;
                        height = canvas.height = parent.clientHeight;
                    } else {
                        width = canvas.width = window.innerWidth;
                        height = canvas.height = window.innerHeight;
                    }
                }
            }["ElectricBackground.useEffect.resize"];
            window.addEventListener('resize', resize);
            resize();
            // Glitch configuration
            const config = {
                color1: '0, 255, 255',
                color2: '255, 0, 255',
                lineHeightMin: 1,
                lineHeightMax: 3,
                blockHeightMin: 5,
                blockHeightMax: 40,
                blockWidthMin: 20,
                blockWidthMax: 200
            };
            const randomRange = {
                "ElectricBackground.useEffect.randomRange": (min, max)=>Math.random() * (max - min) + min
            }["ElectricBackground.useEffect.randomRange"];
            const lines = [];
            // Reduce max lines to keep it clean
            const maxLines = 2;
            const draw = {
                "ElectricBackground.useEffect.draw": ()=>{
                    // Clear the canvas with transparency to allow CSS background to show
                    ctx.clearRect(0, 0, width, height);
                    // --- Scanlines (Smooth moving persistence) ---
                    // Spawn new lines occasionally
                    if (lines.length < maxLines && Math.random() > 0.994) {
                        lines.push({
                            y: randomRange(0, height),
                            h: randomRange(config.lineHeightMin, config.lineHeightMax),
                            speed: randomRange(-0.5, 0.5),
                            colorType: Math.random() > 0.5 ? 0 : 1,
                            opacity: 0,
                            life: 0,
                            maxLife: randomRange(100, 300) // Last for a few seconds (at 60fps)
                        });
                    }
                    // Update and draw lines
                    for(let i = lines.length - 1; i >= 0; i--){
                        const line = lines[i];
                        // Update position
                        line.y += line.speed;
                        line.life++;
                        // Fade in/out logic
                        let currentOpacity = line.opacity;
                        const fadeInDuration = 30;
                        const fadeOutDuration = 60;
                        if (line.life < fadeInDuration) {
                            // Fading in
                            currentOpacity = line.life / fadeInDuration * 0.2; // Max opacity 0.2
                        } else if (line.life > line.maxLife - fadeOutDuration) {
                            // Fading out
                            const remaining = line.maxLife - line.life;
                            currentOpacity = remaining / fadeOutDuration * 0.2;
                        } else {
                            // Sustained
                            currentOpacity = 0.2;
                        }
                        if (line.life >= line.maxLife) {
                            lines.splice(i, 1);
                            continue;
                        }
                        // Draw
                        ctx.fillStyle = line.colorType === 0 ? `rgba(${config.color1}, ${currentOpacity})` : `rgba(${config.color2}, ${currentOpacity})`;
                        ctx.fillRect(0, line.y, width, line.h);
                    }
                    // --- Glitch Blocks (Random ephemeral) ---
                    // Lower frequency for "slow" feel, but still 1-frame effects
                    if (Math.random() > 0.95) {
                        const numBlocks = Math.floor(randomRange(1, 2));
                        for(let i = 0; i < numBlocks; i++){
                            const x = randomRange(0, width);
                            const y = randomRange(0, height);
                            const w = randomRange(config.blockWidthMin, config.blockWidthMax);
                            const h = randomRange(config.blockHeightMin, config.blockHeightMax);
                            const opacity = randomRange(0.05, 0.15);
                            ctx.fillStyle = Math.random() > 0.5 ? `rgba(${config.color1}, ${opacity})` : `rgba(${config.color2}, ${opacity})`;
                            if (Math.random() > 0.5) {
                                ctx.fillRect(x, y, w, h);
                            } else {
                                ctx.lineWidth = 1;
                                ctx.strokeStyle = ctx.fillStyle;
                                ctx.strokeRect(x, y, w, h);
                            }
                        }
                    }
                    // --- Screen Flicker (Very rare) ---
                    if (Math.random() > 0.995) {
                        ctx.fillStyle = `rgba(255, 255, 255, ${randomRange(0.01, 0.03)})`;
                        ctx.fillRect(0, 0, width, height);
                    }
                    animationFrameId = requestAnimationFrame(draw);
                }
            }["ElectricBackground.useEffect.draw"];
            draw();
            return ({
                "ElectricBackground.useEffect": ()=>{
                    window.removeEventListener('resize', resize);
                    cancelAnimationFrame(animationFrameId);
                }
            })["ElectricBackground.useEffect"];
        }
    }["ElectricBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$src$2f$components$2f$ElectricBackground$2f$ElectricBackground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$devume$2d$client3$2f$src$2f$components$2f$ElectricBackground$2f$ElectricBackground$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvas
        }, void 0, false, {
            fileName: "[project]/devume-client3/src/components/ElectricBackground/ElectricBackground.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/devume-client3/src/components/ElectricBackground/ElectricBackground.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ElectricBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = ElectricBackground;
const __TURBOPACK__default__export__ = ElectricBackground;
var _c;
__turbopack_context__.k.register(_c, "ElectricBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=devume-client3_src_components_ElectricBackground_ef4006ab._.js.map