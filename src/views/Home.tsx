import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import OrderIcon from "../assets/svg/order.svg";
import SettingIcon from "../assets/svg/settings.svg";
import StatsIcon from "../assets/svg/stats.svg";
import FeatureCard from "../components/FeatureCard";
const Home: React.FC<any> = ({ classes }) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
        <Link to={"/products"}>
          <FeatureCard
            title={<React.Fragment>Bán hàng</React.Fragment>}
            SvgSource={OrderIcon}
            content={"Thực hiện thao tác bán hàng"}
            style={{
              backgroundImage: "linear-gradient(to right, #3aade7, #1876d2)",
            }}
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
        <Link to={"/products"}>
          <FeatureCard
            title={<React.Fragment>Sản phẩm</React.Fragment>}
            SvgSource={OrderIcon}
            content={"Quản lí danh sách sản phẩm"}
            style={{
              backgroundImage: "linear-gradient(to right, #a2379c, #4B1248)",
            }}
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
        <Link to={"/statistics"}>
          <FeatureCard
            title={<React.Fragment>Báo cáo</React.Fragment>}
            SvgSource={StatsIcon}
            content={"Xem doanh thu bán hàng"}
            style={{
              backgroundImage: "linear-gradient(to right, #bd0fe7, #8806ca)",
            }}
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
        <Link to={"/setting"}>
          <FeatureCard
            title={<React.Fragment>Cài đặt</React.Fragment>}
            SvgSource={SettingIcon}
            content={"Thiết lập các thông tin"}
            style={{
              backgroundImage: "linear-gradient(to right, #4e54c8, #8f94fb)",
            }}
          />
        </Link>
      </Grid>
    </Grid>
  );
};
export default Home;
