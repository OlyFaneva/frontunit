import ScrollableSlider from "@/layouts/scrollablesliderTop";
import ScrollableSliderBottom1 from "@/layouts/scrollablesliderbottom2";
import ScrollableSliderBottom2 from "@/layouts/scrollablesliderbottom2";
import GroupProduit from "@/layouts/groupproduit";
import InspirationProduit from "@/layouts/inspirationproduit";
import SlideBar from "@/layouts/slidebar";
import SlideBarLayout from "@/layouts/slidebarlayout";
import BrandSection from "@/layouts/brandsection";

export default function Accueil() {


return <div className="h-auto bg-white ">
      <SlideBar />
      <SlideBarLayout />
      <BrandSection />
      <ScrollableSlider />
      <GroupProduit />
      <ScrollableSliderBottom1 />
      <ScrollableSliderBottom2 />
      <InspirationProduit />
</div>;
}

