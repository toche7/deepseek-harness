import type { IconProps } from './icons/props.ts'

/** Native viewBox of {@link FISH_LOGO_PATH} (width and height in user units). */
export const FISH_LOGO_VIEWBOX = { width: 23.16, height: 17.04 }

/** The fish silhouette path data, exported for consumers that compose their own svg (entrance effects, masks) around the same geometry. */
export const FISH_LOGO_PATH = 'M50 2 A48 48 0 1 0 50 98 A48 48 0 1 0 50 2 Z'

/**
 * Render the CBTU logo.
 * @param props.size - width in px (default 24).
 * @param props.className - extra class for layout placement.
 * @returns the logo svg (aria-hidden; pair with the wordmark for accessibility).
 */
export function FishLogo({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" fill="#3b68b8" />
      <path
        d="M 28 50 C 30 50, 36 28, 50 28 C 64 28, 70 50, 72 50"
        stroke="white"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="50" cy="73" r="9.5" fill="white" />
    </svg>
  )
}
