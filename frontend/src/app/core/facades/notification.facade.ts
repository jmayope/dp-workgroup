import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class NotificationFacade {
  error(text: string, title = 'Error') {
    return Swal.fire({ icon: 'error', title, text });
  }

  success(text: string, title = 'Éxito') {
    return Swal.fire({ icon: 'success', title, text });
  }

  warning(text: string, title = 'Aviso') {
    return Swal.fire({ icon: 'warning', title, text });
  }

  info(text: string, title = 'Información') {
    return Swal.fire({ icon: 'info', title, text });
  }

  confirm(options: SweetAlertOptions) {
    return Swal.fire({
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true,
      ...options
    });
  }
}