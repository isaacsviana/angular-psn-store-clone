import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	id:string = ""
	@Input()
	name:string = ""
	@Input()
	gameCover:string = ""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string ="XPTO | PS4"
	@Input()
	gamePrice:string = "R$ 399,90"
	@Input()
	price:number = 0

	// avisa o componente pai (home) que esse jogo foi adicionado ao carrinho
	@Output()
	addToCart = new EventEmitter<{id:string, name:string, price:number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(event: Event){
    // impede que o clique no botão também acione o link <a> em volta do card
    event.preventDefault();
    event.stopPropagation();

    this.addToCart.emit({ id: this.id, name: this.name, price: this.price });
  }

}