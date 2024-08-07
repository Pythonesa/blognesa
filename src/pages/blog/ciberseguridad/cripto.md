---
title: Criptografía y Estenografía
description: Protegiendo datos
date: 2024-08-07T15:00
imgSrc: "/assets/images/_posts/ciberseguridad/cripto.png"
imgAlt: "Laptop mostrando íconos de ciberseguridad con candados y monedas en un escritorio."
layout: "@/layouts/BasePost.astro"
---

**La criptografía juega un papel crucial en la seguridad al estar presente en todas las áreas para mantener los datos confidenciales mediante el cifrado. A través de un algoritmo matemático, el mensaje que se envía se convierte en una expresión ilegible a menos que tengas los permisos necesarios para leerlo.**

</br>

**Criptografía:**

</br>

La criptografía ha sido utilizada desde tiempos antiguos para proteger mensajes confidenciales. Un ejemplo clásico es el **cifrado César**, que consiste en reemplazar cada letra por la que se encuentra tres espacios adelante en el alfabeto. Aunque muy simple, este método ilustra cómo el cifrado puede transformar un mensaje legible en uno que solo el destinatario autorizado debería poder entender.

</br>

**Esteganografía:**

</br>

La esteganografía, por otro lado, es el arte de ocultar datos dentro de imágenes, audios u otros archivos. La información se esconde de tal manera que solo el remitente y el destinatario saben dónde está y pueden encontrarla. Sin embargo, si alguien descubre estos datos en el camino, podría leer la información sin problemas.

</br>

**Combinando Criptografía y Esteganografía:**

</br>

Para aumentar la seguridad, se pueden combinar la criptografía y la esteganografía. Esto nos permite no solo ocultar la información sino que también cifrarla. De este modo, si alguien encuentra los datos ocultos, no podrá leerlos sin la clave adecuada.

</br>

**Características clave de la criptografía:**

</br>

***Confidencialidad:*** Asegura que la información solo sea accesible a quienes están autorizados a verla.

</br>

***Integridad:*** Asegura que la información sea inmutable, o sea, que no se pueda alterar durante su transmisión.

</br>

***Autenticación:*** Confirma la identidad de las partes que se comunican.

</br>

***No repudio:*** Evita que una parte niegue haber enviado un mensaje.

</br>

**Características clave de la esteganografía:**

</br>

***Capacidad:*** Cantidad de información que se puede ocultar en un archivo sin que se detecte.

</br>

***Robustez:*** Resistencia del archivo esteganografiado a manipulaciones y ediciones (que no se rompa si lo tocan).

</br>

***Imperceptibilidad:*** Qué tan difícil es detectar la información oculta (si no se ve, no se encuentra).

</br>

***Seguridad:*** Nivel de dificultad para descubrir y extraer la información oculta.

</br>

**La importancia de las matemáticas en la criptografía:**

</br>

La criptografía se basa en principios matemáticos complejos, algunos conceptos esenciales que necesitas son:

</br>

***Teoría de números:*** Es lo más fundamental, especialmente en algoritmos como RSA, que se basan en la dificultad de factorizar grandes números primos. La factorización y la generación de números primos son aspectos clave.

</br>

***Algebra lineal:*** Utilizada en criptografía simétrica y criptosistemas de clave pública, como el algoritmo de cifrado AES y los esquemas basados en curvas elípticas. Aquí, se trabaja con matrices y vectores que son esenciales en ciertos algoritmos.

</br>

***Teoría de la información:*** Es crucial para entender conceptos como entropía, redundancia y capacidad de canal, que son fundamentales para medir la seguridad y eficiencia de los algoritmos criptográficos.

</br>

***Probabilidad y estadística:*** Esencial para el análisis de la fortaleza de los cifrados y la detección de patrones que puedan ser explotados en ataques. Ayuda a evaluar la aleatoriedad y a diseñar sistemas resistentes a ataques estadísticos.

</br>

**Consejos para comenzar en criptografía y esteganografía:**

</br>

Si estás interesado en adentrarte en ésta rama de la ciberseguridad, bienvenido y aquí te van los consejos de la tía Pythonesa.

</br>

Empieza por los *fundamentos matemáticos*, esos que nombramos recién ahí arribita.

</br>

Sigue por estudiar las *características clave de la criptografía* y la *características clave de la esteganografía*, si, también son las que mencionamos antes.

</br>

Explora *algoritmos clásicos y modernos* como el cifrado César, AES, RSA, ECC, y cualquiera que se te cruce por las narices. Céntrate en comprender como funcionan, como se aplican y sus fortalezas y debilidades.

</br>

Experimenta con *herramientas* como, por ejemplo, aprender a generar claves con OpenSSL o a firmar y cifrar mensajes con GnuPG (GPG). Juega con diferentes técnicas y formatos con Steghide para ocultar datos en imágenes (de gatitos) o audios. Estas herramientas son básicas, pero te ayudarán a aplicar los conocimientos que vayas adquiriendo y con suerte a pensar formas más efectivas.

</br>

Si no sabes *programar*, ¡aprende! Python es un lenguaje muy versátil con bibliotecas como PyCrypto o Cryptography que te permiten trabajar con diversos algoritmos criptográficos de manera eficiente.

Además, podrás implementar tus propias soluciones. Escribir tus propias implementaciones de algoritmos criptográficos y técnicas de esteganografía te ayudará a comprender mejor como funcionan estos procesos internamente (por favor, haz ésto, no te quedes solo con usar las cosas).

</br>

*En fin, sumergirse en la criptografía y la esteganografía requiere una combinación de conocimientos matemáticos, habilidades prácticas y una comprensión profunda de los conceptos de seguridad, pero si me preguntan a mi, es una de las ramas más emocionantes y críticas de la ciberseguridad.*

*¡Gracias por leer y que tus conocimientos te protejan de las fotos de gatitos!*

</br>
