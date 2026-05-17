import gsap from "gsap";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";

function randChar(original: string): string {
  if (original === original.toUpperCase() && original !== original.toLowerCase()) {
    return UPPER[Math.floor(Math.random() * UPPER.length)];
  }
  return LOWER[Math.floor(Math.random() * LOWER.length)];
}

export function scrambleText(el: HTMLElement, finalText: string, duration = 1.4) {
  const len = finalText.length;
  const obj = { progress: 0 };

  gsap.to(obj, {
    progress: 1,
    duration,
    ease: "power2.out",
    onUpdate() {
      let result = "";
      for (let i = 0; i < len; i++) {
        if (finalText[i] === " " || finalText[i] === "—") {
          result += finalText[i];
        } else {
          result += randChar(finalText[i]);
        }
      }
      el.textContent = result;
    },
    onComplete() {
      el.textContent = finalText;
    },
  });
}
