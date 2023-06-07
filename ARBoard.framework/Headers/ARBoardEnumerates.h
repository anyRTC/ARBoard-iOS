//
//  ARBoardEnumerates.h
//  ARBoard
//
//  Created by 余生丶 on 2021/9/16.
//

#ifndef ARBoardEnumerates_h
#define ARBoardEnumerates_h

/** 错误码 */
typedef NS_ENUM(NSInteger, ARBoardErrorCode) {
    /**
     * 参数不合法。
     */
    ARBoardErrorCodeInvalid_Params = 1000,
    
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
    ARBoardErrorCodeInvalid_Operation = 1001,
    
    /**
     * 初始化失败。
     *
     * 一般是因为缺少参数或参数不合法
     */
    ARBoardErrorCodeInit_Error = 2000,
    
    /**
     * 服务鉴权失败。
     * 根据 errorMessage 检查是否开通服务，是否被禁用
     */
    ARBoardErrorCodeAuth_Failed = 2001,
    
    /**
     * 鉴权超时。
     */
    ARBoardErrorCodeAuth_TimeOut = 2002,
    
    /**
      * 历史数据同步失败。
      */
    ARBoardErrorCodeHistory_Sync_Failed = 2003,
    
    /**
     * 无效背景图片资源。
     */
    ARBoardErrorCodeInvalid_Image_Assets = 3000,
    
    /**
     * 请求图片超时。
     */
    ARBoardErrorCodeBackground_TimeOut = 3001,
};

/** 画笔类型 */
typedef NS_ENUM(NSInteger, ARBoardToolType) {
    /**
     0: 鼠标
     */
    ARBoardToolTypeNone = 0,
    /**
     1: 选择
     */
    ARBoardToolTypeSelect = 1,
    /**
     2: 涂鸦
     */
    ARBoardToolTypeFree_draw = 2,
    /**
     3: 橡皮擦
     */
    ARBoardToolTypeEraser = 3,
    /**
     4: 激光笔
     */
    ARBoardToolTypeLaser_pointer = 4,
    /**
     5: 直线
     */
    ARBoardToolTypeLine = 5,
    /**
     6: 箭头
     */
    ARBoardToolTypeArrow = 6,
    /**
     7: 矩形
     */
    ARBoardToolTypeRect = 7,
    /**
     8: 椭圆
     */
    ARBoardToolTypeEllipse = 8,
    /**
     9: 文本
     */
    ARBoardToolTypeText = 9
};

/** 网络连接状态类型 */
typedef NS_ENUM(NSInteger, ARBoardConnectionStateType) {
    /**
     1: 网络连接断开
     */
    ARBoardConnectionStateDisconnected = 1,
    
    /**
     2: 建立网络连接中
     */
    ARBoardConnectionStateConnecting = 2,
    /**
     3: 重新建立网络连接中
     */
    ARBoardConnectionStateReconnecting = 3,
    /**
     4: 网络已连接
     */
    ARBoardConnectionStateConnected = 4,
    /**
     5: 网络连接失败
     */
    ARBoardConnectionStateFailed = 5
    
};

/** 引起网络连接状态发生改变的原因 */
typedef NS_ENUM(NSUInteger, ARBoardConnectionChangedReason) {
    
    /**
     0: 默认值
     */
    ARBoardConnectionChangedDefault = 0,
    
    /**
     1: 请求超时，通常是因为网络质量差或连接断开导致与服务器通信失败。
     */
    ARBoardConnectionChangedTimeout = 1,
    
    /**
     2: 响应错误，一般是状态码非法。
     */
    ARBoardConnectionChangedResponseError = 2,
    
    /**
     3: 无法定位的网络错误
     */
    ARBoardConnectionChangedError = 3,
    
    /**
     4: 本地保活超时
     */
    ARBoardConnectionChangedKeepAliveTimeout = 4,
    
    /**
     5: 获取不到网关地址
     */
    ARBoardConnectionChangedGateWay = 5
};

/** 字体样式 */
typedef NS_ENUM(NSUInteger, ARBoardTextStyle) {
    /**
     0: 默认
     */
    ARBoardTextStyleNomal = 0,
    /**
     1: 粗体
     */
    ARBoardTextStyleBold = 1,
    /**
     2: 斜体
     */
    ARBoardTextStyleItalic = 2,
    /**
     2: 粗斜体
     */
    ARBoardTextStyleBoldItalic = 3,
};

/** 背景显示模式 */
typedef NS_ENUM(NSUInteger, ARBoardFillMode) {
    /**
     0: 默认
     */
    ARBoardFillModeContain = 0,
    /**
     1: 覆盖
     */
    ARBoardFillModeCover = 1,
    /**
     2: 填充
     */
    ARBoardFillModeFill = 2
};

/** 背景图片加载状态 */
typedef NS_ENUM(NSUInteger, ARBoardImageStatus) {
    /**
     1: 图片正在加载
     */
    ARBoardImageStatusLoading = 1,
    /**
     2: 图片加载完成
     */
    ARBoardImageStatusDone = 2,
    /**
     3: 图片加载中断
     */
    ARBoardImageStatusAbort = 3,
    /**
     4: 图片加载错误。监听到此错误码时，需要重新调用接口设置
     */
    ARBoardImageStatusError = 4,
    /**
     5: 图片加载超时。监听到此错误码时，需要重新调用接口设置
     */
    ARBoardImageStatusTimeOut = 5,
    /**
     6: 图片取消加载
     */
    ARBoardImageStatusCancel = 6,
};

#endif /* ARBoardEnumerates_h */
