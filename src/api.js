const { response } = require('express');
const express = require('express')
const router = express.Router();
const request = require("request");
const converter = require("xml-js");


const today = new Date();
const year = today.getFullYear();
const month = (String(today.getMonth() +1)).padStart(2,"0");
const date = (String(today.getDate())).padStart(2,"0");
const endDate = year +""+ month+""+date;


const dog = 417000;
const cat = 422400;
const etc = 429900;

let url =`http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?serviceKey=zFDc4Cwr2UobCcpmNAAgMraCCT05JbcYfsGtoPkp%2FRxSb7eE898zYZ1Q5WojZieGLlJ95FA4XdCQjlWaEd9T6g%3D%3D&endde=${endDate}&upkind=${dog}&state=notice&pageNo=1&numOfRows=10`;
let url2 =`http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?serviceKey=zFDc4Cwr2UobCcpmNAAgMraCCT05JbcYfsGtoPkp%2FRxSb7eE898zYZ1Q5WojZieGLlJ95FA4XdCQjlWaEd9T6g%3D%3D&endde=${endDate}&upkind=${cat}&state=notice&pageNo=1&numOfRows=10`;


router.get("/", (req, res) => {
    request({
        url :  url,
        method:"GET",
    },
    (error,response,body) => {
        const xmlToJson = converter.xml2json(body);
        res.send(xmlToJson);
    });
});

module.exports = router;