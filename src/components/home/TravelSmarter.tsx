export default function TravelSmarter() {
  const leftlist = [
    {
      id: 1,
      text: "Luggage gets misplaced or stolen every day",
    },
    {
      id: 2,
      text: "Old tags expose your personal information",
    },
    {
      id: 3,
      text: "Most lost items never make it back",
    },
  ];
  const rightlist = [
    {
      id: 1,
      text: "Fully customizable QR designs",
    },
    {
      id: 2,
      text: "Private, secure communication",
    },
    {
      id: 3,
      text: "Works anywhere in the world",
    },
  ];

  return (
    <div className="bg-[#D5F334] lg:px-14 lg:py-20 w-full">
      <div className="flex flex-col items-start gap-8 relative left-0 w-full">
        <p className="text-[#0B0C1E] font-semibold text-2xl lg:text-6xl lg:max-w-sm">
          Travel More & Worry Less
        </p>
        <p className="text-[#0B0C1E] text-xl">
          <span className="">For travellers who love adventure</span> <br />
          <span className="font-light"> not losing their stuff</span>
        </p>

        <div className="flex flex-col items-start gap-8 lg:mt-5">
          {leftlist.map(({ id, text }) => (
            <div key={id} className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-[#0B0C1E] text-lg max-w-56 leading-tight">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end gap-8 right-0 w-full">
        <p className="text-[#0B0C1E] font-semibold text-2xl lg:text-6xl lg:max-w-lg text-end">
          Smarter Way to Protect Luggage
        </p>
        <p className="text-[#0B0C1E] text-xl text-end">
          <span className="">
            A simple QR tag that keeps your belongings safe,
          </span>{" "}
          <br />
          <span className="font-light"> private, and easy to find.</span>
        </p>

        <div className="flex flex-col items-start gap-8 lg:mt-5">
          {rightlist.map(({ id, text }) => (
            <div key={id} className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-full"></div>
              <p className="text-[#0B0C1E] text-lg leading-tight">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
