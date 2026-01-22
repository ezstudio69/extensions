(function() {
    let data = [
        {title: "Truyện mới cập nhật", input: "https://truyenfull.vision/danh-sach/truyen-moi/", page: "trang-", script: "gen.js"},
        {title: "Truyện Hot", input: "https://truyenfull.vision/danh-sach/truyen-hot/", page: "trang-", script: "gen.js"},
        {title: "Truyện Full", input: "https://truyenfull.vision/danh-sach/truyen-full/", page: "trang-", script: "gen.js"},
        {title: "Tiên Hiệp Hay", input: "https://truyenfull.vision/danh-sach/tien-hiep-hay/", page: "trang-", script: "gen.js"},
        {title: "Kiếm Hiệp Hay", input: "https://truyenfull.vision/danh-sach/kiem-hiep-hay/", page: "trang-", script: "gen.js"},
        {title: "Truyện Teen Hay", input: "https://truyenfull.vision/danh-sach/truyen-teen-hay/", page: "trang-", script: "gen.js"},
        {title: "Ngôn Tình Hay", input: "https://truyenfull.vision/danh-sach/ngon-tinh-hay/", page: "trang-", script: "gen.js"},
        {title: "Ngôn Tình Ngược", input: "https://truyenfull.vision/danh-sach/ngon-tinh-nguoc/", page: "trang-", script: "gen.js"},
        {title: "Ngôn Tình Sủng", input: "https://truyenfull.vision/danh-sach/ngon-tinh-sung/", page: "trang-", script: "gen.js"},
        {title: "Ngôn Tình Hài", input: "https://truyenfull.vision/danh-sach/ngon-tinh-hai/", page: "trang-", script: "gen.js"},
        {title: "Đam Mỹ Hài", input: "https://truyenfull.vision/danh-sach/dam-my-hai/", page: "trang-", script: "gen.js"},
        {title: "Đam Mỹ Hay", input: "https://truyenfull.vision/danh-sach/dam-my-hay/", page: "trang-", script: "gen.js"},
        {title: "Đam Mỹ Sắc", input: "https://truyenfull.vision/danh-sach/dam-my-sac/", page: "trang-", script: "gen.js"}
    ];

    // Android: uses Response.success/error (injected by WebView)
    // iOS: uses return
    try {
        Response.success(JSON.stringify(data));
    } catch(e) {
        return JSON.stringify({success: true, data: data});
    }
})()
