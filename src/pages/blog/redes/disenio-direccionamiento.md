---
title: Diseño de direccionamiento
description: Subnetting con VLSM.
date: 2024-06-01T22:30
imgSrc: "/assets/images/_posts/redes/disenioDireccionamiento.png"
imgAlt: "Imagen de una mano diseñando en un sistema futurístico una red compleja"
layout: "@/layouts/BasePost.astro"
---

**Vamos a llevar un poco a la práctica lo que hemos visto diseñando el direccionamiento de una red con VLSM.**

</br>

***¿Y qué es VLSM?***

VLSM (Variable Length Subnet Mask) o en español Máscara de Subred de Longitud Variable es una técnica que nos permite dividir una red en grupos desiguales para favorecer el aprovechamiento de direcciones IP.

Además de que nos permite descentralizar las subredes y de esa forma mejorar la seguridad y jerarquía de las mismas.

</br>

***Ok, vamos a ver un ejemplo.***

Supongamos que de una empresa que tiene 3 oficinas (dos en el edificio central que están conectadas por una red interna y otra remota conectada a través de internet) nos piden que hagamos el diseño para el direccionamiento de sus subredes.

</br>

Lo primero que debemos hacer es identificar cuantas subredes hay y cuantos hosts necesitan por cada subred.

</br>

Para éste ejemplo vamos a asumir que la empresa no va a expandirse en un futuro por lo que no deberemos tener en cuenta nada más que los datos del ejercicio.

</br>

Por lo tanto vamos a tener lo siguiente:

</br>

La primer oficina tiene 100 hosts.

La segunda oficina tiene 58 hosts.

Y la tercer oficina tiene 20 hosts.

</br>

Además debemos tener en cuenta que cada oficina cuenta con su router, por lo que cada oficina tiene un plus de 2 hosts para enlace.

</br>

Entonces, al identificar todo esto tendríamos algo así:

</br>

| Ubicación |  | Hosts |
| --- | --- | --- |
| Oficina 1 |  | 100 |
| Oficina 2 |  | 58 |
| Oficina 3 |  | 20 |
| Enlace 1 |  | 2 |
| Enlace 2 |  | 2 |
| Enlace 3 |  | 2 |
| **Total** |  | **184** |

</br>

Al tener un total de 184 hosts, podemos utilizar una ***clase C*** para la red (que permite direccionar hasta 254 hosts).

</br>

Lo que sigue es pensar en las máscaras (en nuestro caso ya tenemos ordenadas las redes de mayor a menor, pero sino, es conveniente hacerlo).

</br>

Ya vimos como calcular las máscaras en base a los host necesarios, asi que tendríamos las siguientes:

</br>

| Ubicación | Hosts | Máscara |
| --- | --- | --- |
| Oficina 1 | 100 | 255.255.255.128 |
| Oficina 2 | 58 | 255.255.255.192 |
| Oficina 3 | 20 | 255.255.255.224 |
| Enlace 1 | 2 | 255.255.255.252 |
| Enlace 2 | 2 | 255.255.255.252 |
| Enlace 3 | 2 | 255.255.255.252 |

</br>

Y ahora vamos a asignar las direcciones, vamos a tomar como identificador de red 192.168.1.0 (es una red privada):

</br>

Tengamos en cuenta que cada subred es consecutiva de la anterior por lo que va a comenzar con un identificador de red de un número en el último octeto mayor al broadcast de la subred anterior y va a cubrir la cantidad indicada por su máscara.

Por ejemplo, nuestra oficina 1 cubre desde 192.168.1.0 la cantidad de 128 por lo que termina en 192.168.1.127.

La oficina 2 va a tener 192.168.1.128 como identificador y va a cubrir la cantidad de 64... y todo así...

</br>
<table style="border: 1px solid violet; border-collapse: collapse; border-spacing: 0; border-collapse: separate; border-spacing: 2px;">
    <tr>
        <th style="padding: 2px; border-bottom: 1px solid violet;">Ubicación</th>
        <th style="padding: 2px; border-bottom: 1px solid violet;">Id de red</th>
        <th style="padding: 2px; border-bottom: 1px solid violet;">Broadcast</th>
        <th style="padding: 2px; border-bottom: 1px solid violet;">Rango para hosts</th>
    </tr>
    <tr>
        <td style="padding: 2px; border-right: 1px solid violet;">Oficina 1</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.0</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.127</td>
        <td style="padding: 2px;">192.168.1.1 a 192.168.1.126</td>
    </tr>
    <tr>
        <td style="padding: 2px; border-right: 1px solid violet;">Oficina 2</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.128</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.191</td>
        <td style="padding: 2px;">192.168.1.129 a 192.168.1.190</td>
    </tr>
    <tr>
        <td style="padding: 2px; border-right: 1px solid violet;">Oficina 3</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.192</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.223</td>
        <td style="padding: 2px;">192.168.1.193 a 192.168.1.222</td>
    </tr>
    <tr>
        <td style="padding: 2px; border-right: 1px solid violet;">Enlace 1</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.224</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.227</td>
        <td style="padding: 2px;">192.168.1.225 a 192.168.1.226</td>
    </tr>
    <tr>
        <td style="padding: 2px; border-right: 1px solid violet;">Enlace 2</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.228</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.231</td>
        <td style="padding: 2px;">192.168.1.229 a 192.168.1.230</td>
    </tr>
    <tr>
        <td style="padding: 2px; border-right: 1px solid violet;">Enlace 3</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.232</td>
        <td style="padding: 2px; border-right: 1px solid violet;">192.168.1.235</td>
        <td style="padding: 2px;">192.168.1.233 a 192.168.1.234</td>
    </tr>
</table>

</br>

*Espero que les haya gustado y que se animen a practicar!*

</br>
