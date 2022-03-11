import React, { useLayoutEffect, useState } from "react"
var axios = require('axios');
function getInfo(method,url,callback){
    var config = {
    method: method,
    url: url,
    headers: {
      }};
    axios(config)
    .then(function (response) {
        callback(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export default getInfo