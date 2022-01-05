//
//  ViewController.swift
//  AR-Board-Tutorial
//
//  Created by 余生丶 on 2021/10/28.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet var uidTextField: UITextField!
    @IBOutlet var roomIdTextField: UITextField!
    @IBOutlet var loginButton: UIButton!
    private var platform: Bool = false
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        for index in 0 ... 1 {
            let borderLayer = CALayer()
            borderLayer.backgroundColor = UIColor(hexString: "#CCCCCC").cgColor
            borderLayer.frame = CGRect(x: 0, y: 43, width: uidTextField.width, height: 0.5)
            index == 0 ? (uidTextField.layer.addSublayer(borderLayer)) : (roomIdTextField.layer.addSublayer(borderLayer))
        }
        uidTextField.addTarget(self, action: #selector(textFieldValueChange), for: .editingChanged)
        roomIdTextField.addTarget(self, action: #selector(textFieldValueChange), for: .editingChanged)
    }
    
    @objc func textFieldValueChange() {
        let uid: String = uidTextField.text!
        if uid.count > 9 {
            uidTextField.text = String(uid.prefix(9))
        }
        
        let roomId: String = roomIdTextField.text!
        if roomId.count > 32 {
            roomIdTextField.text = String(roomId.prefix(32))
        }
        
        platform = (uidTextField.text!.count > 0) && (roomIdTextField.text!.count > 0)
        loginButton.backgroundColor = UIColor(hexString: platform ? "#294BFF" : "#C2CCFF")
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        view.endEditing(true)
    }
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        guard let identifier = segue.identifier else {
            return
        }
        
        if identifier == "ARBoardViewController" {
            let nav = segue.destination as! UINavigationController
            let boardVc: ARBoardViewController = nav.children[0] as! ARBoardViewController
            boardVc.localUid = uidTextField.text
            boardVc.channelId = roomIdTextField.text
        }
    }
    
    override func shouldPerformSegue(withIdentifier identifier: String, sender: Any?) -> Bool {
        if !platform {
            // 请输入必选项
        }
        return platform
    }
}

extension ViewController: UITextFieldDelegate {
    func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
        if textField == uidTextField {
            return isLetterWithDigital(string) || string == ""
        }
        return true
    }
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        roomIdTextField.becomeFirstResponder()
        return true
    }
}
