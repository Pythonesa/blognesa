---
title: Algoritmos
description: La receta para la solución.
date: 2024-04-14T01:05
imgSrc: "/assets/images/_posts/logica1/algoritmos.png"
imgAlt: "Imagen de un cubo metálico con patrones geométricos y una esfera de luz."
layout: "@/layouts/BasePost.astro"
---

**Los algoritmos no son ni más ni menos que listas detalladas de los pasos a seguir para resolver problemas. Son la herramienta con la cual plasmamos la solución de forma tal que, si la seguimos cual receta de cocina, podemos asegurar la solución (si lo hacemos bien, claramente).**

Cuando escribimos código, no hacemos más que transcribir nuestros algoritmos a un lenguaje de programación. Por lo que, tal vez, sea importante comentar que cuanto más optimizados sean nuestros algoritmos, más eficientes será nuestro código.

</br>

***Análisis de un problema:***

Analizar el problema es lo que nos lleva a entender el objetivo del algoritmo; aquello que deseamos conseguir con él.

</br>

Supongamos que queremos cerrar la puerta de nuestra habitación.

</br>

Tenemos unos pasos previos antes de crear el algoritmo que son identificar a los actores y a los recursos.

El **actor** es la persona que realiza los pasos que vamos a definir, para una aplicación normalmente va a ser el usuario.

Los **recursos** son lo que necesitamos para poder realizar el proceso descrito en el algoritmo, para una aplicación puede ser una base de datos, que se esté visualizando un botón con el cual el actor va a interactuar, etc.

En nuestro caso el actor es la persona que va a cerrar la puerta, o sea, nosotros mismos, y los recursos son los objetos necesarios para que eso pueda ocurrir, que exista una habitación, que estemos en la habitación y que la habitación tenga una puerta.

</br>

Ahora, vamos a analizar los pasos que debe llevar a cabo nuestro actor para resolver el problema.

Primero, debemos identificar la puerta de la habitación. (Sino, puede que terminemos cerrando la puerta del ropero en su lugar).

Segundo, caminamos hacía la puerta. (Debemos ser inclusivos y no dejar fuera de nuestro algoritmo a las personas que no tienen telekinesis).

Tercero, tomamos el picaporte de la puerte. (Acabo de establecer que todas las puertas del mundo tienen picaporte, porque puedo).

Cuarto, cerramos la puerta. (¿Deberíamos tener en cuenta que si estamos enojados puede que la dejemos giratoria y ya no cierre? Hoy no).

</br>

Pero... ¿Y si la puerta ya estaba cerrada?

</br>

`1. Identificamos la puerta de la habitación.`

`2. Caminamos hacia la puerta.`

`3. Nos aseguramos de que la puerta está abierta. (Si está cerrada, no podemos cerrarla).`

`4. Tomamos el picaporte de la puerta.`

`5. Cerramos la puerta.`

`6. Nos aseguramos de que la puerta está cerrada. (Ya que estamos también vamos a asegurarnos de que si la cerramos quede cerrada).`

</br>

Ahora que tenemos los pasos definidos y ordenados de manera secuencial para solucionar nuestro problema... ¡Tenemos nuestro algoritmo!

</br>

Una buena práctica es refinar los algoritmos para buscar posibles optimizaciones luego de escribirlos.

En nuestro caso, podríamos analizar si hacer el paso de caminar hacia la puerta antes de asegurarnos que esté abierta es lo más óptimo.
Si resulta que llegamos a la puerta y ya está cerrada, habremos caminado desde donde nos encontrábamos hasta la puerta de manera innecesaria.
Aquí podríamos tener en consideración el ángulo de la puerta, el campo de visión del actor, variables ambientales que indiquen si la puerta está abierta o cerrada (el ruido que viene de otra habitación o que entre frío), etc.
Pero supongamos que llegamos luego de todo ese análisis a la conclusión de que, efectivamente, nuestro actor desde cualquier lugar de la habitación puede ver si la puerta está abierta o no, entonces optimizamos nuestros pasos y nos quedará:

</br>

`1. Identificamos la puerta de la habitación.`

`2. Nos aseguramos de que la puerta está abierta. (Ya no caminamos innecesariamente).`

`3. Caminamos hacia la puerta.`

`4. Tomamos el picaporte de la puerta.`

`5. Cerramos la puerta.`

`6. Nos aseguramos de que la puerta está cerrada.`

</br>

*¿Se te ocurre una manera más óptima de cerrar una puerta?*

*Te invito a que escribas los pasos que seguís al hacer alguna otra actividad sencilla y repetitiva en tu día a día y a pensar si es la mejor manera de hacerlo!*

</br>
