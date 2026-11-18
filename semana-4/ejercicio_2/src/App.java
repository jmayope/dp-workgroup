public class App {
    /*
     * 
     * EJERCICIO 1: GENERADOR DE PERSONAJES
     * 
     * PATRÓN CREACIONAL: FACTORY METHOD
     * 
     */

    // INTERFAZ PERSONAJE
    public interface Personaje {
        void atacar();
    }

    // CLASE GUERRERO
    public static class Guerrero implements Personaje {
        @Override
        public void atacar() {
            System.out.println("Guerrero ataca con su espada y armadura pesada.");
        }
    }

    // CLASE MAGO
    public static class Mago implements Personaje {
        @Override
        public void atacar() {
            System.out.println("Mago lanza un hechizo con su báculo y túnica mágica.");
        }
    }

    // CLASE ARQUERO
    public static class Arquero implements Personaje {
        @Override
        public void atacar() {
            System.out.println("Arquero dispara una flecha con su arco y armadura ligera.");
        }
    }

    // FACTORY METHOD - Fábrica de personajes
    public static class FabricaPersonajes {
        public Personaje instanciarPersonaje(String tipo) {
            if (tipo == null) {
                System.out.println("Error: Tipo de personaje no puede ser null");
                return null;
            }

            switch (tipo.toUpperCase()) {
                case "GUERRERO":
                    return new Guerrero();
                case "MAGO":
                    return new Mago();
                case "ARQUERO":
                    return new Arquero();
                default:
                    System.out.println("Personaje no encontrado: " + tipo);
                    return null;
            }
        }
    }

    public static void main(String[] args) {

        // Crear la fábrica
        FabricaPersonajes fabrica = new FabricaPersonajes();

        // El cliente solo interactúa con la fábrica y no con la implementación directa
        Personaje p1 = fabrica.instanciarPersonaje("GUERRERO");
        if (p1 != null) p1.atacar();

        Personaje p2 = fabrica.instanciarPersonaje("MAGO");
        if (p2 != null) p2.atacar();

        Personaje p3 = fabrica.instanciarPersonaje("ARQUERO");
        if (p3 != null) p3.atacar();

        // Ejemplo con tipo no válido
        Personaje p4 = fabrica.instanciarPersonaje("DRUIDA");
        if (p4 != null) p4.atacar();
    }
}