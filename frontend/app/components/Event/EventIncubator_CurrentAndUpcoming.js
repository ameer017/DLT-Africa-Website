import CurrentAndUpcoming from "../HomePage/CurrentAndUpcoming/CurrentAndUpcoming";


const EventIncubator_CurrentAndUpcoming = () => {
  return (
    <>
      <div className="hidden mb-[100px] w-full xl:w-[900px] mx-auto  md:block sm:w-full  ">
        <div className="bg-[#252A24] border border-gray-700 rounded-xl pl-[53px] pr-[110px] py-[32px] font-serif">
          <div className="flex">
            <div>
              <img
                src="/images/Frame.png"
                alt="speaker"
                className="gap-[5rem]"
                loading="lazy"
              />
            </div>
            <div className="text-[#fff] inline-flex flex-col gap-15">
              <h2 className="lg:text-[48px] md:text-[36px] font-[400] font-serif text-right">
                Incubators
              </h2>
              <h4 className="lg:text-[20px] md:text-[16px] font-[400] font-serif opacity-75 text-left ml-[100px]">
                Learn, build and showcase your skills alongside like-minded
                peers.
              </h4>
            </div>
          </div>
        </div>
      </div>

      
      <CurrentAndUpcoming/>
    </>
  );
};

export default EventIncubator_CurrentAndUpcoming;
