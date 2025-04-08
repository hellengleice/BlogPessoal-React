import Postagem from "./Postagem";

export default interface Tema {
    id?: number | null
    descricao: string;
    postagem?: Postagem[] | null;
}