//
//  ARMenuViewController.swift
//  AR-Board-Tutorial
//
//  Created by 余生丶 on 2021/10/28.
//

import ARBoard
import UIKit

enum ARMenuType {
    /// 开关
    case on_off
    /// 图片、颜色
    case image
    /// 滑块
    case slider
    /// 文本
    case label
}

struct MenuSection {
    var name: String
    var rows: [MenuItem]
}

class MenuItem: NSObject {
    /// 名称
    var name: String = ""
    /// 开关
    var isOn: Bool = false
    /// 颜色
    var color = UIColor.white
    /// 进度条
    var progress: Float = 0.0
    /// 工具类型
    var toolType: ARBoardToolType = .arrow
    /// 类型
    var menuType: ARMenuType = .label
    var identifier: String = ""
    
    internal init(name: String) {
        self.name = name
    }
    
    init(name: String, isOn: Bool) {
        self.name = name
        self.isOn = isOn
        self.menuType = .on_off
    }
    
    init(name: String, color: UIColor) {
        self.name = name
        self.color = color
        self.menuType = .image
        self.identifier = "ARBoard_Color"
    }
    
    init(name: String, type: ARBoardToolType) {
        self.name = name
        self.toolType = type
        self.menuType = .image
        self.identifier = "ARBoard_BrushType"
    }
    
    init(name: String, progress: Float) {
        self.name = name
        self.progress = progress
        self.menuType = .slider
    }
}

class ARGeneralTableViewCell: UITableViewCell {
    override var frame: CGRect {
        get {
            return super.frame
        }
        set {
            var frame = newValue
            frame.origin.x += 8
            frame.size.width -= 2 * 8
            super.frame = frame
        }
    }
}

class ARMenuViewController: UIViewController {
    @IBOutlet var tableView: UITableView!
    weak var boardVc: ARBoardViewController?
    let tap = UITapGestureRecognizer()
    
    var menus: [MenuSection] = [
        MenuSection(name: "涂鸦相关", rows: [
            MenuItem(name: "涂鸦开关", isOn: boardKit.isDrawEnable()),
            MenuItem(name: "选择工具", type: boardKit.getToolType()),
            MenuItem(name: "画笔颜色", color: boardKit.getBrushColor()),
            MenuItem(name: "字体颜色", color: boardKit.getTextColor()),
            MenuItem(name: "画笔粗细", progress: Float(boardKit.getBrushThin())/10.0),
            MenuItem(name: "字体大小", progress: Float(boardKit.getTextSize())/40.0),
            MenuItem(name: "撤销"),
            MenuItem(name: "重做"),
            MenuItem(name: "清空涂鸦"),
            MenuItem(name: "清空涂鸦和背景"),
            MenuItem(name: "重置"),
            MenuItem(name: "添加背景")
        ]),
        MenuSection(name: "白板相关", rows: [
            MenuItem(name: "新增"),
            MenuItem(name: "删除"),
            MenuItem(name: "上一页"),
            MenuItem(name: "下一页"),
            MenuItem(name: "白板缩放", progress: Float(boardKit.getBoardScale())/300.0),
            MenuItem(name: "背景颜色", color: boardKit.getBackgroundColor())
        ])
    ]

    override func viewDidLoad() {
        super.viewDidLoad()

        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false

        // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
        // self.navigationItem.rightBarButtonItem = self.editButtonItem
        view.backgroundColor = UIColor.clear
        tableView.layer.shadowColor = UIColor(white: 000000, alpha: 0.3).cgColor
        tableView.layer.shadowOffset = CGSize(width: 2, height: 2)
        tableView.layer.shadowOpacity = 1
        tableView.clipsToBounds = false
        tableView.backgroundColor = UIColor.white
        tableView.sectionFooterHeight = 5.0
        
        tap.delegate = self
        view.addGestureRecognizer(tap)
        
        NotificationCenter.default.addObserver(self, selector: #selector(boardBrushChange), name: UIResponder.boardNotificationBrushChange, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(boardColorChange), name: UIResponder.boardNotificationColorChange, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(boardScaleChange), name: UIResponder.boardNotificationScaleChange, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(boardBackgroundColorChange), name: UIResponder.boardNotificationBackgroundColorChange, object: nil)
    }
    
    deinit {
        print("MenuVc deinit")
    }
    
    // MARK: - other
    
    @objc func boardBrushChange(nofi: Notification) {
        let brushType: NSInteger = nofi.userInfo!["brushType"] as! NSInteger
        menus[0].rows[1].toolType = ARBoardToolType(rawValue: brushType) ?? .arrow
        tableView.reloadRows(at: [IndexPath(row: 1, section: 0)], with: .automatic)
    }
    
    @objc func boardColorChange(nofi: Notification) {
        let colorType: NSInteger = nofi.userInfo!["type"] as! NSInteger
        if colorType == 2 {
            /// brushColor
            menus.first?.rows[2].color = nofi.userInfo!["color"] as! UIColor
            tableView.reloadRows(at: [IndexPath(row: 2, section: 0)], with: .automatic)
        } else if colorType == 3 {
            /// textColor
            menus.first?.rows[3].color = nofi.userInfo!["color"] as! UIColor
            tableView.reloadRows(at: [IndexPath(row: 3, section: 0)], with: .automatic)
        } else {
            /// backGround
            menus.last?.rows[5].color = nofi.userInfo!["color"] as! UIColor
            tableView.reloadRows(at: [IndexPath(row: 5, section: 1)], with: .automatic)
        }
    }
    
    @objc func boardScaleChange(nofi: Notification) {
        menus[1].rows[4].progress = Float(boardKit.getBoardScale())/300.0
        tableView.reloadRows(at: [IndexPath(row: 4, section: 1)], with: .none)
    }
    
    @objc func boardBackgroundColorChange(nofi: Notification) {
        menus[1].rows[5].color = boardKit.getBackgroundColor()
        tableView.reloadRows(at: [IndexPath(row: 5, section: 1)], with: .automatic)
    }
    
    @objc func sliderValueChange(slider: UISlider) {
        if slider.tag == 4 {
            /// 画笔粗细
            if slider.value >= 0.1 {
                boardKit.setBrushThin(UInt32(slider.value * 10))
            }
            menus[0].rows[4].progress = slider.value
        } else if slider.tag == 5 {
            /// 字体大小
            boardKit.setTextSize(UInt32(10 + slider.value * 40))
            menus[0].rows[5].progress = slider.value
        } else {
            /// 白板缩放
            boardKit.setBoardScale(UInt32(slider.value * 300))
            menus[1].rows[4].progress = slider.value
        }
    }
    
    @objc func switchValueChange(switchOn: UISwitch) {
        boardKit.setDrawEnable(switchOn.isOn)
        menus[0].rows[0].isOn = switchOn.isOn
    }
}

// MARK: - Table view data source

extension ARMenuViewController: UITableViewDataSource, UITableViewDelegate {
    func numberOfSections(in tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return menus.count
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return menus[section].rows.count
    }
    
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        let sectionItem = menus[section]
        return (sectionItem.name.count != 0) ? 40 : 0.1
    }
    
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let sectionItem = menus[section]
        if sectionItem.name.count != 0 {
            let headerLabel = UILabel(frame: CGRect(x: 0, y: 0, width: ARScreenWidth, height: 40))
            headerLabel.text = "  \(menus[section].name)"
            headerLabel.backgroundColor = UIColor.white
            headerLabel.textColor = UIColor(hexString: "#1A1A1E")
            headerLabel.font = UIFont(name: PingFangBold, size: 15)
            return headerLabel
        }
        return nil
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellIdentifier = "menuCell"
        var cell = tableView.dequeueReusableCell(withIdentifier: cellIdentifier)
        
        // Configure the cell...
        if cell == nil {
            cell = ARGeneralTableViewCell(style: .value1, reuseIdentifier: cellIdentifier)
        }
        
        cell?.selectionStyle = .none
        cell?.accessoryView = nil
        cell?.contentView.viewWithTag(500)?.removeFromSuperview()
        
        let menuItem = menus[indexPath.section].rows[indexPath.row]
        cell?.textLabel?.text = ""
        if menuItem.menuType != .label {
            cell!.textLabel?.text = menuItem.name
            cell?.textLabel?.font = UIFont(name: PingFang, size: 14)
            cell?.textLabel?.textColor = UIColor(hexString: "#5A5A67")
        }
        
        if menuItem.menuType == .slider {
            // slider
            let sliderView = UISlider(frame: CGRect(x: 0, y: 0, width: 150, height: 5))
            sliderView.tag = (indexPath.section == 1) ? 100 : indexPath.row
            sliderView.value = Float(menuItem.progress)
            sliderView.tintColor = UIColor(hexString: "#294BFF")
            sliderView.backgroundColor = UIColor(hexString: "#EBECF0")
            sliderView.addTarget(self, action: #selector(sliderValueChange), for: .valueChanged)
            cell?.accessoryView = sliderView
            
        } else if menuItem.menuType == .on_off {
            // switch
            let onSwitch = UISwitch()
            onSwitch.isOn = menuItem.isOn
            onSwitch.addTarget(self, action: #selector(switchValueChange), for: .valueChanged)
            cell?.accessoryView = onSwitch
            
        } else if menuItem.menuType == .label {
            // text
            let label = UILabel(frame: CGRect(x: 20, y: 0, width: 240, height: 36))
            label.backgroundColor = UIColor(hexString: "#EBECF0")
            label.textColor = UIColor(hexString: "#9D9DB3")
            label.textAlignment = .center
            label.text = menuItem.name
            label.font = UIFont(name: PingFang, size: 12)
            label.tag = 500
            label.layer.masksToBounds = true
            label.layer.cornerRadius = 5
            cell?.contentView.addSubview(label)
            
        } else if menuItem.menuType == .image {
            // color、image
            let accessoryImageView = UIImageView(frame: CGRect(x: 0, y: 0, width: 24, height: 24))
            if indexPath.row == 1 {
                let imageArr = ["mouse", "select", "freedraw", "eraser", "pointer", "line", "arrow", "rect", "ellipse", "text"]
                let imageName = "icon_\(imageArr[menuItem.toolType.rawValue])_selected"
                accessoryImageView.image = UIImage(named: imageName)
            } else {
                accessoryImageView.layer.cornerRadius = 5.0
                accessoryImageView.layer.borderWidth = 1.0
                accessoryImageView.layer.borderColor = UIColor(hexString: "#9D9DB4").cgColor
                accessoryImageView.backgroundColor = menuItem.color
            }
            cell?.accessoryView = accessoryImageView
        }
        
        return cell!
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let menuItem = menus[indexPath.section].rows[indexPath.row]
        if menuItem.identifier.count != 0 {
            guard let toolVc = storyboard?.instantiateViewController(withIdentifier: menuItem.identifier) else { return }
            toolVc.modalPresentationStyle = .overCurrentContext
            
            if toolVc is ARColorViewController {
                let colorVc = toolVc as! ARColorViewController
                colorVc.colorIndex = indexPath.row
            }
            present(toolVc, animated: false, completion: nil)
            return
        }
        
        if indexPath.section == 0 {
            if indexPath.row == 6 {
                /// 撤销
                boardKit.undo()
                
            } else if indexPath.row == 7 {
                /// 重做
                boardKit.redo()
                
            } else if indexPath.row == 8 {
                /// 清空涂鸦
                boardKit.clear(false)
                
            } else if indexPath.row == 9 {
                /// 清空涂鸦和背景
                boardKit.clear(true)
                
            } else if indexPath.row == 10 {
                /// 重置
                boardKit.reset()
            } else if indexPath.row == 11 {
                /// 设置背景图片
                var inputText: UITextField = UITextField();
                let alertVc = UIAlertController.init(title: "背景图片", message: nil, preferredStyle: .alert)
                let ok = UIAlertAction.init(title: "确定", style:.default) { [weak self] (action:UIAlertAction) ->() in
                    guard let self = self, let url = inputText.text else { return }
                    if(url.contains("https://")){
                        boardKit.setBackgroundImage(url, fillMode: .contain)
                    } else {
                        self.view.makeToast("请输入合法的https协议的url", duration: 1.0, position: ARUICSToastPositionCenter)
                    }
                }
                
                let cancel = UIAlertAction.init(title: "取消", style:.cancel)
                
                alertVc.addAction(ok)
                alertVc.addAction(cancel)
                alertVc.addTextField { (textField) in
                    inputText = textField
                    inputText.placeholder = "请输入背景URL"
                    inputText.clearButtonMode = .whileEditing
                }
                self.present(alertVc, animated: true, completion: nil)
            }
        } else if indexPath.section == 1 {
            if indexPath.row == 0 {
                /// 新增
                boardKit.addBoard()
                
            } else if indexPath.row == 1 {
                /// 删除
                boardKit.deleteBoard()
                
            } else if indexPath.row == 2 {
                /// 上一页
                boardKit.preBoard()
                
            } else if indexPath.row == 3 {
                /// 下一页
                boardKit.nextBoard()
            }
        }
    }
}

// MARK: - UIGestureRecognizerDelegate

extension ARMenuViewController: UIGestureRecognizerDelegate {
    
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive touch: UITouch) -> Bool {
        if touch.view == view {
            boardVc?.didClickMenu()
            return true
        } else {
            return false
        }
    }
}
