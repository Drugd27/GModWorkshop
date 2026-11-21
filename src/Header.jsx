export default function ShowHeader() {
    return(
        <header className="page">
            <div className="main-header">
                <div className="row">
                    <img src="/Garry's_Mod_logo.png" alt="Logo GModa"/>
                    <h2>Warsztat do gry Garry's Mod</h2>
                </div>
                <div className="row">
                    <p>Odkrywaj addony stworzone przez społeczność</p>
                    <a href="https://wiki.facepunch.com/gmod/Workshop_Addon_Creation" target="_blank">
                        <p id="addonLink">Stań się twórcą addonów!</p>
                    </a>
                </div>
                
               
            </div>
        </header>
    )
        
}