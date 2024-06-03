    import React, {useState, useRef, useEffect} from 'react';
    import InputCity from "../../UI/InputCity.jsx";
    import HistoryButton from "../../../../../UI/HistoryButton/HistoryButton";
    import styles from "./OrderLocation.module.css";
    import api from '../api/api.js';
    import { initializeApp } from 'firebase/app';
    import { getDatabase, ref, get ,update,push, set, remove } from 'firebase/database';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

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

    const OrderLocation = ({avalFlights,setAvalFlights, setShop, isShop, setHistory}) => {
        useEffect(() => {
            console.log(avalFlights);
        }, [avalFlights]);
        const [date, setDate] = useState(new Date());
        const [to, setTo] = useState('');
        const [from, setFrom] = useState('');
        const getData = async function(){
            const data = getDatabase(app);
            const reference = ref(data, 'flights');
            const snapshot = await get(reference)
            const datafresh = snapshot.val();
            const filteredFlights = Object.values(datafresh).filter(
                flight => flight.day === date.getDate() && to === flight.to && from === flight.from);
            setAvalFlights(filteredFlights);
        }
        const handeChange = (ev) => {
            setDate(new Date(ev.target.value));

        }
         const sendData = async function() {
             const data = getDatabase(app);
             const reference = ref(data, 'flights');
            for (let i = 0; i < 10; i++) {
                const id = "25e9ddd1-09ba-47c3-b67e-f23590e95ace"
                const newFlight = {
                    day: i + 1, // День начинается с 1
                    month: 6,
                    price: 9899,
                    company: 'Аэрофлот',
                    time: '13:30',
                    from: 'Анапа',
                    to: 'Москва',
                    roadTime: '8 часов',
                    places: [1,2,3,4,5,6,7,8,9,10],
                    id: id
                };
                try {
                    await push(reference, newFlight);
                    console.log(`Flight${i} added successfully!`);
                } catch (error) {
                    console.error(`Error adding Flight${i}:`, error);
                }
            }

        }

        const extractMonthAndDay = () => {
            const today = new Date();
            console.log(today);
            const parseToday = today.getDate();
            console.log(parseToday);
            const parseMonth = today.getMonth() + 1;
            const chosenDate = new Date(date);
            const parseDateDay = chosenDate.getDate();
            const parseDateMonth = chosenDate.getMonth() + 1;
            if (parseToday >= parseDateDay && parseMonth >= parseDateMonth) {
                alert('Билетов на данный промежуток времени нет');
            } else {
                getData();
            }
        }
        const handleSubmit = (event) => {
            extractMonthAndDay();
            isShop == true ? setShop(true) : setShop(true)
            setHistory(false)
        };
         async function results()  {
            const db = getDatabase(app);
            const reference = await ref(db)
            const snapshot = await get(reference)
            try {
               const data = snapshot.val();
               console.log(snapshot.val());

        } catch (error) {
            console.log(error);
            }
        }

        return (
            <div className={styles.div}>
                <InputCity setFrom={setFrom}/>
                <InputCity setTo={setTo}/>
                <input type="datetime-local" onChange={handeChange}/>
                <button onClick={handleSubmit}>Найти билеты</button>

            </div>
        );
    };

    export default OrderLocation;