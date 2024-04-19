import { CarType } from '@/store';
import { request, gql } from 'graphql-request';

export const getCarsList = async (): Promise<CarType[] | any> => {
  const query = gql`
    query Assets {
      carLists {
        price
        name
        id
        description
        image {
          url
        }
      }
    }
  `;

  const carsListResult = await request(
    'https://api-sa-east-1.hygraph.com/v2/cluvx38bf14g507uwp82m73sn/master',
    query
  );

  return carsListResult as CarType[];
};

export const getCarDetail = async (id: string): Promise<CarType | any> => {
  const query = gql`
    query MyQuery($id: ID!) {
      carList(where: { id: $id }) {
        id
        description
        image {
          url
        }
        name
        price
      }
    }
  `;

  const carDetailResult = await request(
    'https://api-sa-east-1.hygraph.com/v2/cluvx38bf14g507uwp82m73sn/master',
    query,
    { id }
  );

  return carDetailResult as CarType[];
};
