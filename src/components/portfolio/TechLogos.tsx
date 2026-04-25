import type { SVGProps } from "react";

const base =
  "h-5 w-5 text-foreground/80 transition-colors duration-300 group-hover:text-foreground";

export function ReactLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={base}
      {...props}
    >
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...props}>
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M8 7v10M8 7l8 10" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 7v6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function FigmaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={base}
      {...props}
    >
      <path d="M8 3h4v6H8a3 3 0 1 1 0-6Z" />
      <path d="M12 3h4a3 3 0 0 1 0 6h-4V3Z" />
      <path d="M12 9h4a3 3 0 0 1 0 6h-4V9Z" />
      <path d="M8 9h4v6H8a3 3 0 1 1 0-6Z" />
      <path d="M8 15h4v3a3 3 0 1 1-4-3Z" />
    </svg>
  );
}

export function NodeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={base}
      {...props}
    >
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M9 10v4a2 2 0 0 0 4 0v-5" />
      <path d="M14 14a2 2 0 1 0 4 0c0-2-4-1-4-3a2 2 0 0 1 4 0" />
    </svg>
  );
}

export function MongoLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={base}
      {...props}
    >
      <path d="M12 2c2 4 5 7 5 11s-2 7-5 9c-3-2-5-5-5-9s3-7 5-11Z" />
      <path d="M12 2v20" />
    </svg>
  );
}

export function TailwindLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={base}
      {...props}
    >
      <path d="M3 13c1.5-4 4-5 7-3 2 1.3 3 1.3 5 0 1.5-1 3-1 4 0-1.5 4-4 5-7 3-2-1.3-3-1.3-5 0-1.5 1-3 1-4 0Z" />
      <path
        d="M2 19c1.5-4 4-5 7-3 2 1.3 3 1.3 5 0 1.5-1 3-1 4 0-1.5 4-4 5-7 3-2-1.3-3-1.3-5 0-1.5 1-3 1-4 0Z"
        opacity="0.6"
      />
    </svg>
  );
}
