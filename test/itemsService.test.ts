import { ItemRepository } from '../src/ItemRepository';
import { ItemRepositoryFake } from '../src/ItemRepositoryFake';
import { ItemService } from '../src/itemsService';
var sinon = require('sinon');

const itemsService = new ItemService(new ItemRepository());

test('Deve obter os itens', function () {
  const items = itemsService.getItems();
  expect(items).toHaveLength(3);
});

test('Deve obter os itens com stub', function () {
  sinon.stub(itemsService, 'getItems').returns([{ id_item: 4 }]);
  const items = itemsService.getItems();
  expect(items).toHaveLength(1);
  sinon.restore();
});

test('Deve obter os itens com spy', function () {
  const spy = sinon.spy(itemsService, 'getItems');
  const items = itemsService.getItems();
  expect(items).toHaveLength(3);
  sinon.assert.calledOnce(spy);
  sinon.restore();
});

test('Deve obter os itens com mock', function () {
  const mock = sinon.mock(itemsService);
  mock
    .expects('getItems')
    .once()
    .returns([{ id_item: 4 }]);
  const items = itemsService.getItems();
  expect(items).toHaveLength(1);
  mock.verify();
  sinon.restore();
});

test('Deve obter os itens com fake', function () {
  const itemsServiceFake = new ItemService(new ItemRepositoryFake());

  const items = itemsServiceFake.getItems();
  expect(items).toHaveLength(1);
});
