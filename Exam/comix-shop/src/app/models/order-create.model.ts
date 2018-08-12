
import { ComixCreateComponent } from "../components/comix/comix-create/comix-create.component";

export class OrderCreateModel{
    constructor(
        public _id : string,
        public comix : string,
        public date : string,
        public buyer : string,
        public price : string){}
}