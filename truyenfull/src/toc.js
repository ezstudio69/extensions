(function() {
    let jsonText = document.querySelector("pre").textContent;
    let json = JSON.parse(jsonText);
    let parser = new DOMParser();
    let doc = parser.parseFromString(json.chap_list, "text/html");

    let list = [];

    doc.querySelectorAll(".list-chapter li a").forEach(e => {
        list.push({
            name: e.textContent.trim(),
            url: e.getAttribute("href"),
            host: "https://truyenfull.vision"
        });
    });

    // Android: uses Response.success/error (injected by WebView)
    // iOS: uses return
    try {
        Response.success(JSON.stringify(list));
    } catch(e) {
        return JSON.stringify({success: true, data: list});
    }
})()
