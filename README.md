# test-typescript

## 概要

TypeScriptを試したり遊んだりするリポジトリ

```
# リポジトリ取得
git clone https://github.com/kazyan-public-jl/test-typescript.git

# リポジトリに移動
cd test-typescript

# 必要モジュールのインストール
yarn

# コンパイル
tsc

# 実行確認
node dist/hello.js
```

以上。

## 目的

- TypeScriptを使ってみて、どう感じるか知りたい。

## Goal

### TypeScriptの各種機能を使ってみて、理解できていること

1. typescriptのインストール
2. typescriptのコンパイル方法
3. typescriptから生成したファイルの実行方法

## 参考

- [ドキュメンテーション・TypeScript](https://goo.gl/t22gYp)
- [TypeScriptの型入門 - Qiita](https://goo.gl/QLKfve)
- [TypeScriptを導入する前に『覚悟』したほうが良いこと 4項目 - タオルケット体操](https://goo.gl/2Swz9T)


## 環境構築

### 1. typescriptのインストール

`yarn add` したかったので [Typescriptのコンパイル環境を作成する(webpack 4.0.0) - Qiita](https://goo.gl/Kiq56q) から抜粋
```
yarn add -D ts-loader typescript ts-loader
```

### 2. greeter.ts 実行

tscコマンドが認識されなかったので、自前でaliasを作成。
```
alias tsc='./node_modules/.bin/tsc'
```

webpack.config.js に typescript 変換の記述を追加
```webpack.config.js
// module.rulesにts-loader追加
module:{
    rules:{
        {
        test: /\.ts$/,
        use : 'ts-loader'
        },
    }
}

// extensionsに .ts を追加
resolve: {
    extensions: ['.js','json','jsx','.vue','.ts'],
}
```


## 記事に記載されてなかったので対応したこと

- [npm startがwebpackの不具合で起動しなくなったので修正方法のメモ - Qiita](https://goo.gl/QFy68B)
```
$ yarn start
$ webpack-dev-server --config ./webpack.config.js --env.production --host 0.0.0.0
/Users/hogehoge/kazyan-public-jl/test-typescript/node_modules/ajv/lib/keyword.js:65
      throw new Error('custom keyword definition is invalid: '  + this.errorsText(validateDefinition.errors));
```
↓
```
node_modules/ajv-error/index.js

ajv.addKeyword('errorMessage', {
    ...(略)...
    errors: 'full', // ここが原因
    ...(略)...
}
↓
ajv.addKeyword('errorMessage', {
    ...(略)...
    errors: true, // 一旦回避できた
    ...(略)...
}
```