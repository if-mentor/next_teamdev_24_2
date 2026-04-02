# 目次

- [環境構築](#環境構築)
- [開発フロー](#開発フロー)
  - [Issue](#1-issue)
  - [Branch](#2-branch)
  - [Commit](#3-commit)
  - [PullRequest](#4-pullrequest)
- [使用技術](#使用技術)

# 環境構築

**1. リポジトリのclone**

```bash
git clone https://github.com/if-mentor/next_teamdev_24_2.git
```

**2. 依存関係のインストール**

```bash
npm install
```

**3. 環境変数の設定**

```bash
cp .env.example .env.local
```

**4. 起動方法**

```bash
npm run dev
```

**5. 動作確認**

```
http://localhost:3000
```

# 開発フロー

## 1. Issue

1. Issue を作成してください。
2. Assignees で担当者を指定してください。
3. Projects で GitHub Projects のタスクに紐付けてください。

### バグ報告の際の注意

- バグや表示崩れに関しては、Issue タイプを「Bug report」としてください。
- 実装途中にバグを発見した場合でも、個別に Issue を作成してください。
- 必要であればミーティングで修正対応を議論します。

## 2. Branch

### ブランチ命名規則（`プレフィックス/カテゴリ/内容`の形式）

- **プレフィックス（対象）**
  - `fe`: フロントエンド
  - `be`: バックエンド

- **カテゴリ**
  - `feature`: 機能追加
  - `fix`: リファクタリングや軽微な修正
  - `bug`: バグ修正

**＜例＞**

```bash
# switch コマンド
git switch -c 'fe/feature/home'

# checkout コマンド
git checkout -b 'fe/feature/home'
```

## 3. Commit

### コミットメッセージルール

- **何をしたかが明確にわかる内容**にしてください。

**＜例＞**

```
git commit -m 'Top画面 作成'
```

## 4. PullRequest

### 1. プルリクエスト前に行うこと

- プルリクエストを上げる前に必ず、自分が作業を行なっているブランチで `git pull origin main` を行うこと。
- コンフリクトが発生した場合は、ローカル上で解決してください。解決の仕方がわからない場合は、メンバーに相談する。

### 2. パッケージ更新の確認

- package に更新がないか、確認するため、 `npm install` コマンドを実行する。<br/>
  `found 0 vulnerabilities` と表示されれば OK。

### 3. プルリクエスト作成時のルール

- `main` ブランチへのマージを作成してください。
- Issue 番号を必ず紐づけてください（例: `#1`）。
- Assignees にレビュー担当者を指定してください。
- PR 内でメンションし、Slack でレビュー依頼してください。

### 4. マージルール

- マージ時は **`Squash and merge`** を選択

## 使用技術

### フロントエンド

- [HTML](https://developer.mozilla.org/ja/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/ja/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/ja/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org)
- [React.js](https://ja.react.dev)
- [Next.js](https://nextjs.org)

### バックエンド

- [Supabase](https://supabase.com)

### インフラ

- [Vercel](https://vercel.com)

### ツール

- [GitHub](https://github.co.jp)

### 言語 / パッケージ

- [Node.js](https://nodejs.org/ja)
- [npm](https://docs.npmjs.com/cli/v10/commands/npm-version)
