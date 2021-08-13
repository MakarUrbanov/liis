import { put, takeEvery, call, select } from 'redux-saga/effects'
import axios from 'axios'
import {
  dateSelector,
  FETCH_FLIGHTS,
  handleIsLoading,
  setFlights,
} from '@/store/flightsReducer'

interface IStoreProps {
  date: string
}

interface IRootState {
  departure: string
}

async function getFlights(departureDate: string): Promise<any> {
  try {
    const flights = await axios({
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-EN/SVO-sky/JFK-sky/${departureDate}`,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0a0a124bdbmsha5a636763687650p1112f0jsn84037de75702',
      },
    })
    return flights
  } catch (error) {
    console.log(error)
  }
}

function* getFlightsWorker(): any {
  yield put(handleIsLoading(true))
  const departureDate = yield select(dateSelector)
  const data = yield call(getFlights, departureDate)
  yield put(setFlights(data))
  yield put(handleIsLoading(false))
}

export function* flightsWatcher() {
  yield takeEvery(FETCH_FLIGHTS, getFlightsWorker)
}
