import dashboard from "@/assets/logo1.png";
const Dashboard = () => {
  return (
    <>
      <div>
        {/* <img
          style={{
            height: "674px",
            width: "1131px",
            overflow: "hidden",
            imageRendering: "pixelated",
          }}
          src={dashboard}
          alt="Hình ảnh DashBoard"
        /> */}
        <p
          style={{
            fontSize: "40px",
            display: "flex",
            justifyContent: "center",
            color: "red",
          }}
        >
          Cửa hàng bảo hành xe máy Man Thiện
        </p>
        <img
          style={{
            height: "450px",
            width: "1110px",
          }}
          src={dashboard}
          alt="Hình ảnh DashBoard"
        />
      </div>
    </>
  );
};

export default Dashboard;
