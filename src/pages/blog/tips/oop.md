---
title: ¿Te cuesta entender la programación Orientada a Objetos?
description: Vení, la tía Pythonesa te va a contar un cuentito...
date: 2024-06-26T19:00
imgSrc: "/assets/images/_posts/tips/oop.png"
imgAlt: "Imagen de una granja rodeada de tecnología"
layout: "@/layouts/BasePost.astro"
---

**¿Te sentís mal porque no le entendés a esa wea de la programación Orientada a Objetos? Eso se termina hoy!**

</br>

Si ya estás podrido de que te digan que un objeto es una abstracción de la realidad y que una clase es una plantilla de objetos y los objetos son instancias de una clase... Que de verdad, si es eso, pero ¿qué necesidad de creer que alguien va a entender algo diciendo eso hay?

No es tu culpa, es de los falsos profetas de la educación que ni saben lo que están enseñando.

</br>

Pero antes de empezar... es muy lindo eso de pasar los acrónimos a español... pero... cuando le decís ***POO*** a la programación orientada a objetos, en realidad estás diciendo caquita en inglés... entonces, salvo que de verdad odies el paradigma de orientación a objetos o tengas que ir al baño es de agradecer que no le digas asi. Aclarado éste tema de suma importancia... empecemos!

</br>

**¿Qué es la programación Orientada a Objetos?**

</br>

Bueno, resulta que *Don Dev* tiene una granja y como necesita alguna cosa para hacer relleno en su portfolio decide que hará un sistema de fichas para los animales de su granja.

</br>

En la granja de *Don Dev* hay 3 ovejas (Nube que es de color blanco y tiene 5 años, Copito que es de color blanco y tiene 7 años y Chispa que es de color negro y tiene 3 años) y 2 vacas (Margarita que es de color dorado y tiene 6 años y Lola que es de color marrón y tiene 8 años).

</br>

*Don Dev* pensaba que podía simplemente abstraer el hecho de que todos los animales tenían un nombre, color y edad, entonces el que si le sabía a hacer clases y a python hizo lo siguiente:

```python
class Animal:
    def __init__(self, nombre, color, edad):
        self.nombre = nombre
        self.color = color
        self.edad = edad

    def __str__(self):
        return f"{self.nombre} es un animal de color {self.color} y tiene {self.edad} años."

    def describir(self):
        print(f"Nombre: {self.nombre}")
        print(f"Color: {self.color}")
        print(f"Edad: {self.edad}")
```

</br>

Pero, si *Don Dev* no hubiera sabido algo de programación orientada a objetos, no hubiera sabido que lo que necesitaba era una clase, quizás hubiera utilizado un diccionario para crear a cada animal (lo que hubiera estado bien feo de mantener si en el futuro tenía más animales), y como a *Don Dev* le gusta reírse de los programadores menos expertos fue a ver el código de su vecino que no le sabía a la programación orientada a objetos y se encontró justamente con que lo hacía con diccionarios, así:

```python
animal1 = {
    "nombre": "Clara",
    "color": "marrón",
    "edad": 2
}

animal2 = {
    "nombre": "Flor",
    "color": "blanco y negro",
    "edad": 5
}
```

</br>

Y así, *Don Dev* volvió a su granja riendo de lo mal que lo hacía su vecino.

Pero cuando llegó a su granja se encontró con una serpiadita (una hadita serpiente... porque es mi cuento y puedo usar los personajes que quiera) que le dijo *Don Dev, te ríes de tu vecino pero tu estás bien tonto, no te has dado cuenta que necesitas conocer el largo de la lana de tus ovejas y la frecuencia con la que ordeñas a tus vacas, eres una vergüenza!*

</br>

Y así fue como el humillado *Don Dev* se pasó toda la noche pensando como resolver su problema.

A la serpiadita le dió pena y le dijo *Don Dev, te crees tan bueno en el desarrollo y no sabes utilizar herencia?*

</br>

Entonces *Don Dev* recordó que la herencia le permitía crear otras clases que podrían hacer uso de lo que tenía en su clase Animal para no tener que repetirlo todo de nuevo y así podría crear Ovejas y Vacas con sus propiedades únicas.

</br>

Y así lo hizo *Don Dev* muy feliz:

```python
class Vaca(Animal):
    def __init__(self, nombre, color, edad, frecuencia_ordeñe):
        super().__init__(nombre, color, edad)
        self.frecuencia_ordeñe = frecuencia_ordeñe

    def __str__(self):
        return super().__str__() + f" Se ordeña {self.frecuencia_ordeñe} veces al día."

class Oveja(Animal):
    def __init__(self, nombre, color, edad, largo_lana):
        super().__init__(nombre, color, edad)
        self.largo_lana = largo_lana

    def __str__(self):
        return super().__str__() + f" Su lana mide {self.largo_lana} cm de largo."
```

</br>

Y ya estaba muy feliz *Don Dev* con sus clases y como había utilizado la herencia y se disponía a por fin crear sus objetos con los datos de sus animales cuando volvió a aparecer la serpiadita.

</br>

Con una sonrisa la serpiadita le dijo *Que bien, no solo has usado herencia, también has aplicado polimorfismo al darle el comportamiento al método __str__, ¿lo sabías?* al ver la cara de tonto que puso *Don Dev* la serpiadita se aclaró la garganta y le explicó: *Al sobreescribir el método le estás dando al mismo método comportamientos diferentes en cada una de tus clases, eso se llama polimorfismo.*

</br>

Pero a la serpiadita le gustaba liar las cosas, entonces le dijo *no se supone que salvo que esquiles a tus ovejas el largo de su lana solamente podrá crecer? deberías evitar cambiar esa propiedad sin hacer esa validación y si al esquilarlas el largo siempre vuelve a 1 centímetro deberías contemplarlo en tu clase, ¿no crees?*

</br>

Y así la serpiadita volvió a provocarle a *Don Dev* una buena jaqueca pensando como solucionarlo, y el pensó que debía proteger su propiedad largo_lana y crear métodos para modificar ese dato.

Y casi que volando salió a modificar su clase Oveja para reflejar lo que había pensado:

```python
class Oveja:
    def __init__(self, nombre, edad, peso, largo_lana):
        self.nombre = nombre
        self.edad = edad
        self.peso = peso
        self.__largo_lana = largo_lana
    
    def obtener_largo_lana(self):
        return self.__largo_lana
    
    def establecer_largo_lana(self, nuevo_largo):
        if nuevo_largo > self.__largo_lana:
            self.__largo_lana = nuevo_largo
        else:
            raise ValueError("El nuevo largo de la lana debe ser mayor que el largo actual.")
    
    def esquilar(self):
        self.__largo_lana = 1
```

</br>

Y se sentó orgulloso de su código a esperar que la serpiadita volviera a aparecer, esperando otro desafío.

</br>

Pero la serpiadita no volvió, su misión ya se había cumplido.

Al utilizar una propiedad privada y establecer métodos para obtener su valor (getter) y para establecerlo (setter) *Don Dev* había descubierto por si mismo el encapsulamiento, la última propiedad fundamental de la programación orientada a objetos que la serpiadita deseaba que *Don Dev* aprendiera.

</br>

*Y así la serpiadita y yo, esperamos que hayas disfrutado el cuentito y ahora estés más cerca de comprender mejor la programación orientada a objetos y en camino a ser un mejor desarrollador!*

</br>
