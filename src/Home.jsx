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
             <img src="pic1.png" alt="" />
             <div className="home-text">
            <h3>Hi I'm </h3>
            
            <h1>Haider Thakur</h1>
            <h2 style={{ color: "white", fontSize: "2rem" }}>{displayText}</h2>
            <p>I build responsive, dynamic, and user-focused interfaces that bring ideas to life. My goal is to craft seamless digital experiences that inspire and engage users.</p>
            <button className="resume-btn">
  <a href="/resume.pdf" download="My_Resume.pdf">
    Download Resume
  </a>
</button>

            <button>Contact Me</button>
           </div>
           
        </div>
        
        </section>
    )
}