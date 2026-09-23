/**
 * Normaliza o ID de uma collection entry para um slug de URL amigável
 * Ex: "emagrecimento-saudavel/como-funciona-o-deficit-calorico.md" -> "como-funciona-o-deficit-calorico"
 * Ex: "calculadora-imc.md" -> "calculadora-imc"
 */
export function getSlug(id: string): string {
  return id.split('/').pop()?.replace(/\.[^/.]+$/, '') || id;
}
