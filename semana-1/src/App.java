public class App {


    public static void main(String[] args) throws Exception {
        // LABORATORIO GUIADO 1 - 9 - Implementado
        Usuario usuario = new Usuario("Ana", "ana@correo.com");
        ValidadorUsuario validador = new ValidadorUsuario();
        UsuarioRepository repository = new UsuarioRepository();
        NotificadorUsuario notificador = new NotificadorUsuario();
        validador.validar(usuario);
        repository.guardar(usuario);
        notificador.enviarBienvenida(usuario); 

        // LABORATORIO GUIADO 10 - 11  - Implementación
        PedidoService pedidoService = new PedidoService();
        pedidoService.procesarPedido("Juan Pérez", 25.50, 3);

        /*
            10. Preguntas para trabajar durante la explicación
            1. ¿Una clase con diez métodos viola automáticamente SRP?
            No. SRP no establece un número máximo de métodos. Una clase puede tener diez o más métodos y seguir teniendo una única responsabilidad. 
            Lo importante es que todos estén relacionados con una misma razón para cambiar.

            2. ¿Una clase con dos métodos puede violar SRP? Dé un ejemplo.
            Sí. Por ejemplo, una clase UsuarioService con los métodos crearUsuario() y enviarCorreo() puede violar SRP si se encarga tanto de la 
            lógica de usuarios como de las notificaciones. Tiene dos responsabilidades y, por tanto, dos posibles razones de cambio.

            3. ¿Qué razones de cambio tiene UsuarioService antes de refactorizar?
            Puede cambiar por diferentes motivos: cambios en la lógica de negocio de usuarios, modificaciones en la forma de guardar los datos y 
            cambios en el sistema de notificaciones. Tener varias razones de cambio indica una posible violación del SRP.

            4. ¿Qué ventaja tiene separar persistencia y notificación?
            Permite que cada componente se concentre en una responsabilidad. Así, podemos cambiar la forma de guardar usuarios sin modificar el 
            sistema de notificaciones, y viceversa. También facilita el mantenimiento y las pruebas.

            5. ¿Aplicar SRP significa crear una clase por cada método?
            No. SRP significa separar responsabilidades, no necesariamente métodos. Varios métodos pueden pertenecer perfectamente a una misma 
            clase si trabajan sobre la misma responsabilidad.

            6. ¿Qué relación existe entre SRP y alta cohesión?
            SRP favorece la alta cohesión, porque los elementos de una clase están relacionados con una responsabilidad común. Una clase altamente 
            cohesionada tiene métodos y datos que trabajan juntos para cumplir un propósito claro.

            7. ¿Qué ocurre con las pruebas unitarias cuando una clase mezcla lógica de negocio y acceso a archivos?
            Las pruebas se vuelven más difíciles, porque para probar la lógica de negocio también puede ser necesario interactuar con archivos 
            reales. Esto hace que las pruebas sean más lentas, frágiles y dependientes del entorno. Al separar ambas responsabilidades, la lógica de negocio puede probarse de forma aislada y sencilla.
            
            11. Práctica de aula: refactorización con SRP 
            Caso: Gestión de pedidos Una tienda pequeña tiene una clase PedidoService que calcula el total, 
            guarda el pedido, imprime el comprobante y envía una confirmación. El sistema funciona, pero cada cambio 
            obliga a modificar la misma clase. 
        */

        
    }
}
