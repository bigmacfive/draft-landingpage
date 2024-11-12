import { inject, track } from "@vercel/analytics"

// Vercel Analytics 초기화
inject();

// Mixpanel 초기화
mixpanel.init('7ba52dd28b07d60d2d6ad6bb3cdad23c', {
    debug: true,  // 개발 중에는 true로 설정하고, 프로덕션에서는 false로 변경하세요
    track_pageview: true  // 자동으로 페이지뷰 추적
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.demo-video');
    const playBtn = document.querySelector('.play-btn');
    const pauseBtn = document.querySelector('.pause-btn');

    playBtn.addEventListener('click', () => {
        video.play();
    });

    pauseBtn.addEventListener('click', () => {
        video.pause();
    });

    // 언어 설정 가져오기
    const currentLang = document.documentElement.lang || 'ko';

    // 페이지 로드 시 기본 사용자 속성 설정
    mixpanel.register({
        'language': currentLang,
        'platform': 'web'
    });

    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', async (e) => {
        // Vercel Analytics 이벤트
        track('download_button_clicked');
        
        // Mixpanel 상세 이벤트
        mixpanel.track('Download Button Clicked', {
            'language': currentLang,
            'timestamp': new Date().toISOString(),
            'button_text': downloadBtn.textContent.trim()
        });
    });

    // 기능 섹션 클릭 추적
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.addEventListener('click', () => {
            const featureTitle = feature.querySelector('h3').textContent;
            mixpanel.track('Feature Section Clicked', {
                'feature_index': index,
                'feature_title': featureTitle,
                'language': currentLang
            });
        });
    });
});