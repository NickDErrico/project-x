export const changeArr = arr => {
  let result = Object.assign(
    { children: [], spaceAllocated: 0 },
    arr.filter(item => item.parent_id === null)[0]
  );

  function recusiveObjGen(obj) {
    obj.children = arr.filter(item => obj.id === item.parent_id);
    obj.children.forEach(item => {
      recusiveObjGen(item);
    });
    return obj;
  }

  function recursiveChildLen(obj) {
    if (obj.children.length === 0) {
      obj.spaceAllocated = 1;
      return obj;
    }
    obj.spaceAllocated = obj.children.reduce((accum, item) => {
      return accum + recursiveChildLen(item).spaceAllocated;
    }, 0);
    return obj;
  }

  return recursiveChildLen(recusiveObjGen(result));
};
