---
title: 테스트
category: 2015
order: 1
lang: ko
link-ref: test
---

## h2 헤더

### h3 헤더

#### h4 헤더

##### h5 헤더

###### h6 헤더

## 가로선

---

## 강조

**이건 볼드**

_요건 이탤릭_

~~이번엔 취소선~~

## 인용문

> 인용문도 nest 구조가 가능합니다...
>
> > ...크거나 같음(>) 기호를 더 넣어서 말이죠...
> >
> > > ...기호 사이에 스페이스바를 넣어도 됩니다.

## 목록

순서없는거

-   `+`, `-`, 또는 `*`를 앞에 붙여서 목록을 만듭니다
-   하위 목록은 스페이스 2개를 쓰면 됩니다:
    -   마커를 바꾸면 새로운 목록을 시작할 수 있습니다:
        -   Ac tristique libero volutpat at
        *   Facilisis in pretium nisl aliquet
        -   Nulla volutpat aliquam velit
-   어때요, 아주 쉽죠?

순서있는거

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## 코드

인라인으로 `code`

인덴트로 코드 작성

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

코드 "울타리(?)"

```
Sample text here...
```

코드 강조

```js
var foo = function(bar) {
    return bar++;
};

console.log(foo(5));
```

## 표

| 옵션   | 설명                                                                      |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

우측 정렬

|   옵션 |                                                                      설명 |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## 링크

[링크](http://dev.nodeca.com)

[제목있는 링크](http://nodeca.github.io/pica/demo/ "제목임당!")

## 이미지

![미니언](https://octodex.github.com/images/minion.png)
![이게 뭐지?](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

링크처럼 이미지도 하단 주소 첨부가 가능합니다

![대체 텍스트][id]

URL을 문서 나중 부분에 쓰는거죠:

[id]: https://octodex.github.com/images/dojocat.jpg "사무냥이"

### [주석](https://github.com/markdown-it/markdown-it-footnote)

주석 1 링크[^first].

주석 2 링크[^second].

중복 주석 참조[^second].

[^first]: 주석은 **마크업이 적용됩니다**

    그리고 여러 단락을 쓸 수 있죠.

[^second]: 주석 텍스트.

### [정의 목록](https://github.com/markdown-it/markdown-it-deflist)

용어 1

: 정의 1
좀 길게 씀.

용어 2 _인라인 마크업_

: 정의 2

        { some code, part of Definition 2 }

    정의 2의 세 번째 단락.

---
