import shortid from 'shortid';

class Parser {
  constructor(chunk, headers = false) {
    this.chunk = chuck;
    this.header = headers;
  }

  /**
   *
   * @returns {{}}
   * @constructor
   */
  static baseNodeType(type) {
    return {
      type: type,
      id: shortid.generate(),
      mLeft: 38,
      isChildOf: [],
      isRoot: false,
      path: '',
    };
  }

  /**
   * @param type - string object or an primitive(string, numbers, boolean) or an object (array, object or null)
   * @param iteratee
   * @returns {nodeType} - primitive or an object
   */
  static nodeType(type, iteratee) {
    const types = {

      primitive(iteratee) {
        const [key, value] = iteratee;

        return {
          Qey: key,
          value,
          meta: {
            ...Parser.baseNodeType,
          },
        };
      },
      object(iteratee) {
        const [key, value] = iteratee;

        return {
          Qey: key,
          contentCount: '',
          meta: {
            ...Parser.baseNodeType(),
            isExpandable: false,
            isExpanded: false,
            payload: [],
            insertionPoint: null,
          },
        };
      },
    };

    return types[type](iteratee);
  }
}

export default Parser;
