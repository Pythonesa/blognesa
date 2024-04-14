---
title: Diagramas de flujo
description: Representación gráfica de la solución.
date: 2024-04-14T11:00
imgSrc: "/assets/images/_posts/logica1/diagramas_flujo.png"
imgAlt: "Variedad de íconos y objetos 3D que simbolizan la interconexión entre ciencia, tecnología y naturaleza sobre un fondo oscuro."
layout: "@/layouts/BasePost.astro"
---

**Los diagramas de flujo son un conjunto de símbolos y elementos que nos permiten representar los pasos de un proceso. Nos sirven para representar de manera gráfica el detalle de los pasos que definimos en un algoritmo.**

Además, son una herramienta que nos permite detectar errores que podamos haber cometido al diseñar un algoritmo.

</br>

***Elementos de un diagrama de flujo:***

Las figuras o símbolos con los que componemos un diagrama de flujo tienen cada una un significado especial y representan diferentes acciones.

</br>

***Inicio o fin:***

Con un **óvalo** podemos representar el inicio o el fin de un proceso o flujo.

![Óvalo de inicio/fin](/assets/images/_posts/logica1/ovalo.png)

</br>

***Toma de decisiones:***

Con un **rombo** podemos representar la toma de decisiones.

Debemos tener en cuenta que un rombo siempre tendrá en su interior una pregunta a la que podamos responder con sí o con no.

![Rombo de tomar decisiones](/assets/images/_posts/logica1/rombo.png)

</br>

***Procesos:***

Con un **rectángulo** podemos representar un proceso.

Dentro del rectángulo describimos algo que está pasando, por ejemplo una operación o incluso un algoritmo.

![Rectángulo de proceso](/assets/images/_posts/logica1/rectangulo.png)

</br>

***Entrada y salida:***

Con un **rectángulo inclinado** podemos representar la entrada (lectura) y la salida (impresión) de datos.

Si bien las entradas y salidas son operaciones (procesos) y estaría bien representarlos con el rectángulo normal de procesos, son un tipo de operación que a veces es conveniente tener mejor identificada y por ello tienen su símbolo específico.

![Rectángulo inclinado de entrada/salida](/assets/images/_posts/logica1/rectangulo2.png)

</br>

***Conector:***

Con una flecha podemos representar las conexiones entre los demás elementos del diagrama de flujo.

Es un elemento clave, ya que si no hay conectores no hay flujo.
Son éstas flechas las que indican la secuencia de los pasos. Los conectores salen de un elemento e indican hacía que otro elemento se debe dirigir el flujo.

![Conector](/assets/images/_posts/logica1/conector.png)

</br>

***Hagamos el diagrama de flujo para el algoritmo que hicimos en el post anterior:***

Recordemos los pasos que habíamos definido:

`1. Identificamos la puerta de la habitación.`

`2. Nos aseguramos de que la puerta está abierta. (Ya no caminamos innecesariamente).`

`3. Caminamos hacia la puerta.`

`4. Tomamos el picaporte de la puerta.`

`5. Cerramos la puerta.`

`6. Nos aseguramos de que la puerta está cerrada.`

</br>

Vamos a obtener un diagrama de flujo como este:

![Diagrama de flujo](/assets/images/_posts/logica1/puerta1.png)

</br>

Viendo éste diagrama podemos identificar una situación que puede desencadenar un ciclo infinito.

Si luego de cerrar la puerta al revisar sigue abierta, puede que al intentar de nuevo se cierre y salgamos del bucle, pero también puede que la puerta esté rota y no cierre y en ese caso nos encontraremos en un bucle infinito.

Para solucionar esto, podríamos incrementar un contador por cada intento de cerrar la puerta y limitarnos a 3 intentos.

</br>

Veamos como quedaría entonces nuestro algoritmo:

![Diagrama de flujo](/assets/images/_posts/logica1/puerta2.png)

</br>

*Te invito a que escribas los pasos que seguís al hacer alguna actividad sencilla y repetitiva en tu día a día y a realizar el diagrama de flujo correspondiente!*

</br>
