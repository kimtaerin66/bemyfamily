import React from 'react';


const BASE_URL="https://cors.bridged.cc/http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?serviceKey=zFDc4Cwr2UobCcpmNAAgMraCCT05JbcYfsGtoPkp%2FRxSb7eE898zYZ1Q5WojZieGLlJ95FA4XdCQjlWaEd9T6g%3D%3D";

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
export function fetchnewDog (){
    return fetch(`${BASE_URL}&endde=${endDate}&upkind=${dog}&state=notice&pageNo=1&numOfRows=20`)
    .then((res)=>res.json());
}

export function fetchnewCat (){
    return fetch(`${BASE_URL}&endde=${endDate}&upkind=${cat}&state=notice&pageNo=1&numOfRows=20`)
    .then((res)=>res.json());
}




