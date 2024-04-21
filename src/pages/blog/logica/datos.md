---
title: Tipos de datos
description: Entendiendo los valores.
date: 2024-04-21T18:07
imgSrc: "/assets/images/_posts/logica1/datos.png"
imgAlt: "Representación futurista de un sistema tecnológico avanzado que simboliza diferentes tipos de datos."
layout: "@/layouts/BasePost.astro"
---

**Un dato es un valor que se almacena en una variable. Una porción de información específica que nos permite tomar decisiones. Forman parte de algoritmos, son de donde partimos y a donde llegamos, y además componen todas las estructuras que veremos más adelante!**

Vamos a ver los 4 tipos de datos más importantes: texto, números, booleanos y arrays.

</br>

***Texto:***

Este tipo de dato consiste en una cadena o conjunto de caracteres que pueden ser letras, números, símbolos, espacios, etc. En programación solemos llamarle *string* (cadena de caracteres) y se suele representar entre comillas dobles o simples.

```python
"Esto es un texto"
'Esto es un texto'
"📢 puede tener emojis!"
```

</br>

Podemos unir cadenas de texto de diferentes maneras dependiendo el lenguaje que utilizamos, pero lo más normal es concatenarlas con el signo de suma:

```python
"Hola " + "Mundo!"
```

Lo anterior nos da como resultado la cadena ```"Hola Mundo!"```

</br>

***Números:***

Este tipo de dato consiste en un número que puede ser positivo, negativo o incluso un número de punto flotante (con coma). En programación solemos llamarles *integer* (entero, representación sin parte decimal) y *float* (flotante, representación con parte decimal).

```python
2 # Entero
-5 # Entero negativo
2.0 # Flotante
-20.7 # Flotante negativo
```

</br>

Con estos tipos de datos podemos hacer diferentes operaciones que pueden variar dependiendo del lenguaje que utilizamos.

Por ejemplo, JavaScript no hace distinción entre enteros y flotantes por lo que sus operaciones dan como resultado un tipo de dato numérico; Python hace la distinción entre enteros y flotantes pero nos permite operar entre ambos dando prioridad a los flotantes, por lo que en Python el resultado de operar un flotante y un entero será un flotante; pero el señor estricto, C++, no solamente hace distinción entre enteros y flotantes sino que además no permite operar con distintos tipos de datos (aunque ambos sean numéricos) por lo que nos obliga a realizar una conversión de tipos.

</br>

Ok, no se asusten... que solamente lo digo para que entiendan que diferentes lenguajes pueden manejarlos de diferente forma, hasta ahora lo importante es entender que son tipos de datos diferentes.

</br>

Otra cosa que podemos aprovechar a aclarar es la diferencia entre concatenar (textos o caracteres) y sumar (números), ya que vimos que los textos se pueden concatenar con el signo de suma, y los números se pueden sumar con el signo de suma, entonces:

```python
"5" + "10" # Concatenar texto - da como resultado "510"
5 + 10 # Sumar números - da como resultado 15
```

</br>

***Booleanos:***

Este tipo de dato consiste en un valor que puede ser verdadero o falso. En programación solemos llamarlo *boolean* (y sus valores: true o false).
El propósito de éste tipo de dato es representar la lógica binaria, es decir, que solo puede tomar valores 0 (false) y 1 (true).
Este tipo de dato es básico para la programación y es muy común para la lógica, sería imposible tener estructuras que nos permitan tomar decisiones dentro de nuestro código sin el.

</br>

***Arrays:***

Este tipo de dato consiste en una lista de valores (a cada uno de esos valores se le denomina *elemento*), incluso de diferentes tipos de datos (y si, eso incluye otros arrays). En programación solemos llamarlo *array* (arreglo).

Aunque existen algunos lenguajes que nos obligan a manejar unicamente elementos del mismo tipo de dato por arreglo.

```python
arreglo = [1, 2, 3, 4, 5, "manzana", true]
```

</br>

Para navegar los elementos de un arreglo utilizamos los índices que en casi todos los lenguajes comienzan en cero, es decir, que la primer posición de un array es la posición 0.

En nuestro ejemplo anterior, si queremos acceder al elemento "manzana", debemos hacerlo de una forma similar (dependiendo el lenguaje) a la siguiente:

```python
arreglo[5] # da como resultado "manzana"
```

</br>

Y puedo aprovechar para decir que el abuso de arrays es un error muy común, y que hay que ser cuidadoso con el uso de memoria de los mismos. Al almacenar cada vez más información estamos utilizando cada vez más memoria y muchas veces he visto que la información antigua de algunos bien debería haber sido eliminada ya que no se vuelve a utilizar o incluso que se dejan elementos vacíos "por si en un futuro se va a usar ese espacio".

</br>

*Los invito a que piensen ejemplos de valores que utilizan y a que tipo de dato pertenecen, a que intenten algunas operaciones con ellos e incluso a que creen algún array de información relacionada... después de todo ¿no hacen listas de compras para ir al almacén o al supermercado?*

</br>
