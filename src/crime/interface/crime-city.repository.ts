export interface ICrimeCityRepository {
  /**
   * 특정 도시의 범죄 모두 가져오기
   */
  getCrimeAllByCityName: (city: string) => Promise<{
    crime: {
      name: string;
      count: number;
    }[];
  }>;

  /**
   * 범죄 종류로 범죄 모두보기
   */
  getCrimeByCrimeName: (crime: string) => Promise<{
    cities: {
      name: string; // city name
      count: number;
    }[];
  }>;

  //도시 치안 등급가져오기

  //
}
