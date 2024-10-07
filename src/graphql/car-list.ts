import { CarType } from '@/store';
import { request, gql } from 'graphql-request';

export const getCarsList = async (): Promise<CarType[]> => {
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

export const getCarDetail = async (id: string): Promise<CarType> => {
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

  return carDetailResult as CarType;
};

export const getCarComments = async (id: string, stage = 'DRAFT') => {
  const query = gql`
    query MyQuery($id: ID!, $stage: Stage!) {
      carList(where: { id: $id }, stage: $stage) {
        id
        name
        stage
        comments {
          comment
        }
      }
    }
  `;

  const carCommentsResult = await request(
    'https://api-sa-east-1.hygraph.com/v2/cluvx38bf14g507uwp82m73sn/master',
    query,
    { id, stage }
  );

  return carCommentsResult as CarType[];
};
