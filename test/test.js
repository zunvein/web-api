const api = require("caliph-api");
const user = "Specstor"
const kotz = require('kotz-api');
const iglink = "https://www.instagram.com/reel/CoOisSzAknA/?igshid=YmMyMTA2M2Y="
const fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}
const url = "https://vt.tiktok.com/ZS8yo7Gor/"
const url2 = "https://www.tiktok.com/@sofavela_/video/7175994003786157318?_r=1&u_code=d74ghimil805ca&region=US&mid=7175994054860081926&preview_pb=0&language=id&_d=e67k67bb3elb6h&share_item_id=7175994003786157318&source=h5_t&timestamp=1675598389&user_id=6710381246310482945&sec_user_id=MS4wLjABAAAArxH1BGhrJyjhgDNpkBf47gBUXlzi9NPgZcFdNnkiqgX54LVhCStpLx1uzXaFGocO&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7195525715823019782&share_link_id=6cf19771-da92-45b8-bd62-b2c756864319&share_app_id=1233&ugbiz_name=Main&ug_btm=b2001"
async function gabut () {
    let yts = require("yt-search")
    let search = await yts("naplive")
    result = search.all
    images = result[Math.floor(Math.random() * result.length)]
    console.log(images)
    /*images = n[Math.floor(Math.random() * n.length)].url
console.log(images)*/
 }
 
gabut()