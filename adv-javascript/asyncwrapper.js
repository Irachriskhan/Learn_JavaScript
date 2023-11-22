function add() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello world!");
    });
  });
}

// to be reviewd
// const answer = async () => {
//   try {
//     const ans = await add();
//     console.log(ans);
//   } catch (e) {
//     console.log(e);
//   }
// };

// answer();
// add().then((resp) => console.log(resp));

const answer = async () => {
  const ans = await add();
  console.log(ans);
};

const ansyncWrapper = (fn) => {
  return async (next) => {
    try {
      await fn(next);
    } catch (e) {
      next(e);
    }
  };
};

ansyncWrapper(answer());
