export class DadosUsuario {
    id:string
    nome:string
    nomeCompleto:string
    descricao:string
    email:string
    localidade:string
    tenantDomain:string
    tenantName:string
    tenantLocale:string
  }

  export class Papel {
    idPapel: string
    nome: string
    descricao: string
}

export class Usuario {
    idUsuario: string
    nome: string
    nomeCompleto: string
    descricao: string
    email: string
    bloqueado: boolean
    userNameDomain: string
    papeis: Papel[]
}