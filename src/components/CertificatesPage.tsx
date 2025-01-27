import React from "react";

const CertificatesPage = () => {
  const Certificates = [
    {
      name: "FreeCodeCamp",
      type: "Foundational C# with Microsoft Certification",
      link: "https://www.freecodecamp.org/certification/fcc705460d5-aa77-4f41-a297-73be8910c01c/foundational-c-sharp-with-microsoft",
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col justify-center p-16 items-center ">
      <h1 id="skills" className="font-bold text-3xl sm:text-4xl md:text-5xl">
        Certificates
      </h1>

      {Certificates.map((Certificate, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-6 border-l-4 border-accent bg-white shadow-lg rounded-lg hover:shadow-xl hover:scale-[1.03] transition-transform transform duration-200 cursor-pointer mt-16"
        >
          {" "}
          <h2 className="text-2xl font-bold">{Certificate.name}</h2>{" "}
          <p className="text-lg italic">{Certificate.type}</p>
          <a
            className="text-center w-auto h-auto text-xl text-bold text-white hover:text-black bg-gray-400"
            href={Certificate.link}
          >
            Link
          </a>
        </div>
      ))}
    </div>
  );
};

export default CertificatesPage;
