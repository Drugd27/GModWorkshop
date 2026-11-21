
import AddonsData from "./addons.json";

export default function Browse({ query }) {
    const addons = AddonsData.addons;

    const filteredAddons = addons.filter((addon) =>
        addon.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section className="browser">
            <div className="row">
                {filteredAddons.map((addon) => (
                    <div className="col-sm-3" key={addon.id}>
                        <div className="addon-card">
                            <img src={addon.thumbnail} alt={addon.name} />
                            <h5>{addon.name}</h5>
                            <p><b>Autor: </b> {addon.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
