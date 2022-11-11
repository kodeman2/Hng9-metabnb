import "./herosection.css";

export default function Herosection() {
  return (
    <div className="herosection">
      <div className="herosectiontopcontainer">
        <div className="lefthero">

        <h1>
            Rent a <span className="textspancolor">Place</span> away from{" "}
            <span className="textspancolor">Home</span> in the <span className="textspancolor">Metaverse</span>
          </h1>

          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your  imagination to reality at your
            comfort zone
          </p>

          <span>
          <input
              type="search"
              name=""
              id=""
              placeholder="search for location"
         
            />
             <button>
              Search
            </button></span>
            
        </div>
        <div className="righthero">

         <img src="./src/assets/heroimg.png" alt="heroimage" className="heroimage" />
        </div>
      </div>
      <div className="herosectionbottomcontainer">
      <img src="./src/assets/MBToken.svg" alt="MBToken-Icon" id="imgStyle" />
        <img src="./src/assets/MetaMask.svg" alt="MetaMask-Icon" id="imgStyle" />
        <img src="./src/assets/OpenSea.svg" alt="OpenSea-Icon" id="imgStyle" />
      </div>
    </div>
  );
}
