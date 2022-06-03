const { response } = require('express');
const express = require('express')
const router = express.Router();
const request = require("request");
const converter = require("xml-js");


let url =`http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?serviceKey=zFDc4Cwr2UobCcpmNAAgMraCCT05JbcYfsGtoPkp%2FRxSb7eE898zYZ1Q5WojZieGLlJ95FA4XdCQjlWaEd9T6g%3D%3D&endde=${endDate}&upkind=${dog}&state=notice&pageNo=1&numOfRows=10`;

const today = new Date();
const year = today.getFullYear();
const month = (String(today.getMonth() +1)).padStart(2,"0");
const date = (String(today.getDate())).padStart(2,"0");

//오늘
const endDate = (`${year}${month}${date}`)

const dog = 417000;
const cat = 422400;
const etc = 429900;

//최근1주일 
//&endde=20220602&upkind=417000&state=notice&pageNo=1&numOfRows=20
// export function fetchnewDog (){
//     return fetch(`api/${url}&endde=${endDate}&upkind=${dog}&state=notice&pageNo=1&numOfRows=20`)
// }


// export function fetchnewCat (){
//     return fetch(`${url}&endde=${endDate}&upkind=${cat}&state=notice&pageNo=1&numOfRows=20`)
//     .then((res)=>res.json());
// }


router.get("/", (req, res) => {
    request({
        url : url,
        method:"GET",
    },
    (error,response,body) => {
        const xmlToJson = converter.xml2json(body);
        res.send(xmlToJson);
    });
});

module.exports = router;