import { Injectable } from '@nestjs/common';
import { CrimeMemoryRepository } from './crime-memory.repository';
import { CrimeRDBRepository } from './crime-rdb.repository';
import { CityEntity } from './CityEntity';

@Injectable()
export class CrimeService {
  constructor(private readonly crimeRepository: CrimeRDBRepository) {}

  // 전체도시 치안등급가져오기(인구수 대비 강력범죄)
  async getSecurityLevelAll(): Promise<{
    city: string;
    population: number;
    securityLevel: number;
  }> {
    return;
  }

  // 각 도시의 치안등급
  //4 16 16 16 16 16 4

  //해당도시의 치안등급 가져오기
  async getSecurityLevelByCity(): Promise<
    {
      city: string;
      population: number;
      securityLevel: number;
    }[]
  > {
    return;
  }

  // 범죄별 도시 순위(인구수대비 해당 범죄) (범죄 대분류, 중분류)
  async getCityRankByCrime(): Promise<{
    cities: { city: CityEntity; rank: number };
  }> {
    return;
  }

  // 해당 도시의 각범죄별 순위 가져오기
  async getCityRank(): Promise<{}> {
    return;
  }

  // 해당 도시의 각 범죄 순위 상위5개 가져오기
  // 해당 도시의 각 범죄 순위 하위5개 가져오기

  // 해당 도시엔티티 가져오기
  async getCityByIdx(): Promise<CityEntity> {
    return;
  }
}
