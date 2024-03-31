---
title: Tablas de verdad
description: Herramientas para tomar decisiones.
date: 2024-03-31T18:15
imgSrc: "/assets/images/_posts/tablasverdad.png"
imgAlt: "Panel luminoso con luces circulares azules y naranjas dispuestas en un patrón geométrico, con un área brillante rectangular en el centro que evoca un estilo tecnológico y vanguardista."
layout: "@/layouts/BasePost.astro"
---

**Aunque parecen muy abstractas, las tablas de verdad son herramientas que pueden llegar a tener un impacto en la toma de decisiones más serio que un bug en producción.**

</br>

Estas herramientas son fundamentales en la lógica y en las matemáticas. Y, como resulta que cuando desarrollamos estamos constantemente tomando decisiones basadas en condiciones, también lo son en el mundo del desarrollo de software.

Desde el más simple condicional hasta el más complejo malabar booleano, las tablas de verdad son nuestra brújula para entender y analizar caminos posibles y navegar por el mar de las decisiones.

</br>

Yendo más a la lógica pura, una buena definición de las mismas sería que son herramientas que nos ayudan a determinar cuales son las condiciones necesarias para que un enunciado propuesto sea válido.

Vamos a ver los 4 tipos principales de tablas de verdad.

</br>

***Negación***

Esta tabla es la más básica de todas, pero no hay que subestimarla ya que es indispensable cuando necesitamos invertir una condición.

La tabla de negación devuelve el valor opuesto a la proposición que se le indique.

![Tabla de verdad de negación](/assets/images/_posts/verdadnegacion.png)

Supongamos que estamos haciendo un sistema y sabemos que nuestros usuarios siempre mienten. Entonces les preguntamos de que color es el Sol y utilizamos la negación para obtener la verdad.

![Ejemplo de tabla de verdad de negación](/assets/images/_posts/verdadnegacionejemplo.png)

</br>

***Conjunción***

Una conjunción unicamente es verdadera cuando todas sus proposiciones son verdaderas.

Entonces, cuando necesitamos validar que una serie de condiciones se cumplen, por ejemplo, ésta es la manera de hacerlo.

![Tabla de verdad de conjunción](/assets/images/_posts/verdadconjuncion.png)

En un concurso de cocina la consigna es hacer una ensalada que contenga una papa y una cebolla:

![Ejemplo de tabla de verdad de conjunción](/assets/images/_posts/verdadconjuncionejemplo.png)

</br>

***Disyunción***

Una disyunción es verdadera cuando al menos una de sus proposiciones es verdadera.

Si tenemos varias condiciones pero nos basta con que una se cumpla, ésto es lo que necesitamos.

![Tabla de verdad de disyunción](/assets/images/_posts/verdaddisjuncion.png)

Ahora avanzó el concurso de cocina y llegamos al postre, resulta que deben hacer una ensalada de frutas utilizando uvas y/o manzanas.

![Ejemplo de tabla de verdad de disyunción](/assets/images/_posts/verdaddisjuncionejemplo.png)

</br>

***Disyunción exclusiva***

Una disyunción exclusiva va a ser verdadera cuando una de sus proposiciones sea verdadera y la otra falsa.

La utilizamos si necesitamos que de dos condiciones solamente se cumpla una de ellas.

![Tabla de verdad de disyunción exclusiva](/assets/images/_posts/verdadxor.png)

Para la final del concurso de cocina los participantes deben hacer un postre con chocolate blanco o chocolate negro, no pueden usar ambos.

![Ejemplo de tabla de verdad de disyunción exclusiva](/assets/images/_posts/verdadxorejemplo.png)

</br>

*Si bien sé que no es muy común ponerse a dibujar tablas de verdad cuando estamos analizando problemas que implican condicionales, son una herramienta bastante útil y que si alguna vez necesitamos clarificar o incluso documentar todos los posibles caminos es mejor conocerlas!*

</br>
