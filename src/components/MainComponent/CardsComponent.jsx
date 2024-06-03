import React from "react";
export const CardsComponent = () => {
  return (
    <div className="w-[1000px] m-4 md:grid grid-cols-3 auto-cols-max gap-4">
      <div className=" flex flex-col items-center">
        <img
          className="w-[80px] h-40 text-red-800"
          src="./src/assets/iconos/book.svg"
          alt=""
        />
        <h2 className="text-center align-top text-xl text-gray-900 font-medium my-2">
          COMPETENCIAS PROFESIONALES
        </h2>
        <p>
          Servicios de Formación enfocados en la Gestión Empresarial, Control de
          Gestión, Mejora de Procesos y Normas Internacionales ISO, FSSC, BRC,
          NFPA y otras. Identificamos las necesidades del entorno empresarial y
          optamos por brindarle herramientas y técnicas avanzadas.
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <img
          className="w-[80px] h-40 text-red-800"
          src="./src/assets/iconos/book.svg"
          alt=""
        />
        <h2 className="text-center text-xl text-gray-900 font-medium my-2">
          CAPACITACIÓN IN COMPANY​
        </h2>
        <p>
          ELITEISO ofrece la modalidad In Company, Programas de capacitación “a
          medida”, contenidos personalizados y adecuados a las necesidades de su
          organización.
        </p>
      </div>

      <div className=" flex flex-col items-center">
        <img
          className="w-[80px] h-40 text-red-800"
          src="./src/assets/iconos/book.svg"
          alt=""
        />
        <h2 className="text-center text-xl text-gray-900 font-medium my-2">
          CONSULTORÍA Y ASESORÍA ISO
        </h2>
        <p>
          IMPLEMENTACIONES ISO 9001 – 14001 – 45001 – 22000 – 27001 – 55001 y
          Otras. ELITEISO le brinda un servicio de asesoramiento personalizado
          basado en la experiencia de nuestros profesionales enfocados en
          optimizar el resultado.
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <img
          className="w-[80px] h-40 text-red-800"
          src="./src/assets/iconos/book.svg"
          alt=""
        />
        <h2 className="text-center text-xl text-gray-900 font-medium my-2">
          CONSULTORÍA Y ASESORÍA
        </h2>
        <p>
          GESTIÓN EMPRESARIAL – CONTROL DE GESTIÓN – KPIs – CUADRO DE MANDO
          INTEGRAL Consultoría enfocada en la Rentabilidad, Sostenibilidad y
          Crecimiento.
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <img
          className="w-[80px] h-40 text-red-800"
          src="./src/assets/iconos/book.svg"
          alt=""
        />
        <h2 className="text-center text-xl text-gray-900 font-medium my-2">
          AUDITORÍAS ISO
        </h2>
        <p>
          Ejecución de auditorías internas, asesoramiento en auditorías externas
          y de certificación así también, auditorías de segunda parte.
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <img
          className="w-[80px] h-40 text-red-800"
          src="./src/assets/iconos/book.svg"
          alt=""
        />
        <h2 className="text-center text-xl text-gray-900 font-medium my-2">
        CONTENIDOS MULTIMEDIA EMPRESARIAL
        </h2>
        <p>
        Nuestro servicio de Contenidos multimedia está diseñado exclusivamente para los procesos comunicativos de su organización.
        </p>
      </div>
    </div>
  );
};
