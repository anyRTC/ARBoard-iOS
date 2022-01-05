//
//  ARBoardObjects.h
//  ARBoard
//
//  Created by 余生丶 on 2021/9/16.
//

#import <Foundation/Foundation.h>
#import <dsbridge/dsbridge.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * @brief 白板视图
 */
@interface ARBoardView : DWKWebView

@end

/**
 * @brief 白板信息
 */
@interface ARBoardInfo : NSObject

/// 白板 ID
@property (nonatomic, copy) NSString *boardId;
/// 背景图或者背景 H5 页面的 URL
@property (nonatomic, copy) NSString *backgroundUrl;
/// 白板背景色
@property (nonatomic, strong) UIColor *backgroundColor;

@end

/**
 * @brief 文件信息
 */
@interface ARBoardFileInfo : NSObject

/// 文件标识
@property (nonatomic, copy) NSString *fileId;
/// 文件名称
@property (nonatomic, copy) NSString *title;
/// 文件下载地址
@property (nonatomic, copy) NSString *downloadURL;
/// 当前页数
@property (nonatomic, assign) int pageIndex;
/// 页数
@property (nonatomic, assign) int pageCount;
/// 白板信息列表
@property (nonatomic, strong) NSArray<ARBoardInfo *> *boardInfoList;

@end

NS_ASSUME_NONNULL_END
