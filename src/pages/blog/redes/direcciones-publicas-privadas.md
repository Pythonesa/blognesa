---
title: Direcciones públicas y privadas
description: NAT/PAT es una capa de defensa.
date: 2024-06-10T05:30
imgSrc: "/assets/images/_posts/redes/PrivPubDirs.png"
imgAlt: "Ilustración de una casa con íconos de internet, representando direcciones públicas y privadas."
layout: "@/layouts/BasePost.astro"
---

**¿Por qué tenemos direcciones públicas y privadas?**

</br>

Resumidamente, cuando se creo IPv4 nunca pensaron que podría existir la necesidad de tener más de 16 millones de direcciones.

Entonces, en 1996 se estableció el RFC 1918 determinando rangos de direcciones que pueden ser usadas en redes privadas (como oficinas, casas, etc.). Estas serán enmascaradas para la navegación en internet por medio de IPs que son usadas en redes públicas.

</br>

O sea, que hay un organismo (IANA - *Internet Assigned Numbers Authority*) que asigna direcciones públicas que no pueden ser repetidas a distintos organismos (como los proveedores de internet) y ellos a su vez asignan una dirección privada a sus clientes que no pueden ser repetidas debajo del mismo proveedor; y al mismo tiempo nosotros utilizamos direcciones privadas para la red interna de nuestra casa u organización que no pueden ser repetidas dentro de la misma.

</br>

Para que quede claro, no existen dos países que se llamen igual (por lo que podemos comparar los países a las direcciones públicas), pero puede existir una ciudad dentro de más de un país que tenga el mismo nombre (por lo que podemos comparar las ciudades a las direcciones privadas), así mismo puede existir una calle y número de puerta (casa) que sean iguales dentro del mismo país, pero en diferentes ciudades.

De ésta forma se pueden reutilizar los nombres de las ciudades en todos los países, y todos los nombres de calles y números en todas las ciudades.

Si yo envío una carta con una dirección que no tenga el país mi carta nunca va a llegar porque cómo dijimos puede que muchos países tengan la misma dirección privada, ahora cuando coloco el país mi carta va a llegar porque quien se encargue de repartir las cartas en ese país conocerá la ciudad y la dirección donde debe ser entregada.

</br>

Ahora, para que eso funcione en las direcciones IP, debemos tener algo que nos permita enmascarar (o traducir) nuestras direcciones privadas en públicas y viceversa.

Y esa es la solución que nos da NAT (*Network Address Translation*) que traduce una dirección privada a una dirección publica y viceversa.

También es interesante conocer la técnica (o extensión) PAT (*Port Address Translation*), qué es la más común en redes del hogar y que nos permite traducir muchas direcciones privadas a una dirección publica (y una pública a varias privadas) e identificar cada sesión de dispositivos a través de un puerto que se asigna al hacer la petición.

Las principales diferencias son que NAT utiliza una IP pública global mientras PAT traduce las direcciones de una red interna a la IP pública con ayuda de un número de puerto; PAT puede verse como una forma de NAT dinámica, NAT usa IPv4 mientras PAT usa IPv4 junto al número de puerto, NAT tiene una relación de uno a uno, mientas PAT tiene una relación de muchos a uno.

Si no fuera por NAT y en mi casa estoy chateando por WhatsApp en el celular y al mismo tiempo alguien más está conectado jugando Smash Karts en una computadora, los mensajes que debería recibir en mi celular también llegarían a la pc y el tráfico del juego al celular.

</br>

Los rangos que se establecen para direcciones privadas (y por ende no son válidas en internet) son:

Para clase A de 10.0.0.0 hasta 10.255.255.255.

Para clase B de 172.16.0.0 hasta 172.31.255.255.

Y para clase C de 192.168.0.0 hasta 192.168.255.255.

</br>

**Consideraciones de seguridad sobre NAT y PAT:**

</br>

NAT mejora la seguridad ya que las IPs de los hosts internos son invisibles, lo que dificulta un poco que un atacante identifique dispositivos específicos dentro de una red.

Sin embargo, NAT tiene algunas limitaciones ya que algunas aplicaciones requieren conexiones entrantes específicas y puede ser difícil mapear puertos internos específicos a externos.

PAT usa puertos de origen en el proceso de traducción y al igual que NAT oculta las direcciones IP de los hosts internos. Además añade una capa extra al utilizar puertos diferentes (hay que averiguar la IP como el puerto correcto).

Pero si es verdad que la configuración de PAT puede volverse muy compleja en redes grandes, y los errores de configuración llevan a potenciales brechas de seguridad.

</br>

**Resumiendo:**

</br>

Los protocolos NAT y PAT se usan para minimizar la necesidad de direcciones IP únicas a nivel global. Ambas funcionan como traductores de direcciones privadas a direcciones publicas. La pequeña diferencia está en el uso de puertos.

</br>

Tanto NAT como PAT son una capa en una estrategia de ciberseguridad, claramente no vamos a confiar en ellos para ser nuestra única barrera entre la red y el ciberespacio.

Pero para eso, toca esperar a que aprendamos sobre estrategias de defensa efectivas en capas.

Por ahora, con que sepan que NAT/PAT es una de ellas y que elegir y configurar bien (configurar, actualizar para evitar vulnerabilidades de implementación que puedan ser explotadas si no se parchean) es igual de importante que utilizar otras estrategias en conjunto como firewalls y sistemas de detección y prevención de intrusiones de los que vamos a hablar en un futuro cuando nos metamos con la serie de ciberseguridad me deja super contenta.

</br>

***Espero que amplíen un poquito lo que escribí, al menos que busquen y lean un poquito más sobre NAT y PAT. Que no les comenté lo de que es una de las estrategias de ciberseguridad que debemos analizar al momento de crear una defensa en capas efectiva solamente por crear hype para cuando arranque con la serie de ciberseguridad!***

</br>

***Como siempre, muchas gracias por leer! Y cualquier cosa, ya saben, pregunten por [discord](https://discord.gg/BcSA5n3wcw).***

</br>
