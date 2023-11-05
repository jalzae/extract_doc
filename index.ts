import * as reader from 'any-text';

reader.getText('./doc.pdf').then(function (data: string) {
  console.log(data);
  console.log("Character Found :" + data.length);
});