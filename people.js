document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-title');
    const navItems = document.querySelectorAll('.nav-item');

    // 监听滚动事件
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        // 更新导航项的激活状态
        navItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // 平滑滚动
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});