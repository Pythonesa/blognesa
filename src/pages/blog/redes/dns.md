---
title: DNS
description: Traduciendo direcciones.
date: 2024-06-16T06:00
imgSrc: "/assets/images/_posts/redes/dns.png"
imgAlt: "Ilustración digital de un globo luminoso con las letras ‘DNS’ en el centro, rodeado de iconos de tecnología y conectividad."
layout: "@/layouts/BasePost.astro"
---

**¿Te imaginas tenerte que acordar o llevar un registro de todas las direcciones IPs de los sitios web que visitas? ¡Sería super molesto! Por ésto surgió la necesidad de tener un sistema de nombres de dominio (***DNS - Domain Name System***) que asociara las direcciones numéricas (IPs) a nombres de dominio que fueran fácil de recordar para los humanos. Estas direcciones amigables para los humanos también hacen posible que ingresando a través de él en el navegador si mi web utiliza una CDN (***Content Delivery Network***, Red de Distribución de Contenido en español) ese servidor DNS que se encarga de la traducción redireccione a mi usuario al servidor más cerca según su ubicación.**

</br>

**Registros DNS:**

</br>

Los registros son básicamente instrucciones que se almacenan en servidores DNS y que proporcionan información sobre un dominio (dirección IP asociada y cómo gestionar las solicitudes que llegan a ese dominio).

</br>

***Tipos principales de registros DNS:***

</br>

**SOA (***Start Of Authority***):** El registro de *inicio de autoridad* proporciona información sobre el origen de los datos DNS del dominio. Por ejemplo, contiene el nombre del servidor primario, el correo del administrador, etc. Es crucial para la gestión del DNS ya que indica el servidor principal y parámetros para la zona DNS. Es el *dueño* del registro del dominio.

</br>

**A (***Address***):** Asocia un nombre de dominio con una dirección IPv4 (para IPv6 está el AAAA que cumple la misma función). Es el tipo de registro más básico y común. Es el que le dice a qué dirección IP debes ir cuando ingresas una URL.

</br>

**CNAME (***Canonical Name***):** Asocia un nombre de dominio con otro nombre de dominio. Sirve para redirigir un subdominio a otro dominio. Muy útil para alias o subdominios.

</br>

**NS (***Name Server***):** Especifica los servidores de nombres que son autoritativos (mantienen los registros oficiales) para el dominio. Son super importantes ya que si están mal configurados nadie va a conseguir siquiera cargar el dominio de tu sitio web.

</br>

**MX (***Mail Exchange***):** Define los servidores de correo electrónico para el dominio. Indica a donde deben enviarse los emails, puede tener prioridades para balanceo de carga y redundancia, etc.

</br>

**TXT:** Es una especie de comodín en texto plano. Se usa para muchas cosas, como verificación de un dominio, SPF (tipo de registro que contiene una lista de los servidores de correo autorizados para un dominio), DKIM (almacena la clave pública DKIM, DKIM es un método de autenticación de email que se usa para evitar spams y otras cosas maliciosas) y otros registros de configuración.

</br>

**PTR (***Pointer***):** Asocia una dirección IP con un nombre de dominio. Su uso es principalmente la resolución inversa, útil para servicios de correo electrónico y logs. Ayuda a evitar la suplantación (especialmente en servidores de correo).

</br>

**SRV (***Service***):** Contiene información sobre servicios específicos, como el puerto y la prioridad. Permite localizar estos servicios específicos dentro de un dominio, como servidores de VoIP.

</br>

**CAA (Certificate Authority Authorization):** Especifica qué autoridades de certificación pueden emitir certificados SSL para el dominio. Mejora la seguridad ya que limita quién puede emitir certificados para el dominio.

</br>

**Herramientas:**

</br>

Existen herramientas en internet que nos permiten obtener la información de estos registros DNS, les dejo dos de ellas:

</br>

<span style="color: violet;">[**DNSdumpster**](https://dnsdumpster.com/):</span> Hace un desglose de los registros para el dominio que le pasamos además de un mapa.

</br>

<span style="color: violet;">[**Network Tools**](https://mxtoolbox.com/supertool.aspx):</span> Permite consultar los registros de un dominio, además de incluir otras herramientas como consultar la información de registro del dominio (whois), chequear la reputación de un dominio (blacklist), probar un servidor SMTP, obtener información del bloque de dirección (arin), verificar las conexiones TCP, http y https permitidas,realizar ping o trace route y obtener un informe de posibles problemas del DNS.

</br>

*Como siempre, espero que les haya gustado, que investiguen más y que vayan a stalkear dominios... digo... nos vemos!*

</br>
