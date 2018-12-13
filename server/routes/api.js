const express = require('express');
const router = express.Router();
const axios = require('axios');

const baseUrl = 'http://api.tvmaze.com';

router.get('/search', async (req, res) => {

  let query = req.query.q;
  if (!query) {
    return res.sendStatus(400);
  }

  try {
    let results = await axios.get(`${baseUrl}/search/shows?q=${query.trim()}`);   
    return res.json(results.data);
  } catch(err) {
    return res.status(500).json(err);
  }
});


router.get('/shows/:id', async (req, res) => {
  let id = req.params.id;

  try {
    let results = await axios.get(`${baseUrl}/shows/${id}?embed[]=seasons&embed[]=episodes`)

    return res.json(results.data);
  } catch(err) {
    return res.status(500).json(err);
  }
});

module.exports = router;