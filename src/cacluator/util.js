export function calculateResult(inputList, targetValue) {
  let maxList = [];
  let depth = inputList.length;
  let tempPath = [];
  let currentMax = 0;

  const search = (i) => { // 表示递归深度
    if (i >= depth) {
      checkMax(); //检查最大值
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
    if (value <= targetValue) { // 判断是否达到上限
      let list = [];
      tempPath.forEach((p, index) => {
        if (p === 1) {
          list.push(inputList[index]);
        }
      });
      if (value > currentMax) {
        maxList = [{ total: value, list }];
        currentMax = value;
      }
      if (value === currentMax && list.sort().toString() !== maxList[0]?.list.sort().toString()) {
        maxList.push({ total: value, list });
      }
    }
  };

  search(0);
  return maxList;
}

