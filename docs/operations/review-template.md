# テストレビューカンペ

STEP 別のテストレビュー時に参照する手順・コマンド集です。

## STEP 9 Laravel

### プロジェクト立ち上げまで

Git からクローンしてきたら、プロジェクトルートで以下コマンドを実行します。

```bash
composer require laravel/sail --dev
php artisan sail:install
./vendor/bin/sail up -d
```

### DB の確認

上記で `sail` が立ち上がっている状態で、以下コマンドでコンテナに入ります。

```bash
docker-compose exec mysql bash
```

コンテナに入れたら、以下コマンドで MySQL に接続します。

```bash
mysql -u sail -p
```

::: info 注意
- `sail` となっているユーザー名は `.env` ファイルに記載のものと合わせること
- コマンド実行後、`.env` に記載されているパスワードを入力
:::

<!-- TODO: 他の STEP（1〜8）のカンペを順次追加 -->

## 今後追記予定

- STEP 1〜8 の各カンペ
- フロントエンド（Vue / React）系 STEP のカンペ
- DB 設計レビュー時のチェックポイント
