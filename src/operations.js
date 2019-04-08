/**
 * Provides constants and supporting functions for operations.
 */

'use strict';

const operations = {
  PLUS: 'plus',
  MINUS: 'minus',
  SELF: 'selfPlus'
};

/**
 * Given a mathematical operation, returns the name of that operation.
 *
 * @param {string} operation A mathematical operation such as '+' or '-'.
 * @return {string} The name of the operation.
 */
const getOperationName = ( operation ) => {
  let operationName = '';

  /* eslint-disable max-statements-per-line */
  switch ( operation ) {
    case ':cookie:': operationName = operations.PLUS; break;
    case '-': operationName = operations.MINUS; break;
  }
  /* eslint-enable max-statements-per-line */

  return operationName ? operationName : false;

};

module.exports = {
  operations,
  getOperationName
};
