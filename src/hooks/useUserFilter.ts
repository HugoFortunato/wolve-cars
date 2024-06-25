import { CarListResponse } from '@/components/cars-list';
import { CarType } from '@/store';
import { useEffect, useReducer } from 'react';

interface CarState {
  cars: CarType[];
  filter: string;
  filteredCars: CarType[];
}

interface CarAction {
  type: string;
  payload: CarType[] | string | any;
}

const ACTIONS_TYPES = {
  SET_CAR_LIST: 'SET_CAR_LIST',
  SET_CAR_LIST_FILTER: 'SET_CAR_LIST_FILTER',
};

const initialState = {
  cars: [],
  filter: '',
  filteredCars: [],
};

function reducer(state: CarState, action: CarAction) {
  switch (action.type) {
    case ACTIONS_TYPES.SET_CAR_LIST:
      return {
        ...state,
        cars: action.payload,
        filteredCars: action.payload,
      };

    case ACTIONS_TYPES.SET_CAR_LIST_FILTER:
      const filteredCars = state.filteredCars.filter((car: CarType) =>
        car.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      if (action.payload === '') {
        return {
          ...state,
          filter: action.payload,
          filteredCars: state.cars,
        };
      }

      return {
        ...state,
        filter: action.payload,
        filteredCars: filteredCars,
      };
    default:
      return state;
  }
}

function useCarFilter(carList?: CarListResponse) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (carList) {
      dispatch({ type: 'SET_CAR_LIST', payload: carList });
    }
  }, [carList]);

  const setFilter = (filter: string) => {
    dispatch({ type: 'SET_CAR_LIST_FILTER', payload: filter });
  };

  return {
    cars: state.cars,
    filteredCars: state.filteredCars,
    setFilter,
  };
}

export default useCarFilter;
