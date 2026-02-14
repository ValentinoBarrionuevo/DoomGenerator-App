# DoomScroll Learning Engine

## Descripción
Este proyecto es una prueba de concepto (PoC) que busca mitigar el efecto del "Doomscrolling" (consumo pasivo y compulsivo de contenido) reemplazándolo por micro-dosis de material de estudio universitario. 

A diferencia de una app de flashcards tradicional, utiliza la **psicología del Feed Infinito** para mantener al usuario enganchado mientras repasa conceptos complejos de lo que uno quiera.
## Stack Tecnológico
* **Lenguaje:** TypeScript (Strict mode).
* **Entorno:** Node.js.
* **Paradigma:** Programación Orientada a Objetos (POO).

## Arquitectura y Competencias Aplicadas

Este proyecto no utiliza frameworks por defecto; se construyó el motor lógico desde cero para demostrar el dominio de estructuras de datos y patrones de diseño.

### 1. Estructuras de Datos Dinámicas (Gestión de Memoria)
En lugar de utilizar Arrays nativos de JavaScript (que abstraen la gestión de memoria), implementé manualmente una **Cola (Queue / FIFO)** basada en **Nodos Enlazados**.
* **Por qué:** Para simular un buffer de lectura eficiente donde el contenido consumido se libera de la memoria y el nuevo ingresa por el final.
* **Implementación:** Uso de punteros `first` y `last` para operaciones de encolado/desencolado con complejidad O(1).

### 2. Patrones de Diseño (GoF)
Implementación de patrones clásicos para resolver problemas de extensibilidad:
* **Factory Method:** Centralicé la creación de objetos en un `DoomGenerator`. Esto desacopla la lógica del cliente de las clases concretas, permitiendo agregar nuevos tipos de tarjetas (ej: *Quiz*, *Imagen*) sin tocar el código principal.
***Template Method:** Definí el esqueleto del renderizado en la clase abstracta `ContenidoEducativo`, obligando a las subclases a implementar su propia lógica visual pero respetando la estructura base.

### 3. Principios S.O.L.I.D.
* **Open/Closed Principle (OCP):** El sistema está abierto a nuevos tipos de contenido (extendiendo la clase base) pero cerrado a modificaciones en el motor de scroll.
* **Liskov Substitution Principle (LSP):** El `FeedManager` opera sobre la abstracción `ContenidoEducativo`, permitiendo que cualquier subclase (`TarjetaCodigo`, `TarjetaTeoria`) sea procesada sin romper la lógica del sistema.

## Cómo correr el proyecto
1.  Clonar el repositorio.
2.  Instalar dependencias: `npm install`
3.  Ejecutar: `npm start` (o `ts-node main.ts`)

---
*Proyecto realizado como práctica final para la materia Programación II - TSSI.*
