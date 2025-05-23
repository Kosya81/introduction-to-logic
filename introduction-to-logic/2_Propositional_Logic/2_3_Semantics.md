# 2.3 Семантика

> **Семантика изучает смысловое значение единиц языка.**

Рассмотрение семантики в логике похоже на её рассмотрение в алгебре. Алгебра не интересуется значением переменных в реальном мире. Интерес представляют отношения между значениями переменных, выраженные в уравнениях, которые мы записываем. Алгебраические методы разработаны таким образом, чтобы учитывать эти отношения независимо от того, что обозначают переменные.

Аналогично, логика не интересуется реальным значением логических (пропозициональных) констант (единиц логического словаря). Интересны отношения между истинностными значениями простых высказываний и истинностными значениями составных высказываний, в которые они входят. Как и в алгебре, методы логического рассуждения независимы от значений логических констант; имеет значение только форма высказываний.

Хотя значения, присваиваемые логическим константам, не являются критичными в указанном выше смысле, при обсуждении логики бывает полезно явно указывать присваивания истинности и рассматривать различные присваивания или все возможные присваивания и так далее. Такое присваивание называется присваиванием истинности.

Формально, присваивание истинности для логического словаря — это функция, которая каждому элементу словаря (логической константе) сопоставляет истинностное значение. В дальнейшем мы будем использовать цифру 1 как синоним истины, а 0 как синоним лжи; и мы будем обозначать значение константы или выражения при присваивании истинности i с помощью верхнего индекса i.

Пример такого присваивания приведён ниже для случая, когда в словаре всего три логические константы: `p`, `q` и `r`.

$$
\begin{align}
p^i &= 1 \\
q^i &= 0 \\
r^i &= 1
\end{align}
$$

Следующее присваивание — это другое присваивание истинности для того же словаря.

$$
\begin{align}
p^i &= 0 \\
q^i &= 0 \\
r^i &= 1
\end{align}
$$

Обратите внимание, что приведённые выше формулы сами по себе не являются предложениями в логике высказываний. Логика высказываний не допускает использования верхних индексов и не использует символ «=». Скорее, это неформальные метауровневые утверждения о конкретных присваиваниях истинности. Хотя обсуждение логики высказываний с использованием нотации, схожей с той, которую использует сама логика высказываний, может быть иногда запутанным, оно позволяет точно и эффективно передавать метаинформацию. Чтобы минимизировать путаницу, в этой книге такая мета-нотация используется редко и только тогда, когда риск недоразумений минимален.

Рассматривая приведённые выше присваивания истинности, важно помнить, что с точки зрения логики любое присваивание истинности так же допустимо, как и любое другое. Сама логика не устанавливает значения истинности отдельных логических констант.

С другой стороны, если задано присваивание истинности для логических констант языка, логика определяет присваивание истинности для всех составных предложений этого языка. На самом деле можно определить значение истинности составного предложения, последовательно применяя следующие правила:

Если значение истинности предложения — _истина_, то значение истинности его отрицания — _ложь_.
Если значение истинности предложения — _ложь_, то значение истинности его отрицания — _истина_.

$$
\begin{array}{c|c}
\varphi & \lnot\varphi \\
\hline
1 & 0 \\
0 & 1 \\
\end{array}
$$

## Конъюнкция ("логическое и")
Значение истинности конъюнкции _истинно_ только в том случае, если значения истинности обоих её конъюнктов _истинны_; в противном случае значение будет _ложным_.

$$
\begin{array}{c c|c}
\varphi & \psi & \varphi \land \psi \\
\hline
1 & 1 & 1 \\
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0 \\
\end{array}
$$

## Дизъюнкция ("логическое или")
Значение истинности дизъюнкции _истинно_ тогда и только тогда, когда хотя бы один из её дизъюнктов _истинный_; в противном случае дизъюнкция _ложна_. Обратите внимание, что "_включающий или_" - это интерпретация оператора `∨`, отличающаяся от исключающей дизъюнкции ("_исключающий или_"), при которой дизъюнкция истинна тогда и только тогда, когда нечётное количество дизъюнктов истинны.

$$
\begin{array}{c c|c}
\varphi & \psi & \varphi \lor \psi \\
\hline
1 & 1 & 1 \\
1 & 0 & 1 \\
0 & 1 & 1 \\
0 & 0 & 0 \\
\end{array}
$$

## Импликация
Значение истинности импликации _ложно_ только в том случае, если её антецедент (посылка) _истинен_, а консеквент (следствие) _ложен_; во всех остальных случаях импликация считается _истинной_. Это называется материальной импликацией.

$$
\begin{array}{c c|c}
\varphi & \psi & \varphi \Rightarrow \psi \\
\hline
1 & 1 & 1 \\
1 & 0 & 0 \\
0 & 1 & 1 \\
0 & 0 & 1 \\
\end{array}
$$

## Двусторонняя импликация
Двусторонняя импликация является истинной тогда и только тогда, когда значения истинности его составляющих совпадают, то есть обе части либо истинны, либо ложны.

$$
\begin{array}{c c|c}
\varphi & \psi & \varphi \Leftrightarrow \psi \\
\hline
1 & 1 & 1 \\
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{array}
$$

Используя эти определения, легко определить значения истинности составных высказываний, в которых в качестве составляющих выступают логические константы. Как мы увидим в следующем разделе, мы можем определять значения истинности составных высказываний, содержащих другие составные высказывания в качестве частей, сначала вычисляя значения составляющих, а затем применяя к результатам приведённые выше определения.

Завершим этот раздел несколькими определениями, которые пригодятся в дальнейшем. Мы говорим, что присваивание истинности _удовлетворяет_ высказывание, если и только если это высказывание _истинно_ при данном присваивании. Мы говорим, что присваивание истинности _опровергает_ высказывание, если и только если высказывание _ложно_ при данном присваивании. Присваивание истинности удовлетворяет _множество_ высказываний, если и только если оно удовлетворяет _каждое_ высказывание из множества. Присваивание истинности опровергает _множество_ высказываний, если и только если оно опровергает _хотя бы одно_ высказывание из множества.
