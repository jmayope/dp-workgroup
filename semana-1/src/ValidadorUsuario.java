public class ValidadorUsuario {
  public void validar(Usuario usuario) {
    if (!usuario.getEmail().contains("@")) {
      throw new IllegalArgumentException("Correo inválido");
    }
  } 
} 