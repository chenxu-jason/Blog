# web3博客



智能合约

### 代码块：

```
// 写法一：
const promise = new Promise((resolve, reject) => {
  // 调用resolve，那么then传入的回调会被执行
  resolve("then执行")
  // 调用reject， 那么catch传入的回调会被执行
  reject("catch执行")
})

promise.then(res => {
  console.log(res)
},err => {
  console.log(err)
})

```

