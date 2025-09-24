export default function Projects(){
    return(
       <section id ="projects" style={{ color: "white", textAlign: "center" }} >
       
        <h1 style={{ fontSize: "75px" }}>Projects</h1>
        <div className="Project_Container">
        <h1>Currency Convertor</h1>
        <div className="imgbox">\
            <img src="curr.png" alt="" />
        </div>
        <button onClick={() => window.open("https://currencyconvertor-eta.vercel.app/", "_blank")}>View Project</button>
        <button>GitHub</button>
        </div>
         <div className="Project_Container">
        <h1>Tic-Tac-Toe</h1>
        <div className="imgbox">\
            <img src="ttt.png" alt="" />
        </div>
        <button onClick={() => window.open("https://tic-tac-toe-9jrh.vercel.app/", "_blank")}>View Project</button>
        <button>GitHub</button>
        </div>
       
       </section>
    )
}