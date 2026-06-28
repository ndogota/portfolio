/**
 * Lets the `reboot` command ask the boot overlay to replay, without prop
 * drilling between two client components.
 */

const listeners = new Set<() => void>()

export function onReboot(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function requestReboot(): void {
  listeners.forEach((listener) => listener())
}
