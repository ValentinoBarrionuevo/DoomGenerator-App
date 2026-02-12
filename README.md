# 🧠 DoomScroll Learning Engine

> Hackeando el sistema de recompensa: Una aplicación que transforma el vicio del scroll infinito en una herramienta de aprendizaje activo, construida con principios de Ingeniería de Software.

## 📋 Descripción
Este proyecto es una prueba de concepto (PoC) que busca mitigar el efecto del "Doomscrolling" (consumo pasivo y compulsivo de contenido) reemplazándolo por micro-dosis de material de estudio universitario. 

A diferencia de una app de flashcards tradicional, utiliza la **psicología del Feed Infinito** para mantener al usuario enganchado mientras repasa conceptos complejos de Programación Orientada a Objetos (POO).

## 🛠️ Stack Tecnológico
* **Lenguaje:** TypeScript (Strict mode).
* **Entorno:** Node.js.
* **Paradigma:** Programación Orientada a Objetos (POO).

## 🏛️ Arquitectura y Competencias Aplicadas

[cite_start]Este proyecto no utiliza frameworks por defecto; se construyó el motor lógico desde cero para demostrar el dominio de estructuras de datos y patrones de diseño[cite: 7].

### 1. Estructuras de Datos Dinámicas (Gestión de Memoria)
[cite_start]En lugar de utilizar Arrays nativos de JavaScript (que abstraen la gestión de memoria), implementé manualmente una **Cola (Queue / FIFO)** basada en **Nodos Enlazados**[cite: 1409].
* **Por qué:** Para simular un buffer de lectura eficiente donde el contenido consumido se libera de la memoria y el nuevo ingresa por el final.
* **Implementación:** Uso de punteros `first` y `last` para operaciones de encolado/desencolado con complejidad O(1).

### 2. Patrones de Diseño (GoF)
[cite_start]Implementación de patrones clásicos para resolver problemas de extensibilidad[cite: 1673]:
* **Factory Method:** Centralicé la creación de objetos en un `DoomGenerator`. [cite_start]Esto desacopla la lógica del cliente de las clases concretas, permitiendo agregar nuevos tipos de tarjetas (ej: *Quiz*, *Imagen*) sin tocar el código principal[cite: 1713].
* [cite_start]**Template Method:** Definí el esqueleto del renderizado en la clase abstracta `ContenidoEducativo`, obligando a las subclases a implementar su propia lógica visual pero respetando la estructura base[cite: 1972].

### 3. Principios S.O.L.I.D.
* **Open/Closed Principle (OCP):** El sistema está abierto a nuevos tipos de contenido (extendiendo la clase base) pero cerrado a modificaciones en el motor de scroll.
* [cite_start]**Liskov Substitution Principle (LSP):** El `FeedManager` opera sobre la abstracción `ContenidoEducativo`, permitiendo que cualquier subclase (`TarjetaCodigo`, `TarjetaTeoria`) sea procesada sin romper la lógica del sistema[cite: 1177].

## 🚀 Cómo correr el proyecto
1.  Clonar el repositorio.
2.  Instalar dependencias: `npm install`
3.  Ejecutar: `npm start` (o `ts-node main.ts`)

---
*Proyecto realizado como práctica final para la materia Programación II - TSSI.*
