function actualizarFechaHora(op) {
    const ahora = new Date();
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };
    document.getElementById('fechaHora').textContent = ahora.toLocaleDateString('es-ES', opciones);
}
actualizarFechaHora('es-ES');
setInterval(actualizarFechaHora, 1000);
