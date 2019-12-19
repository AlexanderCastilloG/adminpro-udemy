export class Medico {

    constructor(
        public nombre?: string,
        public img?: string,
        public usuario?: string,
        public hospital?: {
            id?: string,
            nombre?: string
        },
        public _id?: string
    ) { }
}
