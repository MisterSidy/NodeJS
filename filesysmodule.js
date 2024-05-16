const fs = require('fs');

// Creating a file and read it
// fs.writeFile('myfile.txt', "Hey this is an example", (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('File created successfully');
//         fs.readFile('myfile.txt', 'utf8', (err,data)=>{
//             if(err) throw err;
//             console.log(data);
//         });
//     }
// });
// *********************Renaming the file*******************************
// fs.rename('myfile.txt','myfile2.txt', (err)=>{
//     if (err) throw err;
//     console.log('File successfully renamed !');
// });

// **************append some data to the file*******************

// fs.appendFile('myfile2.txt', 'Some data being appended', (err) => {
//     if (err) throw err;
//     console.log('Data appended successfully !');
    
// });
// ************************Deleting file****************
// fs.unlink('myfile2.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully !')
// });

// ****************Deleting multiple files in the same folder*************

fs.readdir('myfolder', (err,files)=>{
    if (err) throw err;
    else{
        for(let file of files){
            fs.unlink('./myfolder/' + file, (err) => {
                if (err) throw err;
                console.log('File successfully deleted !');
            });
        }
    };

});