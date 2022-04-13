# Exemplos de testes em typescript

## Teste

Dado um conjunto de entradas, quando algo acontecer a saída deve suprir as expectativas

## AAA

Arrange: Define-se todas as informações necessárias para executar o comportamento que será testado

Act: Executa a função.

Assert: Verifica o que aconteceu após a execução, comparando as informações retornadas com a expectativa que foi criada.

## Princípio FIRST:

Fast: Os testes devem ser rapidos.

Independent: Não deve existir depedencias entre os testes, devendo ser executado de forma isolada.

Repetable: O resultado deve ser o mesmo indepente da quantidade de vezes executada.

Self-validating: O teste deve ter uma saída bem definida que é válida fazendo o que ele passe ou falhe.

Timely: Os testes devem ser escritos antes do código-fonte

## Test Patterns

Dummy: Objetos criados para completar as listas de parametros que precisam para testar um metodo

Stubs: Objectos que retornar respostas prontas

Spies: Objetos que "espionam" a execução de um método, podendo comparar os parametros passados, quantas vezes ela foi chamada, entre outros.

Mocks: Permite que diga exatamente o que quer que ele faça e o testee vai quebrar se isso não acontecer.

Fake: Implementação que simulam o funcionamento de uma instancia. Exemplo banco de dados ou envio de e-mails.

## Instruções:

npm install
npm run start

## Link Extra:

https://martinfowler.com/articles/mocksArentStubs.html
