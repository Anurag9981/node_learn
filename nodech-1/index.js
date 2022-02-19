//challage time

// 1. create a folder named it thapa
// 2. create a file in it named bio.txt and data into it
// 3. add more data into the file at the end of the existing data
// 4. read the data without getting the buffer data at first
// 5. rename the file name to mybio.txt
// 6. now delete both the file and the the folder

// 1.
// const fs= require('fs');
// fs.mkdirSync('thapa');


// 2.
// const fs= require('fs');
// fs.writeFileSync('bio.txt',"my name is anurag");

// 3.
// const fs= require('fs');
// fs.appendFileSync('bio.txt',"iam currently pursuing btech ");

// 4.
//  const fs= require('fs');
//  const buf_data=fs.readFileSync('bio.txt',"utf-8");
//  console.log(buf_data);

// 5.
// const fs= require('fs');
// fs.renameSync('bio.txt','mybio.txt');

// 6.
// const fs= require('fs');
// fs.unlink('mybio.txt');

// 7.
// const fs= require('fs');
// fs.rmdirSync('thapa');




