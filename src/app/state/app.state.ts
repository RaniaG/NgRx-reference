import { ProductState } from "../products/state/product.state";
import { UserState } from "../user/state/user.state";

export interface AppState{
    products:ProductState;
    user: UserState; 
}