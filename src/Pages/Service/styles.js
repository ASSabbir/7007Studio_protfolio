if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes borderGlow {
      0%, 100% {
        box-shadow: 0 0 15px rgba(220, 38, 38, 0.4),
                    inset 0 0 15px rgba(220, 38, 38, 0.1);
      }
      50% {
        box-shadow: 0 0 30px rgba(220, 38, 38, 0.6),
                    inset 0 0 20px rgba(220, 38, 38, 0.2);
      }
    }

    @keyframes borderScan {
      0% {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      25% {
        top: 0;
        left: auto;
        right: 0;
        width: 2px;
        height: 100%;
      }
      50% {
        top: auto;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 2px;
      }
      75% {
        top: 0;
        bottom: auto;
        left: 0;
        right: auto;
        width: 2px;
        height: 100%;
      }
      100% {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
    }
  `;
  if (!document.getElementById("card-animations")) {
    style.id = "card-animations";
    document.head.appendChild(style);
  }
}