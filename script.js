import { inject } from "@vercel/analytics";

// Vercel Analytics 초기화
inject();

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.demo-video');
    const playBtn = document.querySelector('.play-btn');
    const pauseBtn = document.querySelector('.pause-btn');

    // 비디오 컨트롤
    playBtn?.addEventListener('click', () => {
        video.play();
    });

    pauseBtn?.addEventListener('click', () => {
        video.pause();
    });

    // 언어 설정 가져오기
    const currentLang = document.documentElement.lang || 'ko';

    // Mixpanel 기본 사용자 속성 설정
    mixpanel.register({
        'language': currentLang,
        'platform': 'web'
    });

    // 다운로드 버튼 이벤트
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn?.addEventListener('click', async (e) => {
        // Mixpanel 이벤트 트래킹
        mixpanel.track('Download Button Clicked', {
            'language': currentLang,
            'timestamp': new Date().toISOString(),
            'button_text': downloadBtn.textContent.trim()
        });
    });

    // 기능 섹션 클릭 추적
    const features = document.querySelectorAll('.feature');
});

