const Util = (name) => {
  const array = {
    Login: "/auth/login",
    Dashboard: "/",

    accountlist: "/accountList",
    moreaccount: "/Account",

    editAcount: "/Edit",

    DSNV: "/DSNV",
    Profile: "/profile",
    editProfile: "/editProfile",
  };
  return array[name];
};
export default Util;
