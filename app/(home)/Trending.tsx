import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="px-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.
        </p>
      </div>

      {/* flex option */}
      {/* <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className=" flex flex-col basis-1/2 gap-3 h-96">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="flex basis-1/2 gap-3">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}

      {/* grid option */}
      {/* "sm:h-[600px]" - if I wanna directly 600px, let's use square brackets*/}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <div className="col-span-2 row-span-2 bg-wh-500"></div>
        <div className="col-span-2 row-span-1 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div>
        <div className="col-span-1 row-span-1 bg-wh-500"></div>
      </div>
    </section>
  );
};

export default Trending;
