---
title: DHCP
description: Y la máquina sabe quién es...
date: 2024-06-24T21:20
imgSrc: "/assets/images/_posts/redes/dhcp.png"
imgAlt: "Ilustración isométrica de una configuración de red DHCP con un servidor central y dispositivos conectados, destacando con un esquema de colores oscuros y acentos en azul neón y naranja."
layout: "@/layouts/BasePost.astro"
---

**Hemos visto que una máquina tiene una dirección física (que identifica el puerto como tal, o sea, el hardware físico, una tarjeta de red u otro tipo de conector específico), una dirección lógica (IP), también vimos máscaras, gateways y DNS. ¿Qué sigue? Hasta ahora hemos hecho todo de forma manual y es hora de hablar del Protocolo de Configuración de Host Dinámico (***DHCP - Dynamic Host Configuration Protocol***).**

</br>

Un servidor DHCP va a encargarse de recibir las peticiones de los hosts con sus direcciones físicas y va a asignarles una dirección lógica de manera dinámica junto a los demás parámetros necesarios para conectarse a la red.

</br>

Esto nos ahorra el tener que configurar manualmente máquina por máquina y se adapta fácilmente a los cambios del entorno.

Además podemos reservar rangos de direcciones para usos específicos (por ejemplo, para que cada área de una empresa tenga acceso unicamente a ciertos servidores) y establecer una IP reservada para una misma dirección física (para que a una máquina basada en su MAC siempre reciba la misma IP).

</br>

**Papel del DHCP en la ciberseguridad:**

</br>

Al automatizar la asignación de direcciones IP, permite mantener un control centralizado sobre que dispositivos se conectan a la red y sus configuraciones, por lo que facilita la implementación de políticas de red más estrictas lo que es fundamental para la segmentación de la red y ayuda a prevenir la propagación de amenazas y a mitigar el impacto de posibles compromisos de seguridad.

</br>

El hecho de que nos permita asignar direcciones IP estáticas a dispositivos específicos basados en su dirección física (MAC) nos da una capa extra de seguridad al garantizar que ciertos dispositivos tendrán siempre la misma identidad en la red, lo que nos facilita la gestión de políticas de acceso y de firewalls.

</br>

Pero ya, no todo es color de rosas, asi que también nos plantea ciertos desafíos.

</br>

***Rogue DHCP Servers:***

</br>

Una de las amenazas más comunes es la introducción de un servidor DHCP malicioso a la red. Son servidores no autorizados que pueden asignar direcciones IP incorrectas o configurar parámetros inapropiados, causando redirecciones de usuarios a sitios maliciosos o creando conflictos de IP.

</br>

Por suerte, tenemos forma de mitigar este riesgo por medio de la Autenticación DHCP (implementar protocolos de autenticación, como 802.1X, para asegurar que solo dispositivos autorizados puedan actuar como servidores DHCP) y el filtrado de IP y MAC (configurar ACLs, listas de control de acceso, para permitir que unicamente dispositivos conocidos y confiables ofrezcan servicios DHCP).

</br>

***DHCP Starvation Attack:***

</br>

Un ataque de agotamiento DHCP se trata de enviar múltiples solicitudes DHCP con diferentes direcciones MAC, agotando el pool de direcciones IP disponible y denegando el servicio a usuarios legítimos.

</br>

Para esto también tenemos dos estrategias de mitigación:

</br>

*Port Security:* configurar la seguridad en los puertos de acceso para limitar el número de direcciones MAC permitidas por puerto.

</br>

*Rate Limiting:* implementar protocolos que limiten la velocidad o la cantidad de solicitudes DHCP en un período de tiempo.

</br>

***IP Spoofing:***

</br>

Alguien puede configurar manualmente una dirección IP que ya está en uso o una fuera del rango asignado por el servidor DHCP, como poco creando conflictos y potencialmente interceptando tráfico destinado al dispositivo que está suplantando.

</br>

Para mitigar esto podemos implementar DAI (Dynamic ARP Inspection, y ARP es por Address Resolution Protocol), lo que nos permite asegurarnos de que solo las direcciones IP asignadas por el servidor DHCP están autorizadas para comunicarse en la red.

Y también lo que se conoce como ARP Spoofing Prevention, que se trata de configurar switches y routers para detectar y bloquear intentos de suplantación del ARP.

</br>

**Otra buena práctica que va de la mano con el uso de ACL:**

</br>

Las listas de control de acceso son una herramienta poderosa para mejorar la seguridad de una red, como dijimos más arriba, ya que nos ayudan a prevenir que dispositivos no autorizados envíen o reciban tráfico.

</br>

El segregar el tráfico utilizando VLANs para separar el tráfico DHCP del tráfico normal de datos limita el alcance de un posible ataque y mejora la seguridad general de la red.

</br>

Al utilizar esto en conjunto, al momento de segmentar la red con VLANs pueden aplicarse ACLs para controlar el tráfico entre las VLANs (por ejemplo, podemos permitir unicamente a un dispositivo de una VLAN tener acceso al servidor DHCP ubicado en otra VLAN).

Y también podemos definir políticas de seguridad más precisas, como por ejemplo, permitir solicitudes al puerto UDP 67 (utilizado por el servidor DHCP) y 68 (utilizado por el cliente DHCP) solo desde dispositivos en una VLAN específica y bloquear todos los demás.

</br>

**Las buenas prácticas que debemos tener siempre:**

</br>

***Monitorización y detección de anomalías:*** Una buena configuración de logs que registren todas las solicitudes y asignaciones de IPs es esencial, casi tanto como que los revises regularmente para identificar comportamientos inusuales y potencialmente maliciosos. Además, un buen IDS (sistema de detección de intrusiones) para monitorear el tráfico en busca de patrones que puedan sugerir ataques somo DHCP Starvation o la presencia de servidores DHCP no autorizados es un aditivo genial.

</br>

***Configuraciones:*** definir rangos de direcciones IP específicos para diferentes segmentos de la red y evitar asignar IPs fuera de esos rangos junto a ajustar la duración de las concesiones DHCP según las necesidades de la red (concesiones más cortas pueden facilitar la recuperación de direcciones IP en redes muy dinámicas, mientras que más largas en redes más estables reducen la carga y facilitan las revisiones de seguridad).

</br>

***Implementar DHCP Snooping:*** es una función de seguridad que filtra las solicitudes DHCP y solo permite pasar aquellas provenientes de puertos confiables, previniendo DHCP Spoofing y Starvation. Además mantiene una tabla de bindings que registra las direcciones IP y MAC asignadas por el servidor DHCP y que puede ser utilizada por otras funciones de seguridad como ARP Inspection para validar la autenticidad de los dispositivos en la red.

</br>

***Usar IPs estáticas y reservadas:*** configurar reservaciones DHCP para dispositivos críticos basadas en su MAC garantiza que siempre tengan la misma identidad de red y facilita la gestión de políticas especificas. Además la segmentación de dispositivos utilizando IPs estáticas como servidores, impresoras, cámaras de seguridad, etc., simplifica la administración y mejora la seguridad al evitar que estos dispositivos reciban IPs dinámicas.

</br>

***Software actualizado y parcheado regulamente:*** asegurarse de que el software del servidor DHCP y los dispositivos de red estén siempre actualizados con los últimos parches de seguridad es algo que debemos tener siempre en cuenta ya que previene la explotación de vulnerabilidades conocidas.

</br>

*En resumen, que DHCP es esencial y genial, pero como toda tecnología de red es susceptible a diversas amenazas. Implementar medidas de seguridad robustas minimiza el riesgo y crea un entorno de red más seguro y eficiente (si, si lo haces bien no solo protegerás tu red sino que optimizarás su eficiencia operativa y la estabilidad general del sistema). ¡Anda, corre, explora y que nadie rompa tu red!*

</br>
