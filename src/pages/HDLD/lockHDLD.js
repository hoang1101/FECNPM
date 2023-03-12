import {
  informError,
  showApproveModal,
  showConfirmError,
  showConfirmSuccess,
} from "@/components/AccountModal/Modal";
import { ManagerAdmin } from "@/services";

export const LockHDLD = async (id) => {
  try {
    const req = await ManagerAdmin.lockHDLD(id);

    if (req?.success) {
      showConfirmSuccess();
      return true;
    } else {
      informError();
    }
    // showConfirmSuccess();
  } catch (error) {
    showConfirmError();
  }
};

export const unLockHDLD = async (id) => {
  try {
    const req = await ManagerAdmin.unLockHDLD(id);
    if (req?.success) {
      showConfirmSuccess();
      return true;
    } else {
      informError();
    }
    // showConfirmSuccess();
  } catch (error) {
    showConfirmError();
  }
};
