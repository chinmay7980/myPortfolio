/** Subtle fixed grid background for the entire page. */
export function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-grid-fade" />
  );
}
