import { Injectable } from "@angular/core";
import { Book } from "./book.model";

@Injectable({
    providedIn: 'root',
  })
export class BookService {

    getAll(): Promise<Book[]>{
        return new Promise((res)=>{
            res([
                {
                    id: 1,
                    title: 'Leaf Rake',
                    ISPN: 'GDN-0011',
                    description: 'Leaf rake with 48-inch wooden handle',
                },
                {
                    id: 2,
                    title: 'Garden Cart',
                    ISPN: 'GDN-0023',
                    description: '15 gallon capacity rolling garden cart',
                },
                {
                    id: 5,
                    title: 'Hammer',
                    ISPN: 'TBX-0048',
                    description: 'Curved claw steel hammer',
                },
                {
                    id: 8,
                    title: 'Saw',
                    ISPN: 'TBX-0022',
                    description: '15-inch steel blade hand saw',
                },
                {
                    id: 10,
                    title: 'Video Game Controller',
                    ISPN: 'GMG-0042',
                    description: 'Standard two-button video game controller',
                }
            ]) 
        })
    }

}