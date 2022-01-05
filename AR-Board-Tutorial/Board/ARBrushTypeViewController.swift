//
//  ARBrushTypeViewController.swift
//  AR-Board-Tutorial
//
//  Created by 余生丶 on 2021/11/1.
//

import ARBoard
import UIKit

class ARBrushTypeViewController: UIViewController {
    @IBOutlet var backView: UIView!
    @IBOutlet var bottomConstraint: NSLayoutConstraint!
    @IBOutlet var stackView: UIStackView!
    
    let tap = UITapGestureRecognizer()
    var selectedIndex: NSInteger = boardKit.getToolType().rawValue
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        tap.delegate = self
        view.addGestureRecognizer(tap)
        selectBoardType()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        backView.layer.maskedCorners = [.layerMinXMinYCorner, .layerMaxXMinYCorner]
        selectedBrushTypeWithAnimation(isOn: true)
    }
    
    func selectBoardType() {
        /// 选择画笔工具
        for object in stackView.arrangedSubviews {
            let stackView: UIStackView = object as! UIStackView
            for subView in stackView.arrangedSubviews {
                let button = subView as! UIButton
                button.isSelected = (selectedIndex == button.tag)
            }
        }
    }
    
    private func selectedBrushTypeWithAnimation(isOn: Bool) {
        UIView.animate(withDuration: 0.25) {
            self.bottomConstraint.constant = isOn ? 0 : 252
            self.view.layoutIfNeeded()
        } completion: { _ in
            if !isOn {
                self.dismiss(animated: false, completion: nil)
            }
        }
    }
    
    @IBAction func didClickCancleButton(_ sender: Any) {
        /// 取消
        selectedBrushTypeWithAnimation(isOn: false)
    }
    
    @IBAction func didClickConfirmButton(_ sender: Any) {
        /// 确定
        boardKit.setToolType(ARBoardToolType(rawValue: selectedIndex)!)
        NotificationCenter.default.post(name: UIResponder.boardNotificationBrushChange, object: self, userInfo: ["brushType": selectedIndex])
        
        selectedBrushTypeWithAnimation(isOn: false)
    }
    
    @IBAction func didClickBrushTypeButton(_ sender: UIButton) {
        /// 选择画笔工具
        selectedIndex = sender.tag
        selectBoardType()
    }
}

// MARK: - UIGestureRecognizerDelegate

extension ARBrushTypeViewController: UIGestureRecognizerDelegate {
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive touch: UITouch) -> Bool {
        if touch.view == view {
            selectedBrushTypeWithAnimation(isOn: false)
            return true
        } else {
            return false
        }
    }
}
