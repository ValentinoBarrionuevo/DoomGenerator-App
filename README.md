# DoomScroll Learning Engine
### *Hackeando la dopamina para el aprendizaje técnico.*

Este proyecto es una **Prueba de Concepto (PoC)** que busca mitigar el efecto del "Doomscrolling" (consumo pasivo y compulsivo de contenido) reemplazándolo por micro-dosis de material de estudio universitario. 

A diferencia de una app de flashcards tradicional, utiliza la **psicología del Feed Infinito** para mantener al usuario enganchado mientras repasa conceptos complejos de programación y arquitectura.

---

## 🛠️ Stack Tecnológico
* **Lenguaje:** TypeScript (Strict mode).
* **Interfaz:** HTML5 & CSS3.
* **Entorno:** Browser-native (ES Modules). Se abandonó el entorno Node.js para priorizar la ejecución directa en el navegador.
* **Paradigma:** Programación Orientada a Objetos (POO).

---

## 🧠 Arquitectura y Competencias Aplicadas

El motor lógico se construyó desde cero, sin frameworks, para demostrar el dominio de las entrañas del desarrollo web y la ingeniería de software.

### 1. El Ouroboros: Estructura de Datos Circular
En lugar de utilizar Arrays nativos, implementé una **Cola (Queue / FIFO)** basada en **Nodos Enlazados** con una vuelta de tuerca lógica:
* **Ciclo Infinito:** Implementé una lógica de re-encolado automático. Al "consumir" una tarjeta, esta se desprende del frente y se inserta nuevamente al final, garantizando que el flujo de estudio nunca se agote.
* **Eficiencia:** Operaciones de encolado y desencolado con complejidad algorítmica constante $O(1)$.

### 2. UI/UX: Sensor de Abismo y Renderizado Dinámico
La transición al navegador implicó el manejo avanzado del **DOM (Document Object Model)**:
* **Scroll Listening:** El sistema detecta la posición del usuario en tiempo real. Al alcanzar el umbral crítico del scroll, se dispara el renderizado de la siguiente unidad de contenido antes de que el usuario llegue al fondo.
* **Soporte Multiformato:** El motor soporta contenido enriquecido, incluyendo bloques de código con sintaxis resaltada y soporte incrustado para documentos **PDF**.

### 3. Patrones de Diseño (GoF)
* **Factory Method:** Centralicé la creación de objetos en un `DoomGenerator`. Esto desacopla la lógica de la interfaz de las clases concretas, permitiendo agregar nuevos tipos de tarjetas sin tocar el motor principal.
* **Template Method:** Definí el contrato de renderizado en la clase abstracta `ContenidoEducativo`, obligando a las subclases a implementar su propia lógica visual respetando la estructura base.

### 4. Principios S.O.L.I.D.
* **Open/Closed Principle (OCP):** El sistema es extensible para nuevos tipos de contenido pero está protegido contra modificaciones en su núcleo.
* **Liskov Substitution Principle (LSP):** El `FeedManager` opera sobre abstracciones, permitiendo que cualquier subclase sea procesada sin romper la integridad del sistema.

---

## 🚀 Cómo correr el proyecto

Debido al uso de **ES Modules** y políticas de seguridad del navegador (CORS), no es posible ejecutar el proyecto abriendo el archivo directamente desde el disco.

1.  **Clonar el repositorio:** `git clone https://github.com/ValentinoBarrionuevo/DoomGenerator-App.git`.
2.  **Instalar dependencias:** `npm install`.
3.  **Compilar TypeScript:** `npx tsc -w`.
4.  **Ejecutar mediante Servidor Local:** Se recomienda usar la extensión **Live Server** en VS Code sobre el archivo `index.html`.

---

**Valentino Barrionuevo**
*Proyecto realizado como práctica final para la materia Programación II - TSSI (UTN).*
