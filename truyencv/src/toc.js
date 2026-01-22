(function() {
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

        // return JSON.stringify({success: true, data: list});
        try {
            Response.success(JSON.stringify(list));
        } catch(e) {
            return JSON.stringify({success: true, data: list});
        }
    } catch (error) {
        return JSON.stringify({ success: false, error: error.message });
    }
})()