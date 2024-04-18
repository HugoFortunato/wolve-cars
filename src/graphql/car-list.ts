import { CarType } from '@/store';
import { request, gql } from 'graphql-request';

export const getCarsList = async (): Promise<CarType[]> => {
  const query = gql`
    query Assets {
      carLists {
        price
        name
        id
        image {
          url
        }
      }
    }
  `;

  const result = await request(
    'https://api-sa-east-1.hygraph.com/v2/cluvx38bf14g507uwp82m73sn/master',
    query
  );

  return result as CarType[];
};
