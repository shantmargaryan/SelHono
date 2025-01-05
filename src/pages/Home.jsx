import SpecialHero from "/src/components/SpecialHero"
import Create from "/src/components/Create"
import About from "/src/components/About"
import Follow from "/src/components/Follow"
import News from "/src/components/News"
import Join from "/src/components/Join"





function Home() {
    return (
        <>
            <SpecialHero />
            <Create />
            <About />
            <Follow />
            <News />
            <Join />
        </>
    )
}

export default Home