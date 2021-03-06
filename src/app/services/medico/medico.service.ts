import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import swal from 'sweetalert';
import { Medico } from '../../models/medico.model';

@Injectable()
export class MedicoService {

  totalMedicos: number = 0;

  constructor(public http: HttpClient,
              public _usuarioService: UsuarioService) { }

  cargarMedicos() {
    let url = URL_SERVICIOS + '/medico';

    return this.http.get(url).pipe(
      map((resp: any) => {
        this.totalMedicos = resp.total;
        return resp.medicos;
      })
    );
  }

  cargarMedico(id: string) {
    let url = URL_SERVICIOS + '/medico/' + id;

    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.medico;
      })
    );
  }

  buscarMedicos(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;

    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp.medicos;
      })
    );
  }

  borrarMedico(id: string) {
    let url = URL_SERVICIOS + '/medico/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete(url).pipe(
      map(resp => {
        swal('Médico Borrado', 'Médico borrado correctamente', 'success');
        return resp;
      })
    );
  }

  guadarMedico(medico: Medico) {
    let url = URL_SERVICIOS + '/medico';

    if (medico._id) {
      // actualizando
      url += '/' + medico._id;
      url += '?token=' + this._usuarioService.token;

      return this.http.put(url, {nombre: medico.nombre, hospital: medico.hospital.id}).pipe(
        map((resp: any) => {
          swal('Médico actualizado', medico.nombre, 'success');
          return resp.medico;
        })
      );

    } else {
      // creando
      url += '?token=' + this._usuarioService.token;

      const {nombre, hospital} = medico;

      return this.http.post(url, {nombre, hospital: hospital.id}).pipe(
        map((resp: any) => {

          swal('Médico Creado', medico.nombre, 'success');
          return resp.medico;
        })
      );
    }


  }
}
