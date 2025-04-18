const PageHeader = () => {
  return (
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
  );
};

export default PageHeader;
