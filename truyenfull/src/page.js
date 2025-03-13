function execute() {
    try {
        let list = [];
        let truyenId = document.querySelector("input#truyen-id")?.getAttribute("value") || "";
        let truyenAscii = document.querySelector("input#truyen-ascii")?.getAttribute("value") || "";
        let page = document.querySelector("input#total-page")?.getAttribute("value");

        page = page ? parseInt(page, 10) : 1;

        for (let i = 1; i <= page; i++) {
            list.push(`https://truyenfull.vision/ajax.php?type=list_chapter&tid=${truyenId}&tascii=${truyenAscii}&page=${i}&totalp=${page}`);
        }

        Response.success(JSON.stringify(list));
    } catch (error) {
        Response.error(JSON.stringify({ success: false, error: error.message }));
    }
}
execute();