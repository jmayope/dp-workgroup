public class UsuarioService {
  public void registrar(String nombre, String email) {
    if (!email.contains("@")) {
      
      throw new IllegalArgumentException("Correo inválido");
    }
    System.out.println("Guardando usuario en archivo...");
    System.out.println(nombre + " - " + email);
    System.out.println("Enviando correo de bienvenida a " + email);     
  } 
} 