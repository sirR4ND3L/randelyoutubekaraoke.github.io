        // Load YouTube IFrame API
    <script>

    </div>
        </div>
          Free online karaoke player using YouTube. Sing songs, track performance, and enjoy real-time scoring.
        <div style="display:none;">
        </div>
            </div>
                </div>
                    <div class="shortcut-item"><span class="key">â‡§+â†µ</span> <span>Res</span></div>
                    <div class="shortcut-item"><span class="key">â†µ</span> <span>Enter</span></div>
                    <div class="shortcut-item"><span class="key">F</span> <span>Full</span></div>
                    <div class="shortcut-item"><span class="key">B</span> <span>Cancel</span></div>
                    <div class="shortcut-item"><span class="key">C</span> <span>Restart</span></div>
                    <div class="shortcut-item"><span class="key">X</span> <span>Pause</span></div>
                    <div class="shortcut-item"><span class="key">Z</span> <span>Play</span></div>
                <div class="shortcut-grid">
                <h4>Shortcuts</h4>
            <div class="shortcuts-legend glass-panel">

            </div>
                </ul>
                    <li>Queue is empty</li>
                <ul class="queue-list" id="queueList">
                <h3>Up Next</h3>
            <div class="queue-container glass-panel">
        <div class="right-panel">

        </div>

            </div>
                </div>
                    <span>ðŸ”Š</span>
                        oninput="changeVolume(this.value)">
                    <input type="range" id="volumeSlider" min="0" max="100" value="100"
                    <span>ðŸ”ˆ</span>
                <div class="volume-control">

                </div>
                    <button onclick="toggleFullscreen()"><span class="icon">â›¶</span> Full</button>
                    <button onclick="cancelCurrentSong()" class="cancel-btn"><span class="icon">â¹ï¸</span> Cancel</button>
                    <button onclick="restartVideo()"><span class="icon">ðŸ”„</span> Restart</button>
                    <button onclick="pauseVideo()"><span class="icon">â¸ï¸</span> Pause</button>
                    <button onclick="playVideo()"><span class="icon">â–¶ï¸</span> Play</button>
                <div class="button-row">
            <div class="controls glass-panel">

            </div>
                </div>
                    </div>
                        <p style="color: var(--text-secondary)">Next Gen Glass Experience</p>
                        <h1 class="sr-only">Randel YouTube Karaoke Player</h1>
                        <div class="mic-icon">ðŸŽ™ï¸</div>
                    <div class="welcome-content">
                <div id="playerPlaceholder" class="player-placeholder">
                </div>
                    <canvas id="visualizerCanvas"></canvas>
                <div class="visualizer-overlay">
                </div>
                    <span>ðŸŽ™ï¸</span> <span id="audioText">Hybrid Audio: Off</span>
                <div id="audioStatus" class="mic-status" onclick="toggleVisualizer()">

                </div>
                    </div>
                        <button onclick="restartVideo()">Sing Again</button>
                        <button class="primary" onclick="closeScore()">Continue</button>
                    <div class="score-actions">
                    <p class="score-message" id="finalMessage">Incredible performance!</p>
                    <div class="score-number" id="finalScore">85</div>
                    <div class="score-rank" id="finalRank">Rockstar</div>
                <div id="scoreOverlay" class="score-overlay">

                </div>
                    <span class="value" id="liveScorePlayer">0</span>
                    <span class="label">Score</span>
                <div id="liveScoreBadge" class="live-score-badge">
                
                <div id="player"></div>
            <div class="video-container" id="videoContainer">
        <div class="left-panel">
    <div class="main-layout">

    </div>
        <button onclick="loadVideo(false)">Reserve</button>
        <button class="primary" onclick="loadVideo(true)">Play Now</button>
        <input type="text" id="searchInput" placeholder="Search for a song...">
    <div class="search-container glass-panel">

    </div>
        </div>
            </div>
                <span id="liveScoreValue">0</span>
                </div>
                    <div id="scoreBarFill"></div>
                <div class="score-bar-bg">
            <div class="score-meter-container" id="scoreMeter" style="display: none;">
            <h2 id="nowPlaying">Ready to Sing</h2>
        <div id="dynamicIsland" class="dynamic-island">
    <div class="header-container">

    </div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
    <div class="bg-blobs">

<body>

</head>
    </style>
        }
          left: -9999px;
          position: absolute;
        .sr-only {
        }
            gap: 16px;
            display: flex;
        .score-actions {

        }
            margin-bottom: 30px;
            font-size: 16px;
            color: var(--text-secondary);
        .score-message {

        }
            transform: translateY(0) scale(1);
        .score-overlay.active .score-number {
        .score-overlay.active .score-rank,

        }
            transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform: scale(0.8);
            filter: drop-shadow(0 0 30px rgba(0, 122, 255, 0.4));
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background: linear-gradient(180deg, #fff 30%, var(--accent-color) 100%);
            margin: 10px 0;
            line-height: 1;
            font-weight: 800;
            font-size: 120px;
        .score-number {

        }
            transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform: translateY(20px);
            margin-bottom: 10px;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: var(--accent-color);
            font-weight: 700;
            font-size: 18px;
        .score-rank {

        }
            pointer-events: auto;
            opacity: 1;
        .score-overlay.active {

        }
            padding: 40px;
            text-align: center;
            transition: var(--transition-smooth);
            pointer-events: none;
            opacity: 0;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            display: flex;
            z-index: 100;
            backdrop-filter: blur(20px);
            background: rgba(0, 0, 0, 0.85);
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            position: absolute;
        .score-overlay {
        /* Score Overlay */

        }
            min-width: 25px;
            color: #00ffcc;
            font-weight: 700;
            font-size: 11px;
        #liveScoreValue {

        }
            transition: width 0.3s ease;
            background: linear-gradient(90deg, #007aff, #00ffcc);
            height: 100%;
            width: 0%;
        #scoreBarFill {

        }
            overflow: hidden;
            border-radius: 2px;
            background: rgba(255, 255, 255, 0.1);
            height: 4px;
            width: 60px;
        .score-bar-bg {

        }
            border-left: 1px solid rgba(255, 255, 255, 0.2);
            padding-left: 10px;
            margin-left: 10px;
            gap: 8px;
            align-items: center;
            display: flex;
        .score-meter-container {

        }
            font-variant-numeric: tabular-nums;
            color: #00ffcc;
            font-weight: 800;
            font-size: 20px;
        .live-score-badge .value {

        }
            letter-spacing: 1px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.5);
            font-weight: 800;
            font-size: 10px;
        .live-score-badge .label {

        }
            50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(0, 255, 204, 0.3); }
            0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(0, 255, 204, 0.15); }
        @keyframes scorePulse {

        }
            animation: scorePulse 2s infinite ease-in-out;
            transition: var(--transition-smooth);
            box-shadow: 0 0 20px rgba(0, 255, 204, 0.15);
            gap: 10px;
            align-items: center;
            display: none; /* Shown only when scoring is active */
            z-index: 10;
            border-radius: 16px;
            padding: 8px 16px;
            border: 1px solid rgba(0, 255, 204, 0.3);
            backdrop-filter: blur(20px);
            background: rgba(0, 0, 0, 0.6);
            left: 24px;
            top: 24px;
            position: absolute;
        .live-score-badge {
        /* Floating Live Score */

        }
            font-size: 11px;
            box-shadow: 0 4px 0 rgba(0, 0, 0, 0.4);
            color: var(--text-primary);
            font-family: 'Outfit', sans-serif;
            text-align: center;
            min-width: 32px;
            font-weight: 700;
            border-radius: 10px;
            padding: 4px 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.08);
        .key {

        }
            color: var(--text-secondary);
            font-size: 12px;
            gap: 10px;
            align-items: center;
            display: flex;
        .shortcut-item {

        }
            gap: 12px;
            grid-template-columns: repeat(2, 1fr);
            display: grid;
        .shortcut-grid {

        }
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: var(--text-tertiary);
            font-weight: 700;
            font-size: 12px;
            margin: 0 0 15px;
        .shortcuts-legend h4 {

        }
            width: 100%;
            padding: 24px;
            margin-top: 24px;
        .shortcuts-legend {
        /* Shortcuts Legend */
        }
            font-size: 18px;
        .icon {
        /* Icons/Glyphs */

        }
            box-shadow: 0 0 15px rgba(255, 59, 48, 0.2);
            background: rgba(255, 59, 48, 0.25) !important;
        .cancel-btn:hover {

        }
            color: #ff453a !important;
            border: 0.5px solid rgba(255, 59, 48, 0.3) !important;
            background: rgba(255, 59, 48, 0.15) !important;
        .cancel-btn {

        }
            transform: scale(1.1);
            color: white;
            background: #ff3b30;
        .queue-remove-btn:hover {

        }
            opacity: 1;
        .queue-list li:hover .queue-remove-btn {

        }
            flex-shrink: 0;
            opacity: 0.4;
            transition: var(--transition-smooth);
            justify-content: center;
            align-items: center;
            display: flex;
            border-radius: 12px;
            height: 32px;
            width: 32px;
            color: #ff3b30;
            background: rgba(255, 59, 48, 0.1);
        .queue-remove-btn {

        }
            z-index: 2;
            box-shadow: 0 4px 10px rgba(0, 122, 255, 0.4);
            letter-spacing: 0.5px;
            text-transform: uppercase;
            border-radius: 8px;
            padding: 2px 8px;
            font-weight: 800;
            font-size: 9px;
            color: white;
            background: var(--accent-color);
            right: 12px;
            top: -8px;
            position: absolute;
        .next-tag {

        }
            margin-top: 2px;
            color: var(--text-tertiary);
            font-size: 11px;
        .song-meta {

        }
            display: block;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: var(--text-primary);
            font-weight: 600;
            font-size: 14px;
        .song-title {

        }
            min-width: 0;
            flex: 1;
        .song-info {

        }
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            flex-shrink: 0;
            object-fit: cover;
            background: #111;
            border-radius: 12px;
            height: 45px;
            width: 60px;
        .song-thumb {

        }
            border-color: rgba(255, 255, 255, 0.15);
            transform: scale(1.02);
            background: rgba(255, 255, 255, 0.06);
        .queue-list li:hover {

        }
            position: relative;
            transition: var(--transition-smooth);
            gap: 14px;
            align-items: center;
            display: flex;
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.03);
            padding: 12px;
        .queue-list li {

        }
            gap: 12px;
            flex-direction: column;
            display: flex;
            margin: 0;
            padding: 0;
            list-style: none;
        .queue-list {

        }
            gap: 10px;
            align-items: center;
            display: flex;
            color: var(--text-primary);
            font-weight: 700;
            font-size: 18px;
            margin: 0 0 20px;
        .queue-container h3 {

        }
            width: 100%;
            padding: 24px;
        .queue-container {
        /* Queue List */

        }
            background: rgba(255, 255, 255, 0.2);
        ::-webkit-scrollbar-thumb:hover {
        }
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
        ::-webkit-scrollbar-thumb {
        }
            background: rgba(255, 255, 255, 0.02);
        ::-webkit-scrollbar-track {
        }
            width: 8px;
        ::-webkit-scrollbar {
        /* Custom Scrollbar */


        }
            width: 120px;
            height: 4px;
            accent-color: var(--accent-color);
        input[type=range] {

        }
            margin-top: 10px;
            border-radius: 20px;
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.08);
            gap: 12px;
            align-items: center;
            display: flex;
        .volume-control {
        /* Volume & Progress */

        }
            }
                grid-column: span 2;
            .cancel-btn {
            }
                padding: 12px;
                font-size: 13px;
                width: 100%;
            .button-row button {
            }
                gap: 12px;
                grid-template-columns: repeat(2, 1fr);
                display: grid;
            .button-row {
        @media (max-width: 600px) {

        }
            width: 100%;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
            display: flex;
        .button-row {

        }
            width: 100%;
            gap: 24px;
            align-items: center;
            flex-direction: column;
            display: flex;
            padding: 32px;
            margin-top: 24px;
        .controls {

        }
            color: var(--text-tertiary);
        #searchInput::placeholder {

        }
            font-family: inherit;
            outline: none;
            font-size: 16px;
            color: white;
            background: transparent;
            border: none;
            border-radius: 100px;
            padding: 12px 30px;
            flex: 1;
        #searchInput {

        }
            box-shadow: 0 0 25px rgba(0, 122, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.3);
            border-color: rgba(0, 122, 255, 0.4);
            background: rgba(255, 255, 255, 0.07);
        .search-container:focus-within {

        }
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            transition: var(--transition-smooth);
            backdrop-filter: blur(30px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.04);
            border-radius: 100px;
            gap: 8px;
            display: flex;
            margin-bottom: 30px;
            padding: 8px;
            max-width: 800px;
            width: 100%;
        .search-container {
        /* Search & Controls */

        }
            box-shadow: 0 0 15px rgba(76, 217, 100, 0.3);
            border-color: #4cd964;
            color: #4cd964;
        .mic-status.active {

        }
            transform: scale(1.05);
            border-color: var(--accent-color);
            background: rgba(0, 0, 0, 0.8);
        .mic-status:hover {

        }
            letter-spacing: 0.5px;
            text-transform: uppercase;
            transition: var(--transition-smooth);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            cursor: pointer;
            gap: 8px;
            align-items: center;
            display: flex;
            z-index: 10;
            border-radius: 100px;
            padding: 8px 16px;
            background: rgba(0, 0, 0, 0.6);
            color: var(--text-secondary);
            font-weight: 600;
            font-size: 11px;
            right: 24px;
            top: 24px;
            position: absolute;
        .mic-status {

        }
            filter: drop-shadow(0 0 10px var(--accent-color));
            height: 100%;
            width: 100%;
        #visualizerCanvas {

        }
            background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
            z-index: 5;
            pointer-events: none;
            height: 100px;
            width: 100%;
            left: 0;
            bottom: 0;
            position: absolute;
        .visualizer-overlay {
        /* Visualizer */

        }
            filter: drop-shadow(0 0 30px rgba(0, 122, 255, 0.5));
            margin-bottom: 20px;
            font-size: 60px;
        .mic-icon {

        }
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%);
            margin-bottom: 10px;
            letter-spacing: -1px;
            font-weight: 700;
            font-size: clamp(24px, 5vw, 40px);
        .welcome-content h1 {
        }
            text-align: center;
            position: relative;
            z-index: 4;
            padding: 20px;
        .welcome-content {

        }
            pointer-events: none;
            opacity: 0;
        .player-placeholder.hidden {

        }
            transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 2;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            align-items: center;
            justify-content: center;
            display: flex;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            position: absolute;
        .player-placeholder {

        }
            pointer-events: none;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            position: absolute;
        #player {

        }
            box-shadow: 0 0 50px rgba(0, 122, 255, 0.15), 0 30px 70px rgba(0, 0, 0, 0.8);
            border-color: rgba(0, 122, 255, 0.3);
        .video-container:hover {

        }
            transition: var(--transition-smooth);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7);
            background: #000;
            overflow: hidden;
            border-radius: 40px;
            aspect-ratio: 16 / 9;
            width: 100%;
            position: relative;
        .video-container {

        }
            }
                gap: 16px;
                padding: 0 12px 40px;
            .main-layout {
            }
                position: static;
            .right-panel {
        @media (max-width: 1000px) {

        }
            gap: 24px;
            top: 100px;
            position: sticky;
            min-width: 0; /* Allow panel to shrink and handle text ellipsis */
            width: 100%;
            align-items: center;
            flex-direction: column;
            display: flex;
            flex: 1;
        .right-panel {

        }
            min-width: 0; /* Prevent panel from overflowing container */
            width: 100%;
            align-items: center;
            flex-direction: column;
            display: flex;
            flex: 2.2;
        .left-panel {

        }
            }
                gap: 30px;
                align-items: flex-start;
                flex-direction: row;
            .main-layout {
        @media (min-width: 1000px) {

        }
            box-sizing: border-box;
            padding: 0 20px 40px;
            gap: 24px;
            align-items: center;
            max-width: 1200px;
            width: 100%;
            flex-direction: column;
            display: flex;
        .main-layout {
        /* Layout */

        }
            box-shadow: 0 12px 25px rgba(0, 122, 255, 0.5);
            background: #0084ff;
        button.primary:hover {

        }
            box-shadow: 0 8px 20px rgba(0, 122, 255, 0.3);
            border: none;
            background: var(--accent-color);
        button.primary {

        }
            transform: translateY(0) scale(0.98);
        button:active {

        }
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.15);
        button:hover {

        }
            gap: 8px;
            justify-content: center;
            align-items: center;
            display: flex;
            transition: var(--transition-smooth);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            font-weight: 500;
            font-size: 14px;
            cursor: pointer;
            border-radius: 18px;
            padding: 12px 24px;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.08);
        button {
        /* Buttons */

        }
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            border-color: rgba(255, 255, 255, 0.2);
        .glass-panel:hover {

        }
            overflow: hidden;
            position: relative;
            transition: var(--transition-smooth);
            box-shadow: var(--panel-shadow);
            border-radius: 32px;
            border: 1px solid var(--glass-border);
            -webkit-backdrop-filter: blur(40px);
            backdrop-filter: blur(40px);
            background: var(--glass-bg);
        .glass-panel {
        /* Glass Panel System */

        }
            box-shadow: 0 0 30px rgba(0, 122, 255, 0.3), 0 15px 45px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(0, 122, 255, 0.4);
            background: #000;
            padding: 14px 32px;
        .dynamic-island.active {

        }
            gap: 10px;
            align-items: center;
            display: flex;
            color: var(--text-primary);
            letter-spacing: -0.3px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-weight: 600;
            font-size: 14px;
            margin: 0;
        .dynamic-island h2 {

        }
            50% { transform: translateY(6px); }
            0%, 100% { transform: translateY(0); }
        @keyframes islandFloat {

        }
            animation: islandFloat 6s ease-in-out infinite;
            transition: var(--transition-smooth);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1);
            justify-content: center;
            align-items: center;
            display: flex;
            max-width: 100%;
            min-width: 200px;
            border-radius: 40px;
            padding: 10px 24px;
            background: var(--dynamic-island-bg);
        .dynamic-island {

        }
            padding: 0 20px;
            justify-content: center;
            display: flex;
            width: 100%;
            margin-bottom: 24px;
            z-index: 1000;
            top: 16px;
            position: sticky;
        .header-container {
        /* Dynamic Island Style Header */

        }
            100% { transform: translate(-30vw, 50vh) rotate(180deg) scale(1.2); }
            0% { transform: translate(0, 0) rotate(0deg) scale(1); }
        @keyframes move-3 {

        }
            100% { transform: translate(-50vw, -40vh) rotate(-360deg) scale(1); }
            0% { transform: translate(0, 0) rotate(0deg) scale(1.1); }
        @keyframes move-2 {

        }
            100% { transform: translate(40vw, 30vh) rotate(360deg) scale(1.1); }
            0% { transform: translate(0, 0) rotate(0deg) scale(1); }
        @keyframes move-1 {

        }
            opacity: 0.3;
            animation: move-3 30s infinite alternate ease-in-out;
            top: -10%;
            left: 40%;
            height: 50vw;
            width: 50vw;
            background: #ff2d55;
        .blob:nth-child(3) {

        }
            opacity: 0.4;
            animation: move-2 45s infinite alternate ease-in-out;
            bottom: -10%;
            right: -20%;
            height: 60vw;
            width: 60vw;
            background: #5856d6;
        .blob:nth-child(2) {

        }
            opacity: 0.5;
            top: -20%;
            left: -20%;
            animation: move-1 35s infinite alternate ease-in-out;
            border-radius: 50%;
            background: var(--accent-color);
            height: 70vw;
            width: 70vw;
            position: absolute;
        .blob {

        }
            opacity: 0.4;
            filter: blur(80px);
            overflow: hidden;
            z-index: -1;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            position: fixed;
        .bg-blobs {
        /* Ambient Background Blobs */

        }
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            display: flex;
            color: var(--text-primary);
            background: var(--bg-color);
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
            margin: 0;
        body {

        }
            -webkit-tap-highlight-color: transparent;
            box-sizing: border-box;
        * {

        }
            --transition-smooth: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            --panel-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            --dynamic-island-bg: #000000;
            --text-tertiary: rgba(255, 255, 255, 0.35);
            --text-secondary: rgba(255, 255, 255, 0.6);
            --text-primary: #ffffff;
            --accent-glow: rgba(0, 122, 255, 0.5);
            --accent-color: #007aff;
            --glass-border: rgba(255, 255, 255, 0.1);
            --glass-bg: rgba(255, 255, 255, 0.03);
            --bg-color: #030303;
        :root {

        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
    <style>

    <meta property="og:image" content="https://images.unsplash.com/photo-1516280440502-6c9fa5649969?auto=format&fit=crop&w=1200&q=80">
    <meta property="og:url" content="https://sirr4nd3l.github.io/randelyoutubekaraoke.github.io/">
    <meta property="og:type" content="website">
    <meta property="og:description" content="A beautiful, interactive, and responsive web-based karaoke player using YouTube. Enjoy singing your favorite songs!">
    <meta property="og:title" content="Randel Youtube Karaoke Player">
    <!-- Open Graph / Social Media Meta Tags -->

    
    <meta name="robots" content="index, follow">
    <meta name="author" content="Randel">
    <meta name="description" content="Randel Youtube Karaoke Player - A beautiful, interactive, and responsive web-based karaoke player using YouTube. Enjoy singing your favorite songs with real-time scoring and dynamic visualizer.">
    <!-- SEO Meta Tags -->
    </script>
    }
