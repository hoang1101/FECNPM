import {
  showdeleteUserEditConfirm,
  showDeleteUserEditFail,
  showDeleteUserEditSuccess,
  showUpdateUserEditFail,
  showUpdateUserEditSuccess,
} from '@/components/AccountModal/Modal';
import { AccountService } from '@/services/Account';
import { useParams } from 'react-router-dom';
import useSelected from './useSelected';

const useUserSubInform = () => {
  const { id } = useParams();

  const {
    isSelected,
    onHandleSelected,
    onHandleCheckAll,
    selectedItems,
    isSelectAll,
  } = useSelected();

  const updateUserSubInform = (
    value,
    setSubmitting,
    subInformName,
    updateSubInformName,
    form,
    formListName
  ) => {
    setSubmitting(true);
    try {
      value?.userSubInform?.map(async (inform, index) => {
        let date;

        if (inform?.start_time) {
          date = {
            start_time: inform?.start_time?.format('YYYY-MM-DD'),
            end_time: inform?.until_now
              ? null
              : inform?.end_time?.format('YYYY-MM-DD'),
            until_now: inform?.until_now || false,
          };
        } else if (inform?.received_date) {
          date = {
            received_date: inform?.received_date?.format('YYYY-MM-DD'),
            achievements: inform?.prize,
          };
        }

        const data = date ? { ...inform, ...date } : { ...inform };

        const response = await AccountService.updateUserSubInformation(
          subInformName,
          updateSubInformName,
          id,
          inform?.id,
          data
        );

        if (response?.success) {
          showUpdateUserEditSuccess(setSubmitting);
          form.setFieldValue([formListName, index, 'id'], response?.id);
        }
      });
    } catch (error) {
      showUpdateUserEditFail();
    }
  };

  const deleteUserSubInform = async (deleteOption, subInformName) => {
    try {
      const response = await AccountService.deleteUserSubInformation(
        subInformName,
        id,
        deleteOption
      );

      if (response?.success) {
        showDeleteUserEditSuccess();
        return true;
      }
    } catch (error) {
      showDeleteUserEditFail();
      return false;
    }
  };

  const removeField = (id, subInformName, fieldName, remove) => {
    if (id) {
      showdeleteUserEditConfirm(async () => {
        const result = await deleteUserSubInform(
          { data: { id: id } },
          subInformName
        );

        if (result) {
          remove(fieldName);
        }
      });
    } else remove(fieldName);
  };

  const handleCheckAll = (e, fields) => {
    let value = {};

    fields.forEach((item) => {
      value = { ...value, [item?.key]: 'checked' };
    });
    onHandleCheckAll(e, value);
  };

  const removeSeletedItems = async (
    fields,
    subInformName,
    remove,
    form,
    formListName
  ) => {
    let idFormList = [];
    let keyFormWithId = [];
    let keyFormWithoutId = [];

    fields?.map((field) => {
      if (selectedItems[field.key]) {
        const idSubInform = form.getFieldValue([formListName, field.name])?.id;
        if (idSubInform) {
          idFormList.push(Number(idSubInform));
          keyFormWithId.push(field.name);
        } else {
          keyFormWithoutId.push(field.name);
          onHandleSelected(false, field.key);
        }
      }
    });

    let result;

    if (idFormList.length > 1) {
      showdeleteUserEditConfirm(async () => {
        result = await deleteUserSubInform(
          {
            data: { id_list: idFormList },
          },
          'education'
        );

        if (result) {
          remove([...keyFormWithoutId, ...keyFormWithId]);
          onHandleCheckAll(false, {});
        } else {
          remove([...keyFormWithoutId]);
          onHandleCheckAll(false, {});
        }
      });
      // if (result) fieldKeyList?.forEach((name) => remove([...keyFormWithoutId, ...keyFormWithId]));
    } else if (idFormList.length === 1) {
      showdeleteUserEditConfirm(async () => {
        result = await deleteUserSubInform(
          {
            data: { id: idFormList[0] },
          },
          subInformName
        );

        if (result) {
          remove([...keyFormWithoutId, ...keyFormWithId]);
          onHandleCheckAll(false, {});
        } else {
          remove([...keyFormWithoutId]);
          onHandleCheckAll(false, {});
        }
      });
      // if (result) remove([...keyFormWithoutId, ...keyFormWithId]);
    }
  };

  return {
    selectedItems,
    isSelected,
    onHandleSelected,
    isSelectAll,
    removeField,
    removeSeletedItems,
    handleCheckAll,
    updateUserSubInform,
    deleteUserSubInform,
  };
};

export default useUserSubInform;
