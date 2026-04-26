# チーム開発（後半カリキュラム）

研修後半に実施するチーム開発の運用フローをまとめています。STEP9 終了後、CyTech 管理画面の改修・新規実装を題材に、設計〜テストまで一連の開発業務を経験してもらうカリキュラムです。

## 全体フロー

<Mermaid id="flow-team-dev" :code="`flowchart LR
  A([STEP9 終了]) --> B[リポジトリ用意]
  B --> C[各種ファイル用意]
  C --> D[説明面談]
  D --> E([START])
  E --> F[各 STEP レビュー]
  F --> G[結合テストまで終了]
  G --> H[スキルシート<br/>作成面談]
  H --> I([END])
  classDef start fill:#2383E2,stroke:#2383E2,color:#fff;
  classDef goal fill:#8C5CE6,stroke:#8C5CE6,color:#fff;
  class A,E start
  class I goal
`" />

<FlowStep :steps="[
  { title: 'STEP9 終了', body: '前半カリキュラムを完了したタイミングで開始準備に入る', icon: '🏁' },
  { title: 'リポジトリを用意', body: '親リポジトリをクローンしてチーム用 private リポジトリを作成', icon: '🐙' },
  { title: '各種ファイルを用意', body: '管理フォルダ・WBS・各種仕様書フォルダをテンプレからコピー', icon: '📁' },
  { title: '説明面談を実施', body: '後半カリキュラムの概要・課題の進め方・提出方法を共有', icon: '🗣️' },
  { title: 'START', body: '対象者が初期設定〜立ち上げまで実施し、開発スタート', icon: '🚀' },
  { title: '各 STEP レビュー実施', body: '基本は課題ごとにレビュー（STEP16 結合テストは除く）', icon: '🔍' },
  { title: '結合テストまで終了', body: 'STEP16 結合テストの完了をもって開発は一区切り', icon: '✅' },
  { title: 'スキルシート作成面談', body: '案件選定方針を擦り合わせてスキルシートを作成', icon: '📋' },
  { title: 'END', body: '営業に連携してカリキュラム終了', icon: '🎯' },
]" />

:::tip 関連ページ
- スキルシートの作成については [スキルシート作成](./skill-sheet) ページを参照
:::

## リポジトリについて

### 管理オーガニゼーション

[https://github.com/cytech-education](https://github.com/cytech-education)

### 親リポジトリ

[cytech-admin-practice-master](https://github.com/cytech-education/cytech-admin-practice-master.git)

### チームごとのリポジトリ作成手順

<FlowStep :steps="[
  { title: '親リポジトリをクローン', body: 'cytech-admin-practice-master をローカルに取得', icon: '⬇️' },
  { title: 'チーム用リポジトリ（private）を作成', body: 'cytech-education オーガニゼーション配下に作成', icon: '🆕' },
  { title: 'push', body: '親リポジトリの内容をチーム用リポジトリへ push', icon: '⬆️' },
  { title: 'コラボレーター招待', body: '対象ユーザーを write 権限で招待', icon: '👥' },
]" />

## 各種ファイルについて

### 参照先

| 種類 | 用途 |
|------|------|
| **管理フォルダ** | チームごとの情報・WBS・仕様書を集約する Drive フォルダ |
| **テンプレート（サンプル）** | 各種情報ファイル・WBS のひな形 |

:::tip リンクは[リンク集](../links)に集約
実 URL は[ファイル等リンク集](../links)ページにまとめています。
:::

### 準備フロー

<FlowStep :steps="[
  { title: 'チームフォルダを作成', body: '管理フォルダ配下にナンバリングでチーム用フォルダを作成', icon: '📂' },
  { title: '各種情報・WBS をコピー', body: 'テンプレートから「各種情報」「WBS」をチームフォルダにコピー', icon: '📑' },
  { title: '仕様書提出フォルダを作成', body: '各種仕様書提出用のサブフォルダをチームフォルダ内に用意', icon: '🗂️' },
  { title: 'リンクを差し替え', body: '各種情報ファイル内の仕様書・WBS リンクを新しいものに差し替え', icon: '🔗' },
  { title: '基本情報を記入', body: 'リポジトリ・ブランチ・開始日（説明MTG日）・担当 IR・メンバーを記入', icon: '✏️' },
  { title: '編集権限を付与', body: '管理フォルダの編集権限を対象ユーザーに付与', icon: '🔓' },
]" />

## 説明面談について

### 話す内容

<FlowStep :steps="[
  { title: '後半カリキュラムの概要', body: 'コーディング以外（設計・テスト）も含む開発業務を経験してもらう／〜STEP12 は既存ページの改修、STEP13〜 は新規ページの実装／対象は CyTech 管理画面', icon: '📘' },
  { title: 'リポジトリの共有について', body: '共有リポジトリを落としてもらい、README を参考に初期設定〜立ち上げまでをまず実施してもらう', icon: '🐙' },
  { title: '各種情報ファイルの説明', body: '課題（問題集）の中で取り組む課題を説明（一人の場合は Company を担当）／課題ごとにレビュー（STEP16 結合テストは除く）／提出は Chat から／WBS の意味と期限の目安（3 ヶ月）を共有', icon: '📋' },
]" />

### 参考動画

[説明面談の参考動画（Google Drive）](https://drive.google.com/file/d/1YCIbz1riw4k6725ZP6jrnyKqGV59rhGF/view?usp=sharing)

## 各 STEP のレビューについて

- 基本的には**課題ごとにレビュー**を実施（全課題まとめてではない）
- **STEP15（新規実装）は単体テストまで**実施してもらう
- **STEP16 結合テスト**は最後にまとめて実施

## その他

:::tip 運用 Tips
- 管理画面の各ユーザー備考に**管理フォルダの URL** を登録しておくと参照が早い
- スキルシートの作成については [スキルシート作成](./skill-sheet) ページを参照
:::

:::warning 発言に注意
- 本プロジェクトには**有料で個人参加している利用者**も含まれる
- 社内スタッフは不用意な発言に注意
- 料金面や社内事情を話す際は**細心の配慮**を行うこと
:::
