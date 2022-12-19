# typescript
노마드코더 typescript

→ 자바스크립트가 가진 여러 문제를 해결하고 보완하기 위해 만들어진 언어

→ node.js 설치 필요

→ 왜 타입? 안정성. 타입 안정성! → 에러 감소 생산성 증가

→ 자바스크립트 : 타입 안정성 존재X 

→ 자바스크립트 : 유연한 코드, 실수를 피할 수 있도록 만들어져 있지 않다

→ 최악의 에러 : 런타임 에러 (실행할 때 발생하는 에러)

→ 런타임 : 유저가 코드를 실행하는 시간

→ 강타입 프로그래밍 언어(자바스크립트로 변환)

---

## 

→ 타입스크립트의 보호장치는 자바스크립트로 변환되기 전에 발생

⭐ Typescript

└ Strongly typed programming

└ 컴파일 시 javascript로 변환됨

└ 에러가 발생 → 컴파일 X

---

## 

⭐ Type 시스템

└ 명시적 정의(변수 선언 시 타입 정의)

let a: boolean = "x"

→ 🚫 boolean 타입에 string타입 할당 불가 알림

└ 변수만 생성(타입 추론)

let b = "hello"

→ b가 string 타입이라고 추론

b = 1

→ 🚫 string 타입에 number타입 할당 불가 알림

→ 명시적 정의보다 추론하도록 하는 것이 효율적

---

📌 Types of TS(기본)

✅ 배열: 자료형[]

✅ 숫자: number

✅ 문자열: string

✅ 논리: boolean

✅ optional

```jsx
const player : {
    name : string,
    age?:number
} = {
    name:"nico",
    
}
```

const player: {

name: string;

age?: number | undefined;

}

✅ Alias(별칭) 타입 : 어느 타입이나 적용 가능

```jsx
type Age = number;
type Name = string;
type Player = {
	name:Name,
	age ?: Age
}

const nico : Player = {
	name:"nico"
}

const lynn : Player = {
	name:"lynn",
	age : 12
}
```

⭐ 함수에서는 어떻게 쓸까?

```jsx
function playerMaker(name:string) : Player {
	return {
		name:name
		//name
	}
}

// 화살표함수 사용시
const playerMaker = (name:string) : Player =>({name})
// 함수의 리턴타입 정의 : Player
const nico = playerMaker("nico")
nico.age = 12
```

---

📌 Types of TS(part 2)

✅ readonly 사용하기 ( 읽기 전용 ) : 최초 선언 후 수정 불가

⇒ immutaility ( 불변성 ) 부여! 

→ 배열 등 모든 타입에서 사용 가능!

```jsx
type Player = {
	readonly name : string,
	age?: number
}

nico.name = "las" // 오류 발생

```

✅ Tuple

⇒ array를 생성할 수 있는 타입

⇒ 최소한의 길이, 특정 위치에 특정 타입이 존재해야 함

⇒ 항상 정해진 갯수의 요소를 가져야 하는 array 지정 

```jsx
["nico", 12, false]
const player: [string, number, boolean] = ["nico", 1, true]

player[0] = 1 // 불가 ( 0번째 인덱스 : string)

// readonly 결합 가능
const player : readonly[string, number, boolean] = ["nico", 1, true]
player[0] = "hi" // 불가 (readonly!)

```

✅ undefined, null, any

any: 아무 타입( typescript에서 빠져나오고 싶을 때 사용)

⇒ 빈 값을 주면 기본값으로 any 

undefined: 선언X 할당X

null: 선언O 할당X

```jsx
let a : undefined = undefined
let b : null = null

const a : any[] = [1,2,3,4]
const b : any = true
a + b // 허용 (any를 사용함으로써 Typescript의 보호장치에서 빠져나왔기 때문)
```

---

📌 Types of TS(part 3)

✅ unknown

```jsx
let a:unknown;
// 변수의 타입을 미리 알지 못할 때 unknown 사용
// 사용할 때마다 변수타입 지정을 요구
// 확인 작업 필요!

let b = a + 1 // 불가 ( a의 타입 불확실 )

if(typeof a ==='number'){
    let b = a + 1
}
if(typeof a ==="string"){
    let b = a.toUpperCase()
}
```

✅ void

```jsx
// void : 아무것도 return 하지 않는 함수를 대상으로 함
// 따로 지정해줄 필요 없음

function hello(){
    console.log('x')
}

// void : 비어있음(아무것도 없다)
```

✅ never

```jsx
// never : 함수가 절대 return하지 않을 때
function hello():never{
    // return "X" 불가
    throw new Error("x")
}

// 타입이 2가지일 경우 (string or number)
function hello2(name:string|number){
    if(typeof name === "string"){
        // name : string
    } else if(typeof name ==="number"){
        // name : number
    } else {
        // name : never
        // 절대로 실행되지 않아야 한다.
    }
}
```
