/**
 * Tiny pub/sub that lets the hero scramble wait for the boot sequence to
 * finish without prop drilling. Survives the race where the boot completes
 * before a subscriber mounts by replaying immediately once `ready` is set.
 */

let ready = false
const listeners = new Set<() => void>()

export function markReady(): void {
  if (ready) return
  ready = true
  listeners.forEach((listener) => listener())
}

export function onReady(listener: () => void): () => void {
  if (ready) {
    listener()
    return () => {}
  }
  listeners.add(listener)
  return () => listeners.delete(listener)
}
