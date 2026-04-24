# AI による半自動レビュー

AI ツールを活用してテストレビューを半自動化する方法です。

## 想定利用ツール

- **Antigravity**
- **Cursor**
- **Claude Code**

## フロー

1. **レビュー用ディレクトリをクローン**しておく

   ```bash
   git clone https://github.com/cytech-education/for-review.git
   ```

2. **レビュー対象のリポジトリ**を、レビュー用ディレクトリにクローン

3. **Antigravity / Cursor / Claude Code** でレビュー依頼を指示

4. **レビューバック文**がプレーンテキストファイルとして作成される
   - 確認・調整したうえでユーザーに返答

::: tip 詳細な使い方
詳しい使い方は、レビュー用ディレクトリの **README** に記載されています。

<https://github.com/cytech-education/for-review>
:::

## 関連

- [テスト](./test) — テスト対応の全体フロー
- [テストレビューカンペ](./review-template) — STEP 別のレビュー観点
