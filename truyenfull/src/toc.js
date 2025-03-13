function execute() {
    try {
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

        Response.success(JSON.stringify(list));
    } catch (error) {
        Response.error(JSON.stringify({ success: false, error: error.message }));
    }
}
execute();