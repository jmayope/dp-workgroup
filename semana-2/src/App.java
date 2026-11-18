// Practica Semana 2 - PARTE 1
// Pregunta 1 - Implementación

interface MetodoEnvio {
    double calcular(double peso);
}

class CalculadoraEnvio {
    public double calcular(MetodoEnvio metodo, double peso) {
        return metodo.calcular(peso);
    }
}

class EnvioCamion implements MetodoEnvio {
    @Override
    public double calcular(double peso) {
        return peso * 5.0;
    }
}

class EnvioDron implements MetodoEnvio {
    @Override
    public double calcular(double peso) {
        return peso * 4.0;
    }

}

class EnvioMoto implements MetodoEnvio {

    @Override
    public double calcular(double peso) {
        return peso * 2.0;
    }

}

class EnvioAuto implements MetodoEnvio {
    @Override
    public double calcular(double peso) {
        return peso * 3.0;
    }
}

// Pregunta 2 - Implementación

class CuentaBancaria {
}

interface Retirable {
    void retirar(double monto);
}

// Aplicando interface de Retirable
class CuentaAhorros extends CuentaBancaria implements Retirable {
    @Override
    public void retirar(double monto) {
        System.out.println("Retiro realizado: " + monto);
    }
}

class CuentaPlazoFijo extends CuentaBancaria {
}

// Pregunta 3 - Implementación

interface GeneradorReporte {
    void generar();
}

class ServicioReportes {
    public void ejecutar(GeneradorReporte generador) {
        generador.generar();
    }
}

class GeneradorPDF implements GeneradorReporte {
    @Override
    public void generar() {
        System.out.println("Generando reporte en PDF");
    }
}

class GeneradorExcel implements GeneradorReporte {
    @Override
    public void generar() {
        System.out.println("Generando reporte en EXCEL");
    }
}

class GeneradorCSV implements GeneradorReporte {
    @Override
    public void generar() {
        System.out.println("Generando reporte en CSV");
    }
}

class GeneradorHTML implements GeneradorReporte {
    @Override
    public void generar() {
        System.out.println("Generando reporte en HTML");
    }
}

// PRACTICA SEMANA 2 - Parte 2

class Vehiculo { 
    public void encenderMotor() { 
        System.out.println("Motor encendido"); 
    } 
}  

class Auto extends Vehiculo { 

    @Override 
    public void encenderMotor() { 
        System.out.println("Motor del auto encendido"); 
    } 

}  

class Bicicleta extends Vehiculo { 

    @Override 
    public void encenderMotor() { 
        throw new UnsupportedOperationException("La bicicleta no tiene motor" ); 
    } 
} 



public class App {
    // METODO - PARTE 2
    public static void probarVehiculo(Vehiculo vehiculo) {         
        vehiculo.encenderMotor(); 
    }  
    public static void main(String[] args) throws Exception {
        // PARTE 1
        // Pregunta 1 - Verificación

        CalculadoraEnvio calculadora = new CalculadoraEnvio();

        MetodoEnvio moto = new EnvioMoto();
        MetodoEnvio auto = new EnvioAuto();
        MetodoEnvio camion = new EnvioCamion();
        MetodoEnvio dron = new EnvioDron();

        System.out.println(calculadora.calcular(moto, 10));
        System.out.println(calculadora.calcular(auto, 10));
        System.out.println(calculadora.calcular(camion, 10));
        System.out.println(calculadora.calcular(dron, 10));

        /*
         * PREGUNTAS:
         
            1. ¿Qué ocurre si mañana se agrega el tipo DRON?
            Habría que agregar otro else if:
            else if (tipo.equals("DRON")) {
                return peso * 4.0;
            }
            Esto significa que cada vez que aparezca un nuevo método de envío, debemos
            modificar CalculadoraEnvio2.
            2. ¿Qué parte del código debe modificarse?
            La clase CalculadoraEnvio, específicamente el método calcular().
            Actualmente contiene las reglas para MOTO, AUTO y CAMION, por lo que también
            habría que modificarla para incorporar DRON.
            3. ¿Por qué viola OCP?
            OCP (Open/Closed Principle) establece que:
            • Una clase debe estar abierta para extensión, pero cerrada para modificación.
            • El diseño original viola OCP porque para agregar un nuevo tipo de envío es necesario modificar el código existente de CalculadoraEnvio.
            • La solución es utilizar una abstracción (MetodoEnvio) y hacer que cada tipo de envío implemente su propio cálculo.

         */

        // Pregunta 2 - Verificación

        /*
            PREGUNTAS:
            7. ¿Qué promete la clase CuentaBancaria?
                Promete que toda cuenta bancaria puede realizar un retiro

            8. ¿CuentaPlazoFijo puede sustituir a CuentaBancaria en cualquier contexto?
                No. Por que el metodo retirar debe existir; en todo caso retirar decorador @Override de la clase CuentaPlazoFijo

            9. ¿Qué línea muestra claramente el problema?
                throw new UnsupportedOperationException("No se puede retirar antes del vencimiento");
            
            10. Refactorización -> Aplicada        
        */

        // Pregunta 3 - Verificación
        ServicioReportes servicio = new ServicioReportes();

        servicio.ejecutar(new GeneradorPDF());
        servicio.ejecutar(new GeneradorExcel());
        servicio.ejecutar(new GeneradorCSV());
        servicio.ejecutar(new GeneradorHTML());

        // PARTE 2

        probarVehiculo(new Auto());         
        probarVehiculo(new Bicicleta()); 

        /*
        
        Actividad 1. Predicción 
            Sin ejecutar el programa, escriba qué cree que ocurrirá en cada llamada. 
                a) Resultado esperado con new Auto (): 
                        Se ejecutará correctamente el método sobrescrito de Auto y se mostrará:
                Motor del auto encendido
                b) Resultado esperado con new Bicicleta (): 
                Se producirá una excepción UnsupportedOperationException, porque Bicicleta no tiene motor y su método encenderMotor() lanza explícitamente esa excepción.
        Actividad 2. Ejecución 
            Copie las clases en su entorno de desarrollo, compile y ejecute el programa. Después, registre el resultado real. 
                Salida obtenida con Auto: 
                        Motor del auto encendido
                Salida o error obtenido con Bicicleta: 
                        Exception in thread "main" java.lang.UnsupportedOperationException: La bicicleta no tiene motor
        Actividad 3. Identificación del problema Responda con sus propias palabras: 
            1.	¿Cuál es la clase padre? 
                Vehiculo
            2.	¿Cuáles son las clases hijas? 
                Las clases hijas son:
                    - Auto
                    - Bicicleta
                Ambas extienden la clase Vehiculo.
            3.	¿Qué clase ocasiona el error? 
                La clase que ocasiona el error es:
                    - Bicicleta
                Esto ocurre porque su implementación de encenderMotor() lanza una UnsupportedOperationException.
        4.	¿Por qué Bicicleta no puede cumplir correctamente el método encenderMotor()? 
            Porque una bicicleta no tiene motor. Por lo tanto, aunque hereda el método de Vehiculo, no puede realizar correctamente la operación que ese método representa.
            La clase Vehiculo está suponiendo incorrectamente que todos los vehículos tienen motor.
        5.	¿Bicicleta puede reemplazar a Vehiculo sin que el programa falle? 
        No. Aunque Bicicleta es una subclase de Vehiculo, al utilizarla en un lugar donde se espera un Vehiculo y se llama a encenderMotor(), el programa lanza una excepción.
            Por ejemplo:
                - Vehiculo vehiculo = new Bicicleta();
                - vehiculo.encenderMotor();
                - Esto provoca el error porque la bicicleta no puede cumplir la operación esperada.
        6.	¿El código cumple o viola el Principio de Sustitución de Liskov? Explique. 
            El código viola el Principio de Sustitución de Liskov (LSP).
            LSP establece que una clase hija debe poder sustituir a su clase padre sin cambiar el comportamiento esperado del programa.
            En este caso, Bicicleta hereda de Vehiculo, por lo que debería poder utilizarse como cualquier Vehiculo. Sin embargo, cuando se 
            llama a encenderMotor(), la bicicleta lanza una excepción porque no tiene motor. El problema está en que Vehiculo agrupa objetos 
            que no comparten realmente la capacidad de encender un motor. Una mejor solución sería separar la capacidad de tener/encender motor 
            en una interfaz, por ejemplo Motorizado, que implementen únicamente Auto, Moto, etc. Así, Bicicleta podría seguir siendo un vehículo 
            sin verse obligada a implementar una operación que no tiene sentido para ella.

        
        */
    }
}
