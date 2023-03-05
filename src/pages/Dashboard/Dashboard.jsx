import dashboard from "@/assets/logo1.png";
const Dashboard = () => {
  return (
    <>
      <div>
        <img
          style={{
            height: "674px",
            width: "1131px",
            overflowY: "hidden",
            imageRendering: "pixelated",
          }}
          src={dashboard}
          alt="Hình ảnh DashBoard"
        />
      </div>
    </>
  );
};

export default Dashboard;
