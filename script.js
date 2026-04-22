// SnapSum - Main JavaScript

// ============================================
// i18n - Multi-language Support
// ============================================
const translations = {
  'en': {
    nav: {
      features: 'Features',
      how: 'How it works',
      languages: 'Languages',
      pricing: 'Pricing',
      download: 'Download'
    },
    hero: {
      badge: 'Now available for Chrome, Edge & Desktop',
      title1: 'Screen Recording',
      title2: 'with AI Subtitles',
      subtitle: 'Record your screen. Get automatic captions. Translate to 12 languages. Burn subtitles into video. All in one click.',
      download: 'Download Free',
      seeHow: 'See how it works →',
      languages: 'Languages',
      powered: 'Powered',
      free: 'Free 3 recordings/month'
    },
    features: {
      title: 'Why SnapSum?',
      subtitle: 'One tool. No more switching between recording, transcription, and subtitle software.',
      record: {
        title: 'Screen Recording',
        desc: 'Record your screen, browser tab, or application window with system audio and microphone.'
      },
      transcribe: {
        title: 'AI Transcription',
        desc: 'Automatic speech-to-text powered by advanced AI. Support for 12 languages.'
      },
      subtitle: {
        title: 'Auto Subtitles',
        desc: 'Generate perfectly timed subtitles automatically. Edit and adjust as needed.'
      },
      translate: {
        title: 'Translation',
        desc: 'Translate subtitles to any of 12 supported languages with one click.'
      },
      burn: {
        title: 'Burn Captions',
        desc: 'Burn subtitles directly into your video. Export and share anywhere.'
      },
      annotation: {
        title: 'Annotation Tools',
        desc: 'Draw, highlight, and annotate while recording. Perfect for tutorials.'
      }
    },
    how: {
      title: 'How it works',
      subtitle: '4 steps. Done.',
      step1: { title: 'Record', desc: 'Click the extension icon and start recording your screen.' },
      step2: { title: 'Transcribe', desc: 'AI automatically converts speech to text with timestamps.' },
      step3: { title: 'Translate', desc: 'Optionally translate subtitles to your preferred language.' },
      step4: { title: 'Export', desc: 'Burn subtitles into video or export subtitle files.' }
    },
    languages: {
      title: '12 Languages Supported',
      subtitle: 'Transcribe and translate in your language'
    },
    cta: {
      title: 'Ready to create better videos?',
      subtitle: 'Join thousands of creators who save hours on manual subtitling.',
      download: 'Download Free',
      noCard: 'No credit card required'
    },
    footer: {
      rights: 'All rights reserved',
      terms: 'Terms',
      privacy: 'Privacy',
      refund: 'Refund',
      contact: 'Contact'
    }
  },
  'zh-CN': {
    nav: {
      features: '功能',
      how: '使用方法',
      languages: '语言',
      pricing: '定价',
      download: '下载'
    },
    hero: {
      badge: '支持 Chrome、Edge 和桌面版',
      title1: '屏幕录制',
      title2: 'AI 自动字幕',
      subtitle: '录制屏幕，自动生成字幕，翻译成 12 种语言，烧录字幕到视频。一键完成。',
      download: '免费下载',
      seeHow: '查看使用方法 →',
      languages: '语言',
      powered: 'AI 驱动',
      free: '免费每月 3 次录制'
    },
    features: {
      title: '为什么选择 SnapSum？',
      subtitle: '一个工具搞定所有，不再需要在录制、转录、字幕软件之间切换。',
      record: { title: '屏幕录制', desc: '录制屏幕、浏览器标签或应用程序窗口，支持系统音频和麦克风。' },
      transcribe: { title: 'AI 转录', desc: '先进的 AI 自动语音转文字，支持 12 种语言。' },
      subtitle: { title: '自动字幕', desc: '自动生成完美同步的字幕，可随时编辑调整。' },
      translate: { title: '翻译', desc: '一键翻译字幕到任意 12 种支持语言。' },
      burn: { title: '烧录字幕', desc: '将字幕直接烧录到视频中，导出后可分享到任何平台。' },
      annotation: { title: '标注工具', desc: '录制时可绘制、高亮、标注。非常适合教程制作。' }
    },
    how: {
      title: '使用方法',
      subtitle: '4 步完成。',
      step1: { title: '录制', desc: '点击扩展图标，开始录制屏幕。' },
      step2: { title: '转录', desc: 'AI 自动将语音转为带时间戳的文字。' },
      step3: { title: '翻译', desc: '可选：将字幕翻译到您偏好的语言。' },
      step4: { title: '导出', desc: '将字幕烧录到视频，或导出字幕文件。' }
    },
    languages: {
      title: '支持 12 种语言',
      subtitle: '用您的语言转录和翻译'
    },
    cta: {
      title: '准备好制作更好的视频了吗？',
      subtitle: '加入数千名创作者，节省数小时的手动字幕制作时间。',
      download: '免费下载',
      noCard: '无需信用卡'
    },
    footer: {
      rights: '版权所有',
      terms: '服务条款',
      privacy: '隐私政策',
      refund: '退款政策',
      contact: '联系我们'
    }
  },
  'zh-TW': {
    nav: { features: '功能', how: '使用方法', languages: '語言', pricing: '定價', download: '下載' },
    hero: {
      badge: '支援 Chrome、Edge 和桌面版',
      title1: '螢幕錄製',
      title2: 'AI 自動字幕',
      subtitle: '錄製螢幕，自動生成字幕，翻譯成 12 種語言，燒錄字幕到影片。一鍵完成。',
      download: '免費下載', seeHow: '查看使用方法 →', languages: '語言', powered: 'AI 驅動', free: '免費每月 3 次錄製'
    },
    features: {
      title: '為什麼選擇 SnapSum？',
      subtitle: '一個工具搞定所有，不再需要在錄製、轉錄、字幕軟體之間切換。',
      record: { title: '螢幕錄製', desc: '錄製螢幕、瀏覽器分頁或應用程式視窗，支援系統音訊和麥克風。' },
      transcribe: { title: 'AI 轉錄', desc: '先進的 AI 自動語音轉文字，支援 12 種語言。' },
      subtitle: { title: '自動字幕', desc: '自動生成完美同步的字幕，可隨時編輯調整。' },
      translate: { title: '翻譯', desc: '一鍵翻譯字幕到任意 12 種支援語言。' },
      burn: { title: '燒錄字幕', desc: '將字幕直接燒錄到影片中，匯出後可分享到任何平台。' },
      annotation: { title: '標註工具', desc: '錄製時可繪製、高亮、標註。非常適合教學製作。' }
    },
    how: {
      title: '使用方法', subtitle: '4 步完成。',
      step1: { title: '錄製', desc: '點擊擴充功能圖示，開始錄製螢幕。' },
      step2: { title: '轉錄', desc: 'AI 自動將語音轉為帶時間戳的文字。' },
      step3: { title: '翻譯', desc: '可選：將字幕翻譯到您偏好的語言。' },
      step4: { title: '匯出', desc: '將字幕燒錄到影片，或匯出字幕檔案。' }
    },
    languages: { title: '支援 12 種語言', subtitle: '用您的語言轉錄和翻譯' },
    cta: { title: '準備好製作更好的影片了嗎？', subtitle: '加入數千名創作者，節省數小時的手動字幕製作時間。', download: '免費下載', noCard: '無需信用卡' },
    footer: { rights: '版權所有', terms: '服務條款', privacy: '隱私政策', refund: '退款政策', contact: '聯絡我們' }
  },
  'ja': {
    nav: { features: '機能', how: '使い方', languages: '言語', pricing: '料金', download: 'ダウンロード' },
    hero: {
      badge: 'Chrome、Edge、デスクトップ版対応',
      title1: '画面録画',
      title2: 'AI自動字幕',
      subtitle: '画面を録画し、自動で字幕を生成し、12言語に翻訳し、字幕を動画に焼き込む。ワンクリックで完了。',
      download: '無料ダウンロード', seeHow: '使い方を見る →', languages: '言語', powered: 'AI搭載', free: '月3回無料録画'
    },
    features: {
      title: 'SnapSumが選ばれる理由',
      subtitle: '1つのツールで完結。録画、文字起こし、字幕ソフトの切り替えはもう不要。',
      record: { title: '画面録画', desc: '画面、ブラウザタブ、アプリケーションウィンドウを録画。システム音声とマイク対応。' },
      transcribe: { title: 'AI文字起こし', desc: '高度なAIによる自動音声認識。12言語対応。' },
      subtitle: { title: '自動字幕', desc: '完璧なタイミングで字幕を自動生成。編集と調整が可能。' },
      translate: { title: '翻訳', desc: 'ワンクリックで字幕を12言語に翻訳。' },
      burn: { title: '字幕焼き込み', desc: '字幕を動画に直接焼き込み。エクスポートしてどこでも共有。' },
      annotation: { title: '注釈ツール', desc: '録画中に描画、ハイライト、注釈。チュートリアルに最適。' }
    },
    how: {
      title: '使い方', subtitle: '4ステップで完了。',
      step1: { title: '録画', desc: '拡張機能アイコンをクリックして画面録画を開始。' },
      step2: { title: '文字起こし', desc: 'AIが自動的に音声をタイムスタンプ付きテキストに変換。' },
      step3: { title: '翻訳', desc: 'オプション：字幕をお好みの言語に翻訳。' },
      step4: { title: 'エクスポート', desc: '字幕を動画に焼き込むか、字幕ファイルをエクスポート。' }
    },
    languages: { title: '12言語対応', subtitle: 'お使いの言語で文字起こしと翻訳' },
    cta: { title: 'より良い動画を作る準備はできましたか？', subtitle: '数千人のクリエイターと一緒に、手動字幕作業の時間を節約。', download: '無料ダウンロード', noCard: 'クレジットカード不要' },
    footer: { rights: '全著作権所有', terms: '利用規約', privacy: 'プライバシー', refund: '返金', contact: 'お問い合わせ' }
  },
  'ko': {
    nav: { features: '기능', how: '사용 방법', languages: '언어', pricing: '가격', download: '다운로드' },
    hero: {
      badge: 'Chrome, Edge 및 데스크톱 지원',
      title1: '화면 녹화',
      title2: 'AI 자막',
      subtitle: '화면을 녹화하고, 자동으로 자막을 생성하고, 12개 언어로 번역하고, 자막을 비디오에 굽기. 원클릭으로 완료.',
      download: '무료 다운로드', seeHow: '사용 방법 보기 →', languages: '언어', powered: 'AI 기반', free: '월 3회 무료 녹화'
    },
    features: {
      title: '왜 SnapSum인가요?',
      subtitle: '하나의 도구로 모든 것을 해결. 녹화, 전사, 자막 소프트웨어 전환은 이제 필요 없습니다.',
      record: { title: '화면 녹화', desc: '화면, 브라우저 탭 또는 응용 프로그램 창을 녹화. 시스템 오디오 및 마이크 지원.' },
      transcribe: { title: 'AI 전사', desc: '고급 AI로 자동 음성 인식. 12개 언어 지원.' },
      subtitle: { title: '자동 자막', desc: '완벽한 타이밍으로 자막 자동 생성. 편집 및 조정 가능.' },
      translate: { title: '번역', desc: '원클릭으로 자막을 12개 언어로 번역.' },
      burn: { title: '자막 굽기', desc: '자막을 비디오에 직접 굽기. 내보내서 어디서든 공유.' },
      annotation: { title: '주석 도구', desc: '녹화 중에 그리기, 강조, 주석. 튜토리얼에 완벽.' }
    },
    how: {
      title: '사용 방법', subtitle: '4단계로 완료.',
      step1: { title: '녹화', desc: '확장 프로그램 아이콘을 클릭하고 화면 녹화 시작.' },
      step2: { title: '전사', desc: 'AI가 자동으로 음성을 타임스탬프가 있는 텍스트로 변환.' },
      step3: { title: '번역', desc: '선택 사항: 자막을 선호하는 언어로 번역.' },
      step4: { title: '내보내기', desc: '자막을 비디오에 굽거나 자막 파일 내보내기.' }
    },
    languages: { title: '12개 언어 지원', subtitle: '사용자의 언어로 전사 및 번역' },
    cta: { title: '더 나은 비디오를 만들 준비가 되셨나요?', subtitle: '수천 명의 크리에이터와 함께 수동 자막 작업 시간을 절약.', download: '무료 다운로드', noCard: '신용카드 불필요' },
    footer: { rights: '모든 권리 보유', terms: '이용약관', privacy: '개인정보', refund: '환불', contact: '문의' }
  },
  'fr': {
    nav: { features: 'Fonctionnalités', how: 'Comment ça marche', languages: 'Langues', pricing: 'Tarifs', download: 'Télécharger' },
    hero: {
      badge: 'Disponible sur Chrome, Edge et Desktop',
      title1: 'Enregistrement d\'écran',
      title2: 'Sous-titres IA',
      subtitle: 'Enregistrez votre écran. Obtenez des sous-titres automatiques. Traduisez en 12 langues. Incrustez les sous-titres dans la vidéo. Tout en un clic.',
      download: 'Télécharger gratuitement', seeHow: 'Voir comment ça marche →', languages: 'Langues', powered: 'IA', free: '3 enregistrements/mois gratuits'
    },
    features: {
      title: 'Pourquoi SnapSum ?',
      subtitle: 'Un seul outil. Plus besoin de passer de l\'enregistrement à la transcription et aux logiciels de sous-titrage.',
      record: { title: 'Enregistrement d\'écran', desc: 'Enregistrez votre écran, onglet ou fenêtre d\'application avec l\'audio système et le microphone.' },
      transcribe: { title: 'Transcription IA', desc: 'Reconnaissance vocale automatique avancée. 12 langues supportées.' },
      subtitle: { title: 'Sous-titres automatiques', desc: 'Générez des sous-titres parfaitement synchronisés. Modifiez et ajustez selon vos besoins.' },
      translate: { title: 'Traduction', desc: 'Traduisez les sous-titres en 12 langues en un clic.' },
      burn: { title: 'Incrustation', desc: 'Incrustez les sous-titres directement dans la vidéo. Exportez et partagez partout.' },
      annotation: { title: 'Outils d\'annotation', desc: 'Dessinez, surlignez et annotez pendant l\'enregistrement. Parfait pour les tutoriels.' }
    },
    how: {
      title: 'Comment ça marche', subtitle: '4 étapes. C\'est fait.',
      step1: { title: 'Enregistrer', desc: 'Cliquez sur l\'icône de l\'extension et commencez l\'enregistrement.' },
      step2: { title: 'Transcrire', desc: 'L\'IA convertit automatiquement la parole en texte avec horodatage.' },
      step3: { title: 'Traduire', desc: 'Optionnel : traduisez les sous-titres dans votre langue préférée.' },
      step4: { title: 'Exporter', desc: 'Incrustez les sous-titres dans la vidéo ou exportez les fichiers de sous-titres.' }
    },
    languages: { title: '12 Langues Supportées', subtitle: 'Transcrivez et traduisez dans votre langue' },
    cta: { title: 'Prêt à créer de meilleures vidéos ?', subtitle: 'Rejoignez des milliers de créateurs et économisez des heures de sous-titrage manuel.', download: 'Télécharger gratuitement', noCard: 'Sans carte de crédit' },
    footer: { rights: 'Tous droits réservés', terms: 'Conditions', privacy: 'Confidentialité', refund: 'Remboursement', contact: 'Contact' }
  },
  'de': {
    nav: { features: 'Funktionen', how: 'So funktioniert\'s', languages: 'Sprachen', pricing: 'Preise', download: 'Herunterladen' },
    hero: {
      badge: 'Verfügbar für Chrome, Edge & Desktop',
      title1: 'Bildschirmaufnahme',
      title2: 'KI-Untertitel',
      subtitle: 'Bildschirm aufnehmen. Automatische Untertitel generieren. In 12 Sprachen übersetzen. Untertitel einbrennen. Alles in einem Klick.',
      download: 'Kostenlos herunterladen', seeHow: 'So funktioniert\'s →', languages: 'Sprachen', powered: 'KI-gestützt', free: 'Kostenlos 3 Aufnahmen/Monat'
    },
    features: {
      title: 'Warum SnapSum?',
      subtitle: 'Ein Tool. Kein Wechsel mehr zwischen Aufnahme-, Transkriptions- und Untertitel-Software.',
      record: { title: 'Bildschirmaufnahme', desc: 'Bildschirm, Browser-Tab oder Anwendungsfenster aufnehmen. Systemaudio und Mikrofon unterstützt.' },
      transcribe: { title: 'KI-Transkription', desc: 'Fortschrittliche automatische Spracherkennung. 12 Sprachen unterstützt.' },
      subtitle: { title: 'Automatische Untertitel', desc: 'Perfekt synchronisierte Untertitel automatisch generieren. Bearbeiten und anpassen.' },
      translate: { title: 'Übersetzung', desc: 'Untertitel mit einem Klick in 12 Sprachen übersetzen.' },
      burn: { title: 'Untertitel einbrennen', desc: 'Untertitel direkt in das Video einbrennen. Exportieren und überall teilen.' },
      annotation: { title: 'Annotations-Werkzeuge', desc: 'Zeichnen, markieren und annotieren während der Aufnahme. Perfekt für Tutorials.' }
    },
    how: {
      title: 'So funktioniert\'s', subtitle: '4 Schritte. Fertig.',
      step1: { title: 'Aufnehmen', desc: 'Klicken Sie auf das Erweiterungssymbol und starten Sie die Bildschirmaufnahme.' },
      step2: { title: 'Transkribieren', desc: 'KI wandelt Sprache automatisch in Text mit Zeitstempeln um.' },
      step3: { title: 'Übersetzen', desc: 'Optional: Untertitel in Ihre bevorzugte Sprache übersetzen.' },
      step4: { title: 'Exportieren', desc: 'Untertitel einbrennen oder Untertiteldateien exportieren.' }
    },
    languages: { title: '12 Sprachen unterstützt', subtitle: 'Transkribieren und übersetzen Sie in Ihrer Sprache' },
    cta: { title: 'Bereit, bessere Videos zu erstellen?', subtitle: 'Schließen Sie sich Tausenden von Erstellern an und sparen Sie Stunden bei der manuellen Untertitelung.', download: 'Kostenlos herunterladen', noCard: 'Keine Kreditkarte erforderlich' },
    footer: { rights: 'Alle Rechte vorbehalten', terms: 'AGB', privacy: 'Datenschutz', refund: 'Rückerstattung', contact: 'Kontakt' }
  },
  'es': {
    nav: { features: 'Características', how: 'Cómo funciona', languages: 'Idiomas', pricing: 'Precios', download: 'Descargar' },
    hero: {
      badge: 'Disponible para Chrome, Edge y Desktop',
      title1: 'Grabación de pantalla',
      title2: 'Subtítulos con IA',
      subtitle: 'Graba tu pantalla. Obtén subtítulos automáticos. Traduce a 12 idiomas. Incrusta subtítulos en el video. Todo en un clic.',
      download: 'Descargar gratis', seeHow: 'Ver cómo funciona →', languages: 'Idiomas', powered: 'IA', free: '3 grabaciones/mes gratis'
    },
    features: {
      title: '¿Por qué SnapSum?',
      subtitle: 'Una herramienta. No más cambiar entre software de grabación, transcripción y subtítulos.',
      record: { title: 'Grabación de pantalla', desc: 'Graba tu pantalla, pestaña o ventana de aplicación. Audio del sistema y micrófono soportados.' },
      transcribe: { title: 'Transcripción IA', desc: 'Reconocimiento de voz automático avanzado. 12 idiomas soportados.' },
      subtitle: { title: 'Subtítulos automáticos', desc: 'Genera subtítulos perfectamente sincronizados. Edita y ajusta según necesites.' },
      translate: { title: 'Traducción', desc: 'Traduce subtítulos a 12 idiomas con un clic.' },
      burn: { title: 'Incrustar subtítulos', desc: 'Incrusta subtítulos directamente en el video. Exporta y comparte en cualquier lugar.' },
      annotation: { title: 'Herramientas de anotación', desc: 'Dibuja, resalta y anota mientras grabas. Perfecto para tutoriales.' }
    },
    how: {
      title: 'Cómo funciona', subtitle: '4 pasos. Listo.',
      step1: { title: 'Grabar', desc: 'Haz clic en el ícono de la extensión y comienza a grabar.' },
      step2: { title: 'Transcribir', desc: 'La IA convierte automáticamente el habla en texto con marcas de tiempo.' },
      step3: { title: 'Traducir', desc: 'Opcional: traduce los subtítulos a tu idioma preferido.' },
      step4: { title: 'Exportar', desc: 'Incrusta subtítulos en el video o exporta archivos de subtítulos.' }
    },
    languages: { title: '12 Idiomas Soportados', subtitle: 'Transcribe y traduce en tu idioma' },
    cta: { title: '¿Listo para crear mejores videos?', subtitle: 'Únete a miles de creadores y ahorra horas de subtitulado manual.', download: 'Descargar gratis', noCard: 'Sin tarjeta de crédito' },
    footer: { rights: 'Todos los derechos reservados', terms: 'Términos', privacy: 'Privacidad', refund: 'Reembolso', contact: 'Contacto' }
  },
  'pt': {
    nav: { features: 'Recursos', how: 'Como funciona', languages: 'Idiomas', pricing: 'Preços', download: 'Baixar' },
    hero: {
      badge: 'Disponível para Chrome, Edge e Desktop',
      title1: 'Gravação de tela',
      title2: 'Legendas com IA',
      subtitle: 'Grave sua tela. Obtenha legendas automáticas. Traduza para 12 idiomas. Incorpore legendas no vídeo. Tudo em um clique.',
      download: 'Baixar grátis', seeHow: 'Ver como funciona →', languages: 'Idiomas', powered: 'IA', free: '3 gravações/mês grátis'
    },
    features: {
      title: 'Por que SnapSum?',
      subtitle: 'Uma ferramenta. Chega de alternar entre software de gravação, transcrição e legendagem.',
      record: { title: 'Gravação de tela', desc: 'Grave sua tela, aba ou janela de aplicativo. Áudio do sistema e microfone suportados.' },
      transcribe: { title: 'Transcrição IA', desc: 'Reconhecimento de voz automático avançado. 12 idiomas suportados.' },
      subtitle: { title: 'Legendas automáticas', desc: 'Gere legendas perfeitamente sincronizadas. Edite e ajuste conforme necessário.' },
      translate: { title: 'Tradução', desc: 'Traduza legendas para 12 idiomas com um clique.' },
      burn: { title: 'Incorporar legendas', desc: 'Incorpore legendas diretamente no vídeo. Exporte e compartilhe em qualquer lugar.' },
      annotation: { title: 'Ferramentas de anotação', desc: 'Desenhe, destaque e anote durante a gravação. Perfeito para tutoriais.' }
    },
    how: {
      title: 'Como funciona', subtitle: '4 passos. Pronto.',
      step1: { title: 'Gravar', desc: 'Clique no ícone da extensão e comece a gravar.' },
      step2: { title: 'Transcrever', desc: 'A IA converte automaticamente a fala em texto com marcas de tempo.' },
      step3: { title: 'Traduzir', desc: 'Opcional: traduza as legendas para seu idioma preferido.' },
      step4: { title: 'Exportar', desc: 'Incorpore legendas no vídeo ou exporte arquivos de legendas.' }
    },
    languages: { title: '12 Idiomas Suportados', subtitle: 'Transcreva e traduza em seu idioma' },
    cta: { title: 'Pronto para criar vídeos melhores?', subtitle: 'Junte-se a milhares de criadores e economize horas de legendagem manual.', download: 'Baixar grátis', noCard: 'Sem cartão de crédito' },
    footer: { rights: 'Todos os direitos reservados', terms: 'Termos', privacy: 'Privacidade', refund: 'Reembolso', contact: 'Contato' }
  },
  'ru': {
    nav: { features: 'Возможности', how: 'Как это работает', languages: 'Языки', pricing: 'Цены', download: 'Скачать' },
    hero: {
      badge: 'Доступно для Chrome, Edge и Desktop',
      title1: 'Запись экрана',
      title2: 'AI-субтитры',
      subtitle: 'Запишите экран. Получите автоматические субтитры. Переведите на 12 языков. Встройте субтитры в видео. Все в один клик.',
      download: 'Скачать бесплатно', seeHow: 'Как это работает →', languages: 'Языки', powered: 'AI', free: '3 записи/месяц бесплатно'
    },
    features: {
      title: 'Почему SnapSum?',
      subtitle: 'Один инструмент. Больше не нужно переключаться между ПО для записи, транскрипции и субтитров.',
      record: { title: 'Запись экрана', desc: 'Запишите экран, вкладку браузера или окно приложения. Поддержка системного аудио и микрофона.' },
      transcribe: { title: 'AI-транскрипция', desc: 'Продвинутое автоматическое распознавание речи. Поддержка 12 языков.' },
      subtitle: { title: 'Автоматические субтитры', desc: 'Генерация идеально синхронизированных субтитров. Редактируйте и настраивайте.' },
      translate: { title: 'Перевод', desc: 'Переведите субтитры на 12 языков одним кликом.' },
      burn: { title: 'Встройка субтитров', desc: 'Встройте субтитры прямо в видео. Экспортируйте и делитесь где угодно.' },
      annotation: { title: 'Инструменты аннотации', desc: 'Рисуйте, выделяйте и аннотируйте во время записи. Идеально для туториалов.' }
    },
    how: {
      title: 'Как это работает', subtitle: '4 шага. Готово.',
      step1: { title: 'Записать', desc: 'Нажмите на иконку расширения и начните запись экрана.' },
      step2: { title: 'Транскрибировать', desc: 'AI автоматически преобразует речь в текст с временными метками.' },
      step3: { title: 'Перевести', desc: 'Опционально: переведите субтитры на предпочитаемый язык.' },
      step4: { title: 'Экспортировать', desc: 'Встройте субтитры в видео или экспортируйте файлы субтитров.' }
    },
    languages: { title: 'Поддержка 12 языков', subtitle: 'Транскрибируйте и переводите на вашем языке' },
    cta: { title: 'Готовы создавать лучшие видео?', subtitle: 'Присоединяйтесь к тысячам создателей и экономьте часы ручного субтитрирования.', download: 'Скачать бесплатно', noCard: 'Без кредитной карты' },
    footer: { rights: 'Все права защищены', terms: 'Условия', privacy: 'Конфиденциальность', refund: 'Возврат', contact: 'Контакты' }
  },
  'ar': {
    nav: { features: 'الميزات', how: 'كيف يعمل', languages: 'اللغات', pricing: 'الأسعار', download: 'تحميل' },
    hero: {
      badge: 'متوفر على Chrome و Edge و سطح المكتب',
      title1: 'تسجيل الشاشة',
      title2: 'ترجمة آلية',
      subtitle: 'سجل شاشتك. احصل على ترجمة تلقائية. ترجم إلى 12 لغة. أدخل الترجمة في الفيديو. كل ذلك بنقرة واحدة.',
      download: 'تحميل مجاني', seeHow: 'شاهد كيف يعمل ←', languages: 'اللغات', powered: 'ذكاء اصطناعي', free: '3 تسجيلات/شهر مجاناً'
    },
    features: {
      title: 'لماذا SnapSum؟',
      subtitle: 'أداة واحدة. لا مزيد من التبديل بين برامج التسجيل والنسخ والترجمة.',
      record: { title: 'تسجيل الشاشة', desc: 'سجل شاشتك أو علامة تبويب المتصفح أو نافذة التطبيق. دعم صوت النظام والميكروفون.' },
      transcribe: { title: 'نسخ آلي', desc: 'نسخ صوتي متقدم تلقائي. دعم 12 لغة.' },
      subtitle: { title: 'ترجمة تلقائية', desc: 'إنشاء ترجمة متزامنة تماماً. حرر وعدل حسب الحاجة.' },
      translate: { title: 'ترجمة', desc: 'ترجم الترجمة إلى 12 لغة بنقرة واحدة.' },
      burn: { title: 'إدخال الترجمة', desc: 'أدخل الترجمة مباشرة في الفيديو. صدّر وشارك في أي مكان.' },
      annotation: { title: 'أدوات التوضيح', desc: 'ارسم وحدد ووضح أثناء التسجيل. مثالي للدروس التعليمية.' }
    },
    how: {
      title: 'كيف يعمل', subtitle: '4 خطوات. انتهى.',
      step1: { title: 'تسجيل', desc: 'انقر على أيقونة الإضافة وابدأ تسجيل الشاشة.' },
      step2: { title: 'نسخ', desc: 'الذكاء الاصطناعي يحول الكلام تلقائياً إلى نص مع طوابع زمنية.' },
      step3: { title: 'ترجمة', desc: 'اختياري: ترجم الترجمة إلى لغتك المفضلة.' },
      step4: { title: 'تصدير', desc: 'أدخل الترجمة في الفيديو أو صدّر ملفات الترجمة.' }
    },
    languages: { title: '12 لغة مدعومة', subtitle: 'انسخ وترجم بلغتك' },
    cta: { title: 'مستعد لإنشاء فيديوهات أفضل؟', subtitle: 'انضم إلى آلاف المبدعين ووفر ساعات من الترجمة اليدوية.', download: 'تحميل مجاني', noCard: 'لا حاجة لبطاقة ائتمان' },
    footer: { rights: 'جميع الحقوق محفوظة', terms: 'الشروط', privacy: 'الخصوصية', refund: 'الاسترداد', contact: 'اتصل بنا' }
  },
  'hi': {
    nav: { features: 'विशेषताएं', how: 'यह कैसे काम करता है', languages: 'भाषाएं', pricing: 'मूल्य', download: 'डाउनलोड' },
    hero: {
      badge: 'Chrome, Edge और Desktop के लिए उपलब्ध',
      title1: 'स्क्रीन रिकॉर्डिंग',
      title2: 'AI सबटाइटल',
      subtitle: 'अपनी स्क्रीन रिकॉर्ड करें। स्वचालित कैप्शन प्राप्त करें। 12 भाषाओं में अनुवाद करें। सबटाइटल वीडियो में बर्न करें। सब एक क्लिक में।',
      download: 'मुफ्त डाउनलोड', seeHow: 'देखें कैसे काम करता है →', languages: 'भाषाएं', powered: 'AI संचालित', free: 'मुफ्त 3 रिकॉर्डिंग/माह'
    },
    features: {
      title: 'SnapSum क्यों?',
      subtitle: 'एक टूल। रिकॉर्डिंग, ट्रांसक्रिप्शन और सबटाइटल सॉफ्टवेयर के बीच स्विच करने की जरूरत नहीं।',
      record: { title: 'स्क्रीन रिकॉर्डिंग', desc: 'अपनी स्क्रीन, ब्राउज़र टैब या एप्लिकेशन विंडो रिकॉर्ड करें। सिस्टम ऑडियो और माइक्रोफोन समर्थित।' },
      transcribe: { title: 'AI ट्रांसक्रिप्शन', desc: 'उन्नत स्वचालित भाषण पहचान। 12 भाषाएं समर्थित।' },
      subtitle: { title: 'स्वचालित सबटाइटल', desc: 'पूरी तरह से सिंक्रनाइज़्ड सबटाइटल स्वचालित रूप से उत्पन्न करें। आवश्यकतानुसार संपादित करें।' },
      translate: { title: 'अनुवाद', desc: 'एक क्लिक में सबटाइटल को 12 भाषाओं में अनुवाद करें।' },
      burn: { title: 'सबटाइटल बर्न', desc: 'सबटाइटल सीधे वीडियो में बर्न करें। निर्यात करें और कहीं भी साझा करें।' },
      annotation: { title: 'एनोटेशन टूल्स', desc: 'रिकॉर्डिंग के दौरान ड्रॉ, हाइलाइट और एनोटेट करें। ट्यूटोरियल के लिए बिल्कुल सही।' }
    },
    how: {
      title: 'यह कैसे काम करता है', subtitle: '4 चरण। हो गया।',
      step1: { title: 'रिकॉर्ड', desc: 'एक्सटेंशन आइकन पर क्लिक करें और स्क्रीन रिकॉर्डिंग शुरू करें।' },
      step2: { title: 'ट्रांसक्राइब', desc: 'AI स्वचालित रूप से भाषण को टाइमस्टैंप के साथ टेक्स्ट में बदल देता है।' },
      step3: { title: 'अनुवाद', desc: 'वैकल्पिक: सबटाइटल को अपनी पसंदीदा भाषा में अनुवाद करें।' },
      step4: { title: 'निर्यात', desc: 'सबटाइटल वीडियो में बर्न करें या सबटाइटल फाइलें निर्यात करें।' }
    },
    languages: { title: '12 भाषाएं समर्थित', subtitle: 'अपनी भाषा में ट्रांसक्राइब और अनुवाद करें' },
    cta: { title: 'बेहतर वीडियो बनाने के लिए तैयार हैं?', subtitle: 'हजारों क्रिएटर्स से जुड़ें और मैन्युअल सबटाइटलिंग के घंटों बचाएं।', download: 'मुफ्त डाउनलोड', noCard: 'क्रेडिट कार्ड की जरूरत नहीं' },
    footer: { rights: 'सर्वाधिकार सुरक्षित', terms: 'नियम', privacy: 'गोपनीयता', refund: 'रिफंड', contact: 'संपर्क' }
  }
};

// Current language
let currentLang = 'en';

// Change language
function changeLanguage(lang) {
  currentLang = lang;
  
  // Save preference
  localStorage.setItem('snapsum-lang', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English
        value = translations['en'];
        for (const kk of keys) {
          if (value && value[kk]) value = value[kk];
        }
        break;
      }
    }
    
    if (value && typeof value === 'string') {
      el.textContent = value;
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Handle RTL for Arabic
  if (lang === 'ar') {
    document.body.style.direction = 'rtl';
  } else {
    document.body.style.direction = 'ltr';
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  // Load saved preference
  const savedLang = localStorage.getItem('snapsum-lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
    document.getElementById('lang-select').value = savedLang;
    changeLanguage(savedLang);
  }
});

// Make changeLanguage globally available
window.changeLanguage = changeLanguage;

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const isHidden = navLinks.style.display === 'none' || !navLinks.style.display;
  
  if (isHidden) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'var(--surface)';
    navLinks.style.padding = '20px';
    navLinks.style.borderBottom = '1px solid var(--border)';
  } else {
    navLinks.style.display = '';
  }
}

// FAQ toggle
function toggleFaq(element) {
  const faqItem = element.parentElement;
  faqItem.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const navLinks = document.querySelector('.nav-links');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navLinks && navMenu && !navLinks.contains(e.target) && !navMenu.contains(e.target)) {
    navLinks.style.display = '';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.step-card, .feature-card, .pricing-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// Paddle checkout (placeholder - enable after Paddle approval)
/*
document.addEventListener('DOMContentLoaded', function() {
  const paddleBtn = document.getElementById('paddle-checkout');
  if (paddleBtn) {
    paddleBtn.addEventListener('click', function() {
      // Paddle.Checkout.open({
      //   product: YOUR_PRODUCT_ID,
      //   allowQuantity: false,
      //   disableLogout: true,
      //   frameTarget: 'checkout-container',
      //   frameInitialHeight: 416,
      //   frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;'
      // });
      alert('Paddle checkout will be available soon! Contact support@snap-sum.com to subscribe.');
    });
  }
});
*/

// Analytics placeholder
function trackEvent(eventName, properties = {}) {
  // Replace with your analytics solution (Google Analytics, Mixpanel, etc.)
  // console.log('Track:', eventName, properties);
}

// Track button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
  btn.addEventListener('click', function() {
    const href = this.getAttribute('href') || '';
    const text = this.textContent.trim();
    
    if (href.includes('download') || text.toLowerCase().includes('download')) {
      trackEvent('download_click', { location: window.location.pathname });
    } else if (href.includes('pricing') || text.toLowerCase().includes('upgrade')) {
      trackEvent('upgrade_click', { location: window.location.pathname });
    }
  });
});

// Service Worker registration (for PWA support)
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful');
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
*/
