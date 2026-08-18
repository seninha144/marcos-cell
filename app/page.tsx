import { Navbar } from "@/components/navbar";
import { AboutLocation, FeatureCta, Footer, Hero, Products, Services } from "@/components/sections";
import { MotionEffects } from "@/components/motion-effects";

export default function Home() {
  return <><MotionEffects /><Navbar /><main><Hero /><Services /><FeatureCta /><Products /><AboutLocation /></main><Footer /></>;
}
