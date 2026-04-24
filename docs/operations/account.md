# アカウント発行・管理

CyTech 各種アカウントの発行フローと、発行後の管理方法をまとめています。

## ToC アカウント 発行フロー

<Mermaid id="flow-account-toc" :code="`flowchart LR
  A([カウンセラー]) -->|発行依頼| B[GL<br/>紀谷]
  B -->|振り分け| C[担当 IR]
  C --> D[アカウント発行]
  D --> E[カウンセリング<br/>シートに追記]
  E --> F[初回面談の<br/>案内メール送付]
  F --> G([利用開始])
  classDef start fill:#2383E2,stroke:#2383E2,color:#fff;
  classDef goal fill:#8C5CE6,stroke:#8C5CE6,color:#fff;
  class A start
  class G goal
`" />

## アカウント発行方法

<Tabs :tabs="[
  { label: '社内', key: 'internal', icon: '🏢' },
  { label: 'ToC', key: 'toc', icon: '🧑' },
  { label: 'ToB', key: 'tob', icon: '🏛️' },
]">

<template #internal>

**発行者**：営業担当

<FlowStep :steps="[
  { title: '営業担当がアカウントを発行', icon: '🔑' },
  { title: 'フォローアップシートに情報を追記', icon: '📋' },
]" />

</template>

<template #toc>

**発行者**：担当 IR（紀谷から振り分け）

<FlowStep :steps="[
  { title: 'カウンセラーから紀谷に発行依頼', icon: '📨' },
  { title: '紀谷が各 IR に発行依頼を振り分け', icon: '🔀' },
  { title: '担当 IR がアカウント発行', icon: '🔑' },
  { title: 'カウンセリングシートに追記', body: '開始日・ユーザーID・念の為パスワード', icon: '📋' },
  { title: '初回面談の案内メールを送付', icon: '📧' },
]" />

**アカウント作成会社**：株式会社 TheNewGateToC

:::danger 管理者アカウント情報
ToC 管理者アカウントのメールアドレス・パスワードは**マニュアル外で別管理**しています。
必要な場合は GL（紀谷）までご連絡ください。
（※ Git 管理される本マニュアルに直書きしない運用です）
:::

</template>

<template #tob>

- 発行方法：**現時点では未定**（今後決定予定）

</template>

</Tabs>

## アカウント管理方法（新 CyTech）

::: info
旧 CyTech については**従来通り**の運用を継続します。
:::

### 運用手順

<FlowStep :steps="[
  { title: '営業が対象ユーザーにアカウントを付与', icon: '🔑' },
  { title: 'フォローアップシート（新 CyTech）に付与情報を記入', icon: '📝' },
  { title: '入力された情報は自動的に評価基準シート「新 Engineer 管理」に反映', icon: '🔁' },
  { title: '以降は評価基準シートで一括管理（※ 新 CyTech のみ）', icon: '📊' },
  { title: '評価基準シートで提出日・回数・合格日を入力', body: '合格日を入れるとセルの色が変化し、完了状況が一目で分かる', icon: '✅' },
  { title: 'F 列に担当インストラクター名を必ず入力', icon: '👤' },
]" />

## 全体的な管理

- **管理スプレッドシート**：Google スプレッドシート（全体管理） — [リンク集](../links)参照
- **定期作業**：
  - データベースから追加ユーザーを定期的に抽出し、上記スプレッドシートへ**手動で追加**
  - 追加後、**担当割り振り**を行う

### 追加ユーザー抽出用 SQL

以下の SQL をデータベースに対して実行し、新規ユーザーを抽出する。`user_id` は
シートに記載されている ID 以降で調整する。

```sql
SELECT
  u.user_id,
  CONCAT(u.last_name, u.first_name) AS fullName,
  CONCAT(u.last_name_kana, u.first_name_kana) AS kana,
  u.email_address,
  u.created_at
FROM
  users u
JOIN
  user_permissions up
ON
  u.user_id = up.user_id
-- user_id はシートに記載されている ID 以降に調整
WHERE
  u.user_id >= 172
  AND (up.permission_id = 8 OR up.permission_id = 9)
ORDER BY
  u.user_id ASC;
```
