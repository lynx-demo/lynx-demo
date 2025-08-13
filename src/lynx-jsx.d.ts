declare namespace JSX {
  interface IntrinsicElements {
    input: {
      className?: string
      value?: string
      placeholder?: string
      bindinput?: (e: any) => void
      focus?: boolean
    }
  }
}