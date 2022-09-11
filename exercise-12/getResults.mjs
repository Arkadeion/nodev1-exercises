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

async function getResults() {
  try {
    const result1 = await luckyDraw("Tina");
    console.log(result1);
  } catch (err) {
    console.error(err);
  }
  try {
    const result2 = await luckyDraw("Jorge");
    console.log(result2);
  } catch (err) {
    console.error(err);
  }
  try {
    const result3 = await luckyDraw("Julien");
    console.log(result3);
  } catch (err) {
    console.error(err);
  }
}

getResults();
