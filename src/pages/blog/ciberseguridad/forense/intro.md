---
title: Informática forense
description: ¿Qué es? Proceso y consideraciones.
date: 2024-09-03T21:00
imgSrc: "/assets/images/_posts/ciberseguridad/forense.png"
imgAlt: "Partes mecánicas y herramientas rodean una lupa que muestra un perfil humano digital azul."
layout: "@/layouts/BasePost.astro"
---

**La informática forense es una de las tantas ciencias forenses que existen, y como tal es la aplicación del método científico (métodos y técnicas probadas) para establecer respuestas respecto a ciertos hechos en un contexto legal. Y aunque no siempre las técnicas de la ingeniería forense se utilicen con la finalidad de presentar los resultados como evidencias en un proceso legal (por ejemplo, investigaciones que se realicen para anticipar o prevenir acciones ilegales), si se debe tener en cuenta que, en cualquier momento, podría surgir la necesidad de que esto ocurra.**

</br>

El proceso que se lleva a cabo debe intentar responder las preguntas de todo proceso de investigación: *¿Qué, cuándo y dónde paso lo que se investiga? ¿Cómo paso y por qué? y ¿Quién estuvo involucrado, lo causo o es el culpable de que pasara?*

</br>

Nuestro insumo principal siempre será un medio digital, por lo que vamos a hablar mucho de ***evidencia digital***.

¿Y eso qué es?

Sencillamente que vamos a trabajar con medios digitales, conjuntos de datos e información digitales que puedan ser de utilidad al momento de investigar, soportar o refutar una hipótesis de un incidente.

Podemos trabajar con medios digitales que vayan desde lo almacenado en un disco duro, una consola, celular, información en un correo electrónico o incluso información de conexiones de red.

</br>

**Etapas:**

Como les escribí en el post de introducción a esta rama, el proceso se divide en varias etapas.

A grandes rasgos lo primero que debemos hacer es ***identificar*** cuales son nuestras fuentes de evidencia (¿de qué dispositivos podemos tomar información?). Luego debemos ***preservar*** esa evidencia de manera segura con procedimientos específicos (donde debemos ser muy cuidadosos, ya que cualquier falla durante ésta etapa puede causar que nuestra evidencia deje de ser útil para procesos legales posteriormente). Después debemos ***analizar*** esa evidencia ***documentando*** correctamente todo el proceso para finalmente poder ***presentar*** los resultados de la investigación de una forma concreta, de manera legible y comprensible para los interesados.

</br>

**¿Qué se necesita?**

Dijimos que, lo primero es determinar las fuentes de información que luego debemos preservar para la investigación.

Claramente, para lograr ésto debemos tener algunos ***conocimientos previos***: hardware (PCs, celulares, consolas, discos duros, usb, etc.), redes (internet, wifi, cableado, etc.), software y sistemas operativos (sobre todo usuarios y sistemas de archivos, y como funcionan). Y también debemos conocer la ***cadena de custodia*** y saber hacer un ***inventario de evidencia*** y ***reportes de adquisición y verificación***.

</br>

***Habilidad para tomar decisiones correctas de manera rápida***. Supongamos que investigamos un posible hackeo por medio de una red wifi, necesitamos identificar y recolectar toda la información relacionada con la red, dispositivos que puedan haber estado conectada a ella y demás, pero no vamos a hacer una imagen del disco duro de una PC que estaba apagada y ni tiene tarjeta de red (por dar un ejemplo exagerado).

</br>

***Conocimiento de las herramientas de nuestro kit*** que usemos para relevar información. Por ejemplo, las copias de la información que realizamos para preservarla deben ser exactas, por lo que vamos a utilizar técnicas y herramientas forenses específicas que nos ayudan a hacerlo con la rigurosidad necesaria. Y acá también entran en juego conocimientos, como el uso de hashes, firmas digitales, etc. para preservar la información asegurando que no se modifique.

</br>

Para el análisis, necesitamos principalmente ***enfoque*** para lograr un ***filtrado de información***. Vamos a tener muchísima información (aún cuando tomamos las decisiones correctas al momento del relevamiento de las fuentes de información)... supongamos que tenemos la PC personal de alguien de quién se sospecha que pudo haber filtrado información de la compañía en la cual trabaja, posiblemente encontremos muchísima información no relacionada (tareas de los hijos, historial de vídeos de youtube, fotos familiares, etc.) y lo que realmente necesitamos analizar en ese momento es si utilizó su PC personal para comunicarse de alguna forma para transmitir esa información que se sospecha filtro (correos electrónicos, servicios de mensajería, redes, etc.).

</br>

También debemos ser capaces de realizar un ***análisis preliminar*** de nuestras fuentes de evidencia y elaborar un ***reporte preliminar***, por lo que en una fase temprana del análisis debemos poder detectar que parte de la información es clave o principal (la información más importante para nuestra investigación).

</br>

Algo que me gusta siempre aclarar desde el comienzo y que creo que es importante tener claro, es que nosotros vamos a hablar siempre de usuarios y no de personas. ¿Por qué? Fácil, normalmente no podemos tener la certeza de que la evidencia vinculada a un usuario sea realmente de la persona física. Por ejemplo, sabemos que un usuario de un sistema operativo cometió un delito al analizar los logs, pero no tenemos la certeza de que el propietario de ese usuario fué quien realmente estaba frente a la PC al momento en el cual se cometió ese delito.

</br>

Finalmente, para que la presentación sea exitosa, debemos tener en cuenta ***organizar la información*** y elaborar al menos dos reportes (técnico, presentando los detalles y ejecutivo con hallazgos resumidos y en un lenguaje que todos puedan entender).

</br>

Y si nos toca presentar nuestros resultados como un peritaje legal frente autoridades debemos tener en especial consideración el hecho de que todo puede tener una repercusión legal sobre nosotros mismos, por lo que debemos estar ***blindados*** además de tener la ***habilidad para expresar*** tanto de forma técnica como en un lenguaje sencillo nuestro proceso, evidencias y resultados.

</br>

*¡Gracias por leer y diviértete jugando a ser un Sherlock Holmes digital pero sin olvidar la enorme responsabilidad que conlleva!*

</br>
