function execute() {
    try {
        let jsonText = document.documentElement.innerText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        let json = JSON.parse(jsonText);

        let next = null;
        if (json.pager.page < json.pager.total_count) {
            next = json.pager.page + 1;
        }

        let novelList = [];
        for (let i = 0; i < json.data.length; i++) {
            novelList.push({
                name: json.data[i].NAME,
                link: json.data[i].ID,
                description: json.data[i].AUTHOR,
                cover: json.data[i].THUMB,
                host: "http://api.mottruyen.com"
            })
        }

        Response.success(JSON.stringify({ success: true, data: novelList, next: next }));
    } catch (error) {
        Response.error(JSON.stringify({ success: false, error: error.message }));
    }
}
execute();