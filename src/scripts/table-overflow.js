/**
 * Detección y manejo de tablas con desbordamiento
 * 
 * Este script detecta tablas que exceden su contenedor y les aplica
 * una clase para ajustar el texto, preservando la apariencia de tablas
 * pequeñas que no necesitan ajuste de texto.
 */

// Verifica que el código solo se ejecute en el navegador
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    /**
     * Verifica qué tablas exceden su contenedor y les aplica la clase correspondiente
     */
    function checkTableOverflow() {
      const tables = document.querySelectorAll('.markdown-body table');
      
      tables.forEach(table => {
        // Obtener ancho real de tabla y contenedor
        const tableWidth = table.scrollWidth;
        const containerWidth = table.parentElement.clientWidth;
        
        // Si la tabla es más ancha que su contenedor, aplicar clase de overflow
        if (tableWidth > containerWidth) {
          table.classList.add('table-overflow');
          table.classList.remove('table-optimize-width');
          // console.log('Tabla con overflow:', tableWidth, '>', containerWidth);
        } else {
          table.classList.remove('table-overflow');
          table.classList.add('table-optimize-width'); // Para tablas pequeñas, usar espacio adecuadamente
        }
      });
    }
    
    // Ejecutar al cargar la página
    checkTableOverflow();
    
    // También ejecutar cuando todos los recursos estén cargados
    window.addEventListener('load', checkTableOverflow);
    
    // Ejecutar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkTableOverflow);
    
    // Ejecutar cuando se inicia una impresión
    window.addEventListener('beforeprint', function() {
      document.querySelectorAll('.markdown-body table').forEach(table => {
        table.classList.add('table-print-optimize');
      });
    });
  });
}
