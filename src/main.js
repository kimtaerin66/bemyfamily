//main.js
const express = require('express'); //모듈불러오기
const app = express(); //express생성하여 app에 담기


app.get('/', (req, res) => {  //get요청을 받으면
    res.send('Hello world'); //hello world 보내기
});

app.listen(3000, 
() => console.log('App is listening on port 3000!')); //연결이되면 실행할 콜백함수