//
//  ViewController.swift
//  SnippetMagnet
//
//  Created by Riku Kuisma on 13.4.2026.
//


import AppKit
import WebKit
import SafariServices

class ViewController: NSViewController, WKNavigationDelegate, WKScriptMessageHandler {
    var webView: WKWebView!

    override func loadView() {
        let config = WKWebViewConfiguration()
        config.userContentController.add(self, name: "controller")
        webView = WKWebView(frame: NSRect(x: 0, y: 0, width: 720, height: 560), configuration: config)
        webView.navigationDelegate = self// remove this after testing
        self.view = webView
        print("loadView called")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        print("trying to load html")
        guard let url = Bundle.main.url(forResource: "Main", withExtension: "html") else {
            print("ERROR: Main.html not found in bundle — showing fallback view")
            // Fallback: show a solid red background so we can see the window is present
            let fallback = NSView(frame: self.view.bounds)
            fallback.autoresizingMask = [.width, .height]
            fallback.wantsLayer = true
            fallback.layer?.backgroundColor = NSColor.systemRed.cgColor
            self.view = fallback
            return
        }
        webView.loadFileURL(url, allowingReadAccessTo: Bundle.main.resourceURL!)
        print("Requested load of Main.html at: \(url.path)")
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("test")
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        print("Navigation failed: \(error.localizedDescription)")
    }

    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        print("Provisional navigation failed: \(error.localizedDescription)")
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {}
}
