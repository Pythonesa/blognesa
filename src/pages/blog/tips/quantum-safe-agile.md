---
title: Quantum Safe y Agile
description: Lo que deberías tener en cuenta al desarrollar
date: 2024-06-16T09:30
imgSrc: "/assets/images/_posts/tips/quantumsafeagile.png"
imgAlt: "Pythonesa"
layout: "@/layouts/BasePost.astro"
---

**El futuro de la computación cuántica ya llegó, y con él vienen desafíos que nos pueden dejar llorando en un rincón si no estamos preparados. Necesitamos asegurarnos de que nuestro software sea resistente a los ataques cuánticos (quantum safe) y que pueda adaptarse rápidamente a nuevas amenazas (quantum agile).**

</br>

**Quantum Safe** significa que tu software esté listo y blindado para soportar las embestidas cuánticas.

Con la capacidad de resolver problemas que puede que te parezcan imposibles en un santiamén, la computación cuántica pone en riesgo nuestros sistemas actuales como RSA y ECC.

</br>

**Quantum Agile** significa que tu sistema pueda cambiar de algoritmos tan rápido como quien cambia de canción. Porque no se trata de que hoy sea seguro, sino también, de que pueda adaptarse para serlo mañana.

Lo que implica que cualquier sistema que pretenda ser quantum agile debe se muy flexible y modularizado para poder cambiar piezas sin tocar nada más.

</br>

**Algoritmos Post Cuánticos:**

Para ser quantum safe necesitas ponerte las pilas y conocer al menos algunos de ellos:

</br>

***Lattice-based Cryptography:***

</br>

Este tipo de criptografía se basa en retículas (un conjunto discreto de puntos en un espacio de n dimensiones, que tiene propiedades geométricas específicas), o sea utiliza la estructura matemática de las retículas para construir los algoritmos.

</br>

Los problemas relacionados con retículas como SVP (Problema del vector más corto) o el LWE (Aprender con errores) son difíciles de resolver incluso para computadoras cuánticas, lo que hace que estos tipos de algoritmos den una solidez teórica al problema.

</br>

Un ejemplo conocido es NTRU, basado en el SVP y de código abierto. <span style="color: violet;">[Acá el repo con código de referencia.](https://github.com/yedino/ntru-crypto)</span>.

</br>

***Hash-based Cryptography:***

</br>

Las funciones hash, que son algoritmos matemáticos que convierten datos de entrada en una cadena de longitud fija (el hash), son diseñadas para ser rápidas de calcular y asegurar propiedades como unidireccionalidad y resistencia a colisiones.

</br>

Se consideran teóricamente seguras frente a ataques cuánticos debido a la naturaleza de sus propiedades. 

Por lo tanto, si bien no necesitan ser reemplazadas inmediatamente, forman parte de la infraestructura de seguridad que debe ser evaluada ya que pueden ser vulnerables, por ejemplo, utilizando el algoritmo de Grover (algoritmo cuántico que acelera la búsqueda de pre-imagen de una función hash).

Además, la longitud de los hashes que hoy se consideran seguros (como SHA-256) debería aumentarse para mantener la resistencia contra ataques de fuerza bruta.

Y, aunque están diseñados para minimizar las colisiones (cuando dos entradas diferentes producen el mismo hash), un algoritmo cuántico podría encontrar colisiones rápidamente.

Un ejemplo sería <span style="color: violet;">[SPHINCS+](https://github.com/sphincs/sphincsplus).</span>

</br>

***Code-based Cryptography:***

</br>

La criptografía basada en códigos es una poderosa alternativa post-cuántica. Se basa en la teoría de códigos, que estudia métodos para la transmisión confiable de información a través de canales ruidosos.

Utiliza códigos lineales, que son un conjunto de palabras de código que pueden corregir errores o detectar modificaciones no autorizadas en los datos transmitidos.

</br>

Los esquemas basados en códigos son teóricamente seguros contra ataques cuánticos debido a la naturaleza combinatoria y algebraica de los problemas que plantea y para mi una de las mejores alternativas; además de que es el más eficiente en cuanto a recursos en comparación a otros métodos.

</br>

Sin embargo, puede llegar a resultar difícil de implementar debido a su complejidad matemática y a que el tamaño de las claves generadas pueden ser más grandes que las de otros tipos, lo que puede afectar el rendimiento si la gestión de claves no lo contempla.

</br>

El ejemplo más conocido es el **esquema de McEliece** propuesto en 1978 y que utiliza códigos de corrección de errores para el cifrado y descifrado de datos.

<span style="color: violet;">[Les dejo el github de una implementación simple en Python.](https://github.com/jkrauze/mceliece)</span>

</br>

***Multivariate Quadratic Cryptography:***

</br>

¡La apuesta segura!

</br>

La criptografía basada en ecuaciones cuadráticas multivariadas, como su nombre lo indica utiliza ecuaciones cuadráticas que involucran múltiples variantes. Se diseñan de forma que, si conoces las variables adecuadas es fácil resolverlo, pero si no las conoces es extremadamente difícil.

</br>

La dificultad de resolución es similar a la de los sistemas de ecuaciones lineales pero con la complejidad adicional debida a la forma cuadrática, por lo que son consideradas resistentes.

</br>

Los desafíos se dan por la complejidad de implementar estos esquemas y que requieren un análisis matemático profundo para asegurar su robustez.

Además, al igual que con otros esquemas post-cuánticos, puede requerir tamaños de claves más grandes para garantizar una seguridad adecuada.

</br>

**Consideraciones para el desarrollo de software:**

Ahora que tenemos los conceptos y el panorama, vamos a ver algunas cosas que deberías tener en cuenta para desarrollar software que no solo sea seguro, sino también ágil y listo para el futuro.

</br>

***Elegir algoritmos criptográficos resilientes***

No te conformes con algoritmos tradicionales, explora los post-cuánticos y elige los que mejor se adaptan a tus necesidades.

Algunos de estos algoritmos pueden ser más lentos que una tortuga. Asi que parte de tu análisis deberá incluir la evaluación del impacto en el rendimiento de tu sistema.

</br>

***Evaluar y adaptar la infraestructura existente***

Deberías asegurarte de que tu infraestructura actual pueda migrar a algoritmos cuánticos seguros sin dramas.

Ten en cuenta nuevamente el impacto en el rendimiento, ya que algunos de estos algoritmos son bien glotones de recursos.

</br>

***Manejo de claves***

Prepárate para mantener claves más grandes que parezcan un catálogo de IKEA. Deberás implementar políticas de rotación y almacenamiento teniendo esto en cuenta.

</br>

***Testing y validación***

Siempre debes probarlo todo como si fuera a ser usado por abuelos.

Si puedes, intenta romper tu propio sistema como si fueras un hacker cuántico, pero sin pasarte al lado oscuro (porque ya se acabaron las galletas).

</br>

***Cumplimiento normativo***

Debes revisar que cumpla las normativas necesarias. Puedes mirar las guías del NIST y demás.

</br>

***Educación y capacitación***

Asegúrate de que tu equipo no se quede atrás y mantente al día con los últimos chismes del mundo cuántico.

</br>

***Estrategia de defensa en profundidad***

Ten en cuenta que serás nuevo en esto y no metas todos los huevos en una sola canasta. Usar varias capas de seguridad hará que tu sistema aguante aunque una falle.

</br>

*Preparar tu software para la era cuántica no es un paseo por el parque, pero es esencial para mantenerlo seguro. ¡Ya estás llegando tarde para que tus aplicaciones y sistemas sean seguros! ¡Gracias por leer!*

</br>
