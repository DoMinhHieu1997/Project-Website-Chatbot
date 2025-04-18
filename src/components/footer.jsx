const PageFooter = () => {
  return(
    <div className="footer">
      <div className="footer-top bg-blue-900">
        <div className="footer-top-container sm:w-6xl sm:mx-auto sm:px-3 py-3 flex justify-between items-center">
          <div className="footer-copyright text-white font-semibold font-sans text-2xl uppercase">
            © 2025 TRƯỜNG ĐẠI HỌC THỦY LỢI
          </div>
          <div className="footer-social flex gap-4">
            <div className="social-facebook">
              <a
                href="https://www.facebook.com/daihocthuyloi1959/?fref=ts"
                target="_blank"
              >
                <img
                  className="w-[40px]"
                  src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/fb-icon.png"
                />
              </a>
            </div>
            <div className="social-youtube">
              <a
                href="https://www.youtube.com/user/daihocthuyloi"
                target="_blank"
              >
                <img
                  className="w-[40px]"
                  src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/ytb-icon.png"
                />
              </a>
            </div>
            <div className="social-twitter">
              <a href="https://twitter.com/Daihocthuyloihn" target="_blank">
                <img
                  className="w-[40px]"
                  src="https://www.tlu.edu.vn/Portals/_default/skins/tluvie/images/front/twitter-icon.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle bg-gray-200">
        <div className="footer-middle-container sm:w-6xl sm:mx-auto sm:px-3 py-5 flex justify-between items-center">
          <div className="address-and-contact-info font-sans font-semibold text-xl text-start">
            <div className="uppercase">Trường đại học thủy lợi</div>
            <div>Địa chỉ: 175 Tây Sơn, Đống Đa, Hà Nội</div>
            <div>Điện thoại: (024) 38522201 - Fax: (024) 35633351</div>
            <div>Email: phonghcth@tlu.edu.vn</div>
          </div>
          <div className="footer-menu">
            <ul className="grid grid-cols-2 gap-x-8 font-sans font-semibold text-xl text-center">
              <li>
                <a href="">Giới thiệu</a>
              </li>
              <li>
                <a href="">Tin tức & thông báo</a>
              </li>
              <li>
                <a href="">Tuyển sinh</a>
              </li>
              <li>
                <a href="">Đào tạo</a>
              </li>
              <li>
                <a href="">Nghiên cứu</a>
              </li>
              <li>
                <a href="">Đối ngoại</a>
              </li>
              <li>
                <a href="">Văn bản</a>
              </li>
              <li>
                <a href="">Sinh viên</a>
              </li>
              <li>
                <a href="">Liên hệ</a>
              </li>
              <li>
                <a href="">TLU Tour</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
