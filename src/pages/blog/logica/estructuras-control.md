---
title: Estructuras de control
description: Dominando el flujo de un programa.
date: 2024-04-25T16:01
imgSrc: "/assets/images/_posts/logica1/control_flujo.png"
imgAlt: "En el corazón de la tecnología, componentes electrónicos se entrelazan formando un circuito, donde el flujo de datos es dirigido por estructuras de control precisas, reflejando la elegancia y complejidad del mundo digital"
layout: "@/layouts/BasePost.astro"
---

**Las estructuras de control son super importantes. Nos permiten controlar el flujo en nuestros algoritmos, tomando decisiones, realizando un proceso repetidas veces y hasta evaluando errores.**

Las vamos a dividir en dos grupos: estructuras de control condicionales y de repetición.

</br>

***Estructuras de control condicionales:***

Este tipo de estructuras de control son las que nos permiten tomar decisiones. Evalúan un valor o una condición y dependiendo de si el resultado es verdadero o falso van a dirigir el flujo de nuestros algoritmos (y más adelante al implementarlos, de nuestros programas) al siguiente paso que corresponda.

</br>

Supongamos que para llegar a una cafetería tenemos dos caminos, el más corto que sería el ideal pero se inunda cuando llueve por lo que si llueve debemos tomar el camino más largo.

Podríamos resumir esto en algo como:

```plaintext
si llueve
entonces tomar el camino más largo
sino tomar el camino más corto
```

Lo que hacemos es evaluar la condición *llueve* si llueve será verdadero y sino será falso. Y en base a esa decisión nuestro algoritmo nos indica el camino más adecuado.

</br>

Este ejemplo, en programación lo resolvemos con la estructura de control if (si) / else (sino).

Si fuéramos a escribirlo en Python sería:

```python
if llueve:
    print("Tomar el camino más largo")
else:
    print("Tomar el camino más corto")
```

Si bien podemos encontrar variaciones de un lenguaje a otro en cuanto a sintáxis e implementación de ciertas estructuras de control, la base lógica para ellas siempre será la misma.

</br>

Como segunda estructura condicional vamos a ver *switch* (según) que nos permite evaluar un valor y en base a compararlo con varios *case* (casos) dirigir el flujo a donde corresponda.

Además tenemos la opción de un caso extra por si el valor no coincide con ninguno de los anteriores. El *default* (por defecto) nos lleva al caso por defecto.

</br>

Pensemos que debemos crear un algoritmo que basados en una categoría de videojuegos muestre un juego recomendado.

```plaintext
según categoría:
    caso "acción":
        mostrar "Doom Eternal"
    caso "aventura":
        mostrar "Horizon Forbidden West"
    caso "estrategia":
        mostrar "Warhammer 40,000"
    caso "terror":
        mostrar "Resident Evil"
    caso "deportes":
        mostrar "Fifa 22"
    caso por defecto:
        mostrar "No hay juego recomendado para esta categoría"
```

Y ya que estamos, en C++:

```cpp
switch (category) {
    case "acción":
        cout << "Doom eternal" << endl;
        break;
    case "aventura":
        cout << "Horizon Forbidden West" << endl;
        break;
    case "estrategia":
        cout << "Warhammer 40,000" << endl;
        break;
    case "terror":
        cout << "Resident Evil" << endl;
        break;
    case "deportes":
        cout << "Fifa 22" << endl;
        break;
    default:
        cout << "No hay juego recomendado para esta categoría" << endl;
        break;
}
```

</br>

Y para terminar con las estructuras condicionales vamos a ver la que nos permite tomar decisiones en base a errores.

*try* (intentar) / *catch* (atrapar).

Lo sé, esta puede ser complicada de entender si nunca han programado o nunca la han usado, pero básicamente necesito que sepan y entiendan que existe una forma de manejar errores a través de una estructura, y posiblemente según el lenguaje sea más o menos complicada.

</br>

Imaginemos que queremos hacer un algoritmo para dividir dos números, debemos imaginar que el usuario puede intentar dividir por cero... entonces lo que hacemos es crear las instrucciones de nuestro algoritmo dentro de un bloque *try* el cual si algo falla le va a lanzar el error al *catch* para que lo maneje.

</br>

```plaintext
dividir (numerador, divisor) {
    try {
        mostrar numerador / divisor;
    } catch (error) {
        mostrar "Ocurrió un error al dividir, no habrás intentado dividir por cero, ¿verdad?";
    }
}
```

</br>

Y por usar otro lenguaje, vamos a implementar esto en JavaScript:

```javascript
function dividir(numerador, divisor) {
    try {
        console.log(numerador / divisor);
    } catch (error) {
        console.log("Ocurrió un error al dividir, no habrás intentado dividir por cero, ¿verdad?");
    }
}
```

</br>
</br>

***Estructuras de control de repetición o ciclos:***

Estas estructuras de control nos permiten repetir un bloque de instrucciones múltiples veces (y multiples veces también puede ser ninguna o una).

</br>

Vamos con que necesitamos un simple contador que comience en 0 y llegue a 10.

Como en este caso conocemos el valor inicial y el valor final, podemos usar un bucle *for* (para).

Este tipo de repetición nos pide conocer el valor inicial, el valor final y el incremento.

Sabemos que partimos de 0 y vamos a ir incrementando en 1 hasta llegar a 10.

```plaintext
para (contador = 0; si contador < 10; contador = contador + 1) {
    mostrar contador;
}
```

Otra forma de expresarlo más similar a un lenguaje de programación:

```plaintext
para (contador = 0; contador < 10; contador++) {
    mostrar contador;
}
```

</br>

Y para seguir la costumbre de variar de lenguaje le toca a PHP:

```php
for ($contador = 0; $contador < 10; $contador++) {
    echo $contador;
}
```

</br>

Muchos lenguajes nos permiten otra forma de utilizar *for* para hacer un bucle que recorra un iterable (una lista, por ejemplo) que sería algo como recorrer un arreglo de frutas y mostrarlas:

```plaintext
frutas = ["naranja", "uva", "manzana"];
para (fruta en frutas) {
    mostrar fruta;
}
```

</br>

¿En ruby?

```ruby
frutas = ["naranja", "uva", "manzana"]
for fruta in frutas do
    puts fruta
end
```

</br>

Y ya para terminar tenemos la estructura de control *while* (mientras) que nos permite repetir nuestras instrucciones mientras una condición sea verdadera.

Vamos con un ejemplo super clásico, queremos mostrar la cuenta atrás de un lanzamiento de un cohete:

```plaintext
cuenta = 10;
mientras (cuenta >= 1) {
    mostrar cuenta;
    cuenta = cuenta - 1;
}
mostrar "¡Lanzamiento de cohete!";
```

</br>

Y lo vamos a codear en lua:

```lua
cuenta = 10
while (cuenta >= 1)
do
    print(cuenta)
    cuenta = cuenta - 1
end
print("¡Lanzamiento de cohete!")
```

</br>

*Lo importante de este post es que entendamos lo siguiente: la lógica que podemos aplicar al diseñar un algoritmo puede ser trasladada al lenguaje de programación que nos interese (con un poco más o menos de trabajo por los detalles que puedan variar); además las herramientas que nos dan las estructuras de control de flujo para encausar nuestro algoritmo a que vaya por donde corresponda ante condiciones, errores, elementos y valores que pueden ser variables durante la ejecución del mismo.*

*Y además espero que hayan disfrutado los ejemplos en diversos lenguajes y tal vez se animen a probar alguna de estas estructuras de control en otros lenguajes.*

</br>

*¡Gracias por leer!*

</br>
