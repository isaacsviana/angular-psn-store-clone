import { Component, OnInit } from '@angular/core';
import { gamesData, Game } from '../../data/gamesData'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games = gamesData;

  searchTerm: string = "";
  selectedPlatform: string = "";
  sortOrder: string = ""; // "" | "asc" | "desc"

  platforms = [...new Set(gamesData.map(g => g.platform))];

  // itens no carrinho
  cart: {id:string, name:string, price:number}[] = [];
  carrinhoAberto: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get filteredGames() {
    let resultado = this.games.filter(game => {
      const matchesSearch = game.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesPlatform = this.selectedPlatform === "" || game.platform === this.selectedPlatform;
      return matchesSearch && matchesPlatform;
    });

    if(this.sortOrder === "asc"){
      resultado = resultado.slice().sort((a, b) => a.price - b.price);
    } else if(this.sortOrder === "desc"){
      resultado = resultado.slice().sort((a, b) => b.price - a.price);
    }

    return resultado;
  }

  filterByPlatform(platform: string){
    this.selectedPlatform = this.selectedPlatform === platform ? "" : platform;
  }

  onAddToCart(item: {id:string, name:string, price:number}){
    this.cart.push(item);
  }

  removeFromCart(index: number){
    this.cart.splice(index, 1);
  }

  get cartTotal(){
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  toggleCarrinho(){
    this.carrinhoAberto = !this.carrinhoAberto;
  }

}