document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // draft 인스턴스 사용
            if (window.mixpanel && window.mixpanel.draft) {
                mixpanel.draft.track('Download Button Clicked', {
                    'language': document.documentElement.lang || 'ko',
                    'timestamp': new Date().toISOString()
                });
            }
        });
    }
});