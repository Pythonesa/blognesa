---
title: Funciones
description: Agrupando instrucciones.
date: 2024-05-12T02:01
imgSrc: "/assets/images/_posts/logica1/funciones.png"
imgAlt: "Estructura cúbica futurista con líneas interconectadas representando bloques de código."
layout: "@/layouts/BasePost.astro"
---

***Oh magníficos bloques de código que agrupan nuestras instrucciones para una cosa específica y nos permiten reutilizarlas.***

*Si, bueno, eso es lo que es una función... un bloque de código que contiene instrucciones para hacer una actividad específica, independiente del resto del código y que nos permite llamarla y reutilizarla en otras partes de nuestro código cuando la necesitamos.*

</br>
    
Nos permiten segmentar nuestro algoritmo en pequeñas partes que podemos utilizar y reutilizar ayudándonos a mejorar la legibilidad ya que es una herramienta que fomenta la simplicidad y la claridad, además de permitirnos reutilizar bloques de código que ya hemos escrito antes evitando la repetición de código.

</br>

Pensar y crear buenas funciones es una de las tareas más importantes que tenemos, ya que de ellas va a depender en gran medida no solo el tiempo que tardemos en programar en el presente, sino que a futuro serán la piedra angular de la mantenibilidad y extensibilidad de nuestra aplicación.

</br>

Debemos recordar siempre estas características de una función: debe contener instrucciones que nos permitan realizar una actividad específica (y solamente esa actividad), debe ser independiente (o sea, que no debe depender de una parte del resto del código) y debe ser reutilizable (si escribo una función que unicamente puedo utilizar una vez, está muy lindo para ordenar el código, pero como función es un poco inútil la pobre...).

</br>

Además debemos considerar futuros escenarios de uso de una función. Yo puedo escribir ahora una función que suma dos números, pero ¿siempre la necesidad de mi sistema va a ser la de sumar dos números? Si puedo identificar que en un futuro voy a necesitar sumar 3 o más, posiblemente va a ser mejor que mi función no reciba dos números sino un array de números para sumar.

Oh, pero eso la hace menos eficiente para lo que necesito en el momento que es sumar dos números (para sumar un array posiblemente tenga que hacer un bucle que lo recorra)... y sí, si fuera tan sencillo todo el mundo lo haría... cuando nos enfrentamos a éstas situaciones debemos analizar un montón de cosas... ¿qué es mejor? ¿qué estamos dispuestos a sacrificar y qué necesitamos priorizar? Claramente si no vamos a sacrificar recursos o eficiencia en pro de la reusabilidad de nuestra función en otro escenario nos vamos a quedar con los dos números, si vamos a sacrificarlo para tener una función que nos sirva para realizar cualquier tipo de suma nos vamos a quedar con el array... o, tal vez, llegamos a la conclusión de que nos quedamos con los dos números por la eficiencia de la función pero en un futuro deberemos añadir otra función para el array de números conservando ambas funciones de suma. ¡El límite es su imaginación y capacidad analítica de los requerimientos!

</br>

**Anatomía de una función:**

```(Quería poner anatomía de algo... está de moda... déjenme ser...)```

</br>

Sin importar el lenguaje que utilicemos van a existir cinco cosas que nos permiten definir una función:

- Una **palabra reservada** (function, fn, def, etc.) que nos permite definir una función.
- El **nombre** de la función, que debe representar lo que hace la función.
- Los **parámetros** de la función, que son los datos que se utilizan para realizar la tarea (pueden ser cero o más y van entre paréntesis).
- El **cuerpo** de la función, que es la parte de código que se ejecuta (o sea, las instrucciones que contiene).
- El **valor de retorno**, un valor que se devuelve al finalizar la ejecución de una función (normalmente especificado con la palabra return).

</br>

**Ejemplo en JavaScript:**

```javascript
function sumar(a, b) {
    return a + b
}
```

</br>

**Ejemplo en Python:**

```python
def sumar(a, b):
    return a + b
```

</br>

**Ejemplo en Ruby:**

```ruby
def sumar(a, b)
    return a + b
end
```

</br>

**Ejemplo en PHP:**

```php
function sumar($a, $b) {
    return $a + $b;
}
```

</br>

***Muy lindas las funciones... pero ¿cómo las uso después?***

*Ok, si, para usar una función es suficiente con invocarla.*

Una invocación o llamada a una función es lo que le indica a nuestro programa que llegó el momento de ejecutar las instrucciones que contiene.

Dependiendo de si nuestra función unicamente hace cosas o si necesitamos ese valor de retorno que nos devuelve vamos a asignar la llamada a una variable donde guardarlo o no.

</br>

Pero, principalmente la invocación está compuesta de dos elementos:

- El **nombre** de la función que especificamos en la definición de la misma.
- Los **argumentos** que son los valores que le pasamos a la función para cada uno de los parámetros que definimos.

</br>

<div class="bg-slate-800"> <i><strong>Nota:</strong></i> En la definición de una función llamamos <strong>parámetros</strong> a las propiedades intrínsecas de la misma necesarias para realizar la tarea. Al hacer el llamado a la función les llamamos <strong>argumentos</strong> a los valores que asignamos actualmente a los parámetros para una ejecución específica. </div>

</br>

**Ejemplo en JavaScript:**

```javascript
let resultado1 = sumar(2, 3)
let resultado2 = sumar(4, 5)
let resultado3 = sumar(6, 7)
console.log(resultado1, resultado2, resultado3)
```

</br>

**Ejemplo en Python:**

```python
resultado1 = sumar(2, 3)
resultado2 = sumar(4, 5)
resultado3 = sumar(6, 7)
print(resultado1, resultado2, resultado3)
```

</br>

**Ejemplo en Ruby:**

```ruby
resultado1 = sumar(2, 3)
resultado2 = sumar(4, 5)
resultado3 = sumar(6, 7)
puts resultado1, resultado2, resultado3
```

</br>

**Ejemplo en PHP:**

```php
$resultado1 = sumar(2, 3);
$resultado2 = sumar(4, 5);
$resultado3 = sumar(6, 7);
echo $resultado1 . " " . $resultado2 . " " . $resultado3;
```

</br>

***En los ejemplos creamos funciones que suman dos números en cuatro lenguajes, las invocamos con 3 llamadas diferentes y mostramos los resultados. Para mostrar los resultados, utilizamos una función que nos proporciona cada lenguaje y que no nos devuelve nada (no como nuestra función que si devuelve el resultado de la suma) por lo que no necesitamos asignar su ejecución a ninguna variable.***

</br>

**Alcance de una función:**

El *scope* o alcance de una función es el entorno que tiene acceso a una función.

O sea, es lo que determina desde donde la función puede ser invocada.

</br>

El alcance puede ser público o privado.

</br>

Cuando hablamos de un scope público o global, hablamos del entorno completo de nuestro algoritmo o programa, donde todo nuestro código tiene acceso a la función pública.

</br>

Por otro lado cuando hablamos de un scope privado o local, hablamos de que la función solo puede ser invocada dentro de un contexto o algoritmo.

</br>

Al momento de determinar cual será el alcance de nuestras funciones debemos tener en cuenta y analizar cierta lógica de negocio y de los datos con los que tratamos. Si tratamos con información muy compleja que escapa del ambito de nuestro algoritmo necesitaremos de funciones públicas (o globales), en cambio si tratamos con información que no puede ser compartida entre los diferentes algoritmos necesitaremos de funciones privadas (o locales).

</br>

Como se comporta y funciona un scope, tanto para funciones como para variables suele tener la misma base, pero puede variar un poco en su implementación de un lenguaje a otro, por lo que es algo que revisar cuando nos ponemos a trabajar con un nuevo lenguaje.

</br>

*Espero que les haya gustado el artículo y les sirva para algo! También espero que practiquen crear funciones en sus lenguajes favoritos, que piensen en todas las posibilidades que les brindan y al escribirlas razonen que variaciones podrían tener que les faciliten el codeo a futuro!*

*¡Gracias por leer!*

</br>
