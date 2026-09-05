public class App {
    public static class ConfiguradorGlobal {
        private static final ConfiguradorGlobal INSTANCIA_UNICA = new ConfiguradorGlobal();

        private ConfiguradorGlobal() {
            System.out.println("Leyendo variables de entorno y conectando al servidor de configs...");
            System.out.println("Proceso costoso en memoria y tiempo ejecutado UNA SOLA VEZ");
        }

        public static ConfiguradorGlobal getInstance() {
            return INSTANCIA_UNICA;
        }

        public String getConfiguracion(String clave) {
            return "Valor de " + clave;
        }
    }

    static class ModuloVentas {
        private ConfiguradorGlobal config;

        public ModuloVentas() {
            this.config = ConfiguradorGlobal.getInstance();
            System.out.println("Modulo Ventas inicializado");
        }

        public void procesarVenta() {
            String valor = config.getConfiguracion("IMPUESTO_VENTAS");
            System.out.println("Procesando venta con impuesto: " + valor);
        }
    }

    static class ModuloInventario {
        private ConfiguradorGlobal config;

        public ModuloInventario() {
            this.config = ConfiguradorGlobal.getInstance();
            System.out.println("Modulo Inventario inicializado");
        }

        public void actualizarInventario() {
            String valor = config.getConfiguracion("STOCK_MINIMO");
            System.out.println("Actualizando inventario con stock minimo: " + valor);
        }
    }

    public static void main(String[] args) {
        ModuloVentas ventas = new ModuloVentas();
        ventas.procesarVenta();

        ModuloInventario inventario = new ModuloInventario();
        inventario.actualizarInventario();

        ConfiguradorGlobal config1 = ConfiguradorGlobal.getInstance();
        ConfiguradorGlobal config2 = ConfiguradorGlobal.getInstance();
        System.out.println("Misma instancia: " + (config1 == config2));
    }
}