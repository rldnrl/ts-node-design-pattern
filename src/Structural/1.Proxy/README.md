# 프록시 패턴
Subject라고 하는 다른 객체에 대한 엑세스를 제어하는 객체이다. 프록시와 Subject는 동일한 인터페이스를 가지며 이를 통해 투명하게 하나를 다른 것으로 바꿀 수 있다. 

<br />

프록시는 다음과 같은 상황에서 유용할 수 있다.
- 데이터 검증: 프록시가 입력을 Subject에 전달하기 전에 입력의 유효성을 검사한다.
- 보안: 프록시는 클라이언트가 작업을 수행할 권한이 있는지 확인하고, 권한이 있는 경우에만 요청을 Subject에게 전달한다.
- 캐싱: 데이터가 아직 캐시에 없는 경우에만 프록시 작업이 Subject에서 실행되도록 프록시는 내부에 캐시를 유지한다.
- 느린 초기화: Subject을 생성하는데 많은 비용이 드는 경우, 프록시는 실제로 필요할 때까지 이를 지연시킬 수 있다.
- 기록: 프록시는 메서드 호출과 관련 매개 변수를 가로채서 이를 기록한다.
- 원격 객체: 프록시는 원격 개체를 가져와서 로컬로 표시할 수 있다.

<br />

## 객체 컴포지션
컴포지션은 기능을 확장해서 사용하기 위해 객체를 다른 객체와 결합하는 기술이다. 특정 프록시 패턴의 경우 Subject와 동일한 인터페이스를 가진 객체가 생성되고 Subject애 대한 참조 인스턴스 변수나 클로저 변수의 형태로 프록시 내부에 저장된다. Subject는 생성시 사용자가 주입시키거나 프록시 자체에서 생성될 수 있다.

[`StackCalculator`](https://github.com/vueveloper/ts-node-design-pattern/blob/main/src/Structural/1.Proxy/StackCalculator.ts)<br/>
StackCalculator은 0으로 나누면 Infinity를 출력한다.

<br />

[`SafeCalculator`](https://github.com/vueveloper/ts-node-design-pattern/blob/main/src/Structural/1.Proxy/SafeCalculator.ts)<br/>
SafeCalculator은 프록시 패턴을 이용해서 0으로 나누면 에러를 발생시키도록 출력했다.

컴포지션을 사용하여 프록시 패턴을 구현하려면 기능을 변경하려는 함수 `divide()`를 가로채고, 그렇지 않은 것들은 Subject에 위임한다.

<br />

[`createSafeCalculator`](https://github.com/vueveloper/ts-node-design-pattern/blob/main/src/Structural/1.Proxy/createSafeCalculator.ts)<br/>
createCalculator는 객체 리터럴과 빌더 패턴을 이용해서 구현한 프록시 패턴이다.

<br />

### 객체 확장(Object augmentation)
객체가 가진 몇 가지 함수를 프록시하는 가장 간단하고 일반적인 방법이다. 이것은 함수를 프록시의 구현으로 대체하여 Subject를 직접 수정하는 작업들을 포함하고 있다.

<br />

### 내장 프록시
[`internalProxy`](https://github.com/vueveloper/ts-node-design-pattern/blob/main/src/Structural/1.Proxy/internalProxy.ts)<br/>
JavaScript 내장 프록시를 이용한 안전한 계산기 만들기.

```ts
const proxy = new Proxy(target, handler)
```
