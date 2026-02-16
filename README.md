# InfiniteFeed Learning Engine
### *Hackeando la dopamina para el aprendizaje técnico.*

Este proyecto es una **Prueba de Concepto (PoC)** que busca mitigar el efecto del "Doomscrolling" (consumo pasivo y compulsivo de contenido) reemplazándolo por micro-dosis de material de estudio universitario. 

A diferencia de una app de flashcards tradicional, utiliza la **psicología del Feed Infinito** para mantener al usuario enganchado mientras repasa conceptos complejos de programación y arquitectura.

---

##  Stack Tecnológico
* **Lenguaje:** TypeScript (Strict mode).
* **Interfaz:** HTML5 & CSS3 (Renderizado Dinámico).
* **Entorno:** Browser-native (ES Modules). Se priorizó la ejecución en el cliente sin dependencias de backend.
* **Paradigma:** Programación Orientada a Objetos (POO).

---

##  Arquitectura y Nuevas Funcionalidades (Update v2)

El motor ha evolucionado de un script de consola a una **SPA (Single Page Application)** reactiva.

### 1. Inyección de Archivos en Memoria (PDF Blobs)
Se implementó un sistema de carga de documentos locales sin necesidad de servidor (Backendless).
* **Técnica:** Uso de `URL.createObjectURL` para generar referencias temporales a los archivos en la memoria RAM del navegador.
* **Resultado:** El usuario puede inyectar sus propios apuntes (PDF) dentro del flujo infinito de tarjetas, y el motor los renderiza en iframes sandboxed manteniendo el rendimiento.

### 2. Generación Procedural de Contenido ("Mock AI")
Para garantizar la experiencia de "scroll infinito" sin costosas APIs externas, diseñé un **Algoritmo Generativo**:
* El sistema combina aleatoriamente temas, fragmentos de código y plantillas de teoría.
* Esto asegura que el `FeedManager` siempre tenga contenido nuevo para encolar, simulando una base de datos infinita.

### 3. El Ouroboros: Estructura de Datos Circular
Implementé manualmente una **Cola (Queue / FIFO)** basada en **Nodos Enlazados**:
* **Ciclo Infinito:** Al "consumir" una tarjeta (scrollear), esta se desprende del frente y se recicla o se reemplaza por contenido procedural al final de la cola.
* **Eficiencia:** Operaciones de encolado/desencolado con complejidad $O(1)$.

### 4. Sensor de Abismo (Scroll Listener)
Se sustituyó la paginación manual por un detector de posición en el DOM:
* **Lógica:** `scrollTop + clientHeight >= scrollHeight - offset`.
* El sistema detecta cuándo el usuario se acerca al final del viewport e inyecta nuevo contenido al DOM *Just-In-Time*, manteniendo la ilusión de continuidad.

---

##  Patrones de Diseño (GoF) & SOLID

* **Factory Method:** La clase `DoomGenerator` centraliza la creación de tarjetas (PDF, Código, Teoría), desacoplando la lógica de instanciación.
* **Template Method:** La clase abstracta `ContenidoEducativo` define el contrato de renderizado que todas las tarjetas deben cumplir, asegurando polimorfismo en la UI.
* **Liskov Substitution (LSP):** El motor del feed gestiona tipos genéricos `T extends ContenidoEducativo`, permitiendo mezclar PDFs y texto sin romper la lógica.

---

##  Cómo correr el proyecto

Debido al uso de **ES Modules** y políticas de seguridad CORS para los PDFs, no se puede abrir el archivo directamente.

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/ValentinoBarrionuevo/InfiniteFeed-Learning-Engine.git](https://github.com/ValentinoBarrionuevo/InfiniteFeed-Learning-Engine.git)
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Compilar TypeScript (Modo Observador):**
    Es fundamental compilar los `.ts` de `src` a `.js` en `dist`:
    ```bash
    npx tsc -w
    ```
4.  **Ejecutar:**
    Usar la extensión **Live Server** en VS Code sobre el archivo `index.html`.

---

**Valentino Barrionuevo**
*Proyecto empezado y realizado como práctica final para la materia Programación II que ahora se convirtio en un proyecto propio. - TSSI (UTN).*
