/**
 * Takes a data object of n dimensions and flattens the it to a 1-D list
 * @param data{json}
 * @param output{json}
 * @returns a 1-D list of the data object
 */
const flattenObject = (data, output = {}) => {
  // If there is nothing left to iterate over
  if (!data) return;

  // Get list of keys
  const keys = Object.keys(data);

  // Iterate over the list of keys.
  keys.forEach((key) => {
    const currentData = data[key];

    // If the key is undefined.
    if (!currentData) output[key] = "";

    // If the value is not an object.
    if (typeof currentData !== "object") {
      output[key] = currentData;
      return;
    }

    // Enter the next layer to breakdown.
    flattenObject(currentData, output);
  });
  return output;
};

export { flattenObject };
