// ./CepService.ts
import FooCepAPI, { ICep } from './FooCepAPI';

class CepService {
  private readonly cepApi: ICep;

  constructor(cep: ICep = new FooCepAPI()) {
    this.cepApi = cep;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;