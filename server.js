//exports.myText="hello";
//var fs=require('fs')
//var data=require('./data.json')
//console.log(data.name)
//fs.readFile('./data.json','UTF-8',(err,data)=>{
    //var data=JSON.parse(data)
   // console.log(data)
//})

//read a file:
//var fs=require('fs')
//fs.readdir("c:/",(err,data)=>{
   // console.log(data)
//})

//write a file:
//var fs=require('fs')

//var data={  
    //name:'mota baccha' (data.json it takes your data only from data.json file not from data)


//}
//fs.writeFile('./data.json',JSON.stringify(data),(err)=>{
 //   console.log('hello mota baccha',err)
//})


//var express=require('express')

// var module=express()
// module.use(express.static(__dirname))
// server=module.listen(3000,(err)=>{
//    console.log('server is listening on port 3000:',server.address().port)
// }) 
// const fs=require('fs');
// const http=require('http');
// const server=http.createServer((req,res)=>{
//    console.log("request from client is receiving")
//      fs.readFile('./views/index.html',(err,fileData)=>{
//       if(err){
//          console.log(err)
//       }
//       else{
//          res.write(fileData)
//          res.end()
//       }
//      })
// });

// server.listen(3000,'localhost',()=>{
//    console.log('server is listening on port 3000')
// });

// var express=require('express')
// var app=express()
// app.use(express.static(__dirname))
// var messages=[
//    {name:'Tini',message:'Hi'},
//    {name:'Hipo',message:'hello darling'}
// ]
// app.get('/messages',(req,res)=>{
//      res.send(messages)
// })
// app.post('/messages',(req,res)=>{
//    console.log(req.body)
//    res.sendStatus(200)
// })


var server=app.listen(3000,'localhost',()=>{
      console.log('server is listening on port',server.address().port)
})

console.log("hrllp")


  

// var fs=require('fs')
// var http=require('http')



// var server=http.createServer((req,res)=>{
//    fs.readFile('./views/index.html',(err,fileData)=>{
//       var messages=[
//          {name:'Tini',message:'Hi'},
//          {name:'Hipo',message:'hello darling'}
//       ]
//          if(err){
//             console.log(err)
//          }
//          else{
//             res.write(fileData)
//             res.end()
//          }
//       })
       
// })

// server.listen(3000,'localhost',()=>{
//       console.log('server is listening on port',server.address().port)
// })

