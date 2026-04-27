# フロー

CyTech 事業部における学習開始から Java 連携までの全体フローをまとめています。サービス区分（旧CT / 新CT）と契約形態（社内 / ToB）の組み合わせごとに 4 パターンを定義しています。

## フロー一覧

<Tabs :tabs="[
  { label: '旧CT（社内）', key: 'old-internal', icon: '🏢' },
  { label: '旧CT（ToB）', key: 'old-tob', icon: '🤝' },
  { label: '新CT（社内）', key: 'new-internal', icon: '🏢' },
  { label: '新CT（ToB）', key: 'new-tob', icon: '🤝' },
]">

<template #old-internal>

:::warning 新規受け入れ停止中
旧CT（社内）の新規受け入れは行っていません。
:::

<FlowStep :steps="[
  { title: 'STEP8 終了', icon: '🏁' },
  { title: 'スキルチェック面談実施', icon: '🗣️' },
  { title: 'チーム開発開始', body: '詳細設計・実装・単体テストを実施', icon: '🚀' },
  { title: 'チーム開発実装終了', icon: '✅' },
  { title: 'スキルシート作成面談実施', icon: '📝' },
  { title: 'スキルシート作成', icon: '📋' },
  { title: 'Sales 連携', icon: '🤝' },
  { title: 'Java 追加連携', icon: '☕' },
  { title: 'チーム開発終了', icon: '🎯' },
  { title: 'Java スタート', icon: '🚀' },
]" />

</template>

<template #old-tob>

<FlowStep :steps="[
  { title: 'STEP8 終了', icon: '🏁' },
  { title: 'スキルチェック後移行確認', icon: '🔍' },
  { title: 'スキルチェック面談実施', icon: '🗣️' },
  { title: 'チーム開発開始', body: '詳細設計・実装・単体テストを実施（チーム開発参加の場合）', icon: '🚀' },
  { title: 'チーム開発実装終了', body: 'チーム開発参加の場合', icon: '✅' },
  { title: 'スキルシート作成面談実施', icon: '📝' },
  { title: 'スキルシート作成', icon: '📋' },
  { title: 'Sales 連携', icon: '🤝' },
  { title: 'チーム開発終了', body: 'チーム開発参加の場合', icon: '🎯' },
  { title: 'Java スタート', icon: '🚀' },
]" />

:::tip チーム開発に参加しない場合
スキルチェック面談実施後、4・5（チーム開発）をスキップして 6（スキルシート作成面談）へ進む。
:::

</template>

<template #new-internal>

<FlowStep :steps="[
  { title: 'アカウント作成', body: 'Sales がアカウントを発行', icon: '🪪' },
  { title: '初回面談', icon: '🗣️' },
  { title: 'STEP9 終了', icon: '🏁' },
  { title: '後半カリキュラム説明面談実施', icon: '📘' },
  { title: '後半カリキュラム開始', icon: '🚀' },
  { title: '後半カリキュラム終了', icon: '✅' },
  { title: 'スキルシート作成面談実施', icon: '📝' },
  { title: 'スキルシート作成', icon: '📋' },
  { title: 'Sales 連携', icon: '🤝' },
  { title: 'Java 追加連携', icon: '☕' },
  { title: 'Java スタート', icon: '🚀' },
]" />

</template>

<template #new-tob>

<FlowStep :steps="[
  { title: 'アカウント作成', body: '企業担当者がアカウントを発行', icon: '🪪' },
  { title: '初回面談', icon: '🗣️' },
  { title: 'STEP9 終了', icon: '🏁' },
  { title: '後半カリキュラム説明面談実施', icon: '📘' },
  { title: '後半カリキュラム開始', icon: '🚀' },
  { title: '後半カリキュラム終了', icon: '✅' },
  { title: 'Sales 報告 & スキルシート作成方針確認', icon: '📊' },
  { title: 'スキルシート作成面談実施', icon: '📝' },
  { title: 'スキルシート作成', icon: '📋' },
  { title: 'Sales 連携', icon: '🤝' },
]" />

:::warning アカウントの利用停止
当月末でアカウントの利用停止処理を行うこと。
:::

</template>

</Tabs>

## 備考

- **Sales 確認・連携の窓口**
  - 社内 → 担当拠点の Sales
  - ToB → CyTech 事業部 Sales
- **ToB ユーザー途中解約の場合**
  - 担当者が利用停止申請を行い、総務部が承認・停止を行う
