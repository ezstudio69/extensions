(function() {
    try {
        let jsonText = document.documentElement.innerText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        let json = JSON.parse(jsonText);

        let genres = [];

        let data = {
                name: json.data.NAME || "",
                cover: json.data.THUMB || "",
                author: json.data.AUTHOR || "",
                description: json.data.DESC || "",
                detail: "",
                ongoing: true,
                genres: [],
                suggests: [],
                host: "http://api.mottruyen.com"
            };
        try {
            Response.success(JSON.stringify(data));
        } catch(e) {
            return JSON.stringify({success: true, data});
        }
    } catch (error) {
        return JSON.stringify({ success: false, error: error.message });
    }
})()