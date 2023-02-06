const api = require("caliph-api")
const axios = require('axios')
const { cekKey, kurangLimit, checkLimit } = require('../database/db');
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



exports.tiktokdownloader = async(req, res) => {

    const url = req.query.url;
    const apikey = req.query.apikey;
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Url`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    
    
    const result = await api.downloader.tiktok(url).catch(err => {
             res.status(404).send({
             status: 404,
             message: err
          });
      });
    
    res.status(200).send({
            status: 200, 
            creator: 'Ryan', 
            data: {
                nowm: result.nowm,
                watermark: result.watermark,
                audio: result.audio,
                thumb: result.thumnail            
            }
        });
    }
    
exports.ytplaymusic = async(req, res) => {

    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Query`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });


    const results = await api.downloader.yt.play(query).catch(err => {
             res.status(404).send({
             status: 404,
             message: err
        });
    });
  
    const result = results.result
    
    res.status(200).send({
            status: 200, 
            creator: 'Ryan', 
            data: {
                title: result.title,
                channel: result.channel,
                views: result.views,
                desc: result.desc,
                url: result.result,
                thumb: result.thumb,
                size: result.size,
                uploudDate: result.uplouadDate
                
            }
        });
    }

exports.ytplayvideo = async(req, res) => {

    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Query`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    
    
    const results = await api.downloader.yt.playvid(query).catch(err => {
             res.status(404).send({
             status: 404,
             message: err
          });
      });
      
    const result = results.result
        
    res.status(200).send({
            status: 200, 
            creator: 'Ryan', 
            data: {
                title: result.title,
                channel: result.channel,
                views: result.views,
                desc: result.desc,
                url: result.result,
                thumb: result.thumb,
                size: result.size,
                uploudDate: result.uplouadDate,
                duration: result.duration,
                quality: result.quality
                
            }
        });
    }


exports.githubstalk = async(req, res) => {

    const user = req.query.user;
    const apikey = req.query.apikey;
    
    if (user === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter User`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    const result = await fetchJson('https://api.github.com/users/'+user).catch(err => {
             res.status(404).send({
             status: 404,
             message: err
          });
      });
    
    res.status(200).send({
            status: 200, 
            creator: 'Ryan', 
            data: {
                username: result.login,
                name: result.name,
                bio: result.bio,
                public_repos: result.public_repos,
                followers: result.followers,
                gists: result.public_gists,
                url: result.html_url,
                avatar: result.avatar_url,
                company: result.company,
                blog: result.blog,
                location: result.location,
                email: result.email,
                hireable: result.hireable,
                bio: result.bio,
                twitter_username: result.twitter_username
                
            }
        });
    }
    
exports.pinterest = async(req, res) => {

    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Query`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    
    const kotz = require('kotz-api');
    const result = await kotz.pinterest(query).catch(err => {
             res.status(404).send({
             status: 404,
             message: err
          });
      });
    const output = result[Math.floor(Math.random() * result.length)]
    
    res.status(200).send({
            status: 200, 
            creator: 'Ryan', 
            data: {
                    query: query,
                    result: output
            }
        });
    }
    
exports.googleimage = async(req, res) => {

    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Query`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    
    let gis = require('g-i-s')
        gis(query, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
    
    res.status(200).send({
            status: 200, 
            creator: 'Ryan', 
            data: {
                    query: query,
                    result: images
            }
        });
    
    })

    }
    
exports.google = async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Query`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    
    const ggs = require('google-it')
    const ress = await ggs({'query' : `${query}`}).catch(err => {
             res.status(404).send({
             status: 404,
             message: err
          });
      });
      
      
    for (let i of ress) {
    res.status(200).send({
            status: 200, 
            creator: 'Ryan', 
            data: {
                    title: i.title,
                    link: i.link,
                    snippet: i.snippet
            }
        });

        }
    }
    
exports.ytsearch = async(req, res) => {
    const query = req.query.query;
    const apikey = req.query.apikey;
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Query`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter Apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey not found, please register first!`
    });
    await kurangLimit(apikey)
    const limit = await checkLimit(apikey)
    if (limit === 0) return res.status(403).send({
        status: 403,
        message: `your limit is up, wait tomorrow to be reset again`
    });
    
    let yts = require("yt-search")
    let search = await yts(query)
    result = search.all
    k = result[Math.floor(Math.random() * result.length)]
    
    res.status(200).send({
            status: 200, 
            creator: 'Ryan', 
            data: {
                    type: k.type,
                    videoId: k.videoId,
                    url: k.url,
                    title: k.title,
                    description: k.description,
                    image: k.image,
                    thumbnail: k.thumbnail,
                    seconds: k.second,
                    timestamp: k.timestamp,
                    ago: k.ago,
                    views: k.views,
                    author: k.author
            }
        });

    }