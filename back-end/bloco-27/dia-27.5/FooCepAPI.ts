// ./FooCepAPI.ts
export interface ICep {
  getAddressByCEP(cep: string, number: number): Promise<string>,
  getCepByAddress(address: string, number: number): Promise<string>
}

class FooCepAPI implements ICep {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export class MockCepAPI implements ICep {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço mockado para o "CEP:${cep}, n°:${number}" é "endereço mock"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP mock"`;
  }
}

export default FooCepAPI;