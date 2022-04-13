import { ItemRepository } from '../src/ItemRepository';
import { ItemRepositoryFake } from '../src/ItemRepositoryFake';
import { ItemService } from '../src/itemsService';
var sinon = require('sinon');

const itemsService = new ItemService(new ItemRepository());

test('Deve obter os itens', async function () {
  const items = await itemsService.getItems();
  expect(items).toHaveLength(3);
});

test('Deve obter os itens com stub', async function () {
  sinon.stub(itemsService, 'getItems').returns([{ id_item: 4 }]);
  const items = await itemsService.getItems();
  expect(items).toHaveLength(1);
  sinon.restore();
});

test('Deve obter os itens com spy', async function () {
  const spy = sinon.spy(itemsService, 'getItems');
  const items = await itemsService.getItems();
  expect(items).toHaveLength(3);
  sinon.assert.calledOnce(spy);
  sinon.restore();
});

test('Deve obter os itens com mock', async function () {
  const mock = sinon.mock(itemsService);
  mock
    .expects('getItems')
    .once()
    .returns([{ id_item: 4 }]);
  const items = await itemsService.getItems();
  expect(items).toHaveLength(1);
  mock.verify();
  sinon.restore();
});

test('Deve obter os itens com fake', async function () {
  const itemsServiceFake = new ItemService(new ItemRepositoryFake());

  const items = await itemsServiceFake.getItems();
  expect(items).toHaveLength(1);
});
