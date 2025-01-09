import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer   
    .prompt([
        {
            type:"input",
            name:"question",
            message:"What is the link ?",
        },
    ])
    .then((answers)=>{
        console.log(answers.question);
        var qr_png = qr.image(answers.question,{type:"png"});
        qr_png.pipe(fs.createWriteStream("qr-image.png"));
        var png_string = qr.imageSync(answers.question,{type:"png"});
        fs.writeFile("user_input.txt", answers.question, (err)=>{
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error =>{
        console.log(error);
    }));