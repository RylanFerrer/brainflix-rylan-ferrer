const express = require('express');
const router = express.Router();
const videoData =  __dirname + "/../../model/videos.json"
const mainVideoData = __dirname + "/../../model/mainvideos.json"
const helper = require("../../helpers/helpers");
let videos  = require(videoData);
let mainVideos = require(mainVideoData);
router.post('/',(req,res) => {
    let id = helper.getNewId();
    let image = req.body.title === "HII SISTERS"? `http://localhost:5000/assets/sister.jpg`: "http://localhost:5000/assets/upload.jpg"
   let channelPicker =  req.body.title === "HII SISTERS"? `James Charles`: "MLG PRO"
   let date = new Date();
   const newVideo = {
            id: id,
            image:  image,
            title: req.body.title,
            channel: channelPicker
          };
    const newMainVideo = {
            id: id,
            title: req.body.title,
            channel: channelPicker,
            image: image,
            description: req.body.description,
            views: 0,
            likes: 0,
            duration: 0,
            video: '',
            timestamp: date.getMilliseconds(),
            comments: []
        };
            videos.push(newVideo);
    mainVideos.push(newMainVideo);
    helper.writeJSONFile(videoData, videos);
    helper.writeJSONFile(mainVideoData, mainVideos);
    return res.status(200).redirect("/");
});


router.get("/", (req,res) => {
    res.json(videos);
});

router.get('/:id', (req,res) => {
    checkVideoId = (video) => video.id === req.params.id;
    const found = videos.some(checkVideoId);
    if(found) {
        res.json(mainVideos.filter(video => video.id === (req.params.id)))
    } else {
        res.status(400).json({
            errorMessage: `Video with ID ${req.params.id} not found`
        })

    }
});

module.exports = router