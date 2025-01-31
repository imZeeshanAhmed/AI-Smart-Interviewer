import { useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("");

    const fetchMessage = async () => {
        const res = await fetch("http://localhost:5000/");
        const data = await res.text();
        setMessage(data);
    };

    return (
        <div>
            <h1>AI Smart Interviewer</h1>
            <button onClick={fetchMessage}>Test Backend</button>
            <p>{message}</p>
        </div>
    );
}
