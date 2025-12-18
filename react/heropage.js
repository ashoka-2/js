import HeroLeft from "./heroleft.js"
import HeroCenter from "./heromid.js"
import HeroRight from "./heroright.js"

const Hero = function(){
    return React.createElement("section", { id: "hero" }, [HeroLeft(), HeroCenter(),HeroRight()])
}

export default Hero