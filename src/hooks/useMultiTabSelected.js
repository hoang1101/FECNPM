import _ from 'lodash';
import { useState } from 'react';

const useMultiTabSelected = (initCount = {}, initSelectedAll = {}) => {
  const [selectedItems, setSelectedItems] = useState(initCount);

  const isSelected = (id) => {
    if (!selectedItems[id]) return false;

    return selectedItems[id].isCheck ? true : false;
  };

  const onHandleSelected = (action, nameCount, value) => {
    const changeCountNumber = action ? 1 : -1;

    setSelectedItems((pre) => {
      let obj = { count: pre.count + changeCountNumber };
      obj = nameCount
        ? { ...obj, [nameCount]: pre[nameCount] + changeCountNumber }
        : obj;
      return {
        ...pre,
        [value.id]: {
          ...value,
          isCheck: changeCountNumber === 1 ? true : false,
        },
        ...obj,
      };
    });
  };

  const onHandleCheckAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(initSelectedAll);
    } else {
      setSelectedItems(initCount);
    }
  };

  return {
    selectedItems,
    isSelected,
    onHandleSelected,
    onHandleCheckAll,
  };
};

export default useMultiTabSelected;
