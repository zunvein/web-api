const { ytPlay, ytMp3, ytMp4 } = require("../lib/youtube");
const { cekKey, kurangLimit, checkLimit } = require('../database/db');
const { User } = require('../database/model');

async function youtubePlay(req, res) {
    const query = req.query.query;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    ytPlay(query).then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

async function youtubeMp3(req, res) {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    ytMp3(url).then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

async function youtubeMp4(req, res) {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    ytMp4(url).then(result => {
        res.status(200).send({
            status: 200, 
            result: result
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

module.exports = { youtubePlay, youtubeMp3, youtubeMp4 };