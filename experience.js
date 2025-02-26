document.addEventListener('DOMContentLoaded', function() {
    const qrCards = document.querySelectorAll('.qr-card');
    
    // 为每个卡片添加事件监听器
    qrCards.forEach(card => {
        const showQrBtn = card.querySelector('.show-qr-btn');
        const hideQrBtn = card.querySelector('.hide-qr-btn');
        
        // 显示二维码
        showQrBtn.addEventListener('click', function() {
            card.classList.add('flipped');
        });
        
        // 隐藏二维码
        hideQrBtn.addEventListener('click', function() {
            card.classList.remove('flipped');
        });
    });
    
    // 添加键盘支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            qrCards.forEach(card => {
                if (card.classList.contains('flipped')) {
                    card.classList.remove('flipped');
                }
            });
        }
    });
    
    // 表单提交处理
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // 这里可以添加表单验证和提交逻辑
            alert('感谢您的留言！我们会尽快回复。');
            this.reset();
        });
    }
});