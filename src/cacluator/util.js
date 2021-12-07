export function calculateResult(inputList, targetValue, calculateType) {
  let resultList = [];
  let depth = inputList.length;
  let tempPath = [];
  let currentMaxOrMin = 0;

  const search = (i) => { // 递归深度
    if (i >= depth) {
      if (calculateType === 'noMoreThan') {
        checkMax();
      } else if (calculateType === 'noLessThan') {
        checkMin();
      }
    } else {
      tempPath[i] = 0;
      search(i + 1);
      tempPath[i] = 1;
      search(i + 1);
    }
  };

  const checkMax = () => {
    let value = 0;
    for (let i = 0; i < depth; i++) {
      if (tempPath[i] === 1) {
        value += inputList[i];
      }
    }
    // 不高于（交通）
    if (value > 0 && value <= targetValue) {
      let list = [];
      tempPath.forEach((p, index) => {
        if (p === 1) {
          list.push(inputList[index]);
        }
      });
      if (value > currentMaxOrMin) {
        resultList = [{ total: value, list }];
        currentMaxOrMin = value;
      } else if (value === currentMaxOrMin) {
        if (resultList.every((v) => v.list.sort().toString() !== list.sort().toString())) {
          resultList.push({ total: value, list });
        }
      }
    }
  };

  const checkMin = () => {
    let value = 0;
    for (let i = 0; i < depth; i++) {
      if (tempPath[i] === 1) {
        value += inputList[i];
      }
    }
    // 不低于（租房）
    if (value >= targetValue) {
      let list = [];
      tempPath.forEach((p, index) => {
        if (p === 1) {
          list.push(inputList[index]);
        }
      });

      if (!currentMaxOrMin || value < currentMaxOrMin) {
        resultList = [{ total: value, list }];
        currentMaxOrMin = value;
      } else if (value === currentMaxOrMin) {
        if (resultList.every((v) => v.list.sort().toString() !== list.sort().toString())) {
          resultList.push({ total: value, list });
        }
      }
    }
  };

  search(0);
  return resultList;
}

