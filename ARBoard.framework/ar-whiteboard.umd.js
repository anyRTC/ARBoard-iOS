/*!
  * ar-whiteboard v1.1.2
  * (c) 2023 anyRTC WhiteBoard SDK
  * @license MIT
  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.self = global.self || {}));
})(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var packageJson = {
    	name: "ar-whiteboard",
    	version: "1.1.2",
    	description: "",
    	keywords: [
    		"ArWhiteboard",
    		"painter",
    		"whiteboard"
    	],
    	license: "MIT",
    	main: "./dist/ar-whiteboard.cjs.js",
    	module: "./dist/ar-whiteboard.esm.js",
    	unpkg: "./dist/ar-whiteboard.umd.js",
    	jsdelivr: "./dist/ar-whiteboard.umd.js",
    	browser: "./dist/ar-whiteboard.global.js",
    	types: "./dist/ar-whiteboard.d.ts",
    	author: "https://www.anyrtc.io",
    	files: [
    		"dist/*.js",
    		"dist/*.css",
    		"dist/ar-whiteboard.d.ts",
    		"README.md"
    	],
    	scripts: {
    		changelog: "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
    		build: "node scripts/build.js --mode=production",
    		dev: "node scripts/build.js",
    		watch: "node scripts/build.js --watch",
    		doc: "typedoc",
    		format: "tslint -c ./tslint.json ./src/**/*.ts"
    	},
    	gitHooks: {
    		"pre-commit": "lint-staged",
    		"commit-msg": "node scripts/verifyCommit.js"
    	},
    	"lint-staged": {
    		"*.js": [
    			"prettier --write"
    		],
    		"*.ts?(x)": [
    			"eslint",
    			"prettier --parser=typescript --write"
    		]
    	},
    	engines: {
    		node: ">=16.5.0"
    	},
    	devDependencies: {
    		"@babel/polyfill": "^7.12.1",
    		"@microsoft/api-extractor": "^7.18.17",
    		"@rollup/plugin-commonjs": "^21.0.1",
    		"@rollup/plugin-image": "^2.1.1",
    		"@rollup/plugin-json": "^4.1.0",
    		"@rollup/plugin-node-resolve": "^13.0.6",
    		"@types/node": "^15.12.4",
    		chalk: "^4.1.2",
    		process: "^0.11.10",
    		rollup: "^2.58.3",
    		"rollup-plugin-postcss": "^4.0.2",
    		"rollup-plugin-terser": "^7.0.2",
    		"rollup-plugin-typescript2": "^0.30.0",
    		tslib: "^2.3.1",
    		typescript: "^4.2.4"
    	}
    };

    var img$3 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto%3b display: block%3b' width='140px' height='140px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3e %3cdefs%3e %3cfilter id='filter' x='-100%25' y='-100%25' width='300%25' height='300%25' color-interpolation-filters='sRGB'%3e %3cfeGaussianBlur in='SourceGraphic' stdDeviation='2.4000000000000004'%3e%3c/feGaussianBlur%3e %3cfeComponentTransfer result='cutoff'%3e %3cfeFuncA type='table' tableValues='0 0 0 0 0 0 1 1 1 1 1'%3e%3c/feFuncA%3e %3c/feComponentTransfer%3e %3c/filter%3e %3c/defs%3e %3cg filter='url(%23filter)'%3e%3cg transform='translate(50 50)'%3e %3cg%3e %3ccircle cx='17' cy='0' r='5' fill='%23220b09'%3e %3canimate attributeName='r' keyTimes='0%3b0.5%3b1' values='3.5999999999999996%3b8.399999999999999%3b3.5999999999999996' dur='4s' repeatCount='indefinite' begin='-0.25s'%3e%3c/animate%3e %3c/circle%3e %3canimateTransform attributeName='transform' type='rotate' keyTimes='0%3b1' values='0%3b360' dur='4s' repeatCount='indefinite' begin='0s'%3e%3c/animateTransform%3e %3c/g%3e %3c/g%3e%3cg transform='translate(50 50)'%3e %3cg%3e %3ccircle cx='17' cy='0' r='5' fill='%23d34c31'%3e %3canimate attributeName='r' keyTimes='0%3b0.5%3b1' values='3.5999999999999996%3b8.399999999999999%3b3.5999999999999996' dur='2s' repeatCount='indefinite' begin='-0.20833333333333334s'%3e%3c/animate%3e %3c/circle%3e %3canimateTransform attributeName='transform' type='rotate' keyTimes='0%3b1' values='0%3b360' dur='2s' repeatCount='indefinite' begin='-0.041666666666666664s'%3e%3c/animateTransform%3e %3c/g%3e %3c/g%3e%3cg transform='translate(50 50)'%3e %3cg%3e %3ccircle cx='17' cy='0' r='5' fill='%23e88432'%3e %3canimate attributeName='r' keyTimes='0%3b0.5%3b1' values='3.5999999999999996%3b8.399999999999999%3b3.5999999999999996' dur='1.3333333333333333s' repeatCount='indefinite' begin='-0.16666666666666666s'%3e%3c/animate%3e %3c/circle%3e %3canimateTransform attributeName='transform' type='rotate' keyTimes='0%3b1' values='0%3b360' dur='1.3333333333333333s' repeatCount='indefinite' begin='-0.08333333333333333s'%3e%3c/animateTransform%3e %3c/g%3e %3c/g%3e%3cg transform='translate(50 50)'%3e %3cg%3e %3ccircle cx='17' cy='0' r='5' fill='%23ff312d'%3e %3canimate attributeName='r' keyTimes='0%3b0.5%3b1' values='3.5999999999999996%3b8.399999999999999%3b3.5999999999999996' dur='1s' repeatCount='indefinite' begin='-0.125s'%3e%3c/animate%3e %3c/circle%3e %3canimateTransform attributeName='transform' type='rotate' keyTimes='0%3b1' values='0%3b360' dur='1s' repeatCount='indefinite' begin='-0.125s'%3e%3c/animateTransform%3e %3c/g%3e %3c/g%3e%3cg transform='translate(50 50)'%3e %3cg%3e %3ccircle cx='17' cy='0' r='5' fill='%23f5c037'%3e %3canimate attributeName='r' keyTimes='0%3b0.5%3b1' values='3.5999999999999996%3b8.399999999999999%3b3.5999999999999996' dur='0.8s' repeatCount='indefinite' begin='-0.08333333333333333s'%3e%3c/animate%3e %3c/circle%3e %3canimateTransform attributeName='transform' type='rotate' keyTimes='0%3b1' values='0%3b360' dur='0.8s' repeatCount='indefinite' begin='-0.16666666666666666s'%3e%3c/animateTransform%3e %3c/g%3e %3c/g%3e%3cg transform='translate(50 50)'%3e %3cg%3e %3ccircle cx='17' cy='0' r='5' fill='%23e89788'%3e %3canimate attributeName='r' keyTimes='0%3b0.5%3b1' values='3.5999999999999996%3b8.399999999999999%3b3.5999999999999996' dur='0.6666666666666666s' repeatCount='indefinite' begin='-0.041666666666666664s'%3e%3c/animate%3e %3c/circle%3e %3canimateTransform attributeName='transform' type='rotate' keyTimes='0%3b1' values='0%3b360' dur='0.6666666666666666s' repeatCount='indefinite' begin='-0.20833333333333334s'%3e%3c/animateTransform%3e %3c/g%3e %3c/g%3e%3c/g%3e%3c/svg%3e";

    var Config = {
        SDK_VERSION: packageJson.version,
        // GATEWAY_ADDRESS: 'http://192.168.199.195:13479',
        GATEWAY_ADDRESS: 'https://wbgw.agrtc.cn',
        GATEWAY_ADDRESS1: 'https://wbgw.agrtc.cn',
        GATEWAY_ADDRESS_SSL: true,
        GATEWAY_CONNECT_TIMEOUT: 2e3,
        REPORT_DOMAIN: '',
        REPORT_BACKUP_DOMAIN: '',
        // 内部使用的样式以及配置
        // 系统默认的 loading icon
        LOADING_ICON: img$3,
        // 默认背景颜色加载超时时间
        BOARD_IMAGE_RESOURCE_TIMEOUT: 30e3,
        // 默认白板背景颜色
        BOARD_BACKGROUND_COLOR: '#FFFFFF',
        // 框选样式
        BOARD_SELECT_STYLE: {
            // fillStyle: 'rgba(0, 0, 0, 0.35)',
            lineDash: [5, 5],
            lineWidth: 1,
            strokeStyle: '#ababab', // f6f6f6
        },
        // 元素选中的框选样式
        SHAPE_SELECT_STYLE: {
            lineDash: [8, 8],
            strokeStyle: '#ababab',
            lineWidth: 1,
        },
        TEXT_INPUT_ELEMENT_OPTIONS: {
            kind: 'textarea',
            props: {
                'has-origin-text': '0',
                spellCheck: false
            },
            style: {
                ':focus-border': '1px solid red',
                'z-index': '9',
                position: 'absolute',
                display: 'inline-block',
                'backface-visibility': 'hidden',
                margin: '0px',
                padding: '0px',
                outline: 'none',
                resize: 'none',
                background: 'transparent',
                overflow: 'hidden',
                'white-space': 'pre-wrap',
                'word-break': 'break-all',
                'font-family': 'customFontFamily , sans-serif, serif, monospace',
                'font-style': 'normal',
                'font-weight': 'normal',
                top: "0px",
                left: "0px",
                'min-width': '12px',
                'min-height': '12px',
                'width': '12px',
                'height': '12px',
                border: '1px solid transparent',
                'box-sizing': 'content-box',
                // 根据配置
                color: '#333333',
                'font-size': '12px',
                'line-height': '12px',
            }
        },
        CONTROL_DIR_STYLE: {
            position: 'absolute',
            width: '8px',
            height: '8px',
            background: 'red',
            'background-clip': 'padding-box',
            border: '2px solid transparent',
            'box-sizing': 'content-box',
        }
    };

    /**
     * 白板的错误码
     *
     * @export
     * @enum {number}
     */
    exports.EBoardErrorCode = void 0;
    (function (EBoardErrorCode) {
        /**
         * 参数不合法。
         */
        EBoardErrorCode[EBoardErrorCode["INVALID_PARAMS"] = 1000] = "INVALID_PARAMS";
        /**
         * 非法操作。
         *
         * 白板操作相关的错误码
         * 包含：
         * - 添加白板错误
         * - 删除白板错误
         * - 重置白板
         * - 清除白板
         */
        EBoardErrorCode[EBoardErrorCode["INVALID_OPERATION"] = 1001] = "INVALID_OPERATION";
        /**
         * 初始化失败。
         *
         * 一般是因为缺少参数或参数不合法
         */
        EBoardErrorCode[EBoardErrorCode["INIT_ERROR"] = 2000] = "INIT_ERROR";
        /**
         * 服务鉴权失败。
         * 根据 errorMessage 检查是否开通服务，是否被禁用
         */
        EBoardErrorCode[EBoardErrorCode["AUTH_FAILED"] = 2001] = "AUTH_FAILED";
        /**
         * 鉴权超时。
         */
        EBoardErrorCode[EBoardErrorCode["AUTH_TIMEOUT"] = 2002] = "AUTH_TIMEOUT";
        /**
         * 历史数据同步失败。
         */
        EBoardErrorCode[EBoardErrorCode["HISTORY_SYNC_FAILED"] = 2003] = "HISTORY_SYNC_FAILED";
        // // 网关、白板服务、RTM 服务错误
        // RUNTIME_ERROR,
    })(exports.EBoardErrorCode || (exports.EBoardErrorCode = {}));
    /**
     * 背景相关错误码
     *
     * @enum
     */
    var BackgroundErrorCode;
    (function (BackgroundErrorCode) {
        /**
         * 无效背景图片资源。
         */
        BackgroundErrorCode[BackgroundErrorCode["INVALID_IMAGE_ASSETS"] = 3000] = "INVALID_IMAGE_ASSETS";
        /**
         * 请求图片超时。
         */
        BackgroundErrorCode[BackgroundErrorCode["TIME_OUT"] = 3001] = "TIME_OUT";
        /**
         * 当前图片已存在或请求的图片已经存在
         */
        // IMAGE_ALREADY_EXISTS,
    })(BackgroundErrorCode || (BackgroundErrorCode = {}));
    /**
     * 请求相关错误码
     * 网络连接
     * @ignore
     * @enum
     */
    var NetworkErrorCode = {
        /**
         * 请求超时，通常是因为网络质量差或连接断开导致与服务器通信失败。
         */
        NETWORK_TIMEOUT: "NETWORK_TIMEOUT",
        /**
         * 响应错误，一般是状态码非法。
         */
        NETWORK_RESPONSE_ERROR: "NETWORK_RESPONSE_ERROR",
        /**
         * 无法定位的网络错误。
         */
        NETWORK_ERROR: "NETWORK_ERROR",
        /**
         * 请求服务器过程中 WebSocket 断开。
         */
        WS_ABORT: "WS_ABORT",
        /**
         * 请求服务器前，WebSocket 就已经断开。
         */
        WS_DISCONNECT: "WS_DISCONNECT",
        /**
         * WebSocket 连接发生错误。
         */
        WS_ERR: "WS_ERR",
        /**
         * 本地保活超时
         */
        KEEP_A_LIVE_TIMEOUT: 'KEEP_A_LIVE_TIMEOUT',
    };
    /**
     * 内部网关点错误码
     *
     * @ignore
     * @enum
     */
    var InternalErrorCode = {
        /**
         * 缺少参数
         */
        MISSING_PARAMETER: 'MISSING_PARAMETER',
        /**
         * 开发者账号不可用
         */
        DEVELOPER_INVALID: 'DEVELOPER_INVALID',
        /**
         * 当前用户被踢出。
         */
        UID_BANNED: 'UID_BANNED',
        /**
         * IP 地址被禁用
         */
        IP_BANNED: 'IP_BANNED',
        /**
         * 频道被禁用
         */
        CHANNEL_BANNED: 'CHANNEL_BANNED',
        /**
         * APPID 不合法
         */
        APPID_INVALID: 'APPID_INVALID',
        /**
         * 未检测到服务
         */
        SERVER_NOT_OPEN: 'SERVER_NOT_OPEN',
        /**
         * TOKEN 过期
         */
        TOKEN_EXPIRED: 'TOKEN_EXPIRED',
        /**
         * TOKEN 验证失败
         */
        TOKEN_INVALID: 'TOKEN_INVALID',
        /**
         * 非法操作。
         *
         * 通常是因为在当前网络状态不能进行该操作。
         */
        INVALID_OPERATION: "INVALID_OPERATION",
        /**
         * 获取不到网关地址
         */
        CAN_NOT_GET_GATEWAY_SERVER: 'CAN_NOT_GET_GATEWAY_SERVER',
        /**
         * 网关异常
         */
        GATEWAY_SERVER_ERROR: 'GATEWAY_SERVER_ERROR',
        /**
         * 未登录或者重连过程中。
         */
        AUTHENTICATION_FAILED: 'AUTHENTICATION_FAILED',
        NO_LOGIN: 'NO_LOGIN'
    };

    /**
     * 文字样式
     *
     * @export
     * @enum {number}
     */
    exports.EBoardTextStyle = void 0;
    (function (EBoardTextStyle) {
        // 默认
        EBoardTextStyle[EBoardTextStyle["NORMAL"] = 0] = "NORMAL";
        // 粗体
        EBoardTextStyle[EBoardTextStyle["BOLD"] = 1] = "BOLD";
        // 斜体
        EBoardTextStyle[EBoardTextStyle["ITALIC"] = 2] = "ITALIC";
        // 粗斜体
        EBoardTextStyle[EBoardTextStyle["BOLD_ITALIC"] = 3] = "BOLD_ITALIC";
    })(exports.EBoardTextStyle || (exports.EBoardTextStyle = {}));
    /**
     * 内置形状的类型
     *
     * @export
     * @enum {number}
     * @hidden
     */
    var EShapeType;
    (function (EShapeType) {
        EShapeType["ARROW"] = "Arrow";
        EShapeType["CIRCLE"] = "Circle";
        EShapeType["LASER_POINTER"] = "LaserPointer";
        EShapeType["ELLIPSE"] = "Ellipse";
        EShapeType["RECT"] = "Rect";
        EShapeType["LINE"] = "Line";
        EShapeType["FREE_DRAW"] = "FreeDraw";
        EShapeType["TEXT"] = "Text";
    })(EShapeType || (EShapeType = {}));
    /**
     * 画板操作
     *
     * @enum {number}
     * @hidden
     */
    var BoardEventType;
    (function (BoardEventType) {
        // 链接白板
        BoardEventType[BoardEventType["CONNECT"] = 200000] = "CONNECT";
        // 初始化
        BoardEventType[BoardEventType["INIT"] = 300000] = "INIT";
        // 获取频道信息
        BoardEventType[BoardEventType["CHAN_DATA"] = 300001] = "CHAN_DATA";
        // 添加文件
        BoardEventType[BoardEventType["ADD_FILE"] = 300002] = "ADD_FILE";
        // ? unless start --
        // DELETE_FILE, // 删除文件
        BoardEventType[BoardEventType["FILE_LIST"] = 300004] = "FILE_LIST";
        // BRUSH_DATA, //
        // ? unless end --
        // 当前画板数据
        BoardEventType[BoardEventType["CUR_BOARD_DATA"] = 300006] = "CUR_BOARD_DATA";
        // 缓存画板数据
        BoardEventType[BoardEventType["CACHE_BOARD_DATA"] = 300007] = "CACHE_BOARD_DATA";
        // 断网缓存重传
        BoardEventType[BoardEventType["RE_UPLOAD"] = 300008] = "RE_UPLOAD";
        // ? unless start --
        // BOARD_LIST = 310000, // 获取白板列表
        // CHAN_BOARD_LIST, // 获取频道白板列表
        // BOARD_DATA, // 获取白板数据
        // ? unless end --
        // 白板
        BoardEventType[BoardEventType["ADD_BOARD"] = 310003] = "ADD_BOARD";
        BoardEventType[BoardEventType["SWITCH_BOARD"] = 310004] = "SWITCH_BOARD";
        BoardEventType[BoardEventType["DELETE_BOARD"] = 310005] = "DELETE_BOARD";
        BoardEventType[BoardEventType["SCALE_BOARD"] = 310006] = "SCALE_BOARD";
        BoardEventType[BoardEventType["RATIO_BOARD"] = 310007] = "RATIO_BOARD";
        BoardEventType[BoardEventType["RESET_BOARD"] = 310008] = "RESET_BOARD";
        BoardEventType[BoardEventType["CLEAR_BOARD"] = 310009] = "CLEAR_BOARD";
        BoardEventType[BoardEventType["UPDATE_BACKGROUND"] = 310010] = "UPDATE_BACKGROUND";
        BoardEventType[BoardEventType["UPDATE_BACKGROUND_IMAGE"] = 310011] = "UPDATE_BACKGROUND_IMAGE";
        BoardEventType[BoardEventType["UPDATE_BACKGROUND_H5"] = 310012] = "UPDATE_BACKGROUND_H5";
        // 画板
        BoardEventType[BoardEventType["ADD_SHAPE"] = 320000] = "ADD_SHAPE";
        BoardEventType[BoardEventType["MOVE_SHAPE"] = 320001] = "MOVE_SHAPE";
        BoardEventType[BoardEventType["DELETE_SHAPE"] = 320002] = "DELETE_SHAPE";
        BoardEventType[BoardEventType["PROCESS_SHAPE"] = 320003] = "PROCESS_SHAPE";
        // 参数不合法
        BoardEventType[BoardEventType["INVALID_PARAMS"] = 400000] = "INVALID_PARAMS";
        // 内部错误
        BoardEventType[BoardEventType["INTERNAL_ERROR"] = 500000] = "INTERNAL_ERROR";
        // 保活
        BoardEventType[BoardEventType["KEEP_A_LIVE"] = 600000] = "KEEP_A_LIVE";
    })(BoardEventType || (BoardEventType = {}));
    /**
     * 白板事件
     *
     * @export
     * @enum {number}
     */
    var EventNames;
    (function (EventNames) {
        // 系统
        // 捕捉的错误
        EventNames["ERROR"] = "board-error";
        // 捕捉的异常
        EventNames["WARNING"] = "board-warning";
        // 网络状态变化
        EventNames["CONNECTION_STATE_CHANGE"] = "connection-state-change";
        // 白板相关
        // 历史数据同步完成
        EventNames["DATA_SYNC_COMPLETED"] = "data-sync-completed";
        // 添加
        EventNames["ADD_BOARD"] = "add-board";
        // 删除
        EventNames["DELETE_BOARD"] = "delete-board";
        // 翻页
        EventNames["GOTO_BOARD"] = "goto-board";
        // 重置画板
        EventNames["CLEAR_BOARD"] = "clear-board";
        // 重置画板
        EventNames["RESET_BOARD"] = "reset-board";
        // 白板缩放
        EventNames["SCALE_BOARD"] = "board-scale-change";
        // 白板比例
        EventNames["RATIO_BOARD"] = "board-ratio-change";
        // 是否可以撤销
        EventNames["CAN_UNDO_STATUS_CHANGE"] = "board-can-undo-status";
        // 是否可以重做
        EventNames["CAN_REDO_STATUS_CHANGE"] = "board-can-redo-status";
        // 背景颜色更改
        EventNames["BOARD_BACKGROUND_COLOR_CHANGE"] = "board-background-color-change";
        // 背景图片加载状态
        EventNames["IMAGE_STATUS_CHANGED"] = "board-image-status-changed";
    })(EventNames || (EventNames = {}));

    /**
     * 画笔工具类型
     *
     * 可以通过 [[ArBoard.setBrushType]] 改变当前画刷工具类型。
     */
    exports.EBoardToolType = void 0;
    (function (EBoardToolType) {
        /**
         * 鼠标工具。（默认）
         *
         * 无法进行白板绘制操作，例如：涂鸦、绘制矩形。
         */
        EBoardToolType[EBoardToolType["NONE"] = 0] = "NONE";
        /**
         * 框选工具
         *
         * 可以选中绘制的图形、拖拽选中的图形
         */
        EBoardToolType[EBoardToolType["SELECT"] = 1] = "SELECT";
        /**
         * 涂鸦工具
         *
         * 可以随意进行涂改。
         */
        EBoardToolType[EBoardToolType["FREE_DRAW"] = 2] = "FREE_DRAW";
        /**
         * 橡皮擦工具
         */
        EBoardToolType[EBoardToolType["ERASER"] = 3] = "ERASER";
        /**
         * 激光笔工具
         */
        EBoardToolType[EBoardToolType["LASER_POINTER"] = 4] = "LASER_POINTER";
        /**
         * 直线工具
         */
        EBoardToolType[EBoardToolType["LINE"] = 5] = "LINE";
        /**
         * 箭头工具
         */
        EBoardToolType[EBoardToolType["ARROW"] = 6] = "ARROW";
        /**
         * 矩形工具
         */
        EBoardToolType[EBoardToolType["RECT"] = 7] = "RECT";
        /**
         * 椭圆工具
         */
        EBoardToolType[EBoardToolType["ELLIPSE"] = 8] = "ELLIPSE";
        /**
         * 文本工具
         */
        EBoardToolType[EBoardToolType["TEXT"] = 9] = "TEXT";
    })(exports.EBoardToolType || (exports.EBoardToolType = {}));

    var ShapeSelectState;
    (function (ShapeSelectState) {
        // 未被选中或聚焦
        ShapeSelectState[ShapeSelectState["DEFAULT"] = 0] = "DEFAULT";
        // 选中状态。是否通过框选选中。
        ShapeSelectState[ShapeSelectState["SELECTED"] = 1] = "SELECTED";
        // 聚焦状态。是否移动到该图形，可以做一些自定义操作，比如：高亮显示
        ShapeSelectState[ShapeSelectState["FOCUSED"] = 2] = "FOCUSED";
    })(ShapeSelectState || (ShapeSelectState = {}));
    /**
     * 形状
     *
     * 后续可以更改为 Path2D，现在还是实验阶段
     * @export
     * @class shape
     * @hidden
     */
    var Shape = /** @class */ (function () {
        function Shape(id, type, props, offset, style) {
            if (offset === void 0) { offset = [0, 0]; }
            /**
             * 自定义拓展形状
             *
             * @static
             * @param {*} [options]
             * @return {*}
             * @memberof Shape
             */
            // static extend(options?: any) {
            //   // tslint:disable-next-line: max-classes-per-file
            //   const newShape = class extends Shape {
            //     constructor(id: string, opts: BuildOptions) {
            //       super(
            //         id,
            //         EShapeType.ARROW,
            //         opts.props || {
            //           points: [],
            //         },
            //         opts.position || [0, 0],
            //         opts.style || {
            //           fillStyle: 'transparent',
            //           lineWidth: 1,
            //           strokeStyle: '#000000',
            //           // lineDash: [1, 2], // 参考 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
            //         }
            //       );
            //     }
            //   }
            //   // 添加以下方法
            //   // _calculateShapeRectBounding()
            //   // _calculateShapeRectWithStrokeBounding()
            //   // isPointInPath()
            //   // buildPath()
            //   return newShape;
            // }
            this.id = ''; // uid + 2000（递增）
            // 上下左右边距 * 2
            this.rectWithStrokePadding = 10;
            /**
             * 形状的初始数据，不允许改变
             * 仅允许在画板 resize 时改变，位移则只能改变 position
             * @private
             * @type {ShapeProps}
             * @memberof Shape
             */
            this._props = {};
            /**
             * 偏移量，图形在 add 之后，原始数据不能改变，只能通过改变 position 才能改变其位置
             * 仅位移时可改变
             * @protected
             * @type {[number, number]}
             * @memberof Shape
             */
            this._position = [0, 0];
            /**
             * 图形的顶点和宽高
             * 图形最小点和最大点包围的矩形
             * @protected
             * @type {ShapeBoundingRect}
             * @memberof Shape
             */
            this._rect = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            };
            /**
             * 图形包裹层的顶点和宽高
             *
             * @protected
             * @type {ShapeBoundingRect}
             * @memberof Shape
             */
            this._rectWithStroke = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            };
            /**
             * 图形的样式
             *
             * @type {ShapeStyle}
             * @memberof Shape
             */
            this.style = {
                lineWidth: 1,
                opacity: 1,
                lineDash: [],
                fillStyle: '',
                strokeStyle: '#000000',
            };
            /**
             * 选中状态
             *
             */
            this.selectState = ShapeSelectState.DEFAULT;
            /**
             * 组合的 ID
             *
             * id 为 0 时表示非组合，否则表示该形状属于该组合
             */
            this.group = 0;
            this.id = id;
            this.type = type;
            style && (this.style = style);
            // props 涉及到参数计算，会影响 style 的读取，所有放在 style 赋值之后
            this.props = props;
            this.position = offset;
        }
        Object.defineProperty(Shape.prototype, "props", {
            get: function () {
                return this._props;
            },
            set: function (newProps) {
                this._props = newProps;
                // 计算形状的起始坐标和宽度
                this._rect = this._calculateShapeRectBounding();
                this._rectWithStroke = this._calculateShapeRectWithStrokeBounding();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Shape.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (position) {
                this._position = position;
                // 计算形状的起始坐标和宽度
                this._rect = this._calculateShapeRectBounding();
                this._rectWithStroke = this._calculateShapeRectWithStrokeBounding();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 获取当前形状的
         *
         * @return {*}
         * @memberof Shape
         */
        Shape.prototype.getBoundingRect = function () {
            return this._rectWithStroke;
        };
        /**
         * 坐标是否在当前形状内
         *
         * @param {number} x
         * @param {number} y
         * @memberof Shape
         */
        Shape.prototype.rectContain = function (x, y) {
            var _a = this._rectWithStroke, leftTopX = _a.x, leftTopY = _a.y, width = _a.width, height = _a.height;
            return x >= leftTopX && x <= leftTopX + width && y >= leftTopY && y <= leftTopY + height;
        };
        /**
         * 判断坐标点是否在形状的 RECT 中
         *
         * @param {number} x
         * @param {number} y
         * @return {*}  {boolean}
         * @memberof Shape
         */
        Shape.prototype.isPointInPath = function (x, y) {
            return false;
        };
        Shape.prototype.buildPath = function (ctx, opts) {
            var _a = __assign(__assign({}, this.style), opts === null || opts === void 0 ? void 0 : opts.style), strokeStyle = _a.strokeStyle, lineWidth = _a.lineWidth, lineDash = _a.lineDash, fillStyle = _a.fillStyle;
            //
            fillStyle && (ctx.fillStyle = fillStyle);
            strokeStyle && (ctx.strokeStyle = strokeStyle);
            lineWidth && (ctx.lineWidth = lineWidth);
            lineDash && ctx.setLineDash(lineDash);
        };
        /**
         * 创建
         *
         * @param container
         */
        Shape.prototype.buildElement = function (container) {
        };
        Shape.prototype.attr = function (propKey, opts) {
            if (propKey === 'props') {
                this.props = __assign(__assign({}, this.props), opts);
            }
            else if (propKey === 'position') {
                this.position = __spreadArray([], __read(opts));
            }
            else if (propKey === 'style') {
                this.style = __assign(__assign({}, this.style), opts);
            }
        };
        /**
         * 计算形状的矩形坐标点和宽高
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Shape
         */
        Shape.prototype._calculateShapeRectBounding = function () {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
        };
        /**
         * 计算形状的矩形外边框的坐标点和宽高
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Shape
         */
        Shape.prototype._calculateShapeRectWithStrokeBounding = function () {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
        };
        return Shape;
    }());

    /**
     *
     *
     * @export
     * @class Arrow
     * @extends {Shape}
     * @hidden
     */
    var Arrow = /** @class */ (function (_super) {
        __extends(Arrow, _super);
        function Arrow(id, opts) {
            return _super.call(this, id, EShapeType.ARROW, opts.props || {
                points: [],
            }, opts.position || [0, 0], opts.style || {
                fillStyle: 'transparent',
                lineWidth: 1,
                strokeStyle: '#000000',
                // lineDash: [1, 2], // 参考 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
            }) || this;
        }
        /**
         * 定义
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Arrow.prototype._calculateShapeRectBounding = function () {
            var points = this._props.points;
            var position = this.position;
            if ((points === null || points === void 0 ? void 0 : points.length) === 4) {
                var lineWidth = this.style.lineWidth;
                var halfLineWidth = lineWidth / 2;
                var minX_1 = 0;
                var minY_1 = 0;
                var maxX_1 = 0;
                var maxY_1 = 0;
                points.forEach(function (point, index) {
                    if (index === 0) {
                        minX_1 = maxX_1 = point[0] + position[0];
                        minY_1 = maxY_1 = point[1] + position[1];
                    }
                    else {
                        minX_1 = (point[0] + position[0] < minX_1 ? point[0] + position[0] : minX_1);
                        minY_1 = (point[1] + position[1] < minY_1 ? point[1] + position[1] : minY_1);
                        maxX_1 = (point[0] + position[0] > maxX_1 ? point[0] + position[0] : maxX_1);
                        maxY_1 = (point[1] + position[1] > maxY_1 ? point[1] + position[1] : maxY_1);
                    }
                });
                var width = Math.floor(Math.abs(maxX_1 - minX_1));
                var height = Math.floor(Math.abs(maxY_1 - minY_1));
                return {
                    x: minX_1 - halfLineWidth,
                    y: minY_1 - halfLineWidth,
                    width: width + lineWidth,
                    height: height + lineWidth,
                };
            }
            else {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            }
        };
        /**
         *
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Arrow.prototype._calculateShapeRectWithStrokeBounding = function () {
            var points = this._props.points;
            var position = this.position;
            if ((points === null || points === void 0 ? void 0 : points.length) === 4) {
                var lineWidth = this.style.lineWidth;
                var halfLineWidth = lineWidth / 2;
                var minX_2 = 0;
                var minY_2 = 0;
                var maxX_2 = 0;
                var maxY_2 = 0;
                points.forEach(function (point, index) {
                    if (index === 0) {
                        minX_2 = maxX_2 = point[0] + position[0];
                        minY_2 = maxY_2 = point[1] + position[1];
                    }
                    else {
                        minX_2 = (point[0] + position[0] < minX_2 ? point[0] + position[0] : minX_2);
                        minY_2 = (point[1] + position[1] < minY_2 ? point[1] + position[1] : minY_2);
                        maxX_2 = (point[0] + position[0] > maxX_2 ? point[0] + position[0] : maxX_2);
                        maxY_2 = (point[1] + position[1] > maxY_2 ? point[1] + position[1] : maxY_2);
                    }
                });
                var width = Math.floor(Math.abs(maxX_2 - minX_2));
                var height = Math.floor(Math.abs(maxY_2 - minY_2));
                return {
                    x: minX_2 - (this.rectWithStrokePadding / 2) - halfLineWidth,
                    y: minY_2 - (this.rectWithStrokePadding / 2) - halfLineWidth,
                    width: width + this.rectWithStrokePadding + lineWidth,
                    height: height + this.rectWithStrokePadding + lineWidth,
                };
            }
            else {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            }
        };
        Arrow.prototype.isPointInPath = function (x, y) {
            var points = this._props.points;
            var position = this.position;
            if ((points === null || points === void 0 ? void 0 : points.length) === 4) {
                var lineWidth = this.style.lineWidth;
                var halfLineWidth_1 = lineWidth / 2;
                var minX_3 = 0;
                var minY_3 = 0;
                var maxX_3 = 0;
                var maxY_3 = 0;
                points.forEach(function (point, index) {
                    if (index === 0) {
                        minX_3 = maxX_3 = point[0] + position[0];
                        minY_3 = maxY_3 = point[1] + position[1];
                    }
                    else {
                        minX_3 = (point[0] + position[0] < minX_3 ? point[0] + position[0] : minX_3) - halfLineWidth_1;
                        minY_3 = (point[1] + position[1] < minY_3 ? point[1] + position[1] : minY_3) - halfLineWidth_1;
                        maxX_3 = (point[0] + position[0] > maxX_3 ? point[0] + position[0] : maxX_3) + halfLineWidth_1;
                        maxY_3 = (point[1] + position[1] > maxY_3 ? point[1] + position[1] : maxY_3) + halfLineWidth_1;
                    }
                });
                return x >= minX_3 && x <= maxX_3 && y >= minY_3 && y <= maxY_3;
            }
            else {
                return false;
            }
        };
        Arrow.prototype.buildPath = function (ctx, opts) {
            ctx.save();
            _super.prototype.buildPath.call(this, ctx, opts);
            var props = __assign(__assign({}, this.props), opts === null || opts === void 0 ? void 0 : opts.props);
            var position = (opts === null || opts === void 0 ? void 0 : opts.position) || this.position;
            if (props && props.points && props.points.length >= 4) {
                var points = props.points;
                ctx.beginPath();
                // 画直线
                ctx.moveTo(points[0][0] + position[0], points[0][1] + position[1]);
                ctx.lineTo(points[1][0] + position[0], points[1][1] + position[1]);
                // 画斜线
                ctx.moveTo(points[2][0] + position[0], points[2][1] + position[1]);
                ctx.lineTo(points[1][0] + position[0], points[1][1] + position[1]);
                // 画斜线
                ctx.lineTo(points[3][0] + position[0], points[3][1] + position[1]);
                // ctx.moveTo(points[3][0] + position[0], points[3][1] + position[1]);
                // ctx.lineTo(points[1][0] + position[0], points[1][1] + position[1]);
                // ctx.closePath();
                ctx.stroke();
            }
            ctx.restore();
        };
        return Arrow;
    }(Shape));

    /**
     *
     *
     * @export
     * @class Circle
     * @extends {Shape}
     * @hidden
     */
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(id, opts) {
            return _super.call(this, id, EShapeType.CIRCLE, opts.props || {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
            }, opts.position || [0, 0], opts.style || {
                fillStyle: 'transparent',
                lineWidth: 1,
                strokeStyle: '#000000',
                // lineDash: [1, 2], // 参考 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
            }) || this;
        }
        /**
         * 定义
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Circle.prototype._calculateShapeRectBounding = function () {
            var _a = this._props, x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = (x1 < x2 ? x1 : x2) - halfLineWidth;
            var leftTopY = (y1 < y2 ? y1 : y2) - halfLineWidth;
            return {
                x: leftTopX,
                y: leftTopY,
                width: Math.abs(x1 - x2) + lineWidth,
                height: Math.abs(y1 - y2) + lineWidth,
            };
        };
        /**
         *
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Circle.prototype._calculateShapeRectWithStrokeBounding = function () {
            var _a = this._props, x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = (x1 < x2 ? x1 : x2) - halfLineWidth;
            var leftTopY = (y1 < y2 ? y1 : y2) - halfLineWidth;
            return {
                x: leftTopX - (this.rectWithStrokePadding / 2),
                y: leftTopY - (this.rectWithStrokePadding / 2),
                width: Math.abs(x1 - x2) + this.rectWithStrokePadding + lineWidth,
                height: Math.abs(y1 - y2) + this.rectWithStrokePadding + lineWidth,
            };
        };
        Circle.prototype.isPointInPath = function (x, y) {
            var _a = this._props, x1 = _a.x1, x2 = _a.x2, y1 = _a.y1, y2 = _a.y2;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = (x1 < x2 ? x1 : x2) - halfLineWidth;
            var leftTopY = (y1 < y2 ? y1 : y2) - halfLineWidth;
            var rightBottomX = (x1 < x2 ? x2 : x1) + halfLineWidth;
            var rightBottomY = (y1 < y2 ? y2 : y1) + halfLineWidth;
            return x >= leftTopX && x <= rightBottomX && y >= leftTopY && y <= rightBottomY;
        };
        Circle.prototype.buildPath = function (ctx, opts) {
            _super.prototype.buildPath.call(this, ctx, opts);
            var props = opts.props, style = opts.style;
            (style && style.fillStyle) || (this.style && this.style.fillStyle);
            if (props) {
                var x1 = props.x1, x2 = props.x2, y1 = props.y1, y2 = props.y2;
                var leftTopX = 0;
                var leftTopY = 0;
                var rightBottomX = 0;
                var rightBottomY = 0;
                if (x1 < x2) {
                    leftTopX = x1;
                    leftTopY = y1;
                    rightBottomX = x2;
                    rightBottomY = y2;
                }
                else {
                    leftTopX = x2;
                    leftTopY = y2;
                    rightBottomX = x1;
                    rightBottomY = y1;
                }
                var width = Math.abs(rightBottomX - leftTopX);
                var height = Math.abs(rightBottomY - leftTopY);
                var r = width < height ? height / 2 : width / 2;
                var cx = leftTopX + r;
                var cy = leftTopY + r;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, 360);
                ctx.stroke();
                // ctx.closePath();
            }
        };
        return Circle;
    }(Shape));

    /**
     *
     *
     * @export
     * @class Ellipse
     * @extends {Shape}
     * @hidden
     * @see https://github.com/fabricjs/fabric.js/blob/master/src/shapes/ellipse.class.js
     */
    var Ellipse = /** @class */ (function (_super) {
        __extends(Ellipse, _super);
        function Ellipse(id, opts) {
            return _super.call(this, id, EShapeType.ELLIPSE, opts.props || {
                cx: 0,
                cy: 0,
                xr: 0,
                yr: 0,
            }, opts.position || [0, 0], opts.style || {
                fillStyle: 'transparent',
                lineWidth: 1,
                strokeStyle: '#000000',
                // lineDash: [1, 2], // 参考 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
            }) || this;
        }
        /**
         * 定义
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Ellipse.prototype._calculateShapeRectBounding = function () {
            var _a = this._props, cx = _a.cx, cy = _a.cy, xr = _a.xr, yr = _a.yr;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = Math.floor(cx - xr) + position[0] - halfLineWidth;
            var leftTopY = Math.floor(cy - yr) + position[1] - halfLineWidth;
            return {
                x: leftTopX,
                y: leftTopY,
                width: 2 * xr + halfLineWidth,
                height: 2 * yr + halfLineWidth,
            };
        };
        /**
         *
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Ellipse.prototype._calculateShapeRectWithStrokeBounding = function () {
            var _a = this._props, cx = _a.cx, cy = _a.cy, xr = _a.xr, yr = _a.yr;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = Math.floor(cx - xr) + position[0] - halfLineWidth;
            var leftTopY = Math.floor(cy - yr) + position[1] - halfLineWidth;
            return {
                x: leftTopX - (this.rectWithStrokePadding / 2),
                y: leftTopY - (this.rectWithStrokePadding / 2),
                width: 2 * xr + this.rectWithStrokePadding + lineWidth,
                height: 2 * yr + this.rectWithStrokePadding + lineWidth,
            };
        };
        Ellipse.prototype.isPointInPath = function (x, y) {
            var _a = this._props, cx = _a.cx, cy = _a.cy, xr = _a.xr, yr = _a.yr;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = Math.floor(cx - xr) + position[0] - halfLineWidth;
            var leftTopY = Math.floor(cy - yr) + position[1] - halfLineWidth;
            var rightBottomX = Math.floor(cx + xr) + position[0] + halfLineWidth;
            var rightBottomY = Math.floor(cy + yr) + position[1] + halfLineWidth;
            return x >= leftTopX && x <= rightBottomX && y >= leftTopY && y <= rightBottomY;
        };
        Ellipse.prototype.buildPath = function (ctx, opts) {
            ctx.save();
            _super.prototype.buildPath.call(this, ctx, opts);
            var props = __assign(__assign({}, this.props), opts === null || opts === void 0 ? void 0 : opts.props);
            var position = (opts === null || opts === void 0 ? void 0 : opts.position) || this.position;
            if (props) {
                var cx = props.cx, cy = props.cy, xr = props.xr, yr = props.yr;
                ctx.beginPath();
                ctx.ellipse(cx + position[0], cy + position[1], xr, yr, 0, 0, 360);
                ctx.stroke();
                // ctx.closePath();
            }
            ctx.restore();
        };
        return Ellipse;
    }(Shape));

    /**
     *
     *
     * @export
     * @class FreeDraw
     * @extends {Shape}
     * @hidden
     */
    var FreeDraw = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(id, opts) {
            return _super.call(this, id, EShapeType.FREE_DRAW, opts.props || {
                points: []
            }, opts.position || [0, 0], opts.style || {
                lineWidth: 1,
                strokeStyle: '#000000',
                // lineDash: [1, 2], // 参考 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
            }) || this;
        }
        /**
         * 定义
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        class_1.prototype._calculateShapeRectBounding = function () {
            var points = this.props.points;
            var position = this.position;
            if (points && points.length > 1) {
                var minX_1 = 0;
                var minY_1 = 0;
                var maxX_1 = 0;
                var maxY_1 = 0;
                points.forEach(function (point, index) {
                    if (index === 0) {
                        minX_1 = maxX_1 = point[0] + position[0];
                        minY_1 = maxY_1 = point[1] + position[1];
                    }
                    else {
                        minX_1 = point[0] + position[0] < minX_1 ? point[0] + position[0] : minX_1;
                        minY_1 = point[1] + position[1] < minY_1 ? point[1] + position[1] : minY_1;
                        maxX_1 = point[0] + position[0] > maxX_1 ? point[0] + position[0] : maxX_1;
                        maxY_1 = point[1] + position[1] > maxY_1 ? point[1] + position[1] : maxY_1;
                    }
                });
                var lineWidth = this.style.lineWidth;
                var halfLineWidth = lineWidth / 2;
                var width = Math.floor(Math.abs(maxX_1 - minX_1)) + lineWidth;
                var height = Math.floor(Math.abs(maxY_1 - minY_1)) + lineWidth;
                return {
                    x: minX_1 - halfLineWidth,
                    y: minY_1 - halfLineWidth,
                    width: width,
                    height: height,
                };
            }
            else {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            }
        };
        /**
         *
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        class_1.prototype._calculateShapeRectWithStrokeBounding = function () {
            var points = this.props.points;
            var position = this.position;
            if (points && points.length > 1) {
                var minX_2 = 0;
                var minY_2 = 0;
                var maxX_2 = 0;
                var maxY_2 = 0;
                points.forEach(function (point, index) {
                    if (index === 0) {
                        minX_2 = maxX_2 = point[0] + position[0];
                        minY_2 = maxY_2 = point[1] + position[1];
                    }
                    else {
                        minX_2 = point[0] + position[0] < minX_2 ? point[0] + position[0] : minX_2;
                        minY_2 = point[1] + position[1] < minY_2 ? point[1] + position[1] : minY_2;
                        maxX_2 = point[0] + position[0] > maxX_2 ? point[0] + position[0] : maxX_2;
                        maxY_2 = point[1] + position[1] > maxY_2 ? point[1] + position[1] : maxY_2;
                    }
                });
                var lineWidth = this.style.lineWidth;
                var halfLineWidth = lineWidth / 2;
                var width = Math.floor(Math.abs(maxX_2 - minX_2)) + lineWidth;
                var height = Math.floor(Math.abs(maxY_2 - minY_2)) + lineWidth;
                return {
                    x: minX_2 - halfLineWidth - (this.rectWithStrokePadding / 2),
                    y: minY_2 - halfLineWidth - (this.rectWithStrokePadding / 2),
                    width: width + this.rectWithStrokePadding,
                    height: height + this.rectWithStrokePadding,
                };
            }
            else {
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
            }
        };
        class_1.prototype.isPointInPath = function (x, y) {
            var points = this.props.points;
            var position = this.position;
            if (points && points.length > 1) {
                var lineWidth = this.style.lineWidth;
                var halfLineWidth_1 = lineWidth / 2;
                var minX_3 = 0;
                var minY_3 = 0;
                var maxX_3 = 0;
                var maxY_3 = 0;
                points.forEach(function (point, index) {
                    if (index === 0) {
                        minX_3 = maxX_3 = point[0] + position[0];
                        minY_3 = maxY_3 = point[1] + position[1];
                    }
                    else {
                        minX_3 = (point[0] + position[0] < minX_3 ? point[0] + position[0] : minX_3) - halfLineWidth_1;
                        minY_3 = (point[1] + position[1] < minY_3 ? point[1] + position[1] : minY_3) - halfLineWidth_1;
                        maxX_3 = (point[0] + position[0] > maxX_3 ? point[0] + position[0] : maxX_3) + halfLineWidth_1;
                        maxY_3 = (point[1] + position[1] > maxY_3 ? point[1] + position[1] : maxY_3) + halfLineWidth_1;
                    }
                });
                return x >= minX_3 && x <= maxX_3 && y >= minY_3 && y <= maxY_3;
            }
            else {
                return false;
            }
        };
        /**
         * 绘制
         *
         * @param ctx
         * @param [opts]
         * @return {*}
         */
        class_1.prototype.buildPath = function (ctx, opts) {
            ctx.save();
            _super.prototype.buildPath.call(this, ctx, opts);
            var props = __assign(__assign({}, this.props), opts === null || opts === void 0 ? void 0 : opts.props);
            var position = (opts === null || opts === void 0 ? void 0 : opts.position) || this.position;
            if (props) {
                var points = props.points;
                var offsetX = position[0];
                var offsetY = position[1];
                if (!points)
                    return;
                if (points.length > 2) {
                    // SVG 笔锋
                    // if ('Path2D' in window) {
                    //   // svg 方案
                    //   const { lineWidth } = style!;
                    //   const strokeOptions: StrokeOptions = {
                    //     size: lineWidth
                    //   };
                    //   const outlinePoints = getStroke(points, strokeOptions);
                    //   const pathData = getSvgPathFromStroke(outlinePoints);
                    //   const myPath = new Path2D(pathData);
                    //   ctx.fill(myPath);
                    //   return;
                    // }
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    // 方法一
                    // 二次贝塞尔曲线 - https://developpaper.com/canvas-advancement-how-to-draw-a-smooth-curve/
                    // 只能使用 for，如果使用 forEach 会卡顿
                    // const beginPoints = [points[0][0] + offsetX, points[0][1] + offsetY];
                    // ctx.beginPath();
                    // ctx.moveTo(beginPoints[0], beginPoints[1]);
                    // for (let j = 1; j < points.length - 2; j++) {
                    //   const endPoints = [(points[j][0] + points[j + 1][0]) / 2, (points[j][1] + points[j + 1][1]) / 2];
                    //   // 控制点X，控制点Y, 终点X，终点Y
                    //   ctx.quadraticCurveTo(points[j][0] + offsetX, points[j][1] + offsetY, endPoints[0] + offsetX, endPoints[1] + offsetY);
                    // }
                    // // 最后一笔 取最后两点
                    // ctx.quadraticCurveTo(
                    //   points[points.length - 2][0] + offsetX,
                    //   points[points.length - 2][1] + offsetY,
                    //   points[points.length - 1][0] + offsetX,
                    //   points[points.length - 1][1] + offsetY
                    // );
                    // ctx.stroke();
                    // 不能 closePath，否则 isPointPath 会选中无形的闭合线
                    // 方法二  二次贝塞尔曲线
                    ctx.beginPath();
                    for (var j = 0; j < points.length - 1; j++) {
                        if (0 === j)
                            ctx.moveTo(points[0][0] + offsetX, points[0][1] + offsetY);
                        else if (j === points.length - 2) {
                            ctx.lineTo(points[j - 1][0] + offsetX, points[j - 1][1] + offsetY);
                            ctx.stroke();
                        }
                        else {
                            if (j === points.length - 1)
                                return;
                            var controlPoint = points[j + 1];
                            var latestPointX = (controlPoint[0] + points[j + 2][0]) / 2 + offsetX;
                            var latestPointY = (controlPoint[1] + points[j + 2][1]) / 2 + offsetY;
                            ctx.quadraticCurveTo(controlPoint[0] + offsetX, controlPoint[1] + offsetY, latestPointX, latestPointY);
                        }
                    }
                    // 方法三
                    // 三次贝塞尔曲线 - 使用二次贝塞尔曲线拟合 https://www.cnblogs.com/zl03jsj/p/8048102.html
                    // 最少需要3个点；数据量大，后面会变卡
                    // const k = 0.5;
                    // const startPointIndex = 1; // default = 1
                    // ctx.beginPath();
                    // // 绘制第一笔 - 直线 aa’
                    // const aX = points[startPointIndex][0] + offsetX;
                    // const aY = points[startPointIndex][1] + offsetY;
                    // const a1X = aX + (points[startPointIndex + 1][0] + offsetX - aX) * k; // |aa‘| / |ab| = k
                    // const a1Y = aY + (points[startPointIndex + 1][1] + offsetY - aY) * k;
                    // ctx.moveTo(aX, aY);
                    // ctx.lineTo(a1X, a1Y);
                    // // 中间线，取上一点和下一点的 ‘等比点’ 当前点作为控制点来绘制二次贝塞尔曲线
                    // for (let j = startPointIndex; j < points.length - 2; j++) {
                    //   const controlX = points[j][0] + offsetX; // B
                    //   const controlY = points[j][1] + offsetY; // B
                    //   const prevX = points[j - 1][0] + offsetX; // A
                    //   const prevY = points[j - 1][1] + offsetY; // A
                    //   const prev1X = controlX - (controlX - prevX) * k; // A’
                    //   const prev1Y = controlY - (controlY - prevY) * k; // A‘
                    //   const nextX = points[j + 1][0] + offsetX; // C
                    //   const nextY = points[j + 1][1] + offsetY; // C
                    //   const next1X = controlX + (nextX - controlX) * k; // B‘
                    //   const next1Y = controlY + (nextY - controlY) * k; // B’
                    //   if (j >= 2) {
                    //     // prevX 相当于 B, prev1X 相当于 B‘’
                    //     const next2X = prevX + (controlX - prevX) * k; // B‘
                    //     const next2Y = prevY + (controlY - prevY) * k; // B’
                    //     if (next2X === prev1X) {
                    //       ctx.moveTo(next2X, next2Y);
                    //       ctx.lineTo(prev1X, prev1Y); // B‘B‘’
                    //     }
                    //   }
                    //   // 绘制 A‘B‘ B‘’C'
                    //   ctx.moveTo(prev1X, prev1Y);
                    //   ctx.quadraticCurveTo(controlX, controlY, next1X, next1Y);
                    // }
                    // // 绘制最后一笔
                    // const latestX = points[points.length - 1][0] + offsetX;
                    // const latestY = points[points.length - 1][1] + offsetY;
                    // // const prevX = points[points.length - 2][0];
                    // // const prevY = points[points.length - 2][1];
                    // // const latest1X = prevX + (latestX - prevX) * k; // F‘
                    // // const latest1Y = prevX + (latestY - prevY) * k;
                    // ctx.lineTo(latestX, latestY); // F‘G
                    // ctx.stroke();
                    // ctx.closePath();
                }
                // 速度、粗细、颜色深浅
            }
            ctx.restore();
        };
        return class_1;
    }(Shape));

    /**
     * 创建HTMLElement
     *
     * @param {{[key: string]: any}} elOpts
     * @hidden
     */
    var createElement = function (elOpts, elObj) {
        if (elObj === void 0) { elObj = {}; }
        var kind = elOpts.kind, key = elOpts.key, props = elOpts.props, style = elOpts.style, children = elOpts.children;
        var rootEl = document.createElement(kind);
        key && (elObj[key] = rootEl);
        if (props) {
            Object.keys(props).forEach(function (prop) {
                rootEl.setAttribute(prop, props[prop]);
            });
        }
        if (style) {
            Object.keys(style).forEach(function (cssProp) {
                rootEl.style.setProperty(cssProp, style[cssProp]);
            });
        }
        if (children) {
            children.forEach(function (child) {
                var childElObj = createElement(child, elObj);
                child.key && (elObj[child.key] = childElObj.el);
                rootEl.append(childElObj.el);
            });
        }
        return __assign(__assign({}, elObj), { el: rootEl });
    };

    var img$2 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3ctitle%3elaser-pointer%3c/title%3e %3cdefs%3e %3cradialGradient cx='50%25' cy='50%25' fx='50%25' fy='50%25' r='50%25' id='radialGradient-1'%3e %3cstop stop-color='%23FF001C' offset='0%25'%3e%3c/stop%3e %3cstop stop-color='%23FF001C' stop-opacity='0' offset='100%25'%3e%3c/stop%3e %3c/radialGradient%3e %3c/defs%3e %3cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg transform='translate(-2.000000%2c -2.000000)'%3e %3ccircle fill='url(%23radialGradient-1)' cx='18' cy='18' r='12'%3e%3c/circle%3e %3ccircle stroke='white' fill='%23FF001C' cx='18' cy='18' r='2.5'%3e%3c/circle%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

    /**
     *
     *
     * @export
     * @class LaserPointer
     * @extends {Shape}
     * @hidden
     */
    var LaserPointer = /** @class */ (function (_super) {
        __extends(LaserPointer, _super);
        function LaserPointer(id, opts) {
            var _this_1 = _super.call(this, id, EShapeType.LASER_POINTER, opts.props || {
                cx: 0,
                cy: 0,
                r: 0,
            }, opts.position || [0, 0], opts.style || {
                fillStyle: 'transparent',
                lineWidth: 1,
                strokeStyle: '#000000',
                // lineDash: [1, 2], // 参考 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
            }) || this;
            _this_1.touchId = 0;
            var el = createElement({
                kind: 'div',
                props: {
                    'data-uid': id,
                    class: 'board-laser_item'
                },
                style: {
                    'position': 'absolute',
                    'left': '0',
                    'top': '0',
                    'width': '32px',
                    'height': '32px',
                    'z-index': '40',
                    'will-change': 'transform',
                    'pointer-events': 'none',
                    'transform': "translate(" + (_this_1.props.cx + _this_1.position[0] || 0) + "px, " + (_this_1.props.cy + _this_1.position[1] || 0) + "px) scale(1.0)",
                },
                children: [
                    {
                        kind: 'img',
                        props: {
                            src: img$2
                        },
                        style: {
                            'display': 'block',
                            'pointer-events': 'none',
                            'position': 'absolute',
                            'transform': 'translate(-50%, -50%)',
                        },
                    }
                ]
            }).el;
            _this_1.el = el;
            return _this_1;
        }
        LaserPointer.prototype._getTextBounding = function () {
            var _a, _b;
            var _this = this;
            return {
                width: ((_a = _this.el) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0,
                height: ((_b = _this.el) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0
            };
        };
        /**
         * 定义
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        LaserPointer.prototype._calculateShapeRectBounding = function () {
            var _a = this._props, x = _a.x, y = _a.y;
            var position = this.position;
            var _b = this._getTextBounding(), width = _b.width, height = _b.height;
            return {
                x: x + position[0],
                y: y + position[1],
                width: width,
                height: height
            };
            // const { cx, cy, r } = this._props;
            // const { position } = this;
            // const lineWidth = this.style.lineWidth;
            // const halfLineWidth = lineWidth / 2;
            // const leftTopX = Math.floor(cx - r) + position[0] - halfLineWidth;
            // const leftTopY = Math.floor(cy - r) + position[1] - halfLineWidth;
            // return {
            //   x: leftTopX,
            //   y: leftTopY,
            //   width: 2 * r + lineWidth,
            //   height: 2 * r + lineWidth,
            // }
        };
        /**
         *
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        LaserPointer.prototype._calculateShapeRectWithStrokeBounding = function () {
            var _a = this._props, x = _a.x, y = _a.y;
            var position = this.position;
            var _b = this._getTextBounding(), width = _b.width, height = _b.height;
            return {
                x: x + position[0] - (this.rectWithStrokePadding / 2),
                y: y + position[1] - (this.rectWithStrokePadding / 2),
                width: width + this.rectWithStrokePadding,
                height: height + this.rectWithStrokePadding
            };
            // const { cx, cy, r } = this._props;
            // const { position } = this;
            // const lineWidth = this.style.lineWidth;
            // const halfLineWidth = lineWidth / 2;
            // const leftTopX = Math.floor(cx - r) + position[0] - halfLineWidth;
            // const leftTopY = Math.floor(cy - r) + position[1] - halfLineWidth;
            // return {
            //   x: leftTopX - (this.rectWithStrokePadding / 2),
            //   y: leftTopY - (this.rectWithStrokePadding / 2),
            //   width: 2 * r + this.rectWithStrokePadding + lineWidth,
            //   height: 2 * r + this.rectWithStrokePadding + lineWidth,
            // }
        };
        LaserPointer.prototype.isPointInPath = function (x, y) {
            var _a = this._props, cx = _a.cx, cy = _a.cy;
            var position = this.position;
            var _b = this._getTextBounding(), width = _b.width, height = _b.height;
            var leftTopX = cx + position[0];
            var leftTopY = cy + position[1];
            var rightBottomX = leftTopX + width;
            var rightBottomY = leftTopY + height;
            return x >= leftTopX && x <= rightBottomX && y >= leftTopY && y <= rightBottomY;
            // const { cx, cy, r } = this._props;
            // const { position } = this;
            // const lineWidth = this.style.lineWidth;
            // const halfLineWidth = lineWidth / 2;
            // const leftTopX = Math.floor(cx - r) + position[0] - halfLineWidth;
            // const leftTopY = Math.floor(cy - r) + position[1] - halfLineWidth;
            // const rightBottomX = Math.floor(cx + r) + position[0] + halfLineWidth;
            // const rightBottomY = Math.floor(cy + r) + position[1] + halfLineWidth;
            // return x >= leftTopX && x <= rightBottomX && y >= leftTopY && y <= rightBottomY;
        };
        LaserPointer.prototype.buildPath = function (ctx, opts) {
            // super.buildPath(ctx, opts);
            // const { props, style } = opts;
            // const { position } = this;
            // const needFill = (style && style.fillStyle) || (this.style && this.style.fillStyle);
            // if (props) {
            //   const { cx, cy, r } = props;
            //   // 自己绘制的激光笔
            //   // const radGrad = ctx.createRadialGradient(cx + position[0], cy + position[1], 0, cx + position[0], cy + position[1], r);
            //   // radGrad.addColorStop(0, 'transparent');
            //   // radGrad.addColorStop(0.85, 'rgba(220, 20, 60, 0.9)');
            //   // radGrad.addColorStop(1, 'transparent');
            //   // ctx.fillStyle = radGrad;
            //   // ctx.fillRect(cx - r + position[0], cy - r + position[1], 2 * r, 2 * r);
            //   // 使用激光笔图片
            //   const img = document.createElement('img');
            //   img.src = laserPointer;
            //   ctx.drawImage(img, cx + position[0] - (img.width / 2), cy + position[1] - (img.height / 2));
        };
        /**
         * 添加偏移量
         *
         * @param vectorX
         * @param vectorY
         */
        LaserPointer.prototype.addPosition = function (vectorX, vectorY) {
            this.position[0] += vectorX;
            this.position[1] += vectorY;
            this.setPosition(this.position[0], this.position[1]);
        };
        /**
         * 设置文字的坐标
         *
         * @param x
         * @param y
         */
        LaserPointer.prototype.setPosition = function (x, y) {
            var _this_1 = this;
            if (this.el) {
                this.position = [x, y];
                document.querySelectorAll(".board-laser_item").forEach(function (el) {
                    if (el.getAttribute('data-uid') === _this_1.id) {
                        _this_1.el = el;
                        _this_1.el.style.transform = "translate(" + (_this_1.props.cx + x) + "px, " + (_this_1.props.cy + y) + "px) scale(1.0)";
                    }
                });
            }
        };
        /**
         * 创建
         *
         * @param container
         */
        LaserPointer.prototype.buildElement = function (container) {
            var _a;
            if (container instanceof HTMLElement) {
                container.appendChild(this.el);
            }
            else if ("string" === typeof container) {
                (_a = document.querySelector("#" + container)) === null || _a === void 0 ? void 0 : _a.appendChild(this.el);
            }
        };
        /**
         * 销毁 DOM 节点
         */
        LaserPointer.prototype.dispose = function () {
            var _a;
            (_a = this.el) === null || _a === void 0 ? void 0 : _a.remove();
        };
        return LaserPointer;
    }(Shape));

    /**
     *
     *
     * @export
     * @class Line
     * @extends {Shape}
     * @hidden
     */
    var Line = /** @class */ (function (_super) {
        __extends(Line, _super);
        function Line(id, opts) {
            return _super.call(this, id, EShapeType.LINE, opts.props || {
                x: 0,
                y: 0,
                x1: 0,
                y1: 0
            }, opts.position || [0, 0], opts.style || {
                fillStyle: 'transparent',
                lineWidth: 1,
                strokeStyle: '#000000',
                // lineDash: [1, 2], // 参考 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
            }) || this;
        }
        /**
         * 定义
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Line.prototype._calculateShapeRectBounding = function () {
            var _a = this._props, x = _a.x, y = _a.y, x1 = _a.x1, y1 = _a.y1;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = (x < x1 ? x : x1) - halfLineWidth;
            var leftTopY = (y < y1 ? y : y1) - halfLineWidth;
            return {
                x: leftTopX + position[0],
                y: leftTopY + position[1],
                width: Math.floor(Math.abs(x1 - x)) + lineWidth,
                height: Math.floor(Math.abs(y1 - y)) + lineWidth,
            };
        };
        /**
         *
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Line.prototype._calculateShapeRectWithStrokeBounding = function () {
            var _a = this._props, x = _a.x, y = _a.y, x1 = _a.x1, y1 = _a.y1;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = (x < x1 ? x : x1) - halfLineWidth;
            var leftTopY = (y < y1 ? y : y1) - halfLineWidth;
            return {
                x: leftTopX + position[0] - (this.rectWithStrokePadding / 2),
                y: leftTopY + position[1] - (this.rectWithStrokePadding / 2),
                width: Math.floor(Math.abs(x1 - x)) + this.rectWithStrokePadding + lineWidth,
                height: Math.floor(Math.abs(y1 - y)) + this.rectWithStrokePadding + lineWidth,
            };
        };
        Line.prototype.isPointInPath = function (startX, startY) {
            var _a = this._props, x = _a.x, y = _a.y, x1 = _a.x1, y1 = _a.y1;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = (x < x1 ? x : x1) + position[0] - halfLineWidth;
            var leftTopY = (y < y1 ? y : y1) + position[1] - halfLineWidth;
            var rightBottomX = (x < x1 ? x1 : x) + position[0] + halfLineWidth;
            var rightBottomY = (y < y1 ? y1 : y) + position[1] + halfLineWidth;
            return startX >= leftTopX && startX <= rightBottomX && startY >= leftTopY && startY <= rightBottomY;
        };
        Line.prototype.buildPath = function (ctx, opts) {
            ctx.save();
            _super.prototype.buildPath.call(this, ctx, opts);
            var props = __assign(__assign({}, this.props), opts === null || opts === void 0 ? void 0 : opts.props);
            var position = (opts === null || opts === void 0 ? void 0 : opts.position) || this.position;
            if (props) {
                var x = props.x, y = props.y, x1 = props.x1, y1 = props.y1;
                ctx.beginPath();
                // 画直线
                ctx.moveTo(x + position[0], y + position[1]);
                ctx.lineTo(x1 + position[0], y1 + position[1]);
                ctx.stroke();
            }
            ctx.restore();
        };
        return Line;
    }(Shape));

    /**
     *
     *
     * @export
     * @class Rect
     * @extends {Shape}
     * @hidden
     */
    var Rect = /** @class */ (function (_super) {
        __extends(Rect, _super);
        function Rect(id, opts) {
            return _super.call(this, id, EShapeType.RECT, __assign({ x1: 0, y1: 0, x2: 0, y2: 0 }, opts.props), opts.position || [0, 0], __assign({ fillStyle: 'transparent', lineWidth: 1, strokeStyle: '#000000' }, opts.style)) || this;
        }
        /**
         * 定义
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Rect.prototype._calculateShapeRectBounding = function () {
            var _a = this._props, x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = x1 < x2 ? x1 : x2 - halfLineWidth;
            var leftTopY = y1 < y2 ? y1 : y2 - halfLineWidth;
            var rectWidth = Math.abs(x2 - x1) + lineWidth;
            var rectHeight = Math.abs(y2 - y1) + lineWidth;
            return {
                x: leftTopX + position[0],
                y: leftTopY + position[1],
                width: rectWidth + lineWidth,
                height: rectHeight + lineWidth,
            };
        };
        /**
         *
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Rect.prototype._calculateShapeRectWithStrokeBounding = function () {
            var _a = this._props, x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = (x1 < x2 ? x1 : x2) - halfLineWidth;
            var leftTopY = (y1 < y2 ? y1 : y2) - halfLineWidth;
            var rectWidth = Math.abs(x2 - x1) + lineWidth;
            var rectHeight = Math.abs(y2 - y1) + lineWidth;
            return {
                x: leftTopX + position[0] - (this.rectWithStrokePadding / 2),
                y: leftTopY + position[1] - (this.rectWithStrokePadding / 2),
                width: rectWidth + this.rectWithStrokePadding,
                height: rectHeight + this.rectWithStrokePadding,
            };
        };
        Rect.prototype.isPointInPath = function (x, y) {
            var _a = this._props, x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
            var position = this.position;
            var lineWidth = this.style.lineWidth;
            var halfLineWidth = lineWidth / 2;
            var leftTopX = (x1 < x2 ? x1 : x2) + position[0] - halfLineWidth;
            var leftTopY = (y1 < y2 ? y1 : y2) + position[1] - halfLineWidth;
            var rightBottomX = (x1 < x2 ? x2 : x1) + position[0] + halfLineWidth;
            var rightBottomY = (y1 < y2 ? y2 : y1) + position[1] + halfLineWidth;
            return x >= leftTopX && x <= rightBottomX && y >= leftTopY && y <= rightBottomY;
        };
        Rect.prototype.buildPath = function (ctx, opts) {
            ctx.save();
            _super.prototype.buildPath.call(this, ctx, opts);
            var props = __assign(__assign({}, this.props), opts === null || opts === void 0 ? void 0 : opts.props);
            var position = (opts === null || opts === void 0 ? void 0 : opts.position) || this.position;
            // const needFill = (style && style.fillStyle && 'transparent' !== style.fillStyle) || (this.style && this.style.fillStyle && 'transparent' !== this.style.fillStyle);
            if (props) {
                var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2;
                // 这里如果使用 fillRect 或 strokeRect，无法使用 isPointInStroke 或 isPointInPath，因为始终返回 false
                // clearRect 之后 要确保调用 beginPath 开始新的路径
                var leftTopX = (x1 < x2 ? x1 : x2) + position[0];
                var leftTopY = (y1 < y2 ? y1 : y2) + position[1];
                ctx.beginPath();
                ctx.rect(leftTopX, leftTopY, Math.abs(x2 - x1), Math.abs(y2 - y1));
                // needFill ?
                //   ctx.fill() :
                //   ctx.stroke();
                ctx.stroke();
            }
            ctx.restore();
        };
        return Rect;
    }(Shape));

    /**
     * @BUG 如果输入的文字过多或卡顿
     * 解决办法，LRU 算法，参考 https://github.com/ecomfe/zrender/blob/master/src/contain/text.ts
     *
     * TODO 后续优化
     * https://github.com/fabricjs/fabric.js/blob/master/src/shapes/text.class.js  _splitTextIntoLines
     * https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
     * https://stackoverflow.com/questions/1134586/how-can-you-find-the-height-of-text-on-an-html-canvas
     * https://www.php.cn/html5-tutorial-410833.html
     * https://blog.csdn.net/weixin_33682790/article/details/88655236?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.highlightwordscore&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.highlightwordscore
     */
    var offscreenCanvas = document.createElement('canvas');
    var offscreenCanvasCtx = offscreenCanvas.getContext('2d');
    // 将文章（包含多个段落）分割成段落，再将段落切割成多行（以容器宽的界线）
    var splitArticleToList = function (content, fontStyle, limitWidth) {
        var str = content.replace(/\n|\r/ig, '<br />');
        var lineText = str.split('<br />');
        var allList = [];
        var inputWidth = 0;
        // 换行符分割出多个段落
        lineText.forEach(function (text, index) {
            // 通过宽度降段落分割成多行
            var _a = splitParagraphToList(text, fontStyle, limitWidth), width = _a.width, list = _a.list;
            inputWidth < width && (inputWidth = width);
            allList.push.apply(allList, __spreadArray([], __read(list)));
        });
        return {
            width: inputWidth,
            height: allList.length * fontStyle.lineHeight,
            list: allList
        };
    };
    // 按照给定宽度切割每一行的字符串
    var splitParagraphToList = function (str, fontsStyle, limitWidth) {
        var maxWidth = 0;
        // let maxHeight = 0;
        var list = [];
        var fontStyle = fontsStyle.fontStyle, fontWeight = fontsStyle.fontWeight, fontSize = fontsStyle.fontSize, fontFamily = fontsStyle.fontFamily, lineHeight = fontsStyle.lineHeight;
        offscreenCanvasCtx.font = fontStyle + " " + fontWeight + " " + fontSize + "px/" + lineHeight + "px " + fontFamily;
        // 整行字符串长度小于最大宽度
        if (offscreenCanvasCtx.measureText(str).width <= limitWidth) {
            var textWidth = Math.ceil(offscreenCanvasCtx.measureText(str).width);
            list.push({
                text: str,
                width: textWidth,
            });
            maxWidth = textWidth > fontSize ? textWidth : fontSize;
        }
        else {
            var text = '';
            var index = 0;
            for (var i = 0; i < str.length; i++) {
                text += str[i];
                var calculateTextWidth = offscreenCanvasCtx.measureText(text).width;
                if (calculateTextWidth === limitWidth) {
                    var textWidth = Math.ceil(offscreenCanvasCtx.measureText(str.substring(index, i + 1)).width);
                    list.push({
                        text: str.substring(index, i + 1),
                        width: textWidth,
                    });
                    maxWidth < textWidth && (maxWidth = textWidth);
                    index = i + 1;
                    text = '';
                }
                else if (calculateTextWidth > limitWidth) {
                    var textWidth = Math.ceil(offscreenCanvasCtx.measureText(str.substring(index, i)).width);
                    list.push({
                        text: str.substring(index, i),
                        width: textWidth,
                    });
                    maxWidth < textWidth && (maxWidth = textWidth);
                    index = i;
                    var leftText = str.substring(index);
                    var leftTextWidth = Math.ceil(offscreenCanvasCtx.measureText(leftText).width);
                    if (leftTextWidth <= limitWidth) {
                        list.push({
                            text: leftText,
                            width: leftTextWidth
                        });
                        maxWidth < leftTextWidth && (maxWidth = leftTextWidth);
                        break;
                    }
                    text = str[i];
                }
                else {
                    if (i === str.length - 1) {
                        var textWidth = Math.ceil(offscreenCanvasCtx.measureText(str.substring(index)).width);
                        list.push({
                            text: str.substring(index),
                            width: textWidth
                        });
                        maxWidth < textWidth && (maxWidth = textWidth);
                    }
                }
            }
        }
        return {
            list: list,
            width: maxWidth,
            // height: 0
        };
    };

    /**
     *
     * ! 后续补充 行高 字体居中等配置和功能
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
     *
     * 文字大小自适应
     * - https://stackoverflow.com/questions/22943186/html5-canvas-font-size-based-on-canvas-size
     * @export
     * @class Text
     * @extends {Shape}
     * @hidden
     */
    var Text = /** @class */ (function (_super) {
        __extends(Text, _super);
        function Text(id, opts) {
            return _super.call(this, id, EShapeType.TEXT, __assign({ text: '', x: 0, y: 0, width: 0, height: 0, maxWidth: 0, maxHeight: 0, fontSize: 12, lineHeight: 12 }, opts.props), opts.position || [0, 0], __assign({ fillStyle: 'transparent', lineWidth: 1, strokeStyle: '#000000', 
                // lineDash: [1, 2], // 参考 https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
                textFill: '#000000', textStroke: '#000000', fontFamily: 'customFontFamily, sans-serif, serif, monospace' }, opts.style)) || this;
        }
        Text.prototype._getTextBounding = function () {
            var canvas = createElement({
                kind: 'canvas'
            }).el;
            var canvasCtx = canvas.getContext('2d');
            var _a = this._props, text = _a.text, fontSize = _a.fontSize, lineHeight = _a.lineHeight;
            var _b = this.style; _b.lineWidth; var textStyle = _b.textStyle, textWeight = _b.textWeight, textFill = _b.textFill, textStroke = _b.textStroke, fontFamily = _b.fontFamily;
            // lineWidth && (canvasCtx.lineWidth = lineWidth);
            textStroke && (canvasCtx.strokeStyle = textStroke);
            textFill && (canvasCtx.fillStyle = textFill);
            fontSize && (canvasCtx.font = textStyle + " " + textWeight + " " + fontSize + "px " + fontFamily);
            if (text) {
                // let maxWidth = 0;
                // const textList: string[] = text.split('\n');
                // textList.forEach((item, index) => {
                //   const itemWidth = canvasCtx.measureText(item).width;
                //   if (index === 0) {
                //     maxWidth = itemWidth;
                //     return;
                //   }
                //   maxWidth = maxWidth < itemWidth ? itemWidth : maxWidth;
                // });
                // const textRect = canvasCtx.measureText(text);
                // TODO 替换成 LRU 算法 https://github.com/ecomfe/zrender/blob/master/src/contain/text.ts
                var _c = splitArticleToList(text, {
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    fontFamily: fontFamily,
                }, this.props.maxWidth), textWidth = _c.width, textHeight = _c.height; _c.list;
                return {
                    width: textWidth,
                    height: textHeight
                };
            }
            return {
                width: 0,
                height: fontSize || 0
            };
        };
        /**
         * 定义
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Text.prototype._calculateShapeRectBounding = function () {
            var _a = this._props, x = _a.x, y = _a.y;
            var position = this.position;
            var _b = this._getTextBounding(), width = _b.width, height = _b.height;
            return {
                x: x + position[0],
                y: y + position[1],
                width: width,
                height: height
            };
        };
        /**
         *
         *
         * @return {*}  {ShapeBoundingRect}
         * @memberof Line
         */
        Text.prototype._calculateShapeRectWithStrokeBounding = function () {
            var _a = this._props, x = _a.x, y = _a.y;
            var position = this.position;
            var _b = this._getTextBounding(), width = _b.width, height = _b.height;
            return {
                x: x + position[0] - (this.rectWithStrokePadding / 2),
                y: y + position[1] - (this.rectWithStrokePadding / 2),
                width: width + this.rectWithStrokePadding,
                height: height + this.rectWithStrokePadding
            };
        };
        Text.prototype.isPointInPath = function (startX, startY) {
            var _a = this._props, x = _a.x, y = _a.y;
            var position = this.position;
            var _b = this._getTextBounding(), width = _b.width, height = _b.height;
            var leftTopX = x + position[0];
            var leftTopY = y + position[1];
            var rightBottomX = leftTopX + width;
            var rightBottomY = leftTopY + height;
            return startX >= leftTopX && startX <= rightBottomX && startY >= leftTopY && startY <= rightBottomY;
        };
        Text.prototype.setFontSize = function (size) {
            this.style.fontSize = size;
            this._calculateShapeRectBounding();
            this._calculateShapeRectWithStrokeBounding();
            // this.buildPath(ctx, {});
        };
        Text.prototype.buildPath = function (ctx, opts) {
            _super.prototype.buildPath.call(this, ctx, opts);
            var props = __assign(__assign({}, this.props), opts === null || opts === void 0 ? void 0 : opts.props);
            (opts === null || opts === void 0 ? void 0 : opts.position) || this.position;
            if (props && props.text) {
                // 保存画笔属性状态
                ctx.save();
                var text = props.text, fontSize = props.fontSize, lineHeight_1 = props.lineHeight, maxWidth = props.maxWidth;
                var _a = this._rect, x_1 = _a.x, y_1 = _a.y, width = _a.width, height = _a.height;
                var _b = __assign(__assign({}, this.style), opts === null || opts === void 0 ? void 0 : opts.style), textStyle = _b.textStyle, textWeight = _b.textWeight, textFill = _b.textFill, textStroke = _b.textStroke, fontFamily = _b.fontFamily;
                // ! 判断本地是否安装此字体，没有则需要下载。参考：https://stackoverflow.com/questions/3368837/list-every-font-a-users-browser-can-display
                // document.fonts.check('font-name');
                // ctx.lineWidth = 1;
                // textStroke && (ctx.strokeStyle = textStroke);
                textStroke && (ctx.fillStyle = textStroke);
                textFill && (ctx.fillStyle = textFill);
                fontSize && (ctx.font = textStyle + " " + textWeight + " " + fontSize + "px " + fontFamily);
                // 拓展
                // textAlign = value
                // 文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。
                // textBaseline = value
                // 基线对齐选项. 可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
                // direction = value
                // 文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。
                // 创建容器
                ctx.beginPath();
                ctx.rect(x_1, y_1, width, height);
                // ctx.stroke();
                // 在容器内填充字体
                // const textList: string[] = text.split('\n');
                // textList.forEach((item, index) => {
                //   textStroke && ctx.strokeText(item, x, y + (fontSize * (index + 1)));
                //   textFill && ctx.fillText(item, x, y + (fontSize * (index + 1)));
                // });
                var _c = splitArticleToList(text, {
                    fontSize: fontSize,
                    lineHeight: lineHeight_1,
                    fontStyle: textStyle,
                    fontWeight: textWeight,
                    fontFamily: fontFamily,
                }, maxWidth); _c.width; _c.height; var list = _c.list;
                list.forEach(function (textObj, index) {
                    ctx.fillText(textObj.text, x_1, y_1 + ((index + 1) * lineHeight_1));
                });
                // 还原画笔属性状态
                ctx.restore();
            }
        };
        return Text;
    }(Shape));

    /**
     * 时间工具类
     * @ignore
     */
    var TimeUtils = {
        /**
         * 日期格式化
         *
         * @param {*} formatType 格式	YYYY*MM*DD hh*mm*ss
         * @returns 随机生成的number
         */
        timesToDate: function (timestamp, formatType) {
            var timeType = "YYYY-MM-DD hh:mm:ss";
            if (typeof timestamp !== "number") {
                throw new Error("[timesToDate]: timestamp must be number");
            }
            if (formatType && typeof formatType === "string") {
                timeType = formatType;
            }
            var dateTimes = timestamp || Date.now();
            var dateNow = new Date(dateTimes) || new Date(dateTimes);
            var fYear = dateNow.getFullYear();
            var fMonth = dateNow.getMonth() + 1;
            var fDate = dateNow.getDate();
            var fHours = dateNow.getHours();
            var fMinutes = dateNow.getMinutes();
            var fSeconds = dateNow.getSeconds();
            var fMillSeconds = dateNow.getMilliseconds();
            if (timeType.indexOf("YYYY") > -1) {
                timeType = timeType.replace('YYYY', function (item) {
                    return '' + fYear;
                });
            }
            if (timeType.indexOf("MM") > -1) {
                timeType = timeType.replace('MM', function (item) {
                    return fMonth < 10 ? '0' + fMonth : '' + fMonth;
                });
            }
            else if (timeType.indexOf("M") > -1) {
                timeType = timeType.replace('M', function (item) {
                    return '' + fMonth;
                });
            }
            if (timeType.indexOf("DD") > -1) {
                timeType = timeType.replace('DD', function (item) {
                    return fDate < 10 ? '0' + fDate : '' + fDate;
                });
            }
            else if (timeType.indexOf("D") > -1) {
                timeType = timeType.replace('D', function (item) {
                    return '' + fDate;
                });
            }
            if (timeType.indexOf("hh") > -1) {
                timeType = timeType.replace('hh', function (item) {
                    return fHours < 10 ? '0' + fHours : '' + fHours;
                });
            }
            else if (timeType.indexOf("h") > -1) {
                timeType = timeType.replace('h', function (item) {
                    return '' + fHours;
                });
            }
            if (timeType.indexOf("mm") > -1) {
                timeType = timeType.replace('mm', function (item) {
                    return fMinutes < 10 ? '0' + fMinutes : '' + fMinutes;
                });
            }
            else if (timeType.indexOf("m") > -1) {
                timeType = timeType.replace('m', function (item) {
                    return '' + fMinutes;
                });
            }
            if (timeType.indexOf("ss") > -1) {
                timeType = timeType.replace('ss', function (item) {
                    return fSeconds < 10 ? '0' + fSeconds : '' + fSeconds;
                });
            }
            else if (timeType.indexOf("s") > -1) {
                timeType = timeType.replace('s', function (item) {
                    return '' + fSeconds;
                });
            }
            if (timeType.indexOf("ms") > -1) {
                timeType = timeType.replace('ms', function () {
                    return '' + fMillSeconds;
                });
            }
            if (timeType.indexOf("AP") > -1) {
                timeType = timeType.replace('AP', function () {
                    return '' + (fHours > 12 ? "PM" : "AM");
                });
            }
            return timeType;
        },
    };
    /**
     * 保留几位小数点
     *
     * @param points
     * @returns
     * @hidden
     */
    var mathRound = function (value, precision) {
        return Math.round(Number(value + 'e' + precision)) / Math.pow(10, precision);
    };
    /**
     * 计算箭头的各个顶点
     *
     * @param points
     * @returns
     * @hidden
     */
    var calcArrowPoints = function (points, headLen) {
        var _a = __read(points, 4), x = _a[0], y = _a[1], x1 = _a[2], y1 = _a[3];
        var theta = 30;
        // const headlen = lineHeadLen > 50 ? 50 : lineHeadLen; // 30
        var headlen = headLen || 30; // 30
        // 计算各角度和对应的P2,P3坐标
        var angle = Math.atan2(y - y1, x - x1) * 180 / Math.PI;
        var angle1 = (angle + theta) * Math.PI / 180;
        var angle2 = (angle - theta) * Math.PI / 180;
        var topX = headlen * Math.cos(angle1);
        var topY = headlen * Math.sin(angle1);
        var botX = headlen * Math.cos(angle2);
        var botY = headlen * Math.sin(angle2);
        return [
            [x, y],
            [x1, y1],
            [x1 + topX, y1 + topY],
            [x1 + botX, y1 + botY],
        ];
    };
    /**
     * 已知两点，计算椭圆的长短半径
     *
     * @param points
     * @returns
     * @hidden
     */
    var calcEllipseCenterAndRadius = function (points) {
        var _a = __read(points, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        var XRadius = Math.abs(x2 - x1) / 2;
        var YRadius = Math.abs(y2 - y1) / 2;
        return [
            x1 < x2 ? x1 + XRadius : x2 + XRadius,
            y1 < y2 ? y1 + YRadius : y2 + YRadius,
            XRadius,
            YRadius,
        ];
    };
    /**
     * 返回指定长度的 number
     *
     * @param [len=13]
     * @return {*
     */
    var randomNumber = function (len) {
        if (len === void 0) { len = 13; }
        if (len > 20) {
            len = 20;
        }
        var num = Math.ceil(Math.random() * Math.pow(10, len));
        if (num < Math.pow(10, len - 1)) {
            return randomNumber(len);
        }
        return num;
    };

    /**
     * 判断矩形是否包含
     *
     * 图像包含关系需判断：
     * - 外层矩形的左上角的 x、y 小于或等于内层矩形的 x、y，表示内层矩形左上角坐标在外层矩形的矢量方向内
     * - 内层矩形的右下角的 x、y 小于或等于外层矩形的 x、y，表示内层矩形右下角坐标在外层矩形的矢量方向内
     * 以上两个条件都满足则表示包含关系成立，否则不成立。
     *
     * @param outerRect - 第一个矩形的坐标数组：[左上角的 x 坐标, 左上角的 y 坐标, 右下角的 x 坐标, 右下角的 y 坐标]
     * @param insideRect - 第二个矩形的坐标数组：[左上角的 x 坐标, 左上角的 y 坐标, 右下角的 x 坐标, 右下角的 y 坐标]
     * @return {boolean} - true 包含 / false 不包含
     */
    var rectContainsRect = function (outerRect, insideRect) {
        var Xa1 = outerRect[0];
        var Ya1 = outerRect[1];
        var Xa2 = outerRect[2];
        var Ya2 = outerRect[3];
        var Xb1 = insideRect[0];
        var Yb1 = insideRect[1];
        var Xb2 = insideRect[2];
        var Yb2 = insideRect[3];
        return Xa1 <= Xb1 && Ya1 <= Yb1 && Xb2 <= Xa2 && Yb2 <= Ya2;
    };
    /**
     * 判断矩形是否相交
     *
     * @param currentRect
     * @param targetRect
     * @return {*}
     */
    // function hasIntersect2(currentRect: [number, number, number, number], targetRect: [number, number, number, number]) {
    //   const Xa1 = currentRect[0];
    //   const Ya1 = currentRect[1];
    //   const Xa2 = currentRect[2];
    //   const Ya2 = currentRect[3];
    //   const Xb1 = targetRect[0];
    //   const Yb1 = targetRect[1];
    //   const Xb2 = targetRect[2];
    //   const Yb2 = targetRect[3];
    //   const result = Math.max(Xa1, Xb1) <= Math.min(Xa2, Xb2) && Math.max(Ya1, Yb1) <= Math.min(Ya2, Yb2);
    //   return result;
    // }

    /**
     *
     * @ignore
     * @enum {number}
     */
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["INFO"] = 1] = "INFO";
        LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
        LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
        LogLevel[LogLevel["NONE"] = 4] = "NONE";
    })(LogLevel || (LogLevel = {}));
    /**
     *
     * @ignore
     * @class SupLogger
     */
    var SupLogger = /** @class */ (function () {
        function SupLogger() {
            this.logPrefix = "SupLogger"; // 日志输出的前缀
            this.logLevel = LogLevel.NONE; // 默认不输出日志
            // private logUpload: boolean = false;
            this.uploadServeTranslators = []; // 中间件执行队列
            this.DEBUG = LogLevel.DEBUG;
            this.INFO = LogLevel.INFO;
            this.WARNING = LogLevel.WARNING;
            this.ERROR = LogLevel.ERROR;
            this.NONE = LogLevel.NONE;
        }
        /**
         * 调用本方法添加日志的中间件。
         * Note:
         *
         */
        // use (callback: addListenerCallback<void>) {
        //   if (typeof callback === "function") {
        //     this.uploadServeTranslators.push((data: any, next: addListenerCallback<void>) => {
        //       callback(data, next);
        //     });
        //   }
        // }
        /**
         * 调用本方法开启日志上传。
         * 开启后 SDK 的日志会上传到的服务器。
         * 日志上传功能默认为关闭状态，如果你需要开启此功能，请确保在所有方法之前调用本方法。
         */
        // enableLogUpload () {
        //   if (this.logUpload) {
        //     this.warning("Failed to enable log upload, Already enabled.");
        //   } else  {
        //     this.logUpload = true;
        //   }
        // }
        /**
         * 该方法用于关闭日志上传。
         * 日志上传默认是关闭状态，如果你调用了开启日志上传（enableLogUpload)，可以通过本方法
         * 停止上传日志。
         */
        // disableLogUpload () {
        //   if (this.logUpload) {
        //     this.logUpload = false;
        //   } else  {
        //     this.warning("Failed to disabled log upload, Already disabled.");
        //   }
        // }
        /**
         * 该方法设置 SDK 的日志输出级别。
         * 日志级别顺序依次为 NONE，ERROR，WARNING，INFO，DEBUG。选择一个级别，你就
         * 可以看到在该级别及该级别以上所有级别的日志信息。例如，如果你输入代码
         * ArRTC.Logger.setLogLevel(ArRTC.Logger.INFO);，就可以看到 INFO，ERROR 和
         * WARNING 级别的日志信息。
         * Parameters
         * level: DEBUG | INFO | WARNING | ERROR | NONE
         * 开发者设置的日志过滤级别，默认为 NONE。
         */
        SupLogger.prototype.setLogLevel = function (level, prefix) {
            prefix && (this.logPrefix = prefix);
            if ("number" === typeof level && level > -1 && level < 5) {
                this.logLevel = level;
            }
        };
        /**
         * 该方法输出错误级的日志。
         */
        SupLogger.prototype.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if ((this.logLevel > LogLevel.ERROR && this.logLevel !== LogLevel.NONE) || this.logLevel === LogLevel.NONE)
                return;
            var params = args;
            var nowTime = Date.now();
            params.unshift("[" + TimeUtils.timesToDate(nowTime, "hh:mm:ss:ms") + "] %c" + this.logPrefix + " [ERROR]:%c", 'color: #b00020; font-weight: bold;', 'color: #dc3545;');
            if (this.uploadServeTranslators.length > 0) {
                this.uploadServeTranslators.map(function (task) {
                    task({
                        type: "error",
                        params: params,
                        timestamp: nowTime
                    }, function () {
                        console.error.apply(console, params);
                    });
                });
            }
            else {
                console.error.apply(console, params);
            }
        };
        /**
         * 该方法输出警告级的日志。
         */
        SupLogger.prototype.warning = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if ((this.logLevel > LogLevel.WARNING && this.logLevel !== LogLevel.NONE) || this.logLevel === LogLevel.NONE)
                return;
            var params = args;
            var nowTime = Date.now();
            params.unshift("[" + TimeUtils.timesToDate(nowTime, "hh:mm:ss:ms") + "] %c" + this.logPrefix + " [WARNING]:", 'color: #ffc107; font-weight: bold;');
            if (this.uploadServeTranslators.length > 0) {
                this.uploadServeTranslators.map(function (task) {
                    task({
                        type: "warning",
                        params: params,
                        timestamp: nowTime
                    }, function () {
                        console.warn.apply(console, params);
                    });
                });
            }
            else {
                console.warn.apply(console, params);
            }
        };
        /**
         * 该方法输出消息级的日志。
         */
        SupLogger.prototype.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if ((this.logLevel > LogLevel.INFO && this.logLevel !== LogLevel.NONE) || this.logLevel === LogLevel.NONE)
                return;
            var params = args;
            var nowTime = Date.now();
            params.unshift("[" + TimeUtils.timesToDate(nowTime, "hh:mm:ss:ms") + "] %c" + this.logPrefix + " [INFO]:", 'color:  #007bff; font-weight: bold;');
            if (this.uploadServeTranslators.length > 0) {
                this.uploadServeTranslators.map(function (task) {
                    task({
                        type: "info",
                        params: params,
                        timestamp: nowTime
                    }, function () {
                        console.log.apply(console, params);
                    });
                });
            }
            else {
                console.log.apply(console, params);
            }
        };
        /**
         * 该方法输出debug级的日志。
         */
        SupLogger.prototype.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if ((this.logLevel > LogLevel.DEBUG && this.logLevel !== LogLevel.NONE) || this.logLevel === LogLevel.NONE)
                return;
            var params = args;
            var nowTime = Date.now();
            params.unshift("[" + TimeUtils.timesToDate(nowTime, "hh:mm:ss.ms") + "] %c" + this.logPrefix + " [DEBUG]:", 'color:#6facff;');
            if (this.uploadServeTranslators.length > 0) {
                this.uploadServeTranslators.map(function (task) {
                    task({
                        type: "debug",
                        params: params,
                        timestamp: nowTime
                    }, function () {
                        console.log.apply(console, params);
                    });
                });
            }
            else {
                console.log.apply(console, params);
            }
        };
        return SupLogger;
    }());
    /**
     * @ignore
     * Variables:
     * - DEBUG: 0
     * - ERROR: 3
     * - INFO: 1
     * - NONE: 4
     * - WARNING: 2
     * - logLevel: 0
     * - logPrefix: "SupLogger"
     * Method:
     * - warning
     * - info
     * - debug
     * - error
     * - info
     * - setLogLevel
     * - use
     */
    var Logger = new SupLogger();
    Logger.setLogLevel(Logger.DEBUG, "ar-whiteboard");

    /**
     * @ignore
     */
    var ArrPrototype = Array.prototype;
    /**
     *
     *
     * @class EventEmitter
     * @ignore
     */
    var EventEmitter = /** @class */ (function () {
        function EventEmitter() {
            this._events = {};
            this.addListener = this.on;
        }
        /**
         * Gets all the listeners of a specified event.
         *
         * @param {string} event
         * @returns
         * @memberof EventEmitter
         */
        EventEmitter.prototype.getListeners = function (event) {
            return this._events[event] ? ArrPrototype.map.call(this._events[event], function (e) { return e.listener; }) : [];
        };
        /**
         * Listens for a specified event.
         *
         * When the event happens, the callback that you pass is triggered.
         *
         * @param {string} event
         * @param {Function} callback The callback to be triggered.
         */
        EventEmitter.prototype.on = function (event, callback) {
            if (!this._events[event]) {
                this._events[event] = [];
            }
            var evtList = this._events[event];
            if (-1 === this._indexOfListener(evtList, callback)) {
                evtList.push({
                    listener: callback,
                    once: false
                });
            }
        };
        /**
         *
         *
         * @param {string} event
         * @param {Function} callback
         * @memberof EventEmitter
         */
        EventEmitter.prototype.once = function (event, callback) {
            if (!this._events[event]) {
                this._events[event] = [];
            }
            var evtList = this._events[event];
            if (-1 === this._indexOfListener(evtList, callback)) {
                evtList.push({
                    listener: callback,
                    once: true
                });
            }
        };
        /**
         *
         *
         * @param {string} event
         * @param {Function} callback
         * @memberof EventEmitter
         */
        EventEmitter.prototype.off = function (event, callback) {
            this._events[event] || (this._events[event] = []);
            var evtList = this._events[event];
            var index = this._indexOfListener(evtList, callback);
            if (-1 !== index) {
                ArrPrototype.splice.call(evtList, index, 1);
            }
        };
        /**
         *
         *
         * @param {string} [event]
         * @memberof EventEmitter
         */
        EventEmitter.prototype.removeAllListeners = function (event) {
            if (event) {
                delete this._events[event];
            }
            else {
                this._events = {};
            }
        };
        /**
         *
         *
         * @param {string} event
         * @memberof EventEmitter
         */
        EventEmitter.prototype.emit = function (event) {
            var e_1, _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this._events[event] || (this._events[event] = []);
            var evtList = this._events[event];
            try {
                for (var evtList_1 = __values(evtList), evtList_1_1 = evtList_1.next(); !evtList_1_1.done; evtList_1_1 = evtList_1.next()) {
                    var evtCallback = evtList_1_1.value;
                    evtCallback.once && this.off(event, evtCallback.listener),
                        evtCallback.listener.apply(this, args || []);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (evtList_1_1 && !evtList_1_1.done && (_a = evtList_1.return)) _a.call(evtList_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         *
         *
         * @param {any[]} evtList
         * @param {Function} callback
         * @returns
         * @memberof EventEmitter
         */
        EventEmitter.prototype._indexOfListener = function (evtList, callback) {
            for (var evtNumber = evtList.length; evtNumber--;)
                if (evtList[evtNumber].listener === callback)
                    return evtNumber;
            return -1;
        };
        return EventEmitter;
    }());

    /**
     * ArRTCError
     */
    var ArWhiteBoardError = /** @class */ (function () {
        function ArWhiteBoardError(code, message, data) {
            if (message === void 0) { message = ""; }
            this.name = "ArWhiteBoardException";
            this.code = code;
            var msgPrefix = "ArWhiteBoardError".concat(" ").concat(this.code.toString(), ": ");
            this.message = message ? msgPrefix.concat(message) : msgPrefix;
            this.data = data;
        }
        ArWhiteBoardError.prototype.toString = function () {
            return this.data ? "".concat(this.message, " data: ").concat(JSON.stringify(this.data)) : this.message;
        };
        return ArWhiteBoardError;
    }());

    /**
     * 判断平台是否是移动端
     * @return {boolean}
     * @hidden
     */
    var isMobile = function () {
        var e_1, _a;
        var info = navigator.userAgent;
        var agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod', 'iPad'];
        try {
            for (var agents_1 = __values(agents), agents_1_1 = agents_1.next(); !agents_1_1.done; agents_1_1 = agents_1.next()) {
                var deviceName = agents_1_1.value;
                if (info.indexOf(deviceName) >= 0)
                    return true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (agents_1_1 && !agents_1_1.done && (_a = agents_1.return)) _a.call(agents_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    /**
     *
     * 【DOM】操作
     * 骨架，所有的方法都是只能影响骨架，不包含数据的变更
     * 只做视图的展示，通过方法改变视图 (DOM)
     * @export
     * @class BoardSkeleton
     * @hidden
     */
    var BoardSkeleton = /** @class */ (function (_super) {
        __extends(BoardSkeleton, _super);
        function BoardSkeleton(selector, options) {
            var _this = _super.call(this) || this;
            // 画布配置
            _this.options = {
                width: 1920,
                height: 1080,
                globalBackgroundColor: '#ffffff',
                backgroundColor: '',
                backgroundImage: '',
                backgroundImageFillMode: 'contain',
                backgroundH5: '',
                progressBarUrl: '',
                ratio: '16:9',
                scale: 100
            };
            // private _topLeftController!: HTMLDivElement;
            // private _topCenterController!: HTMLDivElement;
            // private _topRightController!: HTMLDivElement;
            // private _rightCenterController!: HTMLDivElement;
            // private _rightBottomController!: HTMLDivElement;
            // private _bottomCenterController!: HTMLDivElement;
            // private _leftBottomController!: HTMLDivElement;
            // private _leftCenterController!: HTMLDivElement;
            // 画布容器宽度
            _this._boxWidth = 0;
            // 画布容器高度
            _this._boxHeight = 0;
            // 画布宽度
            _this._width = 0;
            // 画布高度
            _this._height = 0;
            // 控制框的位置
            _this._controlBoxPosition = [0, 0, 0, 0];
            _this.selectStartPosition = [];
            _this.selectLatestMovePosition = [];
            _this._handleMouseDown = function () { };
            _this._handleMouseMove = function () { };
            _this._handleMouseUp = function () { };
            _this._handleControlBoxMouseDown = function () { };
            _this._handleControlBoxMouseMove = function () { };
            _this._handleControlBoxMouseUp = function () { };
            var el;
            if (selector instanceof HTMLElement) {
                el = selector;
            }
            else if (typeof selector === 'string' && document.querySelector("#" + selector)) {
                el = document.querySelector("#" + selector);
            }
            else {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'selector must be HTMLElement or Element id');
            }
            _this._rootDom = el;
            _this.options = __assign(__assign(__assign({}, _this.options), options), { width: _this._rootDom.clientWidth, height: _this._rootDom.clientHeight });
            _this._calculateCanvasWidthAndHeight();
            // 创建 canvas 画板
            _this.init();
            return _this;
        }
        Object.defineProperty(BoardSkeleton.prototype, "width", {
            get: function () {
                return this._width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BoardSkeleton.prototype, "height", {
            get: function () {
                return this._height;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BoardSkeleton.prototype, "boxWidth", {
            get: function () {
                return this._boxWidth;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BoardSkeleton.prototype, "boxHeight", {
            get: function () {
                return this._boxHeight;
            },
            enumerable: false,
            configurable: true
        });
        BoardSkeleton.prototype.getRetinaScaling = function () {
            // 浏览器缩放 = retina * scale
            return window.devicePixelRatio ||
                window.webkitDevicePixelRatio ||
                window.mozDevicePixelRatio ||
                1;
        };
        BoardSkeleton.prototype.init = function () {
            // canvas wrap
            var _a = createElement({
                key: 'canvasBox',
                kind: 'div',
                props: {
                    class: 'board_wrap',
                },
                style: {
                    position: 'relative',
                    width: this._boxWidth + 'px',
                    height: this._boxHeight + 'px',
                    top: this._rootDom.offsetHeight / 2 + 'px',
                    left: this._rootDom.offsetWidth / 2 + 'px',
                    transform: 'translate(-50%, -50%)',
                    padding: '0px',
                    margin: '0px',
                    'border-width': '0px',
                    // cursor: 'default',
                    overflow: 'hidden',
                    // 'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                },
                children: [
                    // cache canvas
                    {
                        key: 'cacheCanvas',
                        kind: 'canvas',
                        props: {
                            class: 'board-cache_canvas',
                            width: this._width,
                            height: this._height,
                        },
                        // style: {
                        //   position: 'absolute',
                        //   left: '0px',
                        //   top: '0px',
                        //   width: this._width + 'px',
                        //   height: this._height + 'px',
                        //   userSelect: 'none',
                        //   padding: '0px',
                        //   'margin-top': '0px',
                        //   'margin-left': '0px',
                        //   borderWidth: '0px',
                        //   'z-index': 10,
                        //   PointerEvent: 'none'
                        // },
                        children: []
                    },
                    // canvas
                    {
                        key: 'canvas',
                        kind: 'canvas',
                        props: {
                            class: 'board_canvas',
                            width: this._width,
                            height: this._height,
                        },
                        // style: {
                        //   position: 'absolute',
                        //   left: '0px',
                        //   top: '0px',
                        //   width: this._width + 'px',
                        //   height: this._height + 'px',
                        //   userSelect: 'none',
                        //   padding: '0px',
                        //   'margin-top': '0px',
                        //   'margin-left': '0px',
                        //   borderWidth: '0px',
                        //   'z-index': 10
                        // },
                        children: []
                    },
                    // 背景图片
                    {
                        key: 'canvasBackgroundImage',
                        kind: 'img',
                        props: {
                            class: 'board_background_image',
                            src: ''
                        },
                        // style: {
                        //   position: 'absolute',
                        //   left: '0px',
                        //   top: '0px',
                        //   visibility: 'hidden',
                        //   'z-index': 5
                        // },
                        children: []
                    },
                    // 背景颜色
                    {
                        key: 'canvasBackground',
                        kind: 'div',
                        props: {
                            class: 'board_background_wrap',
                            width: '100%',
                            height: '100%',
                        },
                        // style: {
                        //   position: 'absolute',
                        //   left: '0px',
                        //   top: '0px',
                        //   width: '100%',
                        //   height: '100%',
                        //   padding: '0px',
                        //   margin: '0px',
                        //   // cursor: 'none',
                        //   'z-index': 4,
                        //   'background-color': this.options.globalBackgroundColor,
                        // },
                        children: []
                    },
                    // 鼠标样式
                    {
                        key: 'cursorWrap',
                        kind: 'div',
                        props: {
                            class: 'cursor_wrap_view',
                            width: '100%',
                            height: '100%',
                        },
                        // style: {
                        //   position: 'absolute',
                        //   left: '50%',
                        //   top: '50%',
                        //   width: '100%',
                        //   height: '100%',
                        //   transform: 'translate(-50%, -50%)',
                        //   border: 'none',
                        //   'z-index': 11,
                        //   'pointer-events': 'none'
                        // },
                        children: []
                    },
                    // 显示控件
                    {
                        key: 'controlWrap',
                        kind: 'div',
                        props: {
                            class: 'control_wrap_view',
                            width: '100%',
                            height: '100%',
                        },
                        // style: {
                        //   position: 'absolute',
                        //   display: 'none',
                        //   left: '50%',
                        //   top: '50%',
                        //   width: '100%',
                        //   height: '100%',
                        //   border: 'none',
                        //   'user-select': 'none',
                        //   transform: 'translate(-50%, -50%)',
                        //   'z-index': 0, // 100 切换
                        // },
                        children: [
                            {
                                key: 'controlBox',
                                kind: 'div',
                                // style: {
                                //   position: 'absolute',
                                //   border: `1px dashed ${this.options.selectBoxColor}`,
                                //   cursor: 'move',
                                //   visibility: 'visible',
                                //   transform: 'translateX(0px) translateY(0px) rotate(0deg)',
                                // },
                                children: [
                                // // 左上角控制点
                                // {
                                //   key: 'topLeftController',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //     left: '-6px',
                                //     top: '-6px',
                                //     cursor: 'nwse-resize',
                                //   }
                                // },
                                // // 上部中心控制点
                                // {
                                //   key: 'topCenterController',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //     left: 'calc(50% - 6px)',
                                //     top: '-6px',
                                //     cursor: 'ns-resize',
                                //   }
                                // },
                                // // 右上角控制点
                                // {
                                //   key: 'topRightController',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //     right: '-6px',
                                //     top: '-6px',
                                //     cursor: 'nesw-resize',
                                //   }
                                // },
                                // // 右边中心点控制点
                                // {
                                //   key: 'rightCenterController',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //     right: '-6px',
                                //     top: 'calc(50% - 6px)',
                                //     cursor: 'ew-resize',
                                //   }
                                // },
                                // // 右下角控制点
                                // {
                                //   key: 'rightBottomController',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //     right: '-6px',
                                //     bottom: '-6px',
                                //     cursor: 'nwse-resize',
                                //   }
                                // },
                                // // 下部中心的控制点
                                // {
                                //   key: 'bottomCenterController',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //     left: 'calc(50% - 6px)',
                                //     bottom: '-6px',
                                //     cursor: 'ns-resize',
                                //   }
                                // },
                                // // 左下角控制点
                                // {
                                //   key: 'leftBottomController',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //     left: '-6px',
                                //     bottom: '-6px',
                                //     cursor: 'ns-resize',
                                //   }
                                // },
                                // // 左边中心点控制点
                                // {
                                //   key: 'leftCenterController',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //     left: '-6px',
                                //     top: 'calc(50% - 6px)',
                                //     cursor: 'nesw-resize',
                                //   }
                                // },
                                // 旋转控制点
                                // {
                                //   key: '',
                                //   kind: 'div',
                                //   style: {
                                //     ...Config.CONTROL_DIR_STYLE,
                                //   }
                                // },
                                ]
                            }
                        ]
                    },
                    {
                        key: 'loading',
                        kind: 'img',
                        props: {
                            class: 'board_loading',
                            src: this.options.progressBarUrl
                        },
                        // style: {
                        //   position: 'absolute',
                        //   display: 'none',
                        //   left: '50%',
                        //   top: '50%',
                        //   transform: 'translate(-50%, -50%)',
                        //   overflow: 'hidden',
                        //   'z-index': 200
                        // },
                        children: []
                    },
                    // 文字容器，包裹 textarea
                    {
                        key: 'textBox',
                        kind: 'div',
                        props: {
                            class: 'board_text_box',
                            width: '100%',
                            height: '100%',
                        },
                        // style: {
                        //   position: 'absolute',
                        //   left: '50%',
                        //   top: '50%',
                        //   width: '100%',
                        //   height: '100%',
                        //   border: 'none',
                        //   transform: 'translate(-50%, -50%)',
                        //   'z-index': 9,
                        //   overflow: 'hidden'
                        // },
                        children: [
                            {
                                key: 'textInput',
                                kind: 'textarea',
                                props: __assign({ class: 'board-text_input' }, Config.TEXT_INPUT_ELEMENT_OPTIONS.props),
                                // style: {
                                //   ...Config.TEXT_INPUT_ELEMENT_OPTIONS.style,
                                //   visibility: 'hidden'
                                // },
                            }
                        ]
                    },
                    // H5
                    {
                        key: 'canvasH5',
                        kind: 'iframe',
                        props: {
                            class: 'board_webview',
                            width: '100%',
                            height: '100%',
                            src: ''
                        },
                        // style: {
                        //   position: 'absolute',
                        //   left: '0',
                        //   top: '0',
                        //   width: '100%',
                        //   height: '100%',
                        //   border: 'none',
                        //   'z-index': 8
                        // },
                        children: []
                    },
                ]
            }), el = _a.el, canvasBox = _a.canvasBox, canvas = _a.canvas, cacheCanvas = _a.cacheCanvas, canvasBackground = _a.canvasBackground, canvasBackgroundImage = _a.canvasBackgroundImage, canvasH5 = _a.canvasH5, textBox = _a.textBox; _a.textInput; var cursorWrap = _a.cursorWrap, loading = _a.loading, controlWrap = _a.controlWrap, controlBox = _a.controlBox;
            // 添加到页面
            this._rootDom.appendChild(el);
            // const { el: cacheCanvas } = createElement({
            //   kind: 'canvas',
            //   props: {
            //     width: this.width,
            //     height: this.height,
            //   },
            //   style: {}
            // });
            // 赋值
            this._canvasBox = canvasBox;
            this._canvas = canvas;
            this._cacheCanvas = cacheCanvas;
            this._canvasBgWrap = canvasBackground;
            this._canvasBgImg = canvasBackgroundImage;
            this._canvasBgH5 = canvasH5;
            this._cursorWrap = cursorWrap;
            this._loading = loading;
            this._textBox = textBox;
            this._controlWrap = controlWrap;
            this._controlBox = controlBox;
            // this._topLeftController = topLeftController;
            // this._topCenterController = topCenterController;
            // this._topRightController = topRightController;
            // this._rightCenterController = rightCenterController;
            // this._rightBottomController = rightBottomController;
            // this._bottomCenterController = bottomCenterController;
            // this._leftBottomController = leftBottomController;
            // this._leftCenterController = leftCenterController;
            this._canvasCtx = canvas.getContext('2d');
            this._cacheCanvasCtx = cacheCanvas.getContext('2d');
            // 默认设置 - 还原之前设置的画笔样式
            // this._canvasCtx.fillStyle = '';
            // this._canvasCtx.strokeStyle = 'red';
            // this._canvasCtx.lineCap = 'round'; // 'round', 'butt', 'square'
            // this._canvasCtx.lineJoin = 'round'; // 'round', 'bevel', 'miter'
            // this._cacheCanvasCtx.fillStyle = '';
            // this._cacheCanvasCtx.strokeStyle = 'red';
            // this._cacheCanvasCtx.lineCap = 'round'; // 'round', 'butt', 'square'
            // this._cacheCanvasCtx.lineJoin = 'round'; // 'round', 'bevel', 'miter'
            this._handleControlBoxMouseDown = this.handleControlBoxMouseDown.bind(this);
            this._handleControlBoxMouseMove = this.handleControlBoxMouseMove.bind(this);
            this._handleControlBoxMouseUp = this.handleControlBoxMouseUp.bind(this);
            // 鼠标点击控制框容器
            this._controlWrap.ontouchstart = /*this._controlWrap.onmouseenter =*/ this._controlWrap.onmousedown = this._handleControlBoxMouseDown;
            // 鼠标在控制框容器内移动
            this._controlWrap.ontouchmove = this._controlWrap.onmousemove = this._handleControlBoxMouseMove;
            // 鼠标在点击控制框容器之后抬起
            this._controlWrap.ontouchend = this._controlWrap.onmouseup = this._controlWrap.onmouseout = this._handleControlBoxMouseUp;
            // 屏蔽鼠标右键
            this._canvas.oncontextmenu = function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            };
            this.startHandleMoveEvent();
        };
        BoardSkeleton.prototype.destroy = function () {
            this._rootDom.innerHTML = '';
        };
        /**
         * 获取截图 url
         *
         */
        BoardSkeleton.prototype.getSnapShortImage = function () {
            var snapCanvas = createElement({
                kind: 'canvas',
                props: {
                    width: this.width,
                    height: this.height,
                },
                style: {}
            }).el;
            var snapCanvasCtx = snapCanvas.getContext('2d');
            snapCanvasCtx.fillStyle = this.options.backgroundColor;
            snapCanvasCtx.fillRect(0, 0, this.width, this.height);
            snapCanvasCtx.drawImage(this._cacheCanvas, 0, 0);
            return snapCanvas.toDataURL('image/png');
        };
        /**
         *
         *
         * @param {HTMLElement} el
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.appendChild = function (el) {
            this._canvasBox.appendChild(el);
        };
        /**
         * 设置画板的背景颜色
         *
         * @param {string} color
         * @memberof Painter
         */
        BoardSkeleton.prototype.setCanvasBGColor = function (color) {
            this.options.backgroundColor = color;
            this._canvasBgWrap.style.backgroundColor = color;
        };
        /**
         * 设置画板背景图片
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.setCanvasBGImage = function (imageUrl, imageFillMode) {
            if (imageFillMode === void 0) { imageFillMode = 'contain'; }
            if (imageUrl) {
                this.options.backgroundImage = imageUrl;
                this.options.backgroundImageFillMode = imageFillMode;
                this._canvasBgImg.src = imageUrl;
                this._canvasBgImg.style.visibility = 'visible';
                this._canvasBgImg.classList.remove('contain', 'cover', 'fill');
                if (['contain', 'cover', 'fill'].includes(imageFillMode)) {
                    this._canvasBgImg.classList.add(imageFillMode);
                }
            }
            else {
                this.options.backgroundImage = '';
                this.options.backgroundImageFillMode = 'contain';
                this._canvasBgImg.classList.remove('contain', 'cover', 'fill');
                this._canvasBgImg.removeAttribute('src');
                this._canvasBgImg.style.visibility = 'hidden';
            }
        };
        /**
         * 设置画板背景 H5
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.setCanvasBGH5 = function (url) {
            if (url) {
                this.options.backgroundH5 = url;
                this._canvasBgH5.src = url;
                this._canvasBgH5.style.visibility = 'visible';
            }
            else {
                this.options.backgroundH5 = '';
                this._canvasBgH5.src = '';
                this._canvasBgH5.style.visibility = 'hidden';
            }
        };
        /**
         * 创建输入文本框
         *
         * @param id
         * @param startX
         * @param startY
         * @param options
         */
        BoardSkeleton.prototype.createTextInput = function (textareaEl) {
            this._textBox.appendChild(textareaEl);
        };
        /**
         * 显示控制边框
         *
         */
        BoardSkeleton.prototype.showControlWrap = function () {
            this._controlWrap.style.display = 'block';
            this._controlWrap.style.zIndex = '100';
        };
        /**
         * 隐藏控制边框
         *
         */
        BoardSkeleton.prototype.hideControlWrap = function () {
            this._controlWrap.style.display = 'block';
            this._controlWrap.style.zIndex = '0';
        };
        /**
         * 设置控制容器的大小
         */
        BoardSkeleton.prototype.setControlBoxSize = function (vector) {
            var selectorMinX = vector[0];
            var selectorMinY = vector[1];
            var selectorMaxX = vector[2];
            var selectorMaxY = vector[3];
            this._controlBox.style.width = selectorMaxX - selectorMinX + "px"; // 
            this._controlBox.style.height = selectorMaxY - selectorMinY + "px"; // 
            // 设置左上角坐标
            this.setControlBoxPosition(vector);
        };
        /**
         * 设置控制容器的大小
         */
        BoardSkeleton.prototype.setControlBoxPosition = function (vector) {
            var offsetX = (this.boxWidth - this.width) / 2;
            var offsetY = (this.boxHeight - this.height) / 2;
            var selectorMinX = vector[0] + offsetX;
            var selectorMinY = vector[1] + offsetY;
            this._controlBoxPosition = vector;
            // 设置容器位置
            this._controlBox.style.transform = "translateX(" + selectorMinX + "px) translateY(" + selectorMinY + "px) rotate(0deg)";
        };
        /**
         * 显示加载动画
         *
         */
        BoardSkeleton.prototype.showLoading = function () {
            this._loading.style.display = 'block';
        };
        /**
         * 隐藏加载动画
         *
         */
        BoardSkeleton.prototype.hideLoading = function () {
            this._loading.style.display = 'none';
        };
        /**
         * 改变骨架的大小
         *
         * NOTE:
         * canvas 改变尺寸画板内容会被清空
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.renderSize = function () {
            this._calculateCanvasWidthAndHeight();
            this._canvasBox.style.width = this._boxWidth + "px";
            this._canvasBox.style.height = this._boxHeight + "px";
            this._canvasBox.style.top = this._rootDom.offsetHeight / 2 + "px";
            this._canvasBox.style.left = this._rootDom.offsetWidth / 2 + "px";
            this._canvas.width = this._cacheCanvas.width = this._width;
            this._canvas.height = this._cacheCanvas.height = this._height;
            this._canvas.style.width = this._cacheCanvas.style.width = this._width + "px";
            this._canvas.style.height = this._cacheCanvas.style.height = this._height + "px";
            if (this._boxWidth > this._width) {
                this._canvas.style.marginTop = this._cacheCanvas.style.marginTop = (this._boxHeight - this._height) / 2 + "px";
                this._canvas.style.marginLeft = this._cacheCanvas.style.marginLeft = (this._boxWidth - this._width) / 2 + "px";
            }
            else {
                this._canvas.style.marginTop = this._cacheCanvas.style.marginTop = "0px";
                this._canvas.style.marginLeft = this._cacheCanvas.style.marginLeft = "0px";
            }
        };
        BoardSkeleton.prototype.startHandleMoveEvent = function () {
            this._handleMouseDown = this.handleMouseDown.bind(this);
            this._handleMouseMove = this.handleMouseMove.bind(this);
            this._handleMouseUp = this.handleMouseUp.bind(this);
            // 监听画板事件 - pointerEvent 兼容移动端和 PC 端
            if (isMobile()) {
                // 移动端不监听改变鼠标样式
                this._canvas.addEventListener('touchstart', this._handleMouseDown, false);
                this._canvas.addEventListener('touchmove', this._handleMouseMove, false);
                this._canvas.addEventListener('touchend', this._handleMouseUp, false);
                this._canvas.addEventListener('touchcancel', this._handleMouseUp, false);
            }
            else {
                this._canvas.addEventListener('mouseenter', this._handleMouseDown, false);
                this._canvas.addEventListener('mousedown', this._handleMouseDown, false);
                this._canvas.addEventListener('mousemove', this._handleMouseMove, false);
                this._canvas.addEventListener('mouseup', this._handleMouseUp, false);
                this._canvas.addEventListener('mouseout', this._handleMouseUp, false); // _handleMouseOut
            }
        };
        BoardSkeleton.prototype.stopHandleMoveEvent = function () {
            // 监听画板事件 - pointerEvent 兼容移动端和 PC 端
            if (isMobile()) {
                this._canvas.removeEventListener('touchstart', this._handleMouseDown, false);
                this._canvas.removeEventListener('touchmove', this._handleMouseMove, false);
                this._canvas.removeEventListener('touchend', this._handleMouseUp, false);
                this._canvas.removeEventListener('touchcancel', this._handleMouseUp, false);
            }
            else {
                this._canvas.removeEventListener('mousedown', this._handleMouseDown, false);
                this._canvas.removeEventListener('mousemove', this._handleMouseMove, false);
                this._canvas.removeEventListener('mouseup', this._handleMouseUp, false);
                this._canvas.removeEventListener('mouseout', this._handleMouseUp, false);
            }
        };
        /**
         * 基于容器计算 canvas 的宽高
         *
         * canvas 宽高 不能大于屏幕的尺寸，但是容器可以无限等比缩放
         * @private
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype._calculateCanvasWidthAndHeight = function () {
            var _a = this.options, ratio = _a.ratio, scale = _a.scale;
            // 从给出的容器中计算出最大大符合比例的画板的宽高 - 不缩放，100% 最佳的大小
            var splitRatio = ratio.split(':');
            var widthRatio = Number(splitRatio[0]);
            var heightRatio = Number(splitRatio[1]);
            var rootWidth = this._rootDom.offsetWidth;
            var rootHeight = this._rootDom.offsetHeight;
            var bestWidth = 0;
            if (rootWidth * heightRatio / widthRatio < rootHeight) {
                bestWidth = rootWidth;
            }
            else {
                bestWidth = rootHeight * widthRatio / heightRatio;
            }
            // 根据以上最佳比例的画布大小，计算出 canvas 容器的缩放的大小
            this._boxWidth = bestWidth * (scale / 100);
            this._boxHeight = this._boxWidth * heightRatio / widthRatio;
            // 根据 canvas 容器的大小计算出 canvas 缩放之后的大小，但是不能超过屏幕的高宽
            // const screenWidth = window.screen.width; // window.screen.width document.documentElement.clientWidth
            // const screenHeight = window.screen.height; // window.screen.height document.documentElement.clientHeight
            var canvasMaxWidth = 0;
            var canvasMaxHeight = 0;
            // 根据 canvas 容器的大小计算出 canvas 缩放之后的大小，但是不能超过屏幕的高宽
            // const canvasBoxMaxWidth = this._boxWidth < screenWidth ? this._boxWidth : screenWidth;
            var canvasBoxMaxWidth = this._boxWidth;
            var canvasBoxMaxHeight = canvasBoxMaxWidth * heightRatio / widthRatio;
            canvasMaxWidth = canvasBoxMaxWidth;
            canvasMaxHeight = canvasBoxMaxHeight;
            // 如果超出屏幕高度，需要限制其高度
            // if (canvasBoxMaxHeight > rootHeight) {
            //   canvasMaxWidth = rootHeight * widthRatio / heightRatio;
            //   canvasMaxHeight = rootHeight;
            // }
            this._width = canvasMaxWidth;
            this._height = canvasMaxHeight;
            // if (canvasMaxWidth * heightRatio / widthRatio < canvasMaxHeight) {
            //   this._width = canvasMaxWidth;
            //   this._height = canvasMaxWidth * heightRatio / widthRatio;
            // } else {
            //   this._width = canvasMaxHeight * widthRatio / heightRatio;
            //   this._height = canvasMaxHeight;
            // }
        };
        /**
         * 需要被重写
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.handleMouseDown = function (ev) { };
        /**
         * 需要被重写
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.handleMouseMove = function (ev) { };
        /**
         * 需要被重写
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.handleMouseUp = function (ev) { };
        /**
         * 需要被重写
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.handleMouseOut = function (ev) { };
        /**
         * 需要被重写
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.handleControlBoxMouseDown = function (ev) { };
        /**
         * 需要被重写
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.handleControlBoxMouseMove = function (ev) { };
        /**
         * 需要被重写
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.handleControlBoxMouseUp = function (ev) { };
        /**
         * 需要被重写
         *
         * @memberof BoardSkeleton
         */
        BoardSkeleton.prototype.handleControlBoxMouseOut = function (ev) { };
        // 基准宽度 - 根据 ratio 计算画板默认的宽高，默认宽高为基准比例，是数据转换的基准值
        BoardSkeleton.basicWidth = 1920;
        // 基准高度 - 根据 ratio 计算画板默认的宽高，默认宽高为基准比例，是数据转换的基准值
        BoardSkeleton.basicHeight = 1080;
        return BoardSkeleton;
    }(EventEmitter));

    /**
     * SDK 所有的形状与其对应的 class 表达式
     * @hidden
     */
    var SHAPE_CLASSES = {
        Arrow: Arrow,
        Circle: Circle,
        Ellipse: Ellipse,
        FreeDraw: FreeDraw,
        LaserPointer: LaserPointer,
        Line: Line,
        Rect: Rect,
        Text: Text,
        // EXTENDS
    };

    var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3ctitle%3eeraser%3c/title%3e %3cdefs%3e %3cpath d='M1542.63604%2c401.636491 C1542.64212%2c401.642264 1542.64811%2c401.648114 1542.65404%2c401.654038 L1549.74863%2c408.748632 C1550.12256%2c409.122557 1550.14072%2c409.722967 1549.79008%2c410.11881 L1542.80885%2c417.999142 L1532.31285%2c417.999142 L1529.38519%2c415.711238 C1528.95%2c415.371189 1528.87288%2c414.742739 1529.21293%2c414.307554 C1529.23283%2c414.282078 1529.25396%2c414.257582 1529.27624%2c414.234152 L1541.22228%2c401.672031 C1541.60286%2c401.271816 1542.23583%2c401.255904 1542.63604%2c401.636491 Z' id='path-1'%3e%3c/path%3e %3crect id='path-2' x='1539.73654' y='400.606602' width='14' height='8' rx='1'%3e%3c/rect%3e %3c/defs%3e %3cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg transform='translate(-1528.000000%2c -387.000000)'%3e %3cg%3e %3cuse stroke='%235A5A67' stroke-width='2' fill='%235A5A67' fill-rule='evenodd' xlink:href='%23path-1'%3e%3c/use%3e %3cuse stroke='white' stroke-width='1' xlink:href='%23path-1'%3e%3c/use%3e %3c/g%3e %3cg transform='translate(1546.736544%2c 404.606602) rotate(-315.000000) translate(-1546.736544%2c -404.606602) '%3e %3cuse stroke='%235A5A67' stroke-width='2' fill='white' fill-rule='evenodd' xlink:href='%23path-2'%3e%3c/use%3e %3cuse stroke='white' stroke-width='1' xlink:href='%23path-2'%3e%3c/use%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

    var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3ctitle%3efree-hand%3c/title%3e %3cdefs%3e %3cpath d='M1427.058%2c345.43405 C1427.254%2c345.23905 1427.571%2c345.23905 1427.766%2c345.43405 L1427.766%2c345.43405 L1433.374%2c351.04305 C1433.472%2c351.14005 1433.521%2c351.26805 1433.521%2c351.39605 C1433.521%2c351.52505 1433.472%2c351.65305 1433.374%2c351.75005 L1433.374%2c351.75005 L1423.463%2c361.72705 C1423.369%2c361.82105 1423.242%2c361.87405 1423.109%2c361.87405 L1423.109%2c361.87405 L1417.501%2c361.87405 C1417.224%2c361.87405 1417%2c361.65005 1417%2c361.37305 L1417%2c361.37305 L1417%2c355.76505 C1417%2c355.63205 1417.053%2c355.50505 1417.147%2c355.41105 L1417.147%2c355.41105 Z M1430.546%2c341.94725 C1431.808%2c340.68425 1433.855%2c340.68425 1435.118%2c341.94725 L1435.118%2c341.94725 L1436.862%2c343.69125 C1437.493%2c344.32225 1437.809%2c345.14925 1437.809%2c345.97725 C1437.809%2c346.80425 1437.493%2c347.63225 1436.862%2c348.26325 L1436.862%2c348.26325 L1435.815%2c349.31025 C1435.618%2c349.50725 1435.299%2c349.50725 1435.102%2c349.31025 L1435.102%2c349.31025 L1429.498%2c343.70625 C1429.4%2c343.60825 1429.351%2c343.47925 1429.351%2c343.35025 C1429.351%2c343.22125 1429.4%2c343.09225 1429.498%2c342.99425 L1429.498%2c342.99425 Z' id='path-1'%3e%3c/path%3e %3c/defs%3e %3cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg transform='translate(-1416.000000%2c -331.000000)'%3e %3cuse stroke='%235A5A67' stroke-width='2' fill='%235A5A67' fill-rule='evenodd' xlink:href='%23path-1'%3e%3c/use%3e %3cuse stroke='white' stroke-width='1' xlink:href='%23path-1'%3e%3c/use%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

    /**
     * @hidden
     */
    var SelectorBeginId = 2000;
    /**
     * 画板上下文
     *  将外部数据转化成画板数据
     * 【数据来源】：外部塞入，上层传入画板中画笔的数据
     * 【数据输出】：回调广播，上层更新画板数据
     * 提供以下方法可以改变画板的数据以及状态：
     * - 设置画板是否可编辑 setEnable
     * - 设置画刷工具类型 setBrushType
     * - 设置画刷颜色 setBrushColor
     * - 设置画刷粗细 setBrushThin
     * - 设置画板缩放比例 scalePainter
     * - 撤销 undo
     * - 重做 redo
     * - 添加形状 addElement
     * - 删除形状 removeElement
     * - 查找形状 findElement
     * - 清空画板：涂鸦和背景（图片、颜色）clear clearBackground
     * - 设置背景：颜色、图片 setCanvasBGColor
     * - 监听鼠标、触摸事件 handleMouseDown handleMouseMove handleMouseUp handleMouseOut
     * - 获取撤销和重做的操作列表，用于业务存储等需求
     *
     * 撤销和重做实现方法：
     * - 鼠标抬起或者移出，可以获取当前操作：添加形状、移动
     * - 文本输入框失焦，当前操作为：添加文本形状
     * - 添加一个 canUndoList 按顺序记录这些操作
     * - 添加一个 undoList 记录每次撤销操作，撤销成功，应该讲该条操作从 canUndoList 中移除
     * 【撤销】
     *    每次从 canUndoList 的末端取一条操作进行撤销、添加到 undoList 的末端，成功之后，将该条记录从
     *    canUndoList 中移除。
     * 【重做】
     *    从 undoList 末端取一条操作进行还原（重做），添加到 canUndoList 末端，成功之后，将该条记录从
     *    undoList 中移除。
     *
     * @export
     * @class Painter
     * @hidden
     */
    var Painter = /** @class */ (function (_super) {
        __extends(Painter, _super);
        /**
         * Creates an instance of Painter.
         * @param {(string | HTMLElement)} selector
         * @param {PainterOptions} [options]
         */
        function Painter(selector, options) {
            var _this_1 = _super.call(this, selector, options) || this;
            // 画布 ID
            _this_1._id = ''; // 平台_uid_时间戳_页码_#FileId - 多用户共用
            _this_1.uid = '';
            _this_1._enabled = true;
            // 画笔工具类型
            _this_1._toolType = exports.EBoardToolType.NONE;
            // 画笔的颜色
            _this_1._brushColor = "#000000";
            // 画笔的粗细
            _this_1._brushThin = 5;
            // 文本的样式
            _this_1._textStyle = 'normal';
            // 文本的粗细
            _this_1._textWeight = 'normal';
            // 文本的大小
            _this_1._textSize = 16;
            // 文本的颜色
            _this_1._textColor = '#333333';
            // 框选的边框颜色
            _this_1._selectBoxColor = '#ababab';
            // 画笔的鼠标样式
            _this_1._brushCursor = "default";
            // 框选工具 - 只有在选择时（鼠标按下并移动鼠标时）显示，最终包围所有的形状
            // private _selectRect: Shape | null = null;
            // 框选的容器
            // private _selectRectBox: Shape | null = null;
            // 被框选中的形状
            _this_1._selectShapes = [];
            // 聚焦的形状
            // private _focusShapes: Shape[] = [];
            // 内置激光笔
            _this_1._laserPointer = null;
            // 当前创建的输入框
            _this_1._textInput = null;
            // 正在绘制的图形 - 绘制于顶层话（绘制完成应该清除顶层画板，将其绘制到底层）
            _this_1._temporaryList = new Map();
            // 显示的形状 - 绘制于底层（代表已经绘制完成的画笔）
            _this_1._displayList = new Map();
            // 记录可以重做的操作
            _this_1._canRedoList = [];
            // 记录可以撤销的操作
            _this_1._canUndoList = [];
            // 局部变量
            _this_1._mouseDown = false;
            // 鼠标按下的坐标
            _this_1._startPosition = [0, 0];
            // 鼠标按下的坐标
            _this_1._endPosition = [0, 0];
            // 最后一次鼠标的位置
            _this_1._latestMovePosition = [];
            // 当前绘制的图形
            _this_1._currentShape = null;
            // 当前框选的图形
            _this_1._selectShape = null;
            // 绘制过程中需要实时上报的数据
            _this_1._needUpdateShapeData = null;
            if (options) {
                var brushColor = options.brushColor, brushThin = options.brushThin; options.scale; var textStyle = options.textStyle, textSize = options.textSize, textColor = options.textColor, selectBoxColor = options.selectBoxColor;
                brushColor && (_this_1._brushColor = brushColor);
                brushThin && (_this_1._brushThin = brushThin);
                // textStyle && (this._textStyle = textStyle);
                if (textStyle) {
                    var style = 'normal';
                    var weight = 'normal';
                    switch (textStyle) {
                        // case EArBoardTextStyle.NORMAL:
                        //   textStyle = 'normal';
                        //   break;
                        case exports.EBoardTextStyle.BOLD:
                            // textStyle = 'normal';
                            weight = 'bold';
                            break;
                        case exports.EBoardTextStyle.ITALIC:
                            style = 'italic';
                            break;
                        case exports.EBoardTextStyle.BOLD_ITALIC:
                            style = 'italic';
                            weight = 'bold';
                            break;
                    }
                    _this_1._textStyle = style;
                    _this_1._textWeight = weight;
                }
                textSize && (_this_1._textSize = textSize);
                textColor && (_this_1._textColor = textColor);
                selectBoxColor && (_this_1._selectBoxColor = selectBoxColor);
            }
            return _this_1;
        }
        Object.defineProperty(Painter.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "canUndoList", {
            /**
             * 获取可以撤销的画笔
             *
             * @readonly
             * @type {Shape[]}
             */
            get: function () {
                return this._canUndoList;
            },
            set: function (value) {
                this._canUndoList = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "canRedoList", {
            /**
             * 获取可以重做的画笔
             *
             * @readonly
             * @private
             */
            get: function () {
                return this._canRedoList;
            },
            set: function (value) {
                this._canRedoList = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "brushColor", {
            // 画笔颜色
            get: function () {
                return this._brushColor;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "brushType", {
            // 画笔类型
            get: function () {
                return this._toolType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "brushThin", {
            // 画笔粗细
            get: function () {
                return this._brushThin;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "backgroundColor", {
            // 背景颜色
            get: function () {
                return this.options.backgroundColor;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "backgroundImage", {
            // 背景颜色
            get: function () {
                return this.options.backgroundImage;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "backgroundImageFillMode", {
            // 背景颜色
            get: function () {
                return this.options.backgroundImageFillMode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "brushId", {
            /**
             * 生成一个画笔 ID
             *
             * @readonly
             */
            get: function () {
                return this.uid + "_" + Date.now();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Painter.prototype, "selectPenId", {
            get: function () {
                SelectorBeginId += 1;
                return 'selector_' + SelectorBeginId;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 设置白板是否允许涂鸦
         *
         * @param {boolean} enable
         */
        Painter.prototype.setEnable = function (enable) {
            if ("boolean" === typeof enable) {
                if (this._enabled !== enable) {
                    this._enabled = enable;
                    Logger.info("set board enable as " + enable);
                }
            }
            else {
                Logger.info('set board enable failed');
            }
        };
        /**
         * 获取当前是否画板是否可以编辑
         *
         * @return {boolean}
         */
        Painter.prototype.getEnable = function () {
            return this._enabled;
        };
        /**
         * 绘制过程中需要实时上报的数据
         *
         */
        Painter.prototype.getNeedUpdateShapeData = function () {
            var data = this._needUpdateShapeData;
            this._needUpdateShapeData = null;
            return data;
        };
        /**
         * 设置画笔类型
         * | 画笔类型      | 描述                                                         | 可撤销 | d    |
         * | ------------- | ------------------------------------------------------------ | :----: | ---- |
         * | FREE_DRAW     | 涂鸦。按照帧率进行广播，广播都是增量，客户端做处理。         |   Y    |      |
         * | LINE          | 直线。按照帧率进行广播。                                     |   Y    |      |
         * | ARROW         | 箭头。按照帧率进行广播。                                     |   Y    |      |
         * | RECT          | 矩形。按照帧率进行广播。                                     |   Y    |      |
         * | ELLIPSE       | 椭圆。按照帧率进行广播。                                     |   Y    |      |
         * | TEXT          | 文字。输入框失焦，本地绘制，通知远端绘制。                   |   Y    |      |
         * | LASER_POINTER | 激光笔。画笔切为激光笔时，通知远程添加，否则远程删除。       |        |      |
         * | ERASER        | 橡皮擦。本地擦除，远端删除图像。重做时本地还原，远端添加图形。改变 undoList。 |   Y    |      |
         * | SELECT        | 框选。可以选中（多个）图形进行拖拽。改变（本地或远程）图形的 Position。 |  MOVE  |      |
         *
         * @param {EBoardToolType} type
         */
        Painter.prototype.setBrushType = function (type) {
            var _this_1 = this;
            if (type === exports.EBoardToolType.NONE ||
                type === exports.EBoardToolType.SELECT ||
                type === exports.EBoardToolType.FREE_DRAW ||
                type === exports.EBoardToolType.TEXT ||
                type === exports.EBoardToolType.RECT ||
                type === exports.EBoardToolType.LINE ||
                type === exports.EBoardToolType.ELLIPSE ||
                type === exports.EBoardToolType.ARROW ||
                type === exports.EBoardToolType.ERASER ||
                type === exports.EBoardToolType.LASER_POINTER) {
                Logger.info("set brush type as " + type);
                // 设置鼠标的样式
                this._setBrushCursor(type);
                // 切换工具 - 清空所有框选
                if (this._selectShapes.length > 0) {
                    this._displayList.forEach(function (shape, id) {
                        if (_this_1._selectShapes.includes(id)) {
                            _this_1.drawToCachePainter(shape);
                        }
                    });
                    this._selectShapes = [];
                    this.hideControlWrap();
                    this._renderTemporaryCanvas();
                }
            }
            else {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS);
            }
        };
        /**
         * 设置画笔颜色
         *
         * @param {string} color
         */
        Painter.prototype.setBrushColor = function (color) {
            if ('string' === typeof color) {
                Logger.info("set brush color as " + color);
                this._brushColor = color;
            }
            else {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS);
            }
        };
        /**
         * 设置画笔的粗细
         *
         * 画笔粗细范围为 1～20
         *
         * @param {number} width
         */
        Painter.prototype.setBrushThin = function (width) {
            if ('number' === typeof width && width >= 1 && width <= 20) {
                this._brushThin = width;
                Logger.info("set brush thin as " + width);
            }
            else {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS);
            }
        };
        Painter.prototype.setTextStyle = function () {
        };
        Painter.prototype.getTextStyle = function () {
        };
        Painter.prototype.setLineStyle = function () {
        };
        Painter.prototype.getLineStyle = function () {
        };
        /**
         * 设置文本的大小
         *
         * @memberof Painter
         */
        Painter.prototype.setTextSize = function (size) {
            this._textSize = size;
        };
        /**
         * 获取文本的大小
         *
         * @return {*}
         * @memberof Painter
         */
        Painter.prototype.getTextSize = function () {
            return this._textSize;
        };
        /**
         * 设置文本的大小
         *
         * @memberof Painter
         */
        Painter.prototype.setTextColor = function (color) {
            this._textColor = color;
        };
        /**
         * 获取文本的大小
         *
         * @return {*}  {string}
         * @memberof Painter
         */
        Painter.prototype.getTextColor = function () {
            return this._textColor;
        };
        /**
         *
         *
         * @memberof Painter
         */
        Painter.prototype.setBoardRatio = function (ratio) {
            this.options.ratio = ratio;
            this.renderSize();
        };
        /**
         *
         *
         * @memberof Painter
         */
        Painter.prototype.getBoardRatio = function () {
            return this.options.ratio;
        };
        /**
         * 设置文本的大小
         *
         * @memberof Painter
         */
        Painter.prototype.setSelectBoxColor = function (color) {
            this._selectBoxColor = color;
        };
        /**
         * 仅更新 canvas 视图
         *
         * @param {number} scale
         */
        Painter.prototype.scalePainter = function (scale) {
            this.options.scale = scale;
            this.renderSize();
        };
        /**
         * 撤销
         *
         * 规则:
         * 1. 只能撤销自己的画笔
         * 2. 自己的画笔被移动、者删除或者清空白板时，不能执行撤销或重做操作
         */
        Painter.prototype.undo = function () {
            // ADD DELETE MOVE UPDATE_BACKGROUND
            var undoAction = this._canUndoList.pop();
            if (undoAction) {
                var type = undoAction.type; undoAction.shapes;
                this._canRedoList.push(undoAction);
                // 清除框选
                this._selectShapes = [];
                this.renderControlBox();
                var shapeInfo = undoAction.shapes[0];
                var shape = new SHAPE_CLASSES[shapeInfo.type](shapeInfo.id, {
                    // id: shapeInfo.id,
                    props: shapeInfo._props,
                    position: shapeInfo.position,
                    style: shapeInfo.style,
                });
                var basicReportInfo = void 0;
                // 撤销添加 - 删除
                if (type === BoardEventType.ADD_SHAPE) {
                    var deleteShapeContent = {
                        pIds: [shape.id]
                    };
                    basicReportInfo = {
                        bId: this.id,
                        action: BoardEventType.DELETE_SHAPE,
                        data: deleteShapeContent
                    };
                    this.removeElement(shape.id);
                }
                // 撤销删除 - 添加
                else if (type === BoardEventType.DELETE_SHAPE) {
                    var addShapeContent = {
                        pId: shape.id,
                        shape: shape.type,
                        props: shape.props,
                        position: shape.position,
                        style: shape.style,
                        width: this.width,
                        height: this.height,
                        lts: Date.now()
                    };
                    basicReportInfo = {
                        bId: this.id,
                        action: BoardEventType.ADD_SHAPE,
                        data: addShapeContent
                    };
                    this.addElement(shape);
                }
                // 撤销移动 - 还原之前的位置
                else if (type === BoardEventType.MOVE_SHAPE) {
                    var offset = undoAction.offset, shapes_1 = undoAction.shapes;
                    var _a = __read(offset, 2), offsetX = _a[0], offsetY = _a[1];
                    this.moveElement(shapes_1.map(function (shape) { return shape.id; }), [-1 * offsetX * this.width, -1 * offsetY * this.height]);
                    // shapes.forEach((currentShape: Shape) => {
                    //   const position: [number, number] = currentShape.position;
                    //   currentShape.position = [position[0] - (offsetX * this.width), position[1] - (offsetY * this.height)];
                    //   // 还原之前的坐标
                    //   currentShape.attr('position', currentShape.position);
                    // });
                    var moveShapeContent = {
                        pIds: shapes_1.map(function (item) { return item.id; }),
                        offset: [-1 * offsetX, -1 * offsetY]
                    };
                    basicReportInfo = {
                        bId: this.id,
                        action: BoardEventType.MOVE_SHAPE,
                        data: moveShapeContent
                    };
                }
                this.emit('reportContent', basicReportInfo);
            }
        };
        /**
         * 重做
         */
        Painter.prototype.redo = function () {
            var redoAction = this._canRedoList.pop();
            if (redoAction) {
                this._canUndoList.push(redoAction);
                var shapeInfo = redoAction.shapes[0];
                var shape = new SHAPE_CLASSES[shapeInfo.type](shapeInfo.id, {
                    // id: shapeInfo.id,
                    props: shapeInfo._props,
                    position: shapeInfo.position,
                    style: shapeInfo.style,
                });
                var basicReportInfo = void 0;
                // 重做添加 - 添加
                if (redoAction.type === BoardEventType.ADD_SHAPE) {
                    var addShapeContent = {
                        pId: shape.id,
                        shape: shape.type,
                        props: shape.props,
                        position: shape.position,
                        style: shape.style,
                        width: this.width,
                        height: this.height,
                        lts: Date.now()
                    };
                    basicReportInfo = {
                        bId: this.id,
                        action: BoardEventType.ADD_SHAPE,
                        data: addShapeContent
                    };
                    this.addElement(shape);
                }
                // 重做删除 - 删除
                else if (redoAction.type === BoardEventType.DELETE_SHAPE) {
                    var deleteShapeContent = {
                        pIds: [shape.id]
                    };
                    basicReportInfo = {
                        bId: this.id,
                        action: BoardEventType.DELETE_SHAPE,
                        data: deleteShapeContent
                    };
                    this.removeElement(shape.id);
                }
                // 重做移动 - 还原之前的位置
                else if (redoAction.type === BoardEventType.MOVE_SHAPE) {
                    var offset = redoAction.offset, shapes = redoAction.shapes;
                    var _a = __read(offset, 2), offsetX = _a[0], offsetY = _a[1];
                    this.moveElement(shapes.map(function (shape) { return shape.id; }), [offsetX * this.width, offsetY * this.height]);
                    // shapes.forEach((currentShape: Shape) => {
                    //   const position: [number, number] = currentShape.position;
                    //   currentShape.position = [position[0] + (offsetX * this.width), position[1] + (offsetY * this.height)];
                    //   // 还原之前的坐标
                    //   currentShape.attr('position', currentShape.position);
                    // });
                    var moveShapeContent = {
                        pIds: shapes.map(function (item) { return item.id; }),
                        offset: [offsetX, offsetY]
                    };
                    basicReportInfo = {
                        bId: this.id,
                        action: BoardEventType.MOVE_SHAPE,
                        data: moveShapeContent
                    };
                }
                this.emit('reportContent', basicReportInfo);
            }
        };
        /**
         * 添加图形到画板
         * 当形状的数据变化之后，图像会重新在画板上方渲染
         * @param {Shape} shape
         */
        Painter.prototype.addElement = function (shape) {
            if (this._displayList.get(shape.id)) {
                throw Error('can not add again');
            }
            // 防止本地还没有绘制完的画笔绘制到底层画布
            if (this._temporaryList.get(shape.id))
                return;
            // DOM 结点
            if (shape instanceof LaserPointer) {
                // this._addInputElement(shape.id, shape.props.x, shape.props.y);
                // const laserPointer = new LaserPointer(this.brushId, {
                //   props: shape.props,
                // });
                // this._laserPointer = this._handleShapeAttr(laserPointer);
                // 防止多次添加自己的激光笔
                var laserPointerEls = document.querySelectorAll(".board-laser_item");
                var exist_1 = false;
                laserPointerEls.forEach(function (el) {
                    if (el.getAttribute('data-uid') === shape.id) {
                        exist_1 = true;
                    }
                });
                !exist_1 && shape.buildElement(this._cursorWrap);
            }
            // Canvas 绘制
            else {
                // 添加到缓存画板
                this.drawToCachePainter(shape);
            }
            // 将形状添加代理
            // const handleShape = this._handleShapeAttr(shape);
            // // 绘制的元素都默认显示
            // this._displayList.set(shape.id, handleShape);
            this._displayList.set(shape.id, shape);
            // return handleShape;
        };
        /**
         * 添加图形到画板
         * 当形状的数据变化之后，图像会重新在画板上方渲染
         * @param {Shape} shape
         */
        Painter.prototype.removeElement = function (shapeId) {
            var _this_1 = this;
            var findShape = this._displayList.get(shapeId);
            if (findShape) {
                // 删除数据
                this._displayList.delete(shapeId);
                // 从选中列表中移除
                var findIndex = this._selectShapes.findIndex(function (id) { return id === shapeId; });
                ~findIndex && this._selectShapes.splice(findIndex, 1);
                this.renderControlBox();
                // 删除文字 DOM
                // if (findShape instanceof Text) {
                //   document.querySelector(`#${Config.TEXT_DOM_ID_PREFIX}${shapeId}`)?.remove();
                // }
                // 激光笔 DOM
                if (findShape instanceof LaserPointer) {
                    document.querySelectorAll(".board-laser_item").forEach(function (el) {
                        if (el.getAttribute('data-uid') === shapeId) {
                            el.remove();
                        }
                    });
                }
                else {
                    // 绘制到缓存画板
                    this.clearCachePainter();
                    this._displayList.forEach(function (shape) {
                        _this_1.drawToCachePainter(shape);
                    });
                }
            }
        };
        /**
         * 移动形状
         *
         * @param brushIds
         * @param offset
         */
        Painter.prototype.moveElement = function (brushIds, offset) {
            var _this_1 = this;
            var _a = __read(offset, 2), offsetX = _a[0], offsetY = _a[1];
            this.clearCachePainter();
            this._displayList.forEach(function (findShape, index) {
                // 需要移动的图形
                if (brushIds.includes(findShape.id)) {
                    if ((findShape === null || findShape === void 0 ? void 0 : findShape.type) === EShapeType.LASER_POINTER) {
                        findShape === null || findShape === void 0 ? void 0 : findShape.attr('position', [offsetX, offsetY]);
                        findShape.setPosition(offsetX, offsetY);
                    } /* else if (findShape?.type === EShapeType.TEXT) {
                      findShape?.attr('position', [findShape.position[0] + offsetX, findShape.position[1] + offsetY]);
                      // (findShape as Text).setPosition(findShape.props.x + findShape.position[0], findShape.props.y + findShape.position[1]);
                    }*/
                    else {
                        findShape === null || findShape === void 0 ? void 0 : findShape.attr('position', [findShape.position[0] + offsetX, findShape.position[1] + offsetY]);
                        _this_1.drawToCachePainter(findShape);
                    }
                }
                else {
                    _this_1.drawToCachePainter(findShape);
                }
            });
            // this.clearPainter();
            // this.drawCacheToMain();
        };
        /**
         *
         *
         * @param shapeId
         */
        Painter.prototype.refreshElement = function (shapeId) {
            var findShape = this._displayList.get(shapeId);
            if (findShape) {
                findShape.buildPath(this._canvasCtx, findShape);
            }
        };
        /**
         * 查找当前绘制的图形
         *
         * @param {string} brushId
         */
        Painter.prototype.findElement = function (shapeId) {
            return this._displayList.get(shapeId);
        };
        /**
         *
         *
         */
        Painter.prototype.renderControlBox = function () {
            var _this_1 = this;
            if (this._selectShapes.length > 0) {
                var minXPositions_1 = [];
                var minYPositions_1 = [];
                var maxXPositions_1 = [];
                var maxYPositions_1 = [];
                this._selectShapes.forEach(function (id) {
                    var findShape = _this_1._displayList.get(id);
                    var boundingRect = findShape === null || findShape === void 0 ? void 0 : findShape.getBoundingRect();
                    minXPositions_1.push(boundingRect.x);
                    minYPositions_1.push(boundingRect.y);
                    maxXPositions_1.push(boundingRect.x + boundingRect.width);
                    maxYPositions_1.push(boundingRect.y + boundingRect.height);
                });
                this._controlBoxPosition = [Math.min.apply(Math, __spreadArray([], __read(minXPositions_1))), Math.min.apply(Math, __spreadArray([], __read(minYPositions_1))), Math.max.apply(Math, __spreadArray([], __read(maxXPositions_1))), Math.max.apply(Math, __spreadArray([], __read(maxYPositions_1)))];
                this.setControlBoxSize(this._controlBoxPosition);
                this.showControlWrap();
            }
            else {
                this.hideControlWrap();
            }
        };
        Painter.prototype.clearCanvas = function () {
            this.clearPainter();
            this.clearCachePainter();
            this._displayList.clear();
        };
        Painter.prototype.clearAllLaserPointer = function () {
            this._cursorWrap.innerHTML = "";
        };
        Painter.prototype.clearOtherLaserPointer = function () {
            var _this_1 = this;
            this._displayList.forEach(function (shape) {
                // this._displayList.delete(shape.id);
                // 不移除自己的
                if (shape instanceof LaserPointer && shape.id !== _this_1.uid) {
                    // this.removeElement(shape.id);
                    document.querySelectorAll(".board-laser_item").forEach(function (el) {
                        if (el.getAttribute('data-uid') !== shape.id) {
                            el.remove();
                        }
                    });
                }
            });
        };
        Painter.prototype.clearSelfLaserPoint = function () {
            var _this_1 = this;
            this._displayList.forEach(function (shape) {
                // this._displayList.delete(shape.id);
                // 不移除自己的
                if (shape instanceof LaserPointer && shape.id !== _this_1.uid) {
                    // this.removeElement(shape.id);
                    document.querySelectorAll(".board-laser_item").forEach(function (el) {
                        if (el.getAttribute('data-uid') === shape.id) {
                            el.remove();
                        }
                    });
                }
            });
        };
        /**
         * 清空画板
         */
        Painter.prototype.clear = function (isResize) {
            if (isResize === void 0) { isResize = false; }
            this.clearPainter();
            this.clearCachePainter();
            this._displayList.clear();
            // this._cursorWrap.innerHTML = '';
            if (!isResize) {
                // this._cursorWrap.innerHTML = '';
                // this._textBox.innerHTML = '';
                // this._selectRectBox = null;
                this._selectShapes = [];
                this.hideControlWrap();
            }
        };
        Painter.prototype.reset = function () {
            this.clearPainter();
            this.clearCachePainter();
            this._displayList.clear();
            this._temporaryList.clear();
            this._canUndoList = [];
            this._canRedoList = [];
            // 中止当前绘制操作
            if (this._selectShape) {
                this._selectShape = null;
            }
            if (this._currentShape) {
                if (this._toolType === exports.EBoardToolType.FREE_DRAW) {
                    if (this._currentShape.props.points.length > 1) {
                        this._canUndoList.push({
                            type: BoardEventType.ADD_SHAPE,
                            shapes: [this._currentShape]
                        });
                        // ! BUG 上报并清空
                        this.emit('reportContent', this._needUpdateShapeData);
                        this._needUpdateShapeData = null;
                    }
                    else {
                        this.removeElement(this._currentShape.id);
                    }
                }
                else { // EBoardToolType.ARROW \ EBoardToolType.LINE \ EBoardToolType.ELLIPSE \ EBoardToolType.RECT
                    // 添加到可撤销列表
                    this._canUndoList.push({
                        type: BoardEventType.ADD_SHAPE,
                        shapes: [this._currentShape]
                    });
                    // ! BUG 上报并清空
                    this.emit('reportContent', this._needUpdateShapeData);
                    this._needUpdateShapeData = null;
                }
                this._currentShape = null;
            }
        };
        Painter.prototype.clearAll = function () {
            this.clear();
            this._canUndoList = [];
            this._canRedoList = [];
            this._cursorWrap.innerHTML = '';
        };
        /**
         * 清空画板背景（图片和颜色）
         *
         */
        Painter.prototype.clearBackground = function () {
            this.setCanvasBGColor('#ffffff');
            this.setCanvasBGImage('');
        };
        Painter.prototype._initCurrentShape = function (startX, startY) {
            var _this_1 = this;
            var reportShapeProps = {};
            this._startPosition = [startX, startY];
            // 框选工具按下
            if (this._toolType === exports.EBoardToolType.SELECT) {
                // 内置选择器
                var selectRect = new Rect(this.selectPenId, {
                    props: {
                        x1: startX,
                        y1: startY,
                        x2: startX,
                        y2: startY,
                    },
                    style: __assign(__assign({}, Config.BOARD_SELECT_STYLE), { strokeStyle: this._selectBoxColor })
                });
                // 框选工具拖拽 - 不改变原始图形的位置，仅绘制图形的选中外框
                this._selectShape = this._createProxySetHandle(selectRect, function (target, propKey, value, receiver) {
                    if (propKey === "props" || propKey === "position" || propKey === "style") {
                        target[propKey] = value;
                        // 计算所有选中元素中，最大最小的 x,y 坐标
                        var selectorMinX_1 = _this_1._controlBoxPosition[0];
                        var selectorMaxX_1 = _this_1._controlBoxPosition[1];
                        var selectorMinY_1 = _this_1._controlBoxPosition[2];
                        var selectorMaxY_1 = _this_1._controlBoxPosition[3];
                        _this_1._selectShapes = [];
                        var outerBoundingRect = target.getBoundingRect();
                        var outerRectPointer_1 = [outerBoundingRect.x, outerBoundingRect.y, outerBoundingRect.x + outerBoundingRect.width, outerBoundingRect.y + outerBoundingRect.height];
                        _this_1._displayList.forEach(function (shape, index) {
                            var insideBoundingRect = shape.getBoundingRect();
                            var insideBoundingPointer = [insideBoundingRect.x, insideBoundingRect.y, insideBoundingRect.x + insideBoundingRect.width, insideBoundingRect.y + insideBoundingRect.height];
                            // shape.selectState = rectContainsRect(outerRectPointer, insideBoundingPointer) ? ShapeSelectState.SELECTED : ShapeSelectState.DEFAULT;
                            if (rectContainsRect(outerRectPointer_1, insideBoundingPointer)) {
                                var itemBoundingRect = shape.getBoundingRect();
                                if (_this_1._selectShapes.length === 0) {
                                    selectorMinX_1 = itemBoundingRect.x;
                                    selectorMaxX_1 = itemBoundingRect.x + itemBoundingRect.width;
                                    selectorMinY_1 = itemBoundingRect.y;
                                    selectorMaxY_1 = itemBoundingRect.y + itemBoundingRect.height;
                                }
                                selectorMinX_1 = selectorMinX_1 < itemBoundingRect.x ? selectorMinX_1 : itemBoundingRect.x;
                                selectorMaxX_1 = selectorMaxX_1 < itemBoundingRect.x + itemBoundingRect.width ? itemBoundingRect.x + itemBoundingRect.width : selectorMaxX_1;
                                selectorMinY_1 = selectorMinY_1 < itemBoundingRect.y ? selectorMinY_1 : itemBoundingRect.y;
                                selectorMaxY_1 = selectorMaxY_1 < itemBoundingRect.y + itemBoundingRect.height ? itemBoundingRect.y + itemBoundingRect.height : selectorMaxY_1;
                                _this_1._selectShapes.push(shape.id);
                            }
                        });
                        _this_1._controlBoxPosition = [selectorMinX_1, selectorMinY_1, selectorMaxX_1, selectorMaxY_1];
                        // 从缓存数据中还原画板
                        _this_1.clearPainter();
                        // this.drawCacheToMain();
                        _this_1._renderTemporaryCanvas();
                        // 绘制框选框
                        _this_1._drawToPainter(target);
                        // 更新控制容器的大小，在抬笔时显示
                        // this._controlBoxPosition = [selectorMinX, selectorMinY, selectorMaxX, selectorMaxY];
                    }
                });
            }
            // 以多个点来计算的 [[x1, y1], ...]
            // 分别为以下：涂鸦、箭头、自定义多边形
            // 涂鸦
            else if (this.brushType === exports.EBoardToolType.FREE_DRAW) {
                var points = [];
                points.push(__spreadArray([], __read(this._startPosition)));
                reportShapeProps = {
                    points: points
                };
                var freeDraw = new FreeDraw(this.brushId, {
                    props: reportShapeProps,
                    style: {
                        lineWidth: this._brushThin * this.options.scale / 100,
                        strokeStyle: this._brushColor
                    }
                });
                // 双画板的做法：
                // - 当前形状绘制到顶层
                // - 底层为缓存数据，不用变更
                // this._currentShape = this._handleShapeAttr(freeDraw);
                this._currentShape = freeDraw;
            }
            // 箭头
            else if (this._toolType === exports.EBoardToolType.ARROW) {
                var points = __spreadArray(__spreadArray([], __read(this._startPosition)), __read(this._startPosition));
                var arrowPoints = calcArrowPoints(points, this._brushThin * 2.5);
                reportShapeProps = {
                    points: arrowPoints
                };
                var arrow = new Arrow(this.brushId, {
                    props: reportShapeProps,
                    style: {
                        lineWidth: this._brushThin * this.options.scale / 100,
                        strokeStyle: this._brushColor
                    }
                });
                // this._currentShape = this._handleShapeAttr(arrow);
                this._currentShape = arrow;
            }
            // 以两个坐标来计算的 [x1, y1] 和 [x2, y2]
            // 分别为以下：直线、矩形、圆、椭圆
            // 直线
            else if (this._toolType === exports.EBoardToolType.LINE) {
                reportShapeProps = {
                    x: this._startPosition[0],
                    y: this._startPosition[1],
                    x1: this._startPosition[0],
                    y1: this._startPosition[1],
                };
                var line = new Line(this.brushId, {
                    props: reportShapeProps,
                    style: {
                        lineWidth: this._brushThin * this.options.scale / 100,
                        strokeStyle: this._brushColor
                    }
                });
                // this._currentShape = this._handleShapeAttr(line);
                this._currentShape = line;
            }
            // 矩形
            else if (this._toolType === exports.EBoardToolType.RECT) {
                reportShapeProps = {
                    x1: startX,
                    y1: startY,
                    x2: startX,
                    y2: startY,
                };
                var rect = new Rect(this.brushId, {
                    props: reportShapeProps,
                    style: {
                        lineWidth: this._brushThin * this.options.scale / 100,
                        strokeStyle: this._brushColor
                    }
                });
                // this._currentShape = this._handleShapeAttr(rect);
                this._currentShape = rect;
            }
            // 椭圆
            else if (this._toolType === exports.EBoardToolType.ELLIPSE) {
                reportShapeProps = {
                    cx: this._startPosition[0],
                    cy: this._startPosition[1],
                    xr: 0,
                    yr: 0,
                };
                var ellipse = new Ellipse(this.brushId, {
                    props: reportShapeProps,
                    style: {
                        lineWidth: this._brushThin * this.options.scale / 100,
                        strokeStyle: this._brushColor
                    }
                });
                // this._currentShape = this._handleShapeAttr(ellipse);
                this._currentShape = ellipse;
            }
            // 存储至上层显示的 Map 中
            this._currentShape && this._toolType !== exports.EBoardToolType.SELECT && this._temporaryList.set(this._currentShape.id, this._currentShape);
        };
        /**
         * 监听画布鼠标点击事件
         *
         * | 工具类型             | 鼠标点击 | 鼠标移动 | 鼠标抬起 |
         * | -------------------- | :------: | :------: | :------: |
         * | NONE 鼠标            |          |          |          |
         * | FREE_DRAW 涂鸦       |    ✅     |    ✅     |    ✅     |
         * | LINE 直线            |    ✅     |    ✅     |    ✅     |
         * | ARROW 箭头           |    ✅     |    ✅     |    ✅     |
         * | RECT 矩形            |    ✅     |    ✅     |    ✅     |
         * | CIRCLE 圆            |    ✅     |    ✅     |    ✅     |
         * | ELLIPSE 椭圆         |    ✅     |    ✅     |    ✅     |
         * | TEXT 文本            |    ✅     |          |          |
         * | SELECTION 框选       |    ✅     |    ✅     |    ✅     |
         * | ERASER 橡皮擦        |    ✅     |          |          |
         * | LASER_POINTER 激光笔 |          |    ✅     |          |
         *
         * * mouseenter | mousedown | touchstart
         * @private
         * @param {PointerEvent} ev
         */
        Painter.prototype.handleMouseDown = function (ev) {
            if (this._toolType === exports.EBoardToolType.NONE ||
                !this._enabled)
                return; // this._brushType === BoardToolType.LASER_POINTER ||
            var evOffsetX = 0;
            var evOffsetY = 0;
            if (ev instanceof MouseEvent) {
                evOffsetX = ev.offsetX;
                evOffsetY = ev.offsetY;
            }
            else if (ev.type.includes('touch')) {
                var vertex = this._canvas.getBoundingClientRect();
                evOffsetX = ev.touches[0].clientX - vertex.left;
                evOffsetY = ev.touches[0].clientY - vertex.top;
            }
            // 点击的坐标
            var startX = mathRound(Math.floor(evOffsetX), 1);
            var startY = mathRound(Math.floor(evOffsetY), 1);
            // 激光笔
            if (this._toolType === exports.EBoardToolType.LASER_POINTER) {
                // 鼠标移入并非点击 或者 touchStart - 不处理鼠标点击
                if (!this._laserPointer &&
                    // touchstart
                    (ev.type.includes('touch') && ev.type === 'touchstart') ||
                    // mouseenter
                    (ev instanceof MouseEvent && ev.type === 'mouseenter')) {
                    var laserPointer = new LaserPointer(this.uid + "LaserPointer", {
                        props: {
                            cx: startX,
                            cy: startY,
                            r: 10,
                        },
                    });
                    if (ev.type.includes('touch')) {
                        laserPointer.touchId = ev.touches[0].identifier;
                    }
                    // this._laserPointer = this._handleShapeAttr(laserPointer);
                    this._laserPointer = laserPointer;
                    this._laserPointer.buildElement(this._cursorWrap);
                    var addShapeContent = {
                        pId: laserPointer.id,
                        // painterId: this.id,
                        width: this.width,
                        height: this.height,
                        shape: laserPointer.type,
                        props: laserPointer.props,
                        style: laserPointer.style,
                        position: laserPointer.position,
                        lts: Date.now()
                    };
                    var reportContentData = {
                        bId: this.id,
                        action: BoardEventType.ADD_SHAPE,
                        data: addShapeContent
                    };
                    // 通知远端创建激光笔
                    this.emit('reportContent', reportContentData);
                }
            }
            // 无需判断标识，多位图形操作，不受限制。例如，擦除或异步操作（输入文字后）
            else if (this._toolType === exports.EBoardToolType.ERASER || this._toolType === exports.EBoardToolType.TEXT) {
                // 鼠标点击 或者 touchStart - 不处理鼠标移入
                if (
                // touchstart
                (ev.type.includes('touch') && ev.type === "touchstart") ||
                    // mousedown 主键（系统设置的，默认为鼠标左键）按下
                    (ev instanceof MouseEvent && ev.type === "mousedown" && ev.button === 0)) {
                    // 橡皮擦 - 可以擦除所有形状，倒序取一个（层级）
                    if (this._toolType === exports.EBoardToolType.ERASER) {
                        this._eraserShape(startX, startY);
                    }
                    // 创建输入框
                    else if (this._toolType === exports.EBoardToolType.TEXT) {
                        // 放置事件冒泡到鼠标抬起
                        ev.preventDefault();
                        ev.stopPropagation();
                        if (this._textInput) {
                            this._textInput.blur();
                            this._textInput = null;
                        }
                        else {
                            this._createTextInputAndHandleChange(startX, startY);
                        }
                    }
                }
            }
            else if (this._toolType !== exports.EBoardToolType.SELECT) {
                if (ev instanceof MouseEvent && ev.type === "mouseenter")
                    return;
                // 触屏或者按下鼠标左键移动
                if ((ev.type.includes('touch') && ev.type === "touchstart") ||
                    (ev instanceof MouseEvent && ev.type === "mousedown" && ev.buttons % 2 !== 0)) {
                    this._startPosition = [startX, startY];
                    // 如果没有创建先创建形状
                    !this._currentShape && this._initCurrentShape(startX, startY);
                }
            }
        };
        /**
         * 监听画布鼠标移动事件
         *
         * | 工具类型             | 鼠标点击 | 鼠标移动 | 鼠标抬起 |
         * | -------------------- | :------: | :------: | :------: |
         * | NONE 鼠标            |          |          |          |
         * | FREE_DRAW 涂鸦       |    ✅     |    ✅     |    ✅     |
         * | LINE 直线            |    ✅     |    ✅     |    ✅     |
         * | ARROW 箭头           |    ✅     |    ✅     |    ✅     |
         * | RECT 矩形            |    ✅     |    ✅     |    ✅     |
         * | CIRCLE 圆            |    ✅     |    ✅     |    ✅     |
         * | ELLIPSE 椭圆         |    ✅     |    ✅     |    ✅     |
         * | TEXT 文本            |    ✅     |          |          |
         * | SELECTION 框选       |    ✅     |    ✅     |    ✅     |
         * | ERASER 橡皮擦        |    ✅     |          |          |
         * | LASER_POINTER 激光笔 |          |    ✅     |          |
         *
         * * mousemove | touchmove
         * @private
         * @param {PointerEvent} ev
         */
        Painter.prototype.handleMouseMove = function (ev) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            // NONE 或 disable 不处理图形同时也不处理鼠标样式
            if (!this._enabled || this._toolType === exports.EBoardToolType.NONE)
                return;
            var evOffsetX = 0;
            var evOffsetY = 0;
            if (ev instanceof MouseEvent) {
                evOffsetX = ev.offsetX;
                evOffsetY = ev.offsetY;
            }
            else if (ev.type.includes('touch')) {
                var vertex = this._canvas.getBoundingClientRect();
                evOffsetX = ev.touches[0].clientX - vertex.left;
                evOffsetY = ev.touches[0].clientY - vertex.top;
            }
            var moveX = mathRound(Math.floor(evOffsetX), 1);
            var moveY = mathRound(Math.floor(evOffsetY), 1);
            var movePosition = [moveX, moveY];
            // 逻辑控制
            {
                if (this._toolType === exports.EBoardToolType.LASER_POINTER) {
                    if (this._laserPointer instanceof LaserPointer &&
                        ((ev.type.includes('touch') && ev.type === "touchmove") ||
                            (ev instanceof MouseEvent && ev.type === "mousemove"))) {
                        if (this._latestMovePosition.length === 0) {
                            this._latestMovePosition = [moveX, moveY];
                        }
                        var currentMoveX = moveX - this._latestMovePosition[0];
                        var currentMoveY = moveY - this._latestMovePosition[1];
                        this._latestMovePosition = [moveX, moveY];
                        // 改变偏移量: 每一次移动时鼠标的偏移量 = 选中形状的偏移量
                        // this._laserPointer?.attr("position", [this._laserPointer.position[0] + moveX, this._laserPointer.position[1] + moveY]);
                        this._laserPointer.setPosition(this._laserPointer.position[0] + currentMoveX, this._laserPointer.position[1] + currentMoveY);
                        // 激光笔为坐标，并非实际移动的比例
                        // 并非实时更新，因此使用当前 position 作为偏移量，前端特殊处理
                        var moveShapeContent = {
                            pIds: [this._laserPointer.id],
                            offset: [this._laserPointer.position[0] / this.width, this._laserPointer.position[1] / this.height]
                        };
                        var basicReportInfo = {
                            bId: this.id,
                            action: BoardEventType.MOVE_SHAPE,
                            data: moveShapeContent
                        };
                        this._needUpdateShapeData = basicReportInfo;
                    }
                }
                // 框选操作 - 移动时不上报，抬起时上报
                else if (this._toolType === exports.EBoardToolType.SELECT &&
                    // 触屏或者按下鼠标左键移动
                    ((ev.type.includes('touch') && ev.type === "touchmove") ||
                        (ev instanceof MouseEvent && ev.type === "mousemove" && ev.buttons % 2 !== 0))) {
                    !this._selectShape && this._initCurrentShape(moveX, moveY);
                    // 绘制选择框
                    this._selectShape.attr('props', {
                        x2: movePosition[0],
                        y2: movePosition[1],
                    });
                }
                // 不处理 ERASER 和 TEXT
                else if (this._toolType !== exports.EBoardToolType.ERASER &&
                    this._toolType !== exports.EBoardToolType.TEXT &&
                    this._currentShape) {
                    // 绘制形状 - 移动时数据池，然后上层来读取数据，读完之后清空标识
                    // 获取最新的画笔颜色并更新
                    var _q = this._currentShape.style, strokeStyle = _q.strokeStyle; _q.fillStyle;
                    var newStyle = {};
                    strokeStyle && (newStyle.strokeStyle = this._brushColor);
                    // fillStyle && (newStyle.fillStyle = this._brushColor);
                    (_a = this._currentShape) === null || _a === void 0 ? void 0 : _a.attr('style', newStyle);
                    // this._needUpdateShapeData
                    var addShapeContent = {
                        pId: this._currentShape.id,
                        shape: this._currentShape.type,
                        style: this._currentShape.style,
                        props: this._needUpdateShapeData ? (_c = (_b = this._needUpdateShapeData) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.props : {},
                        width: this.width,
                        height: this.height,
                        position: [0, 0],
                        lts: Date.now()
                    };
                    var basicReportInfo = {
                        bId: this.id,
                        action: BoardEventType.ADD_SHAPE,
                        data: addShapeContent,
                    };
                    // 涂鸦 - 只上报增量数据
                    if (this._toolType === exports.EBoardToolType.FREE_DRAW) {
                        var points = ((_d = this._currentShape) === null || _d === void 0 ? void 0 : _d.props.points) || [];
                        var newPoints = ((_e = addShapeContent === null || addShapeContent === void 0 ? void 0 : addShapeContent.props) === null || _e === void 0 ? void 0 : _e.points) || [];
                        // 如果当前坐标跟上一次的坐标不一致才通知
                        if (movePosition[0] !== points[points.length - 1][0] || movePosition[1] !== points[points.length - 1][1]) {
                            points.push(__spreadArray([], __read(movePosition)));
                            newPoints.push([movePosition[0], movePosition[1]]);
                            var props = { points: points };
                            (_f = this._currentShape) === null || _f === void 0 ? void 0 : _f.attr('props', props);
                            this._renderTemporaryCanvas();
                            addShapeContent.props = {
                                points: newPoints
                            };
                            basicReportInfo.data = addShapeContent;
                            this._needUpdateShapeData = basicReportInfo;
                        }
                    }
                    // 画直线
                    else if (this._toolType === exports.EBoardToolType.LINE) {
                        var props = __assign(__assign({}, (_g = this._currentShape) === null || _g === void 0 ? void 0 : _g.props), { x1: movePosition[0], y1: movePosition[1] });
                        addShapeContent.props = props;
                        (_h = this._currentShape) === null || _h === void 0 ? void 0 : _h.attr('props', props);
                        // this.clearPainter();
                        // // this.drawCacheToMain();
                        // this._drawToPainter(this._currentShape!);
                        this._renderTemporaryCanvas();
                        basicReportInfo.data = addShapeContent;
                        this._needUpdateShapeData = basicReportInfo;
                    }
                    // 画箭头
                    else if (this._toolType === exports.EBoardToolType.ARROW) {
                        var points = __spreadArray(__spreadArray([], __read(this._startPosition)), __read(movePosition));
                        var arrowPoints = calcArrowPoints(points, this._brushThin * 2.5);
                        var props = __assign(__assign({}, (_j = this._currentShape) === null || _j === void 0 ? void 0 : _j.props), { points: arrowPoints });
                        addShapeContent.props = props;
                        (_k = this._currentShape) === null || _k === void 0 ? void 0 : _k.attr('props', props);
                        // this.clearPainter();
                        // // this.drawCacheToMain();
                        // this._drawToPainter(this._currentShape!);
                        this._renderTemporaryCanvas();
                        basicReportInfo.data = addShapeContent;
                        this._needUpdateShapeData = basicReportInfo;
                    }
                    // 画椭圆
                    else if (this._toolType === exports.EBoardToolType.ELLIPSE) {
                        var points = __spreadArray(__spreadArray([], __read(this._startPosition)), __read(movePosition));
                        var radius = calcEllipseCenterAndRadius(points);
                        var props = __assign(__assign({}, (_l = this._currentShape) === null || _l === void 0 ? void 0 : _l.props), { cx: mathRound(radius[0], 1), cy: mathRound(radius[1], 1), xr: mathRound(radius[2], 1), yr: mathRound(radius[3], 1) });
                        addShapeContent.props = props;
                        (_m = this._currentShape) === null || _m === void 0 ? void 0 : _m.attr('props', props);
                        // this.clearPainter();
                        // // this.drawCacheToMain();
                        // this._drawToPainter(this._currentShape!);
                        this._renderTemporaryCanvas();
                        // basicReportInfo = {
                        //   action: BoardEventType.ADD_SHAPE,
                        //   data: basicReportInfo
                        // }
                        basicReportInfo.data = addShapeContent;
                        this._needUpdateShapeData = basicReportInfo;
                    }
                    // 画矩形
                    else if (this._toolType === exports.EBoardToolType.RECT) {
                        var props = __assign(__assign({}, (_o = this._currentShape) === null || _o === void 0 ? void 0 : _o.props), { x2: movePosition[0], y2: movePosition[1] });
                        addShapeContent.props = props;
                        (_p = this._currentShape) === null || _p === void 0 ? void 0 : _p.attr('props', props);
                        // this.clearPainter();
                        // // this.drawCacheToMain();
                        // this._drawToPainter(this._currentShape!);
                        this._renderTemporaryCanvas();
                        basicReportInfo.data = addShapeContent;
                        this._needUpdateShapeData = basicReportInfo;
                    }
                }
            }
        };
        /**
         * 监听画布鼠标松开按键事件
         *
         * | 工具类型             | 鼠标点击 | 鼠标移动 | 鼠标抬起 |
         * | -------------------- | :------: | :------: | :------: |
         * | NONE 鼠标            |          |          |          |
         * | FREE_DRAW 涂鸦       |    ✅     |    ✅     |    ✅     |
         * | LINE 直线            |    ✅     |    ✅     |    ✅     |
         * | ARROW 箭头           |    ✅     |    ✅     |    ✅     |
         * | RECT 矩形            |    ✅     |    ✅     |    ✅     |
         * | CIRCLE 圆            |    ✅     |    ✅     |    ✅     |
         * | ELLIPSE 椭圆         |    ✅     |    ✅     |    ✅     |
         * | TEXT 文本            |    ✅     |          |          |
         * | SELECTION 框选       |    ✅     |    ✅     |    ✅     |
         * | ERASER 橡皮擦        |    ✅     |          |          |
         * | LASER_POINTER 激光笔 |          |    ✅     |          |
         *
         * 1. 画笔抬起是否需要上报当前操作及数据
         * 2. 补发实时广播未发出的画笔
         *
         * * mouseup | touchend
         * @private
         * @param {MouseEvent} ev
         */
        Painter.prototype.handleMouseUp = function (ev) {
            var _this_1 = this;
            // NONE 或 disable 不处理图形同时也不处理鼠标样式
            if (!this._enabled || this._toolType === exports.EBoardToolType.NONE)
                return;
            var evOffsetX = 0;
            var evOffsetY = 0;
            if (ev instanceof MouseEvent) {
                evOffsetX = ev.offsetX;
                evOffsetY = ev.offsetY;
            }
            else if (ev.type.includes('touch')) {
                var vertex = this._canvas.getBoundingClientRect();
                evOffsetX = ev.changedTouches[0].clientX - vertex.left;
                evOffsetY = ev.changedTouches[0].clientY - vertex.top;
            }
            var endX = mathRound(Math.floor(evOffsetX), 1);
            var endY = mathRound(Math.floor(evOffsetY), 1);
            this._endPosition = [endX, endY];
            // 逻辑控制
            // * 如果 document.activeElement 不是 body 会出现无法移除掉激光笔情况，应该避免使用 select 作为工具选择的 DOM 元素
            if (this._toolType === exports.EBoardToolType.LASER_POINTER) {
                if (this._laserPointer &&
                    // touchend
                    (ev.type.includes('touch') && (ev.type === "touchend" || ev.type === "touchcancel")) ||
                    // mouseout 主键（系统设置的，默认为鼠标左键）按下
                    (ev instanceof MouseEvent && ev.type === "mouseout")) {
                    if (ev.type.includes('touch') && (ev.type === "touchend" || ev.type === "touchcancel")) {
                        var event_1 = ev;
                        var touchIdentifier = this._laserPointer.touchId;
                        var touchRelease = false;
                        for (var index in event_1.changedTouches) {
                            var touchEv = event_1.changedTouches[index];
                            if (touchEv.identifier === touchIdentifier) {
                                touchRelease = true;
                                break;
                            }
                        }
                        // 取消或者抬起的手指中不是激光笔所在的手指
                        if (!touchRelease)
                            return;
                    }
                    // 隐藏激光笔 - 通过改变位置实现隐藏
                    // this._needUpdateShapeData = {
                    //   // painterId: this.id,
                    //   // action: BoardEventType.MOVE_SHAPE,
                    //   action: BoardEventType.DELETE_SHAPE,
                    //   pIds: [this._laserPointer!.id],
                    //   // brushIds: [this._laserPointer!.id],
                    //   // userId: this.uid,
                    //   // shape: EShapeType.LASER_POINTER,
                    //   // width: this.width,
                    //   // height: this.height,
                    //   // offset: [0, 0],
                    //   // style: {},
                    //   // lts: Date.now()
                    // }
                    this._needUpdateShapeData = null;
                    this.emit('reportContent', {
                        bId: this.id,
                        action: BoardEventType.DELETE_SHAPE,
                        data: {
                            pIds: [this._laserPointer.id],
                        }
                    });
                    this._laserPointer.dispose();
                    this._laserPointer = null;
                    this._latestMovePosition = [];
                }
                return;
            }
            // 停止绘制框选
            else if (this._toolType === exports.EBoardToolType.SELECT && this._selectShape) {
                // 判断鼠标点下与抬起的位置，移动不打视为点击
                var noMove = Math.abs(this._endPosition[0] - this._startPosition[0]) <= 1 && Math.abs(this._endPosition[1] - this._startPosition[1]) <= 1;
                if (noMove) {
                    // ! 这里可能会有问题
                    // if (this._selectShapes.length > 0) {
                    //   this._clearPainter();
                    //   this._drawCacheToMain();
                    // }
                    // 选中最后一个被选中形状
                    var selectShapes_1 = [];
                    this._displayList.forEach(function (shape) {
                        if (shape.type === EShapeType.TEXT) {
                            if (shape.isPointInPath(evOffsetX, evOffsetY)) {
                                selectShapes_1 = [shape];
                            }
                        }
                        else {
                            if (_this_1._isPointInShape(evOffsetX, evOffsetY, shape)) {
                                selectShapes_1 = [shape];
                            }
                        }
                    });
                    if (selectShapes_1.length > 0) {
                        this._selectShapes = [selectShapes_1[0].id];
                        var itemBoundingRect = selectShapes_1[0].getBoundingRect();
                        // 计算所有选中元素中，最大最小的 x,y 坐标
                        var selectorMinX = itemBoundingRect.x;
                        var selectorMinY = itemBoundingRect.y;
                        var selectorMaxX = itemBoundingRect.x + itemBoundingRect.width;
                        var selectorMaxY = itemBoundingRect.y + itemBoundingRect.height;
                        // 设置控制框的位置
                        this.setControlBoxSize([selectorMinX, selectorMinY, selectorMaxX, selectorMaxY]);
                        // 显示控制框
                        this.showControlWrap();
                    }
                }
                else {
                    // 控制框选框
                    this.clearPainter();
                    // 查询是否包含其他形状，有选中他们，没有清除当前画的矩形
                    if (this._selectShapes.length > 0) {
                        // this.drawCacheToMain();
                        // this._selectShapes.forEach(id => {
                        //   const shape = this._displayList.get(id)!;
                        //   if (shape.type === EShapeType.TEXT) {
                        //     //
                        //   } else {
                        //     shape.buildPath(this._canvasCtx, shape);
                        //   }
                        // });
                        // 显示控制框 - 后续逻辑托管在控制框的鼠标事件中
                        this.showControlWrap();
                        // 设置控制框的大小 & 位置
                        this.setControlBoxSize(this._controlBoxPosition);
                    }
                }
                this._selectShape = null;
            }
            // 橡皮擦、激光笔、文本不处理 - 擦除和文本，只有在点击的时候才需要处理，鼠标移动和抬起均不处理
            else if (this._toolType !== exports.EBoardToolType.ERASER && this._toolType !== exports.EBoardToolType.TEXT) {
                if (this._currentShape &&
                    // 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/MouseEvent
                    // 鼠标抬起 button === 0 为鼠标主键抬起
                    (ev instanceof MouseEvent && ev.type === "mouseup" && ev.button === 0) ||
                    // 鼠标离开 buttons 为 1+2+4 的集合因此奇数则鼠标没有抬起
                    (ev instanceof MouseEvent && ev.type === "mouseout") || // ev.buttons % 2 !== 0
                    // 触摸抬起
                    (ev.type.includes('touch') && ev.type === "touchend")) {
                    // 防抖：mouseup 以及 mouseout 都会触发该方法，mouseup 时会将 this._currentShape = null
                    // 抬笔时添加到已绘制列表中
                    if (this._currentShape) {
                        if (this._toolType === exports.EBoardToolType.FREE_DRAW) {
                            if (this._currentShape.props.points.length > 1) {
                                this._canUndoList.push({
                                    type: BoardEventType.ADD_SHAPE,
                                    shapes: [this._currentShape]
                                });
                                // ! BUG 上报并清空
                                this.emit('reportContent', this._needUpdateShapeData);
                                this._needUpdateShapeData = null;
                            }
                            else {
                                this.removeElement(this._currentShape.id);
                            }
                        }
                        else { // EBoardToolType.ARROW \ EBoardToolType.LINE \ EBoardToolType.ELLIPSE \ EBoardToolType.RECT
                            // 添加到可撤销列表
                            this._canUndoList.push({
                                type: BoardEventType.ADD_SHAPE,
                                shapes: [this._currentShape]
                            });
                            // ! BUG 上报并清空
                            this.emit('reportContent', this._needUpdateShapeData);
                            this._needUpdateShapeData = null;
                        }
                        this._displayList.set(this._currentShape.id, this._currentShape);
                        // 更新到缓存画板中
                        this.drawToCachePainter(this._currentShape);
                        // 重现绘制上层画板
                        this._temporaryList.delete(this._currentShape.id);
                        this._renderTemporaryCanvas();
                    }
                    this._currentShape = null;
                }
            }
        };
        /**
         * 控制区域点击回调
         *
         * touchstart mouseenter mousedown
         * @param ev
         */
        Painter.prototype.handleControlBoxMouseDown = function (ev) {
            if ((ev.type.includes('touch') && ev.type === "touchstart") ||
                (ev instanceof MouseEvent && ev.type === "mousedown")) {
                // 点击的是包围框内
                var pageX = 0;
                var pageY = 0;
                if (ev instanceof MouseEvent) {
                    pageX = ev.pageX;
                    pageY = ev.pageY;
                }
                else if (ev.type.includes('touch')) {
                    pageX = ev.touches[0].pageX;
                    pageY = ev.touches[0].pageY;
                }
                if (ev.target === this._controlBox) {
                    // 开始移动框中的元素
                    if (this.selectStartPosition.length <= 0) {
                        this.selectStartPosition = [pageX, pageY];
                        this.selectLatestMovePosition = [pageX, pageY];
                        // 更新缓存画板数据
                        // this.clearCachePainter();
                        // this._displayList.forEach((shape, id) => {
                        //   if (!this._selectShapes.includes(id)) {
                        //     this.drawToCachePainter(shape);
                        //   }
                        // });
                    }
                    ev.stopPropagation();
                    ev.preventDefault();
                }
                // 点击控制区域 - 包围框外
                else if (ev.target === this._controlWrap) {
                    if (this._selectShapes.length > 0) {
                        this.hideControlWrap();
                        this._selectShapes = [];
                    }
                }
            }
            // else {
            //   this.hideControlWrap();
            //   this._selectShapes = [];
            // }
        };
        /**
         * 控制框区域移动回调
         *
         * @param ev
         */
        Painter.prototype.handleControlBoxMouseMove = function (ev) {
            var _this = this;
            var pageX = 0;
            var pageY = 0;
            if (ev instanceof MouseEvent) {
                pageX = ev.pageX;
                pageY = ev.pageY;
            }
            else if (ev.type.includes('touch')) {
                pageX = ev.touches[0].pageX;
                pageY = ev.touches[0].pageY;
            }
            if (((ev.type.includes('touch') && ev.type === "touchmove") ||
                (ev instanceof MouseEvent && ev.type === "mousemove" && ev.buttons % 2 !== 0)) &&
                this.selectStartPosition.length > 0) {
                var offsetX = pageX - this.selectLatestMovePosition[0];
                var offsetY = pageY - this.selectLatestMovePosition[1];
                _this._controlBoxPosition[0] += offsetX;
                _this._controlBoxPosition[1] += offsetY;
                _this._controlBoxPosition[2] += offsetX;
                _this._controlBoxPosition[3] += offsetY;
                // DOM 移动
                // 移动过程中，不能监听鼠标事情，否则会多次触发 mouseout，因为鼠标移动后，图形跟过去，鼠标被进入 box，同时触发了回调
                _this._controlBox.style.pointerEvents = 'none';
                _this.setControlBoxPosition(_this._controlBoxPosition);
                this.moveElement(_this._selectShapes, [offsetX, offsetY]);
                this.selectLatestMovePosition = [pageX, pageY];
            }
        };
        /**
         * 控制框区域鼠标抬起和离开回调
         *
         * @param ev
         */
        Painter.prototype.handleControlBoxMouseUp = function (ev) {
            var _this_1 = this;
            if (ev.type.includes('touch') ||
                (ev.type === "mouseup") ||
                (ev instanceof MouseEvent && ev.type === "mouseout" && ev.target === this._controlWrap && ev.buttons % 2 !== 0)) {
                if (this.selectStartPosition.length > 0) {
                    var noMove = Math.abs(this.selectLatestMovePosition[0] - this.selectStartPosition[0]) <= 1 && Math.abs(this.selectLatestMovePosition[1] - this.selectStartPosition[1]) <= 1;
                    // 点击或者回到原位
                    if (noMove) ;
                    // 移动
                    else {
                        // 上报
                        var offsetX = this.selectLatestMovePosition[0] - this.selectStartPosition[0];
                        var offsetY = this.selectLatestMovePosition[1] - this.selectStartPosition[1];
                        var basicReportInfo = {
                            bId: this.id,
                            action: BoardEventType.MOVE_SHAPE,
                            data: {
                                pIds: this._selectShapes,
                                offset: [offsetX / this.width, offsetY / this.height]
                            }
                        };
                        var moveShapes = this._selectShapes.map(function (id) { return _this_1._displayList.get(id); });
                        this._canUndoList.push({
                            type: BoardEventType.MOVE_SHAPE,
                            shapes: moveShapes,
                            offset: [offsetX / this.width, offsetY / this.height]
                        });
                        this.emit('reportContent', basicReportInfo);
                    }
                    this.selectStartPosition = [];
                    this.selectLatestMovePosition = [];
                    this._controlBox.style.pointerEvents = 'all';
                }
            }
        };
        /**
         * 强制释放鼠标
         *
         * 停止正在绘制的操作
         */
        Painter.prototype.releaseMouse = function () {
            switch (this._toolType) {
                case exports.EBoardToolType.ARROW:
                case exports.EBoardToolType.ELLIPSE:
                case exports.EBoardToolType.ERASER:
                case exports.EBoardToolType.FREE_DRAW:
                case exports.EBoardToolType.LINE:
                case exports.EBoardToolType.RECT:
                case exports.EBoardToolType.TEXT:
                    if (this._currentShape) {
                        this._currentShape = null;
                        this._temporaryList.clear();
                    }
                    break;
                case exports.EBoardToolType.LASER_POINTER:
                    if (this._laserPointer) {
                        this._laserPointer = null;
                        this._latestMovePosition = [];
                    }
                    break;
                case exports.EBoardToolType.SELECT:
                    if (this._selectShape) {
                        this._selectShape = null;
                        this._selectShapes = [];
                    }
                    break;
            }
            // ! BUG 上报并清空
            if (this._needUpdateShapeData) {
                // 服务收到 reset-board、clear-board 应该清空下行队列
                // 这里补发是为了保证本地和远端绘制一样的形状
                this.emit('reportContent', this._needUpdateShapeData);
                this._needUpdateShapeData = null;
            }
        };
        /**
         * 清空上层画板
         */
        Painter.prototype.clearPainter = function () {
            this._canvasCtx.clearRect(0, 0, this.width, this.height);
        };
        /**
         * 清空缓存画板
         */
        Painter.prototype.clearCachePainter = function () {
            this._cacheCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        /**
         * 清空上层画板
         */
        Painter.prototype.clearText = function () {
            this._textBox.innerHTML = "";
        };
        /**
         * 将缓存画板的数据画到主画板
         */
        Painter.prototype.drawCacheToMain = function () {
            this._canvasCtx.drawImage(this._cacheCanvas, 0, 0);
        };
        /**
         * 重现渲染上层临时画板
         *
         * @private
         */
        Painter.prototype._renderTemporaryCanvas = function () {
            var _this_1 = this;
            this.clearPainter();
            this._temporaryList.forEach(function (shape) {
                _this_1._drawToPainter(shape);
            });
        };
        /**
         *
         *
         * @private
         */
        Painter.prototype._drawToPainter = function (shape) {
            shape.buildPath(this._canvasCtx, shape);
        };
        /**
         *
         *
         * @private
         */
        Painter.prototype.drawToCachePainter = function (shape) {
            shape.buildPath(this._cacheCanvasCtx, shape);
        };
        /**
         * 监听图形变化 - [绘制中]
         *
         * * 图形 - 已绘制的图形（本地、远程）
         * * 图形数据发布变化时需要更新缓存画板
         *
         * @private
         * @param shape
         * @return {*}
         */
        Painter.prototype._handleShapeAttr = function (shape, callback) {
            var _this_1 = this;
            return this._createProxySetHandle(shape, function (target, propKey, value, receiver) {
                callback && callback(target, propKey, value, receiver);
                if (propKey === "props" || propKey === "style") { // || propKey === "position"
                    target[propKey] = value;
                    // 清空当前显示画板
                    _this_1.clearPainter();
                    if (target instanceof LaserPointer) {
                        target.setPosition(target.position[0], target.position[1]);
                    }
                    else {
                        // 绘制数据变更之后的形状
                        _this_1._drawToPainter(target);
                    }
                }
            });
        };
        /**
         * 给形状添加代理，监听 Props 和 style 的变化
         *
         * @private
         * @param {Shape} handleShape
         * @param {(target: Shape, propKey: keyof Shape, value: any, receiver: any) => boolean} handleSetCallback
         */
        Painter.prototype._createProxySetHandle = function (handleShape, handleSetCallback) {
            return new Proxy(handleShape, {
                set: function (target, propKey, value, receiver) {
                    handleSetCallback(target, propKey, value, receiver);
                    return Reflect.set(target, propKey, value, receiver);
                }
            });
        };
        /**
         * 设置鼠标的样式
         *
         * @private
         * @param {EBoardToolType} type
         */
        Painter.prototype._setBrushCursor = function (type) {
            this._toolType = type;
            var cursorStr = '';
            switch (type) {
                case exports.EBoardToolType.SELECT:
                case exports.EBoardToolType.ARROW:
                case exports.EBoardToolType.LINE:
                case exports.EBoardToolType.RECT:
                case exports.EBoardToolType.ELLIPSE:
                    cursorStr = 'crosshair';
                    break;
                case exports.EBoardToolType.FREE_DRAW:
                    var decodePenUrl = decodeURIComponent(img);
                    cursorStr = "url(\"data:image/svg+xml;base64," + btoa(decodePenUrl.split('data:image/svg+xml,')[1]) + "\") 0 36, crosshair";
                    break;
                case exports.EBoardToolType.ERASER:
                    var decodeEraserUrl = decodeURIComponent(img$1);
                    cursorStr = "url(\"data:image/svg+xml;base64," + btoa(decodeEraserUrl.split('data:image/svg+xml,')[1]) + "\") 3 36, crosshair";
                    break;
                case exports.EBoardToolType.TEXT:
                    cursorStr = 'text';
                    break;
                case exports.EBoardToolType.LASER_POINTER:
                    cursorStr = 'none';
                    // cursorStr = `url(data:image/svg+xml;base64,${laserPointerIcon})`;
                    break;
                default:
                    cursorStr = 'default';
                    break;
            }
            this._canvas.style.cursor = cursorStr;
        };
        /**
         * 检查当前坐标是否在绘画的描边上
         * 双缓冲 - 遍历每一笔的数据，判断坐标是否在绘画中或者是描边上
         * @param {number} x
         * @param {number} y
         * @memberof Shape
         */
        Painter.prototype._isPointInShape = function (x, y, shape) {
            // 方法一：一个图形一个图形绘制，然后根据 isPointInStroke
            var underCanvas = createElement({
                kind: 'canvas',
                props: {
                    width: this.width,
                    height: this.height,
                },
                style: {}
            }).el;
            var underCanvasCtx = underCanvas.getContext('2d');
            shape.buildPath(underCanvasCtx, shape);
            // return underCanvasCtx.isPointInStroke(x, y);
            // 方法二：获取下层画板的图像，如果该像素的 alpha 值不为 0，则可以表示该像素上没有绘制任何内容 (缺陷是不知道要删除哪一个) 
            // const pixels = this._cacheCanvasCtx.getImageData(x, y, 1, 1); // [red * 255, green * 255, blue * 255, alpha * 255]    
            var pixels = underCanvasCtx.getImageData(x, y, 1, 1); // [red * 255, green * 255, blue * 255, alpha * 255]    
            return pixels.data[3] !== 0;
        };
        // ------------------------ 操作及上报
        /**
         * 擦除图像
         *
         * @private
         * @param {number} startX
         * @param {number} startY
         * @memberof Painter
         */
        Painter.prototype._eraserShape = function (startX, startY) {
            var _this_1 = this;
            var deleteShape;
            this._displayList.forEach(function (shape) {
                if (shape instanceof Text) {
                    if (shape.isPointInPath(startX, startY)) {
                        deleteShape = shape;
                    }
                }
                else {
                    if (_this_1._isPointInShape(startX, startY, shape)) {
                        deleteShape = shape;
                    }
                }
            });
            if (deleteShape) {
                // 显示图形中删除该形状
                this._displayList.delete(deleteShape.id);
                // 上报删除形状
                var basicReportInfo = {
                    bId: this.id,
                    action: BoardEventType.DELETE_SHAPE,
                    data: {
                        pIds: [deleteShape.id]
                    }
                };
                // 橡皮擦擦除的形状
                this.emit('reportContent', basicReportInfo);
                // 标记为可撤销
                this._canUndoList.push({
                    type: BoardEventType.DELETE_SHAPE,
                    shapes: [deleteShape],
                });
                // 还原画板
                // 绘制到缓存画板
                this.clearCachePainter();
                this._displayList.forEach(function (shape) {
                    _this_1.drawToCachePainter(shape);
                });
                // 更新数据
            }
        };
        Painter.prototype._addInputElement = function (id, startX, startY) {
            // 画板放大会有误差
            var scaleOffsetX = (this.boxWidth - this.width) / 2;
            var scaleOffsetY = (this.boxHeight - this.height) / 2;
            var textInput = createElement({
                kind: 'textarea',
                props: __assign({}, Config.TEXT_INPUT_ELEMENT_OPTIONS.props),
                style: __assign(__assign({}, Config.TEXT_INPUT_ELEMENT_OPTIONS.style), { top: startY + scaleOffsetY + "px", left: startX + scaleOffsetX + "px", 'max-width': this.boxWidth - startX + "px", 'max-height': this.boxHeight - startY + "px", 'white-space': 'pre-wrap', 'box-sizing': 'content-box', 'outline': 'none', resize: 'none', 'word-break': 'break-all', color: this._textColor, 'font-style': this._textStyle, 'font-size': this._textSize + 'px', 'font-weight': this._textWeight, 'line-height': this._textSize + 'px', 'min-width': this._textSize + 'px', 'min-height': this._textSize + 'px' })
            }).el;
            this.createTextInput(textInput);
            return textInput;
        };
        /**
         * 创建
         *
         * @private
         * @param {number} startX
         * @param {number} startY
         * @memberof Painter
         */
        Painter.prototype._createTextInputAndHandleChange = function (startX, startY) {
            var _this_1 = this;
            var reportShapeProps = {};
            var brushId = this.brushId;
            // 画板放大会有误差
            var textInput = this._addInputElement(brushId, startX, startY);
            this._textInput = textInput;
            var inputMaxWidth = this.boxWidth - startX;
            textInput.onfocus = function (ev) {
                // document.body.appendChild(measureTextElement);
                ev.target.style.border = '1px dashed rgba(167, 156, 156,1)';
            };
            // 聚焦输入框 - 这里不加定时器无法聚焦
            textInput.focus();
            requestAnimationFrame(function () {
                return textInput.focus();
            });
            textInput.oninput = function (ev) {
                var val = ev.target.value;
                // 将文章按照宽度、换行符切割成行
                var _a = splitArticleToList(val, {
                    fontSize: _this_1._textSize,
                    fontStyle: _this_1._textStyle,
                    fontWeight: _this_1._textWeight,
                    lineHeight: _this_1._textSize,
                    fontFamily: 'customFontFamily, sans-serif, serif, monospace',
                }, inputMaxWidth), width = _a.width, height = _a.height; _a.list;
                // 动态改变输入框的宽高（加上上下/左右边框）
                ev.target.style.width = width + 2 + 'px';
                ev.target.style.height = height + 2 + 'px';
            };
            // 监听输入框失去焦点
            textInput.onblur = function (ev) {
                var textInputValue = textInput.value; // textInput.value.trim()
                if (textInputValue) {
                    var inputText = textInputValue;
                    reportShapeProps = {
                        text: inputText,
                        fontSize: _this_1._textSize,
                        lineHeight: _this_1._textSize,
                        x: startX,
                        y: startY,
                        maxWidth: _this_1.boxWidth - startX,
                        maxHeight: _this_1.boxHeight - startY,
                    };
                    var text = new Text(_this_1.brushId, {
                        props: reportShapeProps,
                        style: {
                            textFill: _this_1._textColor,
                            textStyle: _this_1._textStyle,
                            textWeight: _this_1._textWeight
                            // fontFamily: '',
                        }
                    });
                    // 将形状添加代理
                    _this_1.drawToCachePainter(text);
                    var handleShape = _this_1._handleShapeAttr(text);
                    // 绘制的元素都默认显示
                    _this_1._displayList.set(text.id, handleShape);
                    // 标记为可撤销
                    _this_1._canUndoList.push({
                        type: BoardEventType.ADD_SHAPE,
                        shapes: [text],
                    });
                    var reportContent = {
                        bId: _this_1.id,
                        action: BoardEventType.ADD_SHAPE,
                        data: {
                            pId: text.id,
                            width: _this_1.width,
                            height: _this_1.height,
                            shape: text.type,
                            props: text.props,
                            style: text.style,
                            position: text.position,
                            lts: Date.now()
                        }
                    };
                    // 广播通知添加文字
                    _this_1.emit('reportContent', reportContent);
                }
                // 失焦则删除当前创建的节点
                textInput.remove();
                _this_1._textInput = null;
            };
        };
        return Painter;
    }(BoardSkeleton));

    /**
     * 白板文件基本信息的数据结构
     *
     * @export
     * @class BoardFile
     * @ignore
     */
    var BoardFile = /** @class */ (function () {
        function BoardFile() {
            /**
             * 文件类型
             *
             * @type {number}
             */
            this.type = 0;
            /**
             * 文件 ID
             *
             * @type {string}
             */
            this.fId = '#DEFAULT';
            /**
             * H5 网页的地址
             *
             * @type {string}
             */
            this.url = '';
            /**
             * 文件标题
             *
             * @type {string}
             */
            this.title = 'DEFAULT';
            /**
             * 当前白板页码
             *
             * @type {number}
             */
            this.currentPageIndex = 1;
            /**
             * 白板页数
             *
             * @type {number}
             */
            this.totalPageCount = 1;
            /**
             * 当前文件的白板列表
             *
             * @type {string[]}
             */
            this.boardList = [];
            /**
             * 当前白板默认宽度
             * 所有数据都是根据 1920 * 1080 这个数据得出的，上报或者客户端处理都需要进行转换
             * 如果 ratio 为 4: 3，则画板高度不边，画板的宽度 * 3 / 4，同时数据的 y 坐标不变，
             * x 坐标 * 3 / 4。
             */
            this.width = 1920;
            /**
             * 当前白板默认高度
             * 所有数据都是根据 1920 * 1080 这个数据得出的，上报或者客户端处理都需要进行转换
             * 如果 ratio 为 4: 3，则画板高度不边，画板的宽度 * 3 / 4，同时数据的 y 坐标不变，
             * x 坐标 * 3 / 4。
             */
            this.height = 1080;
            // platform: string = '';
        }
        return BoardFile;
    }());

    /**
     * 白板页的基本信息数据结构
     *
     * @export
     * @class BoardData
     */
    var BoardData = /** @class */ (function () {
        function BoardData(id) {
            this.bId = '';
            this.scale = 100;
            this.ratio = '';
            this.color = '#ffffff';
            this.image = '';
            this.imageFillMode = 'contain'; // 'contain' | 'cover' | 'fill'
            this.url = '';
            // 本地临时加上去的
            this.pList = new Map();
            this.canUndoList = [];
            this.canRedoList = [];
            this.bId = id;
        }
        return BoardData;
    }());

    /**
     * 网络请求
     *
     * @ignore
     * @class Http
     */
    var Http = /** @class */ (function () {
        // private _wssUrl: string = '';
        function Http(httpClientOptions) {
            this._url = '';
            this._wss = true;
            this._port = 443;
            this._timeout = 60000;
            if ('[object Object]' === Object.prototype.toString.call(httpClientOptions)) {
                var url = httpClientOptions.url, wss = httpClientOptions.wss, port = httpClientOptions.port, timeout = httpClientOptions.timeout;
                if ('string' === typeof url) {
                    this._url = url;
                }
                if ('boolean' === typeof wss) {
                    this._wss = wss;
                    this._port = wss ? 443 : 80;
                }
                if ('number' === typeof port) {
                    this._port = port;
                }
                if ('number' === typeof timeout) {
                    this._timeout = timeout;
                }
            }
            // this._wssUrl = `${this._wss ? 'https' : 'http'}://${this._url}:${this._port}`;
        }
        /**
         * 配置请求地址等参数
         *
         * @param {HttpClientOptions} httpClientOptions
         * @memberof Http
         */
        Http.prototype.setRequestUrl = function (httpClientOptions) {
            if ('[object Object]' === Object.prototype.toString.call(httpClientOptions)) {
                var url = httpClientOptions.url, wss = httpClientOptions.wss, port = httpClientOptions.port;
                if ('string' === typeof url) {
                    this._url = url;
                }
                if ('boolean' === typeof wss) {
                    this._wss = wss;
                    this._port = wss ? 443 : 80;
                }
                if ('number' === typeof port) {
                    this._port = port;
                }
                // this._wssUrl = `${this._wss ? 'https' : 'http'}://${this._url}:${this._port}`;
            }
        };
        /**
         * 发起请求
         *
         * @param {RequestMethod} method
         * @param {*} body
         * @return Promise<string>
         * @memberof Http
         */
        Http.prototype.request = function (urlSuffix, method, body) {
            return this._sendUrlRequest(urlSuffix, method, body);
        };
        /**
         * 发起 post 请求
         *
         * @param {*} body
         * @return Promise<string>
         * @memberof Http
         */
        Http.prototype.post = function (urlSuffix, body) {
            return this.request(urlSuffix, 'POST', body);
        };
        /**
         * 发起 get 请求
         *
         * @param {*} body
         * @return Promise<string>
         * @memberof Http
         */
        Http.prototype.get = function (urlSuffix, body) {
            return this.request(urlSuffix, 'GET', body);
        };
        /**
         * 发起请求
         *
         * @private
         * @param {RequestMethod} method
         * @param {*} body
         * @param {boolean} [async=true]
         * @return Promise<string>
         * @memberof Http
         */
        Http.prototype._sendUrlRequest = function (urlSuffix, method, body, async) {
            var _this = this;
            if (async === void 0) { async = true; }
            return new Promise(function (resolve, reject) {
                if ('' === _this._url) { // _wssUrl
                    reject('NO_REQUEST_URL');
                    return;
                }
                var requestUrl = _this._url; // _wssUrl
                if (urlSuffix) {
                    requestUrl = _this._url + urlSuffix; // _wssUrl
                }
                var xhr = new XMLHttpRequest();
                xhr.timeout = 60000;
                var reportResults = function () {
                    // console.log('reportResults status, responseText ==>', xhr.status, xhr.responseText);
                    if (xhr.status !== 200) {
                        reject(new ArWhiteBoardError(NetworkErrorCode.NETWORK_RESPONSE_ERROR));
                        return;
                    }
                    resolve(JSON.parse(xhr.responseText));
                };
                if (async) {
                    xhr.onreadystatechange = function (ev) {
                        if (xhr.readyState !== 4) {
                            return;
                        }
                        // 请求已完成
                        reportResults();
                    };
                }
                xhr.open(method, requestUrl, async);
                xhr.onerror = function (err) {
                    reject(new ArWhiteBoardError(NetworkErrorCode.NETWORK_ERROR));
                };
                xhr.ontimeout = function () {
                    reject(new ArWhiteBoardError(NetworkErrorCode.NETWORK_TIMEOUT));
                };
                xhr.send(JSON.stringify(body));
                if (!async) {
                    reportResults();
                }
            });
        };
        return Http;
    }());
    // Demo
    // const http = new Http({
    //   url: 'gateway.agrtc.cn'
    // });
    // http.post('/arapi/v1?action=wrtc_gateway', {
    //   opid: 133,
    //   ts: Date.now(),
    //   extend: "",
    //   proxyServer: "",
    //   sid: '9e1bed7ce8674ae16cc51888ce925356',
    //   appId: '177e21c0d1641291c34e46e1198bd49a',
    //   cname: '909090',
    //   uid: 'web_test',
    //   token: '',
    //   wss: true,
    // })

    /**
     *
     *
     * @export
     * @class GateWay
     * @ignore
     */
    var GateWay = /** @class */ (function () {
        function GateWay() {
            this._urls = [];
            this._urlSuffix = "/arapi/v1?action=";
            this._appid = "";
            this._sessionId = "";
            this._urls = [Config.GATEWAY_ADDRESS]; // , Config.GATEWAY_ADDRESS
            this._urlSuffix = "/arapi/v1?action=";
        }
        /**
         * 连接网关
         *
         * @export
         * @param {{ [propName: string]: any }} data
         * @returns
         */
        GateWay.prototype.joinGateway = function (data) {
            var _this_1 = this;
            if (data === void 0) { data = {}; }
            var _this = this;
            return new Promise(function (resolve, reject) {
                // request url + url suffix
                var gatewayUrl = _this._urlSuffix.concat("wb_gateway");
                // request url + url suffix
                var authGateWay = function () { return __awaiter(_this_1, void 0, void 0, function () {
                    var res, code, sessionid, appId, e_1, err;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, Promise.race(this._urls.map(function (url) {
                                        // 创建 XMLHttpRequest 示例
                                        var reqInstance = new Http({
                                            url: url,
                                            timeout: Config.GATEWAY_CONNECT_TIMEOUT,
                                        });
                                        return reqInstance.post(gatewayUrl, __assign({}, data));
                                    }))];
                            case 1:
                                res = _a.sent();
                                if (res) {
                                    code = res.code;
                                    if (code === 0) {
                                        sessionid = res.sessionid;
                                        appId = data.appId;
                                        _this._sessionId = sessionid;
                                        _this._appid = appId;
                                        resolve(res);
                                    }
                                    else if (code === -1) { // && msg === "timeout"
                                        // 轮询直到成功
                                        setTimeout(function () {
                                            authGateWay();
                                        }, Config.GATEWAY_CONNECT_TIMEOUT);
                                    }
                                    else if (code === -4 || code === -7) { // -4 缺少参数 -7 参数不符合要求
                                        // 轮询直到成功
                                        throw new ArWhiteBoardError(InternalErrorCode.MISSING_PARAMETER, "MISSING_PARAMETER");
                                    }
                                    // 开发者ID被禁用
                                    else if (code === 13) {
                                        throw new ArWhiteBoardError(InternalErrorCode.DEVELOPER_INVALID, "DEVELOPER_INVALID");
                                    }
                                    // APP内用户被禁用
                                    else if (code === 14) {
                                        throw new ArWhiteBoardError(InternalErrorCode.UID_BANNED, "UID_BANNED");
                                    }
                                    // ip被禁用
                                    else if (code === 15) {
                                        throw new ArWhiteBoardError(InternalErrorCode.IP_BANNED, "IP_BANNED");
                                    }
                                    // 应用内频道被禁用
                                    else if (code === 16) {
                                        throw new ArWhiteBoardError(InternalErrorCode.CHANNEL_BANNED, "CHANNEL_BANNED");
                                    }
                                    // 应用ID不存在或者应用不可用
                                    else if (code === 101) {
                                        throw new ArWhiteBoardError(InternalErrorCode.APPID_INVALID, "APPID_INVALID");
                                    }
                                    // 服务未开通
                                    else if (code === 102) {
                                        throw new ArWhiteBoardError(InternalErrorCode.SERVER_NOT_OPEN, "SERVER_NOT_OPEN");
                                    }
                                    // token已过期
                                    else if (code === 109) {
                                        throw new ArWhiteBoardError(InternalErrorCode.TOKEN_EXPIRED, "TOKEN_EXPIRED You must request a new token from your server and call join to use the new token to join the channel");
                                    }
                                    // token不可用
                                    else if (code === 110) {
                                        throw new ArWhiteBoardError(InternalErrorCode.TOKEN_INVALID, "TOKEN_INVALID make sure token is right and try angain please");
                                    }
                                    // 继续请求
                                    else {
                                        // 104 同步频道信息超时
                                        // 轮询直到成功
                                        setTimeout(function () {
                                            authGateWay();
                                        }, Config.GATEWAY_CONNECT_TIMEOUT);
                                    }
                                }
                                return [3 /*break*/, 3];
                            case 2:
                                e_1 = _a.sent();
                                err = e_1;
                                if (err.code === "NETWORK_ERROR" ||
                                    err.code === "NETWORK_TIMEOUT" ||
                                    err.code === "NETWORK_RESPONSE_ERROR") {
                                    // Logger.warning(`reconnect gateway server, reason: ${err.code}`);
                                    setTimeout(function () {
                                        authGateWay();
                                    }, Config.GATEWAY_CONNECT_TIMEOUT);
                                    return [2 /*return*/];
                                }
                                reject(err);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                authGateWay();
            });
        };
        return GateWay;
    }());

    /**
     * 连接状态
     *
     * @export
     * @enum {number}
     */
    exports.EConnectionState = void 0;
    (function (EConnectionState) {
        /**
         * 未连接
         */
        EConnectionState[EConnectionState["DISCONNECTED"] = 0] = "DISCONNECTED";
        /**
         * 连接中
         */
        EConnectionState[EConnectionState["CONNECTING"] = 1] = "CONNECTING";
        /**
         * 重连中
         */
        EConnectionState[EConnectionState["RECONNECTING"] = 2] = "RECONNECTING";
        /**
         * 连接成功
         */
        EConnectionState[EConnectionState["CONNECTED"] = 3] = "CONNECTED";
        /**
         * 中断连接中
         */
        EConnectionState[EConnectionState["DISCONNECTING"] = 4] = "DISCONNECTING";
    })(exports.EConnectionState || (exports.EConnectionState = {}));
    /**
     * 信令客户端
     * 信令使用 WebSocket 进行传输
     *
     * @class SignalChannel
     * @hidden
     */
    var SignalChannel = /** @class */ (function (_super) {
        __extends(SignalChannel, _super);
        function SignalChannel(options) {
            var _this = _super.call(this) || this;
            _this._websocket = null;
            _this._url = '';
            _this._wss = true;
            _this._port = 443;
            _this.revState = exports.EConnectionState.DISCONNECTED;
            _this.curState = exports.EConnectionState.DISCONNECTED;
            _this.onclose = function () { };
            _this.onerror = function () { };
            _this.onmessage = function () { };
            // 初始化配置
            if (options && '[object Object]' === Object.prototype.toString.call(options)) {
                var url = options.url, wss = options.wss, port = options.port;
                url && (_this._url = url);
                'boolean' === typeof wss && (_this._wss = wss);
                port && (_this._port = port);
            }
            return _this;
        }
        Object.defineProperty(SignalChannel.prototype, "connectState", {
            /**
             * websocket 连接状态
             * 值为以下其中之一
             * 0 (WebSocket.CONNECTING) 正在链接中
             * 1 (WebSocket.OPEN) 已经链接并且可以通讯
             * 2 (WebSocket.CLOSING) 连接正在关闭
             * 3 (WebSocket.CLOSED) 连接已关闭或者没有链接成功
             *
             * @readonly
             * @memberof SignalChannel
             */
            get: function () {
                return this._websocket ? this._websocket.readyState : WebSocket.CLOSED;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 开始连接信令服务器
         *
         * @param {SignalChannelOptions} [options]
         * @return Promise<void>
         * @memberof SignalChannel
         */
        SignalChannel.prototype.open = function (options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                // if (this._websocket) {
                //   Logger.error('ERROR: SignalingChannel has already opened.');
                //   throw new Error('ERROR: SignalingChannel has already opened.');
                // }
                // 配置请求
                if (options && '[object Object]' === Object.prototype.toString.call(options)) {
                    var url = options.url, wss = options.wss, port = options.port;
                    url && (_this._url = url);
                    'boolean' === typeof wss && (_this._wss = wss);
                    port && (_this._port = port);
                }
                // 发起 ws 请求
                var wsUrl = (_this._wss ? 'wss' : 'ws') + "://" + _this._url + ":" + _this._port;
                Logger.debug("[ws-client] websocket opened: " + wsUrl);
                _this._websocket = new WebSocket(wsUrl);
                // 连接建立
                _this._websocket.onopen = function () {
                    Logger.debug("Signaling channel opened. " + wsUrl);
                    // 连接建立之后出现错误
                    _this._websocket.onerror = function (ev) {
                        Logger.debug('Signaling channel error.');
                        _this.onerror(ev);
                    };
                    // 连接关闭
                    _this._websocket.onclose = function (ev) {
                        Logger.debug(_this._url + " server closed with code: " + ev.code + " reason: " + ev.reason);
                        _this.onclose(ev);
                        _this._websocket = null;
                    };
                    resolve();
                };
                // 接收消息
                _this._websocket.onmessage = function (ev) {
                    _this.onmessage(ev); // message
                };
                // 连接建立失败的错误
                _this._websocket.onerror = function (ev) {
                    reject(Error('WebSocket error.'));
                };
            });
        };
        /**
         * 断开信令服务器
         *
         * @memberof SignalChannel
         */
        SignalChannel.prototype.close = function () {
            if (this._websocket) {
                this._websocket.close();
                // 置为 null 之后，仍然会走 onclose、onerror
                this._websocket = null;
            }
        };
        /**
         * 发送信令
         *
         * @param {object} msg
         * @memberof SignalChannel
         */
        SignalChannel.prototype.send = function (msg) {
            if (typeof msg !== "object") {
                Logger.error("signal channel msg must be object.");
                return;
            }
            if (this._websocket && this._websocket.readyState === 1) {
                this._websocket.send(JSON.stringify(msg));
            }
        };
        SignalChannel.prototype.addMessageEventListener = function (listener, options) {
            if (this._websocket) {
                return this._websocket.addEventListener('message', listener, options);
            }
        };
        SignalChannel.prototype.removeMessageEventListener = function (listener, options) {
            if (this._websocket) {
                return this._websocket.removeEventListener('message', listener, options);
            }
        };
        /**
         * 关闭连接并清除监听事件
         *
         * @memberof SignalChannel
         */
        SignalChannel.prototype.clear = function () {
            this.close();
            this.onerror = function () { };
            this.onclose = function () { };
            this.onmessage = function () { };
            this.addMessageEventListener = function () { };
            this.removeMessageEventListener = function () { };
            // this.removeAllListeners(); // eventEmitter
        };
        return SignalChannel;
    }(EventEmitter));

    /**
     * 封装 Promise
     * @param promise 原始数据
     * @returns Promise<any>
     * @hidden
     */
    var to = function (promise) {
        return promise
            .then(function (data) {
            return [null, data];
        })
            .catch(function (err) { return [err]; });
    };
    // Usage [e.g.]
    // async function asyncTask() {
    //   let err, user, savedTask;
    //   [err, user] = await to(UserModel.findById(1));
    //   if(!user) throw new CustomerError('No user found');
    //   [err, savedTask] = await to(TaskModel({userId: user.id, name: 'Demo Task'}));
    //   if(err) throw new CustomError('Error occurred while saving task');
    //  if(user.notificationsEnabled) {
    //     const [err] = await to(NotificationService.sendNotification(user.id, 'Task Created'));
    //     if (err) console.error('Just log the error and continue flow');
    //  }
    // }

    /**
     *
     * @export
     * @class BoardChannel
     * @extends {EventEmitter<{[key: string]: any}>}
     * @ignore
     */
    var BoardChannel = /** @class */ (function (_super) {
        __extends(BoardChannel, _super);
        function BoardChannel(config) {
            var _this_1 = _super.call(this) || this;
            // 配置
            _this_1._cmdEncrypt = false;
            _this_1._appId = "";
            _this_1._serverIsWss = true;
            _this_1._serverUrl = "";
            _this_1._serverPort = 0;
            _this_1._channel = null;
            _this_1._userId = null;
            _this_1._connectTimeout = 0;
            _this_1._keepAliveTimeout = 0;
            _this_1._keepALiveInterval = 0;
            _this_1._keepALiveIntervalTime = 1e4;
            _this_1.handleMediaServerEvents = function () { return void 0; };
            var _this = _this_1;
            if (config && config.appId) {
                _this._appId = config.appId;
            }
            return _this_1;
        }
        // @override
        BoardChannel.prototype.send = function (msg) {
            _super.prototype.send.call(this, msg);
        };
        /**
         *
         *
         * @param {{ [key: string]: any }} options
         * @memberof MediaServer
         */
        BoardChannel.prototype.init = function (options) {
            var _this = this;
            var appId = options.appId, isWss = options.isWss, url = options.url, port = options.port;
            appId && (_this._appId = appId);
            'boolean' === typeof isWss && (_this._serverIsWss = isWss);
            url && (_this._serverUrl = url);
            port && (_this._serverPort = port);
        };
        /**
         *
         *
         * @param {{[key: string]: any}} appInfo
         * @memberof MediaServer
         */
        BoardChannel.prototype.setAppInfo = function (appInfo) {
            var _this = this;
            var appId = appInfo.appId;
            _this._appId = appId;
        };
        /**
         * 配置服务请求地址
         *
         * @param {ServeConfig} option
         * @returns
         */
        BoardChannel.prototype.configServer = function (isWss, url, port) {
            var _this = this;
            _this._serverIsWss = isWss;
            _this._serverUrl = url;
            _this._serverPort = port;
        };
        /**
         * 连接CTS
         *
         */
        BoardChannel.prototype.connectServer = function (channel, uid, token) {
            var _this_1 = this;
            var _this = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this_1, void 0, void 0, function () {
                var _a, err, _b, initErr;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            // 通知状态正在连接
                            _this._emitConnectionState(exports.EConnectionState.CONNECTING);
                            // 如果超时（10s后）还没有连上将回调断开连接
                            _this._setConnectTimeout();
                            return [4 /*yield*/, to(_this.open({
                                    url: _this._serverUrl,
                                    wss: _this._serverIsWss,
                                    port: _this._serverPort,
                                }))];
                        case 1:
                            _a = __read.apply(void 0, [_c.sent(), 2]), err = _a[0];
                            if (!err) return [3 /*break*/, 2];
                            // 如果连接成功清除连接超时的定时器
                            _this._clearConnectTimeout();
                            reject(err);
                            return [3 /*break*/, 4];
                        case 2:
                            // !!--待优化
                            // 如果连接成功清楚超时的定时器
                            _this._clearConnectTimeout();
                            // 通知状态已连接
                            _this._emitConnectionState(exports.EConnectionState.CONNECTED);
                            this._channel = channel;
                            this._userId = uid;
                            return [4 /*yield*/, to(this.doInit({
                                    appId: _this._appId,
                                    chanId: channel,
                                    uId: uid,
                                    accessToken: token,
                                }))];
                        case 3:
                            _b = __read.apply(void 0, [_c.sent(), 2]), initErr = _b[0];
                            if (initErr) {
                                // 如果连接成功清除连接超时的定时器
                                _this._clearConnectTimeout();
                                reject(initErr);
                                return [2 /*return*/];
                            }
                            resolve();
                            // WebSocket onmessage
                            _this.onmessage = function (_a) {
                                var data = _a.data;
                                var msgData = JSON.parse(data);
                                var cmd = msgData.cmd, msgContent = msgData.data; msgData.errMsg; msgData.errCode;
                                switch (cmd) {
                                    // case "KeepAlive":
                                    //   // 收到保活，清除校验保活超时的定时器
                                    //   _this._clearKeepALiveTimeout();
                                    //   break;
                                    case "CONNECT": // 上线
                                        break;
                                    default: // 抛给上一层处理
                                        _this.handleMediaServerEvents && _this.handleMediaServerEvents(cmd, msgContent);
                                        break;
                                }
                            };
                            // WebSocket onerror
                            _this.onerror = function (ev) {
                                Logger.error("board server handle some error ", ev);
                            };
                            // WebSocket onclose
                            _this.onclose = function (_a) {
                                var code = _a.code, reason = _a.reason;
                                Logger.info("board serve disconnected...", code);
                                // 如果连接成功清除连接超时的定时器
                                _this._clearConnectTimeout();
                                // 不在进行保活操作，停止 10 秒发一次
                                // _this._stopKeepAlive();
                                // 清除保活 ask 超时的定时器
                                _this._clearKeepALiveTimeout();
                                switch (code) {
                                    // 3000–3999 可以由库或框架使用
                                    // 4000–4999 可以由应用使用.
                                    case 1000: // 正常关闭; 无论为何目的而创建, 该链接都已成功完成任务.
                                    case 1005: // 表示没有收到预期的状态码. close时没有带错误码
                                        _this._emitConnectionState(exports.EConnectionState.DISCONNECTED, "LEAVE");
                                        break;
                                    case 3001: // 服务端主动关闭 websocket (KEEP_A_LIVE_TIME_OUT)
                                        _this._emitConnectionState(exports.EConnectionState.RECONNECTING, "NETWORK_ERROR");
                                        break;
                                    default: // 异常重连
                                        Logger.debug("bNode serve disconnected with code " + code + ", reason " + reason);
                                        // 异常断开，开启重连，轮询多个订阅流媒体服务20分钟如果仍失败则放弃重连
                                        _this.curState !== exports.EConnectionState.RECONNECTING && _this._emitConnectionState(exports.EConnectionState.RECONNECTING, "SERVER_ERROR");
                                        break;
                                }
                                _this.clear();
                            };
                            resolve();
                            _c.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        };
        /**
         *
         *
         * @memberof MediaServer
         */
        // doKeepAlive() {
        //   const _this = this;
        //   // 发送保活信令
        //   const objMsg: any = {};
        //   objMsg.Cmd = "KeepAlive";
        //   objMsg.Encrypt = this._cmdEncrypt;
        //   objMsg.Content = JSON.stringify({
        //     time: Date.now().toString()
        //   });
        //   this.send(objMsg);
        //   // 主定时器 keepAlive超时，断开连接
        //   // 一次只生成一个定时器，如果在接下来的 20 内未收到 KeepALive 的 ASK，则释放连接（同时不监听任何消息回调）并进行重连
        //   !_this._keepAliveTimeout && (_this._keepAliveTimeout = setTimeout(() => {
        //     // 清除定时器
        //     _this._stopKeepAlive();
        //     _this._clearKeepALiveTimeout();
        //     // 断开连接并取消监听信令回调和 close 回调
        //     _this.clear();
        //     // 实际服务端已经将 ws 断开连接了，所有本地再次 close 无效，最终等个几秒才会收到 onclose
        //     _this._emitConnectionState("RECONNECTING", "KEEP_A_LIVE_TIME_OUT");
        //   }, 2 * _this._keepALiveIntervalTime));
        // }
        /**
         * 上线
         *
         * @param {*} extendContent
         * @memberof MediaServer
         */
        BoardChannel.prototype.doInit = function (content) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var curSeqId = '' + Date.now();
                // 监听上线成功是否
                var handleOnlineResult = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.INIT && curSeqId === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handleOnlineResult);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('BOARD_SERVER_INIT_FAILED');
                            reject('BOARD_SERVER_INIT_FAILED');
                        }
                    }
                };
                // 监听用户上线成功回调
                _this.addMessageEventListener(handleOnlineResult);
                var objMsg = {
                    cmd: BoardEventType.INIT,
                    seqId: curSeqId,
                    data: content,
                    rts: curSeqId,
                };
                _this.send(objMsg);
            });
        };
        /**
         * 获取频道信息
         *
         * @param {*} extendContent
         * @memberof MediaServer
         */
        BoardChannel.prototype.doGetChannelInfo = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var curSeqId = '' + Date.now();
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; msgData.errCode; var seqId = msgData.seqId;
                    // ! 是否需要添加信令发送超时未响应的逻辑
                    if (cmd === BoardEventType.CHAN_DATA && curSeqId === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        resolve();
                    }
                };
                // 监听用户上线成功回调
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.CHAN_DATA,
                    seqId: curSeqId,
                    rts: curSeqId,
                };
                _this.send(objMsg);
            });
        };
        // /**
        //  * 获取频道文件列表
        //  *
        //  * @param {*} extendContent
        //  * @memberof MediaServer
        //  */
        // doGetFileList() {
        //   const _this = this;
        //   return new Promise((resolve, reject) => {
        //     const curSeqId = '' + Date.now();
        //     const handleOffline = ({data}: MessageEvent) => {
        //       const msgData = JSON.parse(data);
        //       const { cmd, data: msgContent, errMsg, errCode, seqId } = msgData;
        //       if (cmd === BoardEventType.FILE_LIST && curSeqId === seqId) {
        //         // 为了达到一次监听的效果，把监听事情移除
        //         _this.removeMessageEventListener(handleOffline);
        //         resolve(msgContent);
        //       }
        //     }
        //     // 监听用户上线成功回调
        //     _this.addMessageEventListener(handleOffline);
        //     const objMsg: any = {};
        //     objMsg.cmd = BoardEventType.FILE_LIST;
        //     objMsg.appId = _this._appId;
        //     objMsg.chanId = this._channel;
        //     objMsg.userId = this._userId;
        //     objMsg.accessToken = '';
        //     objMsg.seqId = curSeqId;
        //     objMsg.content = '';
        //     _this.send(objMsg);
        //   });
        // }
        // /**
        //  * 获取频道信息
        //  *
        //  * @param {*} extendContent
        //  * @memberof MediaServer
        //  */
        // doGetChanBoardList() {
        //   const _this = this;
        //   return new Promise((resolve, reject) => {
        //     const curSeqId = '' + Date.now();
        //     const handleOffline = ({data}: MessageEvent) => {
        //       const msgData = JSON.parse(data);
        //       const { cmd, data: msgContent, errMsg, errCode, seqId } = msgData;
        //       if (cmd === BoardEventType.CHAN_BOARD_LIST && curSeqId === seqId) {
        //         // 为了达到一次监听的效果，把监听事情移除
        //         _this.removeMessageEventListener(handleOffline);
        //         resolve(msgContent);
        //       }
        //     }
        //     // 监听用户上线成功回调
        //     _this.addMessageEventListener(handleOffline);
        //     const objMsg: any = {};
        //     objMsg.cmd = BoardEventType.CHAN_BOARD_LIST;
        //     objMsg.appId = _this._appId;
        //     objMsg.chanId = this._channel;
        //     objMsg.userId = this._userId;
        //     objMsg.accessToken = '';
        //     objMsg.seqId = curSeqId;
        //     objMsg.content = '';
        //     _this.send(objMsg);
        //   });
        // }
        // /**
        //  * 获取频道信息
        //  *
        //  * @param {*} extendContent
        //  * @memberof MediaServer
        //  */
        // doGetBoardList(fileId: string) {
        //   const _this = this;
        //   return new Promise((resolve, reject) => {
        //     const curSeqId = '' + Date.now();
        //     const handleOffline = ({data}: MessageEvent) => {
        //       const msgData = JSON.parse(data);
        //       const { cmd, data: msgContent, errMsg, errCode, seqId } = msgData;
        //       if (cmd === BoardEventType.BOARD_LIST && curSeqId === seqId) {
        //         // 为了达到一次监听的效果，把监听事情移除
        //         _this.removeMessageEventListener(handleOffline);
        //         resolve(msgContent);
        //       }
        //     }
        //     // 监听用户上线成功回调
        //     _this.addMessageEventListener(handleOffline);
        //     const objMsg: any = {};
        //     objMsg.cmd = BoardEventType.BOARD_LIST;
        //     objMsg.appId = _this._appId;
        //     objMsg.chanId = this._channel;
        //     objMsg.userId = this._userId;
        //     objMsg.fileId = fileId;
        //     objMsg.accessToken = '';
        //     objMsg.seqId = curSeqId;
        //     objMsg.content = '';
        //     _this.send(objMsg);
        //   });
        // }
        // /**
        //  * 获取频道信息
        //  *
        //  * @param {*} extendContent
        //  * @memberof MediaServer
        //  */
        // doGetBoardData(painterId: string) {
        //   const _this = this;
        //   return new Promise((resolve, reject) => {
        //     const curSeqId = '' + Date.now();
        //     const handleOffline = ({data}: MessageEvent) => {
        //       const msgData = JSON.parse(data);
        //       const { cmd, data: msgContent, errMsg, errCode, seqId } = msgData;
        //       if (cmd === BoardEventType.BOARD_DATA && curSeqId === seqId) {
        //         // 为了达到一次监听的效果，把监听事情移除
        //         _this.removeMessageEventListener(handleOffline);
        //         resolve(msgContent);
        //       }
        //     }
        //     // 监听用户上线成功回调
        //     _this.addMessageEventListener(handleOffline);
        //     const objMsg: any = {};
        //     objMsg.cmd = BoardEventType.BOARD_DATA;
        //     objMsg.appId = _this._appId;
        //     objMsg.chanId = this._channel;
        //     objMsg.userId = this._userId;
        //     objMsg.painterId = painterId;
        //     objMsg.accessToken = '';
        //     objMsg.seqId = curSeqId;
        //     objMsg.content = '';
        //     _this.send(objMsg);
        //   });
        // }
        /**
         * 加入频道
         *
         * @param {string} channelId
         * @memberof RtmServer
         */
        BoardChannel.prototype.doAddFile = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.ADD_FILE && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('ADD_FILE_FAILED');
                            reject('ADD_FILE_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.ADD_FILE,
                    seqId: rts,
                    rts: rts,
                    data: content,
                };
                _this.send(objMsg);
            });
        };
        /**
         *
         *
         * @param {number} type
         * @param {string} channelId
         * @param {string} msgBody
         * @memberof RtmServer
         */
        BoardChannel.prototype.doAddBoard = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.ADD_BOARD && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('ADD_BOARD_FAILED');
                            reject('ADD_BOARD_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.ADD_BOARD,
                    seqId: rts,
                    data: content,
                    rts: rts,
                };
                _this.send(objMsg);
            });
        };
        /**
         *
         *
         * @param {string} callId
         * @param {string} callerId
         * @param {string} response
         * @returns
         * @memberof RtmServer
         */
        BoardChannel.prototype.doDeleteBoard = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.DELETE_BOARD && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('DELETE_BOARD_FAILED');
                            reject('DELETE_BOARD_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.DELETE_BOARD,
                    seqId: rts,
                    data: content,
                    rts: rts,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doSwitchBoard = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.SWITCH_BOARD && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('SWITCH_BOARD_FAILED');
                            reject('SWITCH_BOARD_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.SWITCH_BOARD,
                    seqId: rts,
                    data: content,
                    rts: rts,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doResetBoard = function (rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.RESET_BOARD && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('RESET_BOARD_FAILED');
                            reject('RESET_BOARD_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.RESET_BOARD,
                    seqId: rts,
                    rts: rts,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doClearBoard = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.CLEAR_BOARD && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('CLEAR_BOARD_FAILED');
                            reject('CLEAR_BOARD_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.CLEAR_BOARD,
                    seqId: rts,
                    data: content,
                    rts: rts,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doSetBoardRatio = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.RATIO_BOARD && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('BOARD_RATIO_FAILED');
                            reject('BOARD_RATIO_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.RATIO_BOARD,
                    seqId: rts,
                    rts: rts,
                    data: content,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doScaleBoard = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.SCALE_BOARD && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('SCALE_BOARD_FAILED');
                            reject('SCALE_BOARD_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.SCALE_BOARD,
                    seqId: rts,
                    rts: rts,
                    data: content,
                };
                _this.send(objMsg);
            });
        };
        // doProcessShape(painterId: string, content: IReportBrushData): Promise<void> { // IReportBrushData
        //   const _this = this;
        //   return new Promise((resolve, reject) => {
        //     const curSeqId = '' + Date.now();
        //     const handle = ({data}: MessageEvent) => {
        //       const msgData = JSON.parse(data);
        //       const { cmd, data: msgContent, errMsg, errCode, seqId } = msgData;
        //       if (cmd === BoardEventType.PROCESS_SHAPE && curSeqId === seqId) {
        //         // 为了达到一次监听的效果，把监听事情移除
        //         _this.removeMessageEventListener(handle);
        //         if (errCode === 0) {
        //           resolve();
        //         } else {
        //           Logger.warning('PROCESS_SHAPE_FAILED');
        //           reject('PROCESS_SHAPE_FAILED');
        //         }
        //       }
        //     }
        //     // 监听消息
        //     _this.addMessageEventListener(handle);
        //     const objMsg: any = {};
        //     objMsg.cmd = BoardEventType.PROCESS_SHAPE;
        //     // objMsg.appId = _this._appId;
        //     objMsg.chanId = this._channel;
        //     // objMsg.userId = this._userId;
        //     objMsg.bId = painterId;
        //     // objMsg.accessToken = '';
        //     objMsg.seqId = curSeqId;
        //     objMsg.rts = curSeqId;
        //     // objMsg.content = content;
        //     objMsg.data = content;
        //     _this.send(objMsg);
        //   });
        // }
        BoardChannel.prototype.doUpdateBoardBackgroundColor = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.UPDATE_BACKGROUND && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('UPDATE_BACKGROUND_FAILED');
                            reject('UPDATE_BACKGROUND_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.UPDATE_BACKGROUND,
                    seqId: rts,
                    rts: rts,
                    data: content,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doUpdateBoardBackgroundImage = function (content) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var curSeqId = '' + Date.now();
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.UPDATE_BACKGROUND_IMAGE && curSeqId === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('UPDATE_BACKGROUND_IMAGE_FAILED');
                            reject('UPDATE_BACKGROUND_IMAGE_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.UPDATE_BACKGROUND_IMAGE,
                    seqId: curSeqId,
                    rts: curSeqId,
                    data: content,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doAddShape = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.ADD_SHAPE && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('ADD_SHAPE_FAILED');
                            reject('ADD_SHAPE_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.ADD_SHAPE,
                    seqId: rts,
                    rts: rts,
                    data: content,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doMoveShape = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.MOVE_SHAPE && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('MOVE_SHAPE_FAILED');
                            reject('MOVE_SHAPE_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.MOVE_SHAPE,
                    seqId: rts,
                    rts: rts,
                    data: content,
                };
                _this.send(objMsg);
            });
        };
        BoardChannel.prototype.doDeleteShape = function (content, rts) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handle = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var cmd = msgData.cmd; msgData.data; msgData.errMsg; var errCode = msgData.errCode, seqId = msgData.seqId;
                    if (cmd === BoardEventType.DELETE_SHAPE && rts === seqId) {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handle);
                        if (errCode === 0) {
                            resolve();
                        }
                        else {
                            Logger.warning('DELETE_SHAPE_FAILED');
                            reject('DELETE_SHAPE_FAILED');
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handle);
                var objMsg = {
                    cmd: BoardEventType.DELETE_SHAPE,
                    seqId: rts,
                    rts: rts,
                    data: content,
                };
                _this.send(objMsg);
            });
        };
        /**
         * 断开WS连接
         *
         * @memberof ArServe
         */
        BoardChannel.prototype.disconnectServer = function (reason) {
            var _this = this;
            // _this._stopKeepAlive();
            _this._clearKeepALiveTimeout();
            _this.clear();
            if (reason) {
                switch (reason) {
                    case "UID_BANNED":
                    case "TOKEN_INVALID":
                    case "FORCE_OFFLINE":
                        _this._emitConnectionState(exports.EConnectionState.DISCONNECTED, reason);
                        break;
                }
            }
            else {
                _this._emitConnectionState(exports.EConnectionState.DISCONNECTED, "LEAVE");
            }
        };
        /**
         * 清除监听事件
         *
         * @memberof ArServe
         */
        BoardChannel.prototype.clearEventEmitter = function () {
            var _this = this;
            _this.removeAllListeners(); // eventEmitter
        };
        /**
         *
         *
         * @private
         * @memberof MediaServer
         */
        BoardChannel.prototype._setConnectTimeout = function () {
            var _this = this;
            _this._clearConnectTimeout();
            // _this._connectTimeout = setTimeout(() => {
            //   _this._emitConnectionState("DISCONNECTING", "NETWORK_ERROR");
            // }, 10e3);
        };
        /**
         * 10s 保活一次
         *
         * @private
         * @memberof MediaServer
         */
        // private _startKeepAlive() {
        //   const _this = this;
        //   _this._stopKeepAlive();
        //   // 先发送一次
        //   _this.doKeepAlive();
        //   // 创建定时器，10 秒发送一次保活
        //   _this._keepALiveInterval = setInterval(() => {
        //     // 发送保活信令
        //     _this.doKeepAlive();
        //   }, _this._keepALiveIntervalTime);
        // }
        /**
         *
         *
         * @private
         * @memberof MediaServer
         */
        // private _stopKeepAlive() {
        //   const _this = this;
        //   _this._keepALiveInterval && clearInterval(_this._keepALiveInterval);
        // }
        /**
         *
         *
         * @private
         * @memberof MediaServer
         */
        BoardChannel.prototype._clearConnectTimeout = function () {
            var _this = this;
            _this._connectTimeout && clearTimeout(_this._connectTimeout);
        };
        /**
         *
         *
         * @memberof MediaServer
         */
        BoardChannel.prototype._clearKeepALiveTimeout = function () {
            var _this = this;
            if (_this._keepAliveTimeout) {
                clearTimeout(_this._keepAliveTimeout);
                _this._keepAliveTimeout = 0;
            }
        };
        /**
         *
         * @param curState
         * @param revState
         * @param reason
         */
        BoardChannel.prototype._emitConnectionState = function (curState, reason) {
            if (curState === exports.EConnectionState.DISCONNECTED) {
                Logger.debug("[signal] bNode websocket closed, reason: " + reason);
            }
            this.revState = this.curState;
            this.curState = curState;
            this.handleMediaServerEvents && this.handleMediaServerEvents("connection-state-change", {
                curState: this.curState,
                revState: this.revState,
                reason: reason
            });
        };
        return BoardChannel;
    }(SignalChannel));

    /**
     * @ignore
     */
    var BrowserDetect = {};
    /**
     * @ignore
     */
    var getBrowserInfo = function () {
        var v = function () {
            var e_1, _a;
            var e = void 0;
            var ua = navigator.userAgent;
            var n = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            "Chrome" === n[1] && null != (e = ua.match(/(OPR(?=\/))\/?(\d+)/i)) && (n = e);
            "Safari" === n[1] && null != (e = ua.match(/version\/(\d+)/i)) && (n[2] = e[1]);
            ~ua.toLowerCase().indexOf("qqbrowser") && null != (e = ua.match(/(qqbrowser(?=\/))\/?(\d+)/i)) && (n = e);
            ~ua.toLowerCase().indexOf("micromessenger") && null != (e = ua.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (n = e);
            ~ua.toLowerCase().indexOf("edge") && null != (e = ua.match(/(edge(?=\/))\/?(\d+)/i)) && (n = e);
            ~ua.toLowerCase().indexOf("trident") && null != (e = /\brv[ :]+(\d+)/g.exec(ua) || []) && (n = [null, "IE", e[1]]);
            var OSName = void 0;
            var browserOSMap = [{
                    s: "Windows 10",
                    r: /(Windows 10.0|Windows NT 10.0)/
                }, {
                    s: "Windows 8.1",
                    r: /(Windows 8.1|Windows NT 6.3)/
                }, {
                    s: "Windows 8",
                    r: /(Windows 8|Windows NT 6.2)/
                }, {
                    s: "Windows 7",
                    r: /(Windows 7|Windows NT 6.1)/
                }, {
                    s: "Windows Vista",
                    r: /Windows NT 6.0/
                }, {
                    s: "Windows Server 2003",
                    r: /Windows NT 5.2/
                }, {
                    s: "Windows XP",
                    r: /(Windows NT 5.1|Windows XP)/
                }, {
                    s: "Windows 2000",
                    r: /(Windows NT 5.0|Windows 2000)/
                }, {
                    s: "Windows ME",
                    r: /(Win 9x 4.90|Windows ME)/
                }, {
                    s: "Windows 98",
                    r: /(Windows 98|Win98)/
                }, {
                    s: "Windows 95",
                    r: /(Windows 95|Win95|Windows_95)/
                }, {
                    s: "Windows NT 4.0",
                    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
                }, {
                    s: "Windows CE",
                    r: /Windows CE/
                }, {
                    s: "Windows 3.11",
                    r: /Win16/
                }, {
                    s: "Android",
                    r: /Android/
                }, {
                    s: "Open BSD",
                    r: /OpenBSD/
                }, {
                    s: "Sun OS",
                    r: /SunOS/
                }, {
                    s: "Linux",
                    r: /(Linux|X11)/
                }, {
                    s: "iOS",
                    r: /(iPhone|iPad|iPod)/
                }, {
                    s: "Mac OS X",
                    r: /Mac OS X/
                }, {
                    s: "Mac OS",
                    r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                }, {
                    s: "QNX",
                    r: /QNX/
                }, {
                    s: "UNIX",
                    r: /UNIX/
                }, {
                    s: "BeOS",
                    r: /BeOS/
                }, {
                    s: "OS/2",
                    r: /OS\/2/
                }, {
                    s: "Search Bot",
                    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                }];
            try {
                for (var browserOSMap_1 = __values(browserOSMap), browserOSMap_1_1 = browserOSMap_1.next(); !browserOSMap_1_1.done; browserOSMap_1_1 = browserOSMap_1.next()) {
                    var a = browserOSMap_1_1.value;
                    if (a.r.test(navigator.userAgent)) {
                        OSName = a.s;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (browserOSMap_1_1 && !browserOSMap_1_1.done && (_a = browserOSMap_1.return)) _a.call(browserOSMap_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return {
                name: n[1],
                version: n[2],
                os: OSName
            };
        };
        return v();
    };
    /**
     * @ignore
     */
    var getBrowserOS = function () {
        return getBrowserInfo().os;
    };
    /**
     * @ignore
     */
    var isChrome = function () {
        var browserInfo = getBrowserInfo();
        return browserInfo.name && "Chrome" === browserInfo.name;
    };
    /**
     * @ignore
     */
    var isSafari = function () {
        var browserInfo = getBrowserInfo();
        return browserInfo.name && "Safari" === browserInfo.name;
    };
    /**
     * @ignore
     */
    var isEdge = function () {
        var browserInfo = getBrowserInfo();
        return browserInfo.name && "Edge" === browserInfo.name;
    };
    /**
     * @ignore
     */
    var isFireFox = function () {
        var browserInfo = getBrowserInfo();
        return browserInfo.name && "Firefox" === browserInfo.name;
    };
    /**
     * @ignore
     */
    var isOpera = function () {
        var browserInfo = getBrowserInfo();
        return browserInfo.name && "OPR" === browserInfo.name;
    };
    /**
     * @ignore
     */
    var isQQBrowser = function () {
        var browserInfo = getBrowserInfo();
        return browserInfo.name && "QQBrowser" === browserInfo.name;
    };
    /**
     * @ignore
     */
    var isWeChatBrowser = function () {
        var browserInfo = getBrowserInfo();
        return browserInfo.name && "MicroMessenger" === browserInfo.name;
    };
    /**
     * @ignore
     */
    var isSupportedPC = function () {
        var OSName = getBrowserOS();
        return "Linux" === OSName || "Mac OS X" === OSName || "Mac OS" === OSName || -1 !== OSName.indexOf("Windows");
    };
    /**
     * @ignore
     */
    var isSupportedMobile = function () {
        var OSName = getBrowserOS();
        return "Android" === OSName || "iOS" === OSName;
    };
    /**
     * @ignore
     */
    var getBrowserVersion = function () {
        return getBrowserInfo().version;
    };
    /**
     * @ignore
     */
    var isChromeKernel = function () {
        return !!navigator.userAgent.match(/chrome\/[\d]./i);
    };
    /**
     * @ignore
     */
    var isLegacyChrome = function () {
        return window.navigator.appVersion && null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35;
    };
    BrowserDetect.getBrowserInfo = getBrowserInfo;
    BrowserDetect.getBrowserOS = getBrowserOS;
    BrowserDetect.isChrome = isChrome;
    BrowserDetect.isSafari = isSafari;
    BrowserDetect.isEdge = isEdge;
    BrowserDetect.isFireFox = isFireFox;
    BrowserDetect.isOpera = isOpera;
    BrowserDetect.isQQBrowser = isQQBrowser;
    BrowserDetect.isWeChatBrowser = isWeChatBrowser;
    BrowserDetect.isSupportedPC = isSupportedPC;
    BrowserDetect.isSupportedMobile = isSupportedMobile;
    BrowserDetect.getBrowserVersion = getBrowserVersion;
    BrowserDetect.isChromeKernel = isChromeKernel;
    BrowserDetect.isLegacyChrome = isLegacyChrome;

    /**
     * 逆向保活 - 服务端给客户端发保活
     * @ignore
     */
    var reverseKeepAlive = BrowserDetect.isChrome() && BrowserDetect.getBrowserVersion() >= 87;
    /**
     *
     *
     * @export
     * @class RtmServer
     * @extends {EventEmitter<{[key: string]: any}>}
     * @ignore
     */
    var RTMChannel = /** @class */ (function (_super) {
        __extends(RTMChannel, _super);
        function RTMChannel(config) {
            var _this_1 = _super.call(this) || this;
            // 配置
            _this_1._cmdEncrypt = false;
            _this_1._appId = "";
            _this_1._serverIsWss = true;
            _this_1._serverUrl = "";
            _this_1._serverPort = 0;
            _this_1._userId = null;
            _this_1._connectTimeout = 0;
            _this_1._keepAliveTimeout = 0;
            _this_1._keepALiveInterval = 0;
            _this_1._keepALiveIntervalTime = 1e4;
            _this_1.handleMediaServerEvents = function () { return void 0; };
            var _this = _this_1;
            if (config && config.appId) {
                _this._appId = config.appId;
            }
            return _this_1;
        }
        /**
         *
         *
         * @param {{ [key: string]: any }} options
         * @memberof MediaServer
         */
        RTMChannel.prototype.init = function (options) {
            var _this = this;
            var appId = options.appId, isWss = options.isWss, url = options.url, port = options.port;
            _this._appId = appId;
            'boolean' === typeof isWss && (_this._serverIsWss = isWss);
            url && (_this._serverUrl = url);
            port && (_this._serverPort = port);
        };
        /**
         *
         *
         * @param {{[key: string]: any}} appInfo
         * @memberof MediaServer
         */
        RTMChannel.prototype.setAppInfo = function (appInfo) {
            var _this = this;
            var appId = appInfo.appId;
            _this._appId = appId;
        };
        /**
         * 配置服务请求地址
         *
         * @param {ServeConfig} option
         * @returns
         */
        RTMChannel.prototype.configServer = function (isWss, url, port) {
            var _this = this;
            _this._serverIsWss = isWss;
            _this._serverUrl = url;
            _this._serverPort = port;
        };
        /**
         * 连接CTS
         *
         */
        RTMChannel.prototype.connectServer = function () {
            var _this_1 = this;
            var _this = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this_1, void 0, void 0, function () {
                var _a, err, strUrl;
                var _this_1 = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // 通知状态正在连接
                            _this._emitConnectionState(exports.EConnectionState.CONNECTING);
                            // 如果超时（10s后）还没有连上将回调断开连接
                            _this._setConnectTimeout();
                            return [4 /*yield*/, to(_this.open({
                                    url: _this._serverUrl,
                                    wss: _this._serverIsWss,
                                    port: _this._serverPort,
                                }))];
                        case 1:
                            _a = __read.apply(void 0, [_b.sent(), 2]), err = _a[0];
                            if (err) {
                                // 如果连接成功清除连接超时的定时器
                                _this._clearConnectTimeout();
                                reject(err);
                            }
                            else {
                                strUrl = (_this._serverIsWss ? "wss" : "ws") + "://" + _this._serverUrl + ":" + _this._serverPort;
                                Logger.debug("[ws-client] websocket opened: " + strUrl);
                                // !!--待优化
                                // 如果连接成功清楚超时的定时器
                                _this._clearConnectTimeout();
                                // 通知状态已连接
                                _this._emitConnectionState(exports.EConnectionState.CONNECTED);
                                // WebSocket onmessage
                                _this.onmessage = function (_a) {
                                    var data = _a.data;
                                    var msgData = JSON.parse(data);
                                    var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                                    var msgContent = JSON.parse(Content);
                                    switch (Cmd) {
                                        case "KeepAlive":
                                            // 收到保活，清除校验保活超时的定时器
                                            _this._clearKeepALiveTimeout();
                                            break;
                                        case "ReqKeepAlive":
                                            _this_1.doKeepAlive();
                                            break;
                                        case "Login": // 上线
                                            // const { Code, UserId } = msgContent;
                                            // if (Code === 0) {
                                            // 开始保活
                                            !reverseKeepAlive && _this._startKeepAlive();
                                            // }
                                            break;
                                        default: // 抛给上一层处理
                                            _this.handleMediaServerEvents && _this.handleMediaServerEvents(Cmd, msgContent);
                                            break;
                                    }
                                };
                                // WebSocket onerror
                                _this.onerror = function (ev) {
                                    Logger.error("rtm server handle some error ", ev);
                                };
                                // WebSocket onclose
                                _this.onclose = function (_a) {
                                    var code = _a.code, reason = _a.reason;
                                    Logger.info("rtm serve disconnected...", code);
                                    // 如果连接成功清除连接超时的定时器
                                    _this._clearConnectTimeout();
                                    // 不在进行保活操作，停止 10 秒发一次
                                    _this._stopKeepAlive();
                                    // 清除保活 ask 超时的定时器
                                    _this._clearKeepALiveTimeout();
                                    switch (code) {
                                        // 3000–3999 可以由库或框架使用
                                        // 4000–4999 可以由应用使用.
                                        case 1000: // 正常关闭; 无论为何目的而创建, 该链接都已成功完成任务.
                                        case 1005: // 表示没有收到预期的状态码. close时没有带错误码
                                            _this._emitConnectionState(exports.EConnectionState.DISCONNECTED, "LEAVE");
                                            break;
                                        case 3001: // 服务端主动关闭 websocket (KEEP_A_LIVE_TIME_OUT)
                                            _this._emitConnectionState(exports.EConnectionState.RECONNECTING, "NETWORK_ERROR");
                                            break;
                                        default: // 异常重连
                                            Logger.debug("mNode ws serve disconnected with code " + code + ", reason " + reason);
                                            // 异常断开，开启重连，轮询多个订阅流媒体服务20分钟如果仍失败则放弃重连
                                            _this.curState !== exports.EConnectionState.RECONNECTING && _this._emitConnectionState(exports.EConnectionState.RECONNECTING, "SERVER_ERROR");
                                            break;
                                    }
                                    _this.clear();
                                };
                                resolve();
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        /**
         *
         *
         * @memberof MediaServer
         */
        RTMChannel.prototype.doKeepAlive = function () {
            var _this = this;
            // 发送保活信令
            var objMsg = {};
            objMsg.Cmd = "KeepAlive";
            objMsg.Encrypt = this._cmdEncrypt;
            objMsg.Content = JSON.stringify({
                time: Date.now().toString()
            });
            this.send(objMsg);
            // 主定时器 keepAlive超时，断开连接
            // 一次只生成一个定时器，如果在接下来的 20 内未收到 KeepALive 的 ASK，则释放连接（同时不监听任何消息回调）并进行重连
            !_this._keepAliveTimeout && (_this._keepAliveTimeout = setTimeout(function () {
                // 清除定时器
                _this._stopKeepAlive();
                _this._clearKeepALiveTimeout();
                // 断开连接并取消监听信令回调和 close 回调
                _this.clear();
                // 实际服务端已经将 ws 断开连接了，所有本地再次 close 无效，最终等个几秒才会收到 onclose
                _this._emitConnectionState(exports.EConnectionState.RECONNECTING, "KEEP_A_LIVE_TIME_OUT");
            }, 2 * _this._keepALiveIntervalTime));
        };
        /**
         * 上线
         *
         * @param {*} extendContent
         * @memberof MediaServer
         */
        RTMChannel.prototype.doOnline = function (extendContent) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                // 监听上线成功是否
                var handleOnlineResult = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                    var msgContent = JSON.parse(Content);
                    if (Cmd === "Login") {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handleOnlineResult);
                        var Code = msgContent.Code;
                        if (Code === 0) {
                            var UserId = msgContent.UserId;
                            _this._userId = UserId;
                            resolve(UserId);
                        }
                        else {
                            Logger.error("user online failure, code => ", Code);
                            reject(Code);
                        }
                    }
                };
                // 监听用户上线成功回调
                _this.addMessageEventListener(handleOnlineResult);
                var objMsg = {};
                objMsg.Cmd = "Login";
                objMsg.AppId = _this._appId;
                objMsg.Encrypt = _this._cmdEncrypt;
                var content = __assign({}, extendContent);
                // 逆向保活 - 服务端给客户端发送保活
                if (reverseKeepAlive) {
                    content.SvrKeepAlive = true;
                }
                objMsg.Content = JSON.stringify(content);
                _this.send(objMsg);
            });
        };
        /**
         * 上线
         *
         * @param {*} extendContent
         * @memberof MediaServer
         */
        RTMChannel.prototype.doOffline = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handleOffline = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                    var msgContent = JSON.parse(Content);
                    if (Cmd === "Logout") {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handleOffline);
                        var Code = msgContent.Code;
                        Code === 0 ? resolve(Code) : reject(Code);
                    }
                };
                // 监听用户上线成功回调
                _this.addMessageEventListener(handleOffline);
                var objMsg = {};
                objMsg.Cmd = "Logout";
                objMsg.Encrypt = _this._cmdEncrypt;
                objMsg.Content = "";
                _this.send(objMsg);
            });
        };
        /**
         * 加入频道
         *
         * @param {string} channelId
         * @memberof RtmServer
         */
        RTMChannel.prototype.doJoinChannel = function (channelId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var handleJoinChannelResult = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                    var msgContent = JSON.parse(Content);
                    if (Cmd === "JoinChannel") {
                        // 为了达到一次监听的效果，把监听事情移除
                        _this.removeMessageEventListener(handleJoinChannelResult);
                        var Code = msgContent.Code; msgContent.ChanId;
                        Code === 0 ? resolve() : reject(Code);
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handleJoinChannelResult);
                var objMsg = {};
                objMsg.Cmd = "JoinChannel";
                objMsg.Encrypt = _this._cmdEncrypt;
                objMsg.Content = JSON.stringify(Object.assign({
                    ChanId: channelId
                }));
                _this.send(objMsg);
            });
        };
        /**
         *
         *
         * @param {number} type
         * @param {string} channelId
         * @param {string} msgBody
         * @memberof RtmServer
         */
        RTMChannel.prototype.doSendChannelMsg = function (type, channelId, msgBody, saveAsHistory) {
            if (saveAsHistory === void 0) { saveAsHistory = false; }
            var _this = this;
            return new Promise(function (resolve, reject) {
                var msgId = randomNumber();
                var handleChannelMsgSendResult = function (_a) {
                    var data = _a.data;
                    var msgData = JSON.parse(data);
                    var Cmd = msgData.Cmd; msgData.Encrypt; var Content = msgData.Content;
                    var msgContent = JSON.parse(Content);
                    if (Cmd === "SendChannelMsg") {
                        var Code = msgContent.Code; msgContent.ChanId; var MsgId = msgContent.MsgId;
                        if (msgId === MsgId) {
                            // 为了达到一次监听的效果，把监听事情移除
                            _this.removeMessageEventListener(handleChannelMsgSendResult);
                            Code === 0 ? resolve() : reject(Code);
                        }
                    }
                };
                // 监听消息
                _this.addMessageEventListener(handleChannelMsgSendResult);
                var objMsg = {};
                objMsg.Cmd = "SendChannelMsg";
                objMsg.Encrypt = _this._cmdEncrypt;
                objMsg.Content = JSON.stringify(Object.assign({
                    ChanId: channelId,
                    FromUId: _this._userId,
                    MsgId: msgId,
                    MsgType: type,
                    MsgBody: msgBody,
                    HistoryMsg: saveAsHistory,
                    Desc: "",
                }));
                _this.send(objMsg);
            });
        };
        /**
         * 断开WS连接
         *
         * @memberof ArServe
         */
        RTMChannel.prototype.disconnectServer = function (reason) {
            var _this = this;
            _this._stopKeepAlive();
            _this._clearKeepALiveTimeout();
            _this.clear();
            if (reason) {
                switch (reason) {
                    case "UID_BANNED":
                    case "TOKEN_INVALID":
                    case "FORCE_OFFLINE":
                        _this._emitConnectionState(exports.EConnectionState.DISCONNECTED, reason);
                        break;
                }
            }
            else {
                _this._emitConnectionState(exports.EConnectionState.DISCONNECTED, "LEAVE");
            }
        };
        /**
         * 清除监听事件
         *
         * @memberof ArServe
         */
        RTMChannel.prototype.clearEventEmitter = function () {
            var _this = this;
            _this.removeAllListeners(); // eventEmitter
        };
        /**
         *
         *
         * @private
         * @memberof MediaServer
         */
        RTMChannel.prototype._setConnectTimeout = function () {
            var _this = this;
            _this._clearConnectTimeout();
            _this._connectTimeout = window.setTimeout(function () {
                _this._emitConnectionState("DISCONNECTING", "NETWORK_ERROR");
            }, 10e3);
        };
        /**
         * 10s 保活一次
         *
         * @private
         * @memberof MediaServer
         */
        RTMChannel.prototype._startKeepAlive = function () {
            var _this = this;
            _this._stopKeepAlive();
            // 先发送一次
            _this.doKeepAlive();
            // 创建定时器，10 秒发送一次保活
            _this._keepALiveInterval = setInterval(function () {
                // 发送保活信令
                _this.doKeepAlive();
            }, _this._keepALiveIntervalTime);
        };
        /**
         *
         *
         * @private
         * @memberof MediaServer
         */
        RTMChannel.prototype._stopKeepAlive = function () {
            var _this = this;
            _this._keepALiveInterval && clearInterval(_this._keepALiveInterval);
        };
        /**
         *
         *
         * @private
         * @memberof MediaServer
         */
        RTMChannel.prototype._clearConnectTimeout = function () {
            var _this = this;
            _this._connectTimeout && clearTimeout(_this._connectTimeout);
        };
        /**
         *
         *
         * @memberof MediaServer
         */
        RTMChannel.prototype._clearKeepALiveTimeout = function () {
            var _this = this;
            if (_this._keepAliveTimeout) {
                clearTimeout(_this._keepAliveTimeout);
                _this._keepAliveTimeout = 0;
            }
        };
        /**
         *
         * @param curState
         * @param revState
         * @param reason
         */
        RTMChannel.prototype._emitConnectionState = function (curState, reason) {
            if (curState === exports.EConnectionState.DISCONNECTED) {
                Logger.debug("[signal] mNode websocket closed, reason: " + reason);
            }
            this.revState = this.curState;
            this.curState = curState;
            this.handleMediaServerEvents && this.handleMediaServerEvents("connection-state-change", {
                curState: this.curState,
                revState: this.revState,
                reason: reason
            });
        };
        return RTMChannel;
    }(SignalChannel));

    /**
     * 单队列
     * 先进先出（FIFO：first in first out）。
     * 1. 参考连接 https://www.jb51.net/article/182143.htm
     *
     * 后期需要可以添加 互斥锁
     * @class Queue
     * @template T
     * @hidden
     */
    var Queue = /** @class */ (function () {
        function Queue(maxNum) {
            // 队列列表
            this.queues = [];
            // 队列最大存放的数量
            this.maxNumber = Infinity;
            maxNum && (this.maxNumber = maxNum);
        }
        /**
         * 添加元素到队列
         * 向队列尾部添加一个（或多个）新的项
         * 元素可以是执行函数或者数据
         * @param {(T | T[])} task
         */
        Queue.prototype.add = function (task) {
            var e_1, _a;
            var tasks = [];
            if (Array.isArray(task)) {
                tasks = task;
            }
            else {
                tasks.push(task);
            }
            try {
                // 任务入队
                for (var tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                    var taskItem = tasks_1_1.value;
                    if (this.size + 1 > this.maxNumber)
                        break;
                    this.queues.push(taskItem);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * 删除队列的第一个元素
         *
         */
        Queue.prototype.dequeue = function () {
            this.queues.length > 0 && this.queues.shift();
        };
        /**
         * 返回队列中第一个任务
         *
         */
        Queue.prototype.front = function () {
            return this.queues.length > 0 ? this.queues[0] : void 0;
        };
        /**
         * 清除所有队列
         *
         */
        Queue.prototype.clear = function () {
            this.queues = [];
        };
        Object.defineProperty(Queue.prototype, "isEmpty", {
            /**
             * 队列为空
             *
             * @return {boolean}
             */
            get: function () {
                return this.queues.length === 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Queue.prototype, "size", {
            /**
             * 返回队列的任务数量
             *
             * @return {number}
             */
            get: function () {
                return this.queues.length;
            },
            enumerable: false,
            configurable: true
        });
        return Queue;
    }());

    /**
     * 融合服务
     *
     * 包括：白板服务、RTM 服务
     *
     * @class FusionServer
     */
    var FusionServer = /** @class */ (function (_super) {
        __extends(FusionServer, _super);
        function FusionServer(appId, uId, channel, token) {
            var _this = _super.call(this) || this;
            // APP_ID
            _this._appId = '';
            _this._uId = '';
            _this._channel = '';
            _this._token = '';
            // 实时信令传输 - 实时通信 SignalClient RTMChannel
            _this._rtmSignal = void 0;
            // 白板服务 - 存储服务
            _this._boardSignal = void 0;
            _this._connectState = exports.EConnectionState.DISCONNECTED;
            // 上报
            _this._reportBoardDataTimer = void 0;
            _this._reportItem = undefined;
            _this._reportQueue = new Queue();
            _this._reportLts = 0;
            _this._appId = appId;
            _this._uId = uId;
            _this._channel = channel;
            _this._token = token;
            _this._gateWay = new GateWay();
            return _this;
        }
        Object.defineProperty(FusionServer.prototype, "connectState", {
            // private _reUploadData: Array<ReportQueueData["data"]> = [];
            get: function () {
                return this._connectState;
            },
            enumerable: false,
            configurable: true
        });
        /**
         *
         *
         */
        FusionServer.prototype.connectServer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var gatewayUrl, _a, authGateWayError, data, code, accessToken, addresses, boardAddr, sessionid, connectBoardServer, boardAddr_1, boardAddr_1_1, addrInfo, addr, port, wss, _b, err, e_1_1, connectRTMServer, addresses_1, addresses_1_1, addrInfo, addr, port, wss, _c, err, e_2_1;
                var e_1, _d, e_2, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            if (this._connectState !== exports.EConnectionState.RECONNECTING) {
                                this._connectState = exports.EConnectionState.CONNECTING;
                            }
                            gatewayUrl = new URL(Config.GATEWAY_ADDRESS);
                            return [4 /*yield*/, to(this._gateWay.joinGateway({
                                    appId: this._appId,
                                    uid: this._uId,
                                    cname: this._channel,
                                    token: this._token,
                                    cType: 0,
                                    wss: gatewayUrl.protocol === 'https:',
                                }))];
                        case 1:
                            _a = __read.apply(void 0, [_f.sent(), 2]), authGateWayError = _a[0], data = _a[1];
                            if (authGateWayError) {
                                return [2 /*return*/, Promise.reject(authGateWayError)];
                            }
                            code = data.code, accessToken = data.accessToken, addresses = data.addresses, boardAddr = data.boardAddr, sessionid = data.sessionid;
                            if (!(code === 0)) return [3 /*break*/, 19];
                            // 初始化 board websocket 客户端
                            this._boardSignal = new BoardChannel({ appId: this._appId });
                            // 监听画板的回调
                            this._boardSignal.handleMediaServerEvents = this._handleBoardServerEvents.bind(this);
                            // 初始化 rtm websocket 客户端
                            this._rtmSignal = new RTMChannel({ appId: this._appId });
                            // 监听画板的回调
                            this._rtmSignal.handleMediaServerEvents = this._handleRTMServerEvent.bind(this);
                            if (!(boardAddr.length > 0 && addresses.length > 0)) return [3 /*break*/, 18];
                            connectBoardServer = false;
                            _f.label = 2;
                        case 2:
                            _f.trys.push([2, 7, 8, 9]);
                            boardAddr_1 = __values(boardAddr), boardAddr_1_1 = boardAddr_1.next();
                            _f.label = 3;
                        case 3:
                            if (!!boardAddr_1_1.done) return [3 /*break*/, 6];
                            addrInfo = boardAddr_1_1.value;
                            addr = addrInfo.addr, port = addrInfo.port, wss = addrInfo.wss;
                            return [4 /*yield*/, to(this._connectBoardServer(wss, addr, port, accessToken))];
                        case 4:
                            _b = __read.apply(void 0, [_f.sent(), 2]), err = _b[0];
                            if (!err) {
                                connectBoardServer = true;
                                return [3 /*break*/, 6];
                            }
                            _f.label = 5;
                        case 5:
                            boardAddr_1_1 = boardAddr_1.next();
                            return [3 /*break*/, 3];
                        case 6: return [3 /*break*/, 9];
                        case 7:
                            e_1_1 = _f.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 9];
                        case 8:
                            try {
                                if (boardAddr_1_1 && !boardAddr_1_1.done && (_d = boardAddr_1.return)) _d.call(boardAddr_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 9:
                            // 如果一个都没有连接上，则需要重新走网关
                            if (!connectBoardServer) {
                                Logger.info('服务连接断开，准备重连中....');
                                this._connectState = exports.EConnectionState.RECONNECTING;
                                this.reconnectServer('BOARD_SERVER_ERROR');
                                // 缺少服务节点或者均连接失败
                                return [2 /*return*/, Promise.reject(new ArWhiteBoardError(InternalErrorCode.GATEWAY_SERVER_ERROR, 'connect bNode failed'))];
                            }
                            connectRTMServer = false;
                            _f.label = 10;
                        case 10:
                            _f.trys.push([10, 15, 16, 17]);
                            addresses_1 = __values(addresses), addresses_1_1 = addresses_1.next();
                            _f.label = 11;
                        case 11:
                            if (!!addresses_1_1.done) return [3 /*break*/, 14];
                            addrInfo = addresses_1_1.value;
                            addr = addrInfo.addr, port = addrInfo.port, wss = addrInfo.wss;
                            return [4 /*yield*/, to(this._connectRTMServer(wss, addr, port, sessionid, accessToken))];
                        case 12:
                            _c = __read.apply(void 0, [_f.sent(), 2]), err = _c[0];
                            if (!err) {
                                connectRTMServer = true;
                                return [3 /*break*/, 14];
                            }
                            _f.label = 13;
                        case 13:
                            addresses_1_1 = addresses_1.next();
                            return [3 /*break*/, 11];
                        case 14: return [3 /*break*/, 17];
                        case 15:
                            e_2_1 = _f.sent();
                            e_2 = { error: e_2_1 };
                            return [3 /*break*/, 17];
                        case 16:
                            try {
                                if (addresses_1_1 && !addresses_1_1.done && (_e = addresses_1.return)) _e.call(addresses_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                            return [7 /*endfinally*/];
                        case 17:
                            // 如果一个都没有连接上，则需要重新走网关
                            if (!connectRTMServer) {
                                // 所有服务都已经尝试，可以放弃治疗
                                Logger.info('服务连接断开，准备重连中....');
                                this._connectState = exports.EConnectionState.RECONNECTING;
                                this.reconnectServer('RTM_SERVER_ERROR');
                                // 缺少 RTM 服务节点或者均连接失败
                                return [2 /*return*/, Promise.reject(new ArWhiteBoardError(InternalErrorCode.GATEWAY_SERVER_ERROR, 'connect mNode failed'))];
                            }
                            this._connectState = exports.EConnectionState.CONNECTED;
                            this.emit(EventNames.CONNECTION_STATE_CHANGE, this._connectState, '');
                            Logger.info("auth gateway success. begin get channel info...");
                            // 获取数据，RTM 下发，进行同步
                            this._boardSignal.doGetChannelInfo();
                            return [3 /*break*/, 19];
                        case 18: 
                        // 缺少服务节点
                        return [2 /*return*/, Promise.reject(new ArWhiteBoardError(InternalErrorCode.CAN_NOT_GET_GATEWAY_SERVER))];
                        case 19: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         *
         *
         */
        FusionServer.prototype.disconnectServer = function (reason) {
            var _a, _b;
            this._connectState = exports.EConnectionState.DISCONNECTING;
            (_a = this._boardSignal) === null || _a === void 0 ? void 0 : _a.disconnectServer(reason);
            (_b = this._rtmSignal) === null || _b === void 0 ? void 0 : _b.disconnectServer(reason);
            this._boardSignal.handleMediaServerEvents = function () { };
            this._rtmSignal.handleMediaServerEvents = function () { };
            this._boardSignal = void 0;
            this._rtmSignal = void 0;
            this._reportItem = void 0;
            this._connectState = exports.EConnectionState.DISCONNECTED;
            this.emit(EventNames.CONNECTION_STATE_CHANGE, this._connectState, reason || '');
        };
        /**
         *
         *
         */
        FusionServer.prototype.reconnectServer = function (reason) {
            var _this = this;
            var _a, _b;
            this._connectState = exports.EConnectionState.RECONNECTING;
            (_a = this._boardSignal) === null || _a === void 0 ? void 0 : _a.disconnectServer(reason);
            (_b = this._rtmSignal) === null || _b === void 0 ? void 0 : _b.disconnectServer(reason);
            this._boardSignal.handleMediaServerEvents = function () { };
            this._rtmSignal.handleMediaServerEvents = function () { };
            this._boardSignal = void 0;
            this._rtmSignal = void 0;
            this._reportItem = void 0;
            // 重连
            setTimeout(function () {
                _this.emit(EventNames.CONNECTION_STATE_CHANGE, _this._connectState, reason);
                Logger.debug('reconnect server... ');
                _this.connectServer();
            }, 6e3);
        };
        FusionServer.prototype.report = function (data) {
            this._reportQueue.add(data);
            this._checkAndAutoStartQueue();
        };
        /**
         * 开始监听消息队列
         *
         * @private
         */
        FusionServer.prototype._checkAndAutoStartQueue = function () {
            if (!this._reportBoardDataTimer && this._reportQueue.size > 0) {
                this._reportBoardDataTimer = requestAnimationFrame(this._reportBoardData.bind(this));
            }
        };
        /**
         * FIFO 队列上报
         *
         * @private
         * @param timestamp
         */
        FusionServer.prototype._reportBoardData = function (timestamp) {
            return __awaiter(this, void 0, void 0, function () {
                var firstItem, type, data, rts, callback, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this._connectState === exports.EConnectionState.CONNECTED)) return [3 /*break*/, 29];
                            if (!(this._reportQueue.size > 0)) return [3 /*break*/, 28];
                            firstItem = this._reportQueue.front();
                            if (!(this._reportItem !== firstItem)) return [3 /*break*/, 27];
                            this._reportItem = firstItem;
                            type = firstItem.type, data = firstItem.data, rts = firstItem.rts, callback = firstItem.callback;
                            result = [];
                            if (!(type === BoardEventType.ADD_FILE)) return [3 /*break*/, 2];
                            return [4 /*yield*/, to(this._boardSignal.doAddFile(data, rts))];
                        case 1:
                            result = _a.sent();
                            return [3 /*break*/, 26];
                        case 2:
                            if (!(type === BoardEventType.ADD_SHAPE)) return [3 /*break*/, 4];
                            return [4 /*yield*/, to(this._boardSignal.doAddShape(data, rts))];
                        case 3:
                            result = _a.sent();
                            return [3 /*break*/, 26];
                        case 4:
                            if (!(type === BoardEventType.MOVE_SHAPE)) return [3 /*break*/, 6];
                            return [4 /*yield*/, to(this._boardSignal.doMoveShape(data, rts))];
                        case 5:
                            result = _a.sent();
                            return [3 /*break*/, 26];
                        case 6:
                            if (!(type === BoardEventType.DELETE_SHAPE)) return [3 /*break*/, 8];
                            return [4 /*yield*/, to(this._boardSignal.doDeleteShape(data, rts))];
                        case 7:
                            result = _a.sent();
                            return [3 /*break*/, 26];
                        case 8:
                            if (!(type === BoardEventType.ADD_BOARD)) return [3 /*break*/, 10];
                            return [4 /*yield*/, to(this._boardSignal.doAddBoard(data, rts))];
                        case 9:
                            result = _a.sent();
                            if (!result[0]) {
                                callback && callback();
                            }
                            return [3 /*break*/, 26];
                        case 10:
                            if (!(type === BoardEventType.DELETE_BOARD)) return [3 /*break*/, 12];
                            return [4 /*yield*/, to(this._boardSignal.doDeleteBoard(data, rts))];
                        case 11:
                            result = _a.sent();
                            if (!result[0]) {
                                callback && callback();
                            }
                            return [3 /*break*/, 26];
                        case 12:
                            if (!(type === BoardEventType.SWITCH_BOARD)) return [3 /*break*/, 14];
                            return [4 /*yield*/, to(this._boardSignal.doSwitchBoard(data, rts))];
                        case 13:
                            result = _a.sent();
                            if (!result[0]) {
                                callback && callback();
                            }
                            return [3 /*break*/, 26];
                        case 14:
                            if (!(type === BoardEventType.SCALE_BOARD)) return [3 /*break*/, 16];
                            return [4 /*yield*/, to(this._boardSignal.doScaleBoard(data, rts))];
                        case 15:
                            result = _a.sent();
                            if (!result[0]) {
                                callback && callback();
                            }
                            return [3 /*break*/, 26];
                        case 16:
                            if (!(type === BoardEventType.RATIO_BOARD)) return [3 /*break*/, 18];
                            return [4 /*yield*/, to(this._boardSignal.doSetBoardRatio(data, rts))];
                        case 17:
                            result = _a.sent();
                            if (!result[0]) {
                                callback && callback();
                            }
                            return [3 /*break*/, 26];
                        case 18:
                            if (!(type === BoardEventType.CLEAR_BOARD)) return [3 /*break*/, 20];
                            return [4 /*yield*/, to(this._boardSignal.doClearBoard(data, rts))];
                        case 19:
                            result = _a.sent();
                            if (!result[0]) ;
                            return [3 /*break*/, 26];
                        case 20:
                            if (!(type === BoardEventType.RESET_BOARD)) return [3 /*break*/, 22];
                            return [4 /*yield*/, to(this._boardSignal.doResetBoard(rts))];
                        case 21:
                            result = _a.sent();
                            if (!result[0]) {
                                callback && callback();
                            }
                            return [3 /*break*/, 26];
                        case 22:
                            if (!(type === BoardEventType.UPDATE_BACKGROUND)) return [3 /*break*/, 24];
                            return [4 /*yield*/, to(this._boardSignal.doUpdateBoardBackgroundColor(data, rts))];
                        case 23:
                            result = _a.sent();
                            if (!result[0]) {
                                callback && callback();
                            }
                            return [3 /*break*/, 26];
                        case 24:
                            if (!(type === BoardEventType.UPDATE_BACKGROUND_IMAGE)) return [3 /*break*/, 26];
                            return [4 /*yield*/, to(this._boardSignal.doUpdateBoardBackgroundImage(data))];
                        case 25:
                            result = _a.sent();
                            if (!result[0]) {
                                callback && callback();
                            }
                            _a.label = 26;
                        case 26:
                            // 发送成功，再发送下一条
                            if (!result[0]) {
                                this._reportQueue.dequeue();
                            }
                            _a.label = 27;
                        case 27:
                            this._reportLts = timestamp;
                            return [3 /*break*/, 29];
                        case 28:
                            // 大于三秒没有新的数据上报就关闭动画监听
                            if (timestamp - this._reportLts > 3e3) {
                                cancelAnimationFrame(this._reportBoardDataTimer);
                                this._reportBoardDataTimer = void 0;
                                this._reportItem = void 0;
                                this._reportLts = 0;
                                return [2 /*return*/];
                            }
                            _a.label = 29;
                        case 29:
                            requestAnimationFrame(this._reportBoardData.bind(this));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 监听白板服务链接状态
         *
         * @private
         * @param cmd
         * @param msgContent
         */
        FusionServer.prototype._handleBoardServerEvents = function (cmd, msgContent) {
            // 监听连接状态
            if (cmd === 'connection-state-change') {
                var curState = msgContent.curState, reason = msgContent.reason; msgContent.revState;
                Logger.debug('board connection-state-change ', curState);
                // 断线重练处理
                if (curState === exports.EConnectionState.RECONNECTING) {
                    // 清空数据 && 重连
                    if (this._connectState !== exports.EConnectionState.RECONNECTING) {
                        if (this._reportBoardDataTimer) {
                            this._reportQueue.clear();
                            this._reportItem = void 0;
                            cancelAnimationFrame(this._reportBoardDataTimer);
                        }
                        this.reconnectServer(reason);
                    }
                }
            }
            else {
                this.emit(cmd, msgContent);
            }
        };
        /**
         * 监听 RTM 链接状态以及实时消息
         *
         * @private
         * @param cmd
         * @param msgContent
         */
        FusionServer.prototype._handleRTMServerEvent = function (cmd, msgContent) {
            // 监听连接状态
            if (cmd === 'connection-state-change') {
                var curState = msgContent.curState, reason = msgContent.reason; msgContent.revState;
                Logger.debug('rtm connection-state-change ', curState);
                // 断线重练处理
                if (curState === exports.EConnectionState.RECONNECTING) {
                    // 清空数据 && 重连
                    if (this._connectState !== exports.EConnectionState.RECONNECTING) {
                        if (this._reportBoardDataTimer) {
                            this._reportQueue.clear();
                            this._reportItem = void 0;
                            cancelAnimationFrame(this._reportBoardDataTimer);
                        }
                        this.reconnectServer(reason);
                    }
                }
            }
            else if (cmd === 'ForceOffline') {
                if (this._reportBoardDataTimer) {
                    this._reportQueue.clear();
                    this._reportItem = void 0;
                    cancelAnimationFrame(this._reportBoardDataTimer);
                }
                this.disconnectServer('FORCE_OFFLINE');
            }
            else {
                this.emit(cmd, msgContent);
            }
        };
        /**
         * 连接白板服务
         *
         * @private
         * @param {boolean} wss
         * @param {string} addr
         * @param {number} port
         */
        FusionServer.prototype._connectBoardServer = function (wss, addr, port, token) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this._boardSignal.configServer(wss, addr, port);
                    //
                    if (this._connectState === exports.EConnectionState.CONNECTING || this._connectState === exports.EConnectionState.RECONNECTING) {
                        // 连接白板服务
                        return [2 /*return*/, this._boardSignal.connectServer(this._channel, this._uId, token)];
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * 连接 RTM 服务
         * 传输实时信息，同步操作
         * @private
         * @param {boolean} wss
         * @param {string} addr
         * @param {number} port
         * @param {string} sessionid
         */
        FusionServer.prototype._connectRTMServer = function (wss, addr, port, sessionid, token) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._rtmSignal.configServer(wss, addr, port);
                            return [4 /*yield*/, this._rtmSignal.connectServer()
                                    .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var content;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                content = {
                                                    UserId: this._uId,
                                                    UserSId: '',
                                                    AcsToken: token,
                                                    SdkVer: '',
                                                    SessionId: sessionid
                                                };
                                                return [4 /*yield*/, this._rtmSignal.doOnline(content)];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); })
                                    .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this._rtmSignal.doJoinChannel(this._channel)];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); })];
                        case 1: 
                        // 连接白板服务
                        return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return FusionServer;
    }(EventEmitter));

    /**
     * 校验颜色是否合法
     *
     * - 十六进制。如#FF0000、#00FF00、#0000FF、#000等。
     * - hls。如hsl(0, 100%, 50%)表示红色。
     * - hlsa。如hsla(0, 100%, 50%, 0.5)表示半透明的红色。
     * - rgb。如rgb(255, 0, 0)表示红色。
     * - rgba。如rgba(255, 0, 0, 0.5)表示半透明的红色。
     * - transparent。透明颜色。
     *
     * @export
     * @param {string} color
     * @returns {*}  {boolean}
     */
    function isValidColor(color) {
        var colorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$|^rgb\(\s*(\d+%?)\s*,\s*(\d+%?)\s*,\s*(\d+%?)\s*\)$|^rgba\(\s*(\d+%?)\s*,\s*(\d+%?)\s*,\s*(\d+%?)\s*,\s*(0|1|0?\.\d+)\s*\)$|^hsl\(\s*(\d+)\s*,\s*(\d+%?)\s*,\s*(\d+%?)\s*\)$|^hsla\(\s*(\d+)\s*,\s*(\d+%?)\s*,\s*(\d+%?)\s*,\s*(0|1|0?\.\d+)\s*\)$|^transparent$/i;
        var colorStr = color.trim();
        // 正则无法检测 red、yellow、pink 这种颜色值，因此需要使用一些特殊手段
        if (!colorRegex.test(colorStr)) {
            var tempElem = document.createElement("div");
            tempElem.style.color = colorStr;
            return tempElem.style.color !== "";
        }
        else {
            return true;
        }
    }

    /**
     * 背景图片加载状态
     *
     * @export
     * @enum {number}
     */
    exports.EBoardImageStatus = void 0;
    (function (EBoardImageStatus) {
        /**
         * 图片正在加载
         */
        EBoardImageStatus[EBoardImageStatus["BOARD_IMAGE_STATUS_LOADING"] = 1] = "BOARD_IMAGE_STATUS_LOADING";
        /**
         * 图片加载完成
         */
        EBoardImageStatus[EBoardImageStatus["BOARD_IMAGE_STATUS_LOAD_DONE"] = 2] = "BOARD_IMAGE_STATUS_LOAD_DONE";
        /**
         * 图片加载中断
         */
        EBoardImageStatus[EBoardImageStatus["BOARD_IMAGE_STATUS_LOAD_ABORT"] = 3] = "BOARD_IMAGE_STATUS_LOAD_ABORT";
        /**
         * 图片加载错误。监听到此错误码时，需要重新调用接口设置
         */
        EBoardImageStatus[EBoardImageStatus["BOARD_IMAGE_STATUS_LOAD_ERROR"] = 4] = "BOARD_IMAGE_STATUS_LOAD_ERROR";
        /**
         * 图片加载超时。监听到此错误码时，需要重新调用接口设置
         */
        EBoardImageStatus[EBoardImageStatus["BOARD_IMAGE_STATUS_LOAD_TIMEOUT"] = 5] = "BOARD_IMAGE_STATUS_LOAD_TIMEOUT";
        /**
         * 图片取消加载
         */
        EBoardImageStatus[EBoardImageStatus["BOARD_IMAGE_STATUS_LOAD_CANCEL"] = 6] = "BOARD_IMAGE_STATUS_LOAD_CANCEL";
    })(exports.EBoardImageStatus || (exports.EBoardImageStatus = {}));

    var defaultInitBoardParams = {
        id: "",
        channel: "",
        appId: "",
        userId: "",
        token: "",
        baseParams: {
            // 在没有设置白板页的 ratio 属性之前各个端均使用默认宽高比例
            ratio: '16:9',
            scale: 100,
            toolType: exports.EBoardToolType.FREE_DRAW,
            progressBarUrl: Config.LOADING_ICON,
            imageResourceTimeout: Config.BOARD_IMAGE_RESOURCE_TIMEOUT,
        },
        styleParams: {
            textStyle: exports.EBoardTextStyle.NORMAL,
            textSize: 16,
            textColor: '#333333',
            brushColor: '#333333',
            brushThin: 5,
            globalBackgroundColor: Config.BOARD_BACKGROUND_COLOR,
            selectBoxColor: Config.BOARD_SELECT_STYLE.strokeStyle,
        },
        authParams: {
            drawEnable: true,
            progressEnable: false,
        }
    };
    /**
     * 白板构造函数
     *
     * 通过创建的白板实例可以进行图形绘制、增删白板页、更换背景等操作。
     */
    var ArWhiteBoard = /** @class */ (function (_super) {
        __extends(ArWhiteBoard, _super); /*implements IArWhiteBoard*/
        /**
         * Creates an instance of ArBoard.
         * @param {IArBoardInitParams} initParams - 自定义配置
         * @hidden
         */
        function ArWhiteBoard(initParams) {
            var _this_1 = _super.call(this) || this;
            /**
             * 用户 ID
             * @internal
             */
            _this_1.uid = '';
            /**
             *
             * @private
             * @internal
             */
            _this_1._appid = '';
            _this_1._channel = '';
            _this_1._token = '';
            // 当前文件 ID
            _this_1._fileId = '#DEFAULT';
            // 白板下的文件列表信息：分页、画板 ID 列表
            _this_1._fileList = new Map();
            // 当前画板 ID
            _this_1._boardId = '';
            // 所有文件的画板信息 fileId 对应 N 页画板数据、保存（或缓存）白板（频道）的所有文件信息（包含分页的画笔、背景等）
            _this_1._fileBoardData = new Map();
            // 页码
            _this_1._curMaxBoardPage = 1; // 切文件、第一获取的时候，需要重置
            // 用户配置相关
            _this_1._renderFrameRate = 5; // 1秒显示5帧
            _this_1._initConfig = defaultInitBoardParams;
            _this_1._fusionServer = void 0;
            var id = initParams.id, channel = initParams.channel, appId = initParams.appId, userId = initParams.userId, token = initParams.token, baseParams = initParams.baseParams, styleParams = initParams.styleParams, serverParams = initParams.serverParams, authParams = initParams.authParams;
            if (typeof id !== "string" || id.length === 0) {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'id must be string.');
            }
            if (typeof appId === "string" && appId.length > 0) {
                _this_1._appid = appId;
            }
            else {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'appId is invalid.');
            }
            if (typeof channel === "string" && channel.length > 0) {
                _this_1._channel = channel;
            }
            else {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'channel must be string.');
            }
            if (typeof userId === "string" && userId.length > 0) {
                _this_1.uid = userId;
            }
            else {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'userId must be string.');
            }
            if (token) {
                if (typeof token === "string") {
                    _this_1._token = token || "";
                }
                else {
                    throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'token must be string.');
                }
            }
            var mergeBaseParams = __assign(__assign({}, defaultInitBoardParams.baseParams), baseParams);
            var mergeStyleParams = __assign(__assign({}, defaultInitBoardParams.styleParams), styleParams);
            var mergeAuthParams = __assign(__assign({}, defaultInitBoardParams.authParams), authParams);
            // const initConfig: IArBoardInitParams = {
            //   id,
            //   channel,
            //   appId,
            //   userId,
            //   token,
            //   baseParams: defaultBaseParams,
            //   styleParams: defaultStyleParams,
            //   // authParams: defaultAuthParams,
            // };
            // 检测参数的合法性
            // const { baseParams, styleParams, /* authParams */ } = initConfig;
            // if (mergeBaseParams && '{}' === JSON.stringify(mergeBaseParams)) {
            //   const { /*ratio,*/ scale } = mergeBaseParams;
            //   // if (typeof ratio !== "string") {
            //   //   initConfig.baseParams!.ratio = '16:9';
            //   // }
            //   if (scale && typeof scale !== "number" && scale < 100) {
            //     mergeBaseParams!.scale = 100;
            //   }
            // }
            if (serverParams && '{}' !== JSON.stringify(serverParams)) {
                _this_1._setParameters(serverParams);
            }
            // 配置
            _this_1._initConfig = __assign(__assign({}, initParams), { baseParams: mergeBaseParams, styleParams: mergeStyleParams, authParams: mergeAuthParams });
            // 初始化画板
            _this_1._initPainter(id, _this_1._initConfig);
            // 加入房间
            _this_1._joinChannel();
            return _this_1;
        }
        Object.defineProperty(ArWhiteBoard.prototype, "_currentBoardPage", {
            // tslint:disable-next-line: adjacent-overload-signatures
            get: function () {
                var currentFileInfo = this._fileList.get(this._fileId);
                return currentFileInfo ? currentFileInfo.currentPageIndex : 1;
            },
            set: function (value) {
                var currentFileInfo = this._fileList.get(this._fileId);
                if (currentFileInfo) {
                    currentFileInfo.currentPageIndex = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArWhiteBoard.prototype, "_totalBoardCount", {
            // tslint:disable-next-line: adjacent-overload-signatures
            get: function () {
                var currentFileInfo = this._fileList.get(this._fileId);
                return currentFileInfo ? currentFileInfo.totalPageCount : 1;
            },
            set: function (value) {
                var currentFileInfo = this._fileList.get(this._fileId);
                if (currentFileInfo) {
                    currentFileInfo.totalPageCount = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        // ---------------------------- Events
        /**
         * 添加白板页
         *
         * @note 本地添加或者远端添加都通知
         * @param {string[]} boardIds - 白板页 ID 列表。
         * @param {string} fileId - 白板的文件 ID，默认为 `#DEFAULT`
         * @event
         */
        ArWhiteBoard.prototype[EventNames.ADD_BOARD] = function (fileId, boardIds) { };
        /**
         * 删除白板页
         *
         * @note 本地或者远操作都通知
         * @param {string[]} boardIds - 白板页 ID 列表。
         * @param {string} fileId - 白板的文件 ID，默认为 `#DEFAULT`。
         * @event
         */
        ArWhiteBoard.prototype[EventNames.DELETE_BOARD] = function (fileId, boardIds) { };
        /**
         * 白板页切换
         *
         * @note 本地或者远操作都通知
         * @param {string} fileId - 跳转到的白板页所属的文件 ID
         * @param {string} boardId - 跳转到的白板页 ID
         * @event
         */
        ArWhiteBoard.prototype[EventNames.GOTO_BOARD] = function (fileId, boardId) { };
        /**
         * 当前白板页缩放比例变化
         *
         * @note 本地或者远操作都通知
         * @param {string} boardId - 缩放变化的白板页 ID
         * @param {number} scale - 缩放比例
         * @event
         */
        ArWhiteBoard.prototype[EventNames.SCALE_BOARD] = function (boardId, scale) { };
        /**
         * 当前白板页宽高比例变化
         *
         * @note 本地或者远操作都通知
         * @param {string} boardId - 宽高变化的白板页 ID
         * @param {number} ratio - 宽高比例
         * @event
         */
        ArWhiteBoard.prototype[EventNames.RATIO_BOARD] = function (boardId, ratio) { };
        /**
         * 当前白板页是否可撤销
         *
         * @param {boolean} enable
         * 是否可执行 {@link undo} 操作的标识。
         * - `true` 则表示可以执行 `undo` 操作
         * - `false` 则表示不可以执行 `undo` 操作。
         * @event
         */
        ArWhiteBoard.prototype[EventNames.CAN_UNDO_STATUS_CHANGE] = function (enable) { };
        /**
         * 当前白板页是否可重做
         *
         * @param {boolean} enable
         * 是否可执行 {@link redo} 操作的标识。
         * - `true` 则表示可以执行 `redo` 操作
         * - `false` 则表示不可以执行 `redo` 操作。
         * @event
         */
        ArWhiteBoard.prototype[EventNames.CAN_REDO_STATUS_CHANGE] = function (enable) { };
        /**
         * 网络状态回调
         *
         * @param {EConnectionState} authState 当前的网络连接状态
         * @param {string} reason 触发当前网络连接状态的原因
         * @event
         */
        ArWhiteBoard.prototype[EventNames.CONNECTION_STATE_CHANGE] = function (authState, reason) { };
        /**
         * 白板背景颜色改变回调
         *
         * @param fileId - 文件 ID
         * @param boardId - 白板页 ID
         * @param color - 背景颜色
         * @event
         */
        ArWhiteBoard.prototype[EventNames.BOARD_BACKGROUND_COLOR_CHANGE] = function (fileId, boardId, color) { };
        /**
         * 白板背景图片加载状态回调
         *
         * @param status - 加载状态
         * @param boardId - 白板页 ID
         * @param color - 背景颜色
         * @event
         */
        ArWhiteBoard.prototype[EventNames.IMAGE_STATUS_CHANGED] = function (fileId, boardId, status, data) { };
        /**
         * 清空白板回调
         *
         * @note 远程用户清除才会回调
         * @param fileId - 文件 ID
         * @param boardId - 白板页 ID
         * @event
         */
        ArWhiteBoard.prototype[EventNames.CLEAR_BOARD] = function (fileId, boardId, clearBackground) { };
        /**
         * 清空白板回调
         *
         * @note 远程用户清除才会回调
         * @event
         */
        ArWhiteBoard.prototype[EventNames.RESET_BOARD] = function () { };
        /**
         * 白板错误回调
         *
         * @param {ArWhiteBoardError} err
         * @event
         */
        ArWhiteBoard.prototype[EventNames.ERROR] = function (errorCode, errorMessage) { };
        /**
         * 白板警告回调
         *
         * @param {ArWhiteBoardError} err
         * @event
         */
        ArWhiteBoard.prototype[EventNames.WARNING] = function (errorCode, errorMessage) { };
        // ---------------------------- 其他
        /**
         * 获取 SDK 版本
         *
         * @return {string}
         */
        ArWhiteBoard.prototype.getVersion = function () {
            return Config.SDK_VERSION;
        };
        ArWhiteBoard.prototype.destroy = function () {
            this._leaveChannel();
        };
        /**
         * 自定义配置
         *
         * 配置私有服务，例如网关地址等。
         * @param {IConfigParameters} options
         */
        ArWhiteBoard.prototype._setParameters = function (options) {
            var ConfPriCloudAddr = options.ConfPriCloudAddr, ConfPriCloudAddr1 = options.ConfPriCloudAddr1;
            Logger.debug("set parameters config as " + JSON.stringify(options));
            // 配置私有云服务
            if (ConfPriCloudAddr) {
                // 私有云默认HTTPS，公网也是默认HTTPS
                var ServerAdd = ConfPriCloudAddr.ServerAdd, Port = ConfPriCloudAddr.Port, Wss = ConfPriCloudAddr.Wss;
                var useWss = true;
                // 是否使用wss
                if ("boolean" === typeof Wss) {
                    useWss = Wss;
                }
                if (Config.GATEWAY_ADDRESS_SSL !== useWss) {
                    Config.GATEWAY_ADDRESS_SSL = useWss;
                }
                if (Config.GATEWAY_ADDRESS1) {
                    Config.GATEWAY_ADDRESS1 = "";
                }
                ServerAdd && (Config.GATEWAY_ADDRESS = (useWss ? "https://" + ServerAdd : "http://" + ServerAdd) + (Port ? ":" + Port : ""));
            }
            // 配置第二私有云服务
            if (ConfPriCloudAddr1) {
                // 私有云默认HTTPS，公网也是默认HTTPS
                var ServerAdd = ConfPriCloudAddr1.ServerAdd, Port = ConfPriCloudAddr1.Port, Wss = ConfPriCloudAddr1.Wss;
                var useWss = true;
                // 是否使用wss
                if ("boolean" === typeof Wss) {
                    useWss = Wss;
                }
                if (Config.GATEWAY_ADDRESS_SSL !== useWss) {
                    Config.GATEWAY_ADDRESS_SSL = useWss;
                }
                ServerAdd && (Config.GATEWAY_ADDRESS1 = (useWss ? "https://" + ServerAdd : "http://" + ServerAdd) + (Port ? ":" + Port : ""));
            }
        };
        /**
         * 更新白板样式配置
         *
         * @param {IArBoardInitParams["styleParams"]} style
         * @category 其他
         * @hidden
         */
        ArWhiteBoard.prototype.setBoardStyleParams = function (style) {
            // 检测参数的合法性
            var _a = this._initConfig; _a.baseParams; var styleParams = _a.styleParams;
            // if (baseParams && '{}' === JSON.stringify(baseParams)) {
            //   const { ratio, scale } = baseParams;
            //   if (typeof ratio !== "string") {
            //     initConfig.baseParams!.ratio = '16:9';
            //   }
            //   if (scale && typeof scale !== "number" && scale < 100) {
            //     initConfig.baseParams!.scale = 100;
            //   }
            // }
            Object.assign(styleParams, style);
            if (styleParams && '{}' === JSON.stringify(styleParams)) {
                var textSize = styleParams.textSize, textColor = styleParams.textColor, brushColor = styleParams.brushColor, brushThin = styleParams.brushThin, selectBoxColor = styleParams.selectBoxColor, globalBackgroundColor = styleParams.globalBackgroundColor;
                if (textSize && typeof textSize !== "number") {
                    styleParams.textSize = 16;
                }
                if (typeof textColor !== "string") {
                    styleParams.textColor = '#333333';
                }
                if (typeof brushColor !== "string") {
                    styleParams.brushColor = '#333333';
                }
                if (brushThin && typeof brushThin !== "number" && brushThin < 5) {
                    styleParams.brushThin = 5;
                }
                if (typeof selectBoxColor !== "string") {
                    styleParams.selectBoxColor = '#eeeeee';
                }
                if (typeof globalBackgroundColor !== "string") {
                    styleParams.globalBackgroundColor = '#ffffff';
                }
            }
        };
        // ------------------------------- 背景相关
        /**
         * 设置当前白板页的背景颜色
         *
         * @param {string} color
         * 十六进制的背景颜色。例如：`#ffffff`，不区分大小写
         * @category 背景相关
         */
        ArWhiteBoard.prototype.setBackgroundColor = function (color) {
            var _a;
            var _this = this;
            // 校验颜色是否合法
            if (!isValidColor(color)) {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The background color is invalid.');
            }
            // 上报
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                var reportData = {
                    bId: this._boardId,
                    color: color
                };
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.UPDATE_BACKGROUND,
                    data: reportData,
                    rts: '' + Date.now(),
                    callback: function () {
                        // // 白板没有登录成功不允许更改背景颜色
                        // _this._setBoardBGColor(_this._boardId, (reportData as IUpdateBgColorReqData).color);
                        // // TODO
                    }
                });
                // 白板没有登录成功不允许更改背景颜色
                _this._setBoardBGColor(_this._boardId, reportData.color);
                // TODO
            }
        };
        /**
         * 获取当前白板页的背景颜色
         *
         * @category 背景相关
         */
        ArWhiteBoard.prototype.getBackgroundColor = function () {
            var currentBoardData = this._fileBoardData.get(this._boardId);
            return currentBoardData === null || currentBoardData === void 0 ? void 0 : currentBoardData.color;
            // return this._painter.backgroundColor;
        };
        /**
         * 全局设置白板页的背景颜色
         *
         * - 后续创建的画板默认为现在设置的颜色
         * - 现在存在的所有画板背景颜色全部更改为现在设置的颜色
         *
         * @param {string} color
         * @category 背景相关
         */
        ArWhiteBoard.prototype.setGlobalBackgroundColor = function (color) {
            var _a;
            // 校验颜色是否合法
            if (!isValidColor(color)) {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The background color is invalid.');
            }
            // 上报
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                // 添加到发送队列 - 需要判断是否是 global
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.UPDATE_BACKGROUND,
                    data: {
                        bId: this._boardId,
                        color: color,
                    },
                    rts: '' + Date.now(),
                });
                // 改变当前画板的背景颜色、更改其他画板页背景颜色（数据）
                this._setGlobalBoardBGColor(color);
            }
        };
        /**
         * 获取全局设置的白板页背景颜色
         *
         * @return {*}
         * @category 背景相关
         */
        ArWhiteBoard.prototype.getGlobalBackgroundColor = function () {
            return this._initConfig.styleParams.globalBackgroundColor || "";
        };
        /**
         * 设置当前白板页的背景图片
         *
         * @param {string} imageUrl
         * 背景图片的 url 或者 base64 的图片地址
         * > 如果是线上的 url 请务必允许跨域访问。
         * @category 背景相关
         */
        ArWhiteBoard.prototype.setBackgroundImage = function (imageUrl, imageFillMode) {
            var _a;
            if (imageFillMode === void 0) { imageFillMode = 'contain'; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(['contain', 'cover', 'fill'].includes(imageFillMode))) {
                                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The image fill mode must be one of "fill", "contain", or "cover".');
                            }
                            return [4 /*yield*/, this._setBoardBGImage(this._boardId, imageUrl, imageFillMode)];
                        case 1:
                            _b.sent();
                            // 上报
                            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                                // 添加到发送队列
                                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                                    type: BoardEventType.UPDATE_BACKGROUND_IMAGE,
                                    data: {
                                        bId: this._boardId,
                                        image: imageUrl,
                                        imageFillMode: imageFillMode
                                    },
                                    rts: '' + Date.now(),
                                });
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 获取当前白板页的背景图片
         *
         * @category 背景图片
         */
        ArWhiteBoard.prototype.getBackgroundImage = function () {
            var currentBoardData = this._fileBoardData.get(this._boardId);
            return currentBoardData === null || currentBoardData === void 0 ? void 0 : currentBoardData.image;
            // return this._painter.backgroundImage;
        };
        /**
         * 获取当前白板页背景图片的填充模式
         *
         * @category 背景图片
         */
        ArWhiteBoard.prototype.getBackgroundImageFillMode = function () {
            var currentBoardData = this._fileBoardData.get(this._boardId);
            return (currentBoardData === null || currentBoardData === void 0 ? void 0 : currentBoardData.imageFillMode) || 'contain';
            // return this._painter.backgroundImageFillMode;
        };
        /**
         * 设置当前白板页的背景 H5 页面
         * 暂未实现
         * @category 背景相关
         */
        // async setBackgroundH5(url: string) {
        //   throw new Error('Method not implemented.');
        //   // await this._setBoardH5(this._boardId, url);
        //   // // 上报
        //   // if (this._fusionServer && this._fusionServer.connectState === EConnectionState.CONNECTED) {
        //   //   // 添加到发送队列
        //   //   this._fusionServer?.report({
        //   //     type: BoardEventType.UPDATE_BACKGROUND_IMAGE,
        //   //     data: {
        //   //       bId: this._boardId,
        //   //       image: imageUrl,
        //   //       imageFillMode
        //   //     },
        //   //     rts: '' + Date.now(),
        //   //   });
        //   // }
        // }
        // ------------------------------- 白板页操作
        /**
         * 获取当前文件 ID
         *
         * @return {string}
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.getCurrentFileId = function () {
            return this._fileId;
        };
        /**
         * 获取当前白板页 ID
         *
         * @return {string}
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.getCurrentBoardId = function () {
            return this._boardId;
        };
        ArWhiteBoard.prototype.getUndoStatus = function () {
        };
        /**
         * 获取白板的基本信息
         *
         * @param {string} fileId
         * @return {*}
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.getFileInfo = function (fileId) {
            return this._fileList.get(fileId);
        };
        /**
         * 添加一页白板并切换到这一页
         *
         * @note
         * 只有 fileId 为 `DEFAULT` 才有效
         * @return  {string}
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.addBoard = function () {
            var _a;
            var _this = this;
            if (this._fileId !== '#DEFAULT') {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_OPERATION, 'This file not allow to add a new board.');
                Logger.error(err);
                throw err;
                // ! 加回调 board-error
            }
            var boardId = "web_" + this.uid + "_" + Date.now() + "_" + (this._curMaxBoardPage + 1) + "_" + this._fileId; // 平台_uid_时间戳_页码_#FileId
            Logger.info("local add board: " + boardId);
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                // 上报
                var reportData = {
                    bId: boardId,
                    // width: this._painter.width,
                    // height: this._painter.height,
                    color: this._initConfig.styleParams.globalBackgroundColor,
                    image: '',
                    url: '',
                    scale: 100,
                    // lts: Date.now(),
                };
                // 添加到发送队列
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.ADD_BOARD,
                    data: reportData,
                    rts: '' + Date.now(),
                    callback: function () {
                        // // 白板没有登录成功不允许更改背景颜色
                        // _this._addBoard((reportData as IAddBoardReqData).bId);
                        // // TODO
                    }
                });
                // 白板没有登录成功不允许更改背景颜色
                _this._addBoard(reportData.bId);
            }
            // 脱机无需报错
            // else {
            //   const boardErr = new ArWhiteBoardError(ErrorCode.AUTHENTICATION_FAILED, `join channel first please.`);
            //   this.emit(EventNames.ERROR, boardErr);
            // }
        };
        /**
         * 删除当前白板页并切换到上一页
         * @note
         * - 只允许删除默认文件（文件 ID 为#DEFAULT）内的白板页，且默认白板页（白板 ID 为#DEFAULT）无法删除
         * - 触发 Board.EVEN.DELETE_BOARD 事件
         * @param [boardId]
         * 要删除的白板 ID，为 `null` 表示删除当前页
         * @return {*}
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.deleteBoard = function (boardId) {
            var _a;
            var _this = this;
            if (this._fileId !== '#DEFAULT') {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_OPERATION, 'The file does not allow deleting the whiteboard.');
                Logger.error(err);
                throw err;
            }
            if (this._currentBoardPage === 1) {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_OPERATION, 'The default whiteboard page cannot be deleted.');
                Logger.error(err);
                throw err;
            }
            if (boardId && typeof boardId !== 'string') {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The boardId parameter must be string.');
                Logger.error(err);
                throw err;
            }
            var deleteBoardId = boardId ? boardId : this._boardId;
            Logger.info("local delete board: " + deleteBoardId);
            var deleteBoardData = this._fileBoardData.get(deleteBoardId);
            if (deleteBoardData) {
                var deleteBoardId_1 = deleteBoardData.bId;
                // 上报
                if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                    // 添加到发送队列
                    (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                        type: BoardEventType.DELETE_BOARD,
                        data: {
                            bIds: [deleteBoardId_1]
                        },
                        rts: '' + Date.now(),
                        callback: function () {
                            // // 白板没有登录成功不允许更改背景颜色
                            // _this._deleteBoard([deleteBoardId]);
                            // // TODO
                        }
                    });
                    // 白板没有登录成功不允许更改背景颜色
                    _this._deleteBoard([deleteBoardId_1]);
                    // TODO
                }
                // 脱机情况无需报错
                // else {
                //   const boardErr = new ArWhiteBoardError(ErrorCode.AUTHENTICATION_FAILED, `join channel first please.`);
                //   this.emit(EventNames.ERROR, boardErr);
                // }
            }
            else {
                Logger.error("Error: Can not find the board id is " + boardId + ".");
            }
        };
        /**
         * 设置白板的比例
         *
         * @param {string} ratio 白板页的宽高比例
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.setBoardRatio = function (ratio) {
            var _a;
            if ('string' === typeof ratio) {
                // ratio 替换所有空格
                var ratioTrim = ratio.replace(/\s/g, '');
                // 上报
                if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                    // 添加到发送队列
                    (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                        type: BoardEventType.RATIO_BOARD,
                        data: {
                            bId: this._boardId,
                            ratio: ratio,
                            // lts: Date.now(),
                        },
                        rts: '' + Date.now(),
                        callback: function () { }
                    });
                    this._ratioBoard(this._boardId, ratioTrim);
                }
            }
            else {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The ratio parameter must be string.');
                Logger.error(err);
                throw err;
            }
        };
        /**
         * 获取白板的比例
         *
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.getBoardRatio = function () {
            var currentBoardData = this._fileBoardData.get(this._boardId);
            return (currentBoardData === null || currentBoardData === void 0 ? void 0 : currentBoardData.ratio) || '';
        };
        /**
         * 获取所有文件的白板列表
         *
         * @return {*}  {string[]}
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.getBoardList = function () {
            var allBoardList = [];
            this._fileList.forEach(function (value) {
                allBoardList.push.apply(allBoardList, __spreadArray([], __read(value.boardList)));
            });
            return allBoardList;
        };
        /**
         * 获取指定文件的白板 ID 列表
         *
         * @param {string} fileId
         * @return {*}  {string[]}
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.getFileBoardList = function (fileId) {
            var findFileInfo = this._fileList.get(fileId);
            if (findFileInfo) {
                return findFileInfo.boardList;
            }
            else {
                return [];
            }
        };
        /**
         * 设置当前白板页的缩放大小
         *
         * @param {number} scale
         * 白板缩放的大小。比如：`100` 则为不缩放，范围在 [100 ~ 300] 之间。
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.setBoardScale = function (scale) {
            var _a;
            var _this = this;
            if ('number' === typeof scale) {
                if (scale >= 100) { //  && scale <= 300
                    // 上报
                    if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                        // 添加到发送队列
                        (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                            type: BoardEventType.SCALE_BOARD,
                            data: {
                                bId: this._boardId,
                                scale: scale,
                                // lts: Date.now(),
                            },
                            rts: '' + Date.now(),
                            callback: function () { }
                        });
                        _this._scaleBoard(_this._boardId, scale);
                    }
                }
            }
            else {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The scale parameter must be number.');
                Logger.error(err);
                throw err;
            }
        };
        /**
         * 获取当前白板页缩放比例
         *
         * @return {*}  {number}
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.getBoardScale = function () {
            var currentBoardData = this._fileBoardData.get(this._boardId);
            return (currentBoardData === null || currentBoardData === void 0 ? void 0 : currentBoardData.scale) || 100;
        };
        // /**
        //  * 下一步
        //  *
        //  * 暂时未实现
        //  * @note
        //  * 只有共享文档时才有效
        //  * @category 白板页操作接口
        //  */
        // prevStep() {
        //   Logger.info('go to prev step');
        //   throw new Error('Method not implemented.');
        // }
        // /**
        //  * 上一步
        //  *
        //  * 暂时未实现
        //  * @note
        //  * 只有共享文档时才有效
        //  * @category 白板页操作接口
        //  */
        // nextStep() {
        //   Logger.info('go to next step');
        //   throw new Error('Method not implemented.');
        // }
        /**
         * 切换到上一页白板
         *
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.prevBoard = function () {
            var _a;
            var _this = this;
            if (this._currentBoardPage === 1)
                return;
            // 上报
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                var currentPage = this._currentBoardPage - 1;
                var fileInfo = this._fileList.get(this._fileId);
                var boardId = fileInfo.boardList[currentPage - 1];
                // 添加到发送队列
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.SWITCH_BOARD,
                    data: {
                        bId: boardId,
                    },
                    rts: '' + Date.now(),
                    callback: function () { }
                });
                _this._gotoBoard(boardId);
                // 切换到 XX 页
                Logger.info('switch to page ' + _this._currentBoardPage);
            }
        };
        /**
         * 切换到下一页白板
         *
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.nextBoard = function () {
            var _a;
            var _this = this;
            if (this._currentBoardPage >= this._totalBoardCount)
                return;
            // 上报
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                var currentPage = this._currentBoardPage + 1;
                var fileInfo = this._fileList.get(this._fileId);
                var boardId = fileInfo.boardList[currentPage - 1];
                // 添加到发送队列
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.SWITCH_BOARD,
                    data: {
                        bId: boardId,
                    },
                    rts: '' + Date.now(),
                    callback: function () { }
                });
                _this._gotoBoard(boardId);
                // 切换到 XX 页
                Logger.info('switch to page ' + _this._currentBoardPage);
            }
        };
        /**
         * 切换到指定的白板页
         *
         * @param {string} boardId
         * 需要切换到指定页的白板 ID
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.gotoBoard = function (boardId) {
            var _a;
            var _this = this;
            // 上报
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) { // 添加到发送队列
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.SWITCH_BOARD,
                    data: {
                        bId: boardId,
                    },
                    rts: '' + Date.now(),
                    callback: function () { }
                });
                _this._gotoBoard(boardId);
                // 切换到 XX 页
                Logger.info('switch to page ' + _this._currentBoardPage);
            }
            else {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_OPERATION, 'Make sure you are connected to the whiteboard service.');
                Logger.warning(err);
            }
        };
        /**
         * 重置白板
         *
         * 删除所有白板页和涂鸦。
         * - 如果 fileId 为 `#DEFAULT`，则仅保留第一页，但是不保留涂鸦。
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.reset = function () {
            var _a;
            var _this = this;
            // 上报
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) { // 添加到发送队列
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.RESET_BOARD,
                    data: undefined,
                    rts: '' + Date.now(),
                    callback: function () { }
                });
                // 重置标识
                _this._resetBoard();
            }
            else {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_OPERATION, 'Make sure you are connected to the whiteboard service.');
                Logger.warning(err);
            }
        };
        /**
         * 获取当前白板页的快照
         *
         * @return {*}  {string} base64 图片
         * @category 白板页操作接口
         */
        ArWhiteBoard.prototype.getBoardSnapshot = function () {
            var _a;
            return (_a = this._painter) === null || _a === void 0 ? void 0 : _a.getSnapShortImage();
        };
        // ------------------------------- 涂鸦相关
        /**
         * 设置白板是否可涂鸦
         *
         * @param {boolean} enable
         * 是否运行涂鸦。`true` 为允许涂鸦，否则不允许涂鸦。
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.setEnable = function (enable) {
            if (typeof enable === "boolean") {
                this._painter.setEnable(enable);
            }
            else {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The enable parameter must be boolean.');
                Logger.warning(err);
                throw err;
            }
        };
        /**
         * 获取白板是否可涂鸦
         *
         * @return {boolean}
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.getEnable = function () {
            return this._painter.getEnable();
        };
        /**
         * 设置画笔颜色
         *
         * @param {string} color
         * 十六进制的背景颜色。例如：`#ffffff`，不区分大小写
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.setBrushColor = function (color) {
            var _a;
            (_a = this._painter) === null || _a === void 0 ? void 0 : _a.setBrushColor(color);
        };
        /**
         * 获取画笔颜色
         *
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.getBrushColor = function () {
            return this._painter.brushColor;
        };
        /**
         * 设置画笔工具类型
         *
         * @param {EBoardToolType} type
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.setBrushType = function (type) {
            var _a;
            (_a = this._painter) === null || _a === void 0 ? void 0 : _a.setBrushType(type);
        };
        /**
         * 获取画笔类型
         *
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.getBrushType = function () {
            var _a;
            return (_a = this._painter) === null || _a === void 0 ? void 0 : _a.brushType;
        };
        /**
         * 设置画笔粗细
         *
         * @param {number} thin
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.setBrushThin = function (thin) {
            var _a;
            (_a = this._painter) === null || _a === void 0 ? void 0 : _a.setBrushThin(thin);
        };
        /**
         * 获取画笔粗细
         *
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.getBrushThin = function () {
            return this._painter.brushThin;
        };
        /**
         * 设置的文字颜色
         *
         * @param {string} color
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.setTextColor = function (color) {
            var _a;
            // 校验颜色是否合法
            if (!isValidColor(color)) {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The text color is invalid.');
            }
            // 限制颜色
            (_a = this._painter) === null || _a === void 0 ? void 0 : _a.setTextColor(color);
        };
        /**
         * 获取设置的文字颜色
         *
         * @return {*}  {string}
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.getTextColor = function () {
            var _a;
            return (_a = this._painter) === null || _a === void 0 ? void 0 : _a.getTextColor();
        };
        /**
         * 设置文字的大小
         *
         * @param {string} color
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.setTextSize = function (size) {
            var _a;
            // 校验文字的大小是否合法
            if (typeof size !== "number") {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'The size must be number.');
            }
            // 限制字体大小
            (_a = this._painter) === null || _a === void 0 ? void 0 : _a.setTextSize(size);
        };
        /**
         * 获取设置的文字大小
         *
         * @return {*}  {string}
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.getTextSize = function () {
            var _a;
            return (_a = this._painter) === null || _a === void 0 ? void 0 : _a.getTextSize();
        };
        // /**
        //  * 暂未实现
        //  *
        //  * @category 涂鸦相关
        //  */
        // setBrushStyle() {
        //   throw new Error('Method not implemented.');
        // }
        // /**
        //  * 暂未实现
        //  *
        //  * @category 涂鸦相关
        //  */
        // getBrushStyle() {
        //   throw new Error('Method not implemented.');
        // }
        /**
         * 重新计算白板大小，并渲染
         * 白板数据不会改变
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.resize = function () {
            var _this_1 = this;
            var _a;
            (_a = this._painter) === null || _a === void 0 ? void 0 : _a.renderSize();
            // 1. 更新当前画板的数据，调整画笔的位置，粗细，长短；字体的大小；控制框的大小和位置
            var painterBoardData = this._fileBoardData.get(this._boardId);
            if (painterBoardData) {
                // 清空画板和缓存画板
                this._painter.clear(true);
                // 将远端的数据，根据比例计算出本地的形状大小
                painterBoardData.pList.forEach(function (brush) {
                    _this_1._convertBrushDataAndRenderToBoard(brush);
                });
                // 重新绘制控制框的大小和位置
                this._painter.renderControlBox();
            }
        };
        // 清空背景
        ArWhiteBoard.prototype._clearBackground = function () {
            var _a;
            var boardData = this._fileBoardData.get(this._boardId);
            this._painter.clearBackground();
            boardData.color = (_a = this._initConfig.styleParams) === null || _a === void 0 ? void 0 : _a.globalBackgroundColor;
            boardData.image = '';
            boardData.imageFillMode = 'contain';
            boardData.url = '';
        };
        /**
         * 清空当前白板页数据
         *
         * 默认只清除当前白板页的涂鸦，如果 `clearBackground` 参数为 true，则同时清除涂鸦和一切背景。
         *
         * @param {boolean} [clearBackground]
         * 是否清空背景图片和背景颜色。默认为 `false` 不清除。
         * @category 涂鸦相关
         */
        ArWhiteBoard.prototype.clear = function (clearBackground) {
            var _a;
            var boardData = this._fileBoardData.get(this._boardId);
            // 清空背景
            if (clearBackground) {
                this._clearBackground();
            }
            this._painter.clearAll();
            // 清空画笔列表
            boardData.pList.clear();
            // 上报
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                // 添加到发送队列
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.CLEAR_BOARD,
                    data: {
                        bId: this._boardId,
                        // clearBackground: !!clearBackground,
                        bg: !!clearBackground,
                        // lts: Date.now(),
                    },
                    rts: '' + Date.now(),
                });
            }
            else {
                var err = new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_OPERATION, 'Make sure you are connected to the whiteboard service.');
                Logger.warning(err);
            }
        };
        // --------------------- 撤销和恢复相关
        /**
         * 撤销当前白板页操作
         *
         * 按从后往前的顺序取消白板页的操作，可撤销涂鸦的形状、画笔、以及形状的移动位置。
         *
         * @category 撤销和恢复相关
         */
        ArWhiteBoard.prototype.undo = function () {
            var _a;
            if (this._painter.canUndoList.length > 0) {
                (_a = this._painter) === null || _a === void 0 ? void 0 : _a.undo();
            }
        };
        /**
         * 重做当前白板页操作
         *
         * 还原上一步被撤销的操作
         * @category 撤销和恢复相关
         */
        ArWhiteBoard.prototype.redo = function () {
            var _a;
            if (this._painter.canRedoList.length > 0) {
                (_a = this._painter) === null || _a === void 0 ? void 0 : _a.redo();
            }
        };
        // ------------------------------- 房间相关
        /**
         * 加入房间
         *
         * @param {(string | HTMLElement)} render
         * 白板容器的 DOM 节点。容器的 id 属性或者 DOM 对象
         * @category 房间相关
         */
        ArWhiteBoard.prototype._joinChannel = function () {
            return __awaiter(this, void 0, void 0, function () {
                var fusionServer, _a, connectErr;
                var _this_1 = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            fusionServer = new FusionServer(this._appid, this.uid, this._channel, this._token);
                            fusionServer.on('connection-state-change', function (state, reason) {
                                _this_1.emit(EventNames.CONNECTION_STATE_CHANGE, state, reason);
                                // 重连成功
                                if (state === exports.EConnectionState.CONNECTED && reason === "RECONNECTED_SUCCESS") ;
                            });
                            fusionServer.on('RecvMsgFromPeer', this._handleP2PMsg.bind(this));
                            fusionServer.on('RecvMsgFromChan', this._handleChannelMsg.bind(this));
                            this._fusionServer = fusionServer;
                            return [4 /*yield*/, to(fusionServer.connectServer())];
                        case 1:
                            _a = __read.apply(void 0, [_b.sent(), 1]), connectErr = _a[0];
                            if (connectErr) {
                                switch (connectErr.code) {
                                    case InternalErrorCode.MISSING_PARAMETER:
                                        // 初始化失败
                                        this.emit(EventNames.ERROR, exports.EBoardErrorCode.INIT_ERROR, InternalErrorCode.MISSING_PARAMETER);
                                        break;
                                    case InternalErrorCode.DEVELOPER_INVALID:
                                    case InternalErrorCode.UID_BANNED:
                                    case InternalErrorCode.IP_BANNED:
                                    case InternalErrorCode.CHANNEL_BANNED:
                                    case InternalErrorCode.APPID_INVALID:
                                    case InternalErrorCode.SERVER_NOT_OPEN:
                                    case InternalErrorCode.TOKEN_INVALID:
                                    case InternalErrorCode.TOKEN_EXPIRED:
                                        // 鉴权失败
                                        this.emit(EventNames.ERROR, exports.EBoardErrorCode.AUTH_FAILED, connectErr.code);
                                        break;
                                }
                                return [2 /*return*/];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 离开房间
         *
         * @category 房间相关
         */
        ArWhiteBoard.prototype._leaveChannel = function () {
            var _a;
            // ! 重连等特殊情况时，该如何处理《离开频道》
            if (this._fusionServer && this._fusionServer.connectState === exports.EConnectionState.CONNECTED) {
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.disconnectServer();
                this._fusionServer = void 0;
                // 广播
                this.emit(EventNames.CONNECTION_STATE_CHANGE, exports.EConnectionState.DISCONNECTED, '');
            }
            // 清除标识
            this._fileList.clear();
            this._fileId = '';
            this._initConfig = defaultInitBoardParams;
            this._fileBoardData.clear();
            this._channel = '';
            this._token = '';
            this._appid = '';
            this.uid = '';
            this._boardId = '';
            this._curMaxBoardPage = 1;
            this._painter.setEnable(false);
            this._painter.clearAll();
            // 清除 DOM
            this._painter.destroy();
            this.removeAllListeners();
        };
        ArWhiteBoard.prototype.on = function (event, listener) {
            _super.prototype.on.call(this, event, listener);
        };
        // 私有方法 --------------------------
        /**
         * 初始化画板
         *
         * @private
         * @param {IArBoardInitParams} initParams
         */
        ArWhiteBoard.prototype._initPainter = function (domId, initParams) {
            var _this_1 = this;
            var _a;
            if (this._painter)
                return;
            if (!domId) {
                throw new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS);
            }
            var baseParams = initParams.baseParams, styleParams = initParams.styleParams;
            var painterOptions = __assign(__assign({ ratio: '16:9', scale: 100 }, baseParams), styleParams);
            this._painter = new Painter(domId, painterOptions);
            // 加载
            ((_a = this._initConfig.authParams) === null || _a === void 0 ? void 0 : _a.progressEnable) && this._painter.showLoading();
            this._painter.setEnable(false);
            this._painter.setBrushType(painterOptions.toolType);
            // 实时传输画笔数据 改为定时器，按时去 painter 根据标识取数据，取道数据就上报
            setInterval(function () {
                var _a, _b;
                var content = _this_1._painter.getNeedUpdateShapeData();
                if (content) {
                    if (content.action === BoardEventType.ADD_SHAPE) {
                        var brushData = content.data;
                        // 根据每次操作，更新本地最新的数据
                        _this_1._saveToBoardBrushData(content.bId, brushData);
                        // 保持增量上报
                        (_a = _this_1._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                            type: content.action,
                            data: __assign(__assign({}, brushData), { bId: content.bId }),
                            rts: '' + Date.now(),
                        });
                    }
                    // 目前仅有激光笔 
                    else if (content.action === BoardEventType.MOVE_SHAPE) {
                        // 转换比例
                        var _c = content.data, pIds_1 = _c.pIds, offset_1 = _c.offset;
                        (_b = _this_1._fusionServer) === null || _b === void 0 ? void 0 : _b.report({
                            type: content.action,
                            data: __assign(__assign({}, content.data), { bId: content.bId }),
                            rts: '' + Date.now(),
                        });
                        // 更新数据
                        var boardData = _this_1._fileBoardData.get(content.bId);
                        if (boardData) {
                            // 自己移动不受影响，如果别人移动自己的画笔，offset 是根据对方 canvas 宽高算出来的，因此这里需要转为当前画板的对应的 offset，从而保证数据比例一致
                            boardData.pList.forEach(function (brushData) {
                                if (pIds_1.includes(brushData.pId)) {
                                    var convertOffset = [brushData.width * offset_1[0], brushData.height * offset_1[1]];
                                    // 根据画板尺寸计算出偏移比例
                                    brushData.position = convertOffset;
                                }
                            });
                        }
                    }
                }
            }, 1000 / this._renderFrameRate);
            // 【实时上报】鼠标点下到抬起到操作回调、需要实时上报的操作
            this._painter.on('reportContent', function (content) { return __awaiter(_this_1, void 0, void 0, function () {
                var brushData, pIds_2, boardData_1, _a, pIds_3, offset_2, boardData, currentPainterData;
                var _b, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    if (content) {
                        // 绘制的一笔到抬起
                        if (content.action === BoardEventType.ADD_SHAPE) {
                            brushData = content.data;
                            (_b = this._fusionServer) === null || _b === void 0 ? void 0 : _b.report({
                                type: content.action,
                                data: __assign(__assign({}, brushData), { bId: content.bId }),
                                rts: '' + Date.now(),
                            });
                            // 根据每次操作，更新本地最新的数据
                            this._saveToBoardBrushData(content.bId, brushData);
                        }
                        else if (content.action === BoardEventType.DELETE_SHAPE) {
                            (_c = this._fusionServer) === null || _c === void 0 ? void 0 : _c.report({
                                type: content.action,
                                data: __assign(__assign({}, content.data), { bId: content.bId }),
                                rts: '' + Date.now(),
                            });
                            pIds_2 = content.data.pIds;
                            boardData_1 = this._fileBoardData.get(content.bId);
                            if (boardData_1) {
                                // 重现渲染
                                boardData_1.pList.forEach(function (brush) {
                                    var pId = brush.pId;
                                    // 当前画笔没有被删除时需要重新渲染
                                    if (!!~pIds_2.indexOf(pId)) {
                                        boardData_1.pList.delete(pId);
                                    }
                                });
                            }
                        }
                        // 不包含激光笔移动
                        else if (content.action === BoardEventType.MOVE_SHAPE) {
                            _a = content.data, pIds_3 = _a.pIds, offset_2 = _a.offset;
                            (_d = this._fusionServer) === null || _d === void 0 ? void 0 : _d.report({
                                type: content.action,
                                data: __assign(__assign({}, content.data), { bId: content.bId }),
                                rts: '' + Date.now(),
                            });
                            boardData = this._fileBoardData.get(content.bId);
                            if (boardData) {
                                // 自己移动不受影响，如果别人移动自己的画笔，offset 是根据对方 canvas 宽高算出来的，因此这里需要转为当前画板的对应的 offset，从而保证数据比例一致
                                boardData.pList.forEach(function (brushData) {
                                    if (pIds_3.includes(brushData.pId)) {
                                        var convertOffset = [brushData.width * offset_2[0], brushData.height * offset_2[1]];
                                        // 根据画板尺寸计算出偏移比例
                                        brushData.position = [brushData.position[0] + convertOffset[0], brushData.position[1] + convertOffset[1]];
                                    }
                                });
                            }
                        }
                    }
                    // 每一次鼠标点下到抬起都需要更新当前画板的撤销和重做列表并存储
                    if (content) {
                        currentPainterData = this._fileBoardData.get(content.bId);
                        currentPainterData.canUndoList = this._painter.canUndoList;
                        currentPainterData.canRedoList = this._painter.canRedoList;
                        // fileBoardData[this._currentBoardPage - 1].canUndoList = this._painter.canUndoList;
                        // fileBoardData[this._currentBoardPage - 1].canRedoList = this._painter.canRedoList;
                        // 添加本地是否可撤销/可重做的回调
                        this.emit(EventNames.CAN_REDO_STATUS_CHANGE, ((_e = this._painter) === null || _e === void 0 ? void 0 : _e.canRedoList.length) > 0);
                        this.emit(EventNames.CAN_UNDO_STATUS_CHANGE, ((_f = this._painter) === null || _f === void 0 ? void 0 : _f.canUndoList.length) > 0);
                    }
                    return [2 /*return*/];
                });
            }); });
        };
        /**
         * 初始化白板的数据、标识
         *
         * 如果白板没有文件的话，同时创建一个 DEFAULT 文件
         * DEFAULT 文件只能可以添加和删除画板，否则只能翻页
         * @private
         * @param {*} info
         */
        ArWhiteBoard.prototype._processChannelInfo = function (info) {
            var _this_1 = this;
            var _a;
            var fId = info.fId, fileList = info.fileList;
            // 服务端没有文件，本地默认创建一个 DEFAULT 文件
            if (fileList.length === 0) {
                var currentTimeStamp = Date.now();
                this._fileId = "#DEFAULT";
                // 设置当前文件的页码
                this._currentBoardPage = 1;
                this._totalBoardCount = 1;
                // 设置当前文件所在画板 ID
                this._boardId = "web_" + this.uid + "_" + currentTimeStamp + "_" + this._currentBoardPage + "_" + this._fileId; // 平台_uid_时间戳_页码_#FileId
                // 新的白板没有文件，默认创建一个文件
                var fileInfo = new BoardFile();
                // fileInfo.currentPageIndex = this._currentBoardPage;
                // fileInfo.totalPageCount = this._totalBoardCount;
                fileInfo.boardList = [this._boardId];
                (_a = this._fusionServer) === null || _a === void 0 ? void 0 : _a.report({
                    type: BoardEventType.ADD_FILE,
                    data: fileInfo,
                    rts: '' + Date.now(),
                });
                // 更新文件列表信息
                this._fileList.set(this._fileId, fileInfo);
                // #DEFAULT 文件默认有一页画板数据
                this._boardId = "web_" + this.uid + "_" + currentTimeStamp + "_1_" + this._fileId;
                var bData = new BoardData(this._boardId);
                bData.scale = this._initConfig.baseParams.scale;
                bData.ratio = this._initConfig.baseParams.ratio;
                // 更新文件白板信息 - 设置 #DEFAULT 文件的默认页画板数据
                this._fileBoardData.set(this._boardId, bData);
            }
            else { // 获取服务端当前最新的白板数据
                this._fileId = fId;
                // 更新文件列表信息
                fileList.forEach(function (fInfo) {
                    var fileBoardList = fInfo.boardList;
                    fInfo.boardList = [];
                    fileBoardList.forEach(function (bInfo) {
                        var _a, _b;
                        fInfo.boardList.push(bInfo.bId);
                        bInfo.pList = new Map();
                        var bData = new BoardData(bInfo.bId);
                        bData.scale = bInfo.scale;
                        bData.ratio = bInfo.ratio || ((_b = (_a = _this_1._initConfig) === null || _a === void 0 ? void 0 : _a.baseParams) === null || _b === void 0 ? void 0 : _b.ratio);
                        bData.color = bInfo.color;
                        bData.image = bInfo.image;
                        bData.imageFillMode = bInfo.imageFillMode;
                        bData.url = bInfo.url;
                        _this_1._fileBoardData.set(bInfo.bId, bData);
                    });
                    _this_1._fileList.set(_this_1._fileId, fInfo);
                });
                //
                var currentFileInfo = this._fileList.get(this._fileId);
                var currentPageIndex = currentFileInfo.currentPageIndex, totalPageCount = currentFileInfo.totalPageCount, boardList = currentFileInfo.boardList;
                this._currentBoardPage = currentPageIndex;
                this._totalBoardCount = totalPageCount;
                this._boardId = boardList[currentPageIndex - 1];
                var latestBId = boardList[boardList.length - 1];
                var latestPageIndex = latestBId.split('_');
                this._curMaxBoardPage = Number(latestPageIndex[latestPageIndex.length - 2]);
            }
        };
        /**
         * 将服务端返回的数据，转换成功 BoardData
         *
         * @private
         * @param boardData
         */
        ArWhiteBoard.prototype._processBoardData = function (boardData) {
            var _this_1 = this;
            var data = boardData.data;
            data.forEach(function (bData) {
                Logger.debug("convert to board (" + bData.bId + ") data.");
                var boardData = _this_1._fileBoardData.get(bData.bId);
                if (boardData) {
                    boardData.scale = bData.scale;
                    boardData.ratio = bData.ratio || _this_1._initConfig.baseParams.ratio;
                    boardData.url = bData.url;
                    boardData.image = bData.image;
                    boardData.color = bData.color;
                    // 然后处理写入，主要是合并 FreeDraw 分段的数据
                    bData.pList.forEach(function (brushData) {
                        _this_1._saveToBoardBrushData(boardData.bId, brushData);
                    });
                }
            });
        };
        /**
         * 将远端画笔的数据根据本地尺寸重新计算，最终转化成本地等比的画笔数据
         *
         * @private
         * @param {EShapeType} shape
         * @param {ShapeProps} props
         * @param {number} width
         * @param {number} height
         * @return {*}  {ShapeProps}
         */
        ArWhiteBoard.prototype._calculateScaleProps = function (shape, props, width, height) {
            var scale = this._painter.width / width;
            // const scaleX = this._painter.width / width;
            // const scaleY = this._painter.height / height;
            if (shape === EShapeType.FREE_DRAW || shape === EShapeType.ARROW) {
                var points = props.points.map(function (item) { return [item[0] * scale, item[1] * scale]; });
                props.points = points;
            }
            else if (shape === EShapeType.CIRCLE || shape === EShapeType.LASER_POINTER) {
                props.cx = props.cx * scale;
                props.cy = props.cy * scale;
                // props.r = props.r * scale;
            }
            else if (shape === EShapeType.ELLIPSE) {
                props.cx *= scale;
                props.cy *= scale;
                props.xr *= scale;
                props.yr *= scale;
            }
            else if (shape === EShapeType.LINE) {
                props.x *= scale;
                props.y *= scale;
                props.x1 *= scale;
                props.y1 *= scale;
            }
            else if (shape === EShapeType.RECT) {
                props.x1 *= scale;
                props.y1 *= scale;
                props.x2 *= scale;
                props.y2 *= scale;
            }
            else if (shape === EShapeType.TEXT) {
                props.x *= scale;
                props.y *= scale;
                props.fontSize *= scale;
                props.lineHeight *= scale;
            }
        };
        /**
         * 按画板大小转换相对应的数据
         *
         * * 不改变原始数据，仅仅转换成当前白板的尺寸
         * * 返回一个新的 BrushData
         * @private
         */
        ArWhiteBoard.prototype._convertBrushDataToCurrentBoardSize = function (brushData) {
            var cloneBrushData = JSON.parse(JSON.stringify(brushData));
            var width = cloneBrushData.width, height = cloneBrushData.height, shape = cloneBrushData.shape, props = cloneBrushData.props;
            var scale = this._painter.width / width;
            var scaleX = this._painter.width / width;
            var scaleY = this._painter.height / height;
            if (shape === EShapeType.FREE_DRAW || shape === EShapeType.ARROW) {
                var points = props.points.map(function (item) { return [item[0] * scaleX, item[1] * scaleY]; });
                props.points = points;
            }
            else if (shape === EShapeType.LASER_POINTER) { // shape === EShapeType.CIRCLE || 
                props.cx = props.cx * scaleX;
                props.cy = props.cy * scaleY;
                // props.r = props.r * scale;
            }
            else if (shape === EShapeType.ELLIPSE) {
                props.cx *= scaleX;
                props.cy *= scaleY;
                props.xr *= scaleX;
                props.yr *= scaleY;
            }
            else if (shape === EShapeType.LINE) {
                props.x *= scaleX;
                props.y *= scaleY;
                props.x1 *= scaleX;
                props.y1 *= scaleY;
            }
            else if (shape === EShapeType.RECT) {
                props.x1 *= scaleX;
                props.y1 *= scaleY;
                props.x2 *= scaleX;
                props.y2 *= scaleY;
            }
            else if (shape === EShapeType.TEXT) {
                props.x *= scaleX;
                props.y *= scaleY;
                props.fontSize *= scale;
                props.lineHeight *= scale;
                props.maxWidth *= scaleX;
                props.maxHeight *= scaleY;
            }
            cloneBrushData.width = this._painter.width;
            cloneBrushData.height = this._painter.height;
            cloneBrushData.position = [cloneBrushData.position[0] * scaleX, cloneBrushData.position[1] * scaleY];
            return cloneBrushData;
        };
        /**
         * 画笔数据整合
         *
         * - 本地新增画笔
         * - 远端新增画笔
         * 将分页的过后的多条画笔数据合并成一条，保存到 _fileBoardData 的本地 boardData 中
         * Note:
         * - 每次只收到一条数据，然后处理单条数据
         * @private
         * @param {IBrushData} content
         * @return {*}
         */
        ArWhiteBoard.prototype._saveToBoardBrushData = function (boardId, content) {
            var shape = content.shape, pId = content.pId, props = content.props; content.position; content.width; content.height;
            // 获取当前画笔所在页的 boardData
            var findBoardData = this._fileBoardData.get(boardId);
            // 更新本地数据
            if (findBoardData) {
                // 查找当前画笔 - 是否存在
                var findBrushData = findBoardData.pList.get(pId);
                // 当前画笔存在，合并或覆盖数据，否则添加记录
                if (findBrushData) {
                    // 涂鸦是增量，需要整合成一条数据
                    if (shape === EShapeType.FREE_DRAW) {
                        var currentPoints = findBrushData.props.points;
                        var points_1 = props.points;
                        // 如果广播的属性是现在属性的超集，则使用广播来的属性，否则，做增量处理
                        var shapePointString = currentPoints.map(function (item) { return item.toString(); });
                        // 如果广播的属性是现在属性的超集，则使用广播来的属性，否则，做增量处理
                        if (!shapePointString.every(function (item) { return points_1.toString().includes(item); })) {
                            findBrushData.props.points = currentPoints.concat(points_1);
                        }
                    }
                    else { // 其他图形直接覆盖 - 其他图形绘制中
                        findBrushData.props = props;
                    }
                }
                else {
                    findBoardData.pList.set(pId, content);
                }
            }
        };
        /**
         * 将画笔的原始数据，转换成当前画板的数据
         *
         * 比例：画笔绘制时的宽高 / 当前 canvas 的宽高
         * @private
         * @param brushData
         */
        ArWhiteBoard.prototype._convertBrushDataAndRenderToBoard = function (brushData) {
            var scale = this._painter.width / brushData.width;
            // 转换数据
            var convertedBrushData = this._convertBrushDataToCurrentBoardSize(brushData);
            // 添加形状到画板
            var shape = convertedBrushData.shape, props = convertedBrushData.props, position = convertedBrushData.position, pId = convertedBrushData.pId, style = convertedBrushData.style; convertedBrushData.width; convertedBrushData.height;
            var shapeInstance = new SHAPE_CLASSES[shape](pId, {
                props: props,
                position: position,
                style: __assign(__assign({}, style), { lineWidth: style.lineWidth * scale })
            });
            this._painter.addElement(shapeInstance);
        };
        /**
         * 重新渲染当前画板
         * 根据白板数据直接还原
         * boardData => shape
         *
         * * 翻页（上一页、下一页、跳转指定页） ｜ 重置画板
         * @private
         * @param {number} pageNumber
         */
        ArWhiteBoard.prototype._renderCurrentPainter = function () {
            var _this_1 = this;
            var boardData = this._fileBoardData.get(this._boardId);
            if (boardData) {
                this._boardId = boardData.bId;
                this._painter.id = this._boardId;
                // 设置当前画板的比例
                var ratio = boardData.ratio || this._initConfig.baseParams.ratio;
                this._painter.setBoardRatio(ratio);
                // 设置当前画板的缩放大小
                this._painter.setCanvasBGColor(boardData.color);
                // 设置当前画板的缩放大小
                this._painter.setCanvasBGImage(boardData.image, boardData.imageFillMode);
                // 设置当前画板的缩放大小
                this._painter.scalePainter(boardData.scale);
                // 清空画板，并抹除白板的数据
                // this._painter.clear();
                this._painter.reset();
                // 设置本地保存的每一个画板的撤销和重做列表
                this._painter.canUndoList = boardData.canUndoList;
                this._painter.canRedoList = boardData.canRedoList;
                /**
                 * 将画笔的原始数据，转换成当前画板的数据
                 * 比例：画笔绘制时的宽高 / 当前 canvas 的宽高
                */
                boardData.pList.forEach(function (brush) {
                    // 转换数据
                    _this_1._convertBrushDataAndRenderToBoard(brush);
                });
            }
        };
        /**
         *
         *
         * @private
         */
        ArWhiteBoard.prototype._convertBrushDataToCurrentPainter = function () {
        };
        ArWhiteBoard.prototype._handleP2PMsg = function (msgContent) {
            var _a, _b;
            // console.log('handle peer msg ', msgContent);
            msgContent.ChanId; msgContent.FromUId; var MsgBody = msgContent.MsgBody; msgContent.MsgId; msgContent.MsgType;
            var msgBody = JSON.parse(MsgBody);
            var cmd = msgBody.cmd, data = msgBody.data;
            // 先下发频道内所有白板的颜色、背景等基础信息
            if (cmd === BoardEventType.CHAN_DATA) {
                // 解析频道信息
                this._processChannelInfo(data);
                this._painter.id = this._boardId;
                this._painter.uid = this.uid;
            }
            // 下发当前页的画笔信息
            else if (cmd === BoardEventType.CUR_BOARD_DATA) {
                Logger.info("get current board data.");
                var isFinished = msgBody.isFinished;
                // 处理数据
                this._processBoardData(msgBody);
                // 重新渲染当页数据
                this._renderCurrentPainter();
                // 如果同步完成，隐藏 loading
                if (isFinished) {
                    // 隐藏加载
                    ((_a = this._initConfig.authParams) === null || _a === void 0 ? void 0 : _a.progressEnable) && this._painter.hideLoading();
                    ((_b = this._initConfig.authParams) === null || _b === void 0 ? void 0 : _b.drawEnable) && this._painter.setEnable(true);
                    // 数据同步完成
                    this.emit(EventNames.DATA_SYNC_COMPLETED);
                }
            }
            // 下发缓存页（例如：前三页、后三页）的信息
            else if (cmd === BoardEventType.CACHE_BOARD_DATA) {
                Logger.info("get cache board data.");
                this._processBoardData(msgBody);
            }
        };
        ArWhiteBoard.prototype._handleChannelMsg = function (msgContent) {
            var _this_1 = this;
            var _a, _b;
            // console.log('handle channel msg ', msgContent);
            msgContent.ChanId; var FromUId = msgContent.FromUId, MsgBody = msgContent.MsgBody; msgContent.MsgId; msgContent.MsgType;
            var msgBody = JSON.parse(MsgBody);
            var cmd = msgBody.cmd; msgBody.bId; var data = msgBody.data;
            // 不处理自己的信息
            if (FromUId === this.uid)
                return;
            // 添加图形
            if (cmd === BoardEventType.ADD_SHAPE) {
                var bId_1 = data.bId, pId = data.pId, shape = data.shape, props = data.props; data.style; data.width; data.height; data.offset;
                Logger.debug("remote user add shape (" + shape + " - " + pId + ")");
                // 获取当前画笔所在页的 boardData
                var boardData = this._fileBoardData.get(bId_1);
                if (boardData) {
                    // 存储画笔数据
                    var brushData = boardData.pList.get(pId);
                    // 当前画笔存在，合并或覆盖数据，否则添加记录
                    if (brushData) {
                        // 涂鸦是增量，需要整合成一条数据
                        if (shape === EShapeType.FREE_DRAW) {
                            var currentPoints = brushData.props.points;
                            var points_2 = props.points;
                            // 如果广播的属性是现在属性的超集，则使用广播来的属性，否则，做增量处理
                            var shapePointString = currentPoints.map(function (item) { return item.toString(); });
                            // 如果广播的属性是现在属性的超集，则使用广播来的属性，否则，做增量处理
                            if (!shapePointString.every(function (item) { return points_2.toString().includes(item); })) {
                                brushData.props.points = currentPoints.concat(points_2);
                            }
                        }
                        else { // 其他图形直接覆盖 - 其他图形绘制中
                            brushData.props = props;
                        }
                    }
                    else {
                        boardData.pList.set(pId, data);
                    }
                    // 如果当前页数据更新，则热更新当前页的涂鸦
                    if (bId_1 === this._boardId) {
                        // 如果是当前白板需要重新渲染 - 清空画板
                        this._painter.clear();
                        // 重现渲染
                        boardData.pList.forEach(function (brush) {
                            // 转换数据
                            _this_1._convertBrushDataAndRenderToBoard(brush);
                        });
                    }
                }
            }
            // 删除图形
            else if (cmd === BoardEventType.DELETE_SHAPE) {
                var bId_2 = data.bId, pIds_4 = data.pIds;
                Logger.debug("remote user delete shapes: " + pIds_4);
                // 获取当前画笔所在页的 boardData
                var boardData_2 = this._fileBoardData.get(bId_2);
                if (boardData_2) {
                    // 如果当前页数据更新，则热更新当前页的涂鸦
                    var isCurrentPainter_1 = bId_2 === this._boardId;
                    // 如果是当前白板需要重新渲染 - 清空画板
                    if (isCurrentPainter_1) {
                        this._painter.clearSelfLaserPoint();
                        this._painter.clear();
                    }
                    // 重现渲染
                    boardData_2.pList.forEach(function (brush) {
                        var pId = brush.pId;
                        // 当前画笔没有被删除时需要重新渲染
                        if (!~pIds_4.indexOf(pId)) {
                            // 转换数据
                            isCurrentPainter_1 && _this_1._convertBrushDataAndRenderToBoard(brush);
                        }
                        else {
                            boardData_2.pList.delete(pId);
                        }
                    });
                }
            }
            // 移动图形
            else if (cmd === BoardEventType.MOVE_SHAPE) {
                var bId_3 = data.bId, pIds_5 = data.pIds, offset_3 = data.offset;
                Logger.debug("remote user move shapes: " + pIds_5 + ", offset: " + offset_3);
                // 获取当前画笔所在页的 boardData
                var boardData = this._fileBoardData.get(bId_3);
                if (boardData) {
                    // 清空画板
                    this._painter.clearSelfLaserPoint();
                    this._painter.clear();
                    // 转换一波数据
                    boardData.pList.forEach(function (brush) {
                        if (!!~pIds_5.indexOf(brush.pId)) {
                            var width = brush.width, height = brush.height;
                            var convertToOriginOffset = [offset_3[0] * width, offset_3[1] * height];
                            if (brush.shape === EShapeType.LASER_POINTER) {
                                // 激光笔是 DOM 元素，更改元素的中心点位置即可
                                brush.position = convertToOriginOffset;
                            }
                            else {
                                brush.position[0] += convertToOriginOffset[0];
                                brush.position[1] += convertToOriginOffset[1];
                            }
                        }
                        // 如果当前页数据更新，则热更新当前页的涂鸦
                        var isCurrentPainter = bId_3 === _this_1._boardId;
                        if (isCurrentPainter) {
                            // 转换数据
                            _this_1._convertBrushDataAndRenderToBoard(brush);
                        }
                    });
                }
            }
            // 当前文件信息 - 同步白板页数据
            else if (cmd === BoardEventType.FILE_LIST) {
                data.fId; var fileList = data.fileList;
                // 更新文件列表信息
                fileList.forEach(function (fInfo) {
                    var fileInfo = new BoardFile();
                    fileInfo.type = fInfo.type;
                    fileInfo.fId = fInfo.fId;
                    fileInfo.url = fInfo.url;
                    fileInfo.title = fInfo.title;
                    fileInfo.currentPageIndex = fInfo.currentPageIndex;
                    fileInfo.totalPageCount = fInfo.totalPageCount;
                    fileInfo.width = fInfo.width;
                    fileInfo.height = fInfo.height;
                    var fileBoardList = fInfo.boardList;
                    fileBoardList.forEach(function (bInfo) {
                        // 文件的白板列表（顺序排列）
                        fileInfo.boardList.push(bInfo.bId);
                        var boardData = new BoardData(bInfo.bId);
                        boardData.scale = bInfo.scale;
                        boardData.ratio = bInfo.ratio;
                        boardData.color = bInfo.color;
                        boardData.image = bInfo.image;
                        boardData.url = bInfo.url;
                        // 覆盖
                        _this_1._fileBoardData.set(bInfo.bId, boardData);
                    });
                    // 覆盖
                    _this_1._fileList.set(fInfo.fId, fileInfo);
                });
            }
            // 添加画板页
            else if (cmd === BoardEventType.ADD_BOARD) {
                var bId_4 = data.bId;
                Logger.debug("remote user add board: " + bId_4);
                this._painter.releaseMouse();
                this._addBoard(bId_4);
            }
            // 删除画板页
            else if (cmd === BoardEventType.DELETE_BOARD) {
                var bIds = data.bIds;
                Logger.debug("remote user delete board: " + bIds);
                this._painter.releaseMouse();
                // 删除白板页
                this._deleteBoard(bIds);
            }
            // 切换画板页
            else if (cmd === BoardEventType.SWITCH_BOARD) {
                var bId_5 = data.bId;
                Logger.debug("remote user switch to board: " + bId_5);
                this._painter.releaseMouse();
                this._gotoBoard(bId_5);
            }
            // 缩放白板
            else if (cmd === BoardEventType.SCALE_BOARD) {
                var _c = data, bId_6 = _c.bId, scale = _c.scale;
                Logger.debug("remote user scale board to " + scale);
                this._painter.releaseMouse();
                this._scaleBoard(bId_6, scale);
                // 白板页缩放
                this.emit(EventNames.SCALE_BOARD, bId_6, scale);
            }
            // 白板宽高比更新
            else if (cmd === BoardEventType.RATIO_BOARD) {
                var _d = data, bId_7 = _d.bId, ratio = _d.ratio;
                Logger.debug("remote user ratio board to " + ratio);
                this._painter.releaseMouse();
                this._ratioBoard(bId_7, ratio);
                // 白板页宽高比更新
                this.emit(EventNames.RATIO_BOARD, bId_7, ratio);
            }
            // 清空画板（背景或涂鸦）
            else if (cmd === BoardEventType.CLEAR_BOARD) {
                this._painter.releaseMouse();
                var _e = data, bId_8 = _e.bId, bg = _e.bg;
                Logger.debug("remote user clear board brush true, clear background " + bg);
                var findBoardData = this._fileBoardData.get(bId_8);
                if (findBoardData) {
                    findBoardData.pList.clear();
                    // 清空白板的撤销和重做
                    findBoardData.canUndoList = [];
                    findBoardData.canRedoList = [];
                    this._painter.clearAll();
                    // 返回切换页的数据
                    if (bg) {
                        // 清空背景
                        this._clearBackground();
                    }
                    // 远端用户重置画板
                    this.emit(EventNames.CLEAR_BOARD, this._fileId, this._boardId, !!bg);
                    // 添加本地是否可撤销/可重做的回调
                    this.emit(EventNames.CAN_REDO_STATUS_CHANGE, ((_a = this._painter) === null || _a === void 0 ? void 0 : _a.canRedoList.length) > 0);
                    this.emit(EventNames.CAN_UNDO_STATUS_CHANGE, ((_b = this._painter) === null || _b === void 0 ? void 0 : _b.canUndoList.length) > 0);
                }
            }
            // 重置画板（删除所有文件和涂鸦，保留第一页结构）
            else if (cmd === BoardEventType.RESET_BOARD) {
                Logger.debug('remote user rest board');
                this._painter.releaseMouse();
                this._resetBoard();
                // 远端用户重置画板
                this.emit(EventNames.RESET_BOARD);
            }
            // 更改画板背景颜色
            else if (cmd === BoardEventType.UPDATE_BACKGROUND) {
                var bId_9 = data.bId, color = data.color;
                Logger.debug("remote user update background color " + color);
                this._setBoardBGColor(bId_9, color);
                // 远端用户白板页的背景颜色变化
                this.emit(EventNames.BOARD_BACKGROUND_COLOR_CHANGE, this._fileId, bId_9, color);
            }
            // 更改画板背景图片
            else if (cmd === BoardEventType.UPDATE_BACKGROUND_IMAGE) {
                var bId_10 = data.bId, image = data.image, imageFillMode = data.imageFillMode;
                Logger.debug("remote user update background image " + image);
                this._setBoardBGImage(bId_10, image, imageFillMode);
            }
            // 更改画板 H5
            else if (cmd === BoardEventType.UPDATE_BACKGROUND_H5) ;
        };
        /**
         * 获取文件下的白板信息
         *
         * @private
         * @param fileId
         * @return {*}
         */
        ArWhiteBoard.prototype._getFileInfo = function (fileId) {
            var fileInfo = this._fileList.get(fileId);
            if (fileInfo) {
                return fileInfo;
            }
            return null;
        };
        /**
         * 新增白板页
         *
         * - 本地添加
         * - 远程添加，本地同步
         *
         * Note: 白板添加时 ratio 都为空，只有第一次 setBoardRatio 之后还会覆盖，否则均使用本地设置的宽高比例
         * @private
         * @param {string} boardId
         */
        ArWhiteBoard.prototype._addBoard = function (boardId) {
            var _a, _b;
            // this._totalBoardCount += 1;
            this._curMaxBoardPage += 1;
            var boardData = new BoardData(boardId);
            boardData.color = this._initConfig.styleParams.globalBackgroundColor;
            // 服务端 ratio 是空字符串，客户端以本地 raio 为标准
            boardData.ratio = this._initConfig.baseParams.ratio;
            this._fileBoardData.set(boardId, boardData);
            // 同步到 fileInfo
            var fileInfo = this._fileList.get(this._fileId);
            fileInfo.boardList.push(boardId);
            // fileInfo.totalPageCount = fileInfo.boardList.length;
            // 切换到添加的这一页
            this._currentBoardPage = fileInfo.boardList.length;
            this._totalBoardCount = fileInfo.boardList.length;
            this._boardId = boardId;
            Logger.info("\u5207\u6362\u5230\u7B2C" + this._currentBoardPage + "\u9875");
            this._renderCurrentPainter();
            // 添加页
            this.emit(EventNames.ADD_BOARD, this._fileId, [boardId]);
            this.emit(EventNames.GOTO_BOARD, this._fileId, this._boardId);
            // 添加本地是否可撤销/可重做的回调
            this.emit(EventNames.CAN_REDO_STATUS_CHANGE, ((_a = this._painter) === null || _a === void 0 ? void 0 : _a.canRedoList.length) > 0);
            this.emit(EventNames.CAN_UNDO_STATUS_CHANGE, ((_b = this._painter) === null || _b === void 0 ? void 0 : _b.canUndoList.length) > 0);
        };
        /**
         * 删除白板页
         *
         * - 本地删除
         * - 远程删除，本地同步
         * @private
         * @param boardId
         */
        ArWhiteBoard.prototype._deleteBoard = function (boardIds) {
            var _a, _b;
            var fileInfo = this._getFileInfo(this._fileId);
            // 倒叙删除，防止漏删或错删
            for (var i = fileInfo.boardList.length - 1; i > -1; i--) {
                var boardId = fileInfo.boardList[i];
                if (boardIds.includes(boardId)) {
                    // 删除数据
                    this._fileBoardData.delete(boardId);
                    fileInfo.boardList.splice(i, 1);
                    // 如果删除的是当前白板，则跳转至前一页
                    if (boardId === this._boardId) {
                        this._currentBoardPage -= 1;
                        this._totalBoardCount = fileInfo.boardList.length;
                        // 切换到上一页
                        Logger.info("\u5207\u6362\u5230\u7B2C" + this._currentBoardPage + "\u9875");
                        this._boardId = fileInfo.boardList[this._currentBoardPage - 1];
                        this._renderCurrentPainter();
                        // 在 Delete 成功之后，删除并返回上一页
                        this.emit(EventNames.GOTO_BOARD, this._fileId, this._boardId);
                        // 添加本地是否可撤销/可重做的回调
                        this.emit(EventNames.CAN_REDO_STATUS_CHANGE, ((_a = this._painter) === null || _a === void 0 ? void 0 : _a.canRedoList.length) > 0);
                        this.emit(EventNames.CAN_UNDO_STATUS_CHANGE, ((_b = this._painter) === null || _b === void 0 ? void 0 : _b.canUndoList.length) > 0);
                    }
                }
            }
            this.emit(EventNames.DELETE_BOARD, this._fileId, [boardIds]);
        };
        /**
         * 跳转白板页
         *
         * - 本地跳转
         * - 远程跳转，本地同步
         * @private
         * @param boardId
         */
        ArWhiteBoard.prototype._gotoBoard = function (boardId) {
            var _a, _b;
            var fileInfo = this._getFileInfo(this._fileId);
            var findPageIndex = fileInfo.boardList.indexOf(boardId);
            this._currentBoardPage = findPageIndex + 1;
            this._totalBoardCount = fileInfo.boardList.length;
            this._boardId = boardId;
            // 切换到下一页
            Logger.info("\u5207\u6362\u5230\u7B2C" + this._currentBoardPage + "\u9875, \u603B\u9875\u6570 " + this._totalBoardCount);
            this._renderCurrentPainter();
            // 切换画板
            this.emit(EventNames.GOTO_BOARD, this._fileId, this._boardId);
            // 添加本地是否可撤销/可重做的回调
            this.emit(EventNames.CAN_REDO_STATUS_CHANGE, ((_a = this._painter) === null || _a === void 0 ? void 0 : _a.canRedoList.length) > 0);
            this.emit(EventNames.CAN_UNDO_STATUS_CHANGE, ((_b = this._painter) === null || _b === void 0 ? void 0 : _b.canUndoList.length) > 0);
        };
        /**
         * 重置白板
         *
         * @private
         */
        ArWhiteBoard.prototype._resetBoard = function () {
            Logger.info("board reset success.");
            // 清空涂鸦
            this._painter.clearAll();
            // 清空所有文件，并保留第一页的基本信息
            var fileInfo = this._getFileInfo(this._fileId);
            this._fileList.clear();
            var currentBoardId = fileInfo.boardList[0];
            var bData = new BoardData(currentBoardId);
            // 当前第一页的比例
            var firstBoardInfo = this._fileBoardData.get(currentBoardId);
            bData.ratio = firstBoardInfo.ratio;
            this._boardId = currentBoardId;
            // 保留 #DEFAULT 文件以及其默认页
            this._fileId = '#DEFAULT';
            fileInfo.fId = this._fileId;
            fileInfo.boardList = [currentBoardId];
            this._fileBoardData.clear();
            this._fileBoardData.set(currentBoardId, bData);
            this._fileList.set(this._fileId, fileInfo);
            this._currentBoardPage = 1;
            this._totalBoardCount = 1;
            this._curMaxBoardPage = 1; // 切文件、第一获取的时候，需要重置
            this._boardId = currentBoardId;
            this._renderCurrentPainter();
        };
        /**
         * 缩放白板页
         *
         * @private
         * @param {string} boardId
         * @param {number} scale
         */
        ArWhiteBoard.prototype._scaleBoard = function (boardId, scale) {
            var _this_1 = this;
            var boardData = this._fileBoardData.get(boardId);
            boardData && (boardData.scale = scale);
            // 当前页缩放画板
            if (boardId === this._boardId) {
                Logger.info("\u767D\u677F\u7F29\u653E\u81F3" + scale);
                // 设置当前画板的缩放大小
                this._painter.scalePainter(scale);
                this._painter.clear(true);
                // 设置本地保存的每一个画板的撤销和重做列表
                this._painter.canUndoList = boardData.canUndoList;
                this._painter.canRedoList = boardData.canRedoList;
                // 重新绘制
                boardData && boardData.pList.forEach(function (brush) {
                    // 转换数据
                    _this_1._convertBrushDataAndRenderToBoard(brush);
                });
                // 重新绘制控制框的大小和位置
                this._painter.renderControlBox();
            }
        };
        /**
         *
         *
         * @private
         * @param {string} boardId
         * @param {number} scale
         */
        ArWhiteBoard.prototype._ratioBoard = function (boardId, ratio) {
            var _this_1 = this;
            var findBoardData = this._fileBoardData.get(boardId);
            findBoardData && (findBoardData.ratio = ratio);
            // 当前页缩放画板
            if (boardId === this._boardId) {
                Logger.info("\u767D\u677F\u6BD4\u4F8B\u53D8\u66F4\u4E3A" + ratio);
                this._painter.setBoardRatio(ratio);
                this._painter.clear(true);
                // 重新绘制
                findBoardData && findBoardData.pList.forEach(function (brush) {
                    // 转换数据
                    _this_1._convertBrushDataAndRenderToBoard(brush);
                });
                // 重新绘制控制框的大小和位置
                this._painter.renderControlBox();
            }
        };
        /**
         * 更新白板页背景颜色
         *
         * @private
         * @param {string} boardId
         * @param {string} color
         */
        ArWhiteBoard.prototype._setBoardBGColor = function (boardId, color) {
            var _a;
            var findBoardData = this._fileBoardData.get(boardId);
            findBoardData && (findBoardData.color = color);
            // 当前页缩放画板
            if (boardId === this._boardId) {
                // 设置当前画板的缩放大小
                (_a = this._painter) === null || _a === void 0 ? void 0 : _a.setCanvasBGColor(color);
                Logger.info("\u767D\u677F\u80CC\u666F\u989C\u8272\u6539\u53D8\u4E3A\uFF1A" + color);
            }
        };
        /**
         * 全量设置白板页背景颜色
         * ArWhiteBoard
         * - 更改所有白板背景颜色
         * - 后面新增的白板默认的背景颜色
         * @private
         * @param {string} boardId
         * @param {string} color
         */
        ArWhiteBoard.prototype._setGlobalBoardBGColor = function (color) {
            var _this_1 = this;
            var fileInfo = this._getFileInfo(this._fileId);
            if (fileInfo) {
                // 设置全局背景颜色
                this._initConfig.styleParams.globalBackgroundColor = color;
                fileInfo.boardList.forEach(function (id) {
                    var _a;
                    var boardData = _this_1._fileBoardData.get(id);
                    boardData.color = color;
                    // 当前页更新背景颜色，其他页在翻页时会重新绘制
                    if (boardData.bId === _this_1._boardId) {
                        (_a = _this_1._painter) === null || _a === void 0 ? void 0 : _a.setCanvasBGColor(color);
                    }
                });
            }
        };
        /**
         * 设置背景图片
         *
         * @private
         * @param {string} boardId
         * @param {string} color
         */
        ArWhiteBoard.prototype._setBoardBGImage = function (boardId, imageUrl, imageFillMode) {
            var _this_1 = this;
            if (imageFillMode === void 0) { imageFillMode = 'contain'; }
            return new Promise(function (resolve, reject) {
                var reg = /^https:\/\//i;
                if (!reg.test(imageUrl)) {
                    reject(new ArWhiteBoardError(exports.EBoardErrorCode.INVALID_PARAMS, 'imageUrl must be https or http files.'));
                }
                else {
                    // 请求超时
                    var useTimeout = function (cb, duration) {
                        var defaultDuration = 1000;
                        var timer = null;
                        var clear = function () {
                            if (timer) {
                                clearTimeout(timer);
                                timer = null;
                            }
                        };
                        timer = setTimeout(function () {
                            clear();
                            cb && cb();
                        }, duration || defaultDuration);
                        return clear;
                    };
                    // 开始设置
                    var img_1 = new Image();
                    // N 秒后取消请求
                    var cancelLoad_1 = useTimeout(function () {
                        img_1.src = '';
                        img_1.onload = function () { };
                        img_1.onabort = function () { };
                        img_1.onerror = function () { };
                        var err = new ArWhiteBoardError(BackgroundErrorCode.INVALID_IMAGE_ASSETS, 'The image resource request timeout.');
                        Logger.error(err);
                        _this_1.emit(EventNames.IMAGE_STATUS_CHANGED, _this_1._fileId, boardId, exports.EBoardImageStatus.BOARD_IMAGE_STATUS_LOAD_TIMEOUT, {
                            imageUrl: imageUrl,
                            imageFillMode: imageFillMode
                        });
                    }, _this_1._initConfig.baseParams.imageResourceTimeout);
                    img_1.onload = function (e) {
                        cancelLoad_1();
                        var findBoardData = _this_1._fileBoardData.get(boardId);
                        findBoardData && (findBoardData.image = imageUrl,
                            findBoardData.imageFillMode = imageFillMode);
                        // 当前页缩放画板
                        if (boardId === _this_1._boardId) {
                            // 设置当前画板的缩放大小
                            _this_1._painter.setCanvasBGImage(imageUrl, imageFillMode);
                            Logger.info("\u767D\u677F\u80CC\u666F\u989C\u8272\u56FE\u7247\u6539\u53D8\u4E3A\uFF1A" + imageUrl);
                        }
                        _this_1.emit(EventNames.IMAGE_STATUS_CHANGED, _this_1._fileId, boardId, exports.EBoardImageStatus.BOARD_IMAGE_STATUS_LOAD_DONE, {
                            imageUrl: imageUrl,
                            imageFillMode: imageFillMode
                        });
                        resolve();
                    };
                    img_1.onabort = function (e) {
                        cancelLoad_1();
                        var err = new ArWhiteBoardError(BackgroundErrorCode.INVALID_IMAGE_ASSETS, 'The image resource request aborted.');
                        Logger.error(err);
                        _this_1.emit(EventNames.IMAGE_STATUS_CHANGED, _this_1._fileId, boardId, exports.EBoardImageStatus.BOARD_IMAGE_STATUS_LOAD_ABORT, {
                            imageUrl: imageUrl,
                            imageFillMode: imageFillMode
                        });
                        // reject(err);
                    };
                    img_1.onerror = function (e) {
                        cancelLoad_1();
                        var err = new ArWhiteBoardError(BackgroundErrorCode.INVALID_IMAGE_ASSETS, 'The image resource request error.');
                        Logger.error(err);
                        _this_1.emit(EventNames.IMAGE_STATUS_CHANGED, _this_1._fileId, boardId, exports.EBoardImageStatus.BOARD_IMAGE_STATUS_LOAD_ERROR, {
                            imageUrl: imageUrl,
                            imageFillMode: imageFillMode
                        });
                        // reject(err);
                    };
                    img_1.src = imageUrl;
                    _this_1.emit(EventNames.IMAGE_STATUS_CHANGED, _this_1._fileId, boardId, exports.EBoardImageStatus.BOARD_IMAGE_STATUS_LOADING, {
                        imageUrl: imageUrl,
                        imageFillMode: imageFillMode
                    });
                    // 可以改为 progress 的模式
                    // var xhr = new XMLHttpRequest();
                    // xhr.open('GET', imageUrl, true);
                    // xhr.responseType = 'arraybuffer';
                    // xhr.onprogress = (event) => {
                    //   if (event.lengthComputable) {
                    //     var percentComplete = event.loaded / event.total;
                    //     console.log(percentComplete);
                    //   }
                    // };
                    // xhr.onload = (event) => {
                    //   if (xhr.status === 200) {
                    //     var blob = new Blob([xhr.response], {type: 'image/jpeg'});
                    //     var reader = new FileReader();
                    //     reader.onload = () => {
                    //       var base64data = reader.result;
                    //       console.log("base64data", base64data)
                    //       // img.src = base64data!;
                    //     };
                    //     reader.readAsDataURL(blob);
                    //   }
                    // };
                    // xhr.send();
                }
            });
        };
        /**
         * 设置当前白板页的背景H5页面
         *
         * 注意：1. 该接口只能在普通白板上生效
         * 注意：2. 该接口只支持https协议的网址
         * 注意：3. 该接口与 setBackgroundImage 接口互斥
         * 注意：4. 背景h5页面内的操作不能同步
         * @private
         * @param {string} boardId
         * @param {string} url
         */
        ArWhiteBoard.prototype._setBoardH5 = function (boardId, url) {
            var findBoardData = this._fileBoardData.get(boardId);
            findBoardData && (findBoardData.url = url);
            // 当前页缩放画板
            if (boardId === this._boardId) {
                // 设置当前画板的缩放大小
                this._painter.setCanvasBGH5(url);
                Logger.info("\u767D\u677F\u80CC\u666F\u989C\u8272\u56FE\u7247\u6539\u53D8\u4E3A\uFF1A" + url);
            }
        };
        return ArWhiteBoard;
    }(EventEmitter /*implements IArWhiteBoard*/));

    exports.ArWhiteBoard = ArWhiteBoard;
    exports["default"] = ArWhiteBoard;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
