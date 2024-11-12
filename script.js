document.addEventListener('DOMContentLoaded', () => {
    // 콘솔에 디버그 메시지 추가
    console.log('Initializing Mixpanel...');
    
    // Mixpanel 초기화
    mixpanel.init('7ba52dd28b07d60d2d6ad6bb3cdad23c', {
        debug: true,
        track_pageview: true
    });

    // 테스트 이벤트 발송
    mixpanel.track('Test Event', {
        'test': 'value'
    });

    console.log('Mixpanel initialized');
});