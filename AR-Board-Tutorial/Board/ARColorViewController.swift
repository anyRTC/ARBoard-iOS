//
//  ARColorViewController.swift
//  AR-Board-Tutorial
//
//  Created by 余生丶 on 2021/10/31.
//

import UIKit

class ARColorViewController: UIViewController {
    @IBOutlet var bottomConstraint: NSLayoutConstraint!
    @IBOutlet var backView: UIView!
    @IBOutlet var redSlider: UISlider!
    @IBOutlet var greenSlider: UISlider!
    @IBOutlet var blueSlider: UISlider!
    @IBOutlet var colorLabel: UILabel!
    @IBOutlet var redLabel: UILabel!
    @IBOutlet var greenLabel: UILabel!
    @IBOutlet var blueLabel: UILabel!
    
    let colorValue: CGFloat = 255.0
    var colorIndex = 0
    var rgbColor: (r: CGFloat, g: CGFloat, b: CGFloat, a: CGFloat)!
    var boardColor = UIColor.black
    
    let tap = UITapGestureRecognizer()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        tap.delegate = self
        view.addGestureRecognizer(tap)
        
        var roundColor: UIColor?
        if colorIndex == 2 {
            roundColor = boardKit.getBrushColor()
        } else if colorIndex == 3 {
            roundColor = boardKit.getTextColor()
        } else if colorIndex == 5 {
            roundColor = boardKit.getBackgroundColor()
        }
        colorLabel.backgroundColor = roundColor
        boardColor = roundColor!
        rgbColor = roundColor?.getRBGA()
        
        redLabel.text = String(format: "%.2f% ", rgbColor.r * colorValue)
        greenLabel.text = String(format: "%.2f% ", rgbColor.g * colorValue)
        blueLabel.text = String(format: "%.2f% ", rgbColor.b * colorValue)
        redSlider.value = Float(rgbColor.r * colorValue)
        greenSlider.value = Float(rgbColor.g * colorValue)
        blueSlider.value = Float(rgbColor.b * colorValue)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        backView.layer.maskedCorners = [.layerMinXMinYCorner, .layerMaxXMinYCorner]
        selectedColorWithAnimation(isOn: true)
    }
    
    private func selectedColorWithAnimation(isOn: Bool) {
        UIView.animate(withDuration: 0.25) {
            self.bottomConstraint.constant = isOn ? 0 : -282
            self.view.layoutIfNeeded()
        } completion: { _ in
            if !isOn {
                NotificationCenter.default.post(name: UIResponder.boardNotificationColorChange, object: nil, userInfo: ["type": self.colorIndex, "color": self.boardColor])
                self.dismiss(animated: false, completion: nil)
            }
        }
    }
    
    @IBAction func sliderValueChange(_ sender: Any) {
        colorLabel.backgroundColor = UIColor(red: CGFloat(redSlider.value/255.0), green: CGFloat(greenSlider.value/255.0), blue: CGFloat(blueSlider.value/255.0), alpha: 1.0)
        redLabel.text = "\(ceil(redSlider.value))"
        greenLabel.text = "\(ceil(greenSlider.value))"
        blueLabel.text = "\(ceil(blueSlider.value))"
    }
    
    @IBAction func didClickCancleButton(_ sender: Any) {
        /// 取消
        selectedColorWithAnimation(isOn: false)
    }
    
    @IBAction func didClickConfirmButton(_ sender: Any) {
        /// 确定
        boardColor = UIColor(red: CGFloat(redSlider.value)/colorValue, green: CGFloat(greenSlider.value)/colorValue, blue: CGFloat(blueSlider.value)/colorValue, alpha: 1.0)
        if colorIndex == 2 {
            boardKit.setBrush(boardColor)
        } else if colorIndex == 3 {
            boardKit.setTextColor(boardColor)
        } else if colorIndex == 5 {
            boardKit.setBackgroundColor(boardColor)
        }
        
        selectedColorWithAnimation(isOn: false)
    }
}

// MARK: - UIGestureRecognizerDelegate

extension ARColorViewController: UIGestureRecognizerDelegate {
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldReceive touch: UITouch) -> Bool {
        if touch.view == view {
            selectedColorWithAnimation(isOn: false)
            return true
        } else {
            return false
        }
    }
}
