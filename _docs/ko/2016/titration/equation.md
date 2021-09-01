---
title: 산-염기 적정 시뮬레이션/방정식 유도
category: 2016
lang: ko
link-ref: titration/equation
permalink: /ko/2016/titration/equation/
layout: item

hidden_category: true
duration: "2016.10~12, 2017.03~06"
write_time: 
tag:
  - "Java"
  - "Swing"
  - "Chemistry"
  - "Titration"
  - "Mathematics"
  - "Newton's Method"

write_time: 2021-09-01 23:39:52+09:00
---

### 방정식 유도

분석화학 기법을 사용하여 적정 실험을 분석한 내용을 수소 이온의 농도 $\left[H^+\right]=x$와 첨가한 표준 용액의 부피 $v$에 대한 방정식으로 유도하는 과정이다.

#### 1가 산-1가 염기

##### 농도를 식으로 변환

[원문](..)에 따르면 얻은 방정식은 아래와 같다.

$$
\left[H^+\right]+\left[BH^+\right]=\left[A^-\right]+\left[OH^-\right]\\
\left[HA\right]_0=\left[HA\right]+\left[A^-\right]\\
\left[B\right]_0=\left[B\right]+\left[BH^+\right]\\
K_a=\frac{\left[H^+\right]\left[A^-\right]}{\left[HA\right]}\\
K_b=\frac{\left[BH^+\right]\left[OH^-\right]}{\left[B\right]}\\
$$

그리고 미지 용액 $VmL$에 표준 용액 $vmL$를 첨가한 상태를 가정할 것이므로 해당 시점에서 HA와 A<sup>-</sup>의 농도의 합은 $\frac{V}{V+v}\left[HA\right]_0$이다. 또한 B와 BH<sup>+</sup>의 농도의 합은 $\frac{v}{V+v}\left[B\right]_0$이다.

이제 식을 유도하는 과정을 간단하게 하기 위해 일부 식을 문자로 치환한다.

$$
\begin{aligned}
K_a&\rightarrow a\\
K_b&\rightarrow b\\
K_w&\rightarrow w\\
\frac{V}{V+v}\left[HA\right]_0&\rightarrow A\\
\frac{v}{V+v}\left[B\right]_0&\rightarrow B\\
\left[H^+\right]&\rightarrow x\\
\left[OH^-\right]&\rightarrow y=\frac{w}{x}
\end{aligned}
$$

먼저 이온화 상수와 질량 균형을 사용하여 A, B와 관련된 화학종의 농도를 식으로 표현한다.

$$
\begin{aligned}
a&=\frac{x\left[A^-\right]}{\left[HA\right]}\\
a\left[HA\right]&=x\left[A^-\right]\\
a(A-\left[A^-\right])&=x\left[A^-\right]\\
\left[A^-\right]&=\frac{Aa}{x+a}\\
\left[HA\right]&=A-\left[A^-\right]\\
&=\frac{Ax}{x+a}
\end{aligned}
$$

같은 방식으로, $\left[BH^+\right]=\frac{Bb}{y+b}$, $\left[B\right]=\frac{By}{y+b}$가 된다.

##### 방정식 유도

앞에서 구한 식을 사용하여 전하 균형식을 수소 이온 농도에 대한 다항방정식으로 유도한다.

$$
\begin{aligned}
\left[H^+\right]+\left[BH^+\right]&=\left[OH^-\right]+\left[A^-\right]\\
x+\frac{Bb}{y+b}&=y+\frac{Aa}{x+a}\\
x+\frac{Bbx}{w+bx}&=\frac{w}{x}+\frac{Aa}{x+a}
\end{aligned}
$$

위 식의 분모에 있는 모든 식을 곱하여 분수를 없앤다.

$$
\begin{aligned}
&x^2(x+a)(w+bx)+Bbx^2(x+a)\\
&=w(x+a)(w+bx)+Aax(w+bx)
\end{aligned}
$$

모두 정리한 후 좌변으로 모든 항을 옮기고 x의 차수에 따라 계수를 정리한다.

$$
\begin{aligned}
&bx^4+(ab+w)x^3+awx^2+Bbx^3+aBbx^2\\
&-bwx^2-(ab+w)wx-aw^2-Aabx^2-Aawx=0
\end{aligned}\\
\begin{aligned}
&bx^4+(ab+w+Bb)x^3+(aw+aBb-bw-Aab)x^2\\
&-(abw+w^2+Aaw)x-aw^2=0
\end{aligned}
$$

양변을 b로 나누어 최고차항의 계수를 1로 만든다. 여기서 $b'=\frac{w}{b}$로 정의한다.

$$
\begin{aligned}
&x^4+(a+b'+B)x^3+(ab'+aB-w-Aa)x^2\\
&-(aw+b'w+Aab')x-ab'w=0
\end{aligned}
$$

#### 2가 산-1가 염기

##### 농도를 식으로 변환

[원문](..)에 따르면 얻은 방정식은 아래와 같다.

$$
\left[H^+\right]+\left[BH^+\right]=\left[HA^-\right]+2\left[A^{2-}\right]+\left[OH^-\right]\\
\left[H_2A\right]_0=\left[H_2A\right]+\left[HA^-\right]+\left[A^{2-}\right]\\
\left[B\right]_0=\left[B\right]+\left[BH^+\right]\\
K_{a1}=\frac{\left[H^+\right]\left[HA^-\right]}{\left[H_2A\right]}\\
K_{a2}=\frac{\left[H^+\right]\left[A^{2-}\right]}{\left[HA^-\right]}\\
K_b=\frac{\left[BH^+\right]\left[OH^-\right]}{\left[B\right]}
$$

그리고 위 경우와 마찬가지로 미지 용액 $VmL$에 표준 용액 $vmL$를 첨가한 상태를 가정할 것이므로 A 관련 화학종의 농도 합은 $\frac{V}{V+v}\left[H_2A\right]_0$, B 관련 화학종의 농도 합은 $\frac{v}{V+v}\left[B\right]_0$이다.

이제 식을 유도하는 과정을 간단하게 하기 위해 일부 식을 문자로 치환한다.

$$
\begin{aligned}
K_{a1}&\rightarrow a\\
K_{a2}&\rightarrow a'\\
K_b&\rightarrow b\\
K_w&\rightarrow w\\
\frac{V}{V+v}\left[H_2A\right]_0&\rightarrow A\\
\frac{v}{V+v}\left[B\right]_0&\rightarrow B\\
\left[H^+\right]&\rightarrow x\\
\left[OH^-\right]&\rightarrow y=\frac{w}{x}
\end{aligned}
$$

이온화 상수와 질량 균형을 사용하여 A, B와 관련된 화학종의 농도를 식으로 표현한다.

$$
\text{Let }\alpha=\left[HA^-\right],\beta=\left[A^{2-}\right]\\
\rightarrow \left[H_2A\right]=A-\alpha-\beta\\
\begin{aligned}
a&=\frac{x\alpha}{A-\alpha-\beta}\\
a'&=\frac{x\beta}{\alpha}\\
\beta&=\frac{a'\alpha}{x}\\
a(A-\alpha-\frac{a'\alpha}{x})&=x\alpha\\
Aax-a\alpha x-aa'\alpha&=x^2\alpha\\
\alpha&=\frac{Aax}{x^2+ax+aa'}\\
\beta&=\frac{a'\alpha}{x}\\
&=\frac{Aaa'}{x^2+ax+aa'}
\end{aligned}
$$

그리고 염기는 그대로 1가이므로 $[BH^+]=\frac{Bb}{y+b}$, $[B]=\frac{By}{y+b}$이다.

##### 방정식 유도

앞에서 구한 식을 사용하여 전하 균형식을 수소 이온 농도에 대한 다항방정식으로 유도한다.

$$
\begin{aligned}
\left[H^+\right]+\left[BH^+\right]&=\left[OH^-\right]+\left[HA^-\right]+2\left[A^{2-}\right]\\
x+\frac{Bb}{y+b}&=y+\frac{Aax}{x^2+ax+aa'}+2\frac{Aaa'}{x^2+ax+aa'}\\
x+\frac{Bbx}{w+bx}&=\frac{w}{x}+\frac{Aax}{x^2+ax+aa'}+2\frac{Aaa'}{x^2+ax+aa'}
\end{aligned}
$$

위 식의 분모에 있는 모든 식을 곱하여 분수를 없앤다.

$$
\begin{aligned}
&x^2(x^2+ax+aa')(w+bx)+Bbx^2(x^2+ax+aa')\\
&=w(x^2+ax+aa')(w+bx)+Aa(x+a')x(w+bx)
\end{aligned}
$$

모두 정리한 후 좌변으로 모든 항을 옮기고 x의 차수에 따라 계수를 정리한다.

$$
\begin{aligned}
&bx^5+abx^4+wx^4+aa'bx^3+awx^3+aa'wx^2\\
&+Bbx^4+aBbx^3+aa'Bbx^2-bwx^3-abwx^2\\
&-w^2x^2-aa'bwx-aw^2x-aa'w^2\\
&-Aabx^3-Aawx^2-Aaa'bx^2-Aaa'wx=0
\end{aligned}\\
\begin{aligned}
&bx^5+(ab+Bb+w)x^4+(aa'b+aw+aBb-bw-Aab)x^3\\
&+(aa'w+aa'Bb-abw-w^2-Aaw-Aaa'b)x^2\\
&-(aa'bw+aw^2+Aaa'w)x-aa'w^2=0
\end{aligned}
$$

양변을 b로 나누어 최고차항의 계수를 1로 만든다. 마찬가지로 $b'=\frac{w}{b}$로 정의한다.

$$
\begin{aligned}
&x^5+(a+b'+B)x^4+(aa'+ab'+aB-w-Aa)x^3\\
&+(aa'b'+aa'B-aw-b'w-Aab'-Aaa')x^2\\
&-(aa'w+ab'w+Aaa'b')x-aa'b'w=0
\end{aligned}
$$

#### 3가 산-1가 염기

##### 농도를 식으로 변환

[원문](..)에 따르면 얻은 방정식은 아래와 같다.

$$
\begin{aligned}
&\left[H^+\right]+\left[BH^+\right]\\
&=\left[H_2A^-\right]+2\left[HA^{2-}\right]+3\left[A^{3-}\right]+\left[OH^-\right]
\end{aligned}\\
\left[H_3A\right]_0=\left[H_3A\right]+\left[H_2A^-\right]+\left[HA^{2-}\right]+\left[A^{3-}\right]\\
\left[B\right]_0=\left[B\right]+\left[BH^+\right]\\
K_{a1}=\frac{\left[H^+\right]\left[H_2A^-\right]}{\left[H_3A\right]}\\
K_{a2}=\frac{\left[H^+\right]\left[HA^{2-}\right]}{\left[H_2A^-\right]}\\
K_{a3}=\frac{\left[H^+\right]\left[A^{3-}\right]}{\left[HA^{2-}\right]}\\
K_b=\frac{\left[BH^+\right]\left[OH^-\right]}{\left[B\right]}
$$

마찬가지로 미지 용액 $VmL$에 표준 용액 $vmL$를 첨가한 상태를 가정할 것이므로 A 관련 화학종의 농도 합은 $\frac{V}{V+v}\left[H_3A\right]_0$, B 관련 화학종의 농도 합은 $\frac{v}{V+v}\left[B\right]_0$이다.

이제 식을 유도하는 과정을 간단하게 하기 위해 일부 식을 문자로 치환한다.

$$
\begin{aligned}
K_{a1}&\rightarrow a\\
K_{a2}&\rightarrow a'\\
K_{a3}&\rightarrow a''\\
K_b&\rightarrow b\\
K_w&\rightarrow w\\
\frac{V}{V+v}\left[H_3A\right]_0&\rightarrow A\\
\frac{v}{V+v}\left[B\right]_0&\rightarrow B\\
\left[H^+\right]&\rightarrow x\\
\left[OH^-\right]&\rightarrow y=\frac{w}{x}
\end{aligned}
$$

이온화 상수와 질량 균형을 사용하여 A, B와 관련된 화학종의 농도를 식으로 표현한다.

$$
\text{Let }\alpha=\left[H_2A^-\right],\beta=\left[HA^{2-}\right],\gamma=\left[A^{3-}\right]\\
\rightarrow \left[H_3A\right]=A-\alpha-\beta-\gamma\\
\begin{aligned}
a&=\frac{x\alpha}{A-\alpha-\beta-\gamma}\\
a'&=\frac{x\beta}{\alpha}\\
a''&=\frac{x\gamma}{\beta}\\
\beta&=\frac{a'\alpha}{x}\\
\gamma&=\frac{a''\beta}{x}\\
a(A-\alpha-\frac{a'\alpha}{x}-\frac{a'a''\alpha}{x^2})&=x\alpha\\
Aax^2-a\alpha x^2-aa'\alpha x-aa'a''&=x^3\alpha\\
\alpha&=\frac{Aax^2}{x^3+ax^2+aa'x+aa'a''}\\
\beta&=\frac{a'\alpha}{x}\\
&=\frac{Aaa'x}{x^3+ax^2+aa'x+aa'a''}\\
\gamma&=\frac{a''\beta}{x}\\
&=\frac{Aaa'a''}{x^3+ax^2+aa'x+aa'a''}
\end{aligned}
$$

그리고 염기는 그대로 1가이므로 $[BH^+]=\frac{Bb}{y+b}$, $[B]=\frac{By}{y+b}$이다.

##### 방정식 유도

앞에서 구한 식을 사용하여 전하 균형식을 수소 이온 농도에 대한 다항방정식으로 유도한다.

$$
\begin{aligned}
\left[H^+\right]+\left[BH^+\right]&=\left[OH^-\right]+\left[H_2A^-\right]\\
&+2\left[HA^{2-}\right]+3\left[A^{3-}\right]\\
x+\frac{Bb}{y+b}&=y+\frac{Aax^2}{x^3+ax^2+aa'x+aa'a''}\\
&+2\frac{Aaa'x}{x^3+ax^2+aa'x+aa'a''}+3\frac{Aaa'a''}{x^3+ax^2+aa'x+aa'a''}\\
x+\frac{Bbx}{w+bx}&=\frac{w}{x}+\frac{Aax^2}{x^3+ax^2+aa'x+aa'a''}\\
&+2\frac{Aaa'x}{x^3+ax^2+aa'x+aa'a''}+3\frac{Aaa'a''}{x^3+ax^2+aa'x+aa'a''}
\end{aligned}
$$

위 식의 분모에 있는 모든 식을 곱하여 분수를 없앤다.

$$
\begin{aligned}
&x^2(x^3+ax^2+aa'x+aa'a'')(w+bx)+Bbx^2(x^3+ax^2+aa'x+aa'a'')\\
&=w(x^3+ax^2+aa'x+aa'a'')(w+bx)+Aa(x^2+a'x+a'a'')x(w+bx)
\end{aligned}
$$

모두 정리한 후 좌변으로 모든 항을 옮기고 x의 차수에 따라 계수를 정리한다.

$$
\begin{aligned}
&bx^6+abx^5+wx^5+awx^4+aa'bx^4+aa'w^3+aa'a''bx^3+aa'a''wx^2\\
&+Bbx^5+aBbx^4+aa'Bbx^3+aa'a''Bbx^2\\
&-bx^4-abwx^3-w^2x^3-aa'bwx^2-aw^2x^2-aa'a''bwx-aa'w^2x-aa'a''w^2\\
&-aAbx^4-aAwx^3-2aa'Abx^3-2aa'Awx^2-3aa'a''Abx^2-3aa'a''Awx=0
\end{aligned}\\
\begin{aligned}
&bx^6+(ab+w+Bb)x^5+(aw+aa'b+aBb-bw-aAb)x^4\\
&+(aa'w+aa'a''b+aa'Bb-abw-w^2-aAw-2aa'Ab)x^3\\
&+(aa'a''w+aa'a''Bb-aa'bw-aw^2-2aa'Aw-3aa'a''Ab)x^2\\
&-(aa'a''bw+aa'w^2+3aa'a''Aw)x-aa'a''w^2=0
\end{aligned}
$$

양변을 b로 나누어 최고차항의 계수를 1로 만든다. 마찬가지로 $b'=\frac{w}{b}$로 정의한다.

$$
\begin{aligned}
&x^6+(a+b'+B)x^5+(aa'+ab'+aB-w-aA)x^4\\
&+(aa'b'+aa'a''+aa'B-aw-b'w-aAb'-2aa'A)x^3\\
&+(aa'a''b'+aa'a''B-aa'w-ab'w-2aa'Ab'-3aa'a''A)x^2\\
&-(aa'a''w+aa'b'w+3aa'a''Ab')x-aa'a''b'w=0
\end{aligned}
$$

### 그래프의 기울기

편미분을 사용하여 x축이 표준 용액의 부피, y축이 pH인 그래프의 기울기를 구하는 과정이다. 위에서 구한 방정식은 모두 수소 이온 농도 x와 첨가한 표준 용액의 부피 v에 대한 방정식이므로 이를 사용하여 적정 그래프의 기울기를 구할 수 있을 것이다. 기울기를 구하려고 하는 경우의 방정식을 $f(x,v)=0$로 쓴다고 하면 아래와 같이 된다.

$$
f(x,v)=0\\
df(x,v)=0\\
\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial v}dv=0\\
\frac{\partial f}{\partial x}dx=-\frac{\partial f}{\partial v}dv\\
\frac{dx}{dv}=-\frac{\frac{\partial f}{\partial v}}{\frac{\partial f}{\partial x}}
$$

그래프의 기울기는 (y축 변화량)/(x축 변화량)으로 주어지는데, 적정 실험과 같은 그래프에서는 x축에 표준 용액의 부피, y축에 pH가 들어간다. 이를 전개해보면 아래와 같다.

$$
\begin{aligned}
m&=\frac{dpH}{dv}\\
&=\frac{d(-\log_{10}{x})}{dv}\\
&=\frac{-\frac{1}{x\ln{10}}dx}{dv}\\
&=-\frac{1}{x\ln{10}}\frac{dx}{dv}\\
&=\frac{1}{x\ln{10}}\frac{\frac{\partial f}{\partial v}}{\frac{\partial f}{\partial x}}
\end{aligned}
$$

#### 1가 산-1가 염기

[위에서 얻은 방정식](./#s-1.1.2)을 가져와보면 아래와 같다.

$$
\begin{aligned}
&x^4+(a+b'+B)x^3+(ab'+aB-w-Aa)x^2\\
&-(aw+b'w+Aab')x-ab'w=0
\end{aligned}
$$

위 방정식을 f<sub>1,1</sub>=0이라고 나타내면 기울기는 아래와 같다.

$$
\begin{aligned}
\frac{dpH}{dv}&=\frac{d(-\log_{10}{x})}{dv}=\frac{1}{x\ln{10}}\frac{\frac{\partial f_{1,1}}{\partial v}}{\frac{\partial f_{1,1}}{\partial x}}\\
\frac{\partial f_{1,1}}{\partial v}&=\frac{\partial A}{\partial v}(-ax^2-ab'x)+\frac{\partial B}{\partial v}(x^3+ax^2)\\
\frac{\partial A}{\partial v}&=-\frac{V\left[HA\right]_0}{(V+v)^2}\\
\frac{\partial B}{\partial v}&=\frac{V\left[B\right]_0}{(V+v)^2}\\
\frac{\partial f_{1,1}}{\partial x}&=4x^3+3(a+b'+B)x^2+2(ab'+aB-w-Aa)x-(aw+b'w+Aab')
\end{aligned}
$$

#### 2가 산-1가 염기

[위에서 얻은 방정식](./#s-1.2.2)을 가져와보면 아래와 같다.

$$
\begin{aligned}
&x^5+(a+b'+B)x^4+(aa'+ab'+aB-w-Aa)x^3\\
&+(aa'b'+aa'B-aw-b'w-Aab'-Aaa')x^2\\
&-(aa'w+ab'w+Aaa'b')x-aa'b'w=0
\end{aligned}
$$

위 방정식을 f<sub>2,1</sub>=0이라고 나타내면 기울기는 아래와 같다.

$$
\begin{aligned}
\frac{dpH}{dv}&=\frac{d(-\log_{10}{x})}{dv}=\frac{1}{x\ln{10}}\frac{\frac{\partial f_{2,1}}{\partial v}}{\frac{\partial f_{2,1}}{\partial x}}\\
\frac{\partial f_{2,1}}{\partial v}&=\frac{\partial A}{\partial v}(-ax^3-ab'x^2-aa'x^2-aa'b'x)+\frac{\partial B}{\partial v}(x^4+ax^3+aa'x^2)\\
\frac{\partial A}{\partial v}&=-\frac{V\left[HA\right]_0}{(V+v)^2}\\
\frac{\partial B}{\partial v}&=\frac{V\left[B\right]_0}{(V+v)^2}\\
\frac{\partial f_{2,1}}{\partial x}&=5x^4+4(a+b'+B)x^3+3(aa'+ab'+aB-w-Aa)x^2\\
&+2(aa'b'+aa'B-aw-b'w-Aab'-Aaa')x\\
&-(aa'w+ab'w+Aaa'b')
\end{aligned}
$$

#### 3가 산-1가 염기

[위에서 얻은 방정식](./#s-1.2.3)을 가져와보면 아래와 같다.

$$
\begin{aligned}
&x^6+(a+b'+B)x^5+(aa'+ab'+aB-w-aA)x^4\\
&+(aa'b'+aa'a''+aa'B-aw-b'w-aAb'-2aa'A)x^3\\
&+(aa'a''b'+aa'a''B-aa'w-ab'w-2aa'Ab'-3aa'a''A)x^2\\
&-(aa'a''w+aa'b'w+3aa'a''Ab')x-aa'a''b'w=0
\end{aligned}
$$

위 방정식을 f<sub>3,1</sub>=0이라고 나타내면 기울기는 아래와 같다.

$$
\begin{aligned}
\frac{dpH}{dv}&=\frac{d(-\log_{10}{x})}{dv}=\frac{1}{x\ln{10}}\frac{\frac{\partial f_{3,1}}{\partial v}}{\frac{\partial f_{3,1}}{\partial x}}\\
\frac{\partial f_{3,1}}{\partial v}&=\frac{\partial A}{\partial v}(-ax^4-ab'x^3-2aa'x^3-2aa'b'x^2-3aa'a''x^2-3aa'a''b'x)\\
&+\frac{\partial B}{\partial v}(x^5+ax^4+aa'x^3+aa'a''x^2)\\
\frac{\partial A}{\partial v}&=-\frac{V\left[HA\right]_0}{(V+v)^2}\\
\frac{\partial B}{\partial v}&=\frac{V\left[B\right]_0}{(V+v)^2}\\
\frac{\partial f_{3,1}}{\partial x}&=6x^5+5(a+b'+B)x^4+4(aa'+ab'+aB-w-aA)x^3\\
&+3(aa'b'+aa'a''+aa'B-aw-b'w-aAb'-2aa'A)x^2\\
&+2(aa'a''b'+aa'a''B-aa'w-ab'w-2aa'Ab'-3aa'a''A)x\\
&-(aa'a''w+aa'b'w+3aa'a''Ab')
\end{aligned}
$$
