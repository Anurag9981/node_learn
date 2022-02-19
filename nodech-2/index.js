//1. create a folder named it thapa
// 2. create a file in it named bio.txt and data into it
// 3. add more data into the file at the end of the existing data
// 4. read the data without getting the buffer data at first
// 5. rename the file name to mybio.txt
// 6. now delete both the file and the the folder

// 1.

// const fs=require('fs');
//   const data=fs.mkdir('thapa',(err,data)=>
// {
//    console.log(data);
// });

 // 2.
// const fs=require('fs');
// fs.writeFile("./thapa/bio.txt","my name is anu",(err)=>
// {
//       console.log("file creates");
// });

// 3.
// const fs=require('fs');
// fs.appendFile("./thapa/bio.txt","iam nike name anurag",
// (err)=>
// {
//     console.log("file  writted")
// });

// 4.
// const fs=require('fs');
// fs.readFile("./thapa/bio.txt","utf-8",
// (err,data)=>
// {
//     console.log(data);
// });

// 5.
// const fs=require('fs');
// fs.rename("./thapa/bio.txt","./thapa/mybio.txt",(err)=>
// {
//       console.log("rename done");
// });

// 6.
// const fs=require('fs');
// fs.unlink("./thapa/mybio.txt",(err)=>
// {
//  console.log('delete ');
// });

// 7
/* const fs=require('fs');
fs.rmdir('./nodech-2/thapa',(err)=>
{
   console.log('delte the folder');
});
 */



 
 
