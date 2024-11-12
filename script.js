document.querySelector('.download-btn')?.addEventListener('click', () => {
    mixpanel.draft.track('Download Button Clicked', {
        'language': document.documentElement.lang || 'ko',
        'timestamp': new Date().toISOString()
    });
});