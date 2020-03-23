export const inc = () => ({ type: "INC" });

export const dec = () => ({ type: "DEC" });

export const rnd = payload => ({
  type: "RND",
  payload: Math.floor(Math.random() * 10)
});
