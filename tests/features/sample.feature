# language: ja
フィーチャ: 表示確認

  シナリオ: TOPページを表示
    前提 ホームページを表示している
    もし ホームページへ移動する
    ならば レスポンスに "TOP" が含まれていること

  シナリオ: HELLOページを表示
    前提 ホームページを表示している
    もし "/hello/hoge" へ移動する
    ならば レスポンスに "hoge" が含まれていること