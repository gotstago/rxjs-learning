//export module State{
// -- state
export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}
export interface IGame {
    id: number;
    name: string;
    completed: boolean;
}
export interface ICard {
    id: number;
    name: string;
    rank: string;
    suit: string;
    location: Stack;
}
export class Card implements ICard {
    id: number;
    name: string;
    rank: string;
    suit: string;
    location: Stack;
}
export class Todo implements ITodo {
    id: number;
    text: string;
    completed: boolean;
}
export class Game implements IGame {
    id: number;
    name: string;
    completed: boolean;
}
export interface AppState {
    todos: Todo[];
    visibilityFilter: string;
}
export interface GameAppState {
    games: Game[];
    visibilityFilter: string;
}
export interface GameState {
    id: number;
    cards: Card[];
    completed: boolean;
}
export class BaseDeck { constructor(public name: string) { } }
export class Hand { constructor(public name: string) { } }
export class Trick { constructor(public name: string) { } }
export class Won { constructor(public name: string) { } }


export type Stack = BaseDeck | Hand | Trick | Won;
//}
