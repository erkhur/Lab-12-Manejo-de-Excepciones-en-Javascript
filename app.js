const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const errorDiv = document.getElementById("error");
const btnConvertir = document.getElementById("btnConvertir");
const btnError = document.getElementById("btnError");

/**
 * Valida errores comunes de Markdown
 */
function validarMarkdown(texto) {
  // Encabezados sin espacio: ##Titulo
  if (/^#{1,6}\S+/m.test(texto)) {
    throw new Error("Encabezado mal formado. Debe haber un espacio después de #");
  }

  // Listas sin espacio: -elemento
  if (/^-\S+/m.test(texto)) {
    throw new Error("Lista mal formada. Debe haber un espacio después de '-'");
  }
}

/**
 * Convierte Markdown a HTML con manejo de errores
 */
function convertirMarkdown() {
  errorDiv.textContent = "";
  preview.innerHTML = "";

  try {
    const texto = editor.value;

    // HU1: Validación de entrada vacía
    if (!texto.trim()) {
      throw new Error("No se ingresó contenido");
    }

    // HU2: Validación de sintaxis
    validarMarkdown(texto);

    // HU3: Manejo de errores en marked
    const html = marked.parse(texto);
    preview.innerHTML = html;

  } catch (error) {
    console.error("Error capturado:", error);
    errorDiv.textContent = error.message;
  }
}

/**
 * Logro 1: Simular error intencional
 */
function simularError() {
  editor.value = "##TituloSinEspacio\n-elementoIncorrecto";
  convertirMarkdown();
}

btnConvertir.addEventListener("click", convertirMarkdown);
btnError.addEventListener("click", simularError);
