import { informError, informSucess } from "@/components/AccountModal/Modal";
import { AdminService } from "@/services";

const lock = async (id, setSuccess) => {
  try {
    const req = await AdminService.lock(id);
    console.log(req, "huan");
    if (req.success) {
      setSuccess(true);
      informSucess();
    } else {
      setSuccess(false);
      informError();
    }
  } catch (error) {
    setSuccess(false);
    informError();
  }
};
export default lock;
