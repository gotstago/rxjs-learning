//export module State{
    // -- state
    export interface ITodo { 
        id: number; 
        text: string; 
        completed: boolean; 
    }
    export class Todo implements ITodo{ 
        id: number; 
        text: string; 
        completed: boolean; 
    }
    export interface AppState { 
        todos: Todo[]; 
        visibilityFilter: string; 
    }
//}
