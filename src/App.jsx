import { useState } from "react";
import "./App.css";
import "./app.scss";
import HomeCarousel from "./components/homecarousel";
import PageHeader from "./components/header";
import PageFooter from "./components/footer";
import VerticalPost from "./components/verticalPost";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PageHeader />
      <div className="pageContent">
        <div className="page-carousel">
          <HomeCarousel />
        </div>
        {/* home quick link */}
        <div className="home-quick-link sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between gap-4">
          <a className="quick-link-item text-center py-4">
            <img
              className="mb-3"
              src="https://www.tlu.edu.vn/portals/0/images/front/tuyen_sinh.png"
              alt=""
            />
            <div>Tuyển sinh</div>
          </a>
          <a className="quick-link-item text-center py-4">
            <img
              className="mb-3"
              src="https://www.tlu.edu.vn/portals/0/images/front/65_64x40.png"
            ></img>
            <div>65 Năm</div>
          </a>
          <a className="quick-link-item text-center py-4">
            <img
              className="mb-3"
              src="https://www.tlu.edu.vn/portals/0/images/front/viec_lam.png"
            ></img>
            <div>Thông tin việc làm</div>
          </a>
          <a className="quick-link-item text-center py-4">
            <img
              className="mb-3"
              src="https://www.tlu.edu.vn/portals/0/images/front/quality.jpg"
            ></img>
            <div>Đảm bảo chất lượng</div>
          </a>
          <a className="quick-link-item text-center py-4">
            <img
              className="mb-3"
              src="https://www.tlu.edu.vn/portals/0/images/front/www.jpg"
            ></img>
            <div>Tạp chí</div>
          </a>
          <a className="quick-link-item text-center py-4">
            <img
              className="mb-3"
              src="https://www.tlu.edu.vn/portals/0/images/front/email.jpg"
            ></img>
            <div>TLU Mail</div>
          </a>
          <a className="quick-link-item text-center py-4">
            <img
              className="mb-3"
              src="https://www.tlu.edu.vn/portals/0/images/front/lichcongtac.jpg"
            ></img>
            <div>Lịch công tác</div>
          </a>
          <a className="quick-link-item text-center py-4">
            <img
              className="mb-3"
              src="https://www.tlu.edu.vn/portals/0/images/front/user.jpg"
            ></img>
            <div>Đăng ký học</div>
          </a>
        </div>
        {/* home section box */}
        <div className="sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between gap-4 grid grid-cols-[500px_minmax(0,1fr)_250px]">
          <div className="home-top-post">
            <VerticalPost />
          </div>
          <div className="news-and-noti">
            <div className="tab-titles">
              <div>Tin tức</div>
              <div>Thông báo</div>
            </div>
          </div>
          <div className="university-fields">
            <div className="block-title">Phân hiệu - khoa</div>
            <div className="list-fields">
              <ul>
                <li>
                  <div className="text">
                    <a href="http://tlus.edu.vn/" target="_blank">
                      Phân hiệu Đại học Thủy lợi
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://ce.tlu.edu.vn/" target="_blank">
                      Khoa Công trình
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://kttnn.tlu.edu.vn/" target="_blank">
                      Khoa Kỹ thuật tài nguyên nước
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://cse.tlu.edu.vn/" target="_blank">
                      Khoa Công nghệ thông tin
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://khoacokhi.tlu.edu.vn/" target="_blank">
                      Khoa Cơ khí
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://ee.tlu.edu.vn/" target="_blank">
                      Khoa Điện - Điện tử
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://fem.tlu.edu.vn/" target="_blank">
                      Khoa Kinh tế và Quản lý
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a
                      href="https://ketoankinhdoanh.tlu.edu.vn/"
                      target="_blank"
                    >
                      Khoa Kế toán và Kinh doanh
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://env.tlu.edu.vn/" target="_blank">
                      Khoa Hóa và Môi trường
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://sie.tlu.edu.vn/" target="_blank">
                      Trung tâm Đào tạo quốc tế
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a href="https://pl.tlu.edu.vn/" target="_blank">
                      Khoa Luật và Lý luận chính trị
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a
                      href="http://vienmientrung.edu.vn/"
                      target="_blank"
                      title="Viện Đào tạo và Khoa học ứng dụng Miền Trung"
                    >
                      Viện ĐT và KHƯD Miền Trung
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a
                      href="https://ce.tlu.edu.vn/vien-ky-thuat-cong-trinh"
                      target="_blank"
                      title="Viện Kỹ thuật công trình"
                    >
                      Viện Kỹ thuật công trình
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a
                      href="http://lib.tlu.edu.vn/"
                      target="_blank"
                      title="Thư viện ĐH Thủy Lợi"
                    >
                      Thư viện ĐH Thủy Lợi
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a
                      href="https://www.iartep.com/"
                      target="_blank"
                      title="Viện Viện NCƯD và Hợp tác DN"
                    >
                      Viện Viện NCƯD và Hợp tác DN
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <a
                      href="http://cra.tlu.edu.vn/"
                      target="_blank"
                      title="Trung tâm khoa học và triển khai kỹ thuật Thủy lợi"
                    >
                      TTKH và triển khai KTTL
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* home section box */}
        <div className="sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between gap-4"></div>
        {/* home section box */}
        <div className="sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between gap-4"></div>
        {/* home section box */}
        <div className="sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between gap-4"></div>
        {/* home section box */}
        <div className="sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between gap-4"></div>
        {/* home section box */}
        <div className="sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between gap-4"></div>
      </div>
      <PageFooter />
    </>
  );
}

export default App;
