<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draft - AI-powered Todo List</title>
    <link rel="icon" type="image/x-icon" href="resources/favicon.ico">
    <link rel="stylesheet" href="styles.css">
    <script src="translations.js"></script>
    <meta property="og:title" content="Draft-AI-powered Todo List">
    <meta property="og:description" content="AI helps you manage your todo list's priority, calendar, and importance.">
    <meta property="og:image" content="https://github.com/bigmacfive/draft-landingpage/blob/main/resources/preview.png?raw=true">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Draft-AI-powered Todo List">
    <script type="text/javascript">
        (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
        for(h=0;h<l.length;h++)c(e,l[h]);a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);

        // Mixpanel 초기화
        mixpanel.init('7ba52dd28b07d60d2d6ad6bb3cdad23c', {
            debug: true,
            track_pageview: true
        });

        // 페이지뷰 이벤트
        mixpanel.track('Page View', {
            'page': window.location.pathname,
            'language': document.documentElement.lang || 'ko',
            'referrer': document.referrer
        });
    </script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        mixpanel.init('7ba52dd28b07d60d2d6ad6bb3cdad23c', {
            debug: true,
            track_pageview: true
        });

        // 페이지 로드 시 이벤트 발생
        mixpanel.track('Page View', {
            'language': document.documentElement.lang || 'ko',
            'platform': 'web',
            'referrer': document.referrer,
            'timestamp': new Date().toISOString()
        });
    });
</script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const userLang = navigator.language || navigator.userLanguage;
        const lang = userLang.startsWith('ko') ? 'ko' : 'en';
        
        // 타이틀 변경
        document.title = translations[lang].title;
        
        // 다운로드 버튼 텍스트 변경
        const downloadBtn = document.querySelector('.download-btn');
        downloadBtn.innerHTML = `
            <img src="${translations[lang].downloadBtn.icon}" alt="Apple Logo" class="apple-logo">
            <span>${translations[lang].downloadBtn.text}</span>
        `;
        
        // 기능 설명 변경
        const features = document.querySelectorAll('.feature');
        features[0].querySelector('h3').textContent = translations[lang].features.aiPriority.title;
        features[0].querySelector('p').textContent = translations[lang].features.aiPriority.description;
        
        features[1].querySelector('h3').textContent = translations[lang].features.smartCalendar.title;
        features[1].querySelector('p').textContent = translations[lang].features.smartCalendar.description;
        
        features[2].querySelector('h3').textContent = translations[lang].features.autoClassification.title;
        features[2].querySelector('p').textContent = translations[lang].features.autoClassification.description;
    });
</script>
</head>
<body>
    <div class="ai-background"></div>
    <div class="page-wrapper">
        <div class="container">
            <div class="title-group animate-float">
                <img src="resources/app_logo.png" alt="Draft Logo" class="logo">
                <h1>Draft</h1>
            </div>
            
            <div class="hero">
                <div class="video-section">
                    <div class="hero-video">
                        <video class="demo-video" autoplay loop muted playsinline>
                            <source src="resources/video.webm" type="video/webm">
                        </video>
                    </div>
                    <a href="https://github.com/bigmacfive/draft-landingpage/raw/refs/heads/main/draft_v2.dmg" class="download-btn" download="draft_v2.dmg">
                        <img src="https://cdn-icons-png.flaticon.com/512/2/2235.png" alt="Apple Logo" class="apple-logo">
                        <span>Download demo for Mac</span>
                    </a>
                </div>
            </div>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-content">
                        <div class="feature-icon">
                            <div class="ai-circle"></div>
                            <div class="emoji">🤖</div>
                        </div>
                        <h3>AI Priority Optimization</h3>
                        <p>AI-based task analysis and automatic priority setting</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="feature-content">
                        <div class="feature-icon">
                            <div class="ai-circle"></div>
                            <div class="emoji">📅</div>
                        </div>
                        <h3>Smart Calendar</h3>
                        <p>AI-suggested optimal schedule management</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="feature-content">
                        <div class="feature-icon">
                            <div class="ai-circle"></div>
                            <div class="emoji">⚡</div>
                        </div>
                        <h3>Auto Importance Classification</h3>
                        <p>NLP-based smart category assignment</p>
                    </div>
                </div>
            </div>
        </div>


        <footer class="footer">
            <div class="footer-content">
                <div class="footer-links">
                    <a href="mailto:manzi@kakao.com" class="footer-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                        </svg>
                        manzi@kakao.com
                    </a>
                    <a href="https://instagram.com/bicmacfive" target="_blank" class="footer-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                        </svg>
                        @bicmacfive
                    </a>
                </div>
                <div class="copyright">
                    © 2024 manzi. All rights reserved.
                </div>
            </div>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const video = document.querySelector('.demo-video');
            const playBtn = document.querySelector('.play-btn');
            const pauseBtn = document.querySelector('.pause-btn');

            playBtn?.addEventListener('click', () => {
                video.play();
            });

            pauseBtn?.addEventListener('click', () => {
                video.pause();
            });
        });
    </script>

    <script>
        // 페이지 로드 완료 시 이벤트 발생
        mixpanel.track('Page View', {
            'language': document.documentElement.lang || 'ko',
            'platform': 'web'
        });
    </script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 로컬 스토리지에서 조회수 가져오기
            let pageViews = localStorage.getItem('pageViews') ? parseInt(localStorage.getItem('pageViews')) : 0;

            // 조회수 증가
            pageViews += 1;

            // 로컬 스토리지에 업데이트된 조회수 저장
            localStorage.setItem('pageViews', pageViews);

            // 조회수 출력 (콘솔에 출력하거나 원하는 위치에 표시)
            console.log(`이 페이지의 조회수: ${pageViews}`);
        });
    </script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 고유 방문자 ID 생성 (UUID 형식)
            const generateUUID = () => {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                    const r = Math.random() * 16 | 0;
                    const v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            };

            // 로컬 스토리지에서 방문자 ID 가져오기
            let visitorId = localStorage.getItem('visitorId');

            // 방문자 ID가 없으면 새로 생성
            if (!visitorId) {
                visitorId = generateUUID();
                localStorage.setItem('visitorId', visitorId);
            }

            // 로컬 스토리지에서 유니크 비지터 수 가져오기
            let uniqueVisitors = localStorage.getItem('uniqueVisitors') ? JSON.parse(localStorage.getItem('uniqueVisitors')) : [];

            // 유니크 비지터 목록에 현재 방문자 ID가 없으면 추가
            if (!uniqueVisitors.includes(visitorId)) {
                uniqueVisitors.push(visitorId);
                localStorage.setItem('uniqueVisitors', JSON.stringify(uniqueVisitors));
            }

            // 유니크 비지터 수 출력
            console.log(`uv: ${uniqueVisitors.length}`);
        });
    </script>
</body>
</html>
