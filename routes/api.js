const express = require('express');
const path = require('path')
const router = express.Router();
const fitur = require('../controllers/fitur')
const wareg = require('../controllers/wareg')
const { cekKey } = require('../database/db'); 
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('../controllers/yt');
const { cakLontong, bijak, quotes, fakta, ptl, motivasi } = require('../controllers/randomtext');

router.get('/checkkey', async (req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    res.send({status: 200, apikey: apikey, response: 'Active'});
});
//Youtube
router.get('/ytplay', youtubePlay);
router.get('/ytmp4', youtubeMp4);
router.get('/ytmp3', youtubeMp3);
router.get('/ytplaymusic', wareg.ytplaymusic);
router.get('/ytplayvideo', wareg.ytplayvideo);
router.get('/yts', wareg.ytsearch);

//Tiktok
router.get('/tiktok', wareg.tiktokdownloader);

//Game
router.get('/game/caklontong', cakLontong);

//Random Text
router.get('/quotes', quotes);
router.get('/fakta', fakta);
router.get('/bijak', bijak);
router.get('/ptl', ptl);
router.get('/motivasi', motivasi);

//Search
router.get('/search/sfile', fitur.sfiles);
router.get('/search/pinterest', wareg.pinterest);
router.get('/search/gimage', wareg.googleimage);
router.get('/search/google', wareg.google);
router.get('/search/group', fitur.grups);
router.get('/search/kiryu', fitur.kiryu);
router.get('/search/wattpad', fitur.wattpad);
router.get('/search/konachan', fitur.konachan);
router.get('/search/wiki', fitur.wiki);
router.get('/search/happymod', fitur.happymod);
router.get('/search/apkmody', fitur.apkmody);
router.get('/search/resepmasakan', fitur.resepmasakan);

//Downloader

//Stalker
router.get('/stalk/github', wareg.githubstalk)

module.exports = router;
