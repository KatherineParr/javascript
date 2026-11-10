const TEMAS = ['Cocina', 'Futbol', 'Salud', 'Arte', 'Sucesos', 'Política', 'Economía', 'Música', 'Cine', 'Baloncesto', 'Javascript', 'Vinos', 'Papiroflexia'];

/* Ejercicio examen: Validar Formulario Avanzado (5
puntos)
Se quiere hacer un formulario de suscripción a una revista de publicaciones.
Dado el archivo suscripcion.html, se debe añadir el script que permita validar o modificar
los datos del formulario de suscripción con el siguiente comportamiento:
1. El nombre de usuario se debe enviar siempre en mayúsculas. Se debe convertir
automáticamente. Es obligatorio poner al menos 3 caracteres.
2. El DNI debe ser también requerido y debe ser en formato: 12345678-A. Es decir, 8
números, un guión y una letra mayúscula.
3. El usuario debe marcar una opción de tipo de suscripción: (Básico, Estándar,
Premium o Élite) y se debe cambiar el precio de la suscripción que aparece más
abajo. La opción Básico es por defecto.
4. Inserta todos los temas que están en temas.js como los que se muestran de
ejemplo en el html.
5. Dependiendo de la opción que marque, no se enviará el formulario a no ser que se
hayan marcado exactamente los siguientes temas de suscripción:
a. Básico: 1 tema
b. Estándar: 3 temas
c. Premium: 6 temas
d. Élite: Todos los temas (se marcan por defecto).
Se deben mostrar los mensajes de error correspondientes.
Puedes modificar el HTML original, siempre y cuando la solución sea apropiada con lo que
se pide. */