/* eslint-disable @next/next/no-img-element */
import React from "react";
import Accordion from "../accordian/Accordian";

function Summary() {
  return (
    <div>
      <div className="summary py-12">
        <div className="flex flex-row flex-wrap">
          <div className="basis-full lg:basis-1/2 px-4">
            <div className="pt-8">
              <h1 className="flex-wrap sm:flex-nowrap">
                <span className="mr-4">
                  <img
                    src="/assets/image/cyberlife/info-circle.png"
                    alt="info-circle"
                  />
                </span>
                <span>Description</span>
              </h1>
            </div>
            <div className="description mt-8">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                ipsum orci massa mauris tellus adipiscing risus quam. In nulla
                sed sit quis augue euismod maecenas risus. Sit risus, amet
                viverra lectus risus scelerisque elit. Odio semper massa nisi
                quisque fringilla sit. Facilisis odio habitant ut nulla
                scelerisque.
              </p>
              <p className="mt-8 text-justify">
                Sit risus, amet viverra lectus risus scelerisque elit. Odio
                semper massa nisi quisque fringilla sit. Facilisis odio habitant
                ut nulla scelerisque.
              </p>
            </div>
          </div>
          <div className="basis-full lg:basis-1/2 px-4">
            <div className="pt-8">
              <h1>
                <span className="mr-4">
                  <img
                    src="/assets/image/cyberlife/message-question.png"
                    alt="message-question"
                  />
                </span>
                FAQ
              </h1>
            </div>
            <div className="mt-8">
              <Accordion
                title="Kortor ipsum orci massa mauris tellus adipiscing risus quam?"
                content="this is content 1"
              />
              <Accordion
                title="Mauris tellus adipiscing risus quam?"
                content="this is content 2"
              />
              <Accordion
                title="Wdipiscing risus quam?"
                content="this is content 2"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .summary {
          height: fit-content;
        }
        .summary h1 {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 51px;
          display: flex;
          align-items: center;
          color: #ffffff;
        }
        .description {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 140%;
          color: #9ea7ac;
        }
        @media screen and (max-width: 400px) {
          .summary h1 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
}
export default Summary;
