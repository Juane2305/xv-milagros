import 'aos/dist/aos.css';

import dress from '../assets/esmeralda/dressCodeIcon.svg'
import CountdownCircles from "./CountdownCircles";
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import ValorTarjeta from "./ValorTarjeta";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
// import { FocusCardsDemo } from "./FocusCardsDemo";
// import decoracionImagenes from "../assets/esmeralda/decoracionImagenes.svg";
import decoracionDressCode from "../assets/esmeralda/decoracionDressCode.svg";
import song from '../assets/song.mp3'
// import butterfly from '../assets/butterfly.svg'
// import butterfly2 from '../assets/butterfly2.svg'

import DressCodeEsmeralda from "./DressCodeEsmeralda";

const Invitacion = () => {

  const targetDate = new Date("2026-02-07T20:30:00-03:00");




  return (
    <div className="w-full font-libre relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

      <div className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-fondo-esmeralda bg-center bg-cover font-eleganteText space-y-5 overflow-hidden"
        style={{backgroundImage: `url('https://res.cloudinary.com/dfschbyq2/image/upload/v1742341160/Fondo_de_Pantalla_Computador_Simple_Beige_18_gyfe4i.png')`}}
      >
        <div data-aos="fade-in">
            <p className="text-xl mb-5 tracking-widest font-libre">Te invito a mis 15</p>
            <h1 className="text-8xl md:text-[10rem] font-brushNames text-[#3b3b3b] z-10 italic">
            Milagros
            </h1>

            <div className="flex items-center justify-center py-2 px-4 mt-5">
            <p className="font-bold text-gray-900 text-base tracking-widest font-libre">
                0 7 . 0 2 . 2 0 2 6
            </p>
            </div>
        </div>
      </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#C1E7F0]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#C1E7F0"
              textColor="black"
              valueClassName="text-2xl font-light"
              labelClassName="text-base font-thin"
            />
          </section>

        <section id="lugares" className="relative text-center bg-white pb-20">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            salon=""
            hora_civil="20:30hs"
            hora_inicio="20:30hs"
            hora_fin="05:00hs"
          />
          <a href="https://maps.app.goo.gl/WLhoacFBMnDNPYGz6" target="_blank" rel="noopener noreferrer">
            <button className=" text-sm border-2 border-gray-700 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

          {/* <div className="relative bg-white">
            <img
              src={decoracionImagenes}
              alt="Decoración lateral"
              className="hidden md:block absolute -left-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",

              }}
            />
            <img
              src={decoracionImagenes}
              alt="Decoración lateral invertida"
              className="hidden md:block absolute -right-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                 width: "30rem" ,
                }}
            />
            <section className="pb-16">
                <FocusCardsDemo
                    texto=""
                  images={[
                    {
                      index: 1,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761924033/08f0226b-6d22-4b4d-b8f2-900c4f82150e_2_uu8h7y.webp",
                    },
                    // {
                    //   index: 2,
                    //   img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862666/6ba0d5df-bf5e-46a6-aa5c-286b899e1205_npwd6t.jpg",
                    // },
                    // {
                    //   index: 3,
                    //   img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862672/639bd82f-360b-4fbe-894a-18960373fb88_p66dkp.jpg",
                    // },
                    // {
                    //   index: 4,
                    //   img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862678/9d3c68a5-5b63-472b-8b5f-f078f1c50374_v68yjv.jpg",
                    // },
                  ]}
                />
            </section>
          </div> */}
{/* 
          <div className="bg-white border-b border-[#6a4e8a]">
            <InstagramWall
              userClass="text-[#6a4e8a]"
              logoClass="text-[#6a4e8a]"
              user="@keeylaailinn"
            />
          </div> */}

          <div className="bg-[#A8D8EA] text-center relative text-white">
            <GoogleCalendarButton
              imgClass="text-white"
              buttonClass="border-[#7FB3D5] bg-white text-gray-800 text-sm rounded-full"
              titleCalendar="XV de Milagros"
              salon="Interseccion Calle 40 y 53, Mercedes, Buenos Aires Province"
              fechaComienzo="20260207T203000"
              fechaFin="20260208T050000"
            />
          </div>

          <div className="relative bg-white py-10">
            <img
              src={decoracionDressCode}
              alt="Decoración DressCode Izq"
              className="hidden md:block absolute -left-40 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
              }}
            />
            <img
              src={decoracionDressCode}
              alt="Decoración DressCode Der"
              className="hidden md:block absolute -right-40 top-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",
              }}
            />

            <DressCodeEsmeralda dressCode="Elegant Sport" icon={dress}/>
          </div>
{/* 
          <DatosBancarios
            claseIcon="text-white"
            texto="Si deseas hacerme un regalo, te dejo los datos"
            claseContenedor="bg-[#6a4e8a] text-white"
            claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
            textSize="text-base"
            background={{ backgroundColor: colorPrincipal }}
            styleBotonModal={{
              backgroundColor: "white",
              borderColor: "#d4bfe2",
            }}
            claseBotonModal={{
              backgroundColor: "#6a4e8a",
              borderColor: "#6a4e8a",
            }}
            styleModal={{ backgroundColor: colorSecundario }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            styleTextColor={{ color: colorPrincipal }}
            cbu="0110854330085400441151"
            alias="laura.acebal"
            banco="Banco"
            nombre="Laura Griselda Acebal"
            claseModal="bg-[#6a4e8a]"
            borderModal="border-[#6a4e8a]"
            textColor="text-[#6a4e8a]"
          /> */}

          <DatosBancarios
            claseContenedor="bg-[#A8D8EA] text-white"
            texto="Si deseas hacerme un regalo, te dejo los datos"
            claseBoton="rounded-full hover:shadow-lg bg-gray-100 text-gray-900"
            textSize="text-base"
            background={{ backgroundColor: "#A8D8EA" }}
            styleBotonModal={{
              backgroundColor: "white",
              borderColor: "#7FB3D5",
            }}
            claseBotonModal={{
              backgroundColor: "#A8D8EA",
              borderColor: "#A8D8EA",
            }}
            claseModal="bg-[#A8D8EA]/50"
            styleModal={{ backgroundColor: '#A8D8EA/50' }}
            borderModal="border-[#7FB3D5]"
            cbu="0140022903717553450149"
            alias="milimollo"
            nombre="Gaston Mollo"
            banco="Banco Provincia - Cuenta DNI"
          />

          <Asistencia
            clase="py-10 bg-white bg-fixed border-b-4 border-[#7FB3D5]"
            claseTitle="text-[#7FB3D5]"
            claseButton="border-2 border-[#7FB3D5] text-sm font-semibold hover:bg-[#7FB3D5]  text-gray-700 hover:text-white rounded-full"
            linkAsistencia="https://script.google.com/macros/s/AKfycbxpNRUi1bRsxbV0nWDJ2nxPZyuyVvIB3eE2LybfucOnhpl3IuRN6xut_MkAVDzF451PSQ/exec"
          />

        <div className="font-libre text-sm bg-white py-16">
          <div className="relative flex justify-center items-center">
            <TextoFinal textClass="text-lg md:text-xl italic"/>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
