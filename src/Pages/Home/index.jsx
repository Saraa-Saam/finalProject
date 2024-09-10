import MainSlider from "./../../Components/MainSlider";
import CategorySlider from "./../../Components/CategorySlider";
import Products from "../Products";

export default function Home() {
    return (
        <div className="container">
            <MainSlider />
            <CategorySlider />
            <Products />
        </div>
    );
}
