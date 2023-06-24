import React, {useState} from 'react';

const Calculator = () => {
    const [result, setresult] = useState('');
    const [negative, setnegative] = useState(false);

    const PushItem = (x) => {
        setresult(result.concat(x.target.name));
    };

    const calculate = () => {
        try {
            setresult(eval(result).toString());
        } catch (error) {
            setresult('Error');
        }
    }
    
    const clear = () => {
        setresult('');
    }

    const inversor = () => {
        setnegative(!negative);
        setresult(negative ? result.slice(1) : '-' + result);
    }

    return (
        <body>
            <main className='main'>
                <div className='calculator'>
                    <input type="text" value={result}/>
                    <div className='keyboard'>
                        <button name="1" onClick={PushItem} className='number'>1</button>
                        <button name="2" onClick={PushItem} className='number'>2</button>
                        <button name="3" onClick={PushItem} className='number'>3</button>
                        <button name="+" onClick={PushItem} className='operator'>+</button>
                        <button name="4" onClick={PushItem} className='number'>4</button>
                        <button name="5" onClick={PushItem} className='number'>5</button>
                        <button name="6" onClick={PushItem} className='number'>6</button>
                        <button name="-" onClick={PushItem} className='operator'>-</button>
                        <button name="7" onClick={PushItem} className='number'>7</button>
                        <button name="8" onClick={PushItem} className='number'>8</button>
                        <button name="9" onClick={PushItem} className='number'>9</button>
                        <button name="*" onClick={PushItem} className='operator'>*</button>
                        <button name="0" onClick={PushItem} className='number'>0</button>
                        <button name="." onClick={PushItem} className='number'>.</button>
                        <button name="+/-" onClick={inversor} className='inversor'>+/-</button>
                        <button name="/" onClick={PushItem} className='operator'>/</button>
                        <button onClick={clear} className='clear'>Clear</button>
                        <button onClick={calculate} className='equal'>=</button>
                    </div>
                </div>
            </main>
        </body>
    );
};

export default Calculator;