# 第12回デスマコロシアム 解答チェックツール

:ghost: :boom: :neckbeard:
:ghost: :boom: :neckbeard:

## :hammer: 概要
第12回デスマコロシアムの問題の解答をideone上でチェックするツールです。  
Greasemonkeyのユーザースクリプトなので、ブラウザがGreasemonkeyに対応している必要があります。  

Windows7 + GoogleChromeおよびFireFoxの最新バージョンで動作確認済みです。  

## :cloud::arrow_down: インストール方法
### GoogleChromeの場合
Greasemonkey のかわりに Tampermonkey が必要です。
Play Store からインストールしてください。

[Tampermonkey Install](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)

* deathma12_answer_check.user.js を開き、ソース画面右上の「Raw」ボタンをクリックします
* Tampermonkey の確認画面が開くので、「インストール」します
* 以上で設定完了です

### FireFoxの場合
※あらかじめGreasemonkeyのアドオンをインストールしておきます

* 当ページの画面右側にある「Download ZIP」ボタンをクリックします。
* ダウンロードしたZIPを解凍します。
* FireFoxを起動します。
* Greasemonkeyのメニューからユーザースクリプトの管理を選択します。
* 管理のタブがアクティブで表示されている状態で、先ほどダウンロードした「deathma12_answer_check.user.js」をドラッグ＆ドロップします。
* 以上で設定完了です

## :scroll: 利用方法
* ブラウザを起動します
* コンソールを表示します（ChromeならCtrl+Shift+J、 FireFoxならCtrl+Shift+K）
* ideoneで任意のコードを実行します
* 結果画面の表示が終わったら画面のどこかをクリックします
* コンソールに結果が表示されます。正しければ「OK」。間違ってれば「NG」と表示されます

※出力内容や出力形式を変えたければ、ダウンロードした「deathma12_answer_check.user.js」を変更してから  
ユーザースクリプトをインストールしてください。  
より使い易くしたツールを拡散して配布したければ当プロジェクトをフォークしてください。
