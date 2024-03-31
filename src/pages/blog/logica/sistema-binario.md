---
title: Sistema binario
description: La lógica que una computadora entiende.
date: 2024-03-29T15:45
imgSrc: "/assets/images/_posts/binario.png"
imgAlt: "Un espacio de trabajo digital futurista con un globo holográfico, código binario y varias visualizaciones de datos flotando sobre un portátil, al lado de una taza de café."
layout: "@/layouts/BasePost.astro"
---

**Estamos acostumbrados a pensar en base 10, es decir, en el sistema decimal. Pero nuestras computadoras (salvo que sean cuánticas) unicamente entienden el sistema binario, base 2, ceros y unos, encendido y apagado, pasa corriente o no pasa, es un 1 o es un 0.**

</br>

Cuando hablamos con una computadora lo que entenderá es que 1 representa una señal de corriente y 0 representa que no hay corriente. Ellas no necesitan más que eso para funcionar.

Y de ésta forma podemos entender la lógica de una computadora basada en un sistema de verdad donde 1 es verdadero y 0 es falso (cosa que nos va a servir más adelante).

</br>

**Conversiones entre sistema binario y decimal**

</br>

Ya que antes hablamos de las operaciones básicas, vamos a usar dos de ellas (multiplicación y división) para convertir números decimales a binarios y viceversa.

</br>

Para convertir desde el sistema decimal a binario basta con hacer una serie de divisiones entre 2 hasta llegar a un resultado de 1 o 0 y escribirlo junto a los restos de forma inversa.

![Decimal a binario](/assets/images/_posts/decimal_binario.png)

Y para convertir de binario a decimal debemos multiplicar cada dígito del número binario por su base (es decir 2) elevado a la potencia que corresponda a su posición en el número binario comenzando desde cero en sentido inverso; al sumar los productos de las multiplicaciones, el resultado es el número decimal.

![Binario a decimal](/assets/images/_posts/binario_decimal.png)

</br>

**Operaciones con binarios**

Vamos a ver para las 4 operaciones básicas una tabla con los resultados base y un ejemplo. Si tenemos claro que la única diferencia entre el sistema binario y el decimal es la cantidad de símbolos (números) con los que trabaja y contamos con las bases matemáticas que vimos en las entradas anteriores no debería suponer ningún problema entenderlas.

Si vamos a contar del 1 al 5, en decimal contamos 1, 2, 3, 4, 5, y en binario contamos 1, 10, 11, 100, 101. ¡Estamos haciendo exactamente lo mismo en ambos sistemas!

</br>

***Suma***

0 + 0 = 0

0 + 1 = 1

1 + 0 = 1

1 + 1 = 10

![Suma binaria](/assets/images/_posts/sumabinaria.png)

</br>

***Resta***

0 - 0 = 0

0 - 1 = 11

1 - 0 = 1

1 - 1 = 0

![Resta binaria](/assets/images/_posts/restabinaria.png)

</br>

***Multiplicación***

En el caso de la multiplicación, nos basamos en dos principios básicos: todo número multiplicado por 1 es el mismo número y todo número multiplicado por 0 es 0. Por lo tanto:

0 * 0 = 0

0 * 1 = 0

1 * 0 = 0

1 * 1 = 1

Y se resuelve igual que en el sistema decimal, multiplicamos cada dígito del multiplicador y luego sumamos los productos.

![Multiplicación binaria](/assets/images/_posts/multibinaria.png)

</br>

***División***

Para dividir utilizamos la resta y la multiplicación (igual que en el sistema decimal).

Con la facilidad de que si el dividendo es mayor al divisor, vamos a tener un 1 y si es menor un 0.

![División binaria](/assets/images/_posts/divisionbinaria.png)

</br>

*En lo personal, hacer operaciones con binarios me divierte mucho más que hacerlas con decimales.*

*Espero que lo practiquen, conviertan números del sistema decimal a binario, hagan alguna operación con ellos y luego conviertan el resultado de binario a decimal para comprobar el resultado.*

*Puede parecer algo demasiado simple, pero agarrar un lápiz y un papel para resolver este tipo de cosas es una buena manera de formar el hábito de buscar el apoyo visual para analizar y repasar los pasos del proceso. ¡Y eso va a servir para cualquier proceso, no solo para las operaciones con binarios!*

</br>
