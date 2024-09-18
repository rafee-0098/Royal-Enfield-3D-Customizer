import './index.css';
import React ,{Suspense, useEffect,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import Royal from './Components/Royal';



function App() {
  const [showModal, setShowModal] = useState(true); 

  const [body,setbody] = useState("black")
  const [ENGINE,setENGINE] = useState("black")
  const [STEEL,setSTEEL] = useState("black")
  const [engine_fins, setEngine_fins] = useState("#2F2F2F");
  const [SPEEDOMETER, setSPEEDOMETER] = useState("#ffffff"); 
  const [SEAT, setSEAT] = useState("black"); 
  const [Disk, setDisk] = useState("#121212"); 
  const [texture, setTexture] = useState("#A20003");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (



    <div className="App">

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Welcome to the 3D Bike Customizer!</h2>
            <button onClick={handleCloseModal}>Let'S Start</button>
          </div>
        </div>
      )}


        <div className="wrapper">
            <div className="card">
            <>
            <h1 className ="custom" >CUSTOMIZE IT....</h1>  
             
     
            <div className="product-canvas">

         


                   <Canvas>
                      <Suspense fallback={null}>
                          <ambientLight />
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                          <Royal customColors={{setbody:body,
                             setENGINE:ENGINE ,
                              setSTEEL:STEEL,
                              setEngine_fins: engine_fins,
                              setSPEEDOMETER:SPEEDOMETER,
                              setSEAT: SEAT,
                              setDisk: Disk,
                              setTexture: texture,
                              
                              }}
                              />
                          <OrbitControls enablePan={true}
                                         enableZoom={false}
                                         enableRotate={true}/>
                      </Suspense>
                   </Canvas>
                   <div className='colors'>
                    <div>  
                        <input type="color" id="body" name="body"
                              value={body} 
                              onChange={(e) => setbody(e.target.value)}/>
                               <h2>BODY</h2>

                      </div>

                    <div>
                        <input type="color" id="ENGINE" name="ENGINE"
                                value= {ENGINE}
                                onChange={(e) => setENGINE(e.target.value)}/>
                        <h2>ENGINE</h2>
                    </div>
                    <div>
                        <input type="color" id="STEEL" name="STEEL"
                                value={STEEL} 
                                onChange={(e) => setSTEEL(e.target.value)}/>
                        <h2>STEEL</h2>
                    </div>
                    <div>
              <input type="color" id="engine_fins" name="engine_fins" value={engine_fins} onChange={(e) => setEngine_fins(e.target.value)} />
              <h2>E-FINS</h2>
            </div>

            <div>
              <input type="color" id="SPEEDOMETER" name="SPEEDOMETER" value={SPEEDOMETER} onChange={(e) => setSPEEDOMETER(e.target.value)} />
              <h2>METER</h2>
            </div>

            <div>
              <input type="color" id="SEAT" name="SEAT" value={SEAT} onChange={(e) => setSEAT(e.target.value)} />
              <h2>SEAT</h2>
            </div>

            <div>
              <input type="color" id="Disk" name="Disk" value={Disk} onChange={(e) => setDisk(e.target.value)} />
              <h2>DISK</h2>
            </div>

            <div>
              <input type="color" id="texture" name="texture" value={texture} onChange={(e) => setTexture(e.target.value)} />
               <h2>FUELTANK</h2>
              
            </div>
                </div>

                 </div> 
                 </>
         </div>
    </div> 
    </div>
  

  );
}

export default App;





