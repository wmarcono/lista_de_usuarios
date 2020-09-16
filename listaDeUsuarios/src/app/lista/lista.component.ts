import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ListaService } from '../service/lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  user = {} as User;
  listaDeUsers: User[];

  constructor(private listaService: ListaService){
  }

 // Chama o serviço para obtém a lista de usuários
 getUsers() {
  this.listaService.getUser().subscribe((lista: User[]) => {
    this.listaDeUsers = lista;
    
  });
}

ngOnInit(){
  this.getUsers()
}

}
