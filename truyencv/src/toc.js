function execute() {
    try {
        let jsonText = document.documentElement.innerText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        let json = JSON.parse(jsonText);

        let list = [];

        for (let i = 0; i < json.data.length; i++) {
            list.push({
                name: json.data[i].NAME,
                url: json.data[i].ID,
                host: "http://api.mottruyen.com"
            })
        }

        Response.success(JSON.stringify(list));
    } catch (error) {
        Response.error(JSON.stringify({ success: false, error: error.message }));
    }
}
execute();