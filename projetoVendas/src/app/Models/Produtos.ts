export interface Produtos{
    map(arg0: (item: any) => void): unknown;
    id?: number;
    nome: string;
    descricao: string;
    dataDoCadastro: string;
    valor: number;
}