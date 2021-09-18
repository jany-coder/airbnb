import React, {useState, useEffect} from 'react'
import './_navbar.scss';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Navabr = () => {

    const [input, setInput] = useState('')
    const [checkIn, setCheckIn] = useState(false);
    const [checkOut, setCheckOut] = useState(false);

    const [takeIn, setTakeIn] = useState({month: 'Add', day: 'date'});
    const [takeOut, setTakeOut] = useState({month: 'Add', day: 'date'});

    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [scroll, setScroll] = useState(false);

    const [searching, setSearching] = useState(false);

    const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const onChange1 = date => {
        setTakeIn({month: months[date.getMonth()+1], day: date.getDate()});
        setCheckIn(false)
        setDate1(date)
    }
    const onChange2 = date => {
        setTakeOut({month: months[date.getMonth()+1], day: date.getDate()});
        setCheckOut(false)
        setDate2(date)
    }

    const handlerScroll = () => {
        const offset = window.scrollY;

        if(offset > 100){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handlerScroll)
    })

    return (
        <>
        <nav id='nav' className={scroll ? 'bg-white': 'bg-trans'}>
            <div className={`long-btn`}>
                <div className='box' onClick={() => setSearching(true)}>
                    <i className='fas fa-search'></i>
                    <p>Where are you going ?</p>
                </div>
            </div>
            <div className='upside'>
                <div className='nav-brand'>
                    <a href='/'><strong>airbnb</strong></a>
                </div>
                <a href='#header' onClick={() => setScroll(false)} className={scroll ? 'show search-link':  'hide'}><p>Start your search</p><i className='fas fa-search'></i></a>
                <div className={`search-sec ${scroll ? 'hide':'show'}`}>
                    <ul className='filter'>
                        <li><a href='/'>Places to stay</a></li>
                        <li><a href='/'>Experiences</a></li>
                        <li><a href='/'>Online experiences</a></li>
                    </ul>
                </div>
                <div className='info'>
                    <h4>Become host</h4>
                    <i className="fas fa-globe"></i>
                    <div className='prof'>
                        <i className='fas fa-bars'></i>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
            </div>
            <div className={`bottom-side ${scroll ? 'hide':'show'}`}>
                <div className='date-range'>
                    <div className='location'>
                        <label for='search-input'>
                            Location
                        </label>
                        <input 
                            id='search-input' 
                            type='text' 
                            placeholder='Where are you going?'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}/>
                            {input.length > 0 ? <span><p>Go any where any time</p><button>I'm flexible</button></span>:''}
                    </div>
                    <span className='side-border'></span>
                    <div className='check-in' onClick={() => {
                        setCheckIn(true)
                        setCheckOut(false)
                        setInput('')
                        }}>
                        <h5>Check in</h5>
                        <p>{takeIn.month+' '+ takeIn.day}</p>
                        {
                         checkIn ? <Calendar value={date1} onChange={onChange1}/>:''
                        }
                    </div>
                    <span className='side-border'></span>
                    <div className='check-out' onClick={() => {
                        setCheckOut(true);
                        setCheckIn(false);
                        setInput('')
                        }}>
                        <h5>Check out</h5>
                        <p>{takeOut.month+' '+ takeOut.day}</p>
                        {
                         checkOut ? <Calendar value={date2} onChange={onChange2}/>:''
                        }
                    </div>
                    <span className='side-border'></span>
                    <div className='guest'>
                        <div className='wrapper'>
                            <h5>Guest</h5>
                            <p>Add guest</p>
                        </div>
                        <i className='fas fa-search'></i>
                    </div>
                </div>
            </div>
        </nav>
        <div className={`full-form ${searching ? 'show':'hide'}`}>
            <div className='container'>
                <div className='back-form'>
                    <i onClick={() => setSearching(false)} className="fas fa-chevron-left"></i>
                    <input type='text' autoFocus placeholder='Where are you going ?'/>
                </div>
                <div className='motto'>Go anywhere any time</div>
                <div className='btn-flex'>
                    <h3>I'am flexible</h3>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navabr;
