import { sortHeroesByHealth } from './sort.js';

describe('sortHeroesByHealth', () => {
  test('сортирует героев по убыванию здоровья', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    // toBe сравнивает ссылки на объекты (не подойдёт для массивов объектов)
    // toEqual выполняет глубокое сравнение (Deep Equality)
    expect(sortHeroesByHealth(input)).toEqual(expected);
  });

  test('не мутирует исходный массив', () => {
    const input = [
      { name: 'воин', health: 50 },
      { name: 'стрелок', health: 75 },
    ];
    const inputCopy = JSON.parse(JSON.stringify(input));

    sortHeroesByHealth(input);

    expect(input).toEqual(inputCopy);
  });

  test('возвращает пустой массив для пустого входа', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('корректно сортирует героев с одинаковым здоровьем', () => {
    const input = [
      { name: 'А', health: 50 },
      { name: 'Б', health: 50 },
      { name: 'В', health: 50 },
    ];

    const result = sortHeroesByHealth(input);

    expect(result).toEqual(input); // порядок может сохраниться (stable sort)
    expect(result.every(h => h.health === 50)).toBe(true);
  });
});