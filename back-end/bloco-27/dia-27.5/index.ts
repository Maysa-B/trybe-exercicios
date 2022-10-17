// ./index.ts
import CepService from './CepService';
import { MockCepAPI } from './FooCepAPI';

async function main() {
  const cepSvc = new CepService();

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );

  const cepMock = new CepService(new MockCepAPI());
  console.log('----------mock----------');
  console.log(
    'get address by cep', 
    '->', 
    await cepMock.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepMock.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();