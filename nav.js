document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面的文件名
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 移除所有活动状态
    navLinks.forEach(link => link.classList.remove('active'));
    
    // 为当前页面的链接添加活动状态
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}); 