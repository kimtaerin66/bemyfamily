const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const api = require("./api");
// const join = require("./Routes/Join");
const bodyParser = require('body-parser');
const mysql = require("mysql"); 


const db  = mysql.createPool({
   host : "localhost",
   user : "root", //mysql의 id
   password : "111111", //root 비번
   database : "user", //사용할 데이터베이스
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); //모든연결허용
app.use(bodyParser.json());

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
app.use("/api", api);

app.get("/",(req, res)=>{
  const sql = "INSERT INTO user_info (id, password) VALUES(?)";
  db.query(sql,(err, result)=>{
    console.log(err);
   res.send("성공");
  });
})

app.get("/join", (req,res) =>{
  db.query("SELECT * FROM user_info", (err, rows, fields) =>{
    if(err){
      console.log("데이터 가져오기 실패");
    }else {
      console.log(rows[0]);
      res.send(rows[0]);
    }
  })
})


app.listen(port, () => {
  console.log(`listening at ${port}`)
})

 