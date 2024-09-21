export function Page({objIconPro, objImgPro, objGifPro}) {

    const tg = objIconPro.tg,
           x =  objIconPro.x,
           ray = objIconPro.ray,
           dext = objIconPro.dext,
           dexs = objIconPro.dexs;

    const logo1 = objImgPro.logo1,
          logo2 = objImgPro.logo2,
          logo3 = objImgPro.logo3;

    const gif1 = objGifPro.gif1,
          gif2 = objGifPro.gif2,
          gif3 = objGifPro.gif3,
          gif4 = objGifPro.gif4,
          gif5 = objGifPro.gif5,
          gif6 = objGifPro.gif6,
          gif7 = objGifPro.gif7;

    return(
        <div>
            <header className="socialLink">
                <span>
                    <a href="https//t.me/realwawacto" target="_blank"><img src={tg} alt="telegram link"></img></a>   
                </span>
                <span>
                    <a href="https://x.com/wawa_cto" target="_blank"><img src={x} alt="twitter link"></img></a>
                </span>
                <span>
                    <a href="https://pump.fun/8Sk2EJ9oo25b7Mmf4qd5gJw6z3738AXvAbkuSSpQpump" target="_blank"><img src={ray} alt="pumpfun buy link"></img></a>
                </span>
                <span>
                    <a href="https://www.dextools.io/app/en/tron/pair-explorer/8Sk2EJ9oo25b7Mmf4qd5gJw6z3738AXvAbkuSSpQpump" target="_blank"><img src={dext} alt="dextools link"></img></a>
                </span>
                <span>
                    <a href="https://dexscreener.com/solana/8Sk2EJ9oo25b7Mmf4qd5gJw6z3738AXvAbkuSSpQpump" target="_blank"><img src={dexs} alt="dexscreener link"></img></a>
                </span>
            </header>
            <main className="bodySection">
                <div className="logoText">
                    <h2>Yo, Welcome to $Wawa's World!</h2>
                    <div>
                        <span>
                            <img src={logo1} alt="Capy official Logo"></img>
                        </span>
                    </div>
                    <h4>Wawa's on solana</h4>
                </div>
                <div className="caSection">
                    <div>
                        <h4>CA:</h4>
                        <p>8Sk2EJ9oo25b7Mmf4qd5gJw6z3738AXvAbkuSSpQpump</p>
                    </div>
                </div>
                <div className="aboutSection">
                    <div className="about">
                        {/* <span>
                            <img src={logo2} alt="about pic"></img>
                        </span> */}
                        <h4>
                            Why did the sneaky Wawa cat jump into $wawa? 
                            Saw the market bounce and said, "Purrfect timing!" 
                            Chasing those moonshots, but always lands on its feet. 
                            Hissed at FUD, held tight to its $wawa bags. 
                            Diversified into $wawa, $wawa, and $wawa. 
                            Now it lounges in the crypto sun, smug and unbothered!
                        </h4>
                        {/* <span>
                            <img src={logo3} alt="about pic 2"></img>
                        </span> */}
                    </div>
                    <div className="buyButton">
                        <button>
                            <a href="https://pump.fun/8Sk2EJ9oo25b7Mmf4qd5gJw6z3738AXvAbkuSSpQpump" target="_blank">Buy $WAWA</a> 
                        </button>
                    </div>
                </div>
                <div className="memeSection">
                    <h4>Everyone loves $WaWA. $WaWa is cute af.</h4>
                    <div className="memePic">
                        <span>
                            <img src={gif1} alt="Wawa pic"></img>
                        </span>
                        <span>
                            <img src={gif3} alt="Wawa pic"></img>
                        </span>
                        <span>
                            <img src={gif4} alt="Wawa pic"></img>
                        </span>
                        <span>
                            <img src={gif5} alt="Wawa pic"></img>
                        </span>
                        <span>
                            <img src={gif6} alt="Wawa pic"></img>
                        </span>
                        <span>
                            <img src={gif7} alt="Wawa pic"></img>
                        </span>
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2024 Wawa. All rights reserved.</p>
            </footer>
        </div>
    );
}
