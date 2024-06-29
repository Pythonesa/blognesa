---
title: Python en VS Code
description: Mis extensiones favoritas
date: 2024-06-30T01:50
imgSrc: "/assets/images/_posts/tips/pyvscode.png"
imgAlt: "Imagen que muestra el logo de python en un editor de código en una pc de escritorio."
layout: "@/layouts/BasePost.astro"
---

**VS Code es como la navaja suiza de los editores de código, versátil, de código libre, con una gran comunidad detrás y super personalizable con sus extensiones que lo hacen casi mágico (o casi un IDE), tanto que puede hacerte extrañar la simplicidad, rapidez y eficiencia de un buen editor (te quiero Vim, pero tu curva de aprendizaje no es apta para cardíacos ni para quien esta aprendiendo).**

</br>

Dado que mi blog está orientado a personas que están aprendiendo vamos a hablar unicamente de VS Code, porque es sin dudas el editor más intuitivo, lleno de comodidades y facilidades que hacen que utilizarlo sea un paseo por el parque en el que todo está a mano y no suma la complejidad de tener que complicarse con comandos y configuraciones.

</br>

Además, salvo en entornos laborales donde la eficiencia extrema es una necesidad y en los que claramente usar otra cosa que Vim sería un error (si, lo siento usar neoVim o esas cursilerías modernas no te va a convertir en el mejor kaker del universo, asi que si no las usas solamente porque te gustan, mi más sentido pésame a tu cerebro) o en casos puntuales donde un IDE específico te brinda una ventaja, VS Code suele ser la elección perfecta.

</br>

**Perfiles:**

</br>

El problema de VS Code, sobre todo si lo usamos para múltiples tecnologías para las cuales instalamos muchas extensiones es que al cargar se va consumir literalmente todos los recursos de tu PC.

Además pueden generarse problemas o confusiones que relenticen tu flujo de trabajo.

</br>

Para evitarlo, usamos los perfiles de VS Code.

</br>

Crear un nuevo perfil es tan fácil como ir a Archivo -> Preferencias -> Perfiles -> Crear Perfil...

![Pasos para crear un nuevo perfil](/assets/images/_posts/tips/perfil1.png)

Luego nos abre el cuadro de diálogo donde ingresamos el nombre para nuestro nuevo perfil, podemos seleccionar un ícono bonito que lo identifique y ya, lo creamos y tenemos nuestro nuevo perfil.

![Creando un perfil](/assets/images/_posts/tips/perfil2.png)

</br>

**Las extensiones que uso en todos mis perfiles y no pueden faltar en el de Python:**

</br>

***Para la ortografía:***

</br>

<span style="color: violet;">[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)</span> es una extensión que ayuda a corregir errores de ortografía, no hay mucho más que decir.

</br>

<span style="color: violet;">[Spanish - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-spanish)</span> es un add-on que sirve para corregir errores de ortografía en español.

</br>

***Porque programar solo es aburrido:***

</br>

<span style="color: violet;">[Codeium](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.codeium)</span> es simplemente la mejor compañía que se puede tener mientras se codea. Autocompleta, explica, refactoriza, genera tests unitarios, documentación, tiene contextos personalizables, un chat integrado, en fin, ah y siempre gratis! Es el senior que necesitas al lado si sos junior y el junior que necesitas al lado si sos senior.

</br>

***Bonito y en Dark Mode:***

</br>

Incluyo ésto porque, bueno, es importante que lo que estamos viendo todo el tiempo que pasamos en el editor escribiendo código o buscando donde lo rompimos sea agradable, no solo por lo bonito, sino que de verdad el dark mode protege nuestra vista, además de que es más bonito... en serio, el light mode es de psicópatas, no lo usen...

</br>

<span style="color: violet;">[Catppuccin Icons for VS Code](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc-icons)</span> son los iconos que utilizo en todos mis perfiles.

</br>

Temas utilizo 2, uno más amistoso para las cosas de front: <span style="color: violet;">[Catppuccin for VSCode](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc)</span>, y uno que es oscuridad pura y bien bonita para las cosas de back <span style="color: violet;">[Celestial](https://marketplace.visualstudio.com/items?itemName=apvarun.celestial)</span>.

</br>

***Para los repos:***

</br>

<span style="color: violet;">[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)</span> es la mejor aplicación para ver el historial de cambios de un repositorio y saber rápidamente a quien llamar para insultar cuando algo falla, otros podrán decir que acelera la colaboración y bla bla bla...

</br>

***Porque los logs deben verse bonitos:***

</br>

<span style="color: violet;">[Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)</span> es una extensión que le da color a tu vida y a los logs tanto en la salida de consola como en los archivos.

</br>

**Las extensiones que uso en mi perfil de Python:**

</br>

***Lo más básico:***

</br>

<span style="color: violet;">[Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)</span> es la extensión oficial que instala todo lo necesario para el uso de Python dentro de VS Code.

</br>

***Si la documentación importa:***

</br>

<span style="color: violet;">[autoDocstring](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring)</span> snippets para generar docstrings.

</br>

***Para que el código sea más bonito:***

</br>

<span style="color: violet;">[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)</span> es una extensión para mejorar los comentarios, que quedan así bien bonitos con sus colorcitos:

![Comentarios](/assets/images/_posts/tips/comentarios.png)

</br>

<span style="color: violet;">[indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)</span> es una extensión que le da color a los bloques de código para que ya no vuelvas a tener errores porque indentaste feo y no te diste cuenta, los colores y eso se le pueden personalizar para que sea más bonito o algo:

![indent-rainbow](/assets/images/_posts/tips/indent.png)

</br>

<span style="color: violet;">[Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)</span> es una extensión que marca los espacios que te dejaste al final de tus líneas.

</br>

***Para los tests:***

</br>

<span style="color: violet;">[Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)</span> provee una interfaz para correr test en VS Code de cualquier framework utilizando su adaptador.

</br>

<span style="color: violet;">[Python Test Explorer for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter)</span> permite correr tests de Unittest, Pytest o Testplan con la extensión de Test Explorer UI.

</br>

Y <span style="color: violet;">[Test Adapter Converter](https://marketplace.visualstudio.com/items?itemName=ms-vscode.test-adapter-converter)</span> para convertir los tests de Test Explorer UI a nativos de VS Code testing.

</br>

***Para hacer el debugging y la vida más fácil:***

</br>

<span style="color: violet;">[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)</span> permite ejecutar un bloque de código, una selección o un archivo sin necesidad de ejecutarlo todo, lo que es super útil para debuggear funciones o cosas así.

</br>

<span style="color: violet;">[AREPL for python](https://marketplace.visualstudio.com/items?itemName=almenon.arepl)</span> es una extensión que permite hacer una evaluación en tiempo real del código (variables, outputs, etc.):

![AREPL](/assets/images/_posts/tips/arepl.png)

</br>

*Espero les haya gustado y ayudado si necesitaban ideas sobre que extensiones instalar!*

</br>
