/* ================================================= */
/* 1. THIẾT LẬP CHUNG */
/* ================================================= */
body {
    padding - top: 155px!important;
    margin - bottom: 60px;
    font - family: 'Roboto', sans - serif;
    background - color: #fcfcfc;
}

/* ================================================= */
/* 2. HEADER CỐ ĐỊNH (TƯƠNG THÍCH VỚI FILE JS) */
/* ================================================= */
header {
    position: fixed;
    top: 0;
    width: 100 %;
    z - index: 9999;
    transition: all 0.3s ease;
}

/* Trạng thái mặc định */
.top - header - bar {
    background - color: #002147!important; /* Xanh Navy đậm */
    color: white!important;
    padding: 10px 0;
}

.main - nav - hust {
    background - color: #001a35!important;
}

/* Trạng thái khi cuộn (Class được JS thêm vào) */
header.scrolled - header {
    box - shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

header.scrolled - header.top - header - bar {
    padding: 5px 0; /* Thu nhỏ header một chút khi cuộn cho chuyên nghiệp */
}

/* Chữ Menu */
.main - nav - hust.nav - link {
    color: #ffffff!important;
    font - weight: 700;
    text - transform: uppercase;
}

.main - nav - hust.nav - link:hover {
    color: #f1c40f!important;
}

/* Dropdown */
.main - nav - hust.dropdown - menu {
    background - color: #ffffff!important;
    border: none;
    box - shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border - radius: 0 0 8px 8px;
}

.main - nav - hust.dropdown - item {
    color: #002147!important;
    font - weight: 600;
    padding: 10px 20px;
}

.main - nav - hust.dropdown - item:hover {
    background - color: #f8f9fa;
    color: #0d6efd!important;
}

/* ================================================= */
/* 3. SIDEBAR CHUYÊN NGHIỆP (MỚI) */
/* ================================================= */

/* Giúp Sidebar dính chắc chắn */
.col - lg - 4 > div: first - child {
    position: sticky;
    top: 170px; /* Khớp với chiều cao padding body */
}

.sidebar - menu {
    background - color: #ffffff!important;
    border: 1px solid #dee2e6!important;
    border - radius: 12px!important; /* Bo góc hiện đại */
    overflow: hidden;
    box - shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.sidebar - title {
    background - color: #002147!important; /* Đổi màu tiêu đề sang Navy cho chuyên nghiệp */
    color: #ffffff!important;
    padding: 18px 20px!important;
    font - weight: 700!important;
    text - transform: uppercase;
    margin: 0!important;
    font - size: 1.1rem;
}

.sidebar - link {
    display: flex!important;
    justify - content: space - between;
    align - items: center;
    padding: 15px 20px!important;
    color: #333!important;
    text - decoration: none!important; /* Bỏ gạch chân */
    border - bottom: 1px solid #f1f1f1!important;
    transition: all 0.3s ease!important;
}

.sidebar - link: last - child {
    border - bottom: none;
}

/* Mũi tên chỉ dẫn */
.sidebar - link::after {
    content: "\f105";
    font - family: "Font Awesome 6 Free";
    font - weight: 900;
    opacity: 0.3;
}

.sidebar - link:hover {
    background - color: #f0f7ff!important;
    color: #0d6efd!important;
    padding - left: 28px!important;
}

.sidebar - link: hover::after {
    opacity: 1;
    transform: translateX(5px);
}

/* MỤC ACTIVE - ĐÚNG MÀU XANH BLUE SÁNG */
.sidebar - link.active {
    background - color: #0d6efd!important;
    color: #ffffff!important;
    font - weight: 700;
}

.sidebar - link.active::after {
    color: white;
    opacity: 1;
}

/* Khối Quảng cáo/Thông tin nhanh */
.sidebar - ad {
    background: linear - gradient(135deg, #0d6efd, #002147)!important; /* Màu gradient sang trọng */
    color: white!important;
    border - radius: 12px!important;
    padding: 25px!important;
    margin - top: 25px;
    border: none!important;
}

.sidebar - ad h6 {
    color: #fff!important;
    font - weight: 800;
    margin - bottom: 15px;
    border - bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding - bottom: 10px;
}