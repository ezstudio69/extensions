(function() {
    document.querySelectorAll("noscript, script, iframe, div.ads-responsive, a").forEach(el => el.remove());
    document.querySelectorAll("[style='font-size.0px;']").forEach(el => el.remove());

    let chapterContent = document.querySelector("div.chapter-c")?.innerHTML || "";

    // Android: uses Response.success/error (injected by WebView)
    // iOS: uses return
    try {
        Response.success(JSON.stringify({data: chapterContent}));
    } catch(e) {
        return JSON.stringify({success: true, data: chapterContent});
    }
})()
