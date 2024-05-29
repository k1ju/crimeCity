import { Injectable } from '@nestjs/common';
import { ICrimeCityRepository } from './interface/crime-city.repository';

@Injectable()
export class CrimeMemoryRepository implements ICrimeCityRepository {
  constructor(private readonly csv: any) {}

  getCrimeAllByCityName: (
    city: string,
  ) => Promise<{ crime: { name: string; count: number }[] }>;

  getCrimeByCrimeName: (
    crime: string,
  ) => Promise<{ cities: { name: string; count: number }[] }>;
}
