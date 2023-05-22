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

      <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className=" flex flex-col basis-1/2 gap-3 h-96">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="flex basis-1/2 gap-3">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
