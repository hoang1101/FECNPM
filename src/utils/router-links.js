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

    DSCV: "/DSCV",
    editCV: "/editCV",
    createCV: "/createCV",

    DSHV: "/DSHV",
    editHV: "/editHV",
    createHV: "/createHV",

    DSBL: "/DSBL",
    editBL: "/editBL",
    createBL: "/createBL",

    DSHDLD: "/DSHDLD",
    editHDLD: "/editHDLD",
    createHDLD: "/createHDLD",

    DSPL: "/DSPL",
    editPL: "/editPL",
    createPL: "/createPL",

    DSKTKL: "/DSKTKL",
    editKTKL: "/editKTKL",
    createKTKL: "/createKTKL",

    NVHDLD: "/NVHDLD",
    NVPL: "/NVPL",
    NVKTKL: "/NVKTKL",
    TTCN: "/TTCN",
  };
  return array[name];
};
export default Util;
