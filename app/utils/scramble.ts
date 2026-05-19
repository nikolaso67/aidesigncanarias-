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

  // Lock height before scrambling to prevent layout shifts while random chars
  // wrap differently than the final text, which would shift sibling elements
  const lockedHeight = el.getBoundingClientRect().height;
  el.style.minHeight = `${lockedHeight}px`;
  el.style.maxHeight = `${lockedHeight}px`;
  el.style.overflow = "hidden";

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
      el.style.minHeight = "";
      el.style.maxHeight = "";
      el.style.overflow = "";
    },
  });
}
