document.addEventListener('DOMContentLoaded', () => {
    // 다운로드 버튼 클릭 이벤트
    document.querySelector('.download-btn')?.addEventListener('click', () => {
        window.mixpanel?.track('Download Button Clicked', {
            'language': document.documentElement.lang || 'ko',
            'timestamp': new Date().toISOString()
        });
    });
});