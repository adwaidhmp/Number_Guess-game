import { useEffect, useRef, useState } from "react"

function Number_Guess() {

    const [message, setmessage] = useState("C'mon Lets Start")
    const [num, setnum] = useState(null)
    const [tried, settry] = useState(0)
    const reference = useRef()
    const generateRandom = () => {
        const random = Math.floor(Math.random() * 10) + 1;
        setnum(random);
    }
    useEffect(() => {
        generateRandom();
    }, []);

    function guess() {
        if (tried >= 5) {
            setmessage("😓 Sorry! You've used all 5 chances. Refreshing...");
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            return;
        }

        let number = (Number(reference.current.value))
        if (number < 1 || number > 10) {
            setmessage("❌ Enter a Number betweeen 1to 10")
        }
        else if (number > num) {
            setmessage("🔼 you are close your guess is little higher")
        }
        else if (number < num) {
            setmessage("🔽 you are close your guess is little lower")
        }
        else if (tried == 4) {
            setmessage("😶‍🌫️ This is your last try")
        }
        else if (number === num) {
            setmessage("🎉 Your Guess was right You Won ")
        }

        reference.current.value = ""
        settry(prev => prev + 1)

        if (tried === 4) {
      setmessage("😶‍🌫️ This is your last try........!");
        }
    }
    function playagain() {
        generateRandom();
        setmessage("C'mon Lets Start");
        settry(0)
        reference.current.value = "";
    }
    return (
        <div className="main">
            <div className="box">
                <h1>Guess the Number !</h1>
                <p>You have 5 chances to try your luck </p>
                <input type="number" placeholder="enter a number between 1 to 10" ref={reference} className="inp" /><br />
                <button onClick={guess} className="btn">Guess</button><button onClick={playagain} className="btn1">Play Again</button>
                <h4>{message}</h4>
                <p style={{fontSize:"10px",textAlign:"center",color:"black"}}> Use the Play Again button anytime to restart manually</p>
                <p style={{fontSize:"8px",textAlign:"center",color:"red"}}>Welcome to the Number Guessing Game! <br/>
                    A fun and simple game where your goal is to guess a randomly generated number between 1 and 10. <br/>
                    You have only 5 chances to guess the correct number — can you crack the code?<br/>
                    Test your luck, trust your instincts, and see if you can win in fewer tries!</p>
            </div>
        </div>
    )
}

export default Number_Guess