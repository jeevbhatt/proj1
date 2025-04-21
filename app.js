const express =require('express');
const app = express();
//
app.get('/',(h,r)=>{
  r.send("<h1 style='color:orange'>Hare Ram Hare Ram Ram Ram Hare Hare<br> Hare Krishna Hare Krishna Krishna Krishna Hare Hare!</h1>");
});

app.get('/about',(req,res)=>{
  res.send("<a href='https://www.google.com'>About</a>");
});

app.get("/contact",(c,p)=>{
  p.send("<h1 style='color:blue'>Contact</h1>");
});
//
app.listen(3000,function() {
  console.log(`Server is running on port`);
});
