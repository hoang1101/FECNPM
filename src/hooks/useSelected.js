import _ from 'lodash';
import { useState } from 'react';

const useSelected = (initValue = []) => {
  const [selectedItems, setSelectedItems] = useState({ ...initValue } || {});

  const isSelected = (id) => {
    return selectedItems[id] ? true : false;
  };

  const onHandleSelected = (e, id) => {
    if (!e) {
      setSelectedItems((pre) => {
        let result = { ...pre };
        delete result[id];
        return result;
      });
      return;
    }
    setSelectedItems((pre) => ({
      ...pre,
      [id]: 'checked',
    }));
  };

  const onHandleCheckAll = (e, values = []) => {
    if (e) {
      setSelectedItems({ ...values });
    } else {
      setSelectedItems({});
    }
  };

  const isSelectAll = (len) => {
    return Object.keys(selectedItems)?.length === len;
  };

  return {
    selectedItems,
    isSelected,
    onHandleSelected,
    onHandleCheckAll,
    isSelectAll,
  };
};

export default useSelected;
