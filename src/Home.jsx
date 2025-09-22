import {useState,useEffect} from "react"
export default function Home() {
    const words = ["FrontEnd Developer", "React Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (!deleting && displayText.length < currentWord.length) {
      // typing forward
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 150);
    } else if (deleting && displayText.length > 0) {
      // deleting backward (faster)
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 80);
    } else if (!deleting && displayText.length === currentWord.length) {
      // pause before deleting
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && displayText.length === 0) {
      // move to next word
      setDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout); // ✅ cleanup prevents overlap
  }, [displayText, deleting, currentWordIndex, words]);


    return(
        <section id ="home">
        <div className="home">
             <img src="pic.png" alt="" />
             <div className="home-text">
            <h3>Hi I'm </h3>
            
            <h1>Haider Thakur</h1>
            <h2 style={{ color: "white", fontSize: "2rem" }}>{displayText}</h2>
            <p>This is the home section of my portfolio website.</p>
           </div>
        </div>
        </section>
    )
}