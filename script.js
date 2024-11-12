document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            mixpanel.track('Download Button Clicked', {
                'language': document.documentElement.lang || 'ko',
                'timestamp': new Date().toISOString()
            });
        });
    }
});