//
//  ARBoardViewController.swift
//  AR-Board-Tutorial
//
//  Created by 余生丶 on 2021/10/28.
//

import ARBoard
import UIKit
import WebKit

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

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        initializeUI()
        initializeBoard()
    }
    
    func initializeBoard() {
        boardKit = ARBoardKit(engineWithAppId: AppID, delegate: self)

        //let dic: NSDictionary = ["ServerAdd": "pro.wbgw.agrtc.cn", "Port": 443]
        //boardKit.setParameters(dic as! [AnyHashable: Any])
        let boardView = boardKit.getBoardRenderView()
        boardView.frame = view.bounds
        view.insertSubview(boardView, at: 0)

        boardKit.joinChannel(byToken: nil, channelId: channelId, uid: localUid) { [weak self] _, _ in
            boardKit.setDrawEnable(true)
            self?.isJoin = true
            print("joinChannel")
        }
    }
    
    func initializeUI() {
        title = channelId
        let leftButton = UIButton(type: .custom)
        leftButton.setTitle("菜单", for: .normal)
        leftButton.setTitleColor(UIColor(hexString: "#294BFF"), for: .normal)
        leftButton.titleLabel?.font = UIFont(name: PingFang, size: 16)
        leftButton.addTarget(self, action: #selector(didClickMenu), for: .touchUpInside)
        navigationItem.leftBarButtonItem = UIBarButtonItem(customView: leftButton)
        
        let rightButton = UIButton(type: .custom)
        rightButton.frame = CGRect(x: 0, y: 0, width: 50, height: 50)
        rightButton.backgroundColor = UIColor.clear
        rightButton.setImage(#imageLiteral(resourceName: "icon_exit"), for: .normal)
        rightButton.addTarget(self, action: #selector(exitBoardRoom), for: .touchUpInside)
        navigationItem.rightBarButtonItem = UIBarButtonItem(customView: rightButton)
    }
    
    @objc func didClickMenu() {
        view.endEditing(true)
        
        if isJoin {
            menuVc.view.frame = CGRect(x: isMenuOn ? 0 : -288, y: 0, width: ARScreenWidth, height: ARScreenHeight - (isFullScreen() ? 88 : 64))
            isMenuOn.toggle()
            if isMenuOn {
                view.addSubview(menuVc.view)
                addChild(menuVc)
            }
            
            UIView.animate(withDuration: 0.2) {
                self.menuVc.view.x = self.isMenuOn ? 0 : -288
            } completion: { _ in
                if !self.isMenuOn {
                    self.menuVc.view.removeFromSuperview()
                    self.menuVc.removeFromParent()
                }
            }
        } else {
            print("Join Channel first")
        }
    }
    
    @objc func exitBoardRoom() {
        ARAlertActionSheet.showAlert(titleStr: "退出房间", msgStr: nil, currentVC: self, cancelHandler: nil, otherBtns: ["确认"]) { _ in
            boardKit = nil
            if self.isMenuOn {
                self.menuVc.view.removeFromSuperview()
                self.menuVc.removeFromParent()
            }
            self.dismiss(animated: true, completion: nil)
        }
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
}

extension ARBoardViewController: ARBoardDelegate {
    func board(_ boardKit: ARBoardKit, didOccurError errorCode: ARBoardErrorCode) {
        /// 发生错误回调
        Logger.log(message: "didOccurError errorCode = \(errorCode.rawValue)", level: .error)
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
    
    func board(_ boardKit: ARBoardKit, scaleChannge boardId: String, scale: CGFloat) {
        /// 白板缩放的回调
        Logger.log(message: "scaleChannge boardId = \(boardId) scale = \(scale)", level: .info)
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
}
