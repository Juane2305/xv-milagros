import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types'


const Asistencia = ({ clase, claseTitle, linkAsistencia }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asiste: '',
    acompanantes: '0',
    nombresAcompanantes: '',
    restricciones: '',
    mensaje: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(linkAsistencia, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSuccess(true);
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        asiste: '',
        acompanantes: '0',
        nombresAcompanantes: '',
        restricciones: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar la confirmación. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {linkAsistencia && linkAsistencia.trim() !== "" && (
        <div className={`py-16 ${clase}`}>
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className={`text-3xl md:text-4xl font-light text-center mb-3 ${claseTitle}`}
              data-aos="fade-up"
            >
              Confirmación de Asistencia
            </h2>
            <p className="text-center text-gray-600 mb-10" data-aos="fade-up">
              Por favor completá el formulario para confirmar tu asistencia
            </p>

            {success ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center" data-aos="zoom-in">
                <div className="text-7xl mb-6">✓</div>
                <h4 className="text-3xl font-light text-[#A8D8EA] mb-3">¡Confirmación enviada!</h4>
                <p className="text-gray-600 text-lg mb-8">Gracias por confirmar tu asistencia</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="py-3 px-8 bg-gradient-to-r from-[#A8D8EA] to-[#7FB3D5] text-white rounded-lg hover:shadow-xl transition transform hover:scale-105 font-medium"
                >
                  Enviar una respuesta adicional
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
                <div className="bg-gradient-to-r from-[#A8D8EA] to-[#7FB3D5] p-6">
                  <h3 className="text-2xl font-light text-white text-center">Datos de confirmación</h3>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A8D8EA] focus:outline-none transition"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Apellido <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A8D8EA] focus:outline-none transition"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A8D8EA] focus:outline-none transition"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      ¿Confirmas tu asistencia? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4 flex-wrap">
                      <label className="flex items-center cursor-pointer bg-gray-50 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                        <input
                          type="radio"
                          name="asiste"
                          value="si"
                          checked={formData.asiste === 'si'}
                          onChange={handleChange}
                          required
                          className="w-5 h-5 text-[#A8D8EA] focus:ring-[#A8D8EA]"
                        />
                        <span className="ml-3 text-gray-700 font-medium">Sí, asistiré</span>
                      </label>
                      <label className="flex items-center cursor-pointer bg-gray-50 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                        <input
                          type="radio"
                          name="asiste"
                          value="no"
                          checked={formData.asiste === 'no'}
                          onChange={handleChange}
                          required
                          className="w-5 h-5 text-[#A8D8EA] focus:ring-[#A8D8EA]"
                        />
                        <span className="ml-3 text-gray-700 font-medium">No podré asistir</span>
                      </label>
                    </div>
                  </div>

                  {formData.asiste === 'si' && (
                    <div className="space-y-5 pt-4 border-t-2 border-gray-100">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cantidad de acompañantes
                        </label>
                        <select
                          name="acompanantes"
                          value={formData.acompanantes}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A8D8EA] focus:outline-none transition bg-white cursor-pointer"
                        >
                          <option value="0">Solo yo</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">+5</option>
                        </select>
                      </div>

                      {parseInt(formData.acompanantes) > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombres de acompañantes
                          </label>
                          <input
                            type="text"
                            name="nombresAcompanantes"
                            value={formData.nombresAcompanantes}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A8D8EA] focus:outline-none transition"
                            placeholder="Ej: María García, Juan Pérez"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Restricciones alimentarias o alergias
                        </label>
                        <input
                          type="text"
                          name="restricciones"
                          value={formData.restricciones}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A8D8EA] focus:outline-none transition"
                          placeholder="Vegetariano, celíaco, etc."
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje para Milagros
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#A8D8EA] focus:outline-none transition resize-none"
                      placeholder="Escribe un mensaje especial..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#A8D8EA] to-[#7FB3D5] text-white text-lg rounded-lg hover:shadow-xl transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {loading ? 'Enviando...' : 'Confirmar Asistencia'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Asistencia;

Asistencia.propTypes = {
  plan: PropTypes.string.isRequired,
  fecha_cuenta_regresiva: PropTypes.string.isRequired,
  imagenes: PropTypes.string,
  cancion: PropTypes.string,
  fondoMobile: PropTypes.string,
  fondo: PropTypes.string,
  novios: PropTypes.string.isRequired,
  fecha_evento: PropTypes.string.isRequired,
  nombre_iglesia: PropTypes.string,
  hora_ceremonia_religiosa: PropTypes.string,
  linkCeremonia: PropTypes.string,
  nombre_salon: PropTypes.string,
  hora_evento: PropTypes.string,
  linkFiesta: PropTypes.string,
  ig_user: PropTypes.string,
  fecha_comienzo_calendario: PropTypes.string,
  fecha_fin_calendario: PropTypes.string,
  dressCode: PropTypes.string,
  cbu: PropTypes.string,
  alias: PropTypes.string,
  banco: PropTypes.string,
  nombre_completo: PropTypes.string,
  link_asistencia: PropTypes.string,
  mensaje_personalizado: PropTypes.string,

}.isRequired;