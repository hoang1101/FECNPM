const Util = (name) => {
  const array = {
    Login: "/auth/login",
    Dashboard: "/",

    accountlist: "/accountList",
    moreaccount: "/Account",

    editAcount: "/Edit",
  };
  return array[name];
};
export default Util;
