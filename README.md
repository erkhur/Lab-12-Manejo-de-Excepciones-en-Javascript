# Lab-12-Manejo-de-Excepciones-en-Javascript

# Laboratorio 12 – Manejo de Excepciones en JavaScript

Este laboratorio forma parte del proyecto integrador **Editor Avanzado de Markdown en Vivo**.  
El objetivo principal es aplicar el manejo de excepciones en JavaScript para validar entradas del usuario y capturar errores durante la conversión de texto Markdown, garantizando que la aplicación no se bloquee y brinde mensajes claros al usuario.

---

## 🎯 Objetivos de Aprendizaje

- Comprender el concepto de excepción en JavaScript
- Identificar situaciones donde ocurren errores en tiempo de ejecución
- Utilizar `try...catch` para manejar errores sin interrumpir el flujo del programa
- Lanzar errores personalizados con `throw`
- Mejorar la experiencia del usuario mediante mensajes de error claros

---

## 🔑 Conceptos Clave

### Excepción
Evento inesperado que interrumpe la ejecución normal de un programa.

### try...catch
Estructura que permite capturar errores y manejarlos de forma controlada.

### throw
Permite lanzar manualmente un error cuando se detecta una condición inválida.

---

## 🧩 Funcionalidades Implementadas

- Validación de entrada vacía
- Detección de sintaxis Markdown mal formada:
  - Encabezados sin espacio (`##Titulo`)
  - Listas sin espacio (`-elemento`)
- Conversión segura de Markdown a HTML usando `marked`
- Captura de errores inesperados sin bloquear la aplicación
- Simulación de errores intencionales para pruebas
- Cancelación de la conversión cuando se detecta un error previo

---

## 🛠 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Librería **Marked** (vía CDN)

---

## 📁 Estructura del Proyecto

```txt
lab12-excepciones/
│
├── index.html
├── styles.css
├── app.js
└── README.md
