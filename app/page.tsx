import { Navbar } from "@/components/navbar";
import { AboutLocation, FeatureCta, Footer, Hero, IPhoneRepairs, Products, Services } from "@/components/sections";
import { GoogleReviews } from "@/components/google-reviews";
import { MotionEffects } from "@/components/motion-effects";

export default function Home() {
  return <><MotionEffects /><Navbar /><main><Hero /><IPhoneRepairs /><Services /><FeatureCta /><Products /><GoogleReviews /><AboutLocation /></main><Footer /></>;
}
