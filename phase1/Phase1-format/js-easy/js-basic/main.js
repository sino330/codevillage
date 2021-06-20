// こんにちわ、世界！
console.log('Hello,world!')

// 値
100
1.5
-1

// 数値
console.log(100);
console.log(1.5);

// 文字
console.log('Hello')
console.log('ありがとう')

// 配列
console.log(1,2,3,4)

// 真偽値
console.log(true)
console.log(false)

// オブジェクト

console.log({one:1,two:2})

// 変数

const myName='Bbepu'

console.log(myName)

// 変数myNameに'名前'を代入する

const number=100
const isValid=true
const userIds=[1,3,10]

console.log(number)
console.log(isValid)
console.log(userIds)


let leaning
// constは変数を初期化する必要がある
// constは再代入できない
// letは再代入できる
leaning='Ruby'
console.log(leaning)

// 文字列
const breakfast='トースト'

// テンプレート文字列
console.log(`今日のご飯は${breakfast}です。
美味しかった。`)

console.log("今日のご飯は"+ breakfast + "です。\n美味しかった。")

// 配列

const days=['日','月','火','水','木','金','土']

console.log(days[3])
// []配列の中インデックという

console.log(['日', '月', '火', '水', '木', '金', '土'].length);

const nengou=['明治','大正','昭和','平成']
// 要素の追加
nengou.push('令和')
console.log(nengou)

nengou.splice(3,1)

console.log(nengou)

nengou[2]='syouwa'

console.log(nengou)

const num=Math.random()

if (num>=0.5){
    console.log('大きめ')
}　else{
    console.log('小さめ')
}

console.log(`数:${num}`)

if(true){
    console.log('if文はtrueです！')
}

const a=2
const b=3
const c=10
const d=10

console.log(a === b)
console.log(c === d)

console.log(a===b&&c===d)
console.log(a === b || c === d);