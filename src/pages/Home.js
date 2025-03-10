import Navbar from '../components/Navbar';
import '../styles/global.css';
import '../styles/home.css';
import Footer from '../components/Footer';


function Home() {
    return (
        <div className="home">
            <Navbar/>

            <main>
                <header>
                    <h1>Battleship Home</h1>
                </header>

                <h3>Welcome to the world of <span className="red-text">Battleship</span>!</h3>

                <p className="first-line">Lorem ipsum odor amet, consectetuer adipiscing elit. Diam accumsan ac
                    sociosqu; nullam dapibus ridiculus praesent blandit. Risus rutrum arcu sem purus molestie turpis
                    pellentesque ullamcorper. Metus eu aliquet sit gravida sodales. Varius parturient ex gravida,
                    vehicula taciti platea aenean lacinia. Metus quis potenti; arcu vitae fermentum cubilia magnis.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Diam accumsan ac sociosqu; nullam dapibus
                    ridiculus praesent blandit. Risus rutrum arcu sem purus molestie turpis pellentesque ullamcorper.
                    Metus eu aliquet sit gravida sodales. Varius parturient ex gravida, vehicula taciti platea aenean
                    lacinia. Metus quis potenti; arcu vitae fermentum cubilia magnis.</p>
                <p>Ornare sit dictumst malesuada aliquam aenean molestie vestibulum. Justo semper eleifend ridiculus
                    nascetur etiam. Mus pulvinar nam hac elementum euismod condimentum quisque. Odio suspendisse orci
                    montes tempor nam. Id sagittis viverra aliquet ultrices rutrum congue ut magnis. Auctor ligula
                    ornare taciti; ornare sodales eleifend tortor. Proin imperdiet sapien phasellus est; lacinia mattis
                    lacus maximus nisl. Blandit ligula tortor fringilla, tempor bibendum volutpat amet ut finibus.
                    Hendrerit amet dapibus integer congue rutrum lobortis ut eros.</p>
                <img
                    src="https://i5.walmartimages.com/asr/c6671817-39be-451b-a73b-f3462c6db844.5e01de4f6c352c381f05e9c83cc7d556.jpeg"
                    alt="Battle Ship"/>
            </main>

            <Footer/> {/* Include Footer here */}
        </div>
    );
}

export default Home;
