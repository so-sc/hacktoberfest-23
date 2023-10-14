// "use client";
// import Image from "next/image";
// import TypingAnimation from "@/components/TextAnimation/TextType";
// import styles from "@/components/About/About.module.css";

// interface CardProps {
//   name: string;
//   description: string;
//   src: string;
// }

// export default function Rewards() {
//   const images = [
//     {
//       src: "/assets/icons/01@1x.png",
//       alt: "logo",
//       className: `w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} md:mt-[10rem] mt-[55rem] absolute`,
//     },
//     {
//       src: "/assets/icons/06@1x.png",
//       alt: "logo",
//       className: `w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute right-0 md:mt-[40rem] mt-[15rem]`,
//     },
//   ];
//   return (
//     <div>
//       {/* <div className="-z-20">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={image.alt}
//             className={image.className}
//           />
//         ))}
//       </div> */}
//       <div className="md:px-20 md:pt-0 md:mb-20 px-10 lg:px-32">
//         <h1 className="my-11 py-5 md:py-10 text-center text-4xl md:text-5xl lg:text-5xl font-jbExtrabold">
//           <TypingAnimation message="Judges" />
//         </h1>
//         {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
//           <Card
//             name="Shailesh Shetty"
//             description="Head of Department - DS, SIT"
//             src="https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
//           />
//           <Card
//             name="Varshaa Shetty"
//             description="Vice President of SOSC"
//             src="https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
//           />
//           <Card
//             name="Tejas Nayak B"
//             description="General Secretary of SOSC"
//             src="https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
//           />
//         </div> */}
//         <div className="justify-center pb-20 flex items-center">
//           <div className="max-w-4xl bg-[#0f0913] rounded-2xl transition duration-300 underline-offset-8">
//             <div className="h-full px-10 sm:px-20 bg-[#d1f2f9] bg-opacity-5 rounded-3xl overflow-hidden">
//               <div className="font-gothamL p-6">
//                 <h1 className="title-font text-2xl font-jbBold text-center">
//                   Revealing Soon
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Card({ name, description, src }: CardProps) {
//   return (
//     <div className="hover:scale-[101%] transition duration-200">
//       <div className="mt-5 p-0.5 rounded-2xl hover:drop-shadow-[0_0_0.2rem_#d2b863] bg-gray-600 font-jbMedium hover:bg-gradient-to-tr from-[#ec4237] via-[#d2b863] to-[#33b6d8] transition duration-300">
//         <div className=" bg-[#0f0913] rounded-2xl hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8">
//           <div className="h-full bg-[#d1f2f9] bg-opacity-5 rounded-2xl overflow-hidden">
//             <Image
//               height={500}
//               width={500}
//               className="md:h-80 w-full object-cover object-center"
//               src={src}
//               alt="img"
//             />
//             <div className="font-gothamL p-6">
//               <h1 className="title-font text-xl font-jbBold mb-3">{name}</h1>
//               <p className="leading-relaxed mb-3">{description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// Existing code

import Image from "next/image";
import TypingAnimation from "@/components/TextAnimation/TextType";
import { judges } from "../constants";
import styles from "@/components/About/About.module.css";

interface CardProps {
  name: string;
  description: string;
  src: string;
}

export default function Judges() {
  const images = [
    {
      src: "/assets/icons/01@1x.png",
      alt: "logo",
      className: `w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float} md:mt-[10rem] mt-[55rem] absolute`,
    },
    {
      src: "/assets/icons/06@1x.png",
      alt: "logo",
      className: `w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float1} absolute right-0 md:mt-[40rem] mt-[15rem]`,
    },
  ];

  return (
    <div>
      {/* <div className="-z-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div> */}
      <div className="md:px-20 md:pt-0 md:mb-20 px-10 lg:px-32">
        <h1 className="my-11 py-5 md:py-10 text-center text-4xl md:text-5xl lg:text-5xl font-jbExtrabold">
          <TypingAnimation message="Judges" />
        </h1>
        {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {judges.map((judge) => (
            <Card
              key={judge.name}
              name={judge.name}
              description={judge.description}
              src={judge.src}
            />
          ))}
        </div> */}
        <div className="justify-center pb-20 flex items-center">
          <div className="max-w-4xl bg-[#0f0913] rounded-2xl transition duration-300 underline-offset-8">
            <div className="h-full px-10 sm:px-20 bg-[#d1f2f9] bg-opacity-5 rounded-3xl overflow-hidden">
              <div className="font-gothamL p-6">
                <h1 className="title-font text-2xl font-jbBold text-center">
                  Revealing Soon
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ name, description, src }: CardProps) {
  return (
    <div className="hover:scale-[101%] transition duration-200">
      <div className="mt-5 p-0.5 rounded-2xl hover:drop-shadow-[0_0_0.2rem_#d2b863] bg-gray-600 font-jbMedium hover:bg-gradient-to-tr from-[#ec4237] via-[#d2b863] to-[#33b6d8] transition duration-300">
        <div className=" bg-[#0f0913] rounded-2xl hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8">
          <div className="h-full bg-[#d1f2f9] bg-opacity-5 rounded-2xl overflow-hidden">
            <Image
              height={500}
              width={500}
              className="md:h-80 w-full object-cover object-center"
              src={src}
              alt="img"
            />
            <div className="font-gothamL p-6">
              <h1 className="title-font text-xl font-jbBold mb-3">{name}</h1>
              <p className="leading-relaxed mb-3">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
