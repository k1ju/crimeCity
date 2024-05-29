import { Injectable } from '@nestjs/common';
import { ICrimeCityRepository } from './interface/crime-city.repository';

@Injectable()
export class CrimeRDBRepository implements ICrimeCityRepository {
  //constructor(private readonly prisma: Prisma) {}

  getCrimeAllByCityName: (city: string) => Promise<{
    crime: {
      name: string;
      count: number;
    }[];
  }> = async (city) => {
    // 대충 디비랑 통신하고

    // 데이터가져오는 코드

    return {
      crime: [{ name: '살인기수', count: 10 }],
    };
  };

  getCrimeByCrimeName: (
    crime: string,
  ) => Promise<{ cities: { name: string; count: number }[] }>;
}
