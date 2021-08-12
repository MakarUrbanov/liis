import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_FLIGHTS, setFlights } from '@/store/flightsReducer'
import { useSelector } from 'react-redux'

interface IStoreProps {
  date: string
}

async function getFlights(): Promise<any> {
  try {
    const flights = await axios({
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-EN/SVO-sky/JFK-sky/2021-09-10`,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0a0a124bdbmsha5a636763687650p1112f0jsn84037de75702',
      },
    })
    console.log(flights.data)
    return flights
  } catch (error) {
    console.log(error)
  }
}

function* getFlightsWorker(): any {
  const data = yield call(getFlights)

  yield put(setFlights(data))
}

export function* flightsWatcher() {
  yield takeEvery(FETCH_FLIGHTS, getFlightsWorker)
}
