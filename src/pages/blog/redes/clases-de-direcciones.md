---
title: Clases de direcciones
description: Asignando eficientemente las IPs.
date: 2024-05-27T14:30
imgSrc: "/assets/images/_posts/redes/clasesDirecciones.png"
imgAlt: "Representación visual de clases de direcciones de red con íconos de nubes, candados y símbolos Wi-Fi interconectados en un fondo oscuro con elementos digitales."
layout: "@/layouts/BasePost.astro"
---

**Una dirección IP nos permite conocer dónde está un dispositivo y a que grupo (red) pertenece. Las redes están divididas en clases que tienen sus características y que permiten una asignación eficiente del espacio de direcciones IP según el tamaño y necesidades de la red.**

</br>

**Clase A:**

Se utiliza para redes muy grandes (como las de ámbito mundial).

En su primer octeto (primer grupo de 8 bits) siempre vamos a encontrar un cero, por lo que será de 1 a 127.

Su rango utilizable va desde 1.0.0.0 hasta 126.255.255.255.

El rango de 0.0.0.0 a 0.255.255.255 no se va a utilizar para ninguna red (está en la especificación de IPv4).

El rango de 127.0.0.0 hasta 127.255.255.255 está reservado para *loopback*, es decir, para que un host redireccione el tráfico hacía si mismo (*localhost*).

Su máscara de subred estándar es 255.0.0.0.

</br>

**Clase B:**

Se utiliza para redes medianas (empresas, universidades, etc.).

El primer octeto siempre tiene el primer bit en 1 y el segundo en 0, por lo que va desde 128 a 191, lo que nos deja con un rango utilizable de 128.0.0.0 hasta 191.255.255.255.

Su máscara de subred estándar es 255.255.0.0.

</br>

**Clase C:**

Se utiliza para redes pequeñas (como las locales).

En su primer octeto los dos primeros bits siempre están en 1 y el tercero en 0. Por lo que va desde 192 a 223, lo que nos deja con un rango utilizable de 192.0.0.0 hasta 223.255.255.255.

Su máscara de subred estándar es 255.255.255.0.

</br>

**Clase D:**

Se utiliza para *multicast* (envío de paquetes a múltiples hosts al mismo tiempo, como los routers cuando se envían actualizaciones entre ellos), y por ello no va a tener una máscara de subred.

Su rango es de 224.0.0.0 hasta 239.255.255.255.

</br>

**Clase E:**

Se reserva para un uso experimental o futuro.

Su rango es de 240.0.0.0 hasta 255.255.255.255.

</br>

***Espero que les haya resultado interesante y que practiquen lo que vimos en el post anterior para saber cuántos hosts utilizando las máscaras por defecto de cada clase podrían tener!***

</br>
