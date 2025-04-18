const VerticalPost = () => {
    return (
        <div className="verticalPost">
            <div className="verticalPost_img">
                <a href="/" className="bg-grey-100">
                    <img className="aspect-3/2 object-cover" src="https://ts.tlu.edu.vn/Portals/4/P3/anhtuyensinh5.jpg"></img>
                </a>
            </div>
            <div className="verticalPost_title mt-3">
                <a href="/" className="text-gray-800 text-xl font-semibold font-sans">
                    Trường Đại học Thủy lợi tham dự Hội nghị toàn quốc quán triệt, triển khai Nghị quyết Hội nghị Trung ương 11, khóa XIII
                </a>
            </div>
            <div className="verticalPost_description mt-3 text-gray-600">
            Sáng ngày 11/4/2025, tại Phòng 123/A2 Trường Đại học Thủy lợi đã diễn ra buổi họp chuyên môn và bốc thăm xếp lịch thi đấu Giải Quần vợt và Pickleball...
            </div>
        </div>
    )
}

export default VerticalPost;