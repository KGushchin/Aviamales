import './App.css';
import React from 'react';
import Header from "./modules/Header/Header/Header.jsx";
import Main from "./modules/Main/Main/Main.jsx";
import OrderCreate from "./modules/OrderCreate/OrderCreate/OrderCreate.jsx";
import { useState, useEffect, useRef } from "react";
import History from "./modules/History/History/History.jsx";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, update } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAciIbicuSJ3Ta-qkx3G7jwfHeZ_oGrB2s",
    authDomain: "aviamales.firebaseapp.com",
    databaseURL: "https://aviamales-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aviamales",
    storageBucket: "aviamales.appspot.com",
    messagingSenderId: "50053709772",
    appId: "1:50053709772:web:e545645769d6d965866769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
    const [avalFlights, setAvalFlights] = useState([]);
    const [isBuy, setBuy] = useState(false);
    const [currentFlight, setCurrentFlight] = useState({});
    const [isHistory, setHistory] = useState(false);
    const [place, setPlace] = useState(0);
    const obj = JSON.parse(localStorage.getItem("tickets"));
    const [isShop,setShop] = useState(false)

    const deletePlace = async function(plac) {
        try {
            const data = getDatabase(app);
            const reference = ref(data, 'flights');
            const snapshot = await get(reference);
            const datafresh = snapshot.val();

            let findFlightId = null;

            Object.entries(datafresh).forEach(([flightId, flight]) => {
                if (flight.day === currentFlight.day &&
                    flight.month === currentFlight.month &&
                    flight.from === currentFlight.from &&
                    flight.to === currentFlight.to &&
                    flight.company === currentFlight.company &&
                    flight.time === currentFlight.time &&
                    flight.roadTime === currentFlight.roadTime &&
                    flight.price === currentFlight.price
                ) {
                    findFlightId = flightId;
                }
            });

            if (findFlightId) {
                console.log("Найден рейс с идентификатором:", findFlightId);

                // Получаем ссылку на конкретный рейс
                const flightRef = ref(data, `flights/${findFlightId}`);

                // Фильтруем массив мест, удаляя выбранное место
                const updatedPlaces = currentFlight.places.filter(p => p !== place);

                console.log("Обновленные места:", updatedPlaces);

                // Обновляем данные рейса
                await update(flightRef, { places: updatedPlaces });
                console.log("Место успешно удалено из рейса!");

            } else {
                console.log("Рейс не найден.");
                console.log(currentFlight);
            }
        } catch (error) {
            console.log("Ошибка при удалении места из рейса:", error);
        }
    }




    const saveTicket = function (ticket) {
        const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
        const newTicket = { ...currentFlight, places: place }; // Создаем новый билет, объединяя свойства текущего рейса и места
        tickets.push(newTicket); // Добавляем новый билет в массив
        localStorage.setItem("tickets", JSON.stringify(tickets)); // Сохраняем обновленный массив билетов в локальное хранилище
    }

    return (
        <div className="App">
            <Header
                avalFlights={avalFlights}
                setAvalFlights={setAvalFlights}
                setHistory={setHistory}
                isHistory={isHistory}
                isShop={isShop}
                setShop={setShop}
            ></Header>
            {!isBuy && !isHistory && isShop && <Main
                avalFlights={avalFlights}
                currentFlight={currentFlight}
                setCurrentFlight={setCurrentFlight}
                setBuy={setBuy}
            >
            </Main>}
            {isBuy && <OrderCreate
                currentFlight={currentFlight}
                saveTicket={saveTicket}
                place={place}
                setPlace={setPlace}
                deletePlace={deletePlace}
                setHistory={setHistory}
                isHistory={isHistory}
                setBuy={setBuy}
                isBuy={isBuy}
            />}
            {isHistory && !isBuy && <History obj={obj} />}
        </div>
    );
}

export default App;