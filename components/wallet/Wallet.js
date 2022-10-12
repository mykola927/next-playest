/* eslint-disable @next/next/no-img-element */
const Wallet = () => {
  const walletBtn = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 10px",
    gap: "8px",
    width: "180px",
    height: "50px",
    background: "linear-gradient(120.5deg, #6680FF 2.71%, #05E8C2 96.76%)",
    boxShadow:
      "0px 0px 16px rgba(102, 128, 255, 0.5), 0px 0px 12px rgba(21, 195, 244, 0.5)",
    borderRadius: "10px",
    flex: "none",
    order: 0,
    flexGrow: 0,
  };

  const walletText = {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "22px",
    color: "white",
    flex: "none",
    order: 1,
    flexGrow: 0,
  };

  return (
    <div>
      <div className="walletBtn">
        <img src="/assets/image/wallet.png" alt="" />
        <p className="walletText">Connect Wallet</p>
      </div>
      <style jsx>{`
        .walletBtn {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 12px 10px;
          gap: 8px;
          width: fit-content;
          height: 38px;
          background: linear-gradient(120.5deg, #6680ff 2.71%, #05e8c2 96.76%);
          boxshadow: 0px 0px 16px rgba(102, 128, 255, 0.5),
            0px 0px 12px rgba(21, 195, 244, 0.5);
          border-radius: 10px;
          flex: none;
          order: 0;
          flex-grow: 0;
        }
        .walletText {
          display: flex;
          align-items: center;
          text-align: center;
          font-family: Inter;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          color: white;
          flex: none;
          order: 1;
          flex-grow: 0;
        }

        @media screen and (max-width: 768px) {
          .walletText {
            display: none;
          }
        }
        @media screen and (max-width: 375px) {
          .walletBtn {
            padding: 0.3rem;
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Wallet;
