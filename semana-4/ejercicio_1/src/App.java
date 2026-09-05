public class App {
    /*
     * ====================================================
     * EJERCICIO 1: GENERADOR DE PERSONAJES
     * 
     * PATRÓN CREACIONAL: FACTORY METHOD
     * 
     * TEORÍA:
     * Factory Method es un patrón de diseño creacional que
     * permite crear objetos sin que la clase cliente conozca
     * los detalles de su creación.
     * 
     * La responsabilidad de crear objetos se delega a una
     * clase fábrica.
     * 
     * VENTAJAS:
     * - Reduce el acoplamiento.
     * - Facilita agregar nuevos personajes.
     * - Mejora la organización del código.
     * - Permite reutilizar la lógica de creación.
     * 
     * Problema inicial:
     * El sistema utilizaba muchos if-else para crear personajes,
     * haciendo difícil su mantenimiento y ampliación.
     * 
     * ====================================================
     */

    /*
     * ====================================================
     * INTERFAZ PERSONAJE
     * 
     * Define el comportamiento común de todos los personajes.
     * 
     * Cada personaje debe implementar el método atacar().
     * ====================================================
     */

    interface Personaje {
        void atacar();
    }

    /*
     * ====================================================
     * CLASE GUERRERO
     * 
     * Implementación concreta del personaje Guerrero.
     * ====================================================
     */

    static class Guerrero implements Personaje {
        @Override
        public void atacar() {
            System.out.println("Guerrero ataca con su espada y armadura pesada.");
        }
    }

    /*
     * ====================================================
     * CLASE MAGO
     * 
     * Implementación concreta del personaje Mago.
     * ====================================================
     */

    static class Mago implements Personaje {
        @Override
        public void atacar() {
            System.out.println("Mago lanza un hechizo con su báculo y túnica mágica.");
        }
    }

    /*
     * ====================================================
     * CLASE ARQUERO
     * 
     * Implementación concreta del personaje Arquero.
     * ====================================================
     */

    static class Arquero implements Personaje {
        @Override
        public void atacar() {
            System.out.println("Arquero dispara una flecha con su arco y armadura ligera.");
        }
    }

    /*
     * ====================================================
     * FACTORY METHOD
     * 
     * La fábrica controla la creación de objetos.
     * 
     * El cliente solamente indica qué personaje necesita.
     * 
     * Si luego se agrega un nuevo personaje, solamente
     * se modifica esta fábrica.
     * 
     * ====================================================
     */

    static class PersonajeFactory {
        public static Personaje crearPersonaje(String tipo) {
            switch (tipo.toUpperCase()) {
                case "GUERRERO":
                    return new Guerrero();
                case "MAGO":
                    return new Mago();
                case "ARQUERO":
                    return new Arquero();
                default:
                    System.out.println("Personaje no encontrado. Tipo: " + tipo);
                    return null;
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("=== GENERADOR DE PERSONAJES ===\n");
        
        // La clase cliente solicita objetos a la fábrica
        Personaje personaje1 = PersonajeFactory.crearPersonaje("GUERRERO");
        if (personaje1 != null) personaje1.atacar();
        
        Personaje personaje2 = PersonajeFactory.crearPersonaje("MAGO");
        if (personaje2 != null) personaje2.atacar();
        
        Personaje personaje3 = PersonajeFactory.crearPersonaje("ARQUERO");
        if (personaje3 != null) personaje3.atacar();
        
        // Ejemplo de personaje no existente
        Personaje personaje4 = PersonajeFactory.crearPersonaje("DRUIDA");
        if (personaje4 != null) personaje4.atacar();
        
        System.out.println("\n=== FIN DEL PROGRAMA ===");
    }
}