(function() {
    let data = [
        {title: "Mới cập nhật", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=0&status=0", page: "&page=", script: "gen.js"},
        {title: "Tiên Hiệp", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=14&status=0", page: "&page=", script: "gen.js"},
        {title: "Kiếm Hiệp", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=16&status=0", page: "&page=", script: "gen.js"},
        {title: "Đô Thị", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=15&status=0", page: "&page=", script: "gen.js"},
        {title: "Huyền Ảo", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=17&status=0", page: "&page=", script: "gen.js"},
        {title: "Ngôn Tình", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=18&status=0", page: "&page=", script: "gen.js"},
        {title: "Dị Năng", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=19&status=0", page: "&page=", script: "gen.js"},
        {title: "Võng Du", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=20&status=0", page: "&page=", script: "gen.js"},
        {title: "Dị Giới", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=21&status=0", page: "&page=", script: "gen.js"},
        {title: "Khoa Huyễn", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=22&status=0", page: "&page=", script: "gen.js"},
        {title: "Quân Sự", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=23&status=0", page: "&page=", script: "gen.js"},
        {title: "Lịch Sử", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=24&status=0", page: "&page=", script: "gen.js"},
        {title: "Xuyên Không", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=25&status=0", page: "&page=", script: "gen.js"},
        {title: "Trùng Sinh", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=30&status=0", page: "&page=", script: "gen.js"},
        {title: "Cạnh Kỹ", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=27&status=0", page: "&page=", script: "gen.js"},
        {title: "Đồng Nhân", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=28&status=0", page: "&page=", script: "gen.js"},
        {title: "Linh Dị", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=31&status=0", page: "&page=", script: "gen.js"},
        {title: "Mạt Thế", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=32&status=0", page: "&page=", script: "gen.js"},
        {title: "Nữ Hiệp", input: "http://api.mottruyen.com/filter?app_version=2.9.5&date=0&deviceid=9BC054AD-01DA-4303-AB1B-E8183F48B832&kind=0&os=iOS&sort=0&totalchapter=0&cat=26&status=0", page: "&page=", script: "gen.js"}
    ];
    // return JSON.stringify({success: true, data: data});
    try {
        Response.success(JSON.stringify(data));
    } catch(e) {
        return JSON.stringify({success: true, data: data});
    }
})()