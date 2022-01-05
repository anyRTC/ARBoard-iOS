//
//  Logger.swift
//  AR-Live-Tutorial
//
//  Created by 余生丶 on 2020/9/2.
//

import Foundation

public enum LogLevel {
    case info, warning, error

    var description: String {
        switch self {
        case .info: return "Info"
        case .warning: return "Warning"
        case .error: return "Error"
        }
    }
}

public enum Logger {
    public static func log(message: String, level: LogLevel) {
        #if !DEBUG
            if level != .error { return }
        #endif

        var info = ""
        switch level {
        case .error:
            info = " [❤️] "
        case .info:
            info = " [💙] "
        case .warning:
            info = " [💛] "
        }
        
        let date = Date()
        let timeFormatter = DateFormatter()
        // "yyy-MM-dd' at 'HH:mm:ss.SSS"
        timeFormatter.dateFormat = "HH:mm:ss"
        let localTime = timeFormatter.string(from: date) as String
        print(localTime + info + message)
    }

    public static func log(_ obj: Any, message: String, level: LogLevel) {
        log(message: "[\(type(of: obj))] \(message)", level: level)
    }
}
