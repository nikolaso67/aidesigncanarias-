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

  // For inline elements (e.g. gradient span) lock the parent block instead,
  // since min/max-height has no effect on inline elements.
  // Use offsetHeight (layout height) not getBoundingClientRect (visual/rotated height),
  // because GSAP may be mid-flight with rotation when scramble starts.
  const isInline = getComputedStyle(el).display === "inline";
  const lockTarget = (isInline ? el.parentElement : el) as HTMLElement;
  const lockedHeight = lockTarget.offsetHeight;
  lockTarget.style.minHeight = `${lockedHeight}px`;
  lockTarget.style.maxHeight = `${lockedHeight}px`;
  lockTarget.style.overflow = "hidden";

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
      lockTarget.style.minHeight = "";
      lockTarget.style.maxHeight = "";
      lockTarget.style.overflow = "";
    },
  });
}
