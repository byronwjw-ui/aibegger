import Slide from "./Slide";
import { slides } from "@/content/slides";

export default function SlideDeck() {
  return (
    <div className="snap-y snap-mandatory">
      {slides.map((s) => (
        <Slide key={s.page} {...s} />
      ))}
    </div>
  );
}
