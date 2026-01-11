import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopyOutline } from "react-icons/io5";
import CardIcon from './CardIcon';

const ValorTarjeta = ({
  claseContenedor,
  claseBoton,
  textSize,
  background,
  styleBotonModal,
  claseBotonModal,
  claseModal,
  styleModal,
  styleBorderModal,
  styleTextColor,
  borderModal,
  cbu,
  alias,
  nombre,
  banco,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <div className={`pt-20 flex flex-col justify-center items-center py-20 gap-y-5 ${claseContenedor}`} style={background}>
        <div data-aos="fade-up">
          <CardIcon />
        </div>
        <div className={`flex flex-col items-center justify-center`}>
          <div className={`text-center px-5 md:px-0 ${textSize}`} data-aos="fade-up">
            <h3 className="font-bold text-lg mb-4">Valor de Tarjeta</h3>
            <p className="text-base mb-6 text-white">Aquí vas a encontrar los valores de la tarjeta según la edad y los datos para realizar la transferencia</p>
          </div>

          <button
            className={`py-4 px-6 border-2 mt-5 transition hover:transform hover:scale-105 hover:shadow-lg ${claseBoton}`}
            style={styleBotonModal}
            data-aos="fade-up"
            onClick={() => setIsOpen(true)}
          >
            Ver Más
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`fixed inset-0 ${claseModal} bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50`} style={styleModal}>
          <div className={`bg-white p-10 rounded-lg flex flex-col justify-center items-center border-2 ${borderModal}`} style={styleBorderModal}>
            <div className="flex flex-col justify-center text-center space-y-7 text-gray-900 w-full max-w-md">
              <h2 className="font-bold text-2xl">Valor de Tarjeta</h2>
              
              <div className="w-full space-y-3 text-left text-gray-800">
                <p className="text-base"><span className="font-semibold">Mayores:</span> $75.000</p>
                <p className="text-base"><span className="font-semibold">Menores de 3 a 10 años:</span> $25.000</p>
              </div>

              <hr className="border-t-2 border-gray-300" />

              <h3 className="font-bold text-lg">Datos para Transferir</h3>

              <div className="w-full space-y-4 text-left text-gray-800">
                <p className="text-base flex justify-between items-center">
                  <span><span className="font-semibold">Nombre del titular:</span> {nombre}</span>
                </p>

                <p className="text-base flex justify-between items-center">
                  <span><span className="font-semibold">CBU:</span> {cbu}</span>
                  <button onClick={() => copiarTexto(cbu)}>
                    <IoCopyOutline style={styleTextColor} className="ml-2" />
                  </button>
                </p>

                <p className="text-base flex justify-between items-center">
                  <span><span className="font-semibold">Alias:</span> {alias}</span>
                  <button onClick={() => copiarTexto(alias)}>
                    <IoCopyOutline style={styleTextColor} className="ml-2" />
                  </button>
                </p>

                {banco && (
                  <p className="text-base flex justify-between items-center">
                    <span><span className="font-semibold">Banco:</span> {banco}</span>
                  </p>
                )}
              </div>

              <button
                className={`py-4 rounded-lg text-white font-bold hover:bg-transparent hover:transition hover:text-gray-900 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
                style={claseBotonModal}
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ValorTarjeta;
