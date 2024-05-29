export class CityEntity {
  public idx: number;
  public name: string;
  public population: number;

  constructor(data: CityEntity) {
    this.idx = data.idx;
    this.name = data.name;
    this.population = data.population;
  }
}
