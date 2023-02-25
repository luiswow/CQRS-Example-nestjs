import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Prueba extends Document {
    
    @Prop({
        unique: true,
        index: true,
    })
    name:string;
    
    @Prop({
        unique: true,
        index: true,
    })
    no:number;

}

export const PokemonSchema= SchemaFactory.createForClass(Prueba);