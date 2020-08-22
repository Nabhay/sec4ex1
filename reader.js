var fs = require('fs')
       fs.unlink('ans.txt',function(err){
           if (err) throw err;
       })
        fs.readFile('ques.txt','utf-8',(err,word) => {
            if (err) throw err;
           var q = "";
           word += "\n";
           for(var i = 0;i<word.length;i++){
             q += word[i];
             if (word[i]=="\n"){
                 var an = eval(q)+"\n";
                fs.appendFile('ans.txt',an,function(err) {
                    if (err) throw err;
                   
                    console.log("answer adeed");

                })
                q = "";
             }  
           }
           
    
        })