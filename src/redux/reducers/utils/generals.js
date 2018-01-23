export const formatJson = (state) => {
  return JSON.stringify(JSON.parse(state), null, 2)
};
