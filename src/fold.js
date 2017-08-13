// @flow

function fold(
  cb: (
    accumulator: mixed,
    currentValue: mixed,
    currentIndex?: number
  ) => Map<*, *>,
  inputMap: Map<*, *>
): Map<*, *> {
  if (typeof cb !== 'function') throw new Error(
      `Expected 1st argument in call to filter to be a function but received ${typeof cb}`
    )
}

module.exports = fold
