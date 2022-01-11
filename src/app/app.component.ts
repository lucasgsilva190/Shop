import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cardápio', url: '/cardapio', icon: 'fast-food' },
    { title: 'Categorias', url: '/folder/Inbox', icon: 'list' },
    { title: 'Pedidos', url: '/folder/Outbox', icon: 'receipt' },
    { title: 'Restaurante', url: '/folder/Favorites', icon: 'storefront' },
    { title: 'Entrega', url: '/folder/Trash', icon: 'bicycle' },
  ];
  constructor() {}
}
