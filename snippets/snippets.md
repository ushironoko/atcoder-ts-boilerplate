## stdio

### 標準入力を受け取るやつ

```ts
import * as fs from "fs";
var input = fs.readFileSync("/dev/stdin", "utf8");
```

## 正規表現

### alphabet 系正規表現で出しわけするやつ

```ts
var re = /[A-Z]+/;
console.log(re.test(input) ? "A" : "a");
```
