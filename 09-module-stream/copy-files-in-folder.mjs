import fs from 'fs';
import path from 'path';

const sourseDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourseDir)) {
  console.warn(`Sourse dir ${sourseDir} does not exist`);
  console.log('Exiting...');
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmSync(destinationDir, { recursive: true });
}
fs.mkdirSync(destinationDir);

fs.readdir(sourseDir, (err, fileNames) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Start', performance.now());
  fileNames.forEach((fileName, index) => {
    const sourseFilePath = path.join(sourseDir, fileName);
    const destinationFilePath = path.join(
      destinationDir,
      `${index + 1}. ${fileName}`
    );

    const readFileStream = fs.createReadStream(sourseFilePath);
    const writeFileStream = fs.createWriteStream(destinationFilePath);

    readFileStream.pipe(writeFileStream);
    writeFileStream.on('finish', () => {
      console.log(`File ${fileName} was copied.`);
    });
  });
  console.log('End', performance.now());
});
