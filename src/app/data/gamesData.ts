export interface Game {
  id: string;
  name: string;
  gameCover: string;
  gameLabel: string;
  platform: string; // "PS3" | "PS4" | "PS5"
  gameType: string;
  price: number;
}

export const gamesData: Game[] = [
  {
    id: "1",
    name: "Battlefield 1",
    gameCover: "assets/bt-1.jpg",
    gameLabel: "DIGITAL",
    platform: "PS4",
    gameType: "DIGITAL | PS4",
    price: 129.99
  },
  {
    id: "2",
    name: "Battlefield 4",
    gameCover: "assets/bt-4.jpg",
    gameLabel: "EXCLUSIVE",
    platform: "PS5",
    gameType: "DISC | PS5",
    price: 269.99
  },
  {
    id: "3",
    name: "Assassin's Creed",
    gameCover: "assets/ac-cover.jpg",
    gameLabel: "BEST OF YEAR",
    platform: "PS5",
    gameType: "DIGITAL | PS5",
    price: 369.99
  },
  {
    id: "4",
    name: "Battlefield Hardline",
    gameCover: "assets/bt-hardline.jpg",
    gameLabel: "NEW",
    platform: "PS4",
    gameType: "DIGITAL | PS3 PS4 PS5",
    price: 369.99
  },
  {
    id: "5",
    name: "God of War Ragnarök",
    gameCover: "assets/bt-1.jpg",
    gameLabel: "EXCLUSIVE",
    platform: "PS5",
    gameType: "DIGITAL | PS5",
    price: 249.90
  },
  {
    id: "6",
    name: "Horizon Forbidden West",
    gameCover: "assets/ac-cover.jpg",
    gameLabel: "BEST SELLER",
    platform: "PS4",
    gameType: "DISC | PS4",
    price: 199.90
  }
]