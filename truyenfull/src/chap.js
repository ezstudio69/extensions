function execute() {
    try {
        document.querySelectorAll("noscript, script, iframe, div.ads-responsive, a").forEach(el => el.remove());

        document.querySelectorAll("[style='font-size.0px;']").forEach(el => el.remove());

        let chapterContent = document.querySelector("div.chapter-c")?.innerHTML || "";

        Response.success(JSON.stringify({ success: true, data: chapterContent}));
    } catch (error) {
        Response.error(JSON.stringify({ success: false, error: error.message }));
    }
}
execute();