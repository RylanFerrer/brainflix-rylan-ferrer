const express = require('express');
const router = express.Router();
const app  = express();
const videoData =  __dirname + "/../../model/videos.json"
const mainVideoData = __dirname + "/../../model/mainvideos.json"
const helper = require("../../helpers/helpers");
let videos  = require(videoData);
let mainVideos = require(mainVideoData);
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
router.post('/', (req,res) => {
    const newVideo = {
        id: helper.getNewId(videos),
        title: req.body.title,
        description: req.body.description,
      };
    console.log(newVideo);
});


module.exports = router