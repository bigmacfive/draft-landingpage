import { inject } from "@vercel/analytics"

inject({
    mode: dev ? 'development' : 'production',
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
});

document.querySelector('.download-btn').addEventListener('click', async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('downloads/draft_v2.dmg');
        const blob = await response.blob();
        
        // 다운로드 링크 생성
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'draft_v2.dmg';
        
        // 다운로드 트리거
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // URL 해제
        window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error('Download failed:', error);
        alert('다운로드에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
});