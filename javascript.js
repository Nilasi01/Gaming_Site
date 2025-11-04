// Chọn tất cả các phần tử dropdown của nav item
const navItemDropDownList = document.querySelectorAll('.nav-item-dropdown');

// Chọn các button mở/đóng navbar và div chứa nội dung navbar
const navTogglerOpen = document.querySelector('.navbar-toggler-open');
const navTogglerClose = document.querySelector('.navbar-toggler-close');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');

// Lắng nghe sự kiện click cho từng dropdown
navItemDropDownList.forEach((navItem) => {
    navItem.addEventListener('click', () => {

        // Toggle (bật/tắt) class 'show-dropdown' cho phần tử tiếp theo (ul.nav-item-dropdown-content)
        navItem.nextElementSibling.classList.toggle('show-dropdown');

        // Thay đổi icon mũi tên xuống/lên
        // Giả định icon là phần tử con đầu tiên của navItem (là span.nav-item-dropdown)
        const iconElement = navItem.firstElementChild;

        if (iconElement.className === 'fas fa-chevron-down') {
            iconElement.className = 'fas fa-chevron-up';
        } else if (iconElement.className === 'fas fa-chevron-up') {
            iconElement.className = 'fas fa-chevron-down';
        }
    });
});

// Mở Navbar (Mobile View)
navTogglerOpen.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('show-navbar');
});

// Đóng Navbar (Mobile View)
navTogglerClose.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('show-navbar');
});

// Animation and Transition Stopper for Window Resize
let resizeTimer;

window.addEventListener('resize', () => {
    // Thêm class để dừng animation/transition trong lúc resize
    document.body.classList.add('resize-animation-stopper');

    // Xóa timer trước đó (nếu có)
    clearTimeout(resizeTimer);

    // Đặt timer mới. Sau 400ms (sau khi người dùng ngừng resize), class sẽ bị xóa
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400); // Đã sửa 499 thành 400 cho chuẩn hơn
});