---
title: Máscaras de subred
description: ¿Cuántas máquinas puede tener la red?
date: 2024-05-26T18:30
imgSrc: "/assets/images/_posts/redes/mascaras.png"
imgAlt: "Ilustración digital destacando máscaras de red con íconos de seguridad y privacidad en línea."
layout: "@/layouts/BasePost.astro"
---

**Las máscaras de sub red son lo que nos indica cuántas máquinas puede tener una red.**

</br>

Las máscaras están compuestas por 32 bits (4 grupos de 8 bits, recordemos que cada bit es un 0 o un 1).

Si no vieron el post de <span style="color: violet">[sistema binario de la serie de lógica](/blog/logica/sistema-binario/)</span>, es un buen momento.

</br>

La primera parte de una máscara va a estar con unos y la segunda con ceros, es decir, siempre vamos a tener primero los unos y al final los ceros.

La parte de los unos de la máscara es la que indica el identificador de red y la parte de los ceros es la que determina la cantidad de hosts posibles (a la que debemos restarle dos para conocer el rango que realmente podemos utilizar ya que el primero es el identificador de red y el último es la broadcast IP que utilizamos para enviar mensajes a todas las máquinas de la red y que por motivos obvios no podemos asignar a una).

</br>

Veamos un ejemplo, supongamos que nuestra máscara es 255.255.255.0 (recordemos que el número máximo para cada grupo de 8 bits es 255, o sea 11111111), en este caso tendríamos en los primeros 3 grupos unos y en el último ceros.

![Ejemplo de 255.255.255.0](/assets/images/_posts/redes/2552552550.png)

</br>

Un ejemplo más, vamos a ver que pasa con 255.255.255.192 (recordemos que 192 es 11000000 en binario), lo que nos deja con 26 unos y 6 ceros:

![Ejemplo de 255.255.255.192](/assets/images/_posts/redes/255255255192.png)

</br>

**Ok, pero ¿cuantas máquinas puede tener la red?**

</br>

Para calcular el número posible de hosts según la máscara vamos a utilizar la cantidad de ceros, para ello simplemente vamos a calcular la potencia de 2 elevado al número de ceros y luego le restamos dos.

</br>

En el ejemplo de 255.255.255.0, el número de ceros es 8, por lo que tenemos 2 ^ 8 = 256, y al restarle 2 tenemos que los hosts posibles son 254.

</br>

Para 255.255.255.192, tenemos 2 ^ 6 = 64, y 64 - 2 = 62 hosts posibles.

</br>

**¿Y si necesitamos crear la máscara?**

</br>

Supongamos que necesitamos crear una máscara para una red que tendrá un máximo de 8500 hosts.

</br>

Lo que debemos hacer es calcular el logaritmo en base 2 del número de hosts que necesitamos más 2 y redondear hacia arriba.

</br>

Para éste caso el logaritmo de 8502 redondeado hacía arriba es 14, por lo que nuestra máscara deberá tener 14 ceros:
![8500 hosts](/assets/images/_posts/redes/8500hosts.png)

</br>

En éste caso vamos a tener 16382, pero si utilizáramos 13 ceros en lugar de 14 tendríamos 8190 y no alcanzaría para los 8500 dispositivos que se necesitan direccionar en nuestra red.

</br>

*Espero que practiquen a crear máscaras o ver cuántas máquinas puede tener una red según su máscara!*

</br>
