// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  const resultData = [];

  fs.readFile(file1,{encoding: 'utf-8'}, function spliData(err, data){
    const fileData = JSON.parse(data);
    let message = fileData.message;
    resultData.push(message.split(' ')[1]);

    fs.readFile(file2,{encoding: 'utf-8'}, function splitData(err, data){
      const fileData = JSON.parse(data);
      let message = fileData[0].message;
      resultData.push(message.split(' ')[1]);

      fs.readFile(file3,{encoding: 'utf-8'}, function splitData(err, data){
        const fileData = JSON.parse(data);
        let message = fileData[0].data.message;
        resultData.push(message.split(' ')[1]);

        fnCallBack(err, resultData);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
