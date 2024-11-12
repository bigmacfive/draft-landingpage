document.querySelector('.download-btn')?.addEventListener('click', () => {
    mixpanel.track('Download Clicked', {
        'language': document.documentElement.lang || 'ko',
        'timestamp': new Date().toISOString(),
        'url': window.location.href,
        'button_text': document.querySelector('.download-btn').textContent.trim()
    }, function(response) {
        console.log('Mixpanel event tracked:', response);
    });
});