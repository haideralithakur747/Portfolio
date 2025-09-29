export default function Projects(){
    return(
       <section id ="projects" style={{ color: "white", textAlign: "center",scrollMarginTop: "80px" }} >
       
        <h1 style={{ fontSize: "75px" }}>Projects</h1>
        <div className="Project_Container">
        <h1>Currency Convertor</h1>
        <div className="imgbox">
            <img src="curr.png" alt="" />
        </div>
        <button onClick={() => window.open("https://currencyconvertor-eta.vercel.app/")}>View Project</button>
            <button onClick={() => window.open("https://github.com/haideralithakur747/currencyconvertor")}>GitHub</button>
        </div>
         <div className="Project_Container">
        <h1>Tic-Tac-Toe</h1>
        <div className="imgbox">
            <img src="ttt.png" alt="" />
        </div>
        <button onClick={() => window.open("https://tic-tac-toe-9jrh.vercel.app/")}>View Project</button>
              <button onClick={() => window.open("https://github.com/haideralithakur747/tic-tac-toe")}>GitHub</button>
        </div>
       <div className="Project_Container">
        <h1>Rock-Paper-Scissors</h1>
        <div className="imgbox">
            <img src="rps.png" alt="" />
        </div>
        <button onClick={() => window.open("https://rock-paper-sissor-six.vercel.app/")}>View Project</button>
       <button onClick={() => window.open("https://github.com/haideralithakur747/Rock-Paper-Sissor")}>GitHub</button>
        </div>
  <div className="Project_Container">
        <h1>Calulator</h1>
        <div className="imgbox">
            <img src="c.png" alt="" />
        </div>
        <button onClick={() => window.open("https://calculator-in-js-sable.vercel.app/")}>View Project</button>
         <button onClick={() => window.open("https://github.com/haideralithakur747/calculator-in-js")}>GitHub</button>
        </div>
        <div className="Project_Container">
        <h1>Dummy Amazon WebPage</h1>
        <div className="imgbox">
            <img src="awp.png" alt="" />
        </div>
        <button onClick={() => window.open("https://amzon-webpage.vercel.app/")}>View Project</button>
                <button onClick={() => window.open("https://github.com/haideralithakur747/amzon_webpage")}>GitHub</button>
        </div>
         <div className="Project_Container">
        <h1>Clock</h1>
        <div className="imgbox">
            <img src="Clock.png" alt="" />
        </div>
        <button onClick={() => window.open("https://clock1-delta.vercel.app/")}>View Project</button>
        <button onClick={() => window.open("https://github.com/haideralithakur747/Clock1")}>GitHub</button>
        </div>
         <div className="Project_Container">
        <h1>Guess the Number</h1>
        <div className="imgbox">
            <img src="gg.png" alt="" />
        </div>
        <button onClick={() => window.open("https://java-script-game-project.vercel.app/")}>View Project</button>
        <button onClick={() => window.open("https://github.com/haideralithakur747/java_script_game_project")}>GitHub</button>
        </div>
           <div className="Project_Container">
        <h1>React WebPage</h1>
        <div className="imgbox">
            <img src="gm.png" alt="" />
        </div>
        <button onClick={() => window.open("https://react-webpage-lbob.vercel.app/")}>View Project</button>
        <button onClick={() => window.open("https://github.com/haideralithakur747/ReactWebpage")}>GitHub</button>
        </div>
       </section>
       
    )
}