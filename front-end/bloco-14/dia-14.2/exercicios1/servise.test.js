const service = require('./service');
const returnSuccess = {
  "message": "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_4506.jpg",
  "status": "success"
};

const returnFail = {
  "status": "fail"
}

describe('Exercício 1', () => {
  it('Testando se a  função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    service.generateRandomNumber = jest.fn().mockReturnValue(10);

    expect(service.generateRandomNumber()).toBe(10);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  })
})

describe('Exercício 2', () => {
  it('Testando se a  função foi chamada, se a nova implementação de divisão funciona e que isso ocorre apenas uma vez', () => {
    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a/b);

    expect(service.generateRandomNumber(10, 5)).toBe(2);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber(10, 5)).toBe(undefined);
  })
})

describe('Exercício 3', () => {
  it('Testando se a  função foi chamada, se a nova implementação de multiplicação funciona e logo após a de dobro', () => {
    service.generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.generateRandomNumber(2, 4, 6)).toBe(48);
    expect(service.generateRandomNumber).toHaveBeenCalled();

    // a linha abaixo fica indiferente para o funcionamento da aplicação
    // service.generateRandomNumber.mockRestore();

    service.generateRandomNumber = jest.fn((a) => a * 2);
    expect(service.generateRandomNumber(8)).toBe(16);
    expect(service.generateRandomNumber).toHaveBeenCalled();
  })
})

describe('Exercício 4', () => {
  it('Testando mock da função upperWords', () => {
    const mockUpper = jest.spyOn(service, 'upperWords').mockImplementation((str) => str.toLowerCase());

    expect(mockUpper('STRING')).toBe('string');
  })

  it('Testando mock da função firstLetter', () => {
    const mockFirst = jest.spyOn(service, 'firstLetter').mockImplementation((str) => str[str.length - 1]);

    expect(mockFirst('STRING')).toBe('G');
  })

  it('Testando mock da função concatStrings', () => {
    const mockConcat =jest.spyOn(service, 'concatStrings').mockImplementation((st1, st2, st3) => st1 + st2 + st3);

    expect(service.concatStrings('ma', 'y', 'sa')).toBe('maysa');
  })

  it('testando se as funções retornaram a sua funcionalidade original', () => {
    service.upperWords.mockRestore();   
    service.firstLetter.mockRestore();  
    service.concatStrings.mockRestore();  

    expect(service.upperWords('string')).toBe('STRING');
    expect(service.firstLetter('STRING')).toBe('S');
    expect(service.concatStrings('ma', 'y')).toBe('may');
  })
})

describe('Exercício 5', () => {
  it('Teste de sucesso da API', () => {
    service.dogImage = jest.fn().mockReturnValue(returnSuccess);
    
    expect(service.dogImage().status).toBe('success');
  })

  it('Teste de falha da API', () => {
    service.dogImage = jest.fn().mockReturnValue(returnFail);
    
    expect(service.dogImage().status).toBe('fail');
  })
})