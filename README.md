# CyTech IR 運用マニュアル

株式会社 TheNewGate CyTech 事業部の IR（インストラクター）向け運用マニュアルを Web 化したものです。
[VitePress](https://vitepress.dev/) で構築し、GitHub Pages に**パスワード保護付き**で公開します。

## 構成

- `base/` — 元となった PDF（参照用、編集不要）
- `docs/` — サイト本体
  - `docs/index.md` — トップページ
  - `docs/getting-started/` — はじめに（入学〜卒業）
  - `docs/operations/` — 日々の運用
  - `docs/policy/` — ポリシー・心得
  - `docs/links.md` — ファイル等リンク集
  - `docs/.vitepress/` — サイト設定 + カスタムテーマ
- `.github/workflows/deploy.yml` — GitHub Actions（ビルド → パスワード暗号化 → Pages デプロイ）

## ローカルで起動

前提：Node.js 20 以上

```bash
npm install
npm run docs:dev
```

ブラウザで <http://localhost:5173/CyTech-Div-Manual/> を開きます。

### その他のコマンド

```bash
npm run docs:build     # docs/.vitepress/dist にビルド
npm run docs:preview   # ビルド済みサイトをローカルで確認
```

## 内容を更新する

### 小さな修正（誤字・リンク差し替え等）

1. GitHub 上で対象の `.md` ファイルを開く
2. サイト各ページ右下の **「このページを GitHub で編集する」** リンクから直接飛べます
3. Web 上で編集 → Commit（`main` へ直 push または PR → merge）
4. GitHub Actions が自動でビルド & デプロイ → 数分でサイトに反映

### 大きめの変更

1. ローカルでブランチを切る
2. `npm run docs:dev` でプレビューしながら編集
3. PR → merge で本番反映

### 「作成中」バッジの付け方

各 Markdown のタイトル横に Vue コンポーネントを書くだけ：

```md
# ページタイトル <StatusBadge status="wip" />
```

`status` の値：

- `wip` — 作成中（黄色）
- `ready` — 公開中（緑）
- `draft` — 下書き（グレー）

## GitHub Pages へのデプロイ初期設定

初回のみ、以下の設定が必要です。

### 1. リポジトリの用意

- リポジトリは **Public**（GitHub Free で Pages を使うため）
- 既定ブランチは `main`

### 2. `docs/.vitepress/config.ts` の書き換え

```ts
const BASE = '/CyTech-Div-Manual/'                    // リポジトリ名に合わせる
const REPO = 'cytech-education/CyTech-Div-Manual'     // <owner>/<repo>
```

### 3. GitHub リポジトリ設定

- **Settings → Pages → Source** を **「GitHub Actions」** に変更
- **Settings → Secrets and variables → Actions → New repository secret**
  - Name: `SITE_PASSWORD`
  - Value: 十分に長いランダムなパスワード（Bitwarden / 1Password などで生成推奨）

### 4. `main` へ push

GitHub Actions が起動し、数分で `https://cytech-education.github.io/CyTech-Div-Manual/` に反映されます。

## パスワード保護の仕組み

- ビルド済みの HTML を [**staticrypt**](https://github.com/robinmoisson/staticrypt) で **AES-256 暗号化**
- アクセス時にパスワード入力フォームが表示され、入力後に複合化されてサイトが見える
- パスワードは `SITE_PASSWORD` シークレットで管理（ワークフロー内に直書きしない）
- 覚えておく期間：`--remember 7`（7 日間ブラウザに記憶）

### パスワードを変更するには

1. GitHub → Settings → Secrets → `SITE_PASSWORD` を更新
2. Actions タブから `Deploy manual site to GitHub Pages` を手動実行（または `main` へ再 push）
3. 数分で新パスワードが有効

### 制約（重要）

- パスワードを知っている人に中身を見せるカジュアル保護です。**本気の機密保持はできません**
- **機密情報（実パスワード、API トークン、個人情報）は Markdown に書かないでください**
- リポジトリは Public なので、`.md` ソース自体は世界中から見えます

## セキュリティ運用ルール

| 内容 | 扱い |
|------|------|
| Zoom アカウントの PW | Markdown に書かない。別管理 |
| 個人情報（氏名・メール等） | Markdown に書かない。管理シート側で管理 |
| 公開ドキュメント URL（Drive 等） | 書いても可（閲覧権限はドキュメント側で制御される） |

本マニュアル内で該当箇所は「別管理」への誘導文に置き換えています。
