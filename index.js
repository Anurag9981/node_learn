// const name="anu";
// console.log(name);

    //core module 
   
       //ceate a new file

    //  const fs=require ("fs");
     //1.data add karna
    // fs.writeFileSync("read.txt", " my name is Anurag");

    // 2.data pe overwrite karna
    // fs.writeFileSync("read.txt"," iam pursunig btech , my name is Anurag ");   // jo data phle sa tha vo compltaly delete ho gya ya overwrite h jata gh
     

    // question
    //  hello buddy welcome to it family
    //  how are you iam fine thank you

    // 3.extra data add karna
   //  fs.appendFileSync('read.txt',"how are you iam fine thank you"); 

     // 4.ak file ke buffer data  ko print karna

    // const buf_data=fs.readFileSync('read.txt');
    // console.log(buf_data);

    // node.js includes an additional data type called buffer
    //(not available in browser javascript)
    // buffer is mainly used to store binary data
    //while reading from a file or receving packets overs the networks

    // <Buffer 20 69 61 6d 20 70 75 72 73 75 6e 69 67 20 62 74 65 63 68 2c 20 6d 79 20 6e 61 6d 65 20 69 73 20 41 6e 75 72 61 67 20 68 6f 77 20 61 72 65 20 79 6f 75 ...  19 more bytes>

    // 5.jo file pe likha tha dusri file ki help se read kar sakte h

    // const buf_data=fs.readFileSync('read.txt');
    // console.log(buf_data);
    // org_data=buf_data.toString();
    // console.log(org_data);

    //6. to rename the file
    // fs.renameSync("read.txt","readwrite.txt");

