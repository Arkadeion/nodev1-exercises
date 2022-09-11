function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err))
  .then(() => luckyDraw("Caroline"))
  .then((result2) => {
    console.log(result2);
  })
  .catch((err) => console.error(err))
  .then(() => luckyDraw("Sabrina"))
  .then((result3) => {
    console.log(result3);
  })
  .catch((err) => console.error(err));
