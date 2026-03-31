declare module 'gsap-trial/SplitText' {
  interface SplitTextConfig {
    type?: string;
    charsClass?: string;
    wordsClass?: string;
    linesClass?: string;
    linesEase?: string | Function;
    [key: string]: any;
  }

  interface SplitTextInstance {
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    [key: string]: any;
  }

  export class SplitText {
    constructor(target: string | Element | (string | Element)[], config?: SplitTextConfig);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    [key: string]: any;
  }
}
