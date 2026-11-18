import java.util.ArrayList;
import java.util.List;

public class App {

    interface Observador {
        void actualizar(float temperatura);
    }

    interface Sujeto {
        void agregarObservador(Observador o);

        void eliminarObservador(Observador o);

        void notificarObservadores();
    }

    class EstacionMeteorologica implements Sujeto {
        private List<Observador> observadores = new ArrayList<>();
        private float temperaturaActual;

        @Override
        public void agregarObservador(Observador o) {
            observadores.add(o);
        }

        @Override
        public void eliminarObservador(Observador o) {
            observadores.remove(o);
        }

        @Override
        public void notificarObservadores() {
            for (Observador o : observadores) {
                o.actualizar(temperaturaActual);
            }
        }

        public void registrarNuevaTemperatura(float nuevaTemp) {
            this.temperaturaActual = nuevaTemp;
            System.out.println("Sensor detecta nueva temperatura: " + nuevaTemp);
            notificarObservadores();
        }
    }

    class AppMovil implements Observador {
        @Override
        public void actualizar(float temperatura) {
            mostrarTemperatura(temperatura);
        }

        public void mostrarTemperatura(float temp) {
            System.out.println("App Móvil muestra temperatura: " + temp + "°C");
        }
    }

    class PantallaLobby implements Observador {
        @Override
        public void actualizar(float temperatura) {
            renderizarTemperatura(temperatura);
        }

        public void renderizarTemperatura(float temp) {
            System.out.println("Pantalla Lobby renderiza: " + temp + "°C");
        }
    }

    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
    }
}
