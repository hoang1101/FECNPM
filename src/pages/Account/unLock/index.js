import { informError, informSucess } from "@/components/AccountModal/Modal";
import { AdminService } from "@/services";

const unLock = async (id, setSuccess) => {
  try {
    const req = await AdminService.unLock(id);
    if (req.success) {
      setSuccess(true);
      informSucess();
    } else {
      setSuccess(flase);
      informError();
    }
  } catch (error) {
    setSuccess(flase);
    informError();
  }
};
export default unLock;
