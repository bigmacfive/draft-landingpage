document.addEventListener('DOMContentLoaded', () => {
    // 다운로드 버튼 클릭 트래킹
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (typeof mixpanel !== 'undefined') {
                mixpanel.track('Download Button Clicked', {
                    'language': document.documentElement.lang || 'ko',
                    'timestamp': new Date().toISOString(),
                    'button_text': downloadBtn.textContent.trim()
                });
            }
        });
    }
});