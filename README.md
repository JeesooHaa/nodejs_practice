# Node.js 

callback...

---

```bash
cd <dir name> 
npm install
node main 
```

---

##  Lesson 3 

p.70, p.71 

message => messages 

message.js  => messages.js

printMessage.js => printMessages.js

## Lesson 4 

p.83 

npm i http-status-code -S => npm i http-status-codes -S

## Lesson 10 

```ejs
<% include partials/navigation %>
```

책의 예제처럼 입력하면 `SyntaxError` 가 발생한다. 

```ejs 
<%- include ("partials/navigation") %>
```

책의 예제코드는 ejs 2 버전을 기준으로 한다. ejs 3 버전에서는 기존 방식을 삭제했다고 한다. 현재 ejs는 3 버전이기 때문에 위와 같이 바꿔써야 에러가 나지 않는다. 

## Lesson 11

p.167

npm install http-status-code --save => npm install http-status-codes --save

p.169 

(errors, ...) => (error, ...)