import { motion } from "framer-motion";

const NotRegularAi = () => {
  return (
    <section className="section_gap">
      <div className="container">
        <div className="grid gap-14 md:gap-16 lg:gap-20 max-w-[1150px] mx-auto">
          <div className="grid gap-12 items-center text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold lg:text-5xl text-gradient"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, translateY: 0 },
                hidden: { opacity: 0, translateY: 100 },
              }}
            >
              This is not regular AI;
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={{
                visible: { opacity: 1, translateY: 0 },
                hidden: { opacity: 0, translateY: 100 },
              }}
              className=" text-black text-2xl md:text-3xl lg:text-[32px] lg:leading-snug"
            >
              It is a specialized intelligence trained to employ and adapt the
              most effective sales and marketing practices, maximizing results
              with precision and insight in the shortest time frames.
            </motion.p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            {[
              {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 40" fill="none" > <path d="M23.416 10C25.0439 10.3176 26.54 11.1138 27.7128 12.2866C28.8856 13.4594 29.6817 14.9554 29.9994 16.5833M23.416 3.33333C26.7981 3.70906 29.952 5.22362 32.3598 7.62834C34.7675 10.0331 36.286 13.185 36.666 16.5667M17.0443 23.1051C15.0417 21.1025 13.4604 18.8381 12.3004 16.422C12.2006 16.2142 12.1507 16.1103 12.1124 15.9788C11.9762 15.5116 12.074 14.9378 12.3574 14.5421C12.4371 14.4307 12.5324 14.3355 12.7229 14.145C13.3056 13.5623 13.5969 13.2709 13.7874 12.978C14.5057 11.8732 14.5057 10.4489 13.7874 9.34405C13.5969 9.05108 13.3056 8.75975 12.7229 8.17707L12.3981 7.85229C11.5124 6.96655 11.0695 6.52368 10.5939 6.28311C9.64792 5.80466 8.53082 5.80466 7.58488 6.28311C7.10924 6.52368 6.66638 6.96655 5.78064 7.85229L5.51791 8.11501C4.63521 8.99772 4.19386 9.43907 3.85678 10.0391C3.48274 10.705 3.21381 11.7391 3.21608 12.5028C3.21813 13.1911 3.35163 13.6614 3.61864 14.6022C5.05359 19.6578 7.76105 24.4284 11.741 28.4084C15.721 32.3884 20.4916 35.0958 25.5472 36.5308C26.488 36.7978 26.9584 36.9313 27.6466 36.9334C28.4103 36.9356 29.4445 36.6667 30.1103 36.2927C30.7104 35.9556 31.1517 35.5142 32.0344 34.6315L32.2971 34.3688C33.1829 33.4831 33.6257 33.0402 33.8663 32.5646C34.3448 31.6186 34.3448 30.5015 33.8663 29.5556C33.6257 29.0799 33.1829 28.6371 32.2971 27.7513L31.9724 27.4265C31.3897 26.8439 31.0983 26.5525 30.8054 26.3621C29.7006 25.6437 28.2763 25.6437 27.1714 26.3621C26.8785 26.5525 26.5871 26.8439 26.0045 27.4265C25.8139 27.6171 25.7187 27.7123 25.6073 27.7921C25.2116 28.0754 24.6379 28.1733 24.1706 28.037C24.0391 27.9987 23.9352 27.9488 23.7274 27.8491C21.3114 26.6891 19.0469 25.1077 17.0443 23.1051Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>`,
                title: "AI Phone Representative",
              },
              {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 40 40" fill="none" > <path d="M30 26.3948C32.4265 27.6138 34.5069 29.5699 36.0254 32.016C36.3261 32.5005 36.4764 32.7427 36.5284 33.078C36.6341 33.7596 36.168 34.5976 35.5332 34.8673C35.2208 35 34.8694 35 34.1666 35M26.6666 19.2204C29.1362 17.9931 30.8333 15.4448 30.8333 12.5C30.8333 9.55523 29.1362 7.00685 26.6666 5.7796M23.3333 12.5C23.3333 16.6421 19.9754 20 15.8333 20C11.6912 20 8.33331 16.6421 8.33331 12.5C8.33331 8.35786 11.6912 5 15.8333 5C19.9754 5 23.3333 8.35786 23.3333 12.5ZM4.26536 31.5639C6.92254 27.5743 11.1156 25 15.8333 25C20.551 25 24.7441 27.5743 27.4013 31.5639C27.9834 32.4379 28.2744 32.8749 28.2409 33.4332C28.2148 33.8679 27.9299 34.4 27.5826 34.6627C27.1365 35 26.523 35 25.296 35H6.37057C5.14359 35 4.5301 35 4.08404 34.6627C3.73672 34.4 3.45179 33.8679 3.42569 33.4332C3.39219 32.8749 3.68324 32.4379 4.26536 31.5639Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>`,
                title: "AI Workers",
              },
            ].map(({ title, icon }, index) => (
              <div
                key={index}
                className="p-px rounded-3xl bg-gradient-to-tr from-primary via-[#D103C0] to-primary overflow-hidden"
              >
                <div className="p-4 md:p-6 rounded-[23px] flex items-center gap-4 bg-white">
                  <div
                    className="flex items-center justify-center size-[72px] rounded-full text-[40px] bg-primary"
                    dangerouslySetInnerHTML={{ __html: icon }}
                  />

                  <p className="text-2xl text-black">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotRegularAi;
