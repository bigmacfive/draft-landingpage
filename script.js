document.addEventListener('DOMContentLoaded', () => {
    try {
        // 페이지 로드 시 이벤트 트래킹
        mixpanel.track('Page View', {
            'language': document.documentElement.lang || 'ko',
            'platform': 'web',
            'referrer': document.referrer
        });

        // 다운로드 버튼 클릭 트래킹
        const downloadBtn = document.querySelector('.download-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                mixpanel.track('Download Button Clicked', {
                    'language': document.documentElement.lang || 'ko',
                    'timestamp': new Date().toISOString()
                });
            });
        }

    } catch (error) {
        console.error('Mixpanel tracking error:', error);
    }
});