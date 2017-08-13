// @flow

function fold(
  cb: (accumulator: mixed, currentValue: mixed, currentKey: mixed) => mixed,
  inputMap: Map<*, *>,
  initialValue?: mixed
): mixed {
  if (typeof cb !== 'function') throw new Error(
      `Expected 1st argument in call to filter to be a function but received ${typeof cb}`
    )

  let result
  if (initialValue) result = initialValue

  /*
  for (const [ k, v ] of inputMap) {
    result = cb(result, v, k)
  }
  */

  return result
}

module.exports = fold
