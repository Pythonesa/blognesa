---
title: Rutas
description: Máquina, ¿dónde estás?
date: 2024-06-26T16:00
imgSrc: "/assets/images/_posts/redes/rutas.png"
imgAlt: "Vista nocturna de una ciudad con edificios iluminados y redes digitales que simbolizan conectividad global."
layout: "@/layouts/BasePost.astro"
---

**Hablamos mucho de direcciones, ahora toca hablar de rutas... porque bueno, nuestro tráfico debe seguir una ruta para llegar a su destino, no es como simplemente teletransportamos los datos de un dispositivo a otro!**

</br>

Al igual que cuando queremos ir a un lugar conociendo su dirección necesitamos ver que camino seguir para llegar hasta allí, la información que enviamos desde nuestro dispositivo a una dirección de red deberá circular por una ruta para poder llegar a su destino.

Y al igual que podemos tener un camino fijo o ir por caminos diferentes desde nuestra casa a la de un amigo, podemos tener rutas estáticas o dinámicas para traficar datos en la red.

</br>

Podemos "stalkear" nuestro tráfico utilizando el comando traceroute en sistemas basados en unix o tracert en windows desde una consola seguido de la dirección.

Con esto, vamos solicitando a cada nodo por el que pasa el paquete que hemos enviado el tiempo de respuesta.

Es una herramienta muy útil para analizar la latencia y también diagnosticar en que punto exacto hay una falla cuando nuestros paquetes no pueden llegar a su destino.

</br>

**Rutas estáticas:**

</br>

Son caminos definidos manualmente por el administrador de red para que los paquetes sigan un camino específico hacia su destino. El hecho de no cambiar a menos que se modifiquen manualmente las suele hacer muy confiables para ciertas aplicaciones.

</br>

Tienen como ventajas el ser fáciles de configurar y no requerir de protocolos adicionales para funcionar; ofrecer control total sobre las rutas que seguirán los paquetes, lo que es ideal para aplicaciones críticas donde se necesite asegurar que el tráfico siempre seguirá el mismo camino; y además al no generar tráfico adicional para intercambiar información de enrutamiento su consumo de recursos es más bajo, lo que para una red pequeña o enlaces con ancho de banda limitado es una ventaja.

</br>

Sus desventajas son que no son prácticas para redes grandes o complejas ya que requieren una gran cantidad de configuraciones manuales lo cual genera también problemas de escalabilidad; y si una ruta falla, no hay un mecanismo automático para redirigir el tráfico, a menos que se configure una ruta alternativa manualmente.

</br>

**Rutas dinámicas:**

</br>

Son rutas que se configuran automáticamente mediante protocolos de enrutamiento dinámico, como pueden ser OSPF (Open Shortest Path First), EIGRP (Enhanced Interior Gateway Routing Protocol) o BGP (Border Gateway Protocol), que permiten que los routers intercambien información sobre las mejores rutas disponibles y adapten las rutas automáticamente en respuesta a cambios en la topología de la red.

</br>

Como ventajas tienen la adaptabilidad (pueden ajustarse automáticamente ante fallas o cambios), la escalabilidad (ideales para redes grandes y complejas, ya que pueden gestionar y actualizar un gran número de rutas de manera dinámica), y redundancia (si una ruta falla proporcionan alternativas automáticamente, lo que mejora la resiliencia de la red).

</br>

Y sus desventajas son la complejidad de configuración y gestión en comparación con las estáticas, y el consumo de recursos ya que generan trafico para intercambiar información de enrutamiento y consumen más recursos del router para procesar esos datos.

</br>

**Consideraciones de seguridad para rutas estáticas:**

</br>

Hay tres puntos fuertes a considerar cuando se usan rutas estáticas:

</br>

***Control de acceso:***

</br>

Restringir el acceso para que unicamente personal autorizado pueda acceder y modificar la configuración de enrutamiento en los routers. Utilizar contraseñas fuertes, autenticación multifactor y todas esas cosas bonitas. Además de implementar RBAC (controles de acceso basados en roles) para limitar las acciones que los usuarios pueden realizar en los dispositivos de red.

</br>

***Seguridad física:***

</br>

Asegurarse de que los enrutadores y otros dispositivos de la red estén físicamente protegidos en entornos seguros para prevenir accesos no autorizados.

</br>

***Auditoría y monitoreo:***

</br>

Como siempre configurar logs para mantener registros detallados, ésta vez de todos los cambios en la configuración de enrutamiento y revisarlos regularmente para detectar modificaciones no autorizadas.

Además de configurar alertas de seguridad para cambios de configuración e intentos de acceso no autorizados.

</br>

**Consideraciones de seguridad para rutas dinámicas:**

</br>

Tenemos 5 puntos fuertes a considerar cuando se usan rutas dinámicas:

</br>

***Autenticación de protocolos:***

</br>

Implementar autenticación en protocolos para asegurar que solo dispositivos autorizados puedan participar en el intercambio de rutas. Por ejemplo, en OSPF se puede utilizar MD5 para autenticar los mensajes de enrutamiento.

</br>

***Filtrado de rutas:***

</br>

Usar listas de acceso y políticas de enrutamiento para controlar qué rutas se informan a otras redes y cuales se aceptan. Esto ayuda a prevenir la propagación de rutas incorrectas o maliciosas.

</br>

***Protección contra ataques de enrutamiento:***

</br>

Configurar, por ejemplo, BGP con autentificación y medidas de seguridad como GTSM (mecanismo de seguridad TTL) y RPKI (Resource Public Key Infrastructure) para proteger contra ataques como route leaks y BGP hijacking.

</br>

***Monitoreo y análisis:***

</br>

Usar herramientas de monitoreo en tiempo real para detectar y responder rápidamente a anomalías en el enrutamiento, además de implementar sistemas de análisis de tráfico para identificar patrones inusuales que puedan indicar ataques, como anomalías en la información de las rutas que se anuncian o se reciben.

</br>

***Segmentación y redundancia:***

</br>

Dividir la red en segmentos más pequeños y utilizar VLANs para limitar el alcance de los problemas de seguridad, y configurar rutas redundantes para asegurar que el tráfico pueda ser redirigido en caso de una falla o ataque mejoran la resiliencia de la red.

</br>

**Conclusión:**

</br>

La seguridad en el enrutamiento es fundamental para mantener la integridad y disponibilidad de la red. Implementar medidas de seguridad adecuadas ayuda a proteger la red contra amenazas variadas y ayuda a crear un entorno de red más seguro y resiliente.

</br>

*Asi que, espero que este artículo te haya sido de ayuda o al menos hayas disfrutado de la lectura!*

</br>
