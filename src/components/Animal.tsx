import type { Animal } from "../types/animal";

type Props = { animal: Animal };

export default function Animal({ animal }: Props) {
  return <li>{animal.name}</li>;
}
