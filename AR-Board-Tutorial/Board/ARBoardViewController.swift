//
//  ARBoardViewController.swift
//  AR-Board-Tutorial
//
//  Created by 余生丶 on 2021/10/28.
//

import ARBoard
import UIKit
import WebKit
import SnapKit

var boardKit: ARBoardKit!

class ARBoardViewController: UIViewController {
    var localUid: String!
    var channelId: String!
    fileprivate var isJoin: Bool = false
    /// 菜单开关
    fileprivate var isMenuOn: Bool = false
    /// 菜单
    lazy var menuVc: ARMenuViewController = {
        let storyBoard = UIStoryboard(name: "Main", bundle: nil)
        let menuVc = storyBoard.instantiateViewController(withIdentifier: "ARBoard_Menu") as? ARMenuViewController
        menuVc?.boardVc = self
        return menuVc!
    }()
    private var boardView: ARBoardView!

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        edgesForExtendedLayout = []
        (UIApplication.shared.delegate as! AppDelegate).allowRotation = true
        initializeUI()
    }
    
    func initializeBoard() {
        let authParam = ARBoardAuthParam()
        authParam.appId = AppID
        authParam.uid = localUid
    
        let baseParam = ARBoardBaseParam()
        baseParam.authConfig.drawEnable = false
        baseParam.config.ratio = "16:9"
        baseParam.config.toolType = .none
        
        baseParam.styleConfig.brushColor = UIColor.black
        baseParam.styleConfig.brushThin = 2
        
        boardKit = ARBoardKit(authParam: authParam, roomId: channelId, boardParam: baseParam, delegate: self)
        
        boardView = boardKit.getBoardRenderView()
        
        view.insertSubview(boardView, at: 0)
        boardView.snp.makeConstraints { make in
            make.edges.equalToSuperview()
        }
    }
    
    func initializeUI() {
        title = channelId
        let leftButton = UIButton(type: .custom)
        leftButton.setTitle("菜单", for: .normal)
        leftButton.setTitleColor(UIColor(hexString: "#294BFF"), for: .normal)
        leftButton.titleLabel?.font = UIFont(name: PingFang, size: 16)
        leftButton.addTarget(self, action: #selector(didClickMenu), for: .touchUpInside)
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: leftButton)
        
        let rightButton = UIButton(type: .custom)
        rightButton.frame = CGRect(x: 0, y: 0, width: 50, height: 50)
        rightButton.backgroundColor = UIColor.clear
        rightButton.setImage(#imageLiteral(resourceName: "icon_exit"), for: .normal)
        rightButton.addTarget(self, action: #selector(exitBoardRoom), for: .touchUpInside)
        navigationItem.leftBarButtonItem = UIBarButtonItem(customView: rightButton)
    }
    
    @objc func didClickMenu() {
        view.endEditing(true)
        
        if isJoin {
            isMenuOn.toggle()
            if isMenuOn {
                view.addSubview(menuVc.view)
                addChild(menuVc)
            }
            
            UIView.animate(withDuration: 0.5) {
                self.menuVc.view.width = self.isMenuOn ? ARScreenWidth : ARScreenWidth + 320
            } completion: { _ in
                if !self.isMenuOn {
                    self.menuVc.view.removeFromSuperview()
                    self.menuVc.removeFromParent()
                }
            }
        } else {
            view.makeToast("Join Channel first", duration: 1.0, position: ARUICSToastPositionCenter)
        }
    }
    
    @objc func exitBoardRoom() {
        ARAlertActionSheet.showAlert(titleStr: "退出房间", msgStr: nil, currentVC: self, cancelHandler: nil, otherBtns: ["确认"]) { _ in
            (UIApplication.shared.delegate as! AppDelegate).allowRotation = false
            boardKit = nil
            if self.isMenuOn {
                self.menuVc.view.removeFromSuperview()
                self.menuVc.removeFromParent()
            }
            self.dismiss(animated: false, completion: nil)
        }
    }
    
    override func willAnimateRotation(to toInterfaceOrientation: UIInterfaceOrientation, duration: TimeInterval) {
        initializeBoard()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        navigationController?.navigationBar.setBackgroundImage(createImage(UIColor(hexString: "#FFFFFF")), for: .any, barMetrics: .default)
        navigationController?.navigationBar.isTranslucent = false
        navigationController?.navigationBar.shadowImage = UIImage()
    }
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .default
    }
    
    deinit {
        print("boardVc deinit")
    }
}

extension ARBoardViewController: ARBoardDelegate {
    func board(_ boardKit: ARBoardKit, didOccurError errorCode: ARBoardErrorCode) {
        /// 发生错误回调
        Logger.log(message: "didOccurError errorCode = \(errorCode.rawValue)", level: .error)
    }
    
    func didHistoryDataSyncCompleted(_ boardKit: ARBoardKit) {
        /// 历史数据同步完成回调
        boardKit.setDrawEnable(true)
        isJoin = true
        Logger.log(message: "didHistoryDataSyncCompleted", level: .error)
    }
    
    func board(_ boardKit: ARBoardKit, addBoard boardIds: [Any], fileId: String) {
        /// 添加白板页的回调
        Logger.log(message: "addBoard boardIds = \(boardIds) fileId = \(fileId) ", level: .info)
    }
    
    func board(_ boardKit: ARBoardKit, deleteBoard boardIds: [Any], fileId: String) {
        /// 删除白板页的回调
        Logger.log(message: "deleteBoard boardIds = \(boardIds) fileId = \(fileId)", level: .info)
    }
    
    func board(_ boardKit: ARBoardKit, gotoBoard fileId: String, boardId: String) {
        /// 白板页切换的回调
        Logger.log(message: "gotoBoard fileId = \(fileId) boardId = \(boardId)", level: .info)
    }
    
    func board(_ boardKit: ARBoardKit, scaleChange boardId: String, scale: CGFloat) {
        /// 白板缩放的回调
        Logger.log(message: "scaleChannge boardId = \(boardId) scale = \(scale)", level: .info)
        NotificationCenter.default.post(name: UIResponder.boardNotificationScaleChange, object: nil, userInfo: nil)
    }
    
    func board(_ boardKit: ARBoardKit, connectionChangedTo state: ARBoardConnectionStateType, reason: ARBoardConnectionChangedReason) {
        /// 网络状态回调
        Logger.log(message: "connectionChangedTo state = \(state.rawValue) reason = \(reason.rawValue)", level: .info)
    }
    
    func board(_ boardKit: ARBoardKit, undoStateChange enable: Bool) {
        /// 当前白板页是否可撤销
        Logger.log(message: "undoStateChange enable = \(enable)", level: .info)
    }
    
    func board(_ boardKit: ARBoardKit, redoStateChange enable: Bool) {
        /// 当前白板页是否可重做
        Logger.log(message: "redoStateChange enable = \(enable)", level: .info)
    }
    
    func boardReset(_ boardKit: ARBoardKit) {
        /// 重置白板（删除所有白板页和涂鸦）
        Logger.log(message: "boardReset", level: .info)
    }
    
    func board(_ boardKit: ARBoardKit, clear fileId: String, boardId: String, clearBackground isClearBackground: Bool) {
        /// 清空白板回调
        Logger.log(message: "clear fileId = \(fileId) boardId = \(boardId) isClearBackground = \(isClearBackground)", level: .info)
    }
    
    func board(_ boardKit: ARBoardKit, imageStatusChange status: ARBoardImageStatus, fileId: String, boardId: String, data: ARBoardImageData) {
        /// 背景图片加载状态变化的回调
        Logger.log(message: "imageStatusChange status = \(status.rawValue) fileId = \(fileId) boardId = \(boardId)", level: .info)
    }
    
    func board(_ boardKit: ARBoardKit, backgroundColorChange color: UIColor) {
        /// 背景颜色改变的回调
        Logger.log(message: "backgroundColorChange color = \(color)", level: .info)
        NotificationCenter.default.post(name: UIResponder.boardNotificationBackgroundColorChange, object: nil, userInfo: nil)
    }
    
    func board(_ boardKit: ARBoardKit, ratioChange boardId: String, ratio: String) {
        /// 白板宽高比例回调
        Logger.log(message: "ratioChange boardId = \(boardId) \(ratio)", level: .info)
    }
}
