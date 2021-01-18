import {App} from "./app/App.js";

const ONE_SECOND_MILLIS = 1000;
const SW_API_BASE_URL = "https://swapi.dev/api";
const QUIZ_MAX_TIME = 120 * ONE_SECOND_MILLIS;

window.onload = () => App({options: {swApiBaseUrl: SW_API_BASE_URL, quizMaxTime: QUIZ_MAX_TIME}})
