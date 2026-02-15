# NEO-TYPE - さよなら苦手キー

Japanese typing game that helps you improve your typing skills by focusing on your weak keys.

## 概要 (Overview)

NEO-TYPEは、あなたの苦手なキーと過去のミス回数を学習・分析し、最適な問題を出し続けることで、最短ルートでのタイピング力向上をサポートする日本語タイピングゲームです。

## 技術仕様 (Technical Specifications)

- **フレームワーク不要**: Pure HTML/CSS/JavaScript (No React, no build tools)
- **完全オフライン対応**: すべてのスタイルとアイコンがインライン化されています
- **ファイルサイズ**: 131KB (単一HTMLファイル)
- **ブラウザ対応**: モダンブラウザ (Chrome, Firefox, Safari, Edge)

## 使い方 (How to Use)

1. `index.html` をブラウザで開くだけ！
2. ビルドツールやnpm installは不要です

Simply open `index.html` in your browser - no build tools or npm install required!

## 機能 (Features)

### ゲームモード
- **Normal Mode**: 500種類の日常単語
- **Legal Mode**: 200種類の法律用語

### 表示モード
- **IME Mode**: ひらがな表示（実際のIME入力に近い）
- **Guide Mode**: ローマ字ガイド表示
- **Input Mode**: ガイドなし（上級者向け）

### その他の機能
- ⚡ アダプティブ難易度（苦手キー検出）
- 🎵 サウンドエフェクト（Web Audio API）
- 📊 学習データ分析（localStorage使用）
- ⌨️ 柔軟なローマ字入力対応
- ⏰ タイマー設定（30秒〜300秒）
- 🔙 Real Mode（バックスペース対応）

## 開発履歴 (Development History)

このプロジェクトは元々Reactで作成されていましたが、フレームワーク不要のシンプルなHTML/CSS/JSに変換されました。

Originally built with React, this project has been converted to plain HTML/CSS/JS for maximum simplicity and portability.

### 変換内容
- React Hooks → Vanilla JavaScript Class
- JSX → Template Strings
- Tailwind CDN → Inline CSS
- lucide-react → Inline SVG Icons

## ライセンス (License)

© Tadashi Kotegawa

---

**Note**: This is a single-file application that requires no dependencies or build process. Just open `index.html` and start playing!
