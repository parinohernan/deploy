const { conn, Country } = require('../src/db'); // Asegúrate de ajustar la ruta correcta a tu archivo de configuración setup.js

describe('Country Model', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  afterAll(async () => {
    await conn.close();
  });

  it('should create a new country', async () => {
    const newCountry = await Country.create({
      id: 'ABC',
      name: 'Test Country',
      flag: 'test.png',
      continents: 'Test Continent',
      capital: 'Test Capital',
      subregion: 'Test Subregion',
      area: 1000,
      population: 1000000,
    });

    expect(newCountry.id).toBe('ABC');
    expect(newCountry.name).toBe('Test Country');
    expect(newCountry.flag).toBe('test.png');
    expect(newCountry.continents).toBe('Test Continent');
    expect(newCountry.capital).toBe('Test Capital');
    expect(newCountry.subregion).toBe('Test Subregion');
    expect(newCountry.area).toBe(1000);
    expect(newCountry.population).toBe(1000000);
  });

  it('no deberia crear un pais sin los datos requeridos', async () => {
    try {
      // Intenta crear un país sin los campos requeridos
      await Country.create({});
    } catch (error) {
      expect(error.message).toContain('notNull Violation');
    }
  });

  it('no deberia crear un pais con id distinto de 3 letras', async () => {
    try {
      await Country.create({
        id: 'ABCD', // ID con más de 3 letras
        name: 'Invalid Country',
        flag: 'invalid.png',
        continents: 'Test Continent',
        capital: 'Test Capital',
        subregion: 'Test Subregion',
        area: 1000,
        population: 1000000,
      });
    } catch (error) {
      expect(error.message).toContain('Validation error');
    }
  });

  it('el campo poblacion debe ser integer', async () => {
    try {
      await Country.create({
        id: 'XYZ',
        name: 'Invalid Population Country',
        flag: 'invalid.png',
        continents: 'Test Continent',
        capital: 'Test Capital',
        subregion: 'Test Subregion',
        area: 1000,
        population: 'NotANumber', // Población no es un número
      });
    } catch (error) {
      expect(error.message).toContain('Validation error');
    }
  });

  it('el campo area debe er integer', async () => {
    try {
      await Country.create({
        id: '123',
        name: 'Invalid Area Country',
        flag: 'invalid.png',
        continents: 'Test Continent',
        capital: 'Test Capital',
        subregion: 'Test Subregion',
        area: 'NotANumber', // Área no es un número
        population: 1000000,
      });
    } catch (error) {
      expect(error.message).toContain('Validation error');
    }
  });
});
