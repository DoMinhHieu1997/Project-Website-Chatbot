import { useState } from "react";
import "./App.css";
import "./app.scss";
import HomeCarousel from "./components/homecarousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header bg-white">
        {/* header top */}
        <div className="header-content ">
          <div className="header-container sm:w-6xl sm:flex mx-auto px-0 sm:px-3 py-3 sm:py-10 justify-between">
            <div className="header-content--left px-3 sm:px-0">
              <img
                className="university-logo w-max sm:w-auto"
                src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/logo.png"
              ></img>
            </div>
            <div className="header-content--right w-screen sm:w-auto flex flex-col justify-center">
              <div className="flex items-center bg-blue-300 sm:bg-white mt-3 sm:mt-0 py-3 sm:py-0 justify-center sm:justify-end gap-4 sm:mb-3">
                <div className="website-languages flex justify-end gap-2 items-center">
                  <div className="vietnamese">
                    <a href="https://www.tlu.edu.vn/">
                      <img
                        src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/vi.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="english">
                    <a href="http://en.tlu.edu.vn/">
                      <img
                        src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/en.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <button className="font-sans text-white sm:text-gray-800 font-semibold">
                  Đăng nhập
                </button>
                <button className="font-sans text-white sm:text-gray-800 font-semibold">
                  Đăng ký
                </button>
              </div>
              <div className="flex w-full sm:w-auto justify-end gap-2 items-center py-3 sm:py-0 bg-blue-900 sm:bg-white">
                <form action="/" className="w-screen sm:w-auto px-4 sm:px-0">
                  <div className="sm:inline-flex flex">
                    <input
                      className="py-1 px-3 rounded-s-sm border-gray-300 border w-full sm:w-auto text-white sm:text-gray-800"
                      placeholder="Tìm kiếm..."
                    ></input>
                    <button
                      type="submit"
                      className="px-3 py-1 rounded-e-sm bg-gray-300 flex justify-center flex-col"
                    >
                      <img
                        className="search-icon"
                        src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/ico-search.png"
                      ></img>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* header nav */}
        <div className="header-nav bg-blue-900">
          <div className="header-nav--container sm:w-6xl sm:flex mx-auto px-0 py-4 mx-auto">
            <ul className="font-sans font-semibold flex justify-center gap-5 text-white w-full">
              <li>
                <a className="nav-item nav-home">
                  <img
                    className="w-[24px] h-[24px]"
                    src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/home.png"
                  ></img>
                </a>
              </li>
              <li>
                <a className="nav-item nav-home">Giới thiệu</a>
              </li>
              <li>
                <a className="nav-item nav-home">Tin tức & Thông báo</a>
              </li>
              <li>
                <a className="nav-item nav-home">Tuyển sinh</a>
              </li>
              <li>
                <a className="nav-item nav-home">Đào tạo</a>
              </li>
              <li>
                <a className="nav-item nav-home">Nghiên cứu</a>
              </li>
              <li>
                <a className="nav-item nav-home">Đối ngoại</a>
              </li>
              <li>
                <a className="nav-item nav-home">Văn bản</a>
              </li>
              <li>
                <a className="nav-item nav-home">Sinh viên</a>
              </li>
              <li>
                <a className="nav-item nav-home">Liên hệ</a>
              </li>
              <li>
                <a className="nav-item nav-home">Tlu Tour</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
      </div>
      <div className="footer">
        <div className="footer-top bg-blue-900">
          <div className="footer-top-container sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between items-center">
            <div className="footer-copyright text-white font-semibold font-sans text-2xl">
              © 2025 TRƯỜNG ĐẠI HỌC THỦY LỢI
            </div>
            <div className="footer-social flex gap-4">
              <div className="social-facebook">
                <a
                  href="https://www.facebook.com/daihocthuyloi1959/?fref=ts"
                  target="_blank"
                >
                  <img className='w-[40px]' src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/fb-icon.png" />
                </a>
              </div>
              <div className="social-youtube">
                <a
                  href="https://www.youtube.com/user/daihocthuyloi"
                  target="_blank"
                >
                  <img className='w-[40px]' src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/ytb-icon.png" />
                </a>
              </div>
              <div className="social-twitter">
                <a href="https://twitter.com/Daihocthuyloihn" target="_blank">
                  <img className='w-[40px]' src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/twitter-icon.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle bg-gray-200">
          <div className="footer-middle-container sm:w-6xl sm:mx-auto sm:px-3 py-5 flex justify-between items-center">
            <div className="address-and-contact-info font-sans font-semibold text-xl text-start">
              <div>Trường đại học thủy lợi</div>
              <div>Địa chỉ: 175 Tây Sơn, Đống Đa, Hà Nội</div>
              <div>Điện thoại: (024) 38522201 - Fax: (024) 35633351</div>
              <div>Email: phonghcth@tlu.edu.vn</div>
            </div>
            <div className="footer-menu">
              <ul className="grid grid-cols-2 gap-x-8 font-sans font-semibold text-xl text-center">
                <li><a href="">Giới thiệu</a></li>
                <li><a href="">Tin tức & thông báo</a></li>
                <li><a href="">Tuyển sinh</a></li>
                <li><a href="">Đào tạo</a></li>
                <li><a href="">Nghiên cứu</a></li>
                <li><a href="">Đối ngoại</a></li>
                <li><a href="">Văn bản</a></li>
                <li><a href="">Sinh viên</a></li>
                <li><a href="">Liên hệ</a></li>
                <li><a href="">TLU Tour</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
