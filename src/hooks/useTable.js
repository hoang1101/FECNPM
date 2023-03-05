import { NotificationService } from '@/services/notificationsService';
import { useCallback } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const useTable = ({ getByPage, deleteNotification, getCountPage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tableData, setTableData] = useState({
    data: [],
    total: 0,
  });

  const [params, setParams] = useState({
    page: 1,
    amount: 10,
    search: '',
  });

  const onPageChange = (params) => {
    setParams((pre) => ({
      ...pre,
      page: params.page,
    }));
  };

  const onPageSizeChange = (params) => {
    setParams((pre) => ({
      ...pre,
      amount: params.pageSize,
    }));
  };

  const fetchRows = useCallback(
    async (params) => {
      if (!getByPage) return;

      const res = await getByPage({
        ...params,
      });

      const resCount = await getCountPage();

      try {
        if (res?.success && resCount?.success) {
          setTableData((pre) => ({
            ...pre,
            data: res?.notifications || [],
            total: resCount?.pages * 10 || 0,
          }));
        }
      } catch (err) {
        throw err;
      }
    },
    [getByPage]
  );

  const onReset = () => {
    fetchRows({
      page: 1,
      amount: 10,
      search: '',
    });
  };

  const onEdit = (id) => {
    navigate(`${location.pathname}/edit/${id}`);
  };

  const onView = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

  const onDelete = (id, name) => {
    swal({
      title: 'Xóa thông báo',
      text: `Bạn có chắc chắn muốn xóa thông báo này? Việc này đồng nghĩa bạn không thể khôi phục thông báo đã xóa.`,
      icon: 'warning',
      // dangerMode: true,
      buttons: ['Hủy', 'Đồng Ý'],
    }).then(async (yes) => {
      if (yes) {
        const res = await deleteNotification(id);
        if (res?.success) {
          setTableData((pre) => ({
            ...pre,
            data: pre.data.filter((data) => data.id !== id),
          }));
          swal({
            title: 'Thông Báo đã bị xóa',
            text: 'Thông Báo đã được xóa thành công!',
            icon: 'success',
            button: 'Đồng Ý',
          });
          if (tableData?.data?.length - 1 <= 0) {
            const temp = { page: params.page - 1 > 0 ? params.page - 1 : 1 };
            onPageChange(temp);
            fetchRows(temp);
          }
        } else {
          swal({
            title: 'Xóa Thông Báo không thành công',
            text: 'Thông Báo đã xóa không thành công!',
            icon: 'error',
            button: 'Đồng Ý',
          });
        }
      }
    });
  };

  return {
    tableData,
    params,
    setParams,
    fetchRows,
    onPageChange,
    onPageSizeChange,
    onReset,
    onEdit,
    onView,
    onDelete,
  };
};

export default useTable;
