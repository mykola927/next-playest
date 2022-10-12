/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="mb-5">
      <div
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          alignItems: "center",
          lineHeight: "15px",
          border: "1px solid rgba(209, 213, 219, 0.5)",
          borderRadius: "12px",
        }}
      >
        <button
          style={{
            width: "100%",
            position: "relative",
            textAlign: "left",
            padding: "10px",
            border: "none",
            background: "transparent",
            outline: "none",
            cursor: "pointer",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={toggle}
          type="button"
        >
          <p
            style={{
              width: "fit-content",
            }}
          >
            {props.title}
          </p>
          <span
            style={{
              width: "24px",
              height: "24px",
            }}
          >
            <img
              src="/assets/image/cyberlife/arrow_down.png"
              alt="arrow-down"
            />
          </span>
        </button>
      </div>
      <div
        style={{
          display: isShowing ? "block" : "none",
          padding: "5px",
          marginBottom: "10px",
        }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
