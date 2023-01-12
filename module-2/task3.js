import { createReadStream, createWriteStream } from "fs";
import csv from "csvtojson";


const readStream = createReadStream("./assets/nodejs-hw1-ex1.csv");
const ws = createWriteStream("./books-task3.txt", "utf-8");
readStream
  .pipe(
    csv({
      noheader: true,
      headers: ["book", "author", "units", "price"],
    })
  )
  .pipe(ws)
  .on("error", (error) => {
    console.log(error);
  });
