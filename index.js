const fs=require("fs");
fs.writeFile("message.txt","Hello World! fron Node...",(err)=>{
    if(err) throw err;
    console.log("File is saved successfully..");
});

fs.readFile("message.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})