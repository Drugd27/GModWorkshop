export default function Filters({ query, setQuery }) {

    return(
        <section className="filters">
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Wpisz nazwę addona...'/>
                
                    <h6>Wybierz typ dodatku:</h6>
                    <ul id="typeList">
                        <li>
                            <input type='checkbox'  name='maps' class='btn-check' />
                            <label class='btn' htmlFor='maps'>Mapy</label>
                        </li>
                        <li>
                            <input type='checkbox'  name='wep' class='btn-check' />
                            <label class='btn' htmlFor='wep'>Bronie</label>
                        </li>
                        <li>
                            <input type="checkbox"  name="veh" class='btn-check' /> 
                            <label class='btn' htmlFor='veh'>Pojazdy</label>
                        </li>
                        <li>
                            <input type="checkbox"  name="mdl" class='btn-check' /> 
                            <label class='btn' htmlFor='mdl'>Modele</label>
                        </li>
                        <li>
                            <input type="checkbox"  name="npc"  class='btn-check' />
                            <label class='btn' htmlFor='npc'>NPC</label>
                        </li>
                        <li>
                            <input type="checkbox"  name="tools" class='btn-check' />
                            <label class='btn' htmlFor='tools'>Narzędzia</label>
                        </li>
                        
                    </ul>
                    
            </form>
        </section>
    ) 

}