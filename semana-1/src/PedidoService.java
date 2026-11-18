public class PedidoService {

  private CalculadoraPedido calculadora;
  private PedidoRepository repository;
  private ComprobantePedido comprobante;
  private NotificadorPedido notificador;

  public PedidoService() {
    calculadora = new CalculadoraPedido();
    repository = new PedidoRepository();
    comprobante = new ComprobantePedido();
    notificador = new NotificadorPedido();
  }

  public void procesarPedido(String cliente, double precio, int cantidad) {
    double total = calculadora.calcularTotal(precio, cantidad);
    repository.guardarPedido(cliente, total);
    comprobante.imprimirComprobante(cliente, total);
    notificador.enviarConfirmacion(cliente);
  }
}